import type { PackageJSONWithPath } from '@142vip/utils'
import { versionBump } from '@142vip/release-version'
import {
  VipColor,
  VipConsole,
  VipGit,
  vipLogger,
  VipSymbols,
} from '@142vip/utils'

interface ValidatePkgJSON {
  name: string
  release: boolean
}

/**
 * 打印模块预检信息
 */
export async function printPreCheckRelease(packageNames: string[]): Promise<void> {
  // 标记是否能够发布主仓库，前提是所有子模块都进行版本更新
  let isRootRelease = true
  const packages: ValidatePkgJSON[] = []
  for (const packageName of packageNames) {
    const isNeedRelease = validatePackage(packageName)
    // 子模块没有进行版本更新
    if (isNeedRelease) {
      isRootRelease = false
    }
    packages.push({ name: packageName, release: isNeedRelease })
  }

  vipLogger.logByBlank('对仓库各模块进行版本变更校验，结果如下：')

  for (const pkg of packages) {
    const msg = pkg.release ? VipColor.red(`${VipSymbols.error} ${pkg.name}`) : VipColor.green(`${VipSymbols.success} ${pkg.name}`)
    VipConsole.log(msg)
  }

  if (!isRootRelease) {
    vipLogger.logByBlank(`${VipColor.yellow(`${VipSymbols.warning} 存在未发布的模块，请先进行模块的版本变更，再更新仓库版本！！！`)}`)
  }
}

/**
 * 提交git当前节点到上个tag的所有提交记录
 * 分析、判断是否有公共模块，提醒及时对公共模块发布新的版本号
 */
function validatePackage(packageNameInCommitScope: string, template?: string): boolean {
  // 整理出git提交日志
  const logsByPackage = VipGit.getRecentCommitsByScope(packageNameInCommitScope)

  // 判断是否需要发布新的版本
  return logsByPackage.length > 0 && !logsByPackage[0].includes(template ?? `release(${packageNameInCommitScope})`)
}

/**
 * 更新公共包
 * 生成changelog文档，更新version
 */
export async function releaseMonorepoPkg(pkg: PackageJSONWithPath): Promise<void> {
  const commitInfo = `release(${pkg.name}): publish \`v%s\``
  const execute = 'git add CHANGELOG.md'
  const rpCommand = `bumpx --preid alpha --changelog --commit '${commitInfo}'  --execute '${execute}' --scopeName '${pkg.name}' --no-tag --all`
  const command = `pnpm --filter "${pkg.name}" --shell-mode exec "${rpCommand}"`

  VipConsole.log(`等价命令-->${command}`)

  await versionBump({
    preid: 'alpha',
    // 注意：在对应monorepo模块的目录中执行bump命令
    cwd: pkg.path,
    execute,
    changelog: true,
    currentVersion: pkg.version,
    scopeName: pkg.name,
    // 子模块发布，不支持tag标签
    tag: false,
    commit: commitInfo,
    push: true,
    all: true,
    // 忽略git钩子函数
    noVerify: true,
    // 确认框
    // confirm: true,
  })
}
/**
 * 发布项目
 * - 更新根目录下的version版本
 * - 提交commit信息
 * - 标记tag信息
 */
export async function releaseRoot(): Promise<void> {
  const commitInfo = 'chore(release): publish v%s'
  const execute = 'git add CHANGELOG.md'
  const releaseCommand = `npx bumpx --preid alpha --changelog --commit "${commitInfo}" --execute "${execute}" --all`
  VipConsole.log(`等价命令-->${releaseCommand}`)
  // 执行命令，需要交互 shell执行
  await versionBump({
    preid: 'alpha',
    changelog: true,
    execute,
    // 发布根模块，需要打标签
    tag: true,
    commit: commitInfo,
    push: true,
    all: true,
  })
}
