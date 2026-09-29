import type { GitCommit } from '@142vip/utils'

/** 单个 Conventional Commit `type` 的展示元数据 */
export interface GitCommitTypeMeta {
  description: string
  title: string
  emoji: string
}

/**
 * 内置 Git Commit `type` 词典（用于交互选择与错误提示模板）
 */
export const gitCommitTypes: Record<string, GitCommitTypeMeta> = {
  feat: {
    description: 'A new feature',
    title: 'Features',
    emoji: '✨',
  },
  fix: {
    description: 'A bug fix,A bug fix A bug fix',
    title: 'Bug Fixes',
    emoji: '🐛',
  },
  hotfix: {
    description: 'Hotfix',
    title: 'Hotfix',
    emoji: '🔥',
  },
  docs: {
    description: 'Documentation only changes',
    title: 'Documentation',
    emoji: '📚',
  },
  style: {
    description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    title: 'Styles',
    emoji: '💎',
  },
  refactor: {
    description: 'A code change that neither fixes a bug nor adds a feature',
    title: 'Code Refactoring',
    emoji: '📦',
  },
  perf: {
    description: 'A code change that improves performance',
    title: 'Performance Improvements',
    emoji: '🚀',
  },
  test: {
    description: 'Adding missing tests or correcting existing tests',
    title: 'Tests',
    emoji: '🚨',
  },
  build: {
    description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    title: 'Builds',
    emoji: '🛠',
  },
  ci: {
    description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    title: 'Continuous Integrations',
    emoji: '⚙️',
  },
  chore: {
    description: 'Other changes that don\'t modify src or test files',
    title: 'Chores',
    emoji: '♻️',
  },
  revert: {
    description: 'Reverts a previous commit',
    title: 'Reverts',
    emoji: '🗑',
  },
  release: {
    description: 'Release a new version',
    title: 'Releases',
    emoji: '🎉',
  },
}

/** 默认允许的 commit `type` 列表 */
export const GIT_COMMIT_DEFAULT_TYPES = Object.keys(gitCommitTypes)

/** 默认允许的 commit `scope`（与 monorepo 元数据 scope 叠加） */
export const GIT_COMMIT_DEFAULT_SCOPES = [
  'release',
  'CHANGELOG',
  'README',
]

/**
 * `commitLinter` 入参：白名单、待校验首行与自定义 `verify`。
 */
export interface CommitLinterOptions {
  /** 允许的 type；与内置默认 type 合并去重 */
  types?: string[]
  /** 允许的 scope；与内置默认 scope 合并去重 */
  scopes?: string[]
  /**
   * 待校验 commit 首行。
   * 省略时读取当前仓库 `.git/COMMIT_EDITMSG` 首行（commit-msg 钩子场景）。
   */
  commit?: string
  /**
   * 额外校验（在格式与白名单通过后执行）。
   * 返回 `false` 或抛错视为不通过（进程 exit 1）。
   */
  verify?: (gitCommit: GitCommitLinter) => boolean | void
}

/**
 * Git Commit 信息校验结果
 */
export interface GitCommitLinter extends GitCommit {
  commit: string
}
