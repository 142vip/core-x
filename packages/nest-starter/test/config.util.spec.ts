import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it, jest } from '@jest/globals'
import { NestConfigResolveError, nestConfigUtil, NestDevMode } from '../src/config/config.util'
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
  it('生产模式同步解析加载 config.js', () => {
    const previous = setEnv('NODE_ENV', 'production')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = nestConfigUtil.resolveSync({ cwd })
      expect(result.devMode).toBe(NestDevMode.Production)
      expect(result.devEnv).toBe('production')
      expect(result.configFileName).toBe('config.js')
      expect(result.configFilePath).toBe(join(configDir, 'config.js'))
    }
    finally {
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('生产模式缺少 config.js 时失败', async () => {
    const previous = setEnv('NODE_ENV', 'production')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')

      await expect(nestConfigUtil.resolveAsync({ cwd }))
        .rejects
        .toThrow(/未找到生产配置文件/)
    }
    finally {
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('可通过 devConfig 指定开发环境', async () => {
    const cwd = createTempAppDir()
    const configDir = join(cwd, 'config')
    mkdirSync(configDir)
    writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
    writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')

    const result = await nestConfigUtil.resolveAsync({ cwd, devConfig: 'local' })
    expect(result.devMode).toBe(NestDevMode.Development)
    expect(result.devEnv).toBe('local')
    expect(result.configFilePath).toBe(join(configDir, 'local.config.js'))
  })

  it('开发模式仅有一个 xxx.config.js 时直接使用', async () => {
    const previous = setEnv('NODE_ENV', 'local')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(result.devEnv).toBe('test')
      expect(result.configFileName).toBe('test.config.js')
    }
    finally {
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('支持任意 xxx.config.js 开发环境（如 staging）', async () => {
    const cwd = createTempAppDir()
    const configDir = join(cwd, 'config')
    mkdirSync(configDir)
    writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
    writeFileSync(join(configDir, 'staging.config.js'), 'module.exports = {}')

    const result = await nestConfigUtil.resolveAsync({ cwd, devConfig: 'staging' })
    expect(result.devMode).toBe(NestDevMode.Development)
    expect(result.devEnv).toBe('staging')
    expect(result.configFileName).toBe('staging.config.js')
  })

  it('开发模式扫描目录包含所有 xxx.config.js 供选择', async () => {
    const previous = setEnv('NODE_ENV', 'local')
    const stdinIsTTY = process.stdin.isTTY
    Object.defineProperty(process.stdin, 'isTTY', { value: true, configurable: true })
    const selectSpy = jest.spyOn(
      (await import('@142vip/utils')).VipInquirer,
      'promptSelect',
    ).mockResolvedValue('uat.config.js')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'staging.config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'uat.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(selectSpy).toHaveBeenCalledWith(
        expect.stringContaining('请选择配置文件'),
        ['local.config.js', 'staging.config.js', 'uat.config.js'],
      )
      expect(result.devEnv).toBe('uat')
      expect(result.configFileName).toBe('uat.config.js')
    }
    finally {
      selectSpy.mockRestore()
      Object.defineProperty(process.stdin, 'isTTY', { value: stdinIsTTY, configurable: true })
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('拒绝 production.config.js 作为开发配置', () => {
    const cwd = createTempAppDir()
    const configDir = join(cwd, 'config')
    mkdirSync(configDir)
    writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
    writeFileSync(join(configDir, 'production.config.js'), 'module.exports = {}')

    expect(() => nestConfigUtil.resolveSync({ cwd }))
      .toThrow(/开发配置不可使用环境名/)
  })

  it('开发模式多配置时交互选择 local/test', async () => {
    const previous = setEnv('NODE_ENV', 'local')
    const stdinIsTTY = process.stdin.isTTY
    Object.defineProperty(process.stdin, 'isTTY', { value: true, configurable: true })
    const selectSpy = jest.spyOn(
      (await import('@142vip/utils')).VipInquirer,
      'promptSelect',
    ).mockResolvedValue('local.config.js')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'test.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(selectSpy).toHaveBeenCalled()
      expect(result.devEnv).toBe('local')
      expect(result.configFileName).toBe('local.config.js')
      expect(existsSync(join(cwd, 'node_modules/.cache/@142vip/nest-starter/dev-config'))).toBe(true)
    }
    finally {
      selectSpy.mockRestore()
      Object.defineProperty(process.stdin, 'isTTY', { value: stdinIsTTY, configurable: true })
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('开发模式热重载复用上次选择，不再弹交互', async () => {
    const previous = setEnv('NODE_ENV', 'local')
    const stdinIsTTY = process.stdin.isTTY
    Object.defineProperty(process.stdin, 'isTTY', { value: true, configurable: true })
    const selectSpy = jest.spyOn(
      (await import('@142vip/utils')).VipInquirer,
      'promptSelect',
    ).mockResolvedValue('staging.config.js')
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'staging.config.js'), 'module.exports = {}')

      const first = await nestConfigUtil.resolveAsync({ cwd })
      expect(first.devEnv).toBe('staging')
      expect(selectSpy).toHaveBeenCalledTimes(1)

      const second = await nestConfigUtil.resolveAsync({ cwd })
      expect(second.devEnv).toBe('staging')
      expect(selectSpy).toHaveBeenCalledTimes(1)
    }
    finally {
      selectSpy.mockRestore()
      Object.defineProperty(process.stdin, 'isTTY', { value: stdinIsTTY, configurable: true })
      restoreEnv('NODE_ENV', previous)
    }
  })

  it('开发模式可通过 RUN_ENV 跳过交互', async () => {
    const previousNodeEnv = setEnv('NODE_ENV', 'local')
    const previousRunEnv = setEnv('RUN_ENV', 'uat')
    const selectSpy = jest.spyOn(
      (await import('@142vip/utils')).VipInquirer,
      'promptSelect',
    )
    try {
      const cwd = createTempAppDir()
      const configDir = join(cwd, 'config')
      mkdirSync(configDir)
      writeFileSync(join(configDir, 'config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'local.config.js'), 'module.exports = {}')
      writeFileSync(join(configDir, 'uat.config.js'), 'module.exports = {}')

      const result = await nestConfigUtil.resolveAsync({ cwd })
      expect(selectSpy).not.toHaveBeenCalled()
      expect(result.devEnv).toBe('uat')
      expect(result.configFileName).toBe('uat.config.js')
    }
    finally {
      selectSpy.mockRestore()
      restoreEnv('NODE_ENV', previousNodeEnv)
      restoreEnv('RUN_ENV', previousRunEnv)
    }
  })

  it('非 local 启动直接加载 config.js', async () => {
    const previous = setEnv('NODE_ENV', undefined)
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
    expect(result.devEnv).toBe('local')
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
