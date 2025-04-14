import { execSync } from 'node:child_process'
import process from 'node:process'
import { versionBump } from '@142vip/release-version'
import {
  VipColor,
  VipConsole,
  VipGit,
  VipNodeJS,
  VipPackageJSON,
  VipSymbols,
} from '@142vip/utils'

interface PackageJSON {
  name: string
  version: string
  private: boolean
  path: string
}

interface ValidatePkgJSON {
  name: string
  release: boolean
}

/**
 * 获取发布的包名
 * 参考：
 * - pnpm 命令： https://pnpm.io/cli/list
 * - filter参数： https://pnpm.io/filtering
 */
export function getReleasePkgJSON(filter?: string | string[]): PackageJSON[] {
  try {
    // 格式： --filter ./packages/*
    let filterRgx = ''
    if (filter == null || filter.length === 0) {
      return []
    }
    else {
      if (Array.isArray(filter)) {
        for (const f of filter) {
          filterRgx += `--filter "${f}" `
        }
      }
      else {
        filterRgx = `--filter "${filter}"`
      }
    }
    const command = `pnpm ls --json --only-projects ${filterRgx} --depth -1`
    const packageStr = execSync(command).toString().trim()
    return JSON.parse(packageStr) as Array<PackageJSON>
  }
  catch (error) {
    console.error('Failed to get the release package name:', error)
    process.exit(1)
  }
}

/**
 * 打印模块预检信息
 */
export async function printPreCheckRelease(packageNames: string[]): Promise<void> {
  // 标记是否能够发布主仓库，前提是所有子模块都进行版本更新
  let isRootRelease = true
  const packages: ValidatePkgJSON[] = []
  for (const packageName of packageNames) {
    const isNeedRelease = await validatePackage(packageName)
    // 子模块没有进行版本更新
    if (isNeedRelease) {
      isRootRelease = false
    }
    packages.push({ name: packageName, release: isNeedRelease })
  }

  VipConsole.log('\n对仓库各模块进行版本变更校验，结果如下：\n')
  for (const pkg of packages) {
    if (pkg.release) {
      VipConsole.log(VipColor.red(`${VipSymbols.error} ${pkg.name}`))
    }
    else {
      VipConsole.log(VipColor.green(`${VipSymbols.success} ${pkg.name}`))
    }
  }

  // 输出空行
  VipConsole.log()

  if (!isRootRelease) {
    VipConsole.log(`${VipColor.yellow(`${VipSymbols.warning} 存在未发布的模块，请先进行模块的版本变更，再更新仓库版本！！！`)}`)
  }
}

/**
 * 提交git当前节点到上个tag的所有提交记录
 * 分析、判断是否有公共模块，提醒及时对公共模块发布新的版本号
 */
async function validatePackage(packageNameInCommitScope: string, template?: string): Promise<boolean> {
  const latestTag = await VipPackageJSON.getVersionGitTag()
  if (latestTag == null) {
    VipConsole.log(`仓库没有tag标签，请先打tag标签或配置version字段！！！`)
    VipNodeJS.exitProcess(1)
  }
  const commitLogs = VipGit.getCommitLogs(latestTag!)

  // 整理出git提交日志
  const logsByPackage = commitLogs.filter(commit => commit.includes(`(${packageNameInCommitScope})`))

  // 判断是否需要发布新的版本
  return logsByPackage.length > 0 && !logsByPackage[0].includes(template ?? `release(${packageNameInCommitScope})`)
}

/**
 * 更新公共包
 * 生成changelog文档，更新version
 */
export async function releaseMonorepoPkg(pkg: PackageJSON): Promise<void> {
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
