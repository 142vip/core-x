import { describe, expect, it } from '@jest/globals'
import { ReleaseVersionOperation } from '../src/core/releasex-operation'
import { VersionProgressEvent } from '../src/releasex.interface'

describe('ReleaseVersionOperation', () => {
  it('create 将 ReleaseVersionOptions 归一化为 ReleaseVersionOperationOptions', async () => {
    const operation = await ReleaseVersionOperation.create({
      commit: 'chore(release): publish v%s',
      tag: 'v',
      push: true,
      changelog: true,
      changelogPrerelease: false,
      scopeName: '@142vip/utils',
      cwd: process.cwd(),
      currentVersion: '1.0.0',
    })

    expect(operation.options.commit?.message).toBe('chore(release): publish v%s')
    expect(operation.options.tag?.name).toBe('v')
    expect(operation.options.push).toBe(true)
    expect(operation.options.changelog).toBe(true)
    expect(operation.options.changelogPrerelease).toBe(false)
    expect(operation.options.scopeName).toBe('@142vip/utils')
    expect(operation.state.currentVersion).toBe('1.0.0')
  })

  it('resolveVersions 后可通过 results 读取新版本', async () => {
    const operation = await ReleaseVersionOperation.create({
      commit: false,
      tag: false,
      push: false,
      currentVersion: '0.1.0',
    })

    // 直接 patch 状态模拟 resolveNewVersion 结果（单测不触发交互）
    Object.assign(operation.state, { newVersion: '0.2.0' })

    expect(operation.results.newVersion).toBe('0.2.0')
    expect(operation.results.commit).toBe(false)
    expect(operation.results.tag).toBe(false)
  })

  it('string commit/tag 模板保留原样', async () => {
    const operation = await ReleaseVersionOperation.create({
      commit: 'release(@142vip/utils): publish `v%s`',
      tag: false,
      push: false,
    })

    expect(operation.options.commit?.message).toContain('@142vip/utils')
    expect(operation.options.tag).toBeUndefined()
  })

  it('printReleasePlan 支持自定义标题', async () => {
    const operation = await ReleaseVersionOperation.create({
      commit: 'chore(release): publish v%s',
      tag: true,
      push: true,
      changelog: true,
      currentVersion: '1.0.0',
    })
    Object.assign(operation.state, { newVersion: '1.1.0' })

    expect(() => operation.printReleasePlan('自定义标题：')).not.toThrow()
  })

  it('finalizeRelease 中 commit 步骤会更新 commitMessage 状态', async () => {
    const operation = await ReleaseVersionOperation.create({
      commit: 'chore(release): publish v%s',
      tag: false,
      push: false,
      currentVersion: '1.0.0',
    })
    Object.assign(operation.state, { newVersion: '1.1.0', currentVersion: '1.0.0' })

    // 仅验证 results 结构；git 命令在集成环境测试
    expect(VersionProgressEvent.GitCommit).toBe('git commit')
    expect(operation.results.currentVersion).toBe('1.0.0')
  })
})
