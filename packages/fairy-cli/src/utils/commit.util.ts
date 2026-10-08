import type { CommitLinterOptions, GitCommitLinter, VipCommitLinterConfig } from '@142vip/commit-linter'
import type { VipCliDryRunParam } from '@142vip/utils'
import { createRequire } from 'node:module'
import { commitLinter, CONFIG_DEFAULT_NAME } from '@142vip/commit-linter'
import { VipColor, vipConfig, VipConsole, vipLogger, VipMonorepo, VipNodeJS } from '@142vip/utils'
import { name, version } from '../../package.json'
import { loadFairyConfig } from '../config'
import { resolveFairyCliBundledConfig } from './pkg.util'

/** 与 `@142vip/commit-linter` 同源，便于从 `fa` 包引用 */
export {
  commitLinter,
  defineVipCommitLinterConfig,
  loadCommitLinterConfig,
} from '@142vip/commit-linter'

const commitConfigRequire = createRequire(__filename)

/** 未在配置 / CLI 指定时的 Monorepo 扫描路径（与内置 default-commit-linter 一致） */
export const DEFAULT_COMMIT_SCOPE_GLOBS: string[] = ['./apps/*', './packages/*']

export function resolveCommitScopeGlobs(scopeGlobs: string[]): string[] {
  return scopeGlobs.length > 0 ? scopeGlobs : DEFAULT_COMMIT_SCOPE_GLOBS
}

/** 按 glob 收集 npm 包名（scope 白名单） */
export function resolveCommitScopes(scopeGlobs: string[]): string[] {
  return VipMonorepo.getPkgNames(resolveCommitScopeGlobs(scopeGlobs))
}

/** 随包发布的内置默认 commit-linter 配置路径 */
export function resolveBundledDefaultCommitLinterConfigPath(): string {
  return resolveFairyCliBundledConfig('default-commit-linter.config.cjs')
}

function loadBundledCommitLinterConfig(): VipCommitLinterConfig {
  const filepath = resolveBundledDefaultCommitLinterConfigPath()
  return commitConfigRequire(filepath) as VipCommitLinterConfig
}

/**
 * 已写出的键整段替换，数组不按索引与内置默认拼接。
 * 未写出的键保留内置 `default-commit-linter.config.cjs`。
 */
function mergeCommitLinterOverride(
  bundled: VipCommitLinterConfig,
  override: VipCommitLinterConfig,
): VipCommitLinterConfig {
  const merged: VipCommitLinterConfig = { ...bundled }
  const keys = Object.keys(override) as Array<keyof VipCommitLinterConfig>
  for (const key of keys) {
    const value = override[key]
    if (value !== undefined) {
      Object.assign(merged, { [key]: value })
    }
  }
  return merged
}

/**
 * `commit` 上的校验字段。只写了 `-q` / `-s` 这类命令参数时返回 `undefined`，
 * 这样仍会读取 `commit-linter.config`。
 */
function fairyCommitLinterOverride(): VipCommitLinterConfig | undefined {
  const commit = loadFairyConfig().commit
  if (commit == null) {
    return undefined
  }
  const { types, scopes, scopeGlobs, verify } = commit
  if (types === undefined && scopes === undefined && scopeGlobs === undefined && verify === undefined) {
    return undefined
  }
  return { types, scopes, scopeGlobs, verify }
}

/**
 * 加载 commit-linter 配置。优先级：
 * `fa commit -f`（含 `fairy.config` → `commit.config`）>
 * `fairy.config` → `commit` 的校验字段 >
 * `commit-linter.config` > 内置默认。
 * 校验字段存在时不再读取 `commit-linter.config`。
 */
export function loadCommitLinterConfigForCli(cliConfigPath?: string): VipCommitLinterConfig {
  const bundled = loadBundledCommitLinterConfig()

  if (cliConfigPath != null && cliConfigPath !== '') {
    const fileConfig = vipConfig.loadConfigAtPath<VipCommitLinterConfig>(
      CONFIG_DEFAULT_NAME,
      cliConfigPath,
    )
    if (fileConfig == null) {
      vipLogger.error(`${VipColor.red('无法加载 commit-linter 配置：')} ${cliConfigPath}`)
      VipNodeJS.exitProcess(1)
      throw new Error('unreachable')
    }
    return vipConfig.mergeCommanderConfig(bundled, fileConfig)
  }

  const fairyCommitLinter = fairyCommitLinterOverride()
  if (fairyCommitLinter != null) {
    return mergeCommitLinterOverride(bundled, fairyCommitLinter)
  }

  return vipConfig.loadCliConfig<VipCommitLinterConfig>(CONFIG_DEFAULT_NAME, bundled)
}

/**
 * dry-run / `--trace` 展示用：说明本次配置从哪来。
 * 与 `loadCommitLinterConfigForCli` 的优先级一致。
 */
export function resolveCommitLinterConfigSource(cliConfigPath?: string): string {
  if (cliConfigPath != null && cliConfigPath !== '') {
    return `-f ${cliConfigPath}`
  }
  if (fairyCommitLinterOverride() != null) {
    return 'fairy.config → commit'
  }
  const discovered = vipConfig.searchConfigFilePath(CONFIG_DEFAULT_NAME)
  if (discovered != null && discovered !== '') {
    return discovered
  }
  return '内置 default-commit-linter.config.cjs'
}

