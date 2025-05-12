import type { GitCommitLinter, GitCommitLinterOptions } from './git-commit.interface'
import { VipColor, VipConsole, VipGit, vipLogger, VipNodeJS } from '@142vip/utils'
import { name } from '../../package.json'
import { printStandardCommitMessage } from './commit-template'
import { GIT_COMMIT_DEFAULT_SCOPES, GIT_COMMIT_DEFAULT_TYPES } from './git-commit-type'

const ErrorLabel = `${VipColor.white(VipColor.green(`【${name}】`))}`

/**
 * Git Commit信息校验
 * @param params 校验参数 可选，传则需要自定义校验
 * @param commit commit message 可选，不传则从git获取
 */
export function commitLiner(params?: GitCommitLinterOptions, commit?: string): GitCommitLinter {
  commit = commit ?? VipGit.getCommitFirstLineMsg()

  const parsedMsg = VipGit.parseCommitMsg(commit)

  // 错误信息描述
  if (parsedMsg == null) {
    VipConsole.error(`${ErrorLabel} Git Commit 信息不规范，请参考：`)
    vipLogger.println()
    printStandardCommitMessage()
    VipNodeJS.exitProcess(1)
  }
  const { type, scope, subject } = parsedMsg!

  // 默认校验
  if (params != null) {
    // 注意去重
    const supportTypes = (params?.types ?? []).concat(GIT_COMMIT_DEFAULT_TYPES)
    const supportScopes = (params?.scopes ?? []).concat(GIT_COMMIT_DEFAULT_SCOPES)

    // git commit type
    if (!supportTypes.includes(type)) {
      vipLogger.println()
      VipConsole.error(`${ErrorLabel} ${VipColor.red(
        `invalid commit type , Examples: ${supportTypes.join('|')}`,
      )}`)
      vipLogger.println()
      printStandardCommitMessage(commit)
      VipNodeJS.exitProcess(1)
    }

    // git commit scope
    if (scope != null && !supportScopes.includes(scope)) {
      vipLogger.println()
      VipConsole.error(`${ErrorLabel} ${VipColor.red(
        `invalid commit scope name , Examples: \n${supportScopes.map(v => ` - ${v}`).join('\n')}`,
      )}`)
      vipLogger.println()
      printStandardCommitMessage(commit)
      VipNodeJS.exitProcess(1)
    }

    // git commit subject
    if (subject == null || subject.length > 100 || subject.length < 5) {
      vipLogger.println()
      VipConsole.error(`${ErrorLabel} ${VipColor.red(
        `invalid commit message length , min length is 5 , max length is 100`,
      )}`)
      vipLogger.println()
      printStandardCommitMessage(commit)
      VipNodeJS.exitProcess(1)
    }
  }
  return { type, scope, subject, commit }
}
