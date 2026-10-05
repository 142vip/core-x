import {
  commitLinter,
  GIT_COMMIT_DEFAULT_SCOPES,
  GIT_COMMIT_DEFAULT_TYPES,
} from '@142vip/commit-linter'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipGit,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipPackageCliCommander,
} from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { commitMain } from '../src/commands/commit'
import * as commitUtil from '../src/utils/commit.util'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/commit-linter', () => {
  const actual = jest.requireActual<typeof import('@142vip/commit-linter')>('@142vip/commit-linter')
  return {
    ...actual,
    commitLinter: jest.fn(() => ({
      type: 'feat',
      scope: '@142vip/utils',
      subject: 'add test',
      commit: 'feat(@142vip/utils): add test',
    })),
  }
})

jest.mock('../src/utils/commit.util', () => {
  const actual = jest.requireActual<typeof import('../src/utils/commit.util')>('../src/utils/commit.util')
  return {
    ...actual,
    loadCommitLinterConfigForCli: jest.fn(() => ({})),
    resolveCommitLinterConfigPath: jest.fn(() => '/mock/commit-linter.config.mjs'),
  }
})

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
      println: jest.fn(),
    },
  }
})

describe('commitMain', () => {
  const loadCommitLinterConfigForCli = jest.mocked(commitUtil.loadCommitLinterConfigForCli)
  const promptSelect = jest.mocked(VipInquirer.promptSelect)
  const promptSearch = jest.mocked(VipInquirer.promptSearch)
  const promptInputRequired = jest.mocked(VipInquirer.promptInputRequired)
  const promptConfirm = jest.mocked(VipInquirer.promptConfirm)
  const commandStandardExecutor = jest.mocked(VipExecutor.commandStandardExecutor)
  const execCommit = jest.mocked(VipGit.execCommit)
  const execPush = jest.mocked(VipGit.execPush)
  const commitLinterMock = jest.mocked(commitLinter)

  beforeEach(() => {
    promptSelect.mockReset()
    promptSearch.mockReset()
    promptInputRequired.mockReset()
    promptConfirm.mockReset()
    commandStandardExecutor.mockClear()
    execCommit.mockClear()
    execPush.mockClear()
    commitLinterMock.mockClear()
  })

  it('注册 commit 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    expect(findCommand(program, 'commit').name()).toBe('commit')
  })

  it('-f 将配置文件路径传给 loadCommitLinterConfigForCli', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await runCliArgv(program, ['commit', '--quiet', '-f', './commit-linter.config.js', '-s', './packages/*'])
    expect(loadCommitLinterConfigForCli).toHaveBeenCalledWith('./commit-linter.config.js')
  })

  it('--quiet --dry-run 打印生效 commitLinter，不执行校验', async () => {
    loadCommitLinterConfigForCli.mockReturnValueOnce({
      scopeGlobs: ['./packages/*'],
      scopes: ['README'],
    })
    const log = jest.spyOn(VipConsole, 'log').mockImplementation(() => {})

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await runCliArgv(program, ['commit', '--quiet', '--dry-run'])

    expect(commitLinterMock).not.toHaveBeenCalled()
    const printed = log.mock.calls.map(call => String(call[0])).join('\n')
    expect(printed).toContain('参数')
    expect(printed).toContain('scopeGlobs')
    expect(printed).toContain('./packages/*')
    expect(printed).toContain('README')
    expect(printed).toContain('校验 commit 首行')
  })

  it('--quiet -s 校验当前提交信息（commit-msg）', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await runCliArgv(program, ['commit', '--quiet', '-s', './packages/*'])

    expect(commitLinterMock).toHaveBeenCalledWith(
      expect.objectContaining({ scopes: ['@142vip/utils'] }),
    )
  })

  it('默认交互式提交', async () => {
    promptSelect.mockResolvedValueOnce(GIT_COMMIT_DEFAULT_TYPES[0])
    promptSearch.mockResolvedValueOnce('@142vip/utils')
    promptInputRequired.mockResolvedValueOnce('add test')
    promptConfirm.mockResolvedValueOnce(true)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await runCliArgv(program, ['commit'])

    expect(commitLinterMock).toHaveBeenCalled()
    expect(commandStandardExecutor).toHaveBeenCalledWith('git add .')
    expect(execCommit).toHaveBeenCalledWith(['-m', `'feat(@142vip/utils): add test'`])
  })

  it('-s -p 交互提交并推送', async () => {
    promptSelect
      .mockResolvedValueOnce(GIT_COMMIT_DEFAULT_TYPES[0])
      .mockResolvedValueOnce('origin')
    promptSearch.mockResolvedValueOnce('@142vip/utils')
    promptInputRequired.mockResolvedValueOnce('add test')
    promptConfirm.mockResolvedValueOnce(true)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await runCliArgv(program, ['commit', '-s', './packages/*', '-p'])

    expect(execPush).toHaveBeenCalledWith(['-u', 'origin', 'HEAD'])
  })

  it('用户取消提交时退出', async () => {
    promptSelect.mockResolvedValueOnce('feat')
    promptSearch.mockResolvedValueOnce(GIT_COMMIT_DEFAULT_SCOPES[0])
    promptInputRequired.mockResolvedValueOnce('cancel')
    promptConfirm.mockResolvedValueOnce(false)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await commitMain(program)
    await expect(runCliArgv(program, ['commit'])).rejects.toThrow('exit')

    expect(vipLogger.logByBlank).toHaveBeenCalledWith(`${VipColor.redBright('用户取消提交，欢迎下次使用')}`)
    expect(VipNodeJS.existErrorProcess).toHaveBeenCalled()
  })
})
