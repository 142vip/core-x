import { VipPackageJSON } from '@142vip/utils'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'

import { releaseApi } from '../src/release.api'

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipPackageJSON: {
      ...actual.VipPackageJSON,
      promptReleaseVersion: jest.fn(() => Promise.resolve('1.1.0')),
    },
  }
})

describe('releaseApi.releaseVersionInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('读取当前版本并解析新版本', async () => {
    const operation = await releaseApi.releaseVersionInfo({
      confirm: false,
      cwd: process.cwd(),
      currentVersion: '1.0.0',
      commit: false,
      tag: false,
      push: false,
    })

    expect(VipPackageJSON.promptReleaseVersion).toHaveBeenCalled()
    expect(operation.state.currentVersion).toBe('1.0.0')
    expect(operation.state.newVersion).toBe('1.1.0')
  })

  it('currentVersion 入参可跳过读取 package.json', async () => {
    const operation = await releaseApi.releaseVersionInfo({
      confirm: false,
      currentVersion: '2.0.0',
      cwd: process.cwd(),
      commit: false,
      tag: false,
      push: false,
    })

    expect(operation.state.currentVersion).toBe('2.0.0')
    expect(operation.state.newVersion).toBe('1.1.0')
  })
})
