import type { CmdResult } from './exec'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { RegistryAddressEnum } from '../enums'
import { VipSymbols } from '../pkgs'
import { VipExecutor } from './exec'
import { vipLogger } from './logger'
import { VipNodeJS } from './nodejs'

interface DockerOptions {
  logger?: boolean
}

/**
 * 构建镜像
 */
interface BuildImageDockerOptions extends DockerOptions {
  imageName: string
  buildArgs?: [string, number | boolean | string][]
  delete?: boolean
  push?: boolean
  target?: string
  // build命令时，GC限制内存大小
  memory?: number
  platform?: string
}

interface UserLoginDockerOptions extends DockerOptions {
  username: string
  password: string
  registry?: string
}

/**
 * 创建容器
 */
interface CreateContainerOptions extends DockerOptions {
  containerName: string
  imageName: string
  // 映射端口
  port: Array<[number, number]>
  // 自定义网络
  networkName?: string
  // 容器ip
  ip?: string
}

interface CreateNetworkOptions extends DockerOptions {
  networkName: string
  subnet?: string
  gateway?: string
}

/**
 * docker命令的通用执行器
 */
async function scriptExecutor(command: string): Promise<void> {
  try {
    const errorCode = await VipExecutor.commandStandardExecutor(command)
    if (errorCode !== 0) {
      vipLogger.error(`Error Code: ${errorCode}`, { startLabel: 'commandStandardExecutor' })
      VipNodeJS.exitProcess(1)
    }
  }
  catch {
    // 构建镜像出错时，直接退出
    VipNodeJS.exitProcess(1)
  }
}

/**
 * 判断是否存在镜像
 */
async function isExistImage(imageName: string): Promise<boolean> {
  const command = `docker images -q ${imageName}`
  const { code, stdout } = await VipExecutor.execCommand(command)
  return code === 0 && stdout.trim() !== ''
}

/**
 * 删除Docker镜像
 */
async function deleteImage(imageName: string): Promise<CmdResult> {
  const command = `docker rmi -f ${imageName}`
  return await VipExecutor.execCommand(command)
}

/**
 * 删除虚悬镜像
 */
async function deletePruneImages(): Promise<CmdResult> {
  const command = 'docker image prune -f'
  return await VipExecutor.execCommand(command)
}

/**
 * 列出虚线镜像
 */
async function listPruneImages() {
  const command = 'docker images -f dangling=true'
  await scriptExecutor(command)
}

/**
 * 判断容器是否存在
 */
async function isExistContainer(containerName: string): Promise<boolean> {
  const command = `docker ps -aq -f name=${containerName}`
  const { code, stdout } = await VipExecutor.execCommand(command)

  return code === 0 && stdout.trim() !== ''
}

/**
 * 用户登录
 */
async function userLogin(args: UserLoginDockerOptions): Promise<void> {
  if (args.registry) {
    // 杭州阿里云
    args.registry = RegistryAddressEnum.VIP_DOCKER
  }
  //   docker login --username=142vip --password="$password"  registry.cn-hangzhou.aliyuncs.com
  const command = `docker login --username=${args.username} --password="${args.password}" ${args.registry}`
  await scriptExecutor(command)
}

/**
 * 删除容器
 */
async function deleteContainer(containerName: string): Promise<boolean> {
  const command = `docker rm -f ${containerName}`
  const { code } = await VipExecutor.execCommand(command)
  return code === 0
}

/**
 * 强制删除容器，同时删除镜像
 */
async function deleteForceContainer(containerName: string): Promise<boolean> {
  const imageAddress = await getImageAddress(containerName)
  const success = await deleteContainer(containerName)
  if (success && imageAddress != null) {
    await deleteImage(imageAddress)
  }
  return success
}

/**
 * 基于容器名获取镜像地址
 */
async function getImageAddress(containerName: string): Promise<string | null> {
  const command = `docker inspect ${containerName} --format "{{.Config.Image}}"`
  const { code, stdout } = await VipExecutor.execCommand(command)
  if (code !== 0) {
    return null
  }
  // 去掉 \n & 空格
  return stdout.trim().replace(/\n/g, '')
}

