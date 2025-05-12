import type { VipCommander } from '@142vip/utils'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipNpm,
} from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

interface TurboPackOptions {
  mode?: string
  logger?: string
}

/**
 * 支持的模式
 */
enum TurboPackCommandModeEnum {
  DEV = 'npx turbo dev',
  BUILD = 'npx turbo build',
}

/**
 * 执行turbo命令
 * @param repoNames 子模块名
 * @param args turbo 命令参数
 */
async function execTurboPack(repoNames: string[], args: TurboPackOptions): Promise<void> {
  // 判断当前目录下是否有turbo.json配置文件
  if (!VipNodeJS.isExistFile('turbo.json')) {
    VipConsole.log(VipColor.red('项目根目录下缺少turbo.json配置文件，查看Turborepo官网：<https://turbo.build/repo/docs>'))
    VipNodeJS.existErrorProcess()
  }

  const command = `${args.mode} ${getFilterRepo(repoNames)} --color --only`
  if (args.logger) {
    VipConsole.log(VipColor.yellow(`执行命令：${command}`))
  }

  // 命令执行
  await VipExecutor.commandStandardExecutor(command)
}

/**
 * 获取需要执行命令的repo
 * - 支持多个--filter
 * - 支持所有repo
 */
function getFilterRepo(repoNames: string[]): string {
  return repoNames.map(name => `--filter=${name}`).join(' ')
}

/**
 * turbo命令入口
 * - npx fa turbo
 * - npx fa turbo --dev
 * - npx fa turbo --build
 */
export async function turboPackMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.TURBO])
    .argument('[filters...]', '过滤器规则，参考：<https://turbo.build/repo/docs/crafting-your-repository/running-tasks#using-filters>')
    .option('-m,--mode', `命令的支持的模式`)
    .action(async (filters: string[], args: TurboPackOptions) => {
      const turboVersion = await VipNpm.getTurboPackVersion()
      if (turboVersion == null) {
        vipLogger.error('未检测到TurboPack环境，请全局安装turbo。命令：npm i -g turbo')
        VipNodeJS.existErrorProcess()
      }
      if (filters.length === 0) {
        const apps = await VipNpm.getTurboPackApps()
        // 执行所有repo
        filters = await VipInquirer.promptCheckBox('请选择模块名称：', apps)
      }
      // 自助选择模式
      if (!args.mode) {
        args.mode = await VipInquirer.promptSelect('请选择运行模式：', [TurboPackCommandModeEnum.DEV, TurboPackCommandModeEnum.BUILD])
      }

      await execTurboPack(filters, args)
    })
}
