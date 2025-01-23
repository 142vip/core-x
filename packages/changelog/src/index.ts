import { VipLodash } from '@142vip/utils/src'
import { changelogGenerate, changelogUpdate, sendGithubRelease } from './changelog'
import type { ChangelogGenerateOptions } from './changelog.interface'
import { ChangelogDefaultConfig } from './config'

export * from './changelog.interface'

/**
 * 工具函数导出
 */
export const ChangelogCli = {
  changelogGenerate,
  changelogUpdate,
  sendGithubRelease,
}

/**
 * 定义配置文件
 * - 合并默认配置
 */
export function defineChangelogDefaultConfig(config: ChangelogGenerateOptions): ChangelogGenerateOptions {
  return VipLodash.merge({}, ChangelogDefaultConfig, config)
}
