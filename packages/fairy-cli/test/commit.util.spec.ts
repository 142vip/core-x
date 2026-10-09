import path from 'node:path'
import { vipConfig, VipMonorepo, VipNodeJS } from '@142vip/utils'
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

import {
  buildCommitLinterOptions,
  DEFAULT_COMMIT_SCOPE_GLOBS,
  formatCommitConfigTrace,
  formatCommitRuntimeParams,
  loadCommitLinterConfigForCli,
  printCommitVerifyResult,
  resolveBundledDefaultCommitLinterConfigPath,
  resolveCommitLinterConfigPath,
  resolveCommitLinterConfigSource,
  resolveCommitLinterRuntime,
  resolveCommitScopeGlobs,
  resolveCommitScopes,
  runCommitMessageVerify,
} from '../src/utils/commit.util'

jest.mock('@142vip/commit-linter', () => {
  const actual = jest.requireActual<typeof import('@142vip/commit-linter')>('@142vip/commit-linter')
  return {
    ...actual,
    commitLinter: jest.fn(() => ({
      type: 'feat',
      scope: 'utils',
      subject: 'add test',
      commit: 'feat(utils): add test',
    })),
  }
})

jest.mock('@142vip/utils', () => {
  const actual = jest.requireActual<typeof import('@142vip/utils')>('@142vip/utils')
  return {
    ...actual,
    VipMonorepo: {
      ...actual.VipMonorepo,
      getPkgNames: jest.fn(() => ['@142vip/utils']),
    },
  }
})

