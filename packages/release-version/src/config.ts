import type { ReleaseVersionCliOptions, ReleaseVersionOptions } from './releasex.interface'
import { vipConfig } from '@142vip/utils'

/** cosmiconfig 配置文件名（`releasex.config.ts` / `.releasexrc` 等） */
export const CONFIG_DEFAULT_NAME = 'releasex' as const

/** CLI 与 API 未覆盖选项时的默认发版行为 */
export const releaseVersionDefaultConfig: ReleaseVersionOptions = {
  commit: true,
  push: true,
  tag: true,
  recursive: false,
  skipGitVerify: false,
  confirm: true,
  ignoreScripts: false,
  all: false,
}

/**
 * 返回一份默认发版配置副本，供调用方安全修改（不污染 `releaseVersionDefaultConfig`）
 */
export function getReleaseVersionDefaultConfig(): ReleaseVersionOptions {
  return { ...releaseVersionDefaultConfig }
}

/**
 * 用户侧 `releasex.config.*` 的类型安全声明入口
 *
 * @example
 * ```ts
 * export default defineReleaseXConfig({ all: true, confirm: false })
 * ```
 */
export function defineReleaseXConfig(config: Partial<ReleaseVersionOptions>): Partial<ReleaseVersionOptions> {
  return config
}

/**
 * 从 cosmiconfig 加载用户配置，并与 `releaseVersionDefaultConfig` 合并
 */
export function loadReleaseVersionConfig(): ReleaseVersionOptions {
  return vipConfig.loadCliConfig<ReleaseVersionOptions>(CONFIG_DEFAULT_NAME, releaseVersionDefaultConfig)
}

/**
 * 合并默认配置、用户配置文件与 CLI 参数，得到完整的 `ReleaseVersionOptions`
 *
 * `mergeCommanderConfig` 以空对象为 merge 目标，不会改写 `releaseVersionDefaultConfig` 常量
 */
export function parseReleaseVersionCliOptions(cliOptions: ReleaseVersionCliOptions): ReleaseVersionOptions {
  const config = vipConfig.mergeCommanderConfig<ReleaseVersionOptions>(
    loadReleaseVersionConfig(),
    cliOptions,
  )

  if (cliOptions.yes) {
    config.confirm = false
  }

  return config
}
