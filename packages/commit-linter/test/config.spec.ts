import { describe, expect, it } from '@jest/globals'

import {
  commitLinterDefaultConfig,
  CONFIG_DEFAULT_NAME,
  defineVipCommitLinterConfig,
  getCommitLinterDefaultConfig,
  loadCommitLinterConfig,
} from '../src/config'

describe('commit-linter config', () => {
  it('默认配置文件名为 commit-linter', () => {
    expect(CONFIG_DEFAULT_NAME).toBe('commit-linter')
  })

  it('defineVipCommitLinterConfig 原样返回配置', () => {
    const config = defineVipCommitLinterConfig({
      scopeGlobs: ['./packages/*'],
      scopes: ['@142vip/utils'],
    })
    expect(config.scopeGlobs).toEqual(['./packages/*'])
    expect(config.scopes).toEqual(['@142vip/utils'])
  })

  it('getCommitLinterDefaultConfig 返回默认可配置对象', () => {
    expect(getCommitLinterDefaultConfig()).toBe(commitLinterDefaultConfig)
  })

  it('loadCommitLinterConfig 无配置文件时回落默认', () => {
    const config = loadCommitLinterConfig()
    expect(config).toEqual(commitLinterDefaultConfig)
  })
})
