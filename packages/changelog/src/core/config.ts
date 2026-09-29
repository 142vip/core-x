import type { ChangelogCliOptions, ChangelogGenerateOptions } from './changelog.interface'
import { vipConfig, VipGit } from '@142vip/utils'

/** cosmiconfig 配置文件名 */
export const CONFIG_DEFAULT_NAME = 'changelog' as const

/** 新建 CHANGELOG.md 时的文件头 */
export const CONFIG_DEFAULT_HEADER = `# Changelog

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

` as const

/** 默认生成配置（可被 changelog 配置文件与 CLI 覆盖） */
export const ChangelogDefaultConfig = {
  scopeMap: {},
  header: CONFIG_DEFAULT_HEADER,
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
  prerelease: false,
}

/** 类型安全的 changelog 配置声明（供用户配置文件引用） */
export function defineChangelogConfig(config: ChangelogGenerateOptions): ChangelogGenerateOptions {
  return config
}

/** 从 cosmiconfig 加载用户配置，并与 `ChangelogDefaultConfig` 合并 */
export function loadChangelogConfig() {
  return vipConfig.loadCliConfig<ChangelogGenerateOptions>(CONFIG_DEFAULT_NAME, ChangelogDefaultConfig)
}

/**
 * 合并配置文件、CLI 参数，并补全 from / to / repo 等 Git 上下文
 */
export function parseCliOptions(cliOptions: ChangelogCliOptions): ChangelogGenerateOptions {
  const changelogConfig = loadChangelogConfig()
  const config = vipConfig.mergeCommanderConfig<ChangelogGenerateOptions>(changelogConfig, cliOptions)

  if (config.to == null) {
    config.to = VipGit.getTagInHead() ?? VipGit.getCurrentBranch()
  }

  if (config.name == null) {
    config.name = config.to
  }

  if (config.from == null) {
    config.from = VipGit.getLastMatchingTag(config.to) || VipGit.getRecentCommitHash()
  }

  if (config.repo == null) {
    config.repo = VipGit.getGitHubRepo(config.baseUrl!)
  }

  if (typeof cliOptions.prerelease === 'boolean') {
    config.prerelease = cliOptions.prerelease
  }
  else {
    config.prerelease = VipGit.isPrerelease(config.to)
  }

  config.scopeName = cliOptions.scopeName

  return config
}
