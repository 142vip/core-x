import path from 'node:path'
import { vipConfig, VipMonorepo } from '@142vip/utils'
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

import {
  buildCommitLinterOptions,
  DEFAULT_COMMIT_SCOPE_GLOBS,
  formatCommitRuntimeParams,
  loadCommitLinterConfigForCli,
  printCommitVerifyResult,
  resolveBundledDefaultCommitLinterConfigPath,
  resolveCommitLinterConfigPath,
  resolveCommitLinterConfigSource,
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

  it('fairy.config.commitLinter 覆盖 commit-linter.config，并整段替换 scopeGlobs', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockImplementation((configName) => {
      if (configName === 'fairy') {
        return {
          commitLinter: {
            scopes: ['from-fairy'],
            scopeGlobs: ['./packages/*'],
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

  it('resolveCommitLinterConfigSource 在 fairy.config.commitLinter 存在时标明来源', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockReturnValue({
      commitLinter: { scopeGlobs: ['./packages/*'] },
    })
    expect(resolveCommitLinterConfigSource()).toBe('fairy.config → commitLinter')
    expect(resolveCommitLinterConfigSource('./commit-linter.config.cjs')).toBe('-f ./commit-linter.config.cjs')
  })

  it('formatCommitRuntimeParams 同时给出配置原文与生效 scopes', () => {
    const params = formatCommitRuntimeParams({
      source: 'fairy.config → commitLinter',
      fileConfig: {
        scopeGlobs: ['./packages/*'],
        scopes: ['README'],
        verify: () => true,
      },
      linterOptions: { scopes: ['@142vip/utils', 'README'] },
      cliScopeGlobs: [],
      quiet: true,
    })
    expect(params).toEqual(expect.arrayContaining([
      { label: 'source', value: 'fairy.config → commitLinter' },
      { label: 'scopeGlobs', value: './packages/*' },
      { label: 'scopes', value: 'README' },
      { label: 'types', value: '（未写）' },
      { label: 'verify', value: '已配置' },
      { label: 'effectiveScopes', value: '@142vip/utils, README' },
      { label: 'quiet', value: 'true' },
      { label: 'message', value: '（.git/COMMIT_EDITMSG）' },
    ]))
  })

  it('fa commit -f 优先于 fairy.config.commitLinter', () => {
    jest.spyOn(vipConfig, 'loadConfig').mockReturnValue({
      commitLinter: { scopes: ['from-fairy'] },
    })
    const fixturePath = path.join(__dirname, 'fixtures/commit-linter.fixture.cjs')
    const fileConfig = loadCommitLinterConfigForCli(fixturePath)
    expect(fileConfig.scopes).toContain('custom-scope')
    expect(fileConfig.scopes).not.toContain('from-fairy')
  })
})

describe('commit.util 校验与 scope', () => {
  const getPkgNames = jest.mocked(VipMonorepo.getPkgNames)

  beforeEach(() => {
    getPkgNames.mockClear()
  })

  it('resolveCommitScopeGlobs 空数组回退默认 glob', () => {
    expect(resolveCommitScopeGlobs([])).toEqual(DEFAULT_COMMIT_SCOPE_GLOBS)
    expect(resolveCommitScopeGlobs(['./packages/foo'])).toEqual(['./packages/foo'])
  })

  it('resolveCommitScopes 将 glob 传给 VipMonorepo.getPkgNames', () => {
    const pkgScopes = resolveCommitScopes(['./packages/*'])
    expect(getPkgNames).toHaveBeenCalledWith(['./packages/*'])
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
    expect(getPkgNames).toHaveBeenCalledWith(DEFAULT_COMMIT_SCOPE_GLOBS)
    expect(linterOptions.scopes).toEqual(['@142vip/utils'])
    expect('scopeGlobs' in linterOptions).toBe(false)
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
    expect(getPkgNames).toHaveBeenCalledWith(['./packages/*'])
    expect(linterOptions.scopes).toEqual(['@142vip/utils'])
  })

  it('runCommitMessageVerify 与 printCommitVerifyResult', () => {
    const verifiedCommit = runCommitMessageVerify({ linterOptions: { scopes: ['a'] } })
    expect(verifiedCommit.commit).toBe('feat(utils): add test')
    printCommitVerifyResult(verifiedCommit)
  })
})
