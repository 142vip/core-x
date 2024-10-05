import { existsSync, promises as fsp } from 'node:fs'
import type { Reference } from 'changelogen'
import { convert } from 'convert-gitmoji'
import type { Commit, ResolvedChangelogOptions } from '../types'

const emojisRE = /([\u2700-\u27BF\uE000-\uF8FF\u2011-\u26FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])/g

function formatReferences(references: Reference[], baseUrl: string, github: string, type: 'issues' | 'hash'): string {
  const refs = references
    .filter((i) => {
      if (type === 'issues')
        return i.type === 'issue' || i.type === 'pull-request'
      return i.type === 'hash'
    })
    .map((ref) => {
      if (!github)
        return ref.value
      if (ref.type === 'pull-request' || ref.type === 'issue')
        return `https://${baseUrl}/${github}/issues/${ref.value.slice(1)}`

      // 截取前面5个字符
      return `[<samp>(${ref.value.slice(0, 5)})</samp>](https://${baseUrl}/${github}/commit/${ref.value})`
    })

  const referencesString = join(refs).trim()

  if (type === 'issues')
    return referencesString && `in ${referencesString}`
  return referencesString
}

function formatLine(commit: Commit, options: ResolvedChangelogOptions) {
  const prRefs = formatReferences(commit.references, options.baseUrl, options.repo as string, 'issues')
  const hashRefs = formatReferences(commit.references, options.baseUrl, options.repo as string, 'hash')

  let authors = join([...new Set(commit.resolvedAuthors?.map(i => i.login ? `@${i.login}` : `**${i.name}**`))])?.trim()

  if (authors)
    authors = `by ${authors}`

  // 拼接ref
  let refs = [authors, prRefs, hashRefs].filter(i => i?.trim()).join(' ')

  if (refs)
    refs = `&nbsp;-&nbsp; ${refs}`

  const description = options.capitalize ? capitalize(commit.description) : commit.description

  return [description, refs].filter(i => i?.trim()).join(' ')
}

/**
 * 格式化标题
 */
function formatTitle(name: string, options: ResolvedChangelogOptions) {
  // 加表情包
  if (!options.emoji)
    name = name.replace(emojisRE, '')

  return `### ${name.trim()}`
}

/**
 * 格式化Section
 */
function formatSection(commits: Commit[], sectionName: string, options: ResolvedChangelogOptions) {
  if (!commits.length)
    return []

  // 注意空行
  const lines: string[] = ['', formatTitle(sectionName, options), '']

  const scopes = groupBy(commits, 'scope')
  const useScopeGroup = options.group

  // group scopes only when one of the scope have multiple commits
  // if (!Object.entries(scopes).some(([k, v]) => k && v.length > 1))
  //   useScopeGroup = false

  // 生成monorepo中的md，只显示该模块的
  if (options.scopeName != null) {
    // 对于没有匹配到子模块的记录，直接返回
    if (scopes[options.scopeName] == null) {
      return []
    }
    // lines里每条记录就是一次commit提交
    lines.push(...scopes[options.scopeName]
      .reverse()
      .map(commit => `- ${formatLine(commit, options)}`))
  }
  else {
    // root dir 普通模式
    Object.keys(scopes).sort().forEach((scope) => {
      let padding = ''
      let prefix = ''
      // root dir
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
      lines.push(...scopes[scope]
        .reverse()
        .map(commit => `${padding}- ${prefix}${formatLine(commit, options)}`))
    })
  }
  return lines
}

/**
 * 生成Markdown文档
 */
export async function generateMarkdown(commits: Commit[], options: ResolvedChangelogOptions) {
  const lines: string[] = []

  const breaking = commits.filter(c => c.isBreaking)
  const changes = commits.filter(c => !c.isBreaking)

  const group = groupBy(changes, 'type')

  // 破坏性改动
  lines.push(
    ...formatSection(breaking, options.titles.breakingChanges!, options),
  )

  for (const type of Object.keys(options.types)) {
    const items = group[type] || []
    lines.push(
      ...formatSection(items, options.types[type].title, options),
    )
  }

  if (!lines.length) {
    lines.push('\n**No Significant Changes**')
  }
  else {
    if (options.scopeName != null) {
      // 发布模块包
      const url = `https://www.npmjs.com/package/${options.scopeName}`
      // 添加版本
      lines.push(`\n**Release New Version ${options.name} [👉 View New Package On NPM](${url})**`)
    }
    else {
      // 发布根目录
      const url = `https://${options.baseUrl}/${options.repo}/compare/${options.from}...${options.name}`
      // 添加版本
      lines.push(`\n**Release New Version ${options.name} [👉 View Changes On GitHub](${url})**`)
    }
  }

  return convert(lines.join('\n').trim(), true)
}

/**
 * 年月日格式化当前时间
 * - 格式： 2024-08-09
 */
function formatDateToYMD(date: Date = new Date()): string {
  const year = date.getFullYear()
  // 月份是从0开始的，所以要+1
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * 更新changelog
 */
export async function updateChangelog(outputPath: string, markdown: string, releaseVersionName: string) {
  let changelogMD: string
  if (existsSync(outputPath)) {
    console.info(`Updating ${outputPath}`)
    changelogMD = await fsp.readFile(outputPath, 'utf8')
  }
  else {
    console.info(`Creating  ${outputPath}`)
    changelogMD = '# Changelog\n\nAll notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.\n'
  }

  // 添加版本头部
  const newMd = `## ${releaseVersionName} (${formatDateToYMD()})\n\n${markdown}`

  const lastEntry = changelogMD.match(/^##\s+(?:\S.*)?$/m)

  if (lastEntry) {
    changelogMD = `${changelogMD.slice(0, lastEntry.index)}${newMd}\n\n${changelogMD.slice(lastEntry.index)}`
  }
  else {
    changelogMD += `\n${newMd}`
  }

  await fsp.writeFile(outputPath, changelogMD, 'utf-8')
}

/**
 * 分组
 */
function groupBy<T>(items: T[], key: string, groups: Record<string, T[]> = {}) {
  for (const item of items) {
    const v = (item as any)[key] as string
    groups[v] = groups[v] || []
    groups[v].push(item)
  }
  return groups
}

function capitalize(str: string) {
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
