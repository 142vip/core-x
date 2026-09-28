import { describe, expect, it } from '@jest/globals'
import { ChangelogDefaultConfig, parseCliOptions } from '../src/core/config'

const baseCliOptions = {
  from: 'v0.1.0',
  to: 'v1.0.0',
  github: '142vip/core-x',
  name: 'v1.0.0',
}

describe('ChangelogDefaultConfig', () => {
  it('默认 prerelease 为 false（GitHub Latest）', () => {
    expect(ChangelogDefaultConfig.prerelease).toBe(false)
  })
})

describe('parseCliOptions', () => {
  it('未传 prerelease 时保持默认 false', () => {
    const config = parseCliOptions(baseCliOptions)
    expect(config.prerelease).toBe(false)
    expect(config.from).toBe('v0.1.0')
    expect(config.to).toBe('v1.0.0')
    expect(config.repo).toBe('142vip/core-x')
  })

  it('CLI 传入 prerelease 可覆盖为 true', () => {
    const config = parseCliOptions({
      ...baseCliOptions,
      prerelease: true,
    })
    expect(config.prerelease).toBe(true)
  })

  it('CLI 传入 prerelease false 保持 Latest', () => {
    const config = parseCliOptions({
      ...baseCliOptions,
      prerelease: false,
    })
    expect(config.prerelease).toBe(false)
  })
})
