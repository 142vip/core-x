/**
 * Git提交信息
 */
export interface GitInfo {
  hash: string
  message: string
}

/**
 * git commit解析
 * - 提交类型
 * - 提交范围
 * - 提交信息
 */
export interface GitCommit {
  /**
   * 提交类型
   */
  type: string

  /**
   * 提交范围
   */
  scope?: string

  /**
   * 提交信息
   */
  subject?: string
}

/**
 * 常用分支
 */
export enum GitGeneralBranch {
  MAIN = 'main',
  NEXT = 'next',
  MASTER = 'master',
}
