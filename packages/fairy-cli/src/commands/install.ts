import type { VipCommander } from '@142vip/utils'
import { RegistryAddressEnum, VipInquirer, VipNpm } from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

interface InstallOptions {
  registry?: string
  force?: boolean
}
/**
 * 支持的依赖管理器
 */
enum InstallTypeEnum {
  NPM = 'npm',
  PNPM = 'pnpm',
}

/**
 * 依赖下载、下载
 * - npm
 * - pnpm
 */
async function execInstall(installType: InstallTypeEnum, args: InstallOptions): Promise<void> {
  if (installType === InstallTypeEnum.NPM) {
    await VipNpm.installByNpm({ force: args.force, registry: args.registry })
  }
  if (installType === InstallTypeEnum.PNPM) {
    await VipNpm.installByPnpm({ force: args.force, registry: args.registry })
  }
}

/**
 * install 命令入口
 */
export async function installMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.INSTALL])
    .option('-f,--force', '强制lock文件更新', false)
    .option('--registry', `NPM模块的源地址，默认：${RegistryAddressEnum.VIP_NPM_ALIBABA}`, RegistryAddressEnum.VIP_NPM_ALIBABA)
    .action(async (args: InstallOptions): Promise<void> => {
      const installType = await VipInquirer.promptSelect<InstallTypeEnum>('选择安装方式：', Object.values(InstallTypeEnum))
      await execInstall(installType, args)
    })
}
