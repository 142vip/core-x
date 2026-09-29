import type { VipPackageCliCommander } from '@142vip/utils'
import {
  RegistryAddressEnum,
  VipExecutor,
  VipInquirer,
} from '@142vip/utils'
import { CommandEnum } from '../constant'
import { registerFairySubcommand, runOrDryRun } from '../utils'

interface PublishOptions {
  registry?: string
  dryRun?: boolean
}

function buildPublishCommand(registry?: string): string {
  return `npm publish --access public --registry=${registry ?? RegistryAddressEnum.NPM}`
}

/**
 * 发布到 npm
 */
async function publishNpm(args: PublishOptions): Promise<void> {
  let dryRun = args.dryRun
  if (dryRun == null) {
    dryRun = await VipInquirer.promptConfirm('publish发布功能试运行?', false)
  }

  const command = buildPublishCommand(args.registry)
  await runOrDryRun(dryRun, 'publish', [command], async () => {
    await VipExecutor.commandStandardExecutor(command)
  })
}

/** `fa publish`：向 npm registry 发布当前包（可 `--dry-run`）。 */
export async function publishMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.PUBLISH, async (args: PublishOptions) => {
    await publishNpm(args)
  }, (command) => {
    command.option('-r,--registry', `NPM包的仓库地址，默认: ${RegistryAddressEnum.NPM}`, RegistryAddressEnum.NPM)
  })
}
