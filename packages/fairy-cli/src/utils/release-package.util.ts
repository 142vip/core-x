import type { ChangelogCliOptions } from '@142vip/changelog'
import type { ReleaseVersionOptions } from '@142vip/release-version'
import type { PackageJSONWithPath } from '@142vip/utils'
import { changelogApi, parseCliOptions } from '@142vip/changelog'
import { releaseApi } from '@142vip/release-version'
import {
  VipColor,
  VipConsole,
  VipGit,
  vipLogger,
  VipSymbols,
} from '@142vip/utils'

/**
 * `fa release` / `releasePackage` 运行时选项。
 * 编排层策略（commit 文案、tag、cwd）在本模块维护，底层发版委托 `@142vip/release-version`。
 */
export interface ReleasePackageOptions {
  /** 覆盖 changelog 默认的 GitHub Release 标记：`true` = Pre-release，`false` = Latest */
  changelogPrerelease?: boolean
  /** 试运行：预览版本与 CHANGELOG，不写文件、不提交、不推送 */
  dryRun?: boolean
}

/**
 * 判断 Monorepo 子包自上次 `release(scope)` 提交后是否仍有待发版变更。
 * 依据最近一条 scope 提交是否以 `release(<pkg>)` 为前缀。
 */
export function isPackagePendingRelease(
  packageName: string,
  releaseCommitPrefix?: string,
): boolean {
  const recentCommits = VipGit.getRecentCommitsByScope(packageName)
  const releasePrefix = releaseCommitPrefix ?? `release(${packageName})`
  return recentCommits.length > 0 && !recentCommits[0].includes(releasePrefix)
}

/** 打印各子包发版预检结果（绿色 = 已对齐，红色 = 仍有待发版提交） */
export async function printPreCheckRelease(packageNames: string[]): Promise<void> {
  const packages = packageNames.map(name => ({
    name,
    pending: isPackagePendingRelease(name),
  }))
  const hasPendingPackage = packages.some(pkg => pkg.pending)

  vipLogger.logByBlank('对仓库各模块进行版本变更校验，结果如下：')

  for (const pkg of packages) {
    const label = pkg.pending
      ? VipColor.red(`${VipSymbols.error} ${pkg.name}`)
      : VipColor.green(`${VipSymbols.success} ${pkg.name}`)
    VipConsole.log(label)
  }

  if (hasPendingPackage) {
    vipLogger.logByBlank(
      VipColor.yellow(`${VipSymbols.warning} 存在未发布的模块，请先进行模块的版本变更，再更新仓库版本！！！`),
    )
  }
}

/**
 * 组装 `fa release` 传入 `@142vip/release-version` 的选项。
 * - 根仓库：`chore(release)` + 打 tag
 * - 子包：`release(@scope/pkg)` + 不打 tag + `cwd` 指向子包目录
 */
export function buildReleaseVersionOptions(
  pkg?: PackageJSONWithPath,
  options?: ReleasePackageOptions,
): ReleaseVersionOptions {
  const commitMessage = pkg == null
    ? 'chore(release): publish v%s'
    : `release(${pkg.name}): publish \`v%s\``

  return {
    preid: 'alpha',
    changelog: true,
    execute: 'git add CHANGELOG.md',
    commit: commitMessage,
    push: true,
    all: true,
    skipGitVerify: true,
    confirm: false,
    ...(options?.changelogPrerelease != null
      ? { changelogPrerelease: options.changelogPrerelease }
      : {}),
    ...pkg != null
      ? {
          currentVersion: pkg.version,
          scopeName: pkg.name,
          tag: false,
          cwd: pkg.path,
        }
      : {
          tag: true,
        },
  }
}

/** 由 `ReleaseVersionOperation` 解析结果生成 changelog CLI 参数 */
function toChangelogCliOptions(
  operation: Awaited<ReturnType<typeof releaseApi.releaseVersionInfo>>,
  changelogPrerelease?: boolean,
): ChangelogCliOptions {
  return {
    name: `v${operation.state.newVersion}`,
    ...(operation.options.scopeName != null ? { scopeName: operation.options.scopeName } : {}),
    ...(changelogPrerelease != null ? { prerelease: changelogPrerelease } : {}),
  }
}

/** dry-run：解析目标版本并预览 CHANGELOG，不写盘、不提交 */
async function previewReleasePackage(releaseOptions: ReleaseVersionOptions): Promise<void> {
  const operation = await releaseApi.releaseVersionInfo(releaseOptions)
  operation.printReleasePlan('发布计划预览：')

  if (!operation.options.changelog) {
    return
  }

  const changelogConfig = parseCliOptions(toChangelogCliOptions(operation, releaseOptions.changelogPrerelease))
  const { markdown, commits, releaseUrl } = await changelogApi.generateChangelogInfo(changelogConfig)

  VipConsole.log(
    `${VipColor.cyan(changelogConfig.from)} ${VipColor.dim(' -> ')} ${VipColor.blue(changelogConfig.to)} ${VipColor.dim(` (${commits.length} commits)`)}`,
  )
  VipConsole.log(
    `${VipSymbols.info} GitHub Release: ${changelogConfig.prerelease ? VipColor.yellow('Pre-release') : VipColor.green('Latest')}`,
  )
  if (operation.options.scopeName == null) {
    VipConsole.log(`${VipSymbols.info} 手动发布链接: ${VipColor.dim(releaseUrl)}`)
  }

  vipLogger.println()
  VipConsole.log(VipColor.dim('-------------- CHANGELOG 预览 --------------'))
  vipLogger.logByBlank(markdown.replace(/&nbsp;/g, ''))
  VipConsole.log(VipColor.dim('--------------------------------------------'))
  vipLogger.println()
  vipLogger.logByBlank(VipColor.yellow(`${VipSymbols.warning} 试运行结束：未修改文件、未提交、未推送。`))
}

/**
 * Monorepo 发版编排入口：升版本 → CHANGELOG → git commit / tag → push。
 * `dryRun` 时仅走预览分支。
 */
export async function releasePackage(
  pkg?: PackageJSONWithPath,
  options?: ReleasePackageOptions,
): Promise<void> {
  const releaseOptions = buildReleaseVersionOptions(pkg, options)

  if (options?.dryRun) {
    await previewReleasePackage(releaseOptions)
    return
  }

  await releaseApi.releaseVersion(releaseOptions)
}
