import {
  commitLiner,
  GIT_COMMIT_DEFAULT_SCOPES,
  GIT_COMMIT_DEFAULT_TYPES,
} from '@142vip/commit-linter'
import {
  VipColor,
  VipExecutor,
  VipGit,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipPackageCliCommander,
} from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { commitMain } from '../src/commands/commit'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/commit-linter', () => ({
  commitLiner: jest.fn(() => ({
    type: 'feat',
    scope: '@142vip/utils',
    subject: 'add test',
    commit: 'feat(@142vip/utils): add test',
  })),
  GIT_COMMIT_DEFAULT_SCOPES: ['CHANGELOG'],
  GIT_COMMIT_DEFAULT_TYPES: ['feat', 'fix'],
}))

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptSelect: jest.fn(),
      promptSearch: jest.fn(),
      promptInputRequired: jest.fn(),
      promptConfirm: jest.fn(),
    },
    VipMonorepo: {
      ...actual.VipMonorepo,
      getPkgNames: jest.fn(() => ['@142vip/utils']),
    },
    VipExecutor: {
      ...actual.VipExecutor,
      commandStandardExecutor: jest.fn(() => Promise.resolve()),
    },
    VipGit: {
      ...actual.VipGit,
      execCommit: jest.fn(),
      getRemoteNames: jest.fn(() => ['origin']),
      execPush: jest.fn(),
    },
    VipNodeJS: {
      ...actual.VipNodeJS,
      existErrorProcess: jest.fn(() => {
        throw new Error('exit')
      }),
    },
    vipLogger: {
      ...actual.vipLogger,
      logByBlank: jest.fn(),
    },
  }
})

describe('commitMain', () => {
  const promptSelect = jest.mocked(VipInquirer.promptSelect)
  const promptSearch = jest.mocked(VipInquirer.promptSearch)
  const promptInputRequired = jest.mocked(VipInquirer.promptInputRequired)
  const promptConfirm = jest.mocked(VipInquirer.promptConfirm)
  const commandStandardExecutor = jest.mocked(VipExecutor.commandStandardExecutor)
  const execCommit = jest.mocked(VipGit.execCommit)
  const execPush = jest.mocked(VipGit.execPush)
  const commitLinerMock = jest.mocked(commitLiner)

  beforeEach(() => {
    promptSelect.mockReset()
    promptSearch.mockReset()
    promptInputRequired.mockReset()
    promptConfirm.mockReset()
    commandStandardExecutor.mockClear()
    execCommit.mockClear()
    execPush.mockClear()
    commitLinerMock.mockClear()
  })

  it('注册 commit 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    expect(findCommand(program, 'commit').name()).toBe('commit')
  })

  it('vip 模式完成规范提交', async () => {
    promptSelect
      .mockResolvedValueOnce(GIT_COMMIT_DEFAULT_TYPES[0])
      .mockResolvedValueOnce('origin')
    promptSearch.mockResolvedValueOnce('@142vip/utils')
    promptInputRequired.mockResolvedValueOnce('add test')
    promptConfirm.mockResolvedValueOnce(true)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await runCliArgv(program, ['commit', 'vip', '--push'])

    expect(commitLinerMock).toHaveBeenCalled()
    expect(commandStandardExecutor).toHaveBeenCalledWith('git add .')
    expect(execCommit).toHaveBeenCalledWith(['-m', `'feat(@142vip/utils): add test'`])
    expect(execPush).toHaveBeenCalledWith(['-u', 'origin', 'HEAD'])
  })

  it('用户取消提交时退出', async () => {
    promptSelect.mockResolvedValueOnce('feat')
    promptSearch.mockResolvedValueOnce(GIT_COMMIT_DEFAULT_SCOPES[0])
    promptInputRequired.mockResolvedValueOnce('cancel')
    promptConfirm.mockResolvedValueOnce(false)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await expect(runCliArgv(program, ['commit', 'vip'])).rejects.toThrow('exit')

    expect(vipLogger.logByBlank).toHaveBeenCalledWith(`${VipColor.redBright('用户取消提交，欢迎下次使用')}`)
    expect(VipNodeJS.existErrorProcess).toHaveBeenCalled()
  })
})
