import type { CommitLinterOptions } from '@142vip/commit-linter'
import type { VipPackageCliCommander } from '@142vip/utils'
import {
  commitLinter,
  GIT_COMMIT_DEFAULT_SCOPES,
  GIT_COMMIT_DEFAULT_TYPES,
} from '@142vip/commit-linter'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipGit,
  VipInquirer,
  VipInquirerDefaultArrayParser,
  vipLogger,
  VipNodeJS,
} from '@142vip/utils'
import { CommandEnum, FairyCommandOptions } from '../fairy.interface'
import { registerFairySubcommand, runOrDryRun, traceFaCli } from '../utils'
import {
  buildCommitLinterOptions,
  loadCommitLinterConfigForCli,
  printCommitVerifyResult,
  resolveCommitLinterConfigPath,
  runCommitMessageVerify,
} from '../utils/commit.util'

const GIT_NULL_SCOPE = '没有范围，那就选这个！！！'

interface CommitOptions extends FairyCommandOptions {
  quiet?: boolean
  push?: boolean
  scope: string[]
  message?: string
  config?: string
}

/**
 * `fa commit`：默认交互式规范提交；
 * `--quiet` 仅校验（commit-msg / `check:commit`）；
 * `-s` 指定 Monorepo glob 扫描包名 scope（可多次）；
 * `-f` 指定 `commit-linter.config.*` 路径（默认自动发现或内置默认）。
 */
export async function commitMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.COMMIT, async (args: CommitOptions) => {
    const fileConfig = loadCommitLinterConfigForCli(args.config)
    const linterOptions = buildCommitLinterOptions(fileConfig, {
      scopeGlobs: args.scope,
    })
    const effectiveGlobs = args.scope.length > 0 ? args.scope : (fileConfig.scopeGlobs ?? [])
    const monorepoScan = effectiveGlobs.length > 0

    traceFaCli('commit: 解析', {
      mode: args.quiet ? 'quiet' : 'interactive',
      configFile: resolveCommitLinterConfigPath(args.config),
      scopeGlobs: effectiveGlobs,
      monorepoScan,
      scopesCount: linterOptions.scopes?.length ?? 0,
      dryRun: args.dryRun === true,
      push: args.push === true,
    })

    if (args.quiet) {
      const verifiedCommit = runCommitMessageVerify({
        linterOptions,
        message: args.message,
      })
      printCommitVerifyResult(verifiedCommit)
      return
    }

    await execInteractiveCommit(args, linterOptions)
  }, (command) => {
    command
      .option('-f, --config <path>', 'commit-linter 配置文件路径（默认 `commit-linter.config.*` 或内置配置）')
      .option('-q, --quiet', '仅校验 commit 信息（commit-msg 钩子）', false)
      .option('-p, --push', '交互提交后推送到远程', false)
      .option('-m, --message <msg>', '待校验 commit 首行；默认读取 .git/COMMIT_EDITMSG')
      .option('-s, --scope <glob>', 'Monorepo 包路径 glob，扫描 npm 包名作为 scope 白名单（可多次）', VipInquirerDefaultArrayParser, [])
  })
}

async function execInteractiveCommit(
  args: CommitOptions,
  linterOptions: CommitLinterOptions,
): Promise<void> {
  const scopeChoices = linterOptions?.scopes ?? []
  const gitType = await VipInquirer.promptSelect('提交类型：', GIT_COMMIT_DEFAULT_TYPES)

  const gitScope = await VipInquirer.promptSearch(
    '提交范围：',
    VipInquirer.handleSimpleSearchSource([
      VipColor.green(GIT_NULL_SCOPE),
      ...GIT_COMMIT_DEFAULT_SCOPES,
      ...scopeChoices,
    ]),
  )

  const gitSubject = await VipInquirer.promptInputRequired('提交说明：')

  const commitMsg = gitScope.includes(GIT_NULL_SCOPE)
    ? `${gitType}: ${gitSubject}`
    : `${gitType}(${gitScope}): ${gitSubject}`

  const isYes = await VipInquirer.promptConfirm(
    `Git Commit信息：${VipColor.red(commitMsg)}，是否继续提交${VipColor.bold('所有变更')}？`,
    true,
  )
  if (!isYes) {
    vipLogger.logByBlank(`${VipColor.redBright('用户取消提交，欢迎下次使用')}`)
    VipNodeJS.existErrorProcess()
  }

  const { type, scope, subject, commit } = commitLinter({
    types: linterOptions.types,
    scopes: linterOptions.scopes,
    verify: linterOptions.verify,
    commit: commitMsg,
  })

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
