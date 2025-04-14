import type { VipCommander } from '@142vip/utils'
import { commitLiner, GIT_COMMIT_DEFAULT_SCOPES, GIT_COMMIT_DEFAULT_TYPES } from '@142vip/commit-linter'
import {
  VipColor,
  VipConsole,
  VipGit,
  VipInquirer,
  VipInquirerSeparator,
  vipLogger,
  VipMonorepo,
  VipNodeJS,
} from '@142vip/utils'
import { CliCommandEnum } from '../shared'

interface CommitOptions {
  /**
   * 试运行
   */
  dryRun?: boolean
  /**
   * 142vip组织专用功能
   */
  vip?: boolean

  /**
   * commit时，是否要推送到远程
   */
  push?: boolean
}

/**
 * 提交信息Git Commit 提交信息、校验
 * - 基于@142vip/commit-linter
 */
export async function commitMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.COMMIT)
    .aliases(['co', 'com'])
    .summary('Git Commit 提交信息')
    .description('快速进行Git Commit 提交信息，并检验提交信息是否符合规范')
    .option('--dry-run', '试运行，Git Commit 提交信息', false)
    .option('--vip', '@142vip组织专用功能', false)
    .option('--push', '是否要推送到远程', true)
    .action(async (vip, args: CommitOptions): Promise<void> => {
      if (vip) {
        await execVipCodeCommit(args)
      }
    })
}

async function execVipCodeCommit(args: CommitOptions): Promise<void> {
  const gitType = await VipInquirer.promptSelect('提交类型：', GIT_COMMIT_DEFAULT_TYPES)

  // monorepo 获取packages目录下所有的模块名
  const pkgNames = VipMonorepo.getPkgNames(['./apps/*', './packages/*'])
  const gitScope = await VipInquirer.promptSearch('提交范围：', (scope: string | undefined) => {
    const filterScopes = scope != null
      ? pkgNames.filter(pkg => pkg.includes(scope))
      : []
    return [
      VipColor.greenBright('可选时用这个'),
      new VipInquirerSeparator(),
      ...scope == null ? pkgNames : filterScopes,
      new VipInquirerSeparator(),
      ...GIT_COMMIT_DEFAULT_SCOPES,
    ]
  }, 40)

  const gitSubject = await VipInquirer.promptInputRequired('提交说明：')

  const commitMsg = `${gitType}(${gitScope}): ${gitSubject}`

  // 判断是否推送
  if (args.push) {
    const remoteNames = VipGit.getRemoteNames()
    const remote = await VipInquirer.promptSelect('选择远程仓库：', remoteNames)
    console.log(111, remote)

    // 推送
    // VipGit.execPush(['-u', remote, 'HEAD'])
  }

  const isYes = await VipInquirer.promptConfirm(`Git Commit信息：${VipColor.red(commitMsg)}，是否继续提交所有变更？`)
  if (!isYes) {
    vipLogger.println()
    VipConsole.log(`${VipColor.redBright('取消提交，欢迎下次使用')}`)
    vipLogger.println()
    VipNodeJS.exitProcess(1)
  }

  // 校验
  const { type, scope, subject, commit } = commitLiner({
    scopes: pkgNames,
  }, commitMsg)

  // 提交符合规范，打印相关信息
  VipConsole.log(`type: ${type}, scope: ${scope}, subject: ${subject}`)
  VipConsole.log(`${VipColor.greenBright('Git Commit: ')} ${VipColor.green(commit)}`)

  // 提交
  // VipGit.execCommit(['-m', `'${commitMsg}'`])

  // 判断是否推送
  if (args.push) {
    const remoteNames = VipGit.getRemoteNames()
    const remote = await VipInquirer.promptSelect('选择远程仓库：', remoteNames)
    console.log(111, remote)

    // 推送
    // VipGit.execPush(['-u', remote, 'HEAD'])
  }
}