describe('commit.util 配置路径', () => {
  beforeEach(() => {
    jest.spyOn(vipConfig, 'loadCliConfig').mockImplementation(
      (_name, defaultValue) => defaultValue,
    )
    jest.spyOn(vipConfig, 'searchConfigFilePath').mockReturnValue(undefined)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('resolveBundledDefaultCommitLinterConfigPath 指向随包 cjs', () => {
    const path = resolveBundledDefaultCommitLinterConfigPath()
    expect(path).toContain('default-commit-linter.config.cjs')
  })

  it('loadCommitLinterConfigForCli 以内置配置为默认合并用户配置', () => {
    const fileConfig = loadCommitLinterConfigForCli()
    expect(vipConfig.loadCliConfig).toHaveBeenCalled()
    expect(fileConfig.scopeGlobs).toEqual(['./apps/*', './packages/*'])
  })

  it('resolveCommitLinterConfigPath 无用户配置时回退内置路径', () => {
    const configPath = resolveCommitLinterConfigPath()
    expect(configPath).toContain('default-commit-linter.config.cjs')
  })

  it('resolveCommitLinterConfigPath -f 优先返回 CLI 路径', () => {
    expect(resolveCommitLinterConfigPath('/tmp/commit-linter.config.js')).toBe('/tmp/commit-linter.config.js')
  })

  it('loadCommitLinterConfigForCli -f 加载指定文件并合并内置 scopeGlobs', () => {
    const fixturePath = path.join(__dirname, 'fixtures/commit-linter.fixture.cjs')
    const fileConfig = loadCommitLinterConfigForCli(fixturePath)
    expect(fileConfig.scopes).toContain('custom-scope')
    expect(fileConfig.scopeGlobs).toEqual(['./apps/*', './packages/*'])
  })

  it('fairy.config.commit 的校验字段覆盖 commit-linter.config，并整段替换 scopeGlobs', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockImplementation((configName) => {
      if (configName === 'fairy') {
        return {
          commit: {
            scopes: ['from-fairy'],
            scopeGlobs: ['./packages/*'],
            quiet: true,
          },
        }
      }
      return { scopes: ['from-file'] }
    })
    const fileConfig = loadCommitLinterConfigForCli()
    expect(vipConfig.loadCliConfig).not.toHaveBeenCalled()
    expect(fileConfig.scopes).toEqual(['from-fairy'])
    expect(fileConfig.scopeGlobs).toEqual(['./packages/*'])
  })

  it('resolveCommitLinterConfigSource 在 fairy.config.commit 含校验字段时标明来源', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockReturnValue({
      commit: { scopeGlobs: ['./packages/*'] },
    })
    expect(resolveCommitLinterConfigSource()).toBe('fairy.config → commit')
    expect(resolveCommitLinterConfigSource('./commit-linter.config.cjs')).toBe('-f ./commit-linter.config.cjs')
  })

  it('commit 只写命令参数时仍读取 commit-linter.config', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockImplementation((configName) => {
      if (configName === 'fairy') {
        return { commit: { quiet: true, scope: ['./packages/*'] } }
      }
      return { scopes: ['from-file'] }
    })
    loadCommitLinterConfigForCli()
    expect(vipConfig.loadCliConfig).toHaveBeenCalled()
    expect(resolveCommitLinterConfigSource()).not.toBe('fairy.config → commit')
  })

  it('formatCommitRuntimeParams Monorepo 展示 scope 分解与校验白名单', () => {
    jest.spyOn(VipNodeJS, 'existPath').mockImplementation(filePath => filePath === 'pnpm-workspace.yaml')
    const runtime = resolveCommitLinterRuntime(
      {
        scopeGlobs: ['./packages/*'],
        scopes: ['README'],
        verify: () => true,
      },
      { scopeGlobs: [] },
    )
    const params = formatCommitRuntimeParams({
      source: 'fairy.config → commit',
      runtime,
      fileConfig: {
        scopeGlobs: ['./packages/*'],
        scopes: ['README'],
        verify: () => true,
      },
      cliScopeGlobs: [],
      quiet: true,
    })
    expect(params).toEqual(expect.arrayContaining([
      { label: 'source', value: 'fairy.config → commit' },
      { label: 'workspace', value: 'Monorepo（pnpm-workspace.yaml）' },
      { label: 'scopeGlobs', value: './packages/*' },
      { label: 'scopes', value: 'README' },
      { label: 'scopesFromScan', value: '@142vip/utils' },
      { label: 'effectiveScopes', value: '@142vip/utils, README' },
      { label: 'quiet', value: 'true' },
      { label: '校验.allowedTypes', value: expect.stringContaining('feat') },
      { label: '校验.allowedScopes', value: expect.stringContaining('README') },
    ]))
  })

  it('formatCommitConfigTrace 单包仓不展示 scopeGlobs', () => {
    jest.spyOn(VipNodeJS, 'existPath').mockImplementation(() => false)
    const trace = formatCommitConfigTrace({
      source: 'fairy.config → commit',
      runtime: resolveCommitLinterRuntime(
        { scopeGlobs: ['./apps/*', './packages/*'], scopes: ['abc'] },
        { scopeGlobs: [] },
      ),
      cliScopeGlobs: [],
    })
    expect(trace.scopeGlobs).toBeUndefined()
    expect(trace.workspace).toBe('单包仓')
    expect(trace.scopes).toBe('abc')
    expect(trace.effectiveScopes).toBe('abc')
    expect(trace.scopesFromScan).toBeUndefined()
  })

  it('fa commit -f 优先于 fairy.config.commit', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockReturnValue({
      commit: { scopes: ['from-fairy'] },
    })
    const fixturePath = path.join(__dirname, 'fixtures/commit-linter.fixture.cjs')
    const fileConfig = loadCommitLinterConfigForCli(fixturePath)
    expect(fileConfig.scopes).toContain('custom-scope')
    expect(fileConfig.scopes).not.toContain('from-fairy')
  })
})

