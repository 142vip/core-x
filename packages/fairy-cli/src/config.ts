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
 * `fairy.config.*` 根配置（cosmiconfig 模块名 `fairy`）。
 */
export interface FairyConfig {
  hooks?: FairyHooksConfig
  /** 项目脚本；与 `fairyDefaultConfig.scripts` 合并，且低于 `package.json` → `scripts` */
  scripts?: FairyScriptsConfig
  install?: FairyInstallConfig
  /**
   * 可选。提供后整段覆盖 `commit-linter.config`（不再读取该文件）。
   * 未写出的字段仍用内置 `default-commit-linter.config.cjs`。
   * `fa commit -f` 优先于本字段。
   */
  commitLinter?: VipCommitLinterConfig
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

/** `fa run` 默认脚本（低于 `package.json` → `scripts`） */
const fairyDefaultScripts: FairyScriptsConfig = {
  'lint': 'npx fa lint',
  'lint:fix': 'npx fa lint --fix',
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
    // 不与默认值按字段拼接；有无该键由用户决定
    commitLinter: user.commitLinter,
  }
}

/** 从 cosmiconfig 加载用户配置，并与 {@link fairyDefaultConfig} 按键合并 */
export function loadFairyConfig(): FairyConfig {
  const loaded = vipConfig.loadConfig<FairyConfig>(FAIRY_CONFIG_MODULE_NAME)
  return mergeFairyConfig(loaded)
}
