import type { VersionBumpOptions } from '@142vip/release-version'
import type { VipCommander } from '@142vip/utils'
import { versionBump } from '@142vip/release-version'
import {
  VipColor,
  VipConsole,
  VipGit,
  VipInquirer,
  VipMonorepo,
  VipNodeJS,
} from '@142vip/utils'
import {
  CliCommandEnum,
  getReleasePkgJSON,
  printPreCheckRelease,
  releaseMonorepoPackage,
  releaseRoot,
} from '../shared'

interface ReleaseOptions extends Pick<VersionBumpOptions, 'preid' | 'tag' | 'commit' | 'push' | 'all' | 'execute'> {
  package?: string
}

interface VipReleaseExtraOptions {
  branch?: string
  checkRelease?: boolean
  filter?: string[]
  vip?: boolean
}

const defaultRepoName = 'main'

/**
 * 版本发布
 */
async function execNormalRelease(args: ReleaseOptions): Promise<void> {
  // 指定包
  if (args.package != null) {
    const packageJSONList = await VipMonorepo.getPackageJSONPathList()
    // const packageJSONList: string[] = []
    if (!packageJSONList.includes(`${args.package}/package.json`)) {
      // 抛错，提醒用户包在monorepo下找不到
      VipConsole.log('release包在monorepo下找不到，请检查！！')
    }
  }
  else {
    // 对话框，用户自行选择
    VipConsole.log('报错，暂未支持！！')
  }

  // 指定文件更新版本
  await versionBump({
    files: [],
    ...args.preid ? { preid: args.preid } : { perid: 'alpha' },
    // 是否需要标记
    ...args.tag ? { tag: args.tag } : {},
    // 需要提交信息
    ...args.commit ? { commit: args.commit } : {},
    // 推送到远程
    ...args.push ? { push: args.push } : {},
    // 执行远程
    ...args.execute ? { execute: args.execute } : {},
  })
}

/**
 * 执行142vip开源仓库迭代
 */
async function execVipRelease(args: VipReleaseExtraOptions): Promise<void> {
  // 获取pkg信息
  const pkgJSON = getReleasePkgJSON(args.filter)
  const packageNames = pkgJSON.map(pkg => pkg.name)

  // 预先检查子模块
  if (args.checkRelease) {
    await printPreCheckRelease(packageNames)
    return VipNodeJS.exitProcess(0)
  }

  try {
    const packageName = await VipInquirer.promptSelect(`选择需要使用${VipColor.red('Release')}命令发布的模块名称：`, [
      defaultRepoName,
      ...packageNames,
    ])

    // 确认框
    const isRelease = await VipInquirer.promptConfirm(`将对模块${VipColor.green(packageName)}进行版本迭代，是否继续操作？`)

    if (!isRelease) {
      VipConsole.log(VipColor.yellow('用户取消发布操作！！'))
      return VipNodeJS.exitProcess(0)
    }

    // 发布子模块
    if (packageName !== defaultRepoName) {
      await releaseMonorepoPackage(pkgJSON.find(pkg => pkg.name === packageName)!)
      return VipNodeJS.exitProcess(0)
    }

    // 发布根模块
    await releaseRoot()
  }
  catch {
    // 避免错误过分暴露
  }
}

/**
 * 功能迭代主功能
 */
export async function releaseMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.RELEASE)
    .alias('re')
    .summary('发布NPM包')
    .description('发布NPM包，更新版本信息')
    .option('--push', '推送到Git远程', true)
    .option('--preid <preid>', 'ID for prerelease')
    .option('--commit <msg>', '提交信息', false)
    .option('--tag <tag>', '标签名', false)
    .option('--skip-confirm', `跳过确认框二次确认`, false)
    .option('-r, --recursive', `递归更新所有package.json中的version字段信息`, false)
    .option('--execute <command>', '版本更新后需要执行的命令')
    .option('--package <package>', '指定需要发布的包')
    .option('--branch <branch>', '指定分支进行发布', 'next')
    .option('--check-release', '发布仓库主版本时，校验Monorepo中子模块版本', false)
    .option('--vip', '@142vip组织专用功能', false)
    .option('-F, --filter <filter>', '模块的路径，例如："./package/*"', (value: string, previous: string[]) => {
      if (!value)
        return [value]
      return previous.concat(value)
    }, [])
    .action(async (args: ReleaseOptions & VipReleaseExtraOptions) => {
      // 发布时校验分支，避免误操作
      if (VipGit.getCurrentBranch() !== args.branch) {
        VipConsole.log(VipColor.red(`当前分支是：${VipGit.getCurrentBranch()} ，版本迭代允许在${args.branch}分支操作，并推送到远程！！！`))
        return VipNodeJS.exitProcess(0)
      }

      // @142vip 组织专用Release
      if (args.vip) {
        await execVipRelease({
          checkRelease: args.checkRelease,
          filter: args.filter,
        })
      }
      // 普通release
      else {
        await execNormalRelease(args)
      }
    })
}
