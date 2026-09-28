import type { ReleaseVersionOperation } from '@142vip/release-version'
import { releaseApi } from '@142vip/release-version'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import {
  buildReleaseVersionOptions,
  isPackagePendingRelease,
  printPreCheckRelease,
  releasePackage,
} from '../src/utils/release-package.util'

interface GenerateChangelogInfoResult {
  config: {
    from: string
    to: string
    prerelease: boolean
  }
  markdown: string
  commits: never[]
  releaseUrl: string
}

const printReleasePlanMock = jest.fn()

jest.mock('@142vip/changelog', () => {
  const generateChangelogInfoMock = jest.fn<() => Promise<GenerateChangelogInfoResult>>()
  return {
    changelogApi: {
      generateChangelogInfo: generateChangelogInfoMock,
    },
    parseCliOptions: (cliOptions: { name?: string, prerelease?: boolean }) => ({
      from: 'v0.0.1-alpha.1',
      to: cliOptions.name ?? 'v0.0.1-alpha.2',
      prerelease: cliOptions.prerelease ?? false,
      name: cliOptions.name ?? 'v0.0.1-alpha.2',
      baseUrl: 'github.com',
      baseUrlApi: 'api.github.com',
      repo: '142vip/core-x',
      types: {},
      scopeMap: {},
      titles: {},
      contributors: false,
      capitalize: true,
      group: true,
      emoji: true,
    }),
    __generateChangelogInfoMock: generateChangelogInfoMock,
  }
})

const generateChangelogInfoMock = (
  jest.requireMock('@142vip/changelog') as {
    __generateChangelogInfoMock: jest.Mock<() => Promise<GenerateChangelogInfoResult>>
  }
).__generateChangelogInfoMock

jest.mock('@142vip/release-version', () => ({
  releaseApi: {
    releaseVersion: jest.fn(() => Promise.resolve(undefined)),
    releaseVersionInfo: jest.fn(),
  },
}))

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipGit: {
      ...actual.VipGit,
      getRecentCommitsByScope: jest.fn(() => ['feat(utils): add helper']),
    },
  }
})

describe('buildReleaseVersionOptions', () => {
  it('根仓库发版默认打 tag', () => {
    const options = buildReleaseVersionOptions()
    expect(options.tag).toBe(true)
    expect(options.changelog).toBe(true)
    expect(options.commit).toBe('chore(release): publish v%s')
    expect(options.confirm).toBe(false)
  })

  it('子包发版不打 tag 且写入 scopeName', () => {
    const options = buildReleaseVersionOptions({
      name: '@142vip/utils',
      version: '1.0.0',
      path: '/tmp/packages/utils',
      private: false,
    })
    expect(options.tag).toBe(false)
    expect(options.scopeName).toBe('@142vip/utils')
    expect(options.cwd).toBe('/tmp/packages/utils')
    expect(options.commit).toBe('release(@142vip/utils): publish `v%s`')
  })
})

describe('printPreCheckRelease', () => {
  it('打印各包预检结果并在存在待发版包时给出警告', async () => {
    const { VipGit } = jest.requireMock('@142vip/utils') as {
      VipGit: { getRecentCommitsByScope: jest.Mock }
    }
    VipGit.getRecentCommitsByScope.mockImplementation((name: unknown) => {
      if (name === '@142vip/utils') {
        return ['feat(utils): add helper']
      }
      return ['release(@142vip/axios): publish v1.0.0']
    })

    await printPreCheckRelease(['@142vip/utils', '@142vip/axios'])
  })
})

describe('isPackagePendingRelease', () => {
  it('最近提交非 release(scope) 时视为待发版', () => {
    expect(isPackagePendingRelease('@142vip/utils')).toBe(true)
  })

  it('支持自定义 release 提交前缀', () => {
    const { VipGit } = jest.requireMock('@142vip/utils') as {
      VipGit: { getRecentCommitsByScope: jest.Mock }
    }
    VipGit.getRecentCommitsByScope.mockReturnValueOnce(['release(@142vip/utils): publish v1.0.0'])
    expect(isPackagePendingRelease('@142vip/utils')).toBe(false)
  })
})

describe('releasePackage', () => {
  const mockedReleaseVersion = jest.mocked(releaseApi.releaseVersion)
  const mockedReleaseVersionInfo = jest.mocked(releaseApi.releaseVersionInfo)

  beforeEach(() => {
    mockedReleaseVersion.mockClear()
    mockedReleaseVersionInfo.mockReset()
    generateChangelogInfoMock.mockReset()
    printReleasePlanMock.mockReset()
  })

  it('默认走 releaseVersion 正式发版', async () => {
    await releasePackage()
    expect(mockedReleaseVersion).toHaveBeenCalledTimes(1)
    expect(mockedReleaseVersionInfo).not.toHaveBeenCalled()
  })

  it('changelogPrerelease 可覆盖为 Pre-release', async () => {
    await releasePackage(undefined, { changelogPrerelease: true })
    expect(mockedReleaseVersion).toHaveBeenCalledWith(expect.objectContaining({
      changelogPrerelease: true,
    }))
  })

  it('dry-run 仅预览，不调用 releaseVersion', async () => {
    mockedReleaseVersionInfo.mockResolvedValue({
      options: {
        changelog: true,
        commit: { message: 'chore(release): publish v%s', all: true, skipGitVerify: true },
        tag: { name: 'v' },
        push: true,
        cwd: process.cwd(),
        ignoreScripts: false,
      },
      state: {
        release: undefined,
        currentVersionSource: '',
        currentVersion: '0.0.1-alpha.1',
        newVersion: '0.0.1-alpha.2',
        commitMessage: '',
        tagName: '',
      },
      printReleasePlan: printReleasePlanMock,
    } as unknown as ReleaseVersionOperation)

    generateChangelogInfoMock.mockResolvedValue({
      config: {
        from: 'v0.0.1-alpha.1',
        to: 'v0.0.1-alpha.2',
        prerelease: false,
      },
      markdown: '## feat: test',
      commits: [],
      releaseUrl: 'https://github.com/142vip/core-x/releases/new',
    })

    await releasePackage(undefined, { dryRun: true })

    expect(mockedReleaseVersionInfo).toHaveBeenCalledTimes(1)
    expect(printReleasePlanMock).toHaveBeenCalledWith('发布计划预览：')
    expect(mockedReleaseVersion).not.toHaveBeenCalled()
    expect(generateChangelogInfoMock).toHaveBeenCalledTimes(1)
  })
})
