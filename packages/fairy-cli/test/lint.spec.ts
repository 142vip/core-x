import { VipExecutor, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { lintMain } from '../src/commands/lint'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('../src/utils/eslint-config.util', () => ({
  resolveEslintConfigPath: (path?: string) => path ?? '/mock/eslint.config.mjs',
}))

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipExecutor: {
      ...actual.VipExecutor,
      commandStandardExecutor: jest.fn(() => Promise.resolve()),
    },
  }
})

describe('lintMain', () => {
  const commandStandardExecutor = jest.mocked(VipExecutor.commandStandardExecutor)

  beforeEach(() => {
    commandStandardExecutor.mockClear()
  })

  it('注册 lint 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await lintMain(program)
    expect(findCommand(program, 'lint').name()).toBe('lint')
  })

  it('默认使用 resolveEslintConfigPath 解析的配置', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await lintMain(program)
    await runCliArgv(program, ['lint'])

    expect(commandStandardExecutor).toHaveBeenCalledWith(
      'npx eslint . --config /mock/eslint.config.mjs',
    )
  })

  it('--fix 时追加 --fix 参数', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await lintMain(program)
    await runCliArgv(program, ['lint', '--fix'])

    expect(commandStandardExecutor).toHaveBeenCalledWith(
      'npx eslint . --config /mock/eslint.config.mjs --fix',
    )
  })

  it('-f 指定 ESLint 配置文件', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await lintMain(program)
    await runCliArgv(program, ['lint', '-f', 'custom-eslint.config.js', '--fix'])

    expect(commandStandardExecutor).toHaveBeenCalledWith(
      'npx eslint . --config custom-eslint.config.js --fix',
    )
  })
})
