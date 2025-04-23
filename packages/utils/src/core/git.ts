import type { GitCommit, GitInfo } from '../enums'
import { convert } from 'convert-gitmoji'
import { GitGeneralBranch } from '../enums'
import { VipColor, VipSemver } from '../pkgs'
import { VipExecutor } from './exec'
import { vipLogger } from './logger'
import { VipNodeJS } from './nodejs'
import { VipPackageJSON } from './package-json'

/**
 * 获取某个分支上的commit日志
 */
function getCommitLogs(latestTag: string, branch?: string): string[] {
  const command = `git log ${branch ?? ''} --pretty=format:"%s" --date=short "${latestTag}"..HEAD`
  const commitLogs = VipExecutor.execCommandSync(command)

  // 整理出git提交日志
  return commitLogs.split('\n')
}

/**
 * 获取分支最近的一次GitTag标记到Head标记之间的git commit信息
 */
function getRecentCommitsByScope(gitScope: string): string[] {
  // 获取当前分支的最新标签
  const latestTag = VipPackageJSON.getVersionGitTag()
  if (latestTag == null) {
    vipLogger.logByBlank(VipColor.red(`仓库没有tag标签，请先打tag标签或配置version字段！！！`))
    VipNodeJS.exitProcess(1)
  }
  const commitLogs = getCommitLogs(latestTag!)

  // 整理出git提交日志
  return commitLogs.filter(commit => commit.includes(`(${gitScope})`))
}

/**
 * 获取最近一次Git提交信息【包含merge信息】
 * - 短哈希值
 * - 提交信息
 */
function getRecentCommit(): GitInfo {
  const gitLog = VipExecutor.execCommandSync('git log --no-merges -1 --pretty=format:"%h||%s"')

  // 分割输出字符串以获取哈希值和消息
  const [commitHash, ...commitMessage] = gitLog.split('||')

  // 输出最近一次提交的信息
  return {
    hash: commitHash,
    message: commitMessage.join(' '),
  }
}

/**
 * 获取最近一次提交的完整哈希值
 */
function getRecentCommitHash(): string {
  return VipExecutor.execCommandSync('git rev-parse HEAD')
}

/**
 * 获取最近一次提交的短哈希值
 */
function getRecentCommitShortHash(): string {
  const hash = getRecentCommitHash()
  return hash.substring(0, 6)
}

/**
 * 获取github仓库
 */
