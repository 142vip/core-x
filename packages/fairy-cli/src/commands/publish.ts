import type { VipCommander } from '@142vip/utils'
import {
  RegistryAddressEnum,
  VipColor,
  VipConsole,
  VipExecutor,
  VipInquirer,
  vipLogger,
} from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

interface PublishOptions {
  registry?: string
  dryRun?: boolean
}

/**
 * 发布到npm
 * - npm publish --access public --registry  https://registry.npmjs.org
 */
async function publishNpm(args: PublishOptions): Promise<void> {
  // 试运行
  if (args.dryRun == null) {
    args.dryRun = await VipInquirer.promptConfirm('publish发布功能试运行?', false)
  }
  const command = `npm publish --access public --registry=${args.registry ?? RegistryAddressEnum.NPM}`

  if (args.dryRun) {
    vipLogger.println()
    VipConsole.log(`试运行，不执行发布命令：${VipColor.green(command)}`)
    vipLogger.println()
  }
  else {
    await VipExecutor.commandStandardExecutor(command)
  }
}

/**
 * publish 命令入口
 * - fa publish
 * - npx fa publish
 */
export async function publishMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.PUBLISH])
    .option('-r,--registry', `NPM包的仓库地址，默认: ${RegistryAddressEnum.NPM}`, RegistryAddressEnum.NPM)
    .action(async (args: PublishOptions): Promise<void> => {
      await publishNpm(args)
    })
}
