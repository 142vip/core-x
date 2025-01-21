import type { ChangelogConfig, GitCommit } from 'changelogen'

export type ChangelogEnOptions = ChangelogConfig

export interface GitHubRepo {
  owner: string
  repo: string
}

export interface GitHubAuth {
  token: string
  url: string
}

export interface Commit extends GitCommit {
  resolvedAuthors?: GitAuthorInfo[]
}

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

export interface ChangelogOptions extends Partial<ChangelogEnOptions> {
  /**
   * Dry run. Skip releasing to GitHub.
   */
  dryRun?: boolean

  /**
   * Whether to include contributors in release notes.
   *
   * @default true
   */
  contributors?: boolean
  /**
   * Name of the release
   */
  name?: string
  /**
   * Mark the release as a draft
   */
  draft?: boolean
  /**
   * Mark the release as prerelease
   */
  prerelease?: boolean
  /**
   * GitHub Token
   */
  token?: string
  /**
   * Custom titles
   */
  titles?: {
    breakingChanges?: string
  }
  /**
   * Capitalize commit messages
   * @default true
   */
  capitalize?: boolean
  /**
   * Nest commit messages under their scopes
   * @default true
   */
  group?: boolean | 'multiple'
  /**
   * Use emojis in section titles
   * @default true
   */
  emoji?: boolean
  /**
   * GitHub base url
   * @default github.com
   */
  baseUrl?: string
  /**
   * GitHub base API url
   * @default api.github.com
   */
  baseUrlApi?: string

  /**
   * git commit scope name
   */
  scopeName?: string
}

/**
 * 作者信息
 */
export interface GitAuthorInfo {
  commits: string[]
  login?: string
  email: string
  name: string
}
