import type { FairyHookCommand, FairyHooksConfig } from '../config'
import { unlinkSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join } from 'node:path'
import { VipExecutor, vipLogger, VipNodeJS } from '@142vip/utils'
import { loadFairyConfig } from '../config'

/** `fairy.config` → `hooks` 推荐键名 → `.git/hooks` 文件名 */
const FAIRY_GIT_HOOK_ALIASES: Record<string, string> = {
  precommit: 'pre-commit',
  commitmsg: 'commit-msg',
}

const GIT_HOOK_NAMES = new Set([
  'applypatch-msg',
  'pre-applypatch',
  'post-applypatch',
  'pre-commit',
  'pre-merge-commit',
  'prepare-commit-msg',
  'commit-msg',
  'post-commit',
  'pre-rebase',
  'post-checkout',
  'post-merge',
  'pre-push',
  'pre-receive',
  'update',
  'proc-receive',
  'post-receive',
  'post-update',
  'reference-transaction',
  'push-to-checkout',
  'pre-auto-gc',
  'post-rewrite',
  'sendemail-validate',
  'fsmonitor-watchman',
  'p4-changelist',
  'p4-prepare-changelist',
  'p4-post-changelist',
  'p4-pre-submit',
  'post-index-change',
])

const META_HOOK_KEYS = new Set(['preserveUnused'])

export function isGitHookName(name: string): boolean {
  return GIT_HOOK_NAMES.has(name)
}

export function resolveGitHookFileName(hookKey: string): string | undefined {
  if (META_HOOK_KEYS.has(hookKey)) {
    return undefined
  }
  const aliased = FAIRY_GIT_HOOK_ALIASES[hookKey]
  if (aliased != null) {
    return aliased
  }
  if (GIT_HOOK_NAMES.has(hookKey)) {
    return hookKey
  }
  return undefined
}

function isMetaGitHooksKey(key: string): boolean {
  return META_HOOK_KEYS.has(key)
}

/** 解析 `hooks.<name>` 要执行的 shell（默认值已在 `loadFairyConfig` 合并） */
export function resolveHookCommands(hookName: string): string[] {
  const hooks = resolveFairyHooksConfig()
  return normalizeHookCommands(hooks[hookName] as FairyHookCommand | undefined)
}

export function normalizeHookCommands(command: FairyHookCommand | undefined): string[] {
  if (command == null) {
    return []
  }
  if (Array.isArray(command)) {
    return command.map(item => item.trim()).filter(item => item.length > 0)
  }
  const trimmed = command.trim()
  return trimmed.length > 0 ? [trimmed] : []
}

/** 读取合并后的 `fairy.config` → `hooks` */
export function resolveFairyHooksConfig(): FairyHooksConfig {
  return loadFairyConfig().hooks ?? {}
}

/** 从 `hooks` 中拆出写入 `.git/hooks` 的配置 */
export function pickGitHooksConfig(hooks: FairyHooksConfig): Record<string, unknown> {
  const git: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(hooks)) {
    if (isMetaGitHooksKey(key)) {
      git[key] = value
      continue
    }
    const gitHookName = resolveGitHookFileName(key)
    if (gitHookName == null) {
      continue
    }
    if (typeof value === 'string') {
      git[gitHookName] = value
    }
    else if (Array.isArray(value)) {
      const parts = normalizeHookCommands(value)
      if (parts.length > 0) {
        git[gitHookName] = parts.join(' && ')
      }
    }
  }
  return git
}

interface SimpleGitHooksModule {
  setHooksFromConfig: (projectRoot: string, argv: string[]) => Promise<void>
}

function isSimpleGitHooksModule(loaded: unknown): loaded is SimpleGitHooksModule {
  if (loaded == null || typeof loaded !== 'object' || !('setHooksFromConfig' in loaded)) {
    return false
  }
  return typeof loaded.setHooksFromConfig === 'function'
}

function isModuleNotFound(error: unknown): boolean {
  return error != null && typeof error === 'object' && 'code' in error && error.code === 'MODULE_NOT_FOUND'
}

/** 从项目或 `@142vip/fairy-cli` 自身依赖解析，避免再维护一份模块声明文件 */
function loadSimpleGitHooks(cwd: string): SimpleGitHooksModule {
  const requireFromProject = createRequire(join(cwd, 'package.json'))
  const fromProject = readSimpleGitHooks(requireFromProject)
  if (fromProject != null) {
    return fromProject
  }
  const fairyPackageJson = requireFromProject.resolve('@142vip/fairy-cli/package.json')
  const fromFairy = readSimpleGitHooks(createRequire(fairyPackageJson))
  if (fromFairy == null) {
    throw new Error('未能加载 simple-git-hooks')
  }
  return fromFairy
}

function readSimpleGitHooks(load: NodeRequire): SimpleGitHooksModule | undefined {
  try {
    const loaded: unknown = load('simple-git-hooks')
    return isSimpleGitHooksModule(loaded) ? loaded : undefined
  }
  catch (error) {
    if (isModuleNotFound(error)) {
      return undefined
    }
    throw error
  }
}

function isCiEnvironment(): boolean {
  const ci = VipNodeJS.getProcessEnv('CI')
  return ci === 'true' || ci === '1'
}

export async function installFairyGitHooks(cwd: string = VipNodeJS.getProcessCwd()): Promise<boolean> {
  // 流水线不提交代码，写 .git/hooks 没有作用，也可能在只读 checkout 里失败
  if (isCiEnvironment()) {
    vipLogger.log('CI 环境跳过 git hooks 安装')
    return false
  }
  const hooks = resolveFairyHooksConfig()
  const gitHooks = pickGitHooksConfig(hooks)
  const hookKeys = Object.keys(gitHooks).filter(key => !isMetaGitHooksKey(key))
  if (hookKeys.length === 0) {
    return false
  }

  const { setHooksFromConfig } = loadSimpleGitHooks(cwd)

  const bridgePath = join(cwd, '.simple-git-hooks.fairy.cjs')
  writeFileSync(bridgePath, `module.exports = ${JSON.stringify(gitHooks, null, 2)}\n`, 'utf8')

  try {
    await setHooksFromConfig(cwd, ['node', 'simple-git-hooks', bridgePath])
  }
  finally {
    try {
      unlinkSync(bridgePath)
    }
    catch {
      vipLogger.log(`未能删除临时钩子桥接文件：${bridgePath}`)
    }
  }
  return true
}

/**
 * 执行 `hooks` 中某一阶段的命令（npm 生命周期 / 自定义名，非 git 写入）。
 * `postinstall` 结束后会自动尝试安装 git 钩子（若配置了 `precommit` / `commitmsg` 等）。
 */
export async function runFairyHook(hookName: string, cwd: string = VipNodeJS.getProcessCwd()): Promise<void> {
  const commands = resolveHookCommands(hookName)
  for (const command of commands) {
    await VipExecutor.commandStandardExecutor(command)
  }
  // 即使没有 postinstall 命令，也要把默认的 precommit / commitmsg 写进 .git/hooks
  if (hookName === 'postinstall') {
    await installFairyGitHooks(cwd)
  }
}