/** 配置文件路径：CLI `-f` → cosmiconfig 发现项 → 内置默认 */
export function resolveCommitLinterConfigPath(cliConfigPath?: string): string {
  if (cliConfigPath != null && cliConfigPath !== '') {
    return cliConfigPath
  }
  const discovered = vipConfig.searchConfigFilePath(CONFIG_DEFAULT_NAME)
  if (discovered != null && discovered !== '') {
    return discovered
  }
  return resolveBundledDefaultCommitLinterConfigPath()
}

/** 配置文件 → `commitLinter` 入参（不含 `scopeGlobs` / 文件级 `commit`） */
function toCommitLinterOptions(fileConfig: VipCommitLinterConfig): CommitLinterOptions {
  return {
    types: fileConfig.types,
    scopes: fileConfig.scopes,
    verify: fileConfig.verify,
  }
}

function withMergedScopes(
  base: CommitLinterOptions,
  pkgScopes: string[],
): CommitLinterOptions {
  const extraScopes = base.scopes ?? []
  if (extraScopes.length === 0) {
    return {
      types: base.types,
      scopes: pkgScopes,
      verify: base.verify,
    }
  }

  const scopes = [...pkgScopes]
  for (const scope of extraScopes) {
    if (!scopes.includes(scope)) {
      scopes.push(scope)
    }
  }
  return {
    types: base.types,
    scopes,
    verify: base.verify,
  }
}

/**
 * 合并 cosmiconfig 与用户 CLI：`-s` 或配置 `scopeGlobs` 时扫描 Monorepo 包名写入 `scopes`。
 * CLI `-s` 优先于配置文件中的 `scopeGlobs`。
 */
export function buildCommitLinterOptions(
  fileConfig: VipCommitLinterConfig,
  options: { scopeGlobs: string[] },
): CommitLinterOptions {
  const configGlobs = fileConfig.scopeGlobs ?? []
  const globs = options.scopeGlobs.length > 0 ? options.scopeGlobs : configGlobs
  const base = toCommitLinterOptions(fileConfig)

  if (globs.length === 0) {
    return base
  }

  const pkgScopes = VipMonorepo.getPkgNames(globs)
  return withMergedScopes(base, pkgScopes)
}

const COMMIT_PARAM_EMPTY = '（未写）'

function formatCommitParamList(values: string[] | undefined): string {
  if (values == null || values.length === 0) {
    return COMMIT_PARAM_EMPTY
  }
  return values.join(', ')
}

/**
 * `fa commit --dry-run` 要打印的生效参数。
 * `scopeGlobs` 来自配置原文；`effectiveScopes` 是 `-s` 或 glob 扫描并上配置 `scopes` 之后的白名单。
 * `verify` 只标明是否配置，不打印函数体。
 */
export function formatCommitRuntimeParams(input: {
  source: string
  fileConfig: VipCommitLinterConfig
  linterOptions: CommitLinterOptions
  cliScopeGlobs: string[]
  quiet?: boolean
  push?: boolean
  message?: string
}): VipCliDryRunParam[] {
  const params: VipCliDryRunParam[] = [
    { label: 'source', value: input.source },
    { label: 'scopeGlobs', value: formatCommitParamList(input.fileConfig.scopeGlobs) },
    { label: 'scopes', value: formatCommitParamList(input.fileConfig.scopes) },
    { label: 'types', value: formatCommitParamList(input.fileConfig.types) },
    { label: 'verify', value: input.fileConfig.verify != null ? '已配置' : '未配置' },
  ]
  if (input.cliScopeGlobs.length > 0) {
    params.push({ label: '-s', value: input.cliScopeGlobs.join(', ') })
  }
  params.push({
    label: 'effectiveScopes',
    value: formatCommitParamList(input.linterOptions.scopes),
  })
  if (input.fileConfig.commit != null && input.fileConfig.commit !== '') {
    params.push({ label: 'commit', value: input.fileConfig.commit })
  }
  if (input.quiet === true) {
    const message = input.message != null && input.message !== ''
      ? input.message
      : '（.git/COMMIT_EDITMSG）'
    params.push({ label: 'quiet', value: 'true' }, { label: 'message', value: message })
  }
  if (input.push === true) {
    params.push({ label: 'push', value: 'true' })
  }
  return params
}

/** `--quiet`：校验 commit 首行（commit-msg 钩子） */
export function runCommitMessageVerify(options: {
  linterOptions: CommitLinterOptions
  message?: string
}): GitCommitLinter {
  return commitLinter({
    types: options.linterOptions.types,
    scopes: options.linterOptions.scopes,
    verify: options.linterOptions.verify,
    commit: options.message,
  })
}

export function printCommitVerifyResult(verifiedCommit: GitCommitLinter): void {
  const { type, scope, subject, commit } = verifiedCommit
  const rule = VipColor.dim('─'.repeat(40))
  vipLogger.println()
  VipConsole.log(`  ${VipColor.cyan(name)}  ${VipColor.dim(`v${version}`)}`)
  vipLogger.println()
  VipConsole.log(rule)
  VipConsole.log(`  ${VipColor.greenBright('✓')} ${VipColor.bold('Commit 校验通过')}`)
  VipConsole.log(`  ${VipColor.dim('type')}     ${VipColor.cyan(type)}`)
  VipConsole.log(`  ${VipColor.dim('scope')}    ${scope ?? VipColor.dim('—')}`)
  VipConsole.log(`  ${VipColor.dim('subject')}  ${subject}`)
  VipConsole.log(`  ${VipColor.dim('commit')}  ${VipColor.green(commit)}`)
  VipConsole.log(rule)
  vipLogger.println()
}
