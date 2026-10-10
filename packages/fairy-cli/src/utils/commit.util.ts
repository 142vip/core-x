import type { CommitLinterOptions, GitCommitLinter, VipCommitLinterConfig } from '@142vip/commit-linter'
import type { VipCliDryRunParam } from '@142vip/utils'
import { createRequire } from 'node:module'
import {
  commitLinter,
  CONFIG_DEFAULT_NAME,
  GIT_COMMIT_DEFAULT_SCOPES,
  GIT_COMMIT_DEFAULT_TYPES,
} from '@142vip/commit-linter'
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

/** commit scope 扫描：不把单包仓根 `package.json` 名当作 glob 命中结果 */
const COMMIT_SCOPE_PKG_QUERY = { rootFallback: false } as const

export function isCommitMonorepoWorkspace(): boolean {
  return VipNodeJS.existPath('pnpm-workspace.yaml')
}

/**
 * 解析用于 `pnpm ls --filter` 的 glob 列表。
 * 单包仓库（cwd 下无 `pnpm-workspace.yaml`）返回空数组，无需在 `fairy.config` 写 `scopeGlobs: []`。
 */
export function resolveCommitScopeGlobs(scopeGlobs: string[]): string[] {
  if (scopeGlobs.length > 0) {
    return scopeGlobs
  }
  if (!VipNodeJS.existPath('pnpm-workspace.yaml')) {
    return []
  }
  return DEFAULT_COMMIT_SCOPE_GLOBS
}

