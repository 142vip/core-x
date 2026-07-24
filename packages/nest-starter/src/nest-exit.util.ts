import { VipExecutor, VipNodeJS } from '@142vip/utils'

/** nest CLI 子进程 Node 启动参数（见 @nestjs/cli start.action spawnChildProcess） */
const NEST_CLI_CHILD_FLAG = '--enable-source-maps'

/**
 * 恢复 prompt 后的 stdin，避免 raw mode 残留导致终端异常
 */
export function restoreStdinAfterPrompt(): void {
  const stdin = VipNodeJS.getProcessStdin()
  if (!stdin.isTTY || typeof stdin.setRawMode !== 'function') {
    return
  }

  const ttyStdin = stdin as NodeJS.ReadStream & { isRaw?: boolean }
  if (!ttyStdin.isRaw) {
    return
  }

  try {
    stdin.setRawMode(false)
  }
  catch {
    // stdin 可能已关闭
  }
}

/**
 * nest start 会把 --enable-source-maps 放进 process.execArgv（不是 argv）
 */
export function isNestCliSpawnedChild(): boolean {
  const proc = VipNodeJS.getProcess()
  return proc.execArgv.includes(NEST_CLI_CHILD_FLAG)
    || VipNodeJS.getProcessArgv().includes(NEST_CLI_CHILD_FLAG)
}

/**
 * nest start 默认 --shell，进程树通常为：
 * nest CLI → sh -c "node --enable-source-maps ..." → node app
 * 仅 kill(ppid) 只会干掉中间 shell，watch 父进程仍存活。
 * 此处向上查找真正的 nest CLI 祖先并转发 SIGINT，使其置 shuttingDown 后退出。
 */
export function signalNestCliParentToShutdown(): void {
  const nestPid = findNestCliAncestorPid()
  if (nestPid != null) {
    try {
      VipNodeJS.getProcess().kill(nestPid, 'SIGINT')
    }
    catch {
      // 父进程可能已退出
    }
    return
  }

  // 未匹配到 nest 命令时：若确认是 nest 拉起的子进程，则回退通知直接父进程
  if (!isNestCliSpawnedChild()) {
    return
  }

  const parentPid = VipNodeJS.getProcess().ppid
  if (parentPid <= 1) {
    return
  }

  try {
    VipNodeJS.getProcess().kill(parentPid, 'SIGINT')
  }
  catch {
    // 父进程可能已退出
  }
}

/**
 * 短延迟，让 nest CLI 先收到 SIGINT 并置 shuttingDown，再退出子进程
 * （避免子进程先 exit 导致父进程仍挂在 watch 上）
 */
export function waitForParentShutdownSignal(ms = 200): void {
  const nodeBin = VipNodeJS.getProcess().execPath
  const script = `Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ${ms})`
  try {
    VipExecutor.execCommandSync(`"${nodeBin}" -e "${script}"`)
  }
  catch {
    // 延迟失败不影响退出流程
  }
}

/**
 * 配置选择 Ctrl+C / 启动失败时：通知 nest watch 父进程并退出
 */
export function exitWithNestCliShutdown(exitCode: number): never {
  restoreStdinAfterPrompt()
  signalNestCliParentToShutdown()
  waitForParentShutdownSignal()
  VipNodeJS.exitProcess(exitCode)
  return undefined as never
}

/**
 * 应用已启动后：nest watch 下优雅关闭超时则强制退出，避免需二次 Ctrl+C
 */
export function armNestWatchForceExit(timeoutMs = 1500): void {
  if (!isNestCliSpawnedChild()) {
    return
  }

  const forceExit = (): void => {
    const timer = setTimeout(() => {
      VipNodeJS.exitProcess(0)
    }, timeoutMs)
    timer.unref()
  }

  const proc = VipNodeJS.getProcess()
  proc.once('SIGINT', forceExit)
  proc.once('SIGTERM', forceExit)
}

function findNestCliAncestorPid(): number | undefined {
  let pid = VipNodeJS.getProcess().ppid
  for (let depth = 0; depth < 8 && pid > 1; depth++) {
    const command = readProcessCommand(pid)
    if (command != null && isNestCliProcessCommand(command)) {
      return pid
    }

    const parentPid = readProcessPpid(pid)
    if (parentPid == null || parentPid <= 1 || parentPid === pid) {
      break
    }
    pid = parentPid
  }
  return undefined
}

export function getNestCliAncestorPid(): number | undefined {
  return findNestCliAncestorPid()
}

function isNestCliProcessCommand(command: string): boolean {
  return /@nestjs\/cli\b/.test(command)
    || /[/\\](?:@nestjs\/cli\/.*\/)?bin[/\\]nest(?:\.js)?(?:\s|$)/.test(command)
    || /[/\\]nest(?:\.js)?(?:\s|$)/.test(command)
    || /\bnest\s+start\b/.test(command)
}

function readProcessCommand(pid: number): string | undefined {
  return runPs(`ps -p ${pid} -o command=`)
}

function readProcessPpid(pid: number): number | undefined {
  const output = runPs(`ps -p ${pid} -o ppid=`)
  if (output == null) {
    return undefined
  }
  const parentPid = Number(output)
  return Number.isFinite(parentPid) ? parentPid : undefined
}

function runPs(command: string): string | undefined {
  try {
    const text = VipExecutor.execCommandSync(command)
    return text.length > 0 ? text : undefined
  }
  catch {
    return undefined
  }
}
