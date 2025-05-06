import type { ChangelogCliOptions, ChangelogGenerateOptions } from '../enums'
import { VipConfig, VipGit } from '@142vip/utils'

export const CONFIG_DEFAULT_NAME: string = 'changelog'

/**
 * 默认配置
 */
export const ChangelogDefaultConfig = {
  scopeMap: {},
  header: '# Changelog\n\nAll notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.\n',
  // header: DEFAULT_CHANGELOG_HEADER,
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
 * 定义配置文件
 * - 合并默认配置
 */
export function defineChangelogConfig(config: ChangelogGenerateOptions): ChangelogGenerateOptions {
  return config
}

/**
 * 加载配置，读取配置文件
 */
export async function loadChangelogConfig() {
  return await VipConfig.loadCliConfig<ChangelogGenerateOptions>(CONFIG_DEFAULT_NAME, ChangelogDefaultConfig, {
    packageJson: true,
  })
}

/**
 * 加载配置
 * 将用户自定义配置和默认配置合并
 */
export async function parseCliOptions(cliOptions: ChangelogCliOptions): Promise<ChangelogGenerateOptions> {
  // 新写法
  const changelogConfig = await loadChangelogConfig()

  // cli配置合并
  const config = VipConfig.mergeCommanderConfig<ChangelogGenerateOptions>(changelogConfig, cliOptions)

  // 发布的版本
  if (config.to == null) {
    // 标签 > 分支  优化一下： 分支的头可能没有tag
    config.to = VipGit.getTagInHead() ?? VipGit.getCurrentBranch()
  }

  // release name
  if (config.name == null) {
    config.name = config.to
  }

  if (config.from == null) {
    config.from = VipGit.getLastMatchingTag(config.to) || VipGit.getRecentCommitHash()
  }

  // 仓库地址
  if (config.repo == null) {
    config.repo = VipGit.getGitHubRepo(config.baseUrl!)
  }

  // 是否是预览版本
  if (config.prerelease == null) {
    config.prerelease = VipGit.isPrerelease(config.to)
  }

  // todo 支持多个scope生成
  config.scopeName = cliOptions.scopeName

  return config
}