/**
 * 是否安装docker
 */
async function isExistDocker(args?: DockerOptions): Promise<boolean> {
  const command = 'docker -v'
  const { code, stdout, stderr } = await VipExecutor.execCommand(command)

  // 打印日志
  if (args?.logger) {
    if (code === 0) {
      vipLogger.log(`检测到docker，版本信息：\n`, { startLabel: VipSymbols.success })
      vipLogger.log(stdout)
    }
    else {
      vipLogger.log(`未检测到docker，请先安装!!\n`, { startLabel: VipSymbols.error })
      vipLogger.error(stderr)
    }
  }
  return code === 0 && stdout.includes('Docker')
}

/**
 * 是否安装docker-compose
 */
async function isExistDockerCompose(args?: DockerOptions): Promise<boolean> {
  const command = 'docker-compose -v'
  const { code, stdout, stderr } = await VipExecutor.execCommand(command)

  // 打印日志
  if (args?.logger) {
    if (code === 0) {
      vipLogger.log(`检测到docker-compose，版本信息：\n`, { startLabel: VipSymbols.success })
      vipLogger.log(stdout)
    }
    else {
      vipLogger.log(`未检测到docker-compose，请先安装!!\n`, { startLabel: VipSymbols.error })
      vipLogger.error(stderr)
    }
  }
  return code === 0 && stdout.includes('Docker Compose')
}

/**
 * 推送Docker镜像到指定仓库
 */
async function pushImage(imageName: string): Promise<void> {
  const command = `docker push ${imageName}`
  await scriptExecutor(command)
}

async function pullImage(imageAddress: string): Promise<void> {
  const command = `docker pull ${imageAddress}`
  await scriptExecutor(command)
}

/**
 * 构建Docker镜像
 * - 根据tag标记，推送到远程仓库
 * - 推送完成后，删除本地镜像
 */
async function buildImage(args: BuildImageDockerOptions): Promise<void> {
  // 构建参数
  let buildArg = ''
  if (args.buildArgs != null) {
    buildArg = args.buildArgs.map(([key, value]) => {
      // 对于字符串，额外加''
      const newValue = typeof value === 'string'
        ? `'${value}'`
        : value

      return `--build-arg ${key}=${newValue}`
    }).join(' \ ')
  }

  // 支持--target参数
  const targetParams = args.target != null ? `--target ${args.target}` : ''
  const memoryParams = args.memory != null ? `--memory=${args.memory}mb` : ''
  const platformParams = args.platform != null ? `--platform=${args.platform}` : ''

  const command = `docker build ${buildArg} ${targetParams} ${memoryParams} ${platformParams} -t '${args.imageName}' .`

  if (args.logger) {
    vipLogger.log(`执行的命令：\n`, { startLabel: VipSymbols.success })
    vipLogger.log(`${command}\n`, { startLabel: VipSymbols.success })
  }
  vipLogger.log(args.imageName, { startLabel: '构建镜像' })

  await scriptExecutor(command)

  if (args.push) {
    const exist = await isExistImage(args.imageName)

    if (exist) {
      vipLogger.log(args.imageName, { startLabel: '推送镜像' })
      await pushImage(args.imageName)
    }
  }

  // 推送完删除
  if (args.push && args.delete) {
    vipLogger.log(args.imageName, { startLabel: '删除镜像' })
    await deleteImage(args.imageName)
  }
}

/**
 * 创建容器
 */
