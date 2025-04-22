import type { VersionBumpOptions } from '@142vip/release-version'
import type { VipCommander } from '@142vip/utils'
import {
  CLI_COMMAND_DETAIL,
  printPreCheckRelease,
  releaseMonorepoPkg,
  releaseRoot,
} from '@142vip/fairy-cli'
import { versionBump } from '@142vip/release-version'
import {
  DEFAULT_RELEASE_ROOT_NAME,
  VipColor,
  VipConsole,
  VipGit,
  VipInquirer,
  vipLogger,
  VipMonorepo,
  VipNodeJS,
  VipPackageJSON,
} from '@142vip/utils'
import { name } from '../../package.json'
import { CommandEnum } from '../enums'

interface ReleaseOptions extends Pick<VersionBumpOptions, 'preid' | 'tag' | 'commit' | 'push' | 'all' | 'execute'> {
  package?: string
}

interface VipReleaseExtraOptions {
  branch?: string
  checkRelease?: boolean
  filter?: string[]
  vip?: boolean
}

/**
 * 版本发布
 */
async function execNormalRelease(args: ReleaseOptions): Promise<void> {
  // 指定包
  if (args.package != null) {
    const packageJSONList = VipMonorepo.getPackageJSONPathList()
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
  const packageNames = VipMonorepo.getPkgNames(args.filter)

  try {
    const packageName = await VipInquirer.promptSearch(
      `选择需要使用${VipColor.red(CommandEnum.RELEASE)}命令发布的模块名称：`,
      VipInquirer.handleSimpleSearchSource([DEFAULT_RELEASE_ROOT_NAME, ...packageNames]),
    )

    const isRelease = await VipInquirer.promptConfirm(`模块 ${VipColor.green(packageName)} 将发布新的版本，是否继续操作？`)

    if (!isRelease) {
      vipLogger.logByBlank(`${VipColor.red(`【${name}】`)} ${VipColor.yellow('用户取消发布操作！！')}`)
      VipNodeJS.exitProcess(0)
    }

    // 发布子模块
    if (packageName !== DEFAULT_RELEASE_ROOT_NAME) {
      const pkgJSONPath = VipMonorepo.getPkgJSONPath(packageName, args.filter)!
      await releaseMonorepoPkg(pkgJSONPath)
    }
    // 发布根模块
    else {
      await releaseRoot()
    }
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
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.RELEASE])
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
    .option('-F, --filter <filter>', '模块的路径，例如："./package/*"', (value: string, previous: string[]) => {
      if (!value)
        return [value]
      return previous.concat(value)
    }, [])
    .action(async (args: ReleaseOptions & VipReleaseExtraOptions): Promise<void> => {
      // 发布时校验分支，避免误操作
      // if (VipGit.getCurrentBranch() !== args.branch) {
      //   VipConsole.log(VipColor.red(`当前分支是：${VipGit.getCurrentBranch()} ，版本迭代允许在${args.branch}分支操作，并推送到远程！！！`))
      //   VipNodeJS.exitProcess(0)
      // }

      // 检查包是否需要发布，弹出对话框，是否查看某个包信息
      if (args.checkRelease) {
        await printPkgCommitLogs(args.filter)
      }

      if (args.vip) {
        // @142vip 组织专用Release
        await execVipRelease({ filter: args.filter })
      }
      else {
        // 普通release
        await execNormalRelease(args)
      }
    })
}

/**
 * 打印某个包的Git Commit信息
 */
async function printPkgCommitLogs(pnpmFilter?: string | string[]): Promise<void> {
  const isCheck = await VipInquirer.promptConfirm(`是否查看当前仓库的模块信息？`, false)
  if (isCheck) {
    const pkgName = await VipInquirer.promptSearch(
      `请选择需要查看的模块：`,
      VipInquirer.handleSimpleSearchSource(VipMonorepo.getPkgNames(pnpmFilter)),
    )
    const commits = VipGit.getRecentCommitsByScope(pkgName)

    if (commits.length === 0) {
      vipLogger.logByBlank(`${VipPackageJSON.getPkgRedLabel(pkgName)} ${VipColor.red('模块没有任何版本迭代信息！！')}`)
    }
    else {
      VipConsole.log(`${VipPackageJSON.getPkgRedLabel(pkgName)} ${VipColor.green('模块的版本迭代信息：')}`)
      vipLogger.logByBlank(VipColor.green(commits.map(c => ` - ${c}`).join('\n')))
    }
  }

  // 预先检查子模块
  else {
    const packageNames = VipMonorepo.getPkgNames(pnpmFilter)
    await printPreCheckRelease(packageNames)
  }

  // 安全退出
  VipNodeJS.exitProcess(0)
}
