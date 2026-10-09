import {
  VipColor,
  VipConsole,
  VipGit,
  vipLogger,
  VipNodeJS,
} from '@142vip/utils'
import { name } from '../package.json'
import {
  CommitLinterOptions,
  GIT_COMMIT_DEFAULT_SCOPES,
  GIT_COMMIT_DEFAULT_TYPES,
  GitCommitLinter,
  gitCommitTypes,
} from './commit.interface'

const errorLabel = `${VipColor.white(VipColor.green(`【${name}】`))}`

const commitGuideRule = VipColor.dim('─'.repeat(56))

/** 打印标准 Git Commit 模板（type / scope / subject 说明） */
export function printStandardCommitMessage(message?: string): void {
  vipLogger.println()
  VipConsole.log(commitGuideRule)
  VipConsole.log(`  ${VipColor.bold(name)} ${VipColor.dim('Conventional Commits')}`)
  VipConsole.log(commitGuideRule)
  VipConsole.log(
    `  ${VipColor.dim('格式')}  ${VipColor.cyan('type')}(${VipColor.dim('scope')}): ${VipColor.cyan('subject')}`,
  )
  VipConsole.log(
    `  ${VipColor.dim('示例')}  ${VipColor.green('docs(README): update install section')}`,
  )

  if (message != null && message !== '') {
    vipLogger.println()
    VipConsole.log(`  ${VipColor.dim('当前')}  ${VipColor.red(message)}`)
  }

  vipLogger.println()
  VipConsole.log(`  ${VipColor.yellow('type')} ${VipColor.dim('（必选）')}`)
  for (const type of GIT_COMMIT_DEFAULT_TYPES) {
    const { emoji, description } = gitCommitTypes[type]
    VipConsole.log(
      `    ${emoji}  ${VipColor.greenBright(type.padEnd(10))} ${VipColor.dim(description)}`,
    )
  }

  vipLogger.println()
  VipConsole.log(`  ${VipColor.yellow('scope')} ${VipColor.dim('（可选）')}`)
  VipConsole.log(
    `    ${VipColor.dim('变更影响范围：模块名、包名或文档标识；Monorepo 可用 `fa commit -s` 扫描包名白名单。')}`,
  )

  vipLogger.println()
  VipConsole.log(`  ${VipColor.yellow('subject')} ${VipColor.dim('（必选，5–100 字符）')}`)
  VipConsole.log(
    `    ${VipColor.dim('简短说明本次变更；句首小写，末尾不加句号。')}`,
  )
  VipConsole.log(commitGuideRule)
  vipLogger.println()
}

function resolveCommitFirstLine(options?: CommitLinterOptions): string {
  if (options?.commit != null && options.commit !== '') {
    return options.commit
  }
  return VipGit.getCommitFirstLineMsg()
}

function failValidation(commit: string, message: string): never {
  vipLogger.println()
  VipConsole.error(`${errorLabel} ${VipColor.red(message)}`)
  vipLogger.println()
  printStandardCommitMessage(commit)
  VipNodeJS.exitProcess(1)
  throw new Error('unreachable')
}

function assertCommitRules(
  options: CommitLinterOptions,
  gitCommit: GitCommitLinter,
): void {
  const supportTypes = (options.types ?? []).concat(GIT_COMMIT_DEFAULT_TYPES)
  const supportScopes = (options.scopes ?? []).concat(GIT_COMMIT_DEFAULT_SCOPES)
  const { type, scope, subject, commit } = gitCommit

  if (!supportTypes.includes(type)) {
    failValidation(
      commit,
      `invalid commit type , Examples: ${supportTypes.join('|')}`,
    )
  }

  if (scope != null && !supportScopes.includes(scope)) {
    failValidation(
      commit,
      `invalid commit scope name , Examples: \n${supportScopes.map(v => ` - ${v}`).join('\n')}`,
    )
  }

  if (subject == null || subject.length > 100 || subject.length < 5) {
    failValidation(
      commit,
      'invalid commit message length , min length is 5 , max length is 100',
    )
  }

  if (options.verify == null) {
    return
  }

  try {
    const passed = options.verify(gitCommit)
    if (passed === false) {
      VipNodeJS.exitProcess(1)
    }
  }
  catch (error) {
    VipConsole.error(`${errorLabel} ${VipColor.red(String(error))}`)
    VipNodeJS.exitProcess(1)
  }
}

/**
 * 校验 Git Commit 信息（Conventional Commits）。
 *
 * - 省略 `options`：仅解析首行格式；
 * - 传入 `options` 且配置了 `types` / `scopes` / `verify` 之一：启用对应白名单校验；
 * - 仅传入 `commit` 等、未配置上述白名单字段：仍只做格式解析（单包仓 `fa commit --quiet` 等场景）。
 */
export function commitLinter(options?: CommitLinterOptions): GitCommitLinter {
  const commit = resolveCommitFirstLine(options)
  const parsedMsg = VipGit.parseCommitMsg(commit)

  if (parsedMsg == null) {
    VipConsole.error(`${errorLabel} Git Commit 信息不规范，请参考：`)
    vipLogger.println()
    printStandardCommitMessage()
    VipNodeJS.exitProcess(1)
    throw new Error('unreachable')
  }

  const gitCommit: GitCommitLinter = {
    type: parsedMsg.type,
    scope: parsedMsg.scope,
    subject: parsedMsg.subject,
    commit,
  }

  // 未配置 type / scope / verify 白名单时，只做格式解析（与旧版 `commitLiner()` 一致）
  if (
    options != null
    && (options.types != null || options.scopes != null || options.verify != null)
  ) {
    assertCommitRules(options, gitCommit)
  }

  return gitCommit
}
