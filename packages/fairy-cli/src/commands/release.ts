import type { VersionBumpOptions } from '@142vip/release-version'
import type { VipCommander, VipCommanderOptions } from '@142vip/utils'
import {
  CLI_COMMAND_DETAIL,
  printPreCheckRelease,
  releasePackage,
} from '@142vip/fairy-cli'
import { versionBump } from '@142vip/release-version'
import {
  DEFAULT_RELEASE_ROOT_NAME,
  VipColor,
  VipConsole,
  VipGit,
  VipInquirer,
  VipInquirerDefaultArrayParser,
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

interface ReleaseMainOptions extends Omit<VipCommanderOptions, 'help'> {
  preid?: string
  commit?: string
  tag?: string
  push?: boolean
  skipConfirm?: boolean
  recursive?: boolean
  execute?: string
  package?: string
  branch?: string
  checkRelease?: boolean
  filter?: string[]
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
      VipConsole.log(VipColor.red('需要发布的包的package.json文件缺失！！'))
      VipNodeJS.existErrorProcess()
    }
  }
  else {
    // 对话框，用户自行选择
    VipConsole.log(VipColor.red('报错，暂未支持！！'))
    VipNodeJS.existErrorProcess()
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
async function execVipRelease(pnpmFilter?: string | string[]): Promise<void> {
  // 获取pkg信息
  const packageNames = VipMonorepo.getPkgNames(pnpmFilter)

  try {
    const packageName = await VipInquirer.promptSearch(
      `选择需要使用 ${VipColor.red(CommandEnum.RELEASE)} 命令发布的模块名称：`,
      VipInquirer.handleSimpleSearchSource([DEFAULT_RELEASE_ROOT_NAME, ...packageNames]),
    )

    await VipInquirer.promptConfirmWithSuccessExit(`模块 ${VipColor.green(packageName)} 将发布新的版本，是否继续操作？`, {
      exitMsg: `${VipColor.red(`【${name}】`)} ${VipColor.yellow('用户取消发布操作！！')}`,
      defaultValue: false,
    })

    const pkg = packageName !== DEFAULT_RELEASE_ROOT_NAME
      ? VipMonorepo.getPkgJSONPath(packageName, pnpmFilter)
      : undefined

    // 发布
    await releasePackage(pkg)
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
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.RELEASE], {
      vip: true,
    })
    .option('--preid <preid>', '用于预发布的版本增量标记')
    .option('--tag <tag>', '标签名', false)
    .option('--commit <msg>', '提交信息', false)
    .option('--push', '推送到Git远程', true)
    .option('--skip-confirm', `跳过确认框二次确认`, false)
    .option('-r,--recursive', `递归更新所有package.json中的version字段信息`, false)
    .option('--execute <command>', '版本更新后需要执行的命令')
    .option('--package <package>', '指定需要发布的包')
    .option('--branch <branch>', '指定分支进行发布', 'next')
    .option('--check-release', '发布仓库主版本时，校验Monorepo中子模块版本', false)
    .option('-F,--filter <filter>', '模块的路径，例如："./package/*"', VipInquirerDefaultArrayParser, [])
    .action(async (args: ReleaseMainOptions): Promise<void> => {
      console.log('release:', args)
      // 发布时校验分支，避免误操作
      VipGit.validateBranch()

      // 发布
      await execRelease(args)
    })
}

/**
 * 发布动作
 */
async function execRelease(args: ReleaseMainOptions): Promise<void> {
  // 检查包是否需要发布，弹出对话框，是否查看某个包信息
  if (args.checkRelease) {
    await printPkgCommitLogs(args.filter)
  }

  // @142vip 组织专用Release
  if (args.vip) {
    await execVipRelease(args.filter)
  }
  // 普通release todo 这里需要修复
  else {
    await execNormalRelease(args)
  }
}

/**
 * 打印某个包的Git Commit信息
 */
async function printPkgCommitLogs(pnpmFilter?: string | string[]): Promise<void> {
  const isCheck = await VipInquirer.promptConfirm(`是否需要选择查看当前仓库特定模块的提交信息？`, false)
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
  VipNodeJS.existSuccessProcess()
}
