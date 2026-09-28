import { RegistryAddressEnum, VipExecutor, VipInquirer, vipLogger, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { publishMain } from '../src/commands/publish'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptConfirm: jest.fn(),
    },
    VipExecutor: {
      ...actual.VipExecutor,
      commandStandardExecutor: jest.fn(() => Promise.resolve()),
    },
    vipLogger: {
      ...actual.vipLogger,
      log: jest.fn(),
      logByBlank: jest.fn(),
      println: jest.fn(),
    },
  }
})

describe('publishMain', () => {
  const promptConfirm = jest.mocked(VipInquirer.promptConfirm)
  const commandStandardExecutor = jest.mocked(VipExecutor.commandStandardExecutor)
  const logByBlank = jest.mocked(vipLogger.logByBlank)

  beforeEach(() => {
    promptConfirm.mockReset()
    commandStandardExecutor.mockClear()
    logByBlank.mockClear()
  })

  it('注册 publish 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await publishMain(program)
    expect(findCommand(program, 'publish').name()).toBe('publish')
  })

  it('dryRun 为 true 时仅打印命令不执行', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await publishMain(program)
    await runCliArgv(program, ['publish', '--dry-run', '-r', RegistryAddressEnum.NPM])

    expect(logByBlank).toHaveBeenCalled()
    expect(commandStandardExecutor).not.toHaveBeenCalled()
    expect(promptConfirm).not.toHaveBeenCalled()
  })

  it('正式发布时执行 npm publish 命令', async () => {
    promptConfirm.mockResolvedValueOnce(false)
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await publishMain(program)
    await runCliArgv(program, ['publish', '-r', RegistryAddressEnum.NPM])

    expect(commandStandardExecutor).toHaveBeenCalledWith(
      'npm publish --access public --registry=true',
    )
  })
})
