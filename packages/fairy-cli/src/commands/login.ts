import process from 'node:process'
import type { Command } from 'commander'
import { CliCommandEnum, execChildProcess } from '../shared'

enum LoginPlatformEnum {
  DOCKER = 'docker',
  NPM = 'npm',
}

enum RegistryURLEnum {
  DOCKER = 'https://registry.cn-hangzhou.aliyuncs.com',
  NPM = 'https://registry.npmjs.org',
  VIP_DOCKER = 'registry.cn-hangzhou.aliyuncs.com',
  VIP_NPM = 'https://registry.142vip.com',
}

interface LoginOptions {
  userName?: string
  password?: string
  registryUrl?: string
  // 142vip的业务
  vip?: string
}

interface DockerOptions extends LoginOptions {
}

interface NpmOptions extends Omit<LoginOptions, 'userName' | 'password'> {
}

function execLogin(platform: LoginPlatformEnum, args: LoginOptions) {
  if (LoginPlatformEnum.DOCKER === platform) {
    loginDocker(args)
  }

  if (LoginPlatformEnum.NPM === platform) {
    loginNpm(args)
  }
}

// docker 登录
function loginDocker(args: DockerOptions) {
  let registryUrl = RegistryURLEnum.DOCKER as string
  if (args.registryUrl != null) {
    registryUrl = args.registryUrl
  }

  if (args.vip) {
    registryUrl = RegistryURLEnum.VIP_DOCKER
    args.userName = '142vip'
  }

  //   docker login --username=142vip --password="$password"  registry.cn-hangzhou.aliyuncs.com
  const command = `docker login ${args.userName != null ? `--username=${args.userName}` : ''} ${args.password != null ? `--password=${args.password}` : ''}${registryUrl}`
  execChildProcess(command)
}

// npm 登录
function loginNpm(args: NpmOptions) {
  let registryUrl = RegistryURLEnum.NPM as string
  if (args.registryUrl != null) {
    registryUrl = args.registryUrl
  }

  if (args.vip) {
    registryUrl = RegistryURLEnum.VIP_NPM
  }

  // npm login --registry  https://registry.npmjs.org
  execChildProcess(`npm login --registry ${registryUrl}`)
}

/**
 * login命令入口
 */
export async function loginMain(program: Command) {
  program
    .command(`${CliCommandEnum.LOGIN} <platform>`)
    .description('登录远程平台，支持Docker和Npm')
    .option('-u,--username', '登录账号，docker登录时有效')
    .option('-p,--password', '登录密码，docker登录时有效')
    .option('--registry-url', 'registry address')
    .option('--vip', '142vip专用业务账号', false)
    .action((platform: LoginPlatformEnum, args: LoginOptions) => {
      if (![LoginPlatformEnum.NPM, LoginPlatformEnum.DOCKER].includes(platform)) {
        console.error('login命令只支持Docker和Npm平台，使用格式 login docker|npm')
        process.exit(1)
      }
      execLogin(platform, args)
    })
}
