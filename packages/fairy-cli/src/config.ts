import type { VipCommitLinterConfig } from '@142vip/commit-linter'
import { vipConfig } from '@142vip/utils'

export interface FairyInstallConfig {
  /** 默认是否在 `fa i` / `fa ci` 时追加 `--ignore-scripts` */
  ignoreScripts?: boolean
}

/** 单个钩子：一条 shell 或多条顺序执行 */
export type FairyHookCommand = string | string[]

/**
 * `fairy.config` → `hooks`：npm 生命周期、git 钩子、自定义阶段统一配置。
 * - git：`precommit`、`commitmsg` 等（写入 `.git/hooks` 时映射为 `pre-commit` / `commit-msg`）
 * - npm / 自定义：`preinstall`、`postinstall` 等（`fa i` / `fa ci` 执行；也可用 `fa install --hook-only`）
 */
export interface FairyHooksConfig {
  preserveUnused?: boolean | string[]
  [hookName: string]: FairyHookCommand | boolean | string[] | undefined
}

/** `fairy.config` → `scripts`：`fa run <name>` 的脚本表（优先级低于同名的 `package.json` → `scripts`） */
export type FairyScriptsConfig = Record<string, FairyHookCommand>

/**
 * `fairy.config` → `commit`：`fa commit` 的默认参数。
 * 命令行显式传入的同名参数优先；Commander 未传入时的内置默认值不会挡住这里。
 * `types` / `scopes` / `scopeGlobs` / `verify` 仍是校验规则：写了其中任一字段就不再读 `commit-linter.config`。
 */
export interface FairyCommitConfig extends Omit<VipCommitLinterConfig, 'commit'> {
  /** `-f,--config`：`commit-linter` 配置文件。有此字段时优先于本对象里的校验字段 */
  config?: string
  /** `-q,--quiet` */
  quiet?: boolean
  /** `-p,--push` */
  push?: boolean
  /** `-m,--message` */
  message?: string
  /** `-s,--scope`，可多条；有值时优先于 `scopeGlobs` */
  scope?: string[]
  /** `--dry-run` */
  dryRun?: boolean
  /** `--vip` */
  vip?: boolean
}

/** `fairy.config` → `release`：`fa release` 的默认参数。命令行显式传入优先 */
export interface FairyReleaseConfig {
  preid?: string
  /** `--tag` */
  tag?: string
  /** `--commit`：发版提交说明 */
  commit?: string
  /** `--push`，命令默认 `true` */
  push?: boolean
  /** `--skip-confirm` */
  skipConfirm?: boolean
  /** `-r,--recursive` */
  recursive?: boolean
  /** `--execute` */
  execute?: string
  /** `--package` */
  package?: string
  /** `--branch`，命令默认 `next` */
  branch?: string
  /** `--check-release` */
  checkRelease?: boolean
  /** `--check-branch`，可多条 */
  checkBranch?: string[]
  /** `-F,--filter`，可多条 */
  filter?: string[]
  /** `--prerelease` */
  prerelease?: boolean
  /** `--vip` */
  vip?: boolean
  /** `--dry-run` */
  dryRun?: boolean
}

/** `fairy.config` → `ai`：`fa ai` 的默认参数。命令行显式传入优先 */
export interface FairyAiConfig {
  /** `-t,--target`；未写时仍可用 `AGENT_SKILLS_TARGET`，再回退 cwd */
  target?: string
  /** `--check` */
  check?: boolean
  /** `--force` */
  force?: boolean
  /** `--dry-run` */
  dryRun?: boolean
}

/**
 * `fairy.config.*` 根配置（cosmiconfig 模块名 `fairy`）。
 * `commit` / `release` / `ai` 可选。写上之后可直接跑对应命令，不必每次重复参数。
 */
export interface FairyConfig {
  hooks?: FairyHooksConfig
  /** 项目脚本；与 `fairyDefaultConfig.scripts` 合并，且低于 `package.json` → `scripts` */
  scripts?: FairyScriptsConfig
  install?: FairyInstallConfig
  commit?: FairyCommitConfig
  release?: FairyReleaseConfig
  ai?: FairyAiConfig
}

/** cosmiconfig 模块名（`fairy.config.ts` / `.fairrc` 等） */
export const FAIRY_CONFIG_MODULE_NAME = 'fairy' as const

/**
 * 没有 `scripts/` 或目录为空时不失败。
 * `find` 只给已有文件加执行位。
 */
const fairyDefaultPreinstall = 'sh -c \'if [ -d ./scripts ]; then find ./scripts -maxdepth 1 -type f -exec chmod +x {} +; fi\''

