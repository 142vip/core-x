import type { VipPackageCliCommander } from '@142vip/utils'
import { VipColor, VipConsole, VipDocker, VipInquirer, vipLogger } from '@142vip/utils'
import { CommandEnum, FairyCommandOptions } from '../constant'
import { registerFairySubcommand, runOrDryRun } from '../utils'

enum LoginPlatformEnum {
  DOCKER = 'DOCKER',
  NPM = 'NPM',
}

enum RegistryURLEnum {
  DOCKER = 'https://registry.docker.io',
  NPM = 'https://registry.npmjs.org',
  VIP_DOCKER = 'https://registry.cn-hangzhou.aliyuncs.com',
  VIP_NPM = 'https://registry.142vip.com',
}

async function loginDocker(dryRun?: boolean): Promise<void> {
  const username = await VipInquirer.promptInput('请输入用户名（默认：142vip）：', '142vip')
  const password = await VipInquirer.promptPassword('请输入密码：')
  const registry = await VipInquirer.promptSelect('请选择仓库地址：', [
    RegistryURLEnum.DOCKER,
    RegistryURLEnum.VIP_DOCKER,
  ])

  await runOrDryRun(dryRun, 'login', [
    `docker login --username=${username} --password=*** ${registry}`,
  ], async () => {
    vipLogger.println()
    await VipDocker.userLogin({ username, password, registry })
  })
}

async function loginNpm(dryRun?: boolean): Promise<void> {
  const registry = await VipInquirer.promptInput(`请输入NPM地址：`, RegistryURLEnum.NPM)
  const command = `npm login --registry ${registry}`

  await runOrDryRun(dryRun, 'login', [
    command,
    '（NPM 登录需在终端手动完成）',
  ], () => {
    VipConsole.log(`${VipColor.greenBright('login:')} 请在终端执行 ${VipColor.green(command)}`)
  })
}

/** `fa login`：交互选择 Docker 或 npm 登录（npm 仅打印待执行命令）。 */
export async function loginMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.LOGIN, async (options: FairyCommandOptions) => {
    const loginType = await VipInquirer.promptSelect('选择需要登录的平台：', Object.values(LoginPlatformEnum))
    if (loginType === LoginPlatformEnum.DOCKER) {
      await loginDocker(options.dryRun)
    }

    if (loginType === LoginPlatformEnum.NPM) {
      await loginNpm(options.dryRun)
    }
  })
}
