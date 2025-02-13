import { execSync } from 'node:child_process'
import process from 'node:process'
import path from 'node:path'
import { readFileSync } from 'node:fs'

/**
 * 获取仓库的最新tag
 * - 优先从package.json中获取version
 * - version对应的tag不存在时，再从git记录中获取最新tag
 */
export function getLatestTagName(): string {
  try {
    // 读取 package.json 文件中的 version 值
    const packageJSON = execSync('cat package.json').toString()
    const version = JSON.parse(packageJSON).version

    // 检查对应的 tag 是否存在
    const existTag = execSync(`git tag -l "v${version}"`).toString().trim()

    // 如果对应的 tag 存在，则返回该 tag
    if (existTag) {
      return `v${version}`
    }
    // 如果对应的 tag 不存在，则获取最新的 tag
    return execSync('git describe --tags --abbrev=0').toString().trim()
  }
  catch (error) {
    console.log(error)
    process.exit(0)
  }
}

/**
 * 获取某个分支上的commit日志
 */
export function getCommitLogs(latestTag: string, branch?: string): string[] {
  const command = `git log ${branch ?? ''} --pretty=format:"%s" --date=short "${latestTag}"..HEAD`
  const commitLogs = execSync(command).toString().trim()

  // 整理出git提交日志
  return commitLogs.split('\n')
}

export interface CommitValidate {
  /**
   * 提交信息是否符合Git规范
   */
  isSuccess: boolean

  /**
   * 提交类型
   */
  type?: string

  /**
   * 提交范围
   */
  scope?: string

  /**
   * 提交信息
   */
  message?: string

  /**
   * 提交内容
   */
  commit: string
}

/**
 * 校验、解析Git 提交信息
 * - 规范：
 */
export function verifyCommit(commitRgx?: RegExp): CommitValidate {
  // 正则匹配
  const regExp = commitRgx ?? /^(?:revert: )?(?:feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(?:\(.+\))?: .{1,80}/

  const msgPath = path.resolve('.git/COMMIT_EDITMSG')
  const msg = readFileSync(msgPath, 'utf-8').trim()

  const isSuccess = regExp.test(msg)

  // 解析出type scope message等信息
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const regex = /^(?<type>\w+)(?:\((?<scope>[^()]*)\))?:\s*(?<message>.*)$/

  const { groups } = msg.match(regex)!

  return {
    isSuccess,
    type: groups?.type,
    scope: groups?.scope,
    message: groups?.message,
    commit: msg,
  }
}
