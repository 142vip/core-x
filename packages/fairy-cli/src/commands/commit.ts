import type { VipPackageCliCommander } from '@142vip/utils'
import type { FairyCommandOptions } from '../fairy.interface'
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
import { CommandEnum } from '../fairy.interface'
import { registerFairySubcommand, runOrDryRun } from '../utils'

const GIT_NULL_SCOPE = '没有范围，那就选这个！！！'

/**
 * commit子命令配置
 */
interface CommitOptions extends FairyCommandOptions {
  push?: boolean
}

/**
 * 提交信息Git Commit 提交信息、校验
 * - 基于@142vip/commit-linter
 */
export async function commitMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.COMMIT, async (vip, args: CommitOptions) => {
    if (vip) {
      await execVipCodeCommit(args)
    }
  }, (command) => {
    command.option('--push', '是否要推送到远程', false)
  })
}

/**
 * 执行代码提交，支持推送到远程
 */
async function execVipCodeCommit(args: CommitOptions): Promise<void> {
  const gitType = await VipInquirer.promptSelect('提交类型：', GIT_COMMIT_DEFAULT_TYPES)

  const pkgNames = VipMonorepo.getPkgNames(['./apps/*', './packages/*'])
  const gitScope = await VipInquirer.promptSearch(
    '提交范围：',
    VipInquirer.handleSimpleSearchSource([VipColor.green(GIT_NULL_SCOPE), ...GIT_COMMIT_DEFAULT_SCOPES, ...pkgNames]),
  )

  const gitSubject = await VipInquirer.promptInputRequired('提交说明：')

  const commitMsg = gitScope.includes(GIT_NULL_SCOPE) ? `${gitType}: ${gitSubject}` : `${gitType}(${gitScope}): ${gitSubject}`

  const isYes = await VipInquirer.promptConfirm(`Git Commit信息：${VipColor.red(commitMsg)}，是否继续提交${VipColor.bold('所有变更')}？`, true)
  if (!isYes) {
    vipLogger.logByBlank(`${VipColor.redBright('用户取消提交，欢迎下次使用')}`)
    VipNodeJS.existErrorProcess()
  }

  const { type, scope, subject, commit } = commitLiner({
    scopes: pkgNames,
  }, commitMsg)

  VipConsole.log(`type: ${type}, scope: ${scope}, subject: ${subject}`)
  VipConsole.log(`${VipColor.greenBright('Git Commit: ')} ${VipColor.green(commit)}`)

  const steps = [
    'git add .',
    `git commit -m '${commitMsg}'`,
    ...(args.push ? ['git push -u <remote> HEAD'] : []),
  ]

  await runOrDryRun(args.dryRun, 'commit', steps, async () => {
    await VipExecutor.commandStandardExecutor('git add .')
    VipGit.execCommit(['-m', `'${commitMsg}'`])

    if (args.push) {
      const remoteNames = VipGit.getRemoteNames()
      const remote = await VipInquirer.promptSelect('选择远程仓库：', remoteNames)
      VipGit.execPush(['-u', remote, 'HEAD'])
    }
  })
}
