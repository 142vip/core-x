import { describe, expect, it } from '@jest/globals'
import {
  CONFIG_DEFAULT_NAME,
  defineReleaseXConfig,
  getReleaseVersionDefaultConfig,
  loadReleaseVersionConfig,
  parseReleaseVersionCliOptions,
  releaseVersionDefaultConfig,
} from '../src/config'

describe('release-version config', () => {
  it('默认配置文件名为 releasex', () => {
    expect(CONFIG_DEFAULT_NAME).toBe('releasex')
  })

  it('releaseVersionDefaultConfig 包含常用开关', () => {
    expect(releaseVersionDefaultConfig.commit).toBe(true)
    expect(releaseVersionDefaultConfig.push).toBe(true)
    expect(releaseVersionDefaultConfig.tag).toBe(true)
    expect(releaseVersionDefaultConfig.confirm).toBe(true)
  })

  it('getReleaseVersionDefaultConfig 返回副本，不污染全局默认', () => {
    const defaults = getReleaseVersionDefaultConfig()
    defaults.confirm = false
    expect(releaseVersionDefaultConfig.confirm).toBe(true)
  })

  it('defineReleaseXConfig 原样返回配置片段', () => {
    expect(defineReleaseXConfig({ all: true })).toEqual({ all: true })
  })

  it('loadReleaseVersionConfig 无配置文件时回落 releaseVersionDefaultConfig', () => {
    const config = loadReleaseVersionConfig()
    expect(config.commit).toBe(releaseVersionDefaultConfig.commit)
    expect(config.push).toBe(releaseVersionDefaultConfig.push)
  })

  it('parseReleaseVersionCliOptions 支持 --yes 跳过确认', () => {
    const options = parseReleaseVersionCliOptions({ yes: true })
    expect(options.confirm).toBe(false)
  })

  it('parseReleaseVersionCliOptions 合并 changelog 等 CLI 参数', () => {
    const options = parseReleaseVersionCliOptions({
      changelog: true,
      scopeName: '@142vip/utils',
      preid: 'beta',
    })
    expect(options.changelog).toBe(true)
    expect(options.scopeName).toBe('@142vip/utils')
    expect(options.preid).toBe('beta')
  })
})
