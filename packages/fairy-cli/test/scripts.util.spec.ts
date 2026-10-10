import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { afterEach, describe, expect, it, jest } from '@jest/globals'
import { runMain } from '../src/commands'
import { fairyDefaultConfig, loadFairyConfig } from '../src/config'
import {
  formatFairyRunScriptsHelpSection,
  listFairyRunCommandNames,
  resolveFairyRunCommands,
  resolveFairyScriptsConfig,
} from '../src/utils'
import { findCommand, runCliArgv } from './helpers/command-runner'

jest.mock('../src/config', () => {
  const actual = jest.requireActual<typeof import('../src/config')>('../src/config')
  return {
    ...actual,
    loadFairyConfig: jest.fn(() => actual.fairyDefaultConfig),
  }
})

const loadFairyConfigMock = jest.mocked(loadFairyConfig)

describe('scripts.util', () => {
  const prevCwd = process.cwd()
  let workDir: string | undefined

  afterEach(() => {
    process.chdir(prevCwd)
    if (workDir != null) {
      rmSync(workDir, { recursive: true, force: true })
      workDir = undefined
    }
    loadFairyConfigMock.mockImplementation(() => fairyDefaultConfig)
  })

  it('默认脚本可被 fa run 解析', () => {
    workDir = join(tmpdir(), `fa-scripts-default-${Date.now()}`)
    mkdirSync(workDir, { recursive: true })
    writeFileSync(join(workDir, 'package.json'), JSON.stringify({ name: 'tmp', scripts: {} }))
    process.chdir(workDir)

    expect(resolveFairyRunCommands('clean:dist')).toEqual(['npx fa clean --dist --quiet --all'])
    expect(listFairyRunCommandNames()).toContain('clean')
    expect(resolveFairyRunCommands('lint')).toEqual([])
  })

  it('fairy.config scripts 覆盖默认同名项', () => {
    workDir = join(tmpdir(), `fa-scripts-fairy-${Date.now()}`)
    mkdirSync(workDir, { recursive: true })
    writeFileSync(join(workDir, 'package.json'), JSON.stringify({ name: 'tmp', scripts: {} }))
    process.chdir(workDir)

    loadFairyConfigMock.mockReturnValue({
      scripts: {
        ...fairyDefaultConfig.scripts,
        lint: 'echo fairy-lint',
      },
    })
    expect(resolveFairyScriptsConfig().lint).toBe('echo fairy-lint')
    expect(resolveFairyRunCommands('lint')).toEqual(['echo fairy-lint'])
  })

  it('package.json scripts 优先于 fairy.config 与默认', () => {
    workDir = join(tmpdir(), `fa-scripts-${Date.now()}`)
    mkdirSync(workDir, { recursive: true })
    writeFileSync(join(workDir, 'package.json'), JSON.stringify({
      scripts: {
        'lint': 'echo pkg-lint',
        'build:custom': 'echo pkg-build',
      },
    }))
    process.chdir(workDir)
    loadFairyConfigMock.mockReturnValue({
      scripts: {
        ...fairyDefaultConfig.scripts,
        lint: 'echo fairy-lint',
      },
    })

    expect(resolveFairyRunCommands('lint')).toEqual(['echo pkg-lint'])
    expect(resolveFairyRunCommands('build:custom')).toEqual(['echo pkg-build'])
    expect(listFairyRunCommandNames()).toContain('build:custom')
  })
})

describe('formatFairyRunScriptsHelpSection', () => {
  it('包含 Run scripts 与 clean 项', () => {
    const text = formatFairyRunScriptsHelpSection()
    expect(text).toContain('Run scripts')
    expect(text).toContain('clean')
    expect(text).toContain('package.json')
  })
})

describe('runMain', () => {
  it('注册 run 子命令', async () => {
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await runMain(program)
    const cmd = findCommand(program, 'run')
    expect(cmd.name()).toBe('run')
    expect(cmd.aliases()).toContain('exec')
  })

  it('无脚本名时友好退出', async () => {
    const exitSpy = jest.spyOn(VipNodeJS, 'existErrorProcess').mockImplementation(() => {
      throw new Error('exit')
    })
    const program = new VipPackageCliCommander('fa', '1.0.0')
    await runMain(program)
    await expect(runCliArgv(program, ['run'])).rejects.toThrow('exit')
    exitSpy.mockRestore()
  })

  it('fa run <name> --dry-run 打印聚合后的脚本', async () => {
    const dir = join(tmpdir(), `fa-run-${Date.now()}`)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      scripts: { 'build:docs-proxy': 'echo docs-proxy' },
    }))
    const prev = process.cwd()
    process.chdir(dir)
    try {
      const program = new VipPackageCliCommander('fa', '1.0.0')
      await runMain(program)
      await runCliArgv(program, ['run', 'build:docs-proxy', '--dry-run'])
    }
    finally {
      process.chdir(prev)
      rmSync(dir, { recursive: true, force: true })
    }
  })
})
