import type { Commit, GitCommitReference } from '../changelog.interface'
import { vipLodash } from '@142vip/utils'
import { ChangelogReferenceDisplay, GitCommitMessageType } from '../changelog.interface'

/**
 * 按展示分组格式化提交引用为 Markdown 片段
 */
function formatReferences(
  references: GitCommitReference[],
  baseUrl: string,
  github: string,
  display: ChangelogReferenceDisplay,
): string {
  const refs = references
    .filter((ref) => {
      if (display === ChangelogReferenceDisplay.ISSUES) {
        return ref.type === GitCommitMessageType.ISSUE || ref.type === GitCommitMessageType.PULL_REQUEST
      }
      return ref.type === GitCommitMessageType.HASH
    })
    .map((ref) => {
      if (!github) {
        return ref.value
      }
      if (ref.type === GitCommitMessageType.PULL_REQUEST || ref.type === GitCommitMessageType.ISSUE) {
        return `https://${baseUrl}/${github}/issues/${ref.value.slice(1)}`
      }

      return `[<samp>(${ref.value.slice(0, 5)})</samp>](https://${baseUrl}/${github}/commit/${ref.value})`
    })

  const referencesString = join(refs).trim()

  if (display === ChangelogReferenceDisplay.ISSUES) {
    return referencesString && `in ${referencesString}`
  }
  return referencesString
}

/** 格式化单条 commit 的 Markdown 行（描述 + 作者 + 引用） */
function formatLine(commit: Commit, options: {
  baseUrl: string
  repo: string
  capitalize: boolean
}): string {
  const prRefs = formatReferences(
    commit.references,
    options.baseUrl,
    options.repo,
    ChangelogReferenceDisplay.ISSUES,
  )
  const hashRefs = formatReferences(
    commit.references,
    options.baseUrl,
    options.repo,
    ChangelogReferenceDisplay.HASH,
  )

  let authors = join([
    ...new Set(commit.resolvedAuthors?.map(i => i.login ? `@${i.login}` : `**${i.name}**`)),
  ])?.trim()

  if (authors) {
    authors = `by ${authors}`
  }

  let refs = [
    authors,
    prRefs,
    hashRefs,
  ].filter(i => i?.trim()).join(' ')

  if (refs) {
    refs = `&nbsp;-&nbsp; ${refs}`
  }

  const description = options.capitalize ? capitalize(commit.description) : commit.description

  return [description, refs]
    .filter(i => i?.trim())
    .join(' ')
}

/** 章节标题（可选去除 emoji） */
function formatTitle(name: string, emoji: boolean): string {
  if (!emoji) {
    const emojisRE = /([\u2700-\u27BF\uE000-\uF8FF\u2011-\u26FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])/g
    name = name.replace(emojisRE, '')
  }

  return `### ${name.trim()}`
}

/** 将一组 commit 格式化为 Markdown 章节 */
function formatSection(commits: Commit[], options: {
  emoji: boolean
  group?: boolean | 'multiple'
  scopeName?: string
  baseUrl: string
  repo: string
  capitalize: boolean
  scopeMap: Record<string, string>
  sectionName: string
}): string[] {
  if (!commits.length) {
    return []
  }

  if (options.scopeName != null) {
    commits = commits.filter(commit => commit.scope === options.scopeName)
  }

  const lines: string[] = ['', formatTitle(options.sectionName, options.emoji), '']

  const scopes = vipLodash.groupBy(commits, 'scope') as Record<string, Commit[]>

  const useScopeGroup = options.group

  if (options.scopeName != null) {
    if (scopes[options.scopeName] == null) {
      return []
    }
    const scopedCommits = scopes[options.scopeName].reverse()
    for (const commit of scopedCommits) {
      if (commit.type === 'release') {
        break
      }
      lines.push(`- ${formatLine(commit, vipLodash.pick(options, 'baseUrl', 'repo', 'capitalize'))}`)
    }
  }
  else {
    Object.keys(scopes).sort().forEach((scope) => {
      let padding = ''
      let prefix = ''
      const scopeText = `**${options.scopeMap[scope] || scope}**`

      if (scope && (useScopeGroup === true || (useScopeGroup === 'multiple' && scopes[scope].length > 1))) {
        lines.push(`- ${scopeText}:`)
        padding = '  '
      }
      else if (scope) {
        prefix = `${scopeText}: `
      }

      lines.push(
        ...scopes[scope]
          .reverse()
          .map(commit => `${padding}- ${prefix}${formatLine(commit, vipLodash.pick(options, 'baseUrl', 'repo', 'capitalize'))}`),
      )
    })
  }
  return lines
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function join(array?: string[], glue = ', ', finalGlue = ' and '): string {
  if (!array || array.length === 0) {
    return ''
  }

  if (array.length === 1) {
    return array[0]
  }

  if (array.length === 2) {
    return array.join(finalGlue)
  }

  return `${array.slice(0, -1).join(glue)}${finalGlue}${array.slice(-1)}`
}

/** 无有效变更时的占位文案 */
function getNoSignificantChanges(): string {
  return '\n**No Significant Changes**'
}

/** Monorepo 子包发版时的 NPM 版本说明行 */
function getNPMVersionDescription(pkgName: string, pkgVersion: string) {
  const npmURI = `https://www.npmjs.com/package/${pkgName}`
  return `\n**Release New Version ${pkgVersion} [👉 View New Package On NPM](${npmURI})**`
}

/** 仓库根发版时的 GitHub compare 说明行 */
function getGithubVersionDescription({ baseUrl, repo, fromVersion, toVersion }: {
  baseUrl: string
  repo: string
  fromVersion: string
  toVersion: string
}) {
  const url = `https://${baseUrl}/${repo}/compare/${fromVersion}...${toVersion}`
  return `\n**Release New Version ${toVersion} [👉 View Changes On GitHub](${url})**`
}

/** CHANGELOG Markdown 片段格式化 */
export class MarkdownAPI {
  formatSection = formatSection
  getNoSignificantChanges = getNoSignificantChanges
  getNPMVersionDescription = getNPMVersionDescription
  getGithubVersionDescription = getGithubVersionDescription
}

export const markdownAPI = new MarkdownAPI()
