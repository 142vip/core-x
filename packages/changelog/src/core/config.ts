import process from 'node:process'
import {
  getCurrentGitBranch,
  getFirstGitCommit,
  getGitHubRepo,
  getLastMatchingTag,
  isPrerelease,
} from './git'
import type { ChangelogOptions, ResolvedChangelogOptions } from './types'

// const defaultOutput = 'CHANGELOG.md'
const defaultConfig: ChangelogOptions = {
  scopeMap: {},
  types: {
    feat: { title: '✨ Features', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🐛 Bug Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    build: { title: '📦 Build', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
  },
  titles: {
    breakingChanges: '🚨 Breaking Changes',
  },
  tokens: {
    github: process.env.GITHUB_TOKEN || process.env.TOKEN,
  },
  contributors: true,
  capitalize: true,
  group: true,
  emoji: true,
  // output: defaultOutput,
}

export async function resolveConfig(options: ChangelogOptions) {
  const { loadConfig } = await import('c12')
  const config = await loadConfig<ChangelogOptions>({
    name: '@142vip/changelog',
    defaults: defaultConfig,
    overrides: options,
    packageJson: '@142vip/changelog',
  }).then(r => r.config || defaultConfig)

  config.baseUrl = config.baseUrl ?? 'github.com'
  config.baseUrlApi = config.baseUrlApi ?? 'api.github.com'
  // 发布的版本
  config.to = config.to || await getCurrentGitBranch()
  // release name
  config.name = config.name ?? config.to
  config.from = config.from || await getLastMatchingTag(config.to) || await getFirstGitCommit()
  // @ts-expect-error backward compatibility
  config.repo = config.repo || config.github || await getGitHubRepo(config.baseUrl)

  // 是否是预览版本
  config.prerelease = config.prerelease ?? isPrerelease(config.to)

  // todo 支持多个scope生成
  config.scopeName = options.scopeName

  if (typeof config.repo !== 'string')
    throw new Error(`Invalid GitHub repository, expected a string but got ${JSON.stringify(config.repo)}`)

  return config as ResolvedChangelogOptions
}
