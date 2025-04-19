import type { VipCommander } from '@142vip/utils'
import {
  commitLiner,
  GIT_COMMIT_DEFAULT_SCOPES,
  GIT_COMMIT_DEFAULT_TYPES,
} from '@142vip/commit-linter'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipGit,
  VipInquirer,
  vipLogger,
  VipMonorepo,
  VipNodeJS,
} from '@142vip/utils'
import { CommandEnum, initFairyCliCommand } from '../enums'

const GIT_NULL_SCOPE = '没有范围，那就选这个！！！'

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
  initFairyCliCommand(program, CommandEnum.COMMIT)
    .option('--dry-run', '试运行，Git Commit 提交信息', false)
    .option('--vip', '@142vip组织专用功能', false)
    .option('--push', '是否要推送到远程', false)
    .action(async (vip, args: CommitOptions): Promise<void> => {
      if (vip) {
        await execVipCodeCommit(args)
      }
    })
}

/**
 * 执行代码提交，支持推送到远程
 * @param args
 */
async function execVipCodeCommit(args: CommitOptions): Promise<void> {
  const gitType = await VipInquirer.promptSelect('提交类型：', GIT_COMMIT_DEFAULT_TYPES)

  // monorepo 获取packages目录下所有的模块名
  const pkgNames = VipMonorepo.getPkgNames(['./apps/*', './packages/*'])
  const gitScope = await VipInquirer.promptSearch(
    '提交范围：',
    VipInquirer.handleSimpleSearchSource([VipColor.green(GIT_NULL_SCOPE), ...GIT_COMMIT_DEFAULT_SCOPES, ...pkgNames]),
  )

  const gitSubject = await VipInquirer.promptInputRequired('提交说明：')

  // 考虑没有scope的情况
  const commitMsg = gitScope.includes(GIT_NULL_SCOPE) ? `${gitType}: ${gitSubject}` : `${gitType}(${gitScope}): ${gitSubject}`

  const isYes = await VipInquirer.promptConfirm(`Git Commit信息：${VipColor.red(commitMsg)}，是否继续提交${VipColor.bold('所有变更')}？`, true)
  if (!isYes) {
    vipLogger.logByBlank(`${VipColor.redBright('用户取消提交，欢迎下次使用')}`)
    VipNodeJS.exitProcess(1)
  }

  // 校验
  const { type, scope, subject, commit } = commitLiner({
    scopes: pkgNames,
  }, commitMsg)

  // 提交符合规范，打印相关信息
  VipConsole.log(`type: ${type}, scope: ${scope}, subject: ${subject}`)
  VipConsole.log(`${VipColor.greenBright('Git Commit: ')} ${VipColor.green(commit)}`)

  // 提交代码
  await VipExecutor.commandStandardExecutor('git add .')

  // 提交信息
  VipGit.execCommit(['-m', `'${commitMsg}'`])

  // 判断是否推送远程
  if (args.push) {
    const remoteNames = VipGit.getRemoteNames()
    const remote = await VipInquirer.promptSelect('选择远程仓库：', remoteNames)
    // 推送
    VipGit.execPush(['-u', remote, 'HEAD'])
  }
}
