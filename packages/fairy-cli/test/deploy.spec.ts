import { VipConsole, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { deployMain } from '../src/commands/deploy'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipConsole: {
      ...actual.VipConsole,
      error: jest.fn(),
    },
  }
})

describe('deployMain', () => {
  const consoleError = jest.mocked(VipConsole.error)

  beforeEach(() => {
    consoleError.mockClear()
  })

  it('注册 deploy 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await deployMain(program)
    expect(findCommand(program, 'deploy').name()).toBe('deploy')
  })

  it('action 透传 github-page 选项', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await deployMain(program)
    await runCliArgv(program, ['deploy', '--github-page'])

    expect(consoleError).toHaveBeenCalledWith(expect.objectContaining({ githubPage: true }))
  })
})
