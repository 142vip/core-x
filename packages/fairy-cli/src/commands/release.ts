import type { VersionBumpOptions } from '@142vip/release-version'
import { versionBump } from '@142vip/release-version'
import type { Command } from 'commander'
import { CliCommandEnum, getPackageListInMonorepo } from '../shared'

// export interface ReleaseOptions {
//   preid: string
//   commit?: boolean | string
//   tag?: boolean | string
//   push?: boolean
//   all?: boolean
//   execute?: string
//   package?: string
// }
interface ReleaseOptions extends Pick<VersionBumpOptions, 'preid' | 'tag' | 'commit' | 'push' | 'all' | 'execute'> {
  package?: string
}

/**
 * - 注意：
 * VersionBumpOptions中的files用来指定package.json文件路径
 * @param options
 */
// export async function releaseVersion(options: VersionBumpOptions) {
//   // const defaultOptions = {}
//   await versionBump(options)
// }

/**
 * 版本发布
 * @param args
 */
async function execRelease(args: ReleaseOptions) {
  // 指定包
  if (args.package != null) {
    const packageJSONList = await getPackageListInMonorepo()
    // const packageJSONList: string[] = []
    if (!packageJSONList.includes(`${args.package}/package.json`)) {
      // 抛错，提醒用户包在monorepo下找不到
      console.log('正确')
    }
  }
  else {
    // 对话框，用户自行选择
    console.log('错误')
  }

  // 指定文件更新版本
  await versionBump({
    files: [],
    ...args.preid ? { preid: args.preid } : { perid: 'alpha' },
    // 是否需要标记
    ...args.tag ? { tag: args.tag } : {},
    // 需要提交信息
    ...args.commit ? { commit: args.commit } : {},
    // 推送到远程
    ...args.push ? { push: args.push } : {},
    // 执行远程
    ...args.execute ? { execute: args.execute } : {},
  })
}

export async function releaseMain(program: Command) {
  program
    .command(CliCommandEnum.RELEASE)
    .description('release npm version')
    .option('--push', 'registry address', true)
    .option('--preid <preid>', 'ID for prerelease')
    .option('--commit <msg>', 'Commit message', false)
    .option('--tag <tag>', 'Tag name', false)
    .option('--skip-confirm', `Skip confirmation (default: false)`, false)
    .option('-r, --recursive', `Bump package.json files recursively (default: false)`, false)
    .option('--execute <command>', '版本更新后需要执行的命令')
    .option('--package <package>', '指定需要发布的包')
    .action(async (args: ReleaseOptions) => {
      console.log(CliCommandEnum.RELEASE, args)
      await execRelease(args)
    })
}
