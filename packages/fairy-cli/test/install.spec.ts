import { RegistryAddressEnum, VipNpm, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { installMain } from '../src/commands'
import {
  buildCiInstallPreview,
  resolveCiNpmInstallRegistry,
  resolveCorepackNpmRegistry,
  resolveLocalNpmInstallRegistry,
  runFairyHook,
} from '../src/utils'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('../src/utils/hooks.util', () => ({
  normalizeHookCommands: jest.fn(() => ['echo hook']),
  resolveHookCommands: jest.fn((name: string) => (name === 'postinstall' ? ['echo hook'] : [])),
  runFairyHook: jest.fn(() => Promise.resolve()),
}))

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipNpm: {
      ...actual.VipNpm,
      installByNpm: jest.fn(() => Promise.resolve()),
      installByPnpm: jest.fn(() => Promise.resolve()),
      installForCi: jest.fn(() => Promise.resolve()),
      logInstallToolchain: jest.fn(() => Promise.resolve()),
    },
  }
})

describe('installMain', () => {
  const installByNpm = jest.mocked(VipNpm.installByNpm)
  const installByPnpm = jest.mocked(VipNpm.installByPnpm)
  const installForCi = jest.mocked(VipNpm.installForCi)
  const logInstallToolchain = jest.mocked(VipNpm.logInstallToolchain)

  beforeEach(() => {
    installByNpm.mockClear()
    installByPnpm.mockClear()
    installForCi.mockClear()
    logInstallToolchain.mockClear()
    jest.mocked(runFairyHook).mockClear()
  })

  it('注册 install 子命令与 ci 别名', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    const installCmd = findCommand(program, 'install')
    expect(installCmd.name()).toBe('install')
    expect(installCmd.aliases()).toContain('ci')
  })

  it('默认 pnpm 本地安装（按 lock 策略）', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['install'])

    expect(logInstallToolchain).toHaveBeenCalled()
    expect(installByPnpm).toHaveBeenCalledWith(expect.objectContaining({
      force: false,
      registry: RegistryAddressEnum.NPM,
    }))
    expect(installForCi).not.toHaveBeenCalled()
    expect(jest.mocked(runFairyHook).mock.calls.map(call => call[0])).toEqual(['preinstall', 'postinstall'])
  })

  it('--npm-ali-registry 使用阿里源', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['install', '--npm-ali-registry'])

    expect(installByPnpm).toHaveBeenCalledWith(expect.objectContaining({
      registry: RegistryAddressEnum.NPM_ALIBABA,
    }))
  })

  it('--npm 时走 npm 安装', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['install', '--npm', '--force', '--npm-registry', RegistryAddressEnum.NPM_ALIBABA])

    expect(installByNpm).toHaveBeenCalledWith(expect.objectContaining({
      force: true,
      registry: RegistryAddressEnum.NPM_ALIBABA,
    }))
    expect(installByPnpm).not.toHaveBeenCalled()
  })

  it('--hook-only 仅执行 hooks 配置', async () => {
    const runHook = jest.mocked(runFairyHook)
    runHook.mockClear()
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['install', '--hook-only', 'postinstall'])
    expect(runHook).toHaveBeenCalledWith('postinstall')
    expect(installByPnpm).not.toHaveBeenCalled()
  })

  it('fa ci 走 installForCi 并支持透传 pnpm 参数', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['ci', '--npm-ali-registry', '--prefer-offline', '--filter', '@142vip/utils'])

    expect(installForCi).toHaveBeenCalledWith(expect.objectContaining({
      registry: RegistryAddressEnum.NPM_ALIBABA,
      extraPnpmArgs: ['--prefer-offline', '--filter', '@142vip/utils'],
    }))
    expect(logInstallToolchain).not.toHaveBeenCalled()
  })

  it('fa ci 始终执行 preinstall / postinstall', async () => {
    const runHook = jest.mocked(runFairyHook)
    runHook.mockClear()
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    await runCliArgv(program, ['ci', '--ignore-scripts'])

    expect(runHook.mock.calls.map(call => call[0])).toEqual(['preinstall', 'postinstall'])
    expect(installForCi).toHaveBeenCalledWith(expect.objectContaining({
      ignoreScripts: true,
    }))
  })

  it('fa i 的未知选项仍然报错', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await installMain(program)
    findCommand(program, 'install').exitOverride()
    await expect(runCliArgv(program, ['install', '--prefer-offline'])).rejects.toThrow(/unknown option/)
    expect(installByPnpm).not.toHaveBeenCalled()
  })
})

describe('install registry', () => {
  it('仅 --npm-registry 开关时解析为 npm 官方', () => {
    expect(resolveLocalNpmInstallRegistry({ registry: true })).toBe(RegistryAddressEnum.NPM)
  })

  it('--npm-registry <url> 使用自定义源', () => {
    const custom = 'https://example.npm/'
    expect(resolveLocalNpmInstallRegistry({ registry: custom })).toBe(custom)
  })

  it('快捷阿里 / 腾讯源', () => {
    expect(resolveLocalNpmInstallRegistry({ aliRegistry: true })).toBe(RegistryAddressEnum.NPM_ALIBABA)
    expect(resolveLocalNpmInstallRegistry({ tencentRegistry: true })).toBe(RegistryAddressEnum.NPM_TENCENT)
  })

  it('fa ci 默认 npmmirror，命令含 frozen-lockfile 与 force', () => {
    expect(resolveCiNpmInstallRegistry({})).toBe(RegistryAddressEnum.NPM_ALIBABA)
    expect(buildCiInstallPreview({})).toBe(
      `corepack + pnpm i --registry ${RegistryAddressEnum.NPM_ALIBABA} --frozen-lockfile --force`,
    )
    expect(VipNpm.formatCiPnpmInstallCommand({
      registry: RegistryAddressEnum.NPM_ALIBABA,
      extraArgs: '--prefer-offline',
      ignoreScripts: true,
    })).toBe(
      `pnpm i --registry ${RegistryAddressEnum.NPM_ALIBABA} --frozen-lockfile --force --ignore-scripts --prefer-offline`,
    )
    expect(VipNpm.formatCiPnpmInstallCommand({
      registry: RegistryAddressEnum.NPM_ALIBABA,
      extraArgs: ['--filter', './packages/*'],
    })).toBe(
      `pnpm i --registry ${RegistryAddressEnum.NPM_ALIBABA} --frozen-lockfile --force --filter './packages/*'`,
    )
  })

  it('corepack 默认 npm 官方', () => {
    expect(resolveCorepackNpmRegistry({})).toBe(RegistryAddressEnum.NPM)
  })
})
