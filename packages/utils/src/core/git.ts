import { convert } from 'convert-gitmoji'
import { VipSemver } from '../pkgs'
import { VipExecutor } from './exec'
/**
 * Git提交信息
 */
export interface GitInfo {
  hash: string
  message: string
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
function getTagInHead(): string {
  return VipExecutor.execCommandSync('git tag --points-at HEAD')
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
 * git emoji表情转换
 * 参考：https://www.npmjs.com/package/convert-gitmoji
 */
function convertEmoji(content: string, withSpace?: boolean | 'leading' | 'trailing' | 'both') {
  return convert(content, withSpace)
}

export const VipGit = {
  getRecentCommit,
  getRecentCommitHash,
  getRecentCommitShortHash,
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
}
