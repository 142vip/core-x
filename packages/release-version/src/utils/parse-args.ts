import type { VersionBumpOptions } from '../types'
import { VipNodeJS } from '@142vip/utils'
import cac from 'cac'
import { name, version } from '../../package.json'
import { bumpConfigDefaults, loadBumpXConfig } from './config'

/**
 * The parsed command-line arguments
 */
export interface ParsedArgs {
  quiet?: boolean
  options: VersionBumpOptions
}

/**
 * 解析脚手架的参数
 */
export async function parseArgs(): Promise<ParsedArgs> {
  const { args } = loadCliArgs()

  return {
    quiet: args.quiet as boolean,
    options: await loadBumpXConfig({
      preid: args.preid,
      commit: args.commit,
      tag: args.tag,
      push: args.push,
      all: args.all,
      confirm: !args.yes,
      noVerify: !args.verify,
      ignoreScripts: args.ignoreScripts,
      currentVersion: args.currentVersion,
      execute: args.execute,
      recursive: !!args.recursive,
      changelog: !!args.changelog,
      scopeName: args.scopeName,
    }),
  }
}

export function loadCliArgs() {
  const cli = cac(name)
  cli.version(version)
    .usage('[...files]')
    .option('--preid <preid>', 'ID for prerelease')
    .option('--all', `Include all files (default: ${bumpConfigDefaults.all})`)
    .option('-c, --commit [msg]', 'Commit message', { default: true })
    .option('--no-commit', 'Skip commit', { default: false })
    .option('-t, --tag [tag]', 'Tag name', { default: true })
    .option('--no-tag', 'Skip tag', { default: false })
    .option('-p, --push', `Push to remote (default: ${bumpConfigDefaults.push})`)
    .option('-y, --yes', `Skip confirmation (default: ${!bumpConfigDefaults.confirm})`)
    .option('-r, --recursive', `Bump package.json files recursively (default: ${bumpConfigDefaults.recursive})`)
    .option('--no-verify', 'Skip git verification')
    .option('--ignore-scripts', `Ignore scripts (default: ${bumpConfigDefaults.ignoreScripts})`, { default: bumpConfigDefaults.ignoreScripts })
    .option('-q, --quiet', 'Quiet mode', { default: true })
    .option('--current-version <version>', 'Current version')
    .option('-x, --execute <command>', 'Commands to execute after version bumps')
    .option('--changelog', 'generate CHANGELOG.md', { default: false })
    .option('--scopeName <scopeName>', 'Package name in monorepo')
    .option('--dry-run', '试运行，软件版本更新', { default: false })
    .help()

  const result = cli.parse(VipNodeJS.getProcessArgv())
  const rawArgs = cli.rawArgs
  const args = cli.options

  // 这里避免ESLINT报错，功能问题查看git记录
  const COMMIT_REG = /(?:-c|--commit|--no-commit)(?:=.*|$)/
  const TAG_REG = /(?:-t|--tag|--no-tag)(?:=.*|$)/

  const hasCommitFlag = rawArgs.some(arg => COMMIT_REG.test(arg))
  const hasTagFlag = rawArgs.some(arg => TAG_REG.test(arg))

  const { tag, commit, ...rest } = args

  return {
    args: {
      ...rest,
      commit: hasCommitFlag ? commit : undefined,
      tag: hasTagFlag ? tag : undefined,
    } as { [k: string]: any },
    resultArgs: result.args,
  }
}
