import { VipConsole, VipInquirer, VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { cleanMain, generateDirPatterns } from '../src/commands/clean'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('../src/utils/clean-path.util', () => ({
  deleteByPatterns: jest.fn(() => Promise.resolve(['dist/file.js'])),
  globPatternToRegExp: jest.requireActual<typeof import('../src/utils/clean-path.util')>('../src/utils/clean-path.util').globPatternToRegExp,
  resolveDeleteTargets: jest.requireActual<typeof import('../src/utils/clean-path.util')>('../src/utils/clean-path.util').resolveDeleteTargets,
}))

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipInquirer: {
      ...actual.VipInquirer,
      promptConfirm: jest.fn(),
    },
    VipConsole: {
      ...actual.VipConsole,
      error: jest.fn(),
      log: jest.fn(),
    },
    VipNodeJS: {
      ...actual.VipNodeJS,
      existErrorProcess: jest.fn(() => {
        throw new Error('exit')
      }),
    },
  }
})

describe('generateDirPatterns', () => {
  it('单目录默认仅删除当前层级', () => {
    expect(generateDirPatterns('dist')).toEqual(['dist'])
  })

  it('all 为 true 时递归匹配', () => {
    expect(generateDirPatterns('node_modules', true)).toEqual(['**/node_modules'])
  })

  it('支持排除 node_modules 下 dist', () => {
    expect(generateDirPatterns(['dist', '!node_modules/**/dist'], true)).toEqual([
      '**/dist',
      '!**/node_modules/**/dist',
    ])
  })
})

describe('cleanMain', () => {
  const promptConfirm = jest.mocked(VipInquirer.promptConfirm)
  const existErrorProcess = jest.mocked(VipNodeJS.existErrorProcess)
  const consoleError = jest.mocked(VipConsole.error)

  beforeEach(() => {
    promptConfirm.mockReset()
    existErrorProcess.mockClear()
    consoleError.mockClear()
  })

  it('注册 clean 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await cleanMain(program)
    expect(findCommand(program, 'clean').name()).toBe('clean')
  })

  it('未指定删除规则时退出', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await cleanMain(program)
    await expect(runCliArgv(program, ['clean'])).rejects.toThrow('exit')

    expect(consoleError).toHaveBeenCalled()
    expect(existErrorProcess).toHaveBeenCalled()
  })

  it('用户取消删除时退出', async () => {
    promptConfirm.mockResolvedValueOnce(false)
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await cleanMain(program)
    await expect(runCliArgv(program, ['clean', '--dist'])).rejects.toThrow('exit')

    expect(existErrorProcess).toHaveBeenCalled()
  })
})
