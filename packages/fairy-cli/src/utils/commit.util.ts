import type { CommitLinterOptions, GitCommitLinter, VipCommitLinterConfig } from '@142vip/commit-linter'
import { createRequire } from 'node:module'
import { commitLinter, CONFIG_DEFAULT_NAME } from '@142vip/commit-linter'
import { VipColor, vipConfig, VipConsole, vipLogger, VipMonorepo, VipNodeJS } from '@142vip/utils'
import { name, version } from '../../package.json'
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
 * 加载 commit-linter 配置：内置默认为底，`-f` 或 cosmiconfig 发现项覆盖（与 `fa lint -f` 语义一致）。
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

  return vipConfig.loadCliConfig<VipCommitLinterConfig>(CONFIG_DEFAULT_NAME, bundled)
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
