import { execChildProcess } from '../utils'

export enum LoginPlatformEnum {
  DOCKER = 'docker',
  NPM = 'npm',
}

export enum RegistryURLEnum {
  DOCKER = 'https://registry.cn-hangzhou.aliyuncs.com',
  NPM = 'https://registry.npmjs.org',
  VIP_DOCKER = 'registry.cn-hangzhou.aliyuncs.com',
  VIP_NPM = 'https://registry.142vip.com',
}

export interface LoginOptions {
  userName?: string
  password?: string
  registryUrl?: string
  // 142vip的业务
  vip?: string
}

export interface DockerOptions extends LoginOptions {
}

export interface NpmOptions extends Omit<LoginOptions, 'userName' | 'password'> {
}

export function execLogin(platform: LoginPlatformEnum, args: LoginOptions) {
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
