import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { VipCommander, vipConfig } from '@142vip/utils'
import { afterEach, describe, expect, it, jest } from '@jest/globals'
import { applyFairyCommandDefaults, defineFairyConfig, getFairyDefaultConfig, loadFairyConfig } from '../src/config'

describe('fairy.config', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('defineFairyConfig 支持 hooks 对象', () => {
    const config = defineFairyConfig({
      hooks: {
        postinstall: 'echo after install',
        precommit: 'npx fa lint --fix',
      },
    })
    expect(config.hooks?.postinstall).toBe('echo after install')
    expect(config.hooks?.precommit).toBe('npx fa lint --fix')
  })

  it('默认配置含 precommit、commitmsg、preinstall', () => {
    const config = getFairyDefaultConfig()
    expect(config.hooks?.precommit).toBe('npx fa lint --fix')
    expect(config.hooks?.commitmsg).toBe('npx fa commit --quiet -s \'./apps/*\' -s \'./packages/*\'')
    expect(config.hooks?.preinstall).toContain('find ./scripts')
    expect(config.hooks?.preinstall).toContain('chmod +x')
    expect(config.hooks?.postinstall).toBeUndefined()
    expect(config.scripts?.clean).toContain('npx fa clean')
  })

  it('用户 hooks 按键整段覆盖，默认键保留', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockReturnValue({
      hooks: {
        preinstall: ['echo only'],
        postinstall: ['pnpm build:packages'],
      },
    })
    const config = loadFairyConfig()
    expect(config.hooks?.preinstall).toEqual(['echo only'])
    expect(config.hooks?.postinstall).toEqual(['pnpm build:packages'])
    expect(config.hooks?.precommit).toBe('npx fa lint --fix')
    expect(config.scripts?.lint).toBe('npx fa lint')
    expect(config.commit).toBeUndefined()
    expect(config.release).toBeUndefined()
    expect(config.ai).toBeUndefined()
  })

  it('commit / release / ai 原样保留，不与默认配置拼接', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockReturnValue({
      commit: {
        scopes: ['README'],
        scopeGlobs: ['./packages/*'],
        quiet: true,
      },
      release: {
        vip: true,
        filter: ['./packages/*'],
      },
      ai: {
        target: '.',
      },
    })
    const config = loadFairyConfig()
    expect(config.commit).toEqual({
      scopes: ['README'],
      scopeGlobs: ['./packages/*'],
      quiet: true,
    })
    expect(config.release).toEqual({
      vip: true,
      filter: ['./packages/*'],
    })
    expect(config.ai).toEqual({ target: '.' })
    expect(config.hooks?.precommit).toBe('npx fa lint --fix')
  })

  it('未传入的参数采用配置，命令行显式值优先', async () => {
    const program = new VipCommander('fa', '0.0.0')
    const command = program.command('commit')
    command
      .option('-q,--quiet', 'quiet', false)
      .option('--push', 'push', true)
      .option('-s,--scope <glob>', 'scope', (value: string, previous: string[]) => {
        previous.push(value)
        return previous
      }, [] as string[])
    await program.parseAsync(['commit', '-s', './apps/*'], { from: 'user' })

    const merged = applyFairyCommandDefaults(
      command,
      command.opts<{ quiet: boolean, push: boolean, scope: string[] }>(),
      { quiet: true, push: false, scope: ['./packages/*'] },
      ['quiet', 'push', 'scope'],
    )
    expect(merged.quiet).toBe(true)
    expect(merged.push).toBe(false)
    expect(merged.scope).toEqual(['./apps/*'])
  })

  it('--no-quiet 覆盖配置里的 quiet', async () => {
    const program = new VipCommander('fa', '0.0.0')
    const command = program.command('commit')
    command.option('-q,--quiet', 'quiet', false)
    command.option('--no-quiet', 'disable quiet')
    await program.parseAsync(['commit', '--no-quiet'], { from: 'user' })

    const merged = applyFairyCommandDefaults(
      command,
      command.opts<{ quiet: boolean }>(),
      { quiet: true },
      ['quiet'],
    )
    expect(merged.quiet).toBe(false)
  })

  it('默认 preinstall 在 scripts 缺失或为空时仍成功', () => {
    const command = getFairyDefaultConfig().hooks?.preinstall
    if (typeof command !== 'string') {
      throw new TypeError('preinstall 应为一条 shell')
    }
    const missingDir = mkdtempSync(join(tmpdir(), 'fa-no-scripts-'))
    const emptyDir = mkdtempSync(join(tmpdir(), 'fa-empty-scripts-'))
    mkdirSync(join(emptyDir, 'scripts'))
    try {
      const missing = spawnSync('sh', ['-c', command], { cwd: missingDir })
      const empty = spawnSync('sh', ['-c', command], { cwd: emptyDir })
      expect(missing.status).toBe(0)
      expect(empty.status).toBe(0)
    }
    finally {
      rmSync(missingDir, { recursive: true, force: true })
      rmSync(emptyDir, { recursive: true, force: true })
    }
  })

  it('默认 preinstall 给 scripts 里的文件加执行位', () => {
    const command = getFairyDefaultConfig().hooks?.preinstall
    if (typeof command !== 'string') {
      throw new TypeError('preinstall 应为一条 shell')
    }
    const dir = mkdtempSync(join(tmpdir(), 'fa-chmod-'))
    const scriptPath = join(dir, 'scripts', 'demo')
    mkdirSync(join(dir, 'scripts'))
    writeFileSync(scriptPath, '#!/bin/sh\n')
    try {
      const result = spawnSync('sh', ['-c', command], { cwd: dir })
      expect(result.status).toBe(0)
      expect(statSync(scriptPath).mode & 0o111).not.toBe(0)
    }
    finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })
})
