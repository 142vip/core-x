import type { CommitLinterOptions } from './commit.interface'
import { vipConfig } from '@142vip/utils'

/** cosmiconfig 模块名（`commit-linter.config.ts` / `.commit-linterrc` 等） */
export const CONFIG_DEFAULT_NAME = 'commit-linter' as const

/**
 * 配置文件形态：`commitLinter` 字段 + Monorepo 扫描 glob（仅 `fa commit` 使用）。
 */
export interface VipCommitLinterConfig extends CommitLinterOptions {
  /**
   * Monorepo 包路径 glob；由 fairy-cli 扫描 npm 包名并写入运行时 `scopes`。
   * 不传入 `commitLinter`。
   */
  scopeGlobs?: string[]
}

export const commitLinterDefaultConfig: VipCommitLinterConfig = {}

export function getCommitLinterDefaultConfig(): VipCommitLinterConfig {
  return commitLinterDefaultConfig
}

/**
 * 用户侧 `commit-linter.config.*` 的类型安全声明入口
 *
 * @example
 * ```ts
 * export default defineVipCommitLinterConfig({
 *   scopeGlobs: ['./packages/*'],
 *   scopes: ['README'],
 *   verify: (gitCommit) => !gitCommit.subject.includes('WIP'),
 * })
 * ```
 */
export function defineVipCommitLinterConfig(
  config: VipCommitLinterConfig,
): VipCommitLinterConfig {
  return config
}

/** 从 cosmiconfig 加载用户配置，并与默认项合并 */
export function loadCommitLinterConfig(): VipCommitLinterConfig {
  return vipConfig.loadCliConfig<VipCommitLinterConfig>(
    CONFIG_DEFAULT_NAME,
    commitLinterDefaultConfig,
  )
}
