import { RegistryAddressEnum, VipInquirer, VipNpm, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { installMain } from '../src/commands/install'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptSelect: jest.fn(),
    },
    VipNpm: {
      ...actual.VipNpm,
      installByNpm: jest.fn(() => Promise.resolve()),
      installByPnpm: jest.fn(() => Promise.resolve()),
    },
  }
})

describe('installMain', () => {
  const promptSelect = jest.mocked(VipInquirer.promptSelect)
  const installByNpm = jest.mocked(VipNpm.installByNpm)
  const installByPnpm = jest.mocked(VipNpm.installByPnpm)

  beforeEach(() => {
    promptSelect.mockReset()
    installByNpm.mockClear()
    installByPnpm.mockClear()
  })

  it('注册 install 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    expect(findCommand(program, 'install').name()).toBe('install')
  })

  it('选择 npm 时调用 installByNpm', async () => {
    promptSelect.mockResolvedValueOnce('npm')
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['install', '--force', '--registry', RegistryAddressEnum.VIP_NPM_ALIBABA])

    expect(installByNpm).toHaveBeenCalledWith(expect.objectContaining({
      force: true,
      registry: true,
    }))
    expect(installByPnpm).not.toHaveBeenCalled()
  })

  it('选择 pnpm 时调用 installByPnpm', async () => {
    promptSelect.mockResolvedValueOnce('pnpm')
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['install'])

    expect(installByPnpm).toHaveBeenCalledWith({
      force: false,
      registry: RegistryAddressEnum.VIP_NPM_ALIBABA,
    })
  })
})
