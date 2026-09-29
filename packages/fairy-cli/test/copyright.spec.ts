import { CopyrightFileType, VipCopyright } from '@142vip/copyright'
import { VipConsole, VipInquirer, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { copyrightMain } from '../src/commands/copyright'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/copyright', () => ({
  CopyrightFileType: {
    TYPESCRIPT: 'ts',
    JAVASCRIPT: 'js',
  },
  VipCopyright: jest.fn().mockImplementation(() => ({
    generateDocx: jest.fn(() => Promise.resolve()),
  })),
}))

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptInputRequired: jest.fn(),
      promptSelect: jest.fn(),
    },
    VipConsole: {
      ...actual.VipConsole,
      log: jest.fn(),
    },
    vipLogger: {
      ...actual.vipLogger,
      log: jest.fn(),
      logByBlank: jest.fn(),
      println: jest.fn(),
    },
  }
})

describe('copyrightMain', () => {
  const promptInputRequired = jest.mocked(VipInquirer.promptInputRequired)
  const promptSelect = jest.mocked(VipInquirer.promptSelect)
  const consoleLog = jest.mocked(VipConsole.log)

  beforeEach(() => {
    promptInputRequired.mockReset()
    promptSelect.mockReset()
    consoleLog.mockClear()
    jest.mocked(VipCopyright).mockClear()
  })

  it('注册 copyright 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await copyrightMain(program)
    expect(findCommand(program, 'copyright').name()).toBe('copyright')
  })

  it('dry-run 时打印预览且不生成文档', async () => {
    promptInputRequired
      .mockResolvedValueOnce('demo-app')
      .mockResolvedValueOnce('1.0.0')
      .mockResolvedValueOnce('./src')
    promptSelect.mockResolvedValueOnce(CopyrightFileType.TYPESCRIPT)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await copyrightMain(program)
    await runCliArgv(program, ['copyright', '--dry-run'])

    expect(VipCopyright).not.toHaveBeenCalled()
  })

  it('正式生成时调用 VipCopyright.generateDocx', async () => {
    promptInputRequired
      .mockResolvedValueOnce('demo-app')
      .mockResolvedValueOnce('1.0.0')
      .mockResolvedValueOnce('./src')
    promptSelect.mockResolvedValueOnce(CopyrightFileType.TYPESCRIPT)

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await copyrightMain(program)
    await runCliArgv(program, ['copyright'])

    expect(VipCopyright).toHaveBeenCalled()
    const instance = jest.mocked(VipCopyright).mock.results[0]?.value as { generateDocx: jest.Mock }
    expect(instance.generateDocx).toHaveBeenCalledWith('./src', CopyrightFileType.TYPESCRIPT)
    expect(consoleLog).toHaveBeenCalled()
  })
})
