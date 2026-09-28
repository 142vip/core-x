import { releaseApi } from '@142vip/release-version'
import {
  GitGeneralBranch,
  VipColor,
  VipConsole,
  VipGit,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipPackageCliCommander,
} from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { printSplitPkgCommitLogs, releaseMain } from '../src/commands/release'
import { releasePackage } from '../src/utils/release-package.util'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/release-version', () => ({
  releaseApi: {
    releaseVersion: jest.fn(() => Promise.resolve(undefined)),
  },
}))

jest.mock('../src/utils/release-package.util', () => ({
  printPreCheckRelease: jest.fn(() => Promise.resolve()),
  releasePackage: jest.fn(() => Promise.resolve()),
}))

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptSearch: jest.fn(),
      promptConfirm: jest.fn(),
      promptConfirmWithSuccessExit: jest.fn(),
    },
    VipGit: {
      ...actual.VipGit,
      validateBranch: jest.fn(),
      getRecentCommitsByScope: jest.fn(() => ['feat(utils): init']),
    },
    VipMonorepo: {
      ...actual.VipMonorepo,
      getPackageJSONPathList: jest.fn(() => ['packages/utils/package.json']),
      getPkgNames: jest.fn(() => ['@142vip/utils']),
      getPkgJSONPath: jest.fn(() => ({
        name: '@142vip/utils',
        version: '1.0.0',
        path: '/tmp/packages/utils',
        private: false,
      })),
    },
    VipNodeJS: {
      ...actual.VipNodeJS,
      existErrorProcess: jest.fn(() => {
        throw new Error('exit')
      }),
      existSuccessProcess: jest.fn(() => {
        throw new Error('exit-success')
      }),
    },
    vipLogger: {
      ...actual.vipLogger,
      logByBlank: jest.fn(),
    },
    VipConsole: {
      ...actual.VipConsole,
      log: jest.fn(),
    },
  }
})

describe('printSplitPkgCommitLogs', () => {
  it('待发版提交以绿色展示', () => {
    const logByBlank = jest.mocked(vipLogger.logByBlank)
    logByBlank.mockClear()
    printSplitPkgCommitLogs('@142vip/utils', [
      'feat(utils): add api',
      'release(@142vip/utils): publish v1.0.0',
    ])

    expect(logByBlank).toHaveBeenCalledWith(
      expect.stringContaining(VipColor.green(' - feat(utils): add api')),
    )
  })
})

describe('releaseMain', () => {
  const validateBranch = jest.mocked(VipGit.validateBranch)
  const existSuccessProcess = jest.mocked(VipNodeJS.existSuccessProcess)
  const existErrorProcess = jest.mocked(VipNodeJS.existErrorProcess)
  const consoleLog = jest.mocked(VipConsole.log)
  const mockedReleasePackage = jest.mocked(releasePackage)
  const mockedReleaseVersion = jest.mocked(releaseApi.releaseVersion)
  const promptSearch = jest.mocked(VipInquirer.promptSearch)
  const promptConfirmWithSuccessExit = jest.mocked(VipInquirer.promptConfirmWithSuccessExit)

  beforeEach(() => {
    validateBranch.mockClear()
    existSuccessProcess.mockClear()
    existErrorProcess.mockClear()
    consoleLog.mockClear()
    mockedReleasePackage.mockClear()
    mockedReleaseVersion.mockClear()
    promptSearch.mockReset()
    promptConfirmWithSuccessExit.mockReset()
  })

  it('注册 release 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await releaseMain(program)
    expect(findCommand(program, 'release').name()).toBe('release')
  })

  it('--check-branch 时校验分支', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await releaseMain(program)
    await runCliArgv(program, ['release', '--vip', '--check-branch', 'next'])

    expect(validateBranch).toHaveBeenCalledWith(['next'])
  })

  it('--check-release 时打印预检并正常退出', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await releaseMain(program)
    await expect(
      runCliArgv(program, ['release', '--vip', '--check-release', '-F', './packages/*']),
    ).rejects.toThrow('exit-success')

    expect(existSuccessProcess).toHaveBeenCalled()
  })

  it('vip 模式交互选择子包后发版', async () => {
    promptSearch.mockResolvedValueOnce('@142vip/utils')
    promptConfirmWithSuccessExit.mockResolvedValueOnce(undefined)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await releaseMain(program)
    await runCliArgv(program, ['release', '--vip', '-F', './packages/*'])

    expect(mockedReleasePackage).toHaveBeenCalledWith(
      expect.objectContaining({ name: '@142vip/utils' }),
      {},
    )
  })

  it('vip 模式选择 main 时发版根仓库', async () => {
    promptSearch.mockResolvedValueOnce(GitGeneralBranch.MAIN)
    promptConfirmWithSuccessExit.mockResolvedValueOnce(undefined)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await releaseMain(program)
    await runCliArgv(program, ['release', '--vip', '--dry-run'])

    expect(mockedReleasePackage).toHaveBeenCalledWith(undefined, { dryRun: true })
  })

  it('非 vip 且缺少 package 时报错退出', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await releaseMain(program)
    await expect(runCliArgv(program, ['release'])).rejects.toThrow('exit')

    expect(consoleLog).toHaveBeenCalled()
    expect(existErrorProcess).toHaveBeenCalled()
    expect(mockedReleaseVersion).not.toHaveBeenCalled()
  })
})
