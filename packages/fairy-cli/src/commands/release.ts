import type { ReleaseVersionOptions } from '@142vip/release-version'
import type { VipCommander, VipCommanderOptions, VipPackageCliCommander } from '@142vip/utils'
import { releaseApi } from '@142vip/release-version'
import {
  GitGeneralBranch,
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
import { loadFairyConfig, resolveFairyCommandDefaults } from '../config'
import { CommandEnum } from '../constant'
import {
  logFairyEquivalentCommand,
  printPreCheckRelease,
  registerFairySubcommand,
  releasePackage,
  ReleasePackageOptions,
} from '../utils'

interface ReleaseOptions extends Pick<ReleaseVersionOptions, 'preid' | 'tag' | 'commit' | 'push' | 'all' | 'execute'> {
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
  checkBranch: string[]
  /** GitHub Release 标记为 Pre-release（默认 Latest） */
  prerelease?: boolean
}

/**
 * 非 vip 模式的普通 release（待完善：仅支持 `--package` 指定路径）
 */
async function execNormalRelease(args: ReleaseOptions): Promise<void> {
  if (args.package == null) {
    VipConsole.log(VipColor.red('报错，暂未支持！！'))
    VipNodeJS.existErrorProcess()
  }

  const packageJSONList = VipMonorepo.getPackageJSONPathList()
  if (!packageJSONList.includes(`${args.package}/package.json`)) {
    VipConsole.log(VipColor.red('需要发布的包的package.json文件缺失！！'))
    VipNodeJS.existErrorProcess()
  }

  await releaseApi.releaseVersion({
    ...(args.preid != null ? { preid: args.preid } : { preid: 'alpha' }),
    ...(args.tag != null ? { tag: args.tag } : {}),
    ...(args.commit != null ? { commit: args.commit } : {}),
    ...(args.push != null ? { push: args.push } : {}),
    ...(args.execute != null ? { execute: args.execute } : {}),
  })
}

/** `fa release --vip`：交互选择根仓库或子包后发版 */
async function execVipRelease(
  pnpmFilter?: string | string[],
  releaseOptions?: ReleasePackageOptions,
): Promise<void> {
  const packageNames = VipMonorepo.getPkgNames(pnpmFilter)

  try {
    const packageName = await VipInquirer.promptSearch(
      `选择需要使用 ${VipColor.red(CommandEnum.RELEASE)} 命令发布的模块名称：`,
      VipInquirer.handleSimpleSearchSource([GitGeneralBranch.MAIN, ...packageNames]),
    )

    if (!releaseOptions?.dryRun) {
      await VipInquirer.promptConfirmWithSuccessExit(`模块 ${VipColor.green(packageName)} 将发布新的版本，是否继续操作？`, {
        exitMsg: `${VipColor.red(`【${name}】`)} ${VipColor.yellow('用户取消发布操作！！')}`,
        defaultValue: false,
      })
    }

    const pkg = packageName !== GitGeneralBranch.MAIN
      ? VipMonorepo.getPkgJSONPath(packageName, pnpmFilter)
      : undefined

    await releasePackage(pkg, releaseOptions)
  }
  catch {
    // 避免交互取消时错误堆栈外泄
  }
}

const RELEASE_EQUIVALENT_FLAGS = [
  { key: 'preid', flag: '--preid', kind: 'value' },
  { key: 'tag', flag: '--tag', kind: 'value' },
  { key: 'commit', flag: '--commit', kind: 'value' },
  { key: 'push', flag: '--push', kind: 'boolean', defaultValue: true, offFlag: '--no-push' },
  { key: 'skipConfirm', flag: '--skip-confirm', kind: 'boolean', defaultValue: false, offFlag: '--no-skip-confirm' },
  { key: 'recursive', flag: '-r', kind: 'boolean', defaultValue: false, offFlag: '--no-recursive' },
  { key: 'execute', flag: '--execute', kind: 'value' },
  { key: 'package', flag: '--package', kind: 'value' },
  { key: 'branch', flag: '--branch', kind: 'value', defaultValue: 'next' },
  { key: 'checkRelease', flag: '--check-release', kind: 'boolean', defaultValue: false, offFlag: '--no-check-release' },
  { key: 'checkBranch', flag: '--check-branch', kind: 'repeat' },
  { key: 'filter', flag: '-F', kind: 'repeat' },
  { key: 'prerelease', flag: '--prerelease', kind: 'boolean', defaultValue: false, offFlag: '--no-prerelease' },
  { key: 'vip', flag: '--vip', kind: 'boolean', defaultValue: false, offFlag: '--no-vip' },
  { key: 'dryRun', flag: '--dry-run', kind: 'boolean', defaultValue: false, offFlag: '--no-dry-run' },
] as const

const RELEASE_CONFIG_KEYS = [
  'preid',
  'tag',
  'commit',
  'push',
  'skipConfirm',
  'recursive',
  'execute',
  'package',
  'branch',
  'checkRelease',
  'checkBranch',
  'filter',
  'prerelease',
  'vip',
  'dryRun',
] as const

/** 注册 `fa release` 子命令。未在命令行写出的参数使用 `fairy.config` → `release` */
export async function releaseMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.RELEASE, async (raw: ReleaseMainOptions, command: VipCommander) => {
    const { args, fromConfig } = resolveFairyCommandDefaults(command, raw, loadFairyConfig().release, RELEASE_CONFIG_KEYS)
    logFairyEquivalentCommand('release', args, fromConfig, RELEASE_EQUIVALENT_FLAGS)
    if (args.checkBranch.length > 0) {
      VipGit.validateBranch(args.checkBranch)
    }

    await execRelease(args)
  }, (command) => {
    command
      .option('--preid <preid>', '用于预发布的版本增量标记')
      .option('--tag <tag>', '标签名', false)
      .option('--commit <msg>', '提交信息', false)
      .option('--push', '推送到Git远程', true)
      .option('--skip-confirm', '跳过确认框二次确认', false)
      .option('-r,--recursive', '递归更新所有package.json中的version字段信息', false)
      .option('--execute <command>', '版本更新后需要执行的命令')
      .option('--package <package>', '指定需要发布的包')
      .option('--branch <branch>', '指定分支进行发布', 'next')
      .option('--check-release', '发布仓库主版本时，校验Monorepo中子模块版本', false)
      .option('--check-branch [checkBranch]', '发布版本时，是否校验分支', VipInquirerDefaultArrayParser, [])
      .option('-F,--filter <filter>', '模块的路径，例如："./package/*"', VipInquirerDefaultArrayParser, [])
      .option('--prerelease', 'GitHub Release 标记为 Pre-release（默认 Latest）', false)
      .option('--no-push', '不推送到远程')
      .option('--no-skip-confirm', '保留确认框')
      .option('--no-recursive', '不递归更新 version')
      .option('--no-check-release', '不校验子模块版本')
      .option('--no-prerelease', 'GitHub Release 标记为 Latest')
  })
}

