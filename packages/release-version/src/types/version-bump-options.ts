import type { VersionBumpProgress } from './version-bump-progress'

/**
 * Options for the `versionBump()` function.
 */
export interface VersionBumpOptions {
  /**
   * 是否生成CHANGELOG.md文档
   */
  changelog?: boolean

  /**
   * The current version number to be bumpped.
   * If not provide, it will be read from the first file in the `files` array.
   */
  currentVersion?: string

  /**
   * The prerelease type (e.g. "alpha", "beta", "next").
   *
   * Defaults to "beta".
   */
  preid?: string

  /**
   * Indicates whether to create a git commit. Can be set to a custom commit message string
   * or `true` to use "release v".  Any `%s` placeholders in the message string will be replaced
   * with the new version number.  If the message string does _not_ contain any `%s` placeholders,
   * then the new version number will be appended to the message.
   *
   * Defaults to `true`.
   */
  commit?: boolean | string

  /**
   * Indicates whether to tag the git commit. Can be set to a custom tag string
   * or `true` to use "v".  Any `%s` placeholders in the tag string will be replaced
   * with the new version number.  If the tag string does _not_ contain any `%s` placeholders,
   * then the new version number will be appended to the tag.
   *
   * Defaults to `true`.
   */
  tag?: boolean | string

  /**
   * Indicates whether to push the git commit and tag.
   *
   * Defaults to `true`.
   */
  push?: boolean

  /**
   * Indicates whether the git commit should include ALL files (`git commit --all`)
   * rather than just the files that were modified by `versionBump()`.
   *
   * Defaults to `false`.
   */
  all?: boolean

  /**
   * Prompt for confirmation
   *
   * @default true
   */
  confirm?: boolean

  /**
   * Indicates whether to bypass git commit hooks (`git commit --no-verify`).
   *
   * Defaults to `false`.
   */
  noVerify?: boolean

  /**
   * The working directory, which is used as the basis for locating all files.
   *
   * Defaults to `process.cwd()`
   */
  cwd?: string

  /**
   * Indicates whether to ignore version scripts.
   *
   * Defaults to `false`.
   */
  ignoreScripts?: boolean

  /**
   * A callback that is provides information about the progress of the `versionBump()` function.
   */
  progress?: (progress: VersionBumpProgress) => void

  /**
   * Execute additional command after bumping and before commiting
   */
  execute?: string

  /**
   * monorepo package name
   */
  scopeName?: string

  /**
   * Bump the files recursively for monorepo. Only works without `files` option.
   *
   * @default false
   */
  recursive?: boolean
}
