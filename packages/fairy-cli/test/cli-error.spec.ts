import { ProcessExitCodeEnum, VipConsole, VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { afterEach, describe, expect, it, jest } from '@jest/globals'

import { FAIRY_CLI_BIN_ALIASES } from '../src/fairy-cli.constants'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../src/fairy.interface'
import { formatFairySupportedCommands, registerFairyCliErrorHandling } from '../src/utils/cli-error.util'

describe('formatFairySupportedCommands', () => {
  it('包含全部 CommandEnum 子命令', () => {
    const text = formatFairySupportedCommands()
    for (const key of Object.values(CommandEnum)) {
      expect(text).toContain(CLI_COMMAND_DETAIL[key].command)
    }
  })
})

describe('registerFairyCliErrorHandling', () => {
  const errorSpy = jest.spyOn(VipConsole, 'error')
  const logSpy = jest.spyOn(VipConsole, 'log')

  afterEach(() => {
    errorSpy.mockClear()
    logSpy.mockClear()
  })

  it('未知子命令时 exit UsageError，且不输出裸 commander 文案', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    program.command('ai')
    registerFairyCliErrorHandling(program)

    const exitSpy = jest.spyOn(VipNodeJS, 'exitProcess').mockImplementation((code) => {
      throw new Error(`exit:${code}`)
    })

    await expect(
      program.parseAsync(['node', 'fa', 'info']),
    ).rejects.toThrow(`exit:${ProcessExitCodeEnum.UsageError}`)
    expect(exitSpy).toHaveBeenCalledWith(ProcessExitCodeEnum.UsageError)

    const combined = [
      ...errorSpy.mock.calls.map(args => String(args[0])),
      ...logSpy.mock.calls.map(args => String(args[0])),
    ].join('\n')
    expect(combined).not.toMatch(/error: unknown command/)
    expect(combined).toContain('未知子命令')
    for (const name of FAIRY_CLI_BIN_ALIASES) {
      expect(combined).toContain(name)
    }

    exitSpy.mockRestore()
  })
})
