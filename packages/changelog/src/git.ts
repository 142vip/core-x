import { execSync } from 'node:child_process'

export function execCommand(cmd: string, cwd?: string): string {
  return execSync(cmd, { encoding: 'utf8', cwd }).trim()
}

export interface GitCommitAuthor {
  name: string
  email: string
}

export interface RawGitCommit {
  message: string
  body: string
  shortHash: string
  author: GitCommitAuthor
}

export enum GitCommitMessageType {
  PULL_REQUEST = 'pull-request',
  ISSUE = 'issue',
  HASH = 'hash',
}

export interface Reference {
  type: GitCommitMessageType
  value: string
}

export interface GitCommit extends RawGitCommit {
  description: string
  type: string
  scope: string
  references: Reference[]
  authors: GitCommitAuthor[]
  isBreaking: boolean
}

/**
 * 获取不同tag之间的commit记录
 */
export async function getGitDiff(params: {
  from?: string
  to?: string
}): Promise<RawGitCommit[]> {
  // https://git-scm.com/docs/pretty-formats
  if (params.to == null) {
    params.to = 'HEAD'
  }
  if (params.from != null) {
    params.from = `${params.from}...`
  }
  else {
    params.from = ''
  }

  // 获取commit记录
  const commitStr = execCommand(`git --no-pager log "${params.from}${params.to}" --pretty="----%n%s|%h|%an|%ae%n%b" --name-status`)

  return commitStr
    .split('----\n')
    .splice(1)
    .map<RawGitCommit>((line) => {
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
export function parseCommits(commits: RawGitCommit[], scopeMap: Record<string, string>): GitCommit[] {
  return commits
    .map(commit => parseGitCommit(commit, scopeMap))
    .filter(v => v != null)
}

/**
 * 解析单条Commit记录
 */
export function parseGitCommit(commit: RawGitCommit, scopeMap: Record<string, string>): GitCommit | null {
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
  const references: Reference[] = []
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
