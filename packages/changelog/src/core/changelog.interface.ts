import type { VipCommanderOptions, VipSemverReleaseType } from '@142vip/utils'

// --- Git commit 解析 ---

/** Git 提交作者（来自 `git log` pretty 格式） */
export interface GitCommitAuthor {
  /** 作者显示名 */
  name: string
  /** 作者邮箱 */
  email: string
}

/** `git log` 解析后的原始提交记录 */
export interface GitCommitRaw {
  /** 提交标题（Conventional Commits 首行） */
  message: string
  /** 提交正文（首行之后的 body） */
  body: string
  /** 短 hash（`%h`） */
  shortHash: string
  /** 主作者信息 */
  author: GitCommitAuthor
}

/**
 * 提交描述中解析出的引用类型
 * - `pull-request`：PR 编号（如 `(#123)`）
 * - `issue`：Issue 编号（如 `#456`）
 * - `hash`：当前提交的 short hash
 */
export enum GitCommitMessageType {
  PULL_REQUEST = 'pull-request',
  ISSUE = 'issue',
  HASH = 'hash',
}

/**
 * Markdown 行尾引用展示分组
 * - `issues`：Issue / PR 链接
 * - `hash`：Commit short hash 链接
 */
export enum ChangelogReferenceDisplay {
  ISSUES = 'issues',
  HASH = 'hash',
}

/** 单条提交描述中解析出的引用 */
export interface GitCommitReference {
  /** 引用类型 */
  type: GitCommitMessageType
  /** 原始匹配值（如 `#123` 或 short hash） */
  value: string
}

/** 经 Conventional Commits 规则解析后的提交记录 */
export interface GitCommitRecord extends GitCommitRaw {
  /** 去除引用后的描述文本 */
  description: string
  /** commit type（如 `feat` / `fix`） */
  type: string
  /** scope（括号内，可能经 `scopeMap` 映射） */
  scope: string
  /** 从描述与 hash 提取的引用列表 */
  references: GitCommitReference[]
  /** 主作者 + `Co-authored-by` 合并后的作者列表 */
  authors: GitCommitAuthor[]
  /** 是否含 breaking change（`!` 或 body 中的 BREAKING CHANGE） */
  isBreaking: boolean
}

/** `git log` 范围查询参数 */
export interface GitCommitDiffOptions {
  /** 起始 tag / commit；省略时从仓库最早记录开始 */
  from?: string
  /** 结束 tag / commit；默认 `HEAD` */
  to?: string
}

/** 生成 Markdown 时使用的提交记录（可附带 GitHub 解析后的作者） */
export interface Commit extends GitCommitRecord {
  /** 经 GitHub API 解析后的作者（含 `login`） */
  resolvedAuthors?: GitAuthorInfo[]
}

/** 贡献者聚合信息（按邮箱去重） */
export interface GitAuthorInfo extends GitCommitAuthor {
  /** 该作者关联的 commit short hash 列表 */
  commits: string[]
  /** GitHub 用户名（API 解析成功时） */
  login?: string
}

// --- Changelog 生成 ---

/** CLI / 程序化调用入参（合并 VipCommander 通用选项） */
export interface ChangelogCliOptions extends VipCommanderOptions {
  /** GitHub Personal Access Token；亦可 `GITHUB_TOKEN` / `TOKEN` 环境变量 */
  token?: string
  /** 起始 Git 标签或 commit */
  from?: string
  /** 结束 Git 标签或 commit；默认当前 HEAD 对应 tag / 分支 */
  to?: string
  /** 远程仓库 `owner/repo`；默认从 git remote 推断 */
  github?: string
  /** Release / CHANGELOG 版本标题；默认与 `to` 一致 */
  name?: string
  /** 是否标记为 GitHub Pre-release；默认 `false`（Latest） */
  prerelease?: boolean
  /** CHANGELOG.md 输出路径（建议绝对路径） */
  output?: string
  /** Monorepo 子包 scope 名（仅收录该 scope 的提交） */
  scopeName?: string
}

/** 合并配置后的完整生成选项 */
export interface ChangelogGenerateOptions {
  /** Conventional Commits type → 章节标题与 semver 提示 */
  types: Record<string, {
    title: string
    semver?: VipSemverReleaseType
  }>
  /** scope 显示名映射（如 `utils` → `@142vip/utils`） */
  scopeMap: Record<string, string>
  /** 额外章节标题 */
  titles: {
    /** Breaking Changes 章节标题 */
    breakingChanges?: string
  }
  /** 新建 CHANGELOG.md 时的文件头 */
  header?: string
  /** Monorepo 子包 scope 名 */
  scopeName?: string
  /** 试运行：不写文件、不创建 Release */
  dryRun?: boolean
  /** CHANGELOG.md 输出路径 */
  output?: string
  /** 是否解析 GitHub 贡献者 */
  contributors: boolean
  /** 描述首字母大写 */
  capitalize: boolean
  /** 是否按 scope 分组；`multiple` 表示仅多 commit 的 scope 分组 */
  group: boolean | 'multiple'
  /** 章节标题是否保留 emoji */
  emoji: boolean
  /** Release 名称 */
  name: string
  /** GitHub API 主机（默认 `api.github.com`） */
  baseUrlApi: string
  /** GitHub Web 主机（默认 `github.com`） */
  baseUrl: string
  /** 提交范围起点 */
  from: string
  /** 提交范围终点 / Release tag */
  to: string
  /** GitHub Pre-release 标记 */
  prerelease: boolean
  /** 远程仓库 `owner/repo` */
  repo: string
}

/** `generateChangelogInfo` / `writeChangelogFile` 返回值 */
export interface GenerateChangelogResult {
  /** 实际使用的生成配置 */
  config: ChangelogGenerateOptions
  /** 解析后的提交列表 */
  commits: Commit[]
  /** 本次 Release 的 Markdown 正文 */
  markdown: string
  /** 手动创建 Release 的 GitHub Web URL */
  releaseUrl: string
}