/** 按 glob 收集 npm 包名（scope 白名单） */
export function resolveCommitScopes(scopeGlobs: string[]): string[] {
  const globs = resolveCommitScopeGlobs(scopeGlobs)
  if (globs.length === 0) {
    return []
  }
  return VipMonorepo.getPkgNames(globs, COMMIT_SCOPE_PKG_QUERY)
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
    if (pkgScopes.length === 0) {
      return base
    }
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
 * 本次实际用于 `pnpm ls --filter` 的 glob：CLI `-s` 优先；单包仓不套用配置里的 Monorepo 默认 glob。
 */
export function resolveAppliedCommitScopeGlobs(
  fileConfig: VipCommitLinterConfig,
  cliScopeGlobs: string[],
): string[] {
  if (cliScopeGlobs.length > 0) {
    return cliScopeGlobs
  }
  if (!isCommitMonorepoWorkspace()) {
    return []
  }
  return fileConfig.scopeGlobs ?? []
}

export interface CommitLinterRuntime {
  isMonorepo: boolean
  /** 配置文件中的 `scopeGlobs` 原文（单包仓 trace 不展示） */
  configScopeGlobs: string[] | undefined
  /** 实际参与扫描的 glob（`-s` 或 Monorepo 下配置 `scopeGlobs`） */
  appliedGlobs: string[]
  scopesFromConfig: string[]
  scopesFromScan: string[]
  linterOptions: CommitLinterOptions
}

/**
 * 合并 cosmiconfig 与用户 CLI：`-s` 或配置 `scopeGlobs` 时扫描 Monorepo 包名写入 `scopes`。
 * CLI `-s` 优先于配置文件中的 `scopeGlobs`。
 * 单包仓库自动跳过内置 Monorepo `scopeGlobs`，只做 Conventional Commits 格式校验（除非配置了 `types` / `scopes` / `verify`）。
 */
export function resolveCommitLinterRuntime(
  fileConfig: VipCommitLinterConfig,
  options: { scopeGlobs: string[] },
): CommitLinterRuntime {
  const isMonorepo = isCommitMonorepoWorkspace()
  const appliedGlobs = resolveAppliedCommitScopeGlobs(fileConfig, options.scopeGlobs)
  const scopesFromConfig = [...(fileConfig.scopes ?? [])]
  const scopesFromScan = appliedGlobs.length === 0
    ? []
    : VipMonorepo.getPkgNames(appliedGlobs, COMMIT_SCOPE_PKG_QUERY)
  const base = toCommitLinterOptions(fileConfig)
  let linterOptions = base
  if (scopesFromScan.length > 0) {
    linterOptions = withMergedScopes(base, scopesFromScan)
  }
  return {
    isMonorepo,
    configScopeGlobs: fileConfig.scopeGlobs,
    appliedGlobs,
    scopesFromConfig,
    scopesFromScan,
    linterOptions,
  }
}

export function buildCommitLinterOptions(
  fileConfig: VipCommitLinterConfig,
  options: { scopeGlobs: string[] },
): CommitLinterOptions {
  return resolveCommitLinterRuntime(fileConfig, options).linterOptions
}

const COMMIT_PARAM_EMPTY = '（未写）'
const COMMIT_PARAM_SKIP = '（不适用）'

function formatCommitParamList(values: string[] | undefined): string {
  if (values == null || values.length === 0) {
    return COMMIT_PARAM_EMPTY
  }
  return values.join(', ')
}

function commitWhitelistRulesActive(linterOptions: CommitLinterOptions): boolean {
  return linterOptions.types != null
    || linterOptions.scopes != null
    || linterOptions.verify != null
}

/** 与 `commitLinter` 内 `assertCommitRules` 一致的 type 白名单 */
export function resolveCommitAllowedTypes(linterOptions: CommitLinterOptions): string[] {
  return [...new Set([...(linterOptions.types ?? []), ...GIT_COMMIT_DEFAULT_TYPES])]
}

/** 与 `commitLinter` 内 `assertCommitRules` 一致的 scope 白名单（仅当启用 rules 时有效） */
export function resolveCommitAllowedScopes(linterOptions: CommitLinterOptions): string[] {
  return [...new Set([...(linterOptions.scopes ?? []), ...GIT_COMMIT_DEFAULT_SCOPES])]
}

/**
 * `--trace` / `--dry-run`：`commit: 配置` 段，只展示解析后仍相关的项。
 */
export function formatCommitConfigTrace(input: {
  source: string
  runtime: CommitLinterRuntime
  cliScopeGlobs: string[]
  quiet?: boolean
  push?: boolean
  message?: string
  fileCommit?: string
}): Record<string, string> {
  const runtime = input.runtime
  const trace: Record<string, string> = {
    source: input.source,
    workspace: runtime.isMonorepo ? 'Monorepo（pnpm-workspace.yaml）' : '单包仓',
  }

  if (runtime.isMonorepo && runtime.configScopeGlobs != null && runtime.configScopeGlobs.length > 0) {
    trace.scopeGlobs = formatCommitParamList(runtime.configScopeGlobs)
  }

  trace.scopes = formatCommitParamList(runtime.scopesFromConfig.length > 0 ? runtime.scopesFromConfig : undefined)
  trace.types = formatCommitParamList(runtime.linterOptions.types)
  trace.verify = runtime.linterOptions.verify != null ? '已配置' : '未配置'

  if (input.cliScopeGlobs.length > 0) {
    trace['-s'] = input.cliScopeGlobs.join(', ')
  }

  if (runtime.appliedGlobs.length > 0) {
    trace.appliedGlobs = runtime.appliedGlobs.join(', ')
  }

  if (runtime.scopesFromScan.length > 0) {
    trace.scopesFromScan = runtime.scopesFromScan.join(', ')
  }

  const mergedScopes = runtime.linterOptions.scopes
  trace.effectiveScopes = mergedScopes != null && mergedScopes.length > 0
    ? mergedScopes.join(', ')
    : COMMIT_PARAM_EMPTY

  if (input.fileCommit != null && input.fileCommit !== '') {
    trace.commit = input.fileCommit
  }
  if (input.quiet === true) {
    trace.quiet = 'true'
    trace.message = input.message != null && input.message !== ''
      ? input.message
      : '（.git/COMMIT_EDITMSG）'
  }
  if (input.push === true) {
    trace.push = 'true'
  }
  return trace
}

/**
 * `--trace`：`commit: 校验` 段，列出与 `commitLinter` 一致的 type / scope 白名单（未启用白名单时为「不适用」）。
 */
export function formatCommitValidationTrace(linterOptions: CommitLinterOptions): Record<string, string> {
  if (!commitWhitelistRulesActive(linterOptions)) {
    return {
      allowedTypes: COMMIT_PARAM_SKIP,
      allowedScopes: COMMIT_PARAM_SKIP,
    }
  }

  return {
    allowedTypes: resolveCommitAllowedTypes(linterOptions).join(', '),
    allowedScopes: resolveCommitAllowedScopes(linterOptions).join(', '),
  }
}

/**
 * `fa commit --dry-run` 要打印的生效参数（与 `formatCommitConfigTrace` + `formatCommitValidationTrace` 同源）。
 */
export function formatCommitRuntimeParams(input: {
  source: string
  runtime: CommitLinterRuntime
  cliScopeGlobs: string[]
  quiet?: boolean
  push?: boolean
  message?: string
  fileConfig?: VipCommitLinterConfig
}): VipCliDryRunParam[] {
  const configTrace = formatCommitConfigTrace({
    source: input.source,
    runtime: input.runtime,
    cliScopeGlobs: input.cliScopeGlobs,
    quiet: input.quiet,
    push: input.push,
    message: input.message,
    fileCommit: input.fileConfig?.commit,
  })
  const validationTrace = formatCommitValidationTrace(input.runtime.linterOptions)

  const params: VipCliDryRunParam[] = Object.entries(configTrace).map(([label, value]) => ({
    label,
    value,
  }))
  for (const [label, value] of Object.entries(validationTrace)) {
    params.push({ label: `校验.${label}`, value })
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
