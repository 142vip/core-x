import type { VipCommanderOptions, VipReleaseType } from '@142vip/utils'

/** `releaseVersion()` 进度事件 */
export enum VersionProgressEvent {
  GitCommit = 'git commit',
  GitTag = 'git tag',
  GitPush = 'git push',
  NpmScript = 'npm script',
}

/** `package.json` scripts 生命周期钩子 */
export enum VersionHooks {
  PreVersion = 'preversion',
  Version = 'version',
  PostVersion = 'postversion',
}

/** `releaseVersion` / CLI 入参 */
export interface ReleaseVersionOptions {
  /** 预发布标识（如 `alpha`），默认 CLI 为 `alpha` */
  preid?: string
  /** 是否生成 `CHANGELOG.md` */
  changelog?: boolean
  /** 覆盖 `@142vip/changelog` 的 GitHub Release 预发布标记 */
  changelogPrerelease?: boolean
  /** 指定当前版本（跳过从 `package.json` 读取） */
  currentVersion?: string
  /**
   * 是否创建 git commit；可为自定义 message
   * - `%s` 替换为新版本号；无 `%s` 时追加版本号
   */
  commit?: boolean | string
  /**
   * 是否创建 git tag；可为自定义 tag 模板（如 `v%s`）
   */
  tag?: boolean | string
  /** 是否 push commit / tag 到远程，默认 `true` */
  push?: boolean
  /** `git commit --all`（提交全部变更，不仅版本文件） */
  all?: boolean
  /** `true` 时发版前交互确认，默认 `true` */
  confirm?: boolean
  /** `git commit --no-verify` */
  skipGitVerify?: boolean
  /** 工作目录，默认 `process.cwd()` */
  cwd?: string
  /** 忽略 `preversion` / `version` / `postversion` 脚本 */
  ignoreScripts?: boolean
  /** 写入新版本号后、git commit 前执行的 shell 命令 */
  execute?: string
  /** Monorepo 子包 npm 名（CHANGELOG scope 过滤） */
  scopeName?: string
  /** 递归处理子目录 `package.json`（根发版场景） */
  recursive?: boolean
}

/** `releaseVersion()` 执行结果 */
export interface ReleaseVersionResults {
  /** 选用的 release 类型；自定义版本时为 `undefined` */
  release?: VipReleaseType
  /** 发版前版本号 */
  currentVersion: string
  /** 发版后版本号 */
  newVersion: string
  /** git commit message；未提交时为 `false` */
  commit: string | false
  /** git tag 名；未打 tag 时为 `false` */
  tag: string | false
}

/** 进度回调结构 */
export interface ReleaseVersionProgress extends ReleaseVersionResults {
  event: VersionProgressEvent
  script?: VersionHooks
}

/** `ReleaseVersionOperation` 归一化后的运行选项 */
export interface ReleaseVersionOperationOptions {
  commit?: {
    message: string
    skipGitVerify: boolean
    all: boolean
  }
  tag?: {
    name: string
  }
  push: boolean
  cwd: string
  ignoreScripts: boolean
  execute?: string
  currentVersion?: string
  changelog?: boolean
  changelogPrerelease?: boolean
  scopeName?: string
}

/** standalone CLI / `parseReleaseVersionCliOptions` 入参 */
export interface ReleaseVersionCliOptions extends VipCommanderOptions {
  all?: boolean
  preid?: string
  commit?: boolean | string
  tag?: boolean | string
  push?: boolean
  /** 跳过发版前确认（`-y` / `--yes`） */
  yes?: boolean
  recursive?: boolean
  changelog?: boolean
  skipGitVerify?: boolean
  ignoreScripts?: boolean
  currentVersion?: string
  execute?: string
  scopeName?: string
}

/** `ReleaseVersionOperation` 内部状态 */
export interface ReleaseVersionOperationState {
  release: VipReleaseType | undefined
  currentVersionSource: string
  currentVersion: string
  newVersion: string
  commitMessage: string
  tagName: string
}

export interface ReleaseVersionStatePatch extends Partial<ReleaseVersionOperationState> {
  event?: VersionProgressEvent
  script?: VersionHooks
}
