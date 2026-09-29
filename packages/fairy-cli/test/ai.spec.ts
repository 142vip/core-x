import { VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { aiMain, resolveAiTarget } from '../src/commands/ai'
import { findCommand } from './helpers/command-runner'

describe('resolveAiTarget', () => {
  const getProcessEnv = jest.spyOn(VipNodeJS, 'getProcessEnv')
  const getProcessCwd = jest.spyOn(VipNodeJS, 'getProcessCwd')
  const pathResolve = jest.spyOn(VipNodeJS, 'pathResolve')

  beforeEach(() => {
    getProcessEnv.mockReset()
    getProcessCwd.mockReset()
    pathResolve.mockImplementation((target: string) => `/resolved/${target}`)
  })

  it('--target 优先', () => {
    expect(resolveAiTarget({ target: './repo' })).toBe('/resolved/./repo')
    expect(getProcessEnv).not.toHaveBeenCalled()
  })

  it('未传 target 时读取 AGENT_SKILLS_TARGET', () => {
    getProcessEnv.mockReturnValueOnce('/env/target')
    expect(resolveAiTarget({})).toBe('/resolved//env/target')
  })

  it('均无配置时回退 cwd', () => {
    getProcessEnv.mockReturnValueOnce('')
    getProcessCwd.mockReturnValueOnce('/cwd')
    expect(resolveAiTarget({})).toBe('/cwd')
  })
})

describe('aiMain', () => {
  it('注册 ai 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await aiMain(program)
    expect(findCommand(program, 'ai').name()).toBe('ai')
  })
})
