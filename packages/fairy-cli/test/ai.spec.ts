import { VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

import { aiMain, resolveAiRunMode, resolveTarget } from '../src/commands/ai'
import { findCommand } from './helpers/command-runner'

describe('resolveAiRunMode', () => {
  const exitSpy = jest.spyOn(VipNodeJS, 'exitProcess').mockImplementation(() => {
    throw new Error('exit')
  })

  afterEach(() => {
    exitSpy.mockClear()
  })

  it('默认 sync', () => {
    expect(resolveAiRunMode({})).toBe('sync')
  })

  it('--check 为 check', () => {
    expect(resolveAiRunMode({ check: true })).toBe('check')
  })

  it('--sync 为 sync', () => {
    expect(resolveAiRunMode({ sync: true })).toBe('sync')
  })

  it('--sync 与 --check 互斥', () => {
    expect(() => resolveAiRunMode({ sync: true, check: true })).toThrow('exit')
    expect(exitSpy).toHaveBeenCalled()
  })
})

describe('resolveTarget', () => {
  const getProcessEnv = jest.spyOn(VipNodeJS, 'getProcessEnv')
  const getProcessCwd = jest.spyOn(VipNodeJS, 'getProcessCwd')
  const pathResolve = jest.spyOn(VipNodeJS, 'pathResolve')

  beforeEach(() => {
    getProcessEnv.mockReset()
    getProcessCwd.mockReset()
    pathResolve.mockImplementation((target: string) => `/resolved/${target}`)
  })

  it('--target 优先', () => {
    expect(resolveTarget({ target: './repo' })).toBe('/resolved/./repo')
    expect(getProcessEnv).not.toHaveBeenCalled()
  })

  it('未传 target 时读取 AGENT_SKILLS_TARGET', () => {
    getProcessEnv.mockReturnValueOnce('/env/target')
    expect(resolveTarget({})).toBe('/resolved//env/target')
  })

  it('均无配置时回退 cwd', () => {
    getProcessEnv.mockReturnValueOnce('')
    getProcessCwd.mockReturnValueOnce('/cwd')
    expect(resolveTarget({})).toBe('/cwd')
  })
})

describe('aiMain', () => {
  it('注册 ai 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await aiMain(program)
    expect(findCommand(program, 'ai').name()).toBe('ai')
  })
})