function getGitHubRepo(baseUrl: string): string {
  const url = VipExecutor.execCommandSync('git config --get remote.origin.url')
  const escapedBaseUrl = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${escapedBaseUrl}[\/:]([\\w\\d._-]+?)\\/([\\w\\d._-]+?)(\\.git)?$`, 'i')
  const match = regex.exec(url)
  if (!match)
    throw new Error(`Can not parse GitHub repo from url ${url}`)
  return `${match[1]}/${match[2]}`
}

/**
 * 获取当前分支
 */
function getCurrentBranch(): string {
  return VipExecutor.execCommandSync('git rev-parse --abbrev-ref HEAD')
}

/**
 * 判断仓库是否克隆太浅
 */
function isRepoShallow(): boolean {
  return VipExecutor.execCommandSync('git rev-parse --is-shallow-repository') === 'true'
}

/**
 * 获取所有tag标签
 */
function getTags(): string[] {
  const tagStr = VipExecutor.execCommandSync('git --no-pager tag -l --sort=creatordate')
  return tagStr.split('\n').reverse()
}

/**
 * 获取指向当前提交（HEAD）的所有标签
 */
function getTagInHead(): string | null {
  const tag = VipExecutor.execCommandSync('git tag --points-at HEAD')
  return tag !== '' ? tag : null
}

/**
 * 获取最近一次tag标签
 */
export function getLastMatchingTag(inputTag: string): string | undefined {
  const inputTagWithoutPrefix = inputTag.replace(/^v/, '')
  const isVersion = VipSemver.valid(inputTagWithoutPrefix) !== null
  const isPrerelease = VipSemver.prerelease(inputTag) !== null
  const tags = getTags()

  let tag: string | undefined
  // Doing a stable release, find the last stable release to compare with
  if (!isPrerelease && isVersion) {
    tag = tags.find((tag) => {
      const tagWithoutPrefix = tag.replace(/^v/, '')

      return tagWithoutPrefix !== inputTagWithoutPrefix
        && VipSemver.valid(tagWithoutPrefix) !== null
        && VipSemver.prerelease(tagWithoutPrefix) === null
    })
  }

  // Fallback to the last tag, that are not the input tag
  tag ||= tags.find(tag => tag !== inputTag)

  return tag
}

/**
 * 是否预发布
 */
function isPrerelease(version: string): boolean {
  return !/^[^.]*(?:\.[\d.]*|\d)$/.test(version)
}

/**
 * 提交操作
 */
function execCommit(args: string[]): void {
  VipExecutor.execCommandSync(`git commit ${args.join(' ')}`)
}

/**
 * 标签操作
 */
function execTag(args: string[]): void {
  VipExecutor.execCommandSync(`git tag ${args.join(' ')}`)
}

/**
 * 推送操作
 * - 推送分支
 * - 推送tag标签  --tags
 */
function execPush(args: string[]): void {
  VipExecutor.execCommandSync(`git push ${args.join(' ')}`)
}

/**
 * 列出所有的remote信息
 */
function getRemoteNames(): string[] {
  const remoteStr = VipExecutor.execCommandSync('git remote')
  return remoteStr.split('\n')
}

/**
 * git emoji表情转换
 * 参考：https://www.npmjs.com/package/convert-gitmoji
 */
function convertEmoji(content: string, withSpace?: boolean | 'leading' | 'trailing' | 'both'): string {
  return convert(content, withSpace)
}

/**
 * 获取commit完整内容
 */
function getCommitContent(): string {
  const msgPath = VipNodeJS.pathJoin('.git/COMMIT_EDITMSG')
  return VipNodeJS.readFileToStrByUTF8(msgPath)
}

/**
 * 获取commit信息
 * - 去除空行
 */
function getCommitTrimMsg(): string {
  const commitContent = getCommitContent()
  return commitContent.trim()
}

/**
 * 获取commit信息中的第一行内容
 * - 去除空行
 * - 去除换行符
 */
function getCommitFirstLineMsg(): string {
  const commitContent = getCommitContent()
  const firstLine = commitContent.split('\n').shift() ?? ''
  // 去掉空行
  return firstLine.trim()
}

/**
 * 解析Git提交信息
 */
function parseCommitMsg(message: string): GitCommit | null {
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const PATTERN = /^(?<type>\w+)(?:\((?<scope>[^()]*)\))?:\s*(?<message>.*)$/

  const matches = PATTERN.exec(message)

  // 解析提交信息
  return matches != null
    ? {
        type: matches[1],
        scope: matches[2],
        subject: matches[3],
      }
    : null
}

/**
 * 检测当前分支，是否允许操作的分支，默认：main|next|master
 */
function validateBranch(allowBranch?: string | string[]): void {
  const currentBranch = getCurrentBranch()
  if (allowBranch == null) {
    allowBranch = [GitGeneralBranch.MASTER, GitGeneralBranch.NEXT, GitGeneralBranch.NEXT]
  }
  const branches = typeof allowBranch === 'string' ? [allowBranch] : allowBranch
  if (!branches.includes(currentBranch)) {
    vipLogger.logByBlank(VipColor.red(`当前分支是：${currentBranch} ，版本迭代允许在${branches.join('|')}分支操作，并推送到远程！！！`))
    VipNodeJS.existSuccessProcess()
  }
}

/**
 * Git业务相关
 */
export const VipGit = {
  getRecentCommit,
  getRecentCommitHash,
  getRecentCommitShortHash,
  getCommitLogs,
  getRecentCommitsByScope,
  getGitHubRepo,
  getCurrentBranch,
  isRepoShallow,
  getTags,
  getTagInHead,
  getLastMatchingTag,
  isPrerelease,
  execCommit,
  execTag,
  execPush,
  convertEmoji,
  getCommitTrimMsg,
  getCommitFirstLineMsg,
  parseCommitMsg,
  getRemoteNames,
  validateBranch,
}
