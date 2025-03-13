import { VipSymbols } from '../pkgs'
import { VipExecutor } from './exec'
import { vipLogger } from './logger'
import { VipNodeJS } from './nodejs'

interface DockerOptions {
  logger?: boolean
}

interface BuildImageDockerOptions extends DockerOptions {
  imageName: string
  buildArgs?: [string, number | boolean | string][]
  delete?: boolean
  push?: boolean
  target?: string
  // build命令时，GC限制内存大小
  memory?: number
}

/**
 * docker命令的通用执行器
 */
async function scriptExecutor(command: string) {
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
async function isExistImage(imageName: string) {
  const command = `docker images -q ${imageName}`
  const { code, stdout } = await VipExecutor.execCommand(command)
  return code === 0 && stdout.trim() !== ''
}

/**
 * 删除Docker镜像
 */
async function deleteImage(imageName: string) {
  const command = `docker rmi -f ${imageName}`
  return await VipExecutor.execCommand(command)
}

/**
 * 删除虚悬镜像
 */
async function deletePruneImages() {
  const command = 'docker image prune -f'
  return await VipExecutor.execCommand(command)
}

/**
 * 判断容器是否存在
 */
async function isExistContainer(containerName: string) {
  const command = `docker ps -aq -f name=${containerName}`
  const { code, stdout } = await VipExecutor.execCommand(command)

  return code === 0 && stdout.trim() !== ''
}

/**
 * 删除容器
 */
async function deleteContainer(containerName: string) {
  const command = `docker rm -f ${containerName}`
  return await VipExecutor.execCommand(command)
}

/**
 * 是否安装docker
 */
async function isExistDocker(args?: DockerOptions) {
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
async function isExistDockerCompose(args?: DockerOptions) {
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
async function pushImage(imageName: string) {
  const command = `docker push ${imageName}`
  await scriptExecutor(command)
}

/**
 * 构建Docker镜像
 * - 根据tag标记，推送到远程仓库
 * - 推送完成后，删除本地镜像
 */
async function buildImage(args: BuildImageDockerOptions) {
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

  const command = `docker build ${buildArg} ${targetParams} ${memoryParams} -t '${args.imageName}' .`

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

/**
 * 创建容器
 */
async function createContainer(args: CreateContainerOptions) {
  if (args.networkName && !args.ip) {
    console.log('只指定ip，没有指定容器局域网')
    VipNodeJS.exitProcess(1)
  }
  // 支持自定义网络
  const networkParams = args.networkName && args.ip ? `--network ${args.networkName} --ip` : ''

  const command = `docker run -d --name ${args.containerName} --restart=unless-stopped ${networkParams} ${args.imageName}`
  await VipExecutor.commandStandardExecutor(command)
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
  pushImage,
  buildImage,
  createContainer,
  scriptExecutor,
}
