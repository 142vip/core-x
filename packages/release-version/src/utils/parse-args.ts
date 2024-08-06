import process from 'node:process'
import { valid as isValidVersion } from 'semver'
import cac from 'cac'
import { yellow } from 'kolorist'
import { isReleaseType } from '../core/release-type'
import type { VersionBumpOptions } from '../types'
import { name, version } from '../../package.json'
import { ExitCodeEnum } from '../types'
import { bumpConfigDefaults, loadBumpXConfig } from './config'

/**
 * The parsed command-line arguments
 */
export interface ParsedArgs {
  help?: boolean
  version?: boolean
  quiet?: boolean
  options: VersionBumpOptions
}

/**
 * 解析脚手架的参数
 */
export async function parseArgs(): Promise<ParsedArgs> {
  try {
    const { args, resultArgs } = loadCliArgs()

    const parsedArgs: ParsedArgs = {
      help: args.help as boolean,
      version: args.version as boolean,
      quiet: args.quiet as boolean,
      options: await loadBumpXConfig({
        preid: args.preid,
        commit: args.commit,
        tag: args.tag,
        push: args.push,
        all: args.all,
        confirm: !args.yes,
        noVerify: !args.verify,
        files: [...(args['--'] || []), ...resultArgs],
        ignoreScripts: args.ignoreScripts,
        currentVersion: args.currentVersion,
        execute: args.execute,
        recursive: !!args.recursive,
        changelog: !!args.changelog,
        scopeName: args.scopeName,
      }),
    }

    // If a version number or release type was specified, then it will mistakenly be added to the "files" array
    if (parsedArgs.options.files && parsedArgs.options.files.length > 0) {
      const firstArg = parsedArgs.options.files[0]

      if (firstArg === 'prompt' || isReleaseType(firstArg) || isValidVersion(firstArg)) {
        parsedArgs.options.release = firstArg
        parsedArgs.options.files.shift()
      }
    }

    if (parsedArgs.options.recursive && parsedArgs.options.files?.length)
      console.log(yellow('The --recursive option is ignored when files are specified'))

    return parsedArgs
  }
  catch (error) {
    // There was an error parsing the command-line args
    console.error(error)
    return process.exit(ExitCodeEnum.InvalidArgument)
  }
}

export function loadCliArgs(argv = process.argv) {
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
    .option('-q, --quiet', 'Quiet mode')
    .option('-v, --version <version>', 'Target version')
    .option('--current-version <version>', 'Current version')
    .option('-x, --execute <command>', 'Commands to execute after version bumps')
    .option('--changelog', 'generate CHANGELOG.md', { default: false })
    .option('--scopeName <scopeName>', 'Package name in monorepo')
    .help()

  const result = cli.parse(argv)
  const rawArgs = cli.rawArgs
  const args = result.options

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