describe('commit.util 校验与 scope', () => {
  const getPkgNames = jest.mocked(VipMonorepo.getPkgNames)
  let existPathSpy: jest.SpiedFunction<typeof VipNodeJS.existPath>

  beforeEach(() => {
    getPkgNames.mockClear()
    existPathSpy = jest.spyOn(VipNodeJS, 'existPath').mockImplementation((filePath) => {
      if (filePath === 'pnpm-workspace.yaml') {
        return true
      }
      return false
    })
  })

  afterEach(() => {
    existPathSpy.mockRestore()
  })

  it('resolveCommitScopeGlobs Monorepo 空数组回退默认 glob', () => {
    expect(resolveCommitScopeGlobs([])).toEqual(DEFAULT_COMMIT_SCOPE_GLOBS)
    expect(resolveCommitScopeGlobs(['./packages/foo'])).toEqual(['./packages/foo'])
  })

  it('resolveCommitScopeGlobs 单包仓库空数组不回退 Monorepo 默认', () => {
    existPathSpy.mockImplementation(() => false)
    expect(resolveCommitScopeGlobs([])).toEqual([])
  })

  it('resolveCommitScopes 将 glob 传给 VipMonorepo.getPkgNames', () => {
    const pkgScopes = resolveCommitScopes(['./packages/*'])
    expect(getPkgNames).toHaveBeenCalledWith(['./packages/*'], { rootFallback: false })
    expect(pkgScopes).toEqual(['@142vip/utils'])
  })

  it('buildCommitLinterOptions 无 scopeGlobs 且无 -s 时剥离 scopeGlobs 并原样返回', () => {
    const file = { scopes: ['README'], verify: () => true }
    expect(buildCommitLinterOptions(file, { scopeGlobs: [] })).toEqual(file)
  })

  it('buildCommitLinterOptions 配置 scopeGlobs 时合并 Monorepo 包名', () => {
    const linterOptions = buildCommitLinterOptions(
      { scopeGlobs: DEFAULT_COMMIT_SCOPE_GLOBS },
      { scopeGlobs: [] },
    )
    expect(getPkgNames).toHaveBeenCalledWith(DEFAULT_COMMIT_SCOPE_GLOBS, { rootFallback: false })
    expect(linterOptions.scopes).toEqual(['@142vip/utils'])
    expect('scopeGlobs' in linterOptions).toBe(false)
  })

  it('buildCommitLinterOptions 扫描无包名时不写入空 scopes', () => {
    getPkgNames.mockReturnValueOnce([])
    const file = { scopes: ['README'], verify: () => true }
    const linterOptions = buildCommitLinterOptions(
      { scopeGlobs: DEFAULT_COMMIT_SCOPE_GLOBS, ...file },
      { scopeGlobs: [] },
    )
    expect(linterOptions).toEqual(file)
  })

  it('buildCommitLinterOptions 单包仓库忽略内置 scopeGlobs', () => {
    existPathSpy.mockImplementation(() => false)
    const linterOptions = buildCommitLinterOptions(
      { scopeGlobs: DEFAULT_COMMIT_SCOPE_GLOBS },
      { scopeGlobs: [] },
    )
    expect(getPkgNames).not.toHaveBeenCalled()
    expect(linterOptions).toEqual({})
  })

  it('buildCommitLinterOptions 合并文件 scopes 与 Monorepo 包名', () => {
    const linterOptions = buildCommitLinterOptions(
      { scopes: ['README'], scopeGlobs: DEFAULT_COMMIT_SCOPE_GLOBS },
      { scopeGlobs: [] },
    )
    expect(linterOptions.scopes).toEqual(['@142vip/utils', 'README'])
  })

  it('buildCommitLinterOptions -s 优先于配置 scopeGlobs', () => {
    const linterOptions = buildCommitLinterOptions(
      { scopeGlobs: DEFAULT_COMMIT_SCOPE_GLOBS },
      { scopeGlobs: ['./packages/*'] },
    )
    expect(getPkgNames).toHaveBeenCalledWith(['./packages/*'], { rootFallback: false })
    expect(linterOptions.scopes).toEqual(['@142vip/utils'])
  })

  it('runCommitMessageVerify 与 printCommitVerifyResult', () => {
    const verifiedCommit = runCommitMessageVerify({ linterOptions: { scopes: ['a'] } })
    expect(verifiedCommit.commit).toBe('feat(utils): add test')
    printCommitVerifyResult(verifiedCommit)
  })
})
