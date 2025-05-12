import type { GitCommit } from '@142vip/utils'

/**
 * Git Commit信息校验参数
 */
export interface GitCommitLinterOptions {
  /**
   * Git Commit支持的Type列表，默认支持：
   */
  types?: string[]
  /**
   * Git Commit支持的Scope列表
   */
  scopes?: string[]
}

/**
 * Git Commit信息校验结果
 */
export interface GitCommitLinter extends GitCommit {
  commit: string
}
