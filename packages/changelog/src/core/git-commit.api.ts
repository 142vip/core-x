import type { Commit, GitCommitAuthor, GitCommitDiffOptions, GitCommitRaw, GitCommitRecord, GitCommitReference } from '../enums'
import { VipExecutor, VipGit, VipLodash } from '@142vip/utils'
import { GitCommitMessageType } from '../enums'
import { MarkdownAPI } from './markdown.api'

/**
 * 获取不同tag之间的commit记录
 */
async function getGitCommitDiff(options: GitCommitDiffOptions): Promise<GitCommitRaw[]> {
  // https://git-scm.com/docs/pretty-formats
  if (options.to == null) {
    options.to = 'HEAD'
  }
  if (options.from != null) {
    options.from = `${options.from}...`
  }
  else {
    options.from = ''
  }

  // 获取commit记录
  const commitStr = VipExecutor.execCommandSync(`git --no-pager log "${options.from}${options.to}" --pretty="----%n%s|%h|%an|%ae%n%b" --name-status`)

  return commitStr
    .split('----\n')
    .splice(1)
    .map<GitCommitRaw>((line) => {
      const [firstLine, ..._body] = line.split('\n')
      const [
        message,
        shortHash,
        authorName,
        authorEmail,
      ] = firstLine.split('|')

      return {
        message,
        shortHash,
        author: { name: authorName, email: authorEmail },
        body: _body.join('\n'),
      }
    })
}

// https://www.conventionalcommits.org/en/v1.0.0/
// https://regex101.com/r/FSfNvA/1
const ConventionalCommitRegex
  = /(?<emoji>:.+:|(\uD83C[\uDF00-\uDFFF])|(\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF])|[\u2600-\u2B55])?( *)(?<type>[a-z]+)(\((?<scope>.+)\))?(?<breaking>!)?: (?<description>.+)/i

// eslint-disable-next-line regexp/no-super-linear-backtracking,regexp/no-misleading-capturing-group
const CoAuthoredByRegex = /co-authored-by:\s*(?<name>.+)(<(?<email>.+)>)/gi

const PullRequestRE = /\([ a-z]*(#\d+)\s*\)/g
const IssueRE = /(#\d+)/g

/**
 * 解析所有Commit信息
 */
function parseGitCommits(commits: GitCommitRaw[], scopeMap: Record<string, string>): GitCommitRecord[] {
  return commits
    .map(commit => parseGitCommit(commit, scopeMap))
    .filter(v => v != null)
}

/**
 * 解析单条Commit记录
 */
function parseGitCommit(commit: GitCommitRaw, scopeMap: Record<string, string>): GitCommitRecord | null {
  const match = commit.message.match(ConventionalCommitRegex)
  if (match == null || match.groups == null) {
    return null
  }

  const type = match.groups.type
  const hasBreakingBody = /breaking change:/i.test(commit.body)

  let scope = match.groups.scope || ''

  scope = scopeMap[scope] || scope

  // 破坏性改动
  const isBreaking = Boolean(match.groups.breaking || hasBreakingBody)
  let description = match.groups.description

  // Extract references from message
  const references: GitCommitReference[] = []
  for (const m of description.matchAll(PullRequestRE)) {
    references.push({ type: GitCommitMessageType.PULL_REQUEST, value: m[1] })
  }
  for (const m of description.matchAll(IssueRE)) {
    if (!references.some(i => i.value === m[1])) {
      references.push({ type: GitCommitMessageType.ISSUE, value: m[1] })
    }
  }
  references.push({ type: GitCommitMessageType.HASH, value: commit.shortHash })

  // Remove references and normalize
  description = description.replace(PullRequestRE, '').trim()

  // Find all authors
  const authors: GitCommitAuthor[] = [commit.author]
  for (const match of commit.body.matchAll(CoAuthoredByRegex)) {
    authors.push({
      name: (match.groups?.name ?? '').trim(),
      email: (match.groups?.email ?? '').trim(),
    })
  }

  return {
    ...commit,
    authors,
    description,
    type,
    scope,
    references,
    isBreaking,
  }
}

/**
 * 生成Markdown文档记录的每行记录
 */
async function parseCommitsToMarkdownStr(commits: Commit[], options: {
  emoji: boolean
  group?: boolean | 'multiple'
  scopeName?: string
  baseUrl: string
  repo: string
  capitalize: boolean
  scopeMap: Record<string, string>
  name: string
  from: string
  to: string
  titles: {
    breakingChanges?: string
  }
  types: Record<string, { title: string }>
}): Promise<string> {
  const lines: string[] = []

  // 存在，处理破坏性改动
  if (options.titles.breakingChanges != null) {
    const breaking = commits.filter(c => c.isBreaking)
    lines.push(
      ...MarkdownAPI.formatSection(breaking, {
        emoji: options.emoji,
        group: options.group,
        scopeName: options.scopeName,
        baseUrl: options.baseUrl,
        repo: options.repo,
        capitalize: options.capitalize,
        scopeMap: options.scopeMap,
        sectionName: options.titles.breakingChanges!,
      }),
    )
  }

  let changes = commits.filter(c => !c.isBreaking)

  if (options.scopeName != null) {
    // 遇到第一个release就跳出，避免重复记录版本
    const commitsInScopeName: Commit[] = []

    for (const commit of changes) {
      if (commit.type === 'release' && commit.scope === options.scopeName) {
        break
      }
      commitsInScopeName.push(commit)
    }
    changes = commitsInScopeName
  }

  // 普通提交
  const group = VipLodash.groupBy(changes, 'type')

  let commitTypes = Object.keys(options.types)

  // monorepo的子模块，不记录release信息
  if (options.scopeName != null) {
    commitTypes = commitTypes.filter(type => type !== 'release')
  }
  for (const type of commitTypes) {
    // 子模块时，不记录发布信息
    if (options.scopeName != null && type === 'release') {
      break
    }

    const commitsByType = group[type] || []
    const sections = MarkdownAPI.formatSection(commitsByType, {
      emoji: options.emoji,
      group: options.group,
      scopeName: options.scopeName,
      baseUrl: options.baseUrl,
      repo: options.repo,
      capitalize: options.capitalize,
      scopeMap: options.scopeMap,
      sectionName: options.types[type].title,
    })
    lines.push(...sections)
  }

  // 没有变更内容
  if (!lines.length) {
    lines.push(MarkdownAPI.getNoSignificantChanges())
  }
  else {
    const description = options.scopeName != null
      // 发布模块包，添加NPM版本
      ? MarkdownAPI.getNPMVersionDescription(options.scopeName, options.name)
      // 发布根目录，添加Github Release版本
      : MarkdownAPI.getGithubVersionDescription({
          baseUrl: options.baseUrl,
          repo: options.repo,
          fromVersion: options.from,
          toVersion: options.name,
        })

    lines.push(description)
  }

  // commit提交信息emoji表情转换
  return VipGit.convertEmoji(lines.join('\n').trim(), true)
}

export const GitCommitAPI = {
  getGitCommitDiff,
  parseGitCommits,
  parseCommitsToMarkdownStr,
}
