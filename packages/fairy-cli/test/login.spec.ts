import { VipColor, VipDocker, VipInquirer, vipLogger, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { loginMain } from '../src/commands/login'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptSelect: jest.fn(),
      promptInput: jest.fn(),
      promptPassword: jest.fn(),
    },
    VipDocker: {
      ...actual.VipDocker,
      userLogin: jest.fn(() => Promise.resolve()),
    },
    vipLogger: {
      ...actual.vipLogger,
      println: jest.fn(),
      logByBlank: jest.fn(),
    },
  }
})

describe('loginMain', () => {
  const promptSelect = jest.mocked(VipInquirer.promptSelect)
  const promptInput = jest.mocked(VipInquirer.promptInput)
  const promptPassword = jest.mocked(VipInquirer.promptPassword)
  const userLogin = jest.mocked(VipDocker.userLogin)
  const logByBlank = jest.mocked(vipLogger.logByBlank)

  beforeEach(() => {
    promptSelect.mockReset()
    promptInput.mockReset()
    promptPassword.mockReset()
    userLogin.mockClear()
    logByBlank.mockClear()
  })

  it('注册 login 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await loginMain(program)
    expect(findCommand(program, 'login').name()).toBe('login')
  })

  it('DOCKER 登录流程调用 VipDocker.userLogin', async () => {
    promptSelect
      .mockResolvedValueOnce('DOCKER')
      .mockResolvedValueOnce('https://registry.docker.io')
    promptInput.mockResolvedValueOnce('142vip')
    promptPassword.mockResolvedValueOnce('secret')

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await loginMain(program)
    await runCliArgv(program, ['login'])

    expect(userLogin).toHaveBeenCalledWith({
      username: '142vip',
      password: 'secret',
      registry: 'https://registry.docker.io',
    })
  })

  it('NPM 登录流程打印手动执行命令', async () => {
    promptSelect.mockResolvedValueOnce('NPM')
    promptInput.mockResolvedValueOnce('https://registry.npmjs.org')

    const program = new VipPackageCliCommander('fa', '1.0.0')
    await loginMain(program)
    await runCliArgv(program, ['login'])

    expect(logByBlank).toHaveBeenCalledWith(
      `${VipColor.red('请粘贴到终端执行，NPM登录命令：')} ${VipColor.green('npm login --registry https://registry.npmjs.org')}`,
    )
    expect(userLogin).not.toHaveBeenCalled()
  })
})
