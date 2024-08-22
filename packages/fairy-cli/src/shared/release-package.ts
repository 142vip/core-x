import { execSync } from 'node:child_process'
import process from 'node:process'
import { versionBump } from '@142vip/release-version'
import { getLatestTagName } from './git'

interface PackageJSON {
  name: string
  version: string
  private: boolean
  path: string
}

/**
 * 获取发布的包名
 * 参考：
 * - pnpm 命令： https://pnpm.io/cli/list
 * - filter参数： https://pnpm.io/filtering
 *
 */
export function getReleasePkgJSON(filter?: string) {
  try {
    const command = `pnpm ls --json --only-projects --filter "${filter ?? './packages/*'}" --depth -1`
    const packageStr = execSync(command).toString().trim()
    return JSON.parse(packageStr) as Array<PackageJSON>
  }
  catch (error) {
    console.error('Failed to get the release package name:', error)
    process.exit(1)
  }
}

/**
 * 提交git当前节点到上个tag的所有提交记录
 * 分析、判断是否有公共模块，提醒及时对公共模块发布新的版本号
 */
function validatePackage(packageName: string, template?: string) {
  const latestTag = getLatestTagName()
  const command = `git log --pretty=format:"%s" --date=short "${latestTag}"..HEAD`
  const commitLogs = execSync(command).toString().trim()

  // 整理出git提交日志
  const logsByPackage = commitLogs.split('\n')
    .filter(commit => commit.includes(`${packageName}`))

  // 判断是否需要发布新的版本
  return logsByPackage.length > 0 && !logsByPackage[0].includes(template ?? `release(${packageName})`)
}

/**
 * 更新公共包
 * 生成changelog文档，更新version
 */
export async function releaseMonorepoPackage(pkg: PackageJSON) {
  const commitInfo = `release(${pkg.name}): publish v%s`
  const execute = 'git add CHANGELOG.md'
  const rpCommand = `bumpx --preid alpha --changelog --commit '${commitInfo}'  --execute '${execute}' --scopeName '${pkg.name}' --no-tag --all`
  const command = `pnpm --filter "${pkg.name}" --shell-mode exec "${rpCommand}"`

  console.log('等价命令-->', command)
  console.log(pkg)
  console.log('aaaa dir-->', pkg.path)

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

export function validateBeforeReleaseRoot() {
  const pkgJSON = getReleasePkgJSON()
  const packageNames = pkgJSON.map(pkg => pkg.name)
  let isRootRelease = true
  const packages = []
  for (const packageName of packageNames) {
    const isRelease = validatePackage(packageName)
    if (!isRelease) {
      isRootRelease = false
    }
    packages.push({ name: packageName, release: isRelease })
  }

  return { release: isRootRelease, packages }
}

/**
 * 发布项目
 * - 更新根目录下的version版本
 * - 提交commit信息
 * - 标记tag信息
 */
export async function releaseRoot() {
  const commitInfo = 'chore(release): publish v%s'
  const execute = 'git add CHANGELOG.md'
  const releaseCommand = `npx bumpx --preid alpha --changelog --commit "${commitInfo}" --execute "${execute}" --all`
  console.log('等价命令-->', releaseCommand)
  // 执行命令，需要交互 shell执行
  await versionBump({
    preid: 'alpha',
    changelog: true,
    execute,
    commit: commitInfo,
    push: true,
    all: true,
  })
}
