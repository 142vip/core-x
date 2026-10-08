import { describe, expect, it } from '@jest/globals'
import { getFairyDefaultConfig } from '../src/config'
import {
  installFairyGitHooks,
  isGitHookName,
  normalizeHookCommands,
  pickGitHooksConfig,
  resolveGitHookFileName,
  resolveHookCommands,
} from '../src/utils'

describe('hooks.util', () => {
  it('normalizeHookCommands 支持 string 与数组', () => {
    expect(normalizeHookCommands('echo a')).toEqual(['echo a'])
    expect(normalizeHookCommands(['echo a', ' echo b '])).toEqual(['echo a', 'echo b'])
  })

  it('pickGitHooksConfig 拆分 git 钩子', () => {
    const git = pickGitHooksConfig({
      precommit: 'npx fa lint --fix',
      commitmsg: 'npx fa commit --quiet',
      postinstall: ['pnpm build'],
    })
    expect(git['pre-commit']).toBe('npx fa lint --fix')
    expect(git['commit-msg']).toBe('npx fa commit --quiet')
    expect(git.postinstall).toBeUndefined()
    expect(resolveGitHookFileName('precommit')).toBe('pre-commit')
    expect(resolveGitHookFileName('commitmsg')).toBe('commit-msg')
    expect(isGitHookName('pre-commit')).toBe(true)
    expect(isGitHookName('postinstall')).toBe(false)
  })

  it('默认 preinstall 来自 fairy 配置', () => {
    expect(resolveHookCommands('preinstall')).toEqual([
      getFairyDefaultConfig().hooks?.preinstall,
    ])
  })

  it('CI 环境不写入 git hooks', async () => {
    const previous = process.env.CI
    process.env.CI = 'true'
    try {
      await expect(installFairyGitHooks()).resolves.toBe(false)
    }
    finally {
      if (previous == null) {
        delete process.env.CI
      }
      else {
        process.env.CI = previous
      }
    }
  })

  it('默认 precommit / commitmsg 写入 git 文件名', () => {
    const git = pickGitHooksConfig({
      precommit: resolveHookCommands('precommit')[0],
      commitmsg: resolveHookCommands('commitmsg')[0],
    })
    expect(git['pre-commit']).toBe('npx fa lint --fix')
    expect(String(git['commit-msg'])).toContain('npx fa commit --quiet')
  })
})
