import { Buffer } from 'node:buffer'
import * as childProcess from 'node:child_process'
import { execSync } from 'node:child_process'
import { VipColor, VipConsole, VipLogger, VipNodeJS } from '@142vip/utils'
import { name, version } from '../../package.json'

type Command = string | string[]

export interface CmdResult {
  code?: number | null
  stdout: string
  stderr: string
  error?: Error
  cmd: string
}

/**
 * 同步执行命令，并返回结果
 */
async function execCommand(
  cmd: Command,
  opts?: Omit<childProcess.SpawnOptionsWithoutStdio, 'stdio' | 'cwd'>,
): Promise<CmdResult> {
  const executable = Array.isArray(cmd) ? cmd.join(';') : cmd
  const options: childProcess.SpawnOptionsWithoutStdio = {
    ...opts,
    stdio: 'pipe',
    cwd: VipNodeJS.getProcessCwd(),
  }

  try {
    const cmd = VipNodeJS.getProcessPlatform() === 'win32' ? 'cmd' : 'sh'
    const arg = VipNodeJS.getProcessPlatform() === 'win32' ? '/C' : '-c'
    const child = childProcess.spawn(cmd, [arg, executable], options)

    return new Promise((resolve) => {
      const stdoutList: string[] = []
      const stderrList: string[] = []

      if (child.stdout != null) {
        child.stdout.on('data', (data: string) => {
          if (Buffer.isBuffer(data))
            return stdoutList.push(data.toString())
          stdoutList.push(data)
        })
      }

      if (child.stderr != null) {
        child.stderr.on('data', (data) => {
          if (Buffer.isBuffer(data))
            return stderrList.push(data.toString())
          stderrList.push(JSON.stringify(data))
        })
      }

      const getDefaultResult = () => {
        const stderr = stderrList.join('\n')
        const stdout = stdoutList.join('\n')
        return { stdout, stderr, cmd: executable }
      }

      child.on('error', error => resolve({ ...getDefaultResult(), error }))
      child.on('close', code => resolve({ ...getDefaultResult(), code }))
    })
  }
  catch (error) {
    return Promise.reject(error)
  }
}

/**
 * 标准Linux命令执行器
 * - 支持打印结果
 * - 异步
 */
function commandStandardExecutor(cmd: Command) {
  const executable = Array.isArray(cmd) ? cmd.join('&&') : cmd
  const options: childProcess.SpawnOptionsWithoutStdio = {
    stdio: 'pipe',
    cwd: VipNodeJS.getProcessCwd(),
  }

  return new Promise((resolve, reject) => {
    const cmd = VipNodeJS.getProcessPlatform() === 'win32' ? 'cmd' : 'sh'
    const arg = VipNodeJS.getProcessPlatform() === 'win32' ? '/C' : '-c'
    const child = childProcess.spawn(cmd, [arg, executable], options)

    child.stdout.on('data', (data: string) => {
      if (Buffer.isBuffer(data)) {
        VipConsole.log(data.toString())
      }
    })

    child.stderr.on('data', (data) => {
      if (Buffer.isBuffer(data)) {
        VipConsole.log(data.toString())
      }
    })

    // 考虑进程非0退出
    child.on('close', (code) => {
      resolve(code)
    })

    // 出现错误
    child.on('error', (error) => {
      reject(error)
    })
  })
}

function execCommandSync(cmd: string, cwd?: string): string {
  return execSync(cmd, { encoding: 'utf8', cwd }).trim()
}

export interface ShellCommand {
  command: string
  description?: string
}

/**
 * 脚本执行器，执行shell命令
 */
async function execShell(commands: ShellCommand[] | string | ShellCommand) {
  // 全局日志
  const vipLog = VipLogger.getInstance()

  const projectName = VipColor.greenBright(`[${name}@${version}]`)

  let runCommands: ShellCommand[] = []
  if (typeof commands === 'string') {
    runCommands.push({
      command: commands,
    })
  }

  if (typeof commands === 'object') {
    // 批量执行
    if (Array.isArray(commands)) {
      runCommands = commands
    }
    else {
      runCommands.push(commands)
    }
  }

  // 批量执行
  for (const { command, description = '脚本' } of runCommands) {
    // 脚本命令打印
    vipLog.log(`【${description}】${command}`, {
      startLabel: `${projectName}执行的命令:`,
      endLabel: '',
    })

    // 同步执行，标准命令执行器
    await execCommand(command)
  }
}

/**
 * 执行器
 */
export const VipExecutor = {
  execCommandSync,
  execCommand,
  execShell,
  commandStandardExecutor,
}
