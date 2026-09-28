import { afterEach, describe, expect, it, jest } from '@jest/globals'
import { githubAPI } from '../src/core/apis/github.api'

describe('githubAPI.generateReleaseUrl', () => {
  it('release 链接携带 prerelease 查询参数', () => {
    const latestUrl = githubAPI.generateReleaseUrl('# changelog', {
      baseUrl: 'github.com',
      repo: '142vip/core-x',
      name: 'v1.0.0',
      to: 'v1.0.0',
      prerelease: false,
    })
    expect(latestUrl).toContain('prerelease=false')

    const preUrl = githubAPI.generateReleaseUrl('# changelog', {
      baseUrl: 'github.com',
      repo: '142vip/core-x',
      name: 'v1.0.0',
      to: 'v1.0.0',
      prerelease: true,
    })
    expect(preUrl).toContain('prerelease=true')
  })
})

describe('githubAPI.fetchGitHubJson', () => {
  const originalFetch = globalThis.fetch

  afterEach(() => {
    globalThis.fetch = originalFetch
  })

  it('解析 JSON 响应', async () => {
    const fetchMock = jest.fn<typeof fetch>().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ html_url: 'https://github.com/142vip/core-x/releases/tag/v1.0.0' }),
    } as Response)
    globalThis.fetch = fetchMock

    const data = await githubAPI.fetchGitHubJson<{ html_url: string }>(
      'https://api.github.com/repos/142vip/core-x/releases/tags/v1.0.0',
      { token: 'test-token' },
    )
    expect(data.html_url).toContain('releases/tag/v1.0.0')
  })

  it('非 2xx 时抛出错误', async () => {
    const fetchMock = jest.fn<typeof fetch>().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    } as Response)
    globalThis.fetch = fetchMock

    await expect(
      githubAPI.fetchGitHubJson('https://api.github.com/not-found'),
    ).rejects.toThrow('GitHub API 404')
  })
})

describe('githubAPI.buildGithubReleaseRequestBody', () => {
  it('非预发布时包含 make_latest', () => {
    expect(githubAPI.buildGithubReleaseRequestBody({
      content: 'release notes',
      name: 'v1.0.0',
      tag: 'v1.0.0',
      prerelease: false,
    })).toEqual({
      body: 'release notes',
      name: 'v1.0.0',
      tag_name: 'v1.0.0',
      draft: false,
      prerelease: false,
      make_latest: true,
    })
  })

  it('预发布时不包含 make_latest', () => {
    const body = githubAPI.buildGithubReleaseRequestBody({
      content: 'release notes',
      name: 'v0.1.0-alpha.1',
      tag: 'v0.1.0-alpha.1',
      prerelease: true,
    })
    expect(body.prerelease).toBe(true)
    expect(body).not.toHaveProperty('make_latest')
  })

  it('未传 prerelease 时默认为 Latest', () => {
    const body = githubAPI.buildGithubReleaseRequestBody({
      content: 'release notes',
      name: 'v1.0.0',
      tag: 'v1.0.0',
    })
    expect(body.prerelease).toBe(false)
    expect(body.make_latest).toBe(true)
  })
})
