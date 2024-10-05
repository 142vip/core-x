import process from 'node:process'
import type { ChangelogOptions } from '../types'

/**
 * 默认配置
 */
export const ChangelogDefaultConfig: ChangelogOptions = {
  scopeMap: {},
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
  tokens: {
    github: process.env.GITHUB_TOKEN || process.env.TOKEN,
  },
  contributors: true,
  capitalize: true,
  group: true,
  emoji: true,
}

/**
 * 定义配置文件
 */
export function defineChangelogDefaultConfig(config: ChangelogOptions) {
  return config
}
