import type { ChangelogCliOptions } from './enums'
import { VipColor, VipCommander, VipConsole, VipNodeJS } from '@142vip/utils'
import { description as packageDescription, name as packageName, version as packageVersion } from '../package.json'
import { ChangelogAPI } from './core'

/**
 * cli 入口
 * - https://www.npmjs.com/package/changelogen
 */
function changelogMain(): void {
  const program = new VipCommander(packageName, packageVersion, packageDescription)

  program
    .init({
      summary: 'CHANGELOG日志快速生成工具',
      description: packageDescription,
    })
    .option('--token <token>', 'GitHub的Token')
    .option('--from <from>', 'Git Commit信息的开始的标签')
    .option('--to <to>', 'Git Commit信息的结束标签')
    .option('--name <name>', '发布的名称')
    .option('--github <github>', 'Github仓库地址，例如：@142vip/core-x')
    .option('--output <output>', '输出文档的文件名，建议用绝对路径，例如：CHANGELOG.md')
    .option('--scopeName <scopeName>', 'Monorepo模式下的应用包名称')
    .option('--prerelease', '将当前发布的版本标记为预发布状态', true)
    .action(async (options: ChangelogCliOptions): Promise<void> => {
      if (options.trace) {
        VipConsole.trace('changelogMain:', options)
      }

      VipConsole.log(`${VipColor.dim(packageName)} ${VipColor.dim(`v${packageVersion}`)}`)

      await ChangelogAPI.changelogCoreHandler(options)
    })

  // 解析参数
  program.parse(VipNodeJS.getProcessArgv())
}

changelogMain()
