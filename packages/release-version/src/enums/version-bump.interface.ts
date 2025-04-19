import type { VipReleaseType } from '@142vip/utils'
import type { VersionHooksEnum } from './version-hooks.enum'
import type { VersionProgressEventEnum } from './version-process-event.enum'

export interface VersionBumpOptions {
  /**
   * 预发行类型（例如 “alpha”、“beta”、“next”），默认：“alpha”
   */
  preid?: string

  /**
   * 是否生成CHANGELOG.md文档
   */
  changelog?: boolean

  /**
   * 当前版本号
   */
  currentVersion?: string

  /**
   * 指示是否创建 git 提交。可以设置为自定义提交消息字符串，默认是“true”
   * - 消息字符串中的任何 '%s' 占位符都将被替换为新版本号。
   * - 如果消息字符串不包含任何 '%s' 占位符，则新版本号将附加到消息中。
   */
  commit?: boolean | string

  /**
   * 指示是否标记 git 提交。可以设置为自定义标签字符串，默认是“true”
   * - 标签字符串可以是自定义字符串，例如 'v%s'
   * - 标签字符串中的任何 '%s' 占位符都将被替换为新版本号
   * - 如果标签字符串不包含任何 '%s' 占位符，则新版本号将附加到标签中
   */
  tag?: boolean | string

  /**
   * 是否推送 git commit 和 tag。默认：true
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
   * 支持用户确认提示，默认：true
   */
  confirm?: boolean

  /**
   * 指示是否绕过 git 提交钩子 （'git commit --no-verify'）。默认：false
   */
  skipGitVerify?: boolean

  /**
   * 工作目录，用作查找所有文件的基础。默认：process.cwd()
   */
  cwd?: string

  /**
   * 指示是否忽略version版本脚本。默认：false
   *
   */
  ignoreScripts?: boolean

  /**
   * 在 bumping 之后和 commit 之前执行其他命令
   */
  execute?: string

  /**
   * monorepo模式下，指定模块名包名
   */
  scopeName?: string

  /**
   * 递归地为 monorepo 加载文件。仅在发布monorepo主模块时有效，默认false
   */
  recursive?: boolean
}

/**
 * Information about the work that was performed by the `versionBump()` function.
 */
export interface VersionBumpResults {
  /**
   * T使用的发布类型，如果使用了自定义版本号，则为 'undefined' .
   */
  release?: VipReleaseType

  /**
   * package.json文件中对应的上一个版本号
   */
  currentVersion: string

  /**
   * 发布的新的版本号
   */
  newVersion: string

  /**
   * 用于 git 提交的提交消息，如果未创建 git 提交，则为“false”。
   * - 注意：这永远不会是空字符串。 它将始终至少包含新版本号。
   */
  commit: string | false

  /**
   * 用于 git 标签的标签名称，如果未创建 git 标签，则为 'false'。
   * - 注意：这永远不会是空字符串。 它将始终至少包含新版本号。
   */
  tag: string | false
}

/**
 * Information about the progress of the `versionBump()` function.
 */
export interface VersionBumpProgress extends VersionBumpResults {
  event: VersionProgressEventEnum
  script?: VersionHooksEnum
}
