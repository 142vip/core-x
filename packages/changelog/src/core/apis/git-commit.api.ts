import type {
  Commit,
  GitCommitAuthor,
  GitCommitDiffOptions,
  GitCommitRaw,
  GitCommitRecord,
  GitCommitReference,
} from '../changelog.interface'
import { VipExecutor, VipGit, vipLodash } from '@142vip/utils'
import { GitCommitMessageType } from '../changelog.interface'
import { markdownAPI } from './markdown.api'

/** 获取两个 ref 之间的 commit 记录（`git log` pretty 格式） */
async function getGitCommitDiff(options: GitCommitDiffOptions): Promise<GitCommitRaw[]> {
  if (options.to == null) {
    options.to = 'HEAD'
  }
  if (options.from != null) {
    options.from = `${options.from}...`
  }
  else {
    options.from = ''
  }

  const commitStr = VipExecutor.execCommandSync(
    `git --no-pager log "${options.from}${options.to}" --pretty="----%n%s|%h|%an|%ae%n%b" --name-status`,
  )

  return commitStr
    .split('----\n')
    .splice(1)
    .map<GitCommitRaw>((line) => {
      const [firstLine, ...bodyLines] = line.split('\n')
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
        body: bodyLines.join('\n'),
      }
    })
}

// https://www.conventionalcommits.org/en/v1.0.0/
const ConventionalCommitRegex
  = /(?<emoji>:.+:|(\uD83C[\uDF00-\uDFFF])|(\uD83D[\uDC00-\uDE4F\uDE80-\uDEFF])|[\u2600-\u2B55])?( *)(?<type>[a-z]+)(\((?<scope>.+)\))?(?<breaking>!)?: (?<description>.+)/i

// eslint-disable-next-line regexp/no-super-linear-backtracking,regexp/no-misleading-capturing-group
const CoAuthoredByRegex = /co-authored-by:\s*(?<name>.+)(<(?<email>.+)>)/gi

const PullRequestRE = /\([ a-z]*(#\d+)\s*\)/g
const IssueRE = /(#\d+)/g

/** 批量解析 Conventional Commits，过滤无法匹配的提交 */
function parseGitCommits(commits: GitCommitRaw[], scopeMap: Record<string, string>): GitCommitRecord[] {
  return commits
    .map(commit => parseGitCommit(commit, scopeMap))
    .filter(v => v != null)
}

/** 解析单条 Conventional Commit */
function parseGitCommit(commit: GitCommitRaw, scopeMap: Record<string, string>): GitCommitRecord | null {
  const match = commit.message.match(ConventionalCommitRegex)
  if (match == null || match.groups == null) {
    return null
  }

  const type = match.groups.type
  const hasBreakingBody = /breaking change:/i.test(commit.body)

  let scope = match.groups.scope || ''
  scope = scopeMap[scope] || scope

  const isBreaking = Boolean(match.groups.breaking || hasBreakingBody)
  let description = match.groups.description

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

  description = description.replace(PullRequestRE, '').trim()

  const authors: GitCommitAuthor[] = [commit.author]
  for (const coAuthorMatch of commit.body.matchAll(CoAuthoredByRegex)) {
    authors.push({
      name: (coAuthorMatch.groups?.name ?? '').trim(),
      email: (coAuthorMatch.groups?.email ?? '').trim(),
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

/** 将提交列表渲染为 CHANGELOG Markdown 正文 */
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

  if (options.titles.breakingChanges != null) {
    const breaking = commits.filter(c => c.isBreaking)
    lines.push(
      ...markdownAPI.formatSection(breaking, {
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
    const commitsInScopeName: Commit[] = []

    for (const commit of changes) {
      if (commit.type === 'release' && commit.scope === options.scopeName) {
        break
      }
      commitsInScopeName.push(commit)
    }
    changes = commitsInScopeName
  }

  const group = vipLodash.groupBy(changes, 'type')

  let commitTypes = Object.keys(options.types)

  if (options.scopeName != null) {
    commitTypes = commitTypes.filter(type => type !== 'release')
  }
  for (const type of commitTypes) {
    if (options.scopeName != null && type === 'release') {
      break
    }

    const commitsByType = group[type] || []
    const sections = markdownAPI.formatSection(commitsByType, {
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

  if (!lines.length) {
    lines.push(markdownAPI.getNoSignificantChanges())
  }
  else {
    const description = options.scopeName != null
      ? markdownAPI.getNPMVersionDescription(options.scopeName, options.name)
      : markdownAPI.getGithubVersionDescription({
          baseUrl: options.baseUrl,
          repo: options.repo,
          fromVersion: options.from,
          toVersion: options.name,
        })

    lines.push(description)
  }

  return VipGit.convertEmoji(lines.join('\n').trim(), true)
}

/** Git 提交解析与 Markdown 聚合 */
export class GitCommitAPI {
  getGitCommitDiff = getGitCommitDiff
  parseGitCommits = parseGitCommits
  parseCommitsToMarkdownStr = parseCommitsToMarkdownStr
}

export const gitCommitAPI = new GitCommitAPI()
