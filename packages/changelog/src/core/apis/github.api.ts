import type { Commit, GitAuthorInfo } from '../changelog.interface'
import { HttpMethod, VipColor, VipConsole, vipLogger, vipQs } from '@142vip/utils'

interface GitHubSearchUsersResponse {
  items: Array<{ login: string }>
}

interface GitHubCommitResponse {
  author: { login: string }
}

interface GitHubReleaseResponse {
  url: string
  html_url: string
}

function getHeaders(token: string) {
  return {
    accept: 'application/vnd.github.v3+json',
    authorization: `token ${token}`,
  }
}

/** GitHub REST 请求（Node 18+ 原生 fetch） */
async function fetchGitHubJson<T>(url: string, init: {
  token?: string
  method?: string
  body?: Record<string, unknown>
} = {}): Promise<T> {
  const headers: Record<string, string> = {
    accept: 'application/vnd.github.v3+json',
    ...(init.token != null ? { authorization: `token ${init.token}` } : {}),
    ...(init.body != null ? { 'content-type': 'application/json' } : {}),
  }

  const response = await fetch(url, {
    method: init.method ?? HttpMethod.GET,
    headers,
    body: init.body != null ? JSON.stringify(init.body) : undefined,
  })

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} ${response.statusText}`)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return await response.json() as T
}

async function getAuthorInfo(options: {
  token: string
  baseUrlApi: string
  repo: string
}, info: GitAuthorInfo): Promise<GitAuthorInfo> {
  if (info.login) {
    return info
  }

  if (!options.token) {
    return info
  }

  try {
    const data = await fetchGitHubJson<GitHubSearchUsersResponse>(
      `https://${options.baseUrlApi}/search/users?q=${encodeURIComponent(info.email)}`,
      { token: options.token },
    )
    info.login = data.items[0]?.login
  }
  catch { }

  if (info.login) {
    return info
  }

  if (info.commits.length) {
    try {
      const data = await fetchGitHubJson<GitHubCommitResponse>(
        `https://${options.baseUrlApi}/repos/${options.repo}/commits/${info.commits[0]}`,
        { token: options.token },
      )
      info.login = data.author.login
    }
    catch {}
  }
  return info
}

/** 为 commit 列表解析 GitHub 贡献者 login */
async function resolveAuthors(commits: Commit[], options: {
  token?: string
  baseUrlApi: string
  repo: string
}) {
  const authorInfoMap = new Map<string, GitAuthorInfo>()

  commits.forEach((commit) => {
    commit.resolvedAuthors = commit.authors
      .map((author, idx) => {
        if (!author.email || !author.name) {
          return null
        }
        if (!authorInfoMap.has(author.email)) {
          authorInfoMap.set(author.email, { commits: [], name: author.name, email: author.email })
        }
        const info = authorInfoMap.get(author.email)!

        if (idx === 0) {
          info.commits.push(commit.shortHash)
        }

        return info
      })
      .filter(v => v != null)
  })

  const authors = Array.from(authorInfoMap.values())
  if (options.token == null) {
    return authors
  }

  const resolved = await Promise.all(authors.map(info => getAuthorInfo({
    token: options.token!,
    baseUrlApi: options.baseUrlApi,
    repo: options.repo,
  }, info)))

  const loginSet = new Set<string>()
  const nameSet = new Set<string>()

  return resolved
    .sort((a, b) => (a.login || a.name).localeCompare(b.login || b.name))
    .filter((item) => {
      if (item.login && loginSet.has(item.login)) {
        return false
      }
      if (item.login) {
        loginSet.add(item.login)
      }
      else {
        if (nameSet.has(item.name)) {
          return false
        }
        nameSet.add(item.name)
      }
      return true
    })
}

/** 检查远程 tag 是否存在 */
async function isExistTag(tag: string, options: {
  baseUrlApi: string
  repo: string
  token: string
}): Promise<boolean> {
  try {
    await fetchGitHubJson(
      `https://${options.baseUrlApi}/repos/${options.repo}/git/ref/tags/${tag}`,
      { token: options.token },
    )
    return true
  }
  catch {
    return false
  }
}

/** 生成 GitHub Web「新建 Release」链接（token 缺失时手动发布） */
function generateReleaseUrl(markdown: string, config: {
  baseUrl: string
  repo: string
  name: string
  to: string
  prerelease: boolean
}): string {
  const baseUrl = `https://${config.baseUrl}/${config.repo}/releases/new`
  const queryParams = vipQs.stringify({
    title: config.name || config.to,
    body: markdown,
    tag: config.to,
    prerelease: config.prerelease,
  })
  return `${baseUrl}?${queryParams}`
}

/**
 * 构建 GitHub Release API 请求体
 * - 非预发布时附带 `make_latest: true`
 */
function buildGithubReleaseRequestBody(options: {
  content: string
  name: string
  tag: string
  draft?: boolean
  prerelease?: boolean
}) {
  const prerelease = options.prerelease ?? false
  return {
    body: options.content,
    name: options.name,
    tag_name: options.tag,
    draft: options.draft ?? false,
    prerelease,
    ...(prerelease ? {} : { make_latest: true }),
  }
}

/** 创建或更新 GitHub Release */
async function createGithubRelease(options: {
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

  try {
    const exists = await fetchGitHubJson<GitHubReleaseResponse>(
      `https://${options.baseUrlApi}/repos/${options.repo}/releases/tags/${options.tag}`,
      { token: options.token },
    )
    if (exists.url) {
      url = exists.url
      method = HttpMethod.PATCH
    }
  }
  catch {
    // tag 尚无 release 时走新建
  }

  const body = buildGithubReleaseRequestBody({
    content: options.content,
    name: options.name,
    tag: options.tag,
    draft: options.draft,
    prerelease: options.prerelease,
  })

  if (method === HttpMethod.POST) {
    VipConsole.log(VipColor.cyan('Creating Release Notes...'))
  }
  else {
    VipConsole.log(VipColor.cyan('Updating Release Notes...'))
  }

  const res = await fetchGitHubJson<GitHubReleaseResponse>(url, {
    token: options.token,
    method,
    body,
  })
  VipConsole.log(VipColor.green(`Released on ${res.html_url}`))
}

function printReleaseUrl(webUrl: string, success: boolean = true): void {
  const errMsg = success
    ? `\n${VipColor.yellow('使用以下链接手动发布新的版本：')}\n`
    : `\n${VipColor.red('无法创建发布。使用以下链接手动创建：')}\n`

  VipConsole.error(errMsg)
  vipLogger.logByBlank(`<${VipColor.yellow(webUrl)}>`)
}

/** GitHub REST 与 Release 相关 API */
export class GithubAPI {
  getAuthorInfo = getAuthorInfo
  isExistTag = isExistTag
  generateReleaseUrl = generateReleaseUrl
  buildGithubReleaseRequestBody = buildGithubReleaseRequestBody
  fetchGitHubJson = fetchGitHubJson
  printReleaseUrl = printReleaseUrl
  getHeaders = getHeaders
  resolveAuthors = resolveAuthors
  createGithubRelease = createGithubRelease
}

/** 默认单例，供包内与对外调用 */
export const githubAPI = new GithubAPI()