/**
 * 下游仓库默认钩子。用户在 `hooks` 里写同名键则整段替换（数组不会与默认值按索引拼接）。
 * `postinstall` 无默认命令，由项目在配置里覆盖；本地 `fa i` / `fa ci` 仍会在该阶段末尾写入 git 钩子。
 */
const fairyDefaultHooks: FairyHooksConfig = {
  precommit: 'npx fa lint --fix',
  commitmsg: 'npx fa commit --quiet -s \'./apps/*\' -s \'./packages/*\'',
  preinstall: fairyDefaultPreinstall,
}

/**
 * `fa run` 默认脚本（低于 `package.json` → `scripts`）。
 * 检查代码用 `npx fa lint` / `npx fa lint --fix`，不放进本表，避免和子命令 `fa lint` 绕一层。
 */
const fairyDefaultScripts: FairyScriptsConfig = {
  'clean': 'npx fa clean --dist --vite --turbo --coverage --deps --all --quiet',
  'clean:cache': 'npx fa clean --vite --dist --turbo --coverage --all --quiet',
  'clean:dist': 'npx fa clean --dist --quiet --all',
  'clean:hooks': 'npx fa clean --git-hooks --all --quiet',
  'sync': 'npx fa sync --vip',
}

export const fairyDefaultConfig: FairyConfig = {
  hooks: fairyDefaultHooks,
  scripts: fairyDefaultScripts,
}

export function getFairyDefaultConfig(): FairyConfig {
  return fairyDefaultConfig
}

/**
 * 用户侧 `fairy.config.*` 的类型安全声明入口。
 *
 * @example
 * ```ts
 * export default defineFairyConfig({
 *   hooks: {
 *     postinstall: ['pnpm build:packages'],
 *   },
 * })
 * ```
 */
export function defineFairyConfig(config: FairyConfig): FairyConfig {
  return config
}

/** 默认配置与用户配置按键合并：同名 `hooks` / `scripts` 整段覆盖 */
function mergeFairyConfig(user?: FairyConfig): FairyConfig {
  if (user == null) {
    return fairyDefaultConfig
  }
  return {
    install: user.install ?? fairyDefaultConfig.install,
    hooks: {
      ...fairyDefaultConfig.hooks,
      ...user.hooks,
    },
    scripts: {
      ...fairyDefaultConfig.scripts,
      ...user.scripts,
    },
    // 命令默认参数整段保留，不与内置默认按字段拼接
    commit: user.commit,
    release: user.release,
    ai: user.ai,
  }
}

export interface FairyCommandDefaults<T extends object> {
  args: T
  /** 命令行没写、由 `fairy.config` 填上的字段 */
  fromConfig: (keyof T & string)[]
}

/**
 * 把 `fairy.config` 里的命令默认参数填进已解析的选项。
 * Commander 会给没写的 flag 填内置默认值，所以不能用「值是否为空」判断用户有没有传。
 * 只有 `getOptionValueSource === 'cli'` 才算用户手动传入，此时不覆盖。
 * `fromConfig` 非空时，调用方应打印等价终端命令。
 */
export function resolveFairyCommandDefaults<T extends object>(
  command: { getOptionValueSource: (key: string) => string | undefined },
  args: T,
  config: Partial<T> | undefined,
  keys: readonly (keyof T & string)[],
): FairyCommandDefaults<T> {
  if (config == null) {
    return { args, fromConfig: [] }
  }
  const merged: T = { ...args }
  const fromConfig: (keyof T & string)[] = []
  for (const key of keys) {
    if (command.getOptionValueSource(key) === 'cli') {
      continue
    }
    const value = config[key]
    if (value !== undefined) {
      merged[key] = value
      fromConfig.push(key)
    }
  }
  return { args: merged, fromConfig }
}

/** {@link resolveFairyCommandDefaults} 的参数结果 */
export function applyFairyCommandDefaults<T extends object>(
  command: { getOptionValueSource: (key: string) => string | undefined },
  args: T,
  config: Partial<T> | undefined,
  keys: readonly (keyof T & string)[],
): T {
  return resolveFairyCommandDefaults(command, args, config, keys).args
}

/** 从 cosmiconfig 加载用户配置，并与 {@link fairyDefaultConfig} 按键合并 */
export function loadFairyConfig(): FairyConfig {
  const loaded = vipConfig.loadConfig<FairyConfig>(FAIRY_CONFIG_MODULE_NAME)
  return mergeFairyConfig(loaded)
}