async function execRelease(args: ReleaseMainOptions): Promise<void> {
  if (args.checkRelease) {
    await printPkgCommitLogs(args.filter)
    VipNodeJS.existSuccessProcess()
  }

  if (args.vip) {
    const releaseOptions: ReleasePackageOptions = {
      ...(args.dryRun ? { dryRun: true } : {}),
      ...(args.prerelease ? { changelogPrerelease: true } : {}),
    }
    await execVipRelease(args.filter, releaseOptions)
    return
  }

  await execNormalRelease(args)
}

async function printPkgCommitLogs(pnpmFilter?: string | string[]): Promise<void> {
  const isCheck = await VipInquirer.promptConfirm('是否需要选择查看当前仓库特定模块的提交信息？', false)

  if (isCheck) {
    const pkgName = await VipInquirer.promptSearch(
      '请选择需要查看的模块：',
      VipInquirer.handleSimpleSearchSource(VipMonorepo.getPkgNames(pnpmFilter)),
    )
    if (pkgName == null) {
      return
    }

    const commits = VipGit.getRecentCommitsByScope(pkgName)
    if (commits.length === 0) {
      vipLogger.logByBlank(`${VipPackageJSON.getPkgRedLabel(pkgName)} ${VipColor.red('模块没有任何版本迭代信息！！')}`)
      return
    }

    vipLogger.logByBlank(
      `${VipPackageJSON.getPkgRedLabel(pkgName)} ${VipColor.green(`模块的版本迭代信息（待发布版本：绿色，${VipColor.gray('已发布版本：灰色')}）：`)}`,
    )
    printSplitPkgCommitLogs(pkgName, commits)
    return
  }

  await printPreCheckRelease(VipMonorepo.getPkgNames(pnpmFilter))
}

/** 按 `release(scope)` 提交分段打印模块 commit 列表 */
export function printSplitPkgCommitLogs(pkgName: string, commits: string[]): void {
  const splitPkgCommits = commits.reduce<string[][]>((acc, item) => {
    if (item.startsWith('release')) {
      acc.push([item])
    }
    else {
      if (acc.length === 0) {
        acc.push([])
      }
      acc[acc.length - 1].push(item)
    }
    return acc
  }, [])

  let commitMsgStr = ''
  for (const [index, commitsByVersion] of splitPkgCommits.entries()) {
    const msg = (index === 0 && !commitsByVersion.toString().includes(`release(${pkgName})`))
      ? VipColor.green(commitsByVersion.map(c => ` - ${c}`).join('\n'))
      : VipColor.gray(commitsByVersion.map(c => ` - ${c}`).join('\n'))

    commitMsgStr += `${msg}\n`
  }

  vipLogger.logByBlank(commitMsgStr)
}