async function createContainer(args: CreateContainerOptions): Promise<void> {
  if (args.networkName && !args.ip) {
    vipLogger.error(`只指定IP，没有指定容器局域网名称，缺少--networkName参数`, { startLabel: '创建容器' })
    VipNodeJS.exitProcess(1)
  }

  // 支持自定义网络、IP地址
  const networkParams = args.networkName && args.ip ? `--network ${args.networkName} --ip ${args.ip}` : ''

  // 支持端口映射
  const portStr = args.port ? args.port.map(port => `-p ${port}`).join(' ') : ''

  // 命令
  const runParams = [
    'docker run -d',
    `--name ${args.containerName}`,
    '--restart=unless-stopped',
    // 处理platform，兼容arm64、arm架构
    VipNodeJS.getCPUArch().includes('arm') ? '--platform linux/arm64' : '--platform linux/amd64',
    `${networkParams}`,
    portStr,
    args.imageName,
  ]

  const command = runParams.filter(s => s !== '').join(' ')

  if (args.logger != null) {
    vipLogger.log(`command：${command}`)
  }

  await VipExecutor.commandStandardExecutor(command)
}

/**
 * 查询所有容器
 */
async function listContainer(): Promise<void> {
  const command = `docker ps -a`
  await scriptExecutor(command)
}

/**
 * 查看正在运行的容器
 */
async function listRunningContainer(): Promise<void> {
  const command = `docker ps`
  await scriptExecutor(command)
}

/**
 * 列出所有正在运行的容器名称
 */
async function listContainerNames(): Promise<string[]> {
  const containers = await listContainerStatus()
  return containers.map(container => container.name)
}

/**
 * 列出所有正在运行的容器名称
 */
async function listRunningContainerNames(): Promise<string[]> {
  const containers = await listContainerStatus()
  return containers
    .filter(c => c.running)
    .map(container => container.name)
}

/**
 * 列出所有未运行的容器名称
 */
async function listNoRunningContainerNames(): Promise<string[]> {
  const containers = await listContainerStatus()
  return containers
    .filter(c => !c.running)
    .map(container => container.name)
}

/**
 * 列出所有容器名称、状态
 */
async function listContainerStatus(): Promise<{ name: string, running: boolean }[]> {
  const command = `docker ps -a --format "{{.Names}} &&& {{.Status}}"`
  const { code, stdout } = await VipExecutor.execCommand(command)
  if (code !== 0) {
    return []
  }

  return stdout.trim().split('\n').map((line) => {
    const [name, ...statusParts] = line.split(' &&& ')
    const status = statusParts.join(' ')
    return {
      name,
      running: status.includes('Up'),
    }
  })
}

/**
 * 判断网络是否存在
 */
async function isExistNetwork(networkName: string): Promise<boolean> {
  const names = await listNetworkNames()
  return names.includes(networkName)
}

/**
 * 列举出所有的网络名称
 */
async function listNetworkNames(): Promise<string[]> {
  const command = `docker network ls --format "{{.Name}}"`
  const { code, stdout } = await VipExecutor.execCommand(command)
  if (code !== 0) {
    return []
  }
  return stdout.split('\n').filter(v => !!v)
}

/**
 * 创建网络
 */
async function createNetwork(options: CreateNetworkOptions): Promise<boolean> {
  // 默认的网关和子网掩码
  if (options.gateway == null && options.subnet == null) {
    options.gateway = OPEN_SOURCE_ADDRESS.DOCKER_NETWORK_GATEWAY
    options.subnet = OPEN_SOURCE_ADDRESS.DOCKER_NETWORK_SUBNET
  }
  const command = `docker network create --subnet="${options.subnet}" --gateway="${options.gateway}" ${options.networkName}`
  const { code } = await VipExecutor.execCommand(command)
  return code === 0
}

/**
 * docker工具
 */
export const VipDocker = {
  isExistDocker,
  isExistDockerCompose,
  isExistImage,
  isExistContainer,
  deleteImage,
  deletePruneImages,
  deleteContainer,
  pullImage,
  pushImage,
  buildImage,
  listPruneImages,
  getImageAddress,
  createContainer,
  listContainer,
  listRunningContainer,
  deleteForceContainer,
  userLogin,
  listContainerStatus,
  listContainerNames,
  listRunningContainerNames,
  listNoRunningContainerNames,
  createNetwork,
  listNetworkNames,
  isExistNetwork,
  scriptExecutor,
}
