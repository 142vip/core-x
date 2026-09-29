import type { VipPackageCliCommander } from '@142vip/utils'
import { RegistryAddressEnum, VipInquirer, VipNpm } from '@142vip/utils'
import { CommandEnum, FairyCommandOptions } from '../constant'
import { registerFairySubcommand, runOrDryRun } from '../utils'

interface InstallOptions extends FairyCommandOptions {
  registry?: string
  force?: boolean
}

enum InstallTypeEnum {
  NPM = 'npm',
  PNPM = 'pnpm',
}

function buildInstallCommand(installType: InstallTypeEnum, args: InstallOptions): string {
  const registry = args.registry ?? RegistryAddressEnum.VIP_NPM_ALIBABA
  const forceFlag = args.force ? ' --force' : ''
  if (installType === InstallTypeEnum.PNPM) {
    return `pnpm install --registry ${registry}${forceFlag}`
  }
  return `npm install --registry=${registry}${forceFlag}`
}

async function execInstall(installType: InstallTypeEnum, args: InstallOptions): Promise<void> {
  const preview = buildInstallCommand(installType, args)
  await runOrDryRun(args.dryRun, 'install', [preview], async () => {
    if (installType === InstallTypeEnum.NPM) {
      await VipNpm.installByNpm({ force: args.force, registry: args.registry })
    }
    if (installType === InstallTypeEnum.PNPM) {
      await VipNpm.installByPnpm({ force: args.force, registry: args.registry })
    }
  })
}

/** `fa install`：交互选择 npm / pnpm 安装依赖。 */
export async function installMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.INSTALL, async (args: InstallOptions) => {
    const installType = await VipInquirer.promptSelect<InstallTypeEnum>('选择安装方式：', Object.values(InstallTypeEnum))
    await execInstall(installType, args)
  }, (command) => {
    command
      .option('-f,--force', '强制lock文件更新', false)
      .option('--registry', `NPM模块的源地址，默认：${RegistryAddressEnum.VIP_NPM_ALIBABA}`, RegistryAddressEnum.VIP_NPM_ALIBABA)
  })
}
