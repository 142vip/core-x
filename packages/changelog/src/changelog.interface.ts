import type { GitCommit, GitCommitAuthor } from './git'

export interface Commit extends GitCommit {
  resolvedAuthors?: GitAuthorInfo[]
}

/**
 * 作者信息
 */
export interface GitAuthorInfo extends GitCommitAuthor {
  commits: string[]
  login?: string
}

/**
 * changelog cli
 */
export interface ChangelogCliOptions {
  token?: string
  from?: string
  to?: string
  github?: string
  name?: string
  prerelease?: boolean
  output?: string
  scopeName?: string
  dryRun?: boolean
}

export enum SemverBumpType {
  major = 'major',
  premajor = 'premajor',
  minor = 'minor',
  preminor = 'preminor',
  patch = 'patch',
  prepatch = 'prepatch',
  prerelease = 'prerelease',
}

/**
 * 日志生成
 */
export interface ChangelogGenerateOptions {
  // 出现在版本发布记录中的git类型
  types: Record<string, {
    title: string
    semver?: SemverBumpType
  }>
  scopeMap: Record<string, string>

  titles: {
    breakingChanges?: string
  }
  // 标题
  header?: string

  scopeName?: string
  dryRun?: boolean
  output?: string

  contributors: boolean
  capitalize: boolean
  group: boolean | 'multiple'
  emoji: boolean

  // 发布的版本
  name: string
  baseUrlApi: string
  baseUrl: string
  from: string
  to: string
  // 是否预览版本
  prerelease: boolean
  repo: string
}
