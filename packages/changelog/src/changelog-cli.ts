import type { ChangelogCliOptions } from './core/changelog.interface'
import { isVipConsoleTraceEnabled, VipColor, VipCommander, VipConsole, VipNodeJS, VipPackageCliCommander } from '@142vip/utils'
import { description, name, version } from '../package.json'
import { changelogApi } from './core/apis/changelog.api'

/** 与 `fa changelog` 子命令元数据对齐 */
export const CHANGELOG_COMMAND_DETAIL = {
  command: 'changelog',
  summary: '生成 CHANGELOG 文档',
  description: '基于 Git 提交生成 CHANGELOG，可选写入文件并发布 GitHub Release',
  aliases: ['c', 'ch', 'cha'],
}

/** 业务 CLI 参数：token / 标签区间 / 输出路径等 */
function registerChangelogOptions(command: VipCommander): void {
  command
    .option('--token <token>', 'GitHub Token（亦可 GITHUB_TOKEN / TOKEN）')
    .option('--from <from>', '起始 Git 标签')
    .option('--to <to>', '结束 Git 标签')
    .option('--name <name>', 'Release 名称')
    .option('--github <github>', '仓库地址，如 142vip/core-x')
    .option('--output <output>', 'CHANGELOG 输出路径（建议绝对路径）')
    .option('--scopeName <scopeName>', 'Monorepo 子包名')
    .option('--prerelease', '强制标记为 GitHub Pre-release（默认按目标 tag 推断）')
}

/** standalone bin 与 `fa changelog` 共用的 action */
export async function runChangelogCli(options: ChangelogCliOptions): Promise<void> {
  if (isVipConsoleTraceEnabled() || options.trace) {
    VipConsole.trace('changelog:', options)
  }
  VipConsole.log(`${VipColor.dim(name)} ${VipColor.dim(`v${version}`)}`)
  await changelogApi.changelogCoreHandler(options)
}

/** `registerSubcommand` / `registerStandalone` 共用载荷（业务参数 + action） */
export const changelogCommandRegistration = {
  registerBusinessOptions: registerChangelogOptions,
  action: runChangelogCli,
}

/** `changelog` / `ch` bin 入口 */
export async function changelogCliMain(): Promise<void> {
  const program = new VipPackageCliCommander(name, version, description)
  program.registerStandalone(CHANGELOG_COMMAND_DETAIL, changelogCommandRegistration)
  await program.parseAsync(VipNodeJS.getProcessArgv())
}
