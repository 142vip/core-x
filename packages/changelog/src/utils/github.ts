import { $fetch } from 'ofetch'
import { VipColor, VipConsole, VipQs } from '@142vip/utils'
import type { Commit, GitAuthorInfo } from '../changelog.interface'

function getHeaders(token: string) {
  return {
    accept: 'application/vnd.github.v3+json',
    authorization: `token ${token}`,
  }
}

async function getAuthorInfo(options: {
  token: string
  baseUrlApi: string
  repo: string
}, info: GitAuthorInfo): Promise<GitAuthorInfo> {
  if (info.login)
    return info

  // token not provided, skip github resolving
  if (!options.token)
    return info

  try {
    const data = await $fetch(`https://${options.baseUrlApi}/search/users?q=${encodeURIComponent(info.email)}`, {
      headers: getHeaders(options.token),
    })
    info.login = data.items[0].login
  }
  catch { }

  if (info.login)
    return info

  if (info.commits.length) {
    try {
      const data = await $fetch(`https://${options.baseUrlApi}/repos/${options.repo}/commits/${info.commits[0]}`, {
        headers: getHeaders(options.token),
      })
      info.login = data.author.login
    }
    catch { }
  }
  return info
}

async function resolveAuthors(commits: Commit[], options: {
  token?: string
  baseUrlApi: string
  repo: string
}) {
  const authorInfoMap = new Map<string, GitAuthorInfo>()

  commits.forEach((commit) => {
    commit.resolvedAuthors = commit.authors
      .map((a, idx) => {
        if (!a.email || !a.name)
          return null
        if (!authorInfoMap.has(a.email)) {
          authorInfoMap.set(a.email, { commits: [], name: a.name, email: a.email })
        }
        const info = authorInfoMap.get(a.email)!

        // record commits only for the first author
        if (idx === 0)
          info.commits.push(commit.shortHash)

        return info
      })
      .filter(v => v != null)
  })

  const authors = Array.from(authorInfoMap.values())
  const resolved = await Promise.all(authors.map(info => getAuthorInfo({
    token: options.token,
    baseUrlApi: options.baseUrlApi,
    repo: options.repo,
  }, info)))

  const loginSet = new Set<string>()
  const nameSet = new Set<string>()

  return resolved
    .sort((a, b) => (a.login || a.name).localeCompare(b.login || b.name))
    .filter((i) => {
      if (i.login && loginSet.has(i.login))
        return false
      if (i.login) {
        loginSet.add(i.login)
      }
      else {
        if (nameSet.has(i.name))
          return false
        nameSet.add(i.name)
      }
      return true
    })
}

/**
 * 判断是否有tag
 */
async function isExistTag(tag: string, options: {
  baseUrlApi: string
  repo: string
  token: string
}): Promise<boolean> {
  try {
    await $fetch(`https://${options.baseUrlApi}/repos/${options.repo}/git/ref/tags/${tag}`, {
      headers: getHeaders(options.token),
    })
    return true
  }
  catch {
    return false
  }
}

/**
 * 生成手动release发布的地址链接
 */
function generateReleaseUrl(markdown: string, config: {
  baseUrl: string
  repo: string
  name: string
  to: string
  prerelease: boolean
}): string {
  const baseUrl = `https://${config.baseUrl}/${config.repo}/releases/new`
  const queryParams = VipQs.stringify({
    title: config.name || config.to,
    body: markdown,
    tag: config.to,
    prerelease: config.prerelease,
  })
  // `https://${config.baseUrl}/${config.repo}/releases/new?title=${encodeURIComponent(String(config.name || config.to))}&body=${encodeURIComponent(String(markdown))}&tag=${encodeURIComponent(String(config.to))}&prerelease=${config.prerelease}`
  return `${baseUrl}?${queryParams}`
}

/**
 * 打印手动发布地址
 * - 默认成功输出
 */
function printReleaseUrl(webUrl: string, success: boolean = true): void {
  const errMsg = success
    ? `\n${VipColor.yellow('使用以下链接手动发布新的版本：')}\n`
    : `\n${VipColor.red('无法创建发布。使用以下链接手动创建：')}\n`

  VipConsole.error(`${errMsg}${VipColor.yellow(webUrl)}\n`)
}

export const GithubAPI = {
  getAuthorInfo,
  isExistTag,
  generateReleaseUrl,
  printReleaseUrl,
  getHeaders,
  resolveAuthors,
}
