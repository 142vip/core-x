import type { VipCommander } from '@142vip/utils'
import { VipColor, VipDocker, VipInquirer, vipLogger } from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

/**
 * 支持的登录平台枚举
 */
enum LoginPlatformEnum {
  DOCKER = 'DOCKER',
  NPM = 'NPM',
}

/**
 * 支持的注册地址枚举
 */
enum RegistryURLEnum {
  DOCKER = 'https://registry.docker.io',
  NPM = 'https://registry.npmjs.org',
  VIP_DOCKER = 'https://registry.cn-hangzhou.aliyuncs.com',
  VIP_NPM = 'https://registry.142vip.com',
}

/**
 * docker 登录
 * - docker login --username=142vip --password="$password"  registry.cn-hangzhou.aliyuncs.com
 */
async function loginDocker(): Promise<void> {
  const username = await VipInquirer.promptInput('请输入用户名（默认：142vip）：', '142vip')
  const password = await VipInquirer.promptPassword('请输入密码：')
  // 后续考虑用户自定义仓库地址
  const registry = await VipInquirer.promptSelect('请选择仓库地址：', [
    RegistryURLEnum.DOCKER,
    RegistryURLEnum.VIP_DOCKER,
  ])
  vipLogger.println()
  await VipDocker.userLogin({ username, password, registry })
}

/**
 * npm 登录
 * - npm login --registry  https://registry.npmjs.org
 */
async function loginNpm(): Promise<void> {
  const registry = await VipInquirer.promptInput(`请输入NPM地址：`, RegistryURLEnum.NPM)
  const command = `npm login --registry ${registry}`
  vipLogger.logByBlank(`${VipColor.red('请粘贴到终端执行，NPM登录命令：')} ${VipColor.green(command)}`)
}

/**
 * login命令入口
 * - fa login
 * - npx fa login
 */
export async function loginMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.LOGIN])
    .action(async () => {
      const loginType = await VipInquirer.promptSelect('选择需要登录的平台：', Object.values(LoginPlatformEnum))
      if (loginType === LoginPlatformEnum.DOCKER) {
        await loginDocker()
      }

      if (loginType === LoginPlatformEnum.NPM) {
        await loginNpm()
      }
    })
}
