import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it, jest } from '@jest/globals'
import { NestConfigResolveError, nestConfigUtil, NestDevEnv, NestDevMode } from '../src/config/config.util'
import { nestProcess } from '../src/nest-process'

const tempDirs: string[] = []

function createTempAppDir(): string {
  const dir = join(tmpdir(), `nest-config-${Date.now()}-${Math.random().toString(36).slice(2)}`)
  mkdirSync(dir, { recursive: true })
  tempDirs.push(dir)
  return dir
}

function setEnv(key: string, value?: string): string | undefined {
  const previous = process.env[key]
  if (value == null) {
    delete process.env[key]
  }
  else {
    process.env[key] = value
  }
  return previous
}

function restoreEnv(key: string, previous?: string): void {
  if (previous == null) {
    delete process.env[key]
  }
  else {
    process.env[key] = previous
  }
}

afterEach(() => {
  while (tempDirs.length > 0) {
    const dir = tempDirs.pop()
    if (dir != null && existsSync(dir)) {
      rmSync(dir, { recursive: true, force: true })
    }
  }
})

describe('nestConfigUtil', () => {
  it('非 local 环境加载 config.js', () => {
    const previous = setEnv('NODE_ENV', 'production')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = nestConfigUtil.resolveSync({ cwd })
      expect(result.devMode).toBe(NestDevMode.Production)
      expect(result.configFileName).toBe('config.js')
      expect(result.configFilePath).toBe(join(configDir, 'config.js'))
    }
    finally {
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('仅有多个开发配置且缺少 config.js 时提示创建', () => {
    const previous = setEnv('NODE_ENV', 'production')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      expect(() => nestConfigUtil.resolveSync({ cwd }))
        .toThrow(/存在多个开发配置文件/)
    }
    finally {
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('存在开发配置时可通过 devConfig 选择', async () => {
    const cwd = createTempAppDir()
    const configDir = join(cwd, 'config')
    mkdirSync(configDir)
    writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
    writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')

    const result = await nestConfigUtil.resolveAsync({ cwd, devConfig: NestDevEnv.Local })
    expect(result.devMode).toBe(NestDevMode.Development)
    expect(result.devEnv).toBe(NestDevEnv.Local)
    expect(result.configFilePath).toBe(join(configDir, 'local.config.js'))
  })

  it('非交互终端仅有一个开发配置时自动选择', async () => {
    const previous = setEnv('NODE_ENV', 'local')
    const stdinIsTTY = process.stdin.isTTY
    Object.defineProperty(process.stdin, 'isTTY', { value: false, configurable: true })
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(result.devEnv).toBe(NestDevEnv.Test)
      expect(result.configFileName).toBe('test.config.js')
    }
    finally {
      Object.defineProperty(process.stdin, 'isTTY', { value: stdinIsTTY, configurable: true })
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('交互终端仅有一个开发配置时需确认后启动', async () => {
    const previous = setEnv('NODE_ENV', 'local')
    const stdinIsTTY = process.stdin.isTTY
    Object.defineProperty(process.stdin, 'isTTY', { value: true, configurable: true })
    const confirmSpy = jest.spyOn(
      (await import('@142vip/utils')).VipInquirer,
      'promptConfirm',
    ).mockResolvedValue(true)
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(confirmSpy).toHaveBeenCalled()
      expect(result.devEnv).toBe(NestDevEnv.Test)
      expect(result.configFileName).toBe('test.config.js')
    }
    finally {
      confirmSpy.mockRestore()
      Object.defineProperty(process.stdin, 'isTTY', { value: stdinIsTTY, configurable: true })
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('非 local 启动且存在 config.js 时直接加载生产配置', async () => {
    const previous = setEnv('NODE_ENV', undefined)
    const stdinIsTTY = process.stdin.isTTY
    Object.defineProperty(process.stdin, 'isTTY', { value: true, configurable: true })
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(result.devMode).toBe(NestDevMode.Production)
      expect(result.configFileName).toBe('config.js')
    }
    finally {
      Object.defineProperty(process.stdin, 'isTTY', { value: stdinIsTTY, configurable: true })
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('非交互终端存在生产配置时默认加载 config.js', async () => {
    const previous = setEnv('NODE_ENV', 'production')
    const stdinIsTTY = process.stdin.isTTY
    Object.defineProperty(process.stdin, 'isTTY', { value: false, configurable: true })
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(result.devMode).toBe(NestDevMode.Production)
      expect(result.configFileName).toBe('config.js')
    }
    finally {
      Object.defineProperty(process.stdin, 'isTTY', { value: stdinIsTTY, configurable: true })
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('config 目录存在非法文件时拒绝加载', () => {
    const previous = setEnv('NODE_ENV', 'production')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'invalid.js'), 'module.exports = {}')

      expect(() => nestConfigUtil.resolveSync({ cwd }))
        .toThrow(/非法文件/)
    }
    finally {
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('支持 absolutePath 显式指定配置文件', () => {
    const cwd = createTempAppDir()
    const configFile = join(cwd, 'local.config.js')
    writeFileSync(configFile, 'module.exports = {}')

    const result = nestConfigUtil.resolveSync({ absolutePath: configFile })
    expect(result.configFilePath).toBe(configFile)
    expect(result.devEnv).toBe(NestDevEnv.Local)
  })

  it('配置异常包含友好提示信息', () => {
    expect(() => nestConfigUtil.resolveSync({ cwd: createTempAppDir() }))
      .toThrow(NestConfigResolveError)
    expect(() => nestConfigUtil.resolveSync({ cwd: createTempAppDir() }))
      .toThrow(/未找到配置目录/)
  })

  it('getRunEnv 保持原样', () => {
    const previous = setEnv('RUN_ENV', undefined)
    try {
      expect(nestProcess.getRunEnv()).toBeUndefined()
    }
    finally {
      restoreEnv('RUN_ENV', previous)
    }
  })
})
