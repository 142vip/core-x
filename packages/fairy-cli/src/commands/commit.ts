import type { CommitLinterOptions } from '@142vip/commit-linter'
import type { VipCliDryRunParam, VipCommander, VipPackageCliCommander } from '@142vip/utils'
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
import { loadFairyConfig, resolveFairyCommandDefaults } from '../config'
import { CommandEnum, FairyCommandOptions } from '../constant'
import {
  buildCommitLinterOptions,
  formatCommitRuntimeParams,
  loadCommitLinterConfigForCli,
  logDryRunSteps,
  logFairyCliTrace,
  logFairyEquivalentCommand,
  printCommitVerifyResult,
  registerFairySubcommand,
  resolveCommitLinterConfigSource,
  runCommitMessageVerify,
  runOrDryRun,
} from '../utils'

const GIT_NULL_SCOPE = '没有范围，那就选这个！！！'

const COMMIT_EQUIVALENT_FLAGS = [
  { key: 'config', flag: '-f', kind: 'value' },
  { key: 'quiet', flag: '-q', kind: 'boolean', defaultValue: false, offFlag: '--no-quiet' },
  { key: 'push', flag: '-p', kind: 'boolean', defaultValue: false, offFlag: '--no-push' },
  { key: 'message', flag: '-m', kind: 'value' },
  { key: 'scope', flag: '-s', kind: 'repeat' },
  { key: 'dryRun', flag: '--dry-run', kind: 'boolean', defaultValue: false, offFlag: '--no-dry-run' },
  { key: 'vip', flag: '--vip', kind: 'boolean', defaultValue: false, offFlag: '--no-vip' },
] as const

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
 * `-f` 指定 `commit-linter.config.*` 路径（优先于 `fairy.config` → `commit` 与自动发现）。
 * 未在命令行写出的 `-q` / `-p` / `-m` / `-s` / `-f` 使用 `fairy.config` → `commit`。
 */
export async function commitMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.COMMIT, async (raw: CommitOptions, command: VipCommander) => {
    const { args, fromConfig } = resolveFairyCommandDefaults(command, raw, loadFairyConfig().commit, [
      'config',
      'quiet',
      'push',
      'message',
      'scope',
      'dryRun',
      'vip',
    ])
    logFairyEquivalentCommand('commit', args, fromConfig, COMMIT_EQUIVALENT_FLAGS)
    const fileConfig = loadCommitLinterConfigForCli(args.config)
    const linterOptions = buildCommitLinterOptions(fileConfig, {
      scopeGlobs: args.scope,
    })
    const runtimeParams = formatCommitRuntimeParams({
      source: resolveCommitLinterConfigSource(args.config),
      fileConfig,
      linterOptions,
      cliScopeGlobs: args.scope,
      quiet: args.quiet,
      push: args.push,
      message: args.message,
    })
    // 根程序上的 `--trace` 不会写进子命令 `args.trace`，以全局开关为准
    logFairyCliTrace('commit: 配置', Object.fromEntries(
      runtimeParams.map(param => [param.label, param.value]),
    ))
    if (args.quiet) {
      // dry-run 只展示参数，不读 COMMIT_EDITMSG、不因校验失败挡住调试
      if (args.dryRun) {
        logDryRunSteps('commit', ['校验 commit 首行（--quiet，不写 git）'], runtimeParams)
        return
      }
      const verifiedCommit = runCommitMessageVerify({
        linterOptions,
        message: args.message,
      })
      printCommitVerifyResult(verifiedCommit)
      return
    }

    await execInteractiveCommit(args, linterOptions, runtimeParams)
  }, (command) => {
    command
      .option('-f,--config <path>', 'commit-linter 配置文件路径（默认 `commit-linter.config.*` 或内置配置）')
      .option('-q,--quiet', '仅校验 commit 信息（commit-msg 钩子）', false)
      .option('-p,--push', '交互提交后推送到远程', false)
      .option('-m,--message <msg>', '待校验 commit 首行；默认读取 .git/COMMIT_EDITMSG')
      .option('-s,--scope <glob>', 'Monorepo 包路径 glob，扫描 npm 包名作为 scope 白名单（可多次）', VipInquirerDefaultArrayParser, [])
      .option('--no-quiet', '关闭仅校验，改回交互提交')
      .option('--no-push', '提交后不推送远程')
  })
}

async function execInteractiveCommit(
  args: CommitOptions,
  linterOptions: CommitLinterOptions,
  runtimeParams: readonly VipCliDryRunParam[],
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
  }, runtimeParams)
}
