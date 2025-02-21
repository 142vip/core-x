import type { ChangelogCliOptions, ChangelogGenerateOptions } from './changelog.interface'
import { VipGit, VipLodash } from '@142vip/utils'

/**
 * 默认配置
 */
export const ChangelogDefaultConfig = {
  scopeMap: {},
  header: '# Changelog\n\nAll notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.\n',
  types: {
    feat: { title: '✨ Features', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🐛 Bug Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    build: { title: '📦 Build', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
    release: { title: '😏 Release Packages', semver: 'patch' },
  },
  titles: {
    breakingChanges: '🚨 Breaking Changes',
  },
  contributors: true,
  capitalize: true,
  group: true,
  emoji: true,
  baseUrl: 'github.com',
  baseUrlApi: 'api.github.com',
  prerelease: true,
}

/**
 * 加载配置
 * 将用户自定义配置和默认配置合并
 */
export async function mergeConfig(cliOptions: ChangelogCliOptions): Promise<ChangelogGenerateOptions> {
  const { loadConfig } = await import('c12')

  // 本地配置，形如：changelog.config.ts
  const changelogConfig = await loadConfig<ChangelogGenerateOptions>({
    // 配置文件名，eg: changelog.config.ts
    name: 'changelog',
    packageJson: true,
  }).then(c => VipLodash.merge({}, ChangelogDefaultConfig, c.config))

  // cli配置合并
  const config = VipLodash.merge({}, changelogConfig, cliOptions) as ChangelogGenerateOptions

  // 发布的版本
  if (config.to == null) {
    // 标签 > 分支
    config.to = VipGit.getTagInHead() ?? VipGit.getCurrentBranch()
  }

  // release name
  if (config.name == null) {
    config.name = config.to
  }

  if (config.from == null) {
    config.from = VipGit.getLastMatchingTag(config.to) || VipGit.getFirstCommitHash()
  }

  // 仓库地址 todo 地址
  if (config.repo == null) {
    config.repo = VipGit.getGitHubRepo(config.baseUrl!)
  }

  // 是否是预览版本
  if (config.prerelease == null) {
    config.prerelease = VipGit.isPrerelease(config.to)
  }

  // todo 支持多个scope生成
  config.scopeName = cliOptions.scopeName

  // if (typeof config.repo !== 'string')
  //   throw new Error(`无效的 GitHub 存储库，需要一个字符串，但实际repo参数是： ${VipJSON.stringify(config.repo)}`)

  // todo 处理这里的类型
  return config
}
