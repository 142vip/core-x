import { VipColor, VipConsole, vipLogger } from '@142vip/utils'
import { name } from '../../package.json'
import { gitCommitTypes } from './git-commit-type'

/**
 * 打印错误信息
 * 打印标准的Git Commit信息模板
 */
export function printStandardCommitMessage(message?: string): void {
  vipLogger.println()
  VipConsole.log(VipColor.yellow(`*****************【${name}】GIT COMMIT STANDARD TEMPLATE ******************`))
  VipConsole.log(`  ${VipColor.bold('commit format: ')}<${VipColor.greenBright('type')}>(${VipColor.grey('scope')}): <${VipColor.greenBright('subject')}>`)
  VipConsole.log(`  ${VipColor.bold('commit example: ')}${VipColor.green('docs(README): update')}`)

  if (message != null)
    VipConsole.log(`  ${VipColor.bold('commit message: ')}${VipColor.red(message)}`)

  // type
  VipConsole.log(`*${VipColor.red('type:')}`)
  // for (const [type, { description }] of Object.entries(gitCommitTypes)) {
  //   VipConsole.log(`${VipColor.yellow(type.padEnd(10))}${VipColor.grey(description)}`)
  // }

  for (const [type, { description }] of Object.entries(gitCommitTypes)) {
    VipConsole.log(`  ${VipColor.greenBright(type.padEnd(10))}  ${VipColor.grey(description)}`)
  }

  // scope
  VipConsole.log(`${VipColor.red('scope:')}`)
  VipConsole.log(`  ${VipColor.grey('Optional, can be anything specifying the scope of the commit change.\n  For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.\n  In App Development, scope can be a page, a module or a component.')}`)

  // subject
  VipConsole.log(`*${VipColor.red('subject:')}`)
  VipConsole.log(`  ${VipColor.grey('Brief summary of the change in present tense. Not capitalized. No period at the end.'.padEnd(2))}`)
  vipLogger.println()
}
