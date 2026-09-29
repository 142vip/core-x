import { vipConfig } from '@142vip/utils'

import { describe, expect, it, jest } from '@jest/globals'
import {
  ESLINT_CONFIG_MODULE_NAME,
  resolveEslintConfigPath,
} from '../src/utils/eslint-config.util'

describe('eslint-config.util', () => {
  it('ESLINT_CONFIG_MODULE_NAME 为 eslint', () => {
    expect(ESLINT_CONFIG_MODULE_NAME).toBe('eslint')
  })

  it('resolveEslintConfigPath 优先 CLI -f', () => {
    expect(resolveEslintConfigPath('custom.js')).toBe('custom.js')
  })

  it('resolveEslintConfigPath 无 CLI 时使用 cosmiconfig 路径', () => {
    const spy = jest.spyOn(vipConfig, 'searchConfigFilePath').mockReturnValue('/repo/eslint.config.js')
    expect(resolveEslintConfigPath()).toBe('/repo/eslint.config.js')
    expect(spy).toHaveBeenCalledWith('eslint')
    spy.mockRestore()
  })

  it('resolveEslintConfigPath 无用户配置时回落内置路径', () => {
    const spy = jest.spyOn(vipConfig, 'searchConfigFilePath').mockReturnValue(undefined)
    expect(resolveEslintConfigPath()).toMatch(/default-eslint\.config\.mjs$/)
    spy.mockRestore()
  })
})
