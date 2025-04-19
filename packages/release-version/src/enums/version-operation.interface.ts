/**
 * Normalized and sanitized options
 */
export interface ReleaseOperationOptions {
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
  // monorepo模式下 模块名
  scopeName?: string
}
