import type { ChangelogGenerateOptions, Commit } from './changelog.interface'
import {
  HttpMethod,
  VipColor,
  VipConsole,
  VipDayjs,
  VipGit,
  VipLodash,
  VipNodeJS,
} from '@142vip/utils'
import { $fetch } from 'ofetch'
import { getGitDiff, parseCommits } from './git'
import { GithubAPI, MarkdownAPI } from './utils'

/**
 * 处理git changelog记录生成
 */
export async function changelogGenerate(
  config: ChangelogGenerateOptions,
): Promise<{
    config: ChangelogGenerateOptions
    commits: Commit[]
    markdown: string
    releaseUrl: string
  }> {
  const rawCommits = await getGitDiff({
    from: config.from,
    to: config.to,
  })

  // 解析commit信息 todo 这里的参数类型需要明确
  const commits = parseCommits(rawCommits, config.scopeMap)

  // 添加贡献者
  if (config.contributors) {
    const token = VipNodeJS.getProcessEnv('GITHUB_TOKEN') || VipNodeJS.getProcessEnv('TOKEN')
    await GithubAPI.resolveAuthors(commits, {
      token,
      baseUrlApi: config.baseUrlApi,
      repo: config.repo,
    })
  }
  // 生成文档
  const markdown = await generateMarkdown(commits, config)

  // 生成发布链接
  const releaseUrl = GithubAPI.generateReleaseUrl(markdown, {
    baseUrl: config.baseUrl,
    name: config.name,
    repo: config.repo,
    to: config.to,
    prerelease: config.prerelease,
  })

  return { config, markdown, commits, releaseUrl }
}

/**
 * 更新changelog
 */
export async function changelogUpdate(
  outputPath: string,
  markdown: string,
  releaseVersionName: string,
  markdownHeader: string,
): Promise<void> {
  let changelogMD: string
  const exit = VipNodeJS.existPath(outputPath)

  if (exit) {
    VipConsole.log(`Updating ${outputPath}`)
    changelogMD = await VipNodeJS.readFileToStrByUTF8(outputPath)
  }
  else {
    VipConsole.log(`Creating  ${outputPath}`)
    changelogMD = markdownHeader
  }

  // 添加版本头部
  const newMd = `## ${releaseVersionName} (${VipDayjs.formatDateToYMD()})\n\n${markdown}`

  const lastEntry = changelogMD.match(/^##\s+(?:\S.*)?$/m)

  if (lastEntry) {
    changelogMD = `${changelogMD.slice(0, lastEntry.index)}${newMd}\n\n${changelogMD.slice(lastEntry.index)}`
  }
  else {
    changelogMD += `\n${newMd}`
  }

  // 写入文件
  await VipNodeJS.writeFileByUTF8(outputPath, changelogMD)
}

/**
 * 发送github发布
 */
export async function sendGithubRelease(options: {
  token: string
  repo: string
  baseUrlApi: string
  name: string
  tag: string
  content: string
  draft?: boolean
  prerelease?: boolean
}) {
  let url = `https://${options.baseUrlApi}/repos/${options.repo}/releases`
  let method = HttpMethod.POST

  // token信息
  const headers = {
    accept: 'application/vnd.github.v3+json',
    authorization: `token ${options.token}`,
  }

  // 存在tag则更新
  try {
    const exists = await $fetch(`https://${options.baseUrlApi}/repos/${options.repo}/releases/tags/${options.tag}`, {
      headers,
    })
    if (exists.url) {
      url = exists.url
      method = HttpMethod.PATCH
    }
  }
  catch {
    // 预发布存在异常，fix CI err
  }

  const body = {
    body: options.content,
    name: options.name,
    tag_name: options.tag,
    // 草稿
    // draft: options.draft || false,
    draft: true,
    // 预发布
    // prerelease: options.prerelease || true,
    prerelease: true,
  }
  if (method === HttpMethod.POST) {
    VipConsole.log(VipColor.cyan('Creating Release Notes...'))
  }
  else {
    VipConsole.log(VipColor.cyan('Updating Release Notes...'))
  }

  const res = await $fetch(url, {
    method,
    body: JSON.stringify(body),
    headers,
  })
  console.log(333, res)
  VipConsole.log(VipColor.green(`Released on ${res.html_url}`))
}

/**
 * 生成Markdown文档
 */
export async function generateMarkdown(commits: Commit[], options: {
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
    lines.push(
      ...MarkdownAPI.formatSection(commitsByType, {
        emoji: options.emoji,
        group: options.group,
        scopeName: options.scopeName,
        baseUrl: options.baseUrl,
        repo: options.repo,
        capitalize: options.capitalize,
        scopeMap: options.scopeMap,
        sectionName: options.types[type].title,
      }),
    )
  }

  // 没有变更内容
  if (!lines.length) {
    lines.push(MarkdownAPI.getNoSignificantChanges())
  }
  else {
    // 发布模块包，添加NPM版本
    if (options.scopeName != null) {
      lines.push(MarkdownAPI.getNPMVersionDescription(options.scopeName, options.name))
    }
    // 发布根目录，添加Github Release版本
    else {
      lines.push(MarkdownAPI.getGithubVersionDescription({
        baseUrl: options.baseUrl,
        repo: options.repo,
        fromVersion: options.from,
        toVersion: options.name,
      }))
    }
  }

  // commit提交信息emoji表情转换
  return VipGit.convertEmoji(lines.join('\n').trim(), true)
}
