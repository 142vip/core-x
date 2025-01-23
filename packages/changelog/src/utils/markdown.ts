import { VipLodash } from '@142vip/utils'
import type { Commit } from '../changelog.interface'
import type { Reference } from '../git'
import { GitCommitMessageType } from '../git'

function formatReferences(references: Reference[], baseUrl: string, github: string, type: 'issues' | 'hash'): string {
  const refs = references
    .filter((i) => {
      if (type === 'issues')
        return i.type === GitCommitMessageType.ISSUE || i.type === GitCommitMessageType.PULL_REQUEST
      return i.type === GitCommitMessageType.HASH
    })
    .map((ref) => {
      if (!github)
        return ref.value
      if (ref.type === GitCommitMessageType.PULL_REQUEST || ref.type === GitCommitMessageType.ISSUE)
        return `https://${baseUrl}/${github}/issues/${ref.value.slice(1)}`

      // 截取前面5个字符
      return `[<samp>(${ref.value.slice(0, 5)})</samp>](https://${baseUrl}/${github}/commit/${ref.value})`
    })

  const referencesString = join(refs).trim()

  if (type === 'issues')
    return referencesString && `in ${referencesString}`
  return referencesString
}

/**
 * 格式化每行commit信息
 */
function formatLine(commit: Commit, options: {
  baseUrl: string
  repo: string
  capitalize: boolean
}): string {
  const prRefs = formatReferences(commit.references, options.baseUrl, options.repo as string, 'issues')
  const hashRefs = formatReferences(commit.references, options.baseUrl, options.repo as string, 'hash')

  let authors = join([
    ...new Set(commit.resolvedAuthors?.map(i => i.login ? `@${i.login}` : `**${i.name}**`)),
  ])?.trim()

  if (authors)
    authors = `by ${authors}`

  // 拼接ref
  let refs = [
    authors,
    prRefs,
    hashRefs,
  ].filter(i => i?.trim()).join(' ')

  if (refs)
    refs = `&nbsp;-&nbsp; ${refs}`

  const description = options.capitalize ? capitalize(commit.description) : commit.description

  return [description, refs]
    .filter(i => i?.trim())
    .join(' ')
}

/**
 * 格式化标题
 * - 添加表情包
 */
function formatTitle(name: string, emoji: boolean): string {
  // 加表情包
  if (!emoji) {
    const emojisRE = /([\u2700-\u27BF\uE000-\uF8FF\u2011-\u26FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])/g
    name = name.replace(emojisRE, '')
  }

  return `### ${name.trim()}`
}

/**
 * 格式化Section
 */
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
  if (!commits.length)
    return []

  // 注意空行
  const lines: string[] = ['', formatTitle(options.sectionName, options.emoji), '']

  const scopes = VipLodash.groupBy(commits, 'scope') as Record<string, Commit[]>

  const useScopeGroup = options.group

  // 生成monorepo中的md，只显示该模块的
  if (options.scopeName != null) {
    // 对于没有匹配到子模块的记录，直接返回
    if (scopes[options.scopeName] == null) {
      return []
    }
    // lines里每条记录就是一次commit提交
    lines.push(
      ...scopes[options.scopeName]
        .reverse()
        .map(commit => `- ${formatLine(commit, VipLodash.pick(options, 'baseUrl', 'repo', 'capitalize'))}`),
    )
  }
  // root dir 普通模式
  else {
    Object.keys(scopes).sort().forEach((scope) => {
      let padding = ''
      let prefix = ''
      const scopeText = `**${options.scopeMap[scope] || scope}**`

      // 按照scope分类
      if (scope && (useScopeGroup === true || (useScopeGroup === 'multiple' && scopes[scope].length > 1))) {
        lines.push(`- ${scopeText}:`)
        padding = '  '
      }
      else if (scope) {
        prefix = `${scopeText}: `
      }

      // lines里每条记录就是一次commit提交
      lines.push(
        ...scopes[scope]
          .reverse()
          .map(commit => `${padding}- ${prefix}${formatLine(commit, VipLodash.pick(options, 'baseUrl', 'repo', 'capitalize'))}`),
      )
    })
  }
  return lines
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function join(array?: string[], glue = ', ', finalGlue = ' and '): string {
  if (!array || array.length === 0)
    return ''

  if (array.length === 1)
    return array[0]

  if (array.length === 2)
    return array.join(finalGlue)

  return `${array.slice(0, -1).join(glue)}${finalGlue}${array.slice(-1)}`
}

/**
 * 无内容更新
 */
function getNoSignificantChanges(): string {
  return '\n**No Significant Changes**'
}

/**
 * 获取npm版本描述
 */
function getNPMVersionDescription(pkgName: string, pkgVersion: string) {
  const npmURI = `https://www.npmjs.com/package/${pkgName}`
  return `\n**Release New Version ${pkgVersion} [👉 View New Package On NPM](${npmURI})**`
}

function getGithubVersionDescription({ baseUrl, repo, fromVersion, toVersion }: {
  baseUrl: string
  repo: string
  fromVersion: string
  toVersion: string
}) {
  const url = `https://${baseUrl}/${repo}/compare/${fromVersion}...${toVersion}`
  return `\n**Release New Version ${toVersion} [👉 View Changes On GitHub](${url})**`
}

export const MarkdownAPI = {
  formatSection,
  getNoSignificantChanges,
  getNPMVersionDescription,
  getGithubVersionDescription,
}
