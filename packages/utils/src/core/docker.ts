import * as process from 'node:process'
import { commandStandardExecutor, execCommand } from './exec'
import { VipLogger } from './logger'
import { VipSymbols } from './color'

const vipLog = new VipLogger()

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
    const errorCode = await commandStandardExecutor(command)
    if (errorCode !== 0) {
      vipLog.error(`Error Code: ${errorCode}`, { startLabel: 'commandStandardExecutor' })
      process.exit(1)
    }
  }
  catch {
    // 构建镜像出错时，直接退出
    process.exit(1)
  }
}

/**
 * 判断是否存在镜像
 */
async function isExistImage(imageName: string) {
  const command = `docker images -q ${imageName}`
  const { code, stdout } = await execCommand(command)
  return code === 0 && stdout.trim() !== ''
}

/**
 * 删除Docker镜像
 */
async function deleteImage(imageName: string) {
  const command = `docker rmi -f ${imageName}`
  return await execCommand(command)
}

/**
 * 删除虚悬镜像
 */
async function deletePruneImages() {
  const command = 'docker image prune -f'
  return await execCommand(command)
}

/**
 * 判断容器是否存在
 */
async function isExistContainer(containerName: string) {
  const command = `docker ps -aq -f name=${containerName}`
  const { code, stdout } = await execCommand(command)

  return code === 0 && stdout.trim() !== ''
}

/**
 * 删除容器
 */
async function deleteContainer(containerName: string) {
  const command = `docker rm -f ${containerName}`
  return await execCommand(command)
}

/**
 * 是否安装docker
 */
async function isExistDocker(args?: DockerOptions) {
  const command = 'docker -v'
  const { code, stdout, stderr } = await execCommand(command)

  // 打印日志
  if (args?.logger) {
    const vipLog = new VipLogger()
    if (code === 0) {
      vipLog.log(`检测到docker，版本信息：\n`, { startLabel: VipSymbols.success })
      vipLog.log(stdout)
    }
    else {
      vipLog.log(`未检测到docker，请先安装!!\n`, { startLabel: VipSymbols.error })
      vipLog.error(stderr)
    }
  }
  return code === 0 && stdout.includes('Docker')
}

/**
 * 是否安装docker-compose
 */
async function isExistDockerCompose(args?: DockerOptions) {
  const command = 'docker-compose -v'
  const { code, stdout, stderr } = await execCommand(command)

  // 打印日志
  if (args?.logger) {
    if (code === 0) {
      vipLog.log(`检测到docker-compose，版本信息：\n`, { startLabel: VipSymbols.success })
      vipLog.log(stdout)
    }
    else {
      vipLog.log(`未检测到docker-compose，请先安装!!\n`, { startLabel: VipSymbols.error })
      vipLog.error(stderr)
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
    vipLog.log(`执行的命令：\n`, { startLabel: VipSymbols.success })
    vipLog.log(`${command}\n`, { startLabel: VipSymbols.success })
  }
  vipLog.log(args.imageName, { startLabel: '构建镜像' })

  await scriptExecutor(command)

  if (args.push) {
    const exist = await isExistImage(args.imageName)

    if (exist) {
      vipLog.log(args.imageName, { startLabel: '推送镜像' })
      await pushImage(args.imageName)
    }
  }

  // 推送完删除
  if (args.push && args.delete) {
    vipLog.log(args.imageName, { startLabel: '删除镜像' })
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
    process.exit(1)
  }
  // 支持自定义网络
  const networkParams = args.networkName && args.ip ? `--network ${args.networkName} --ip` : ''

  const command = `docker run -d --name ${args.containerName} --restart=unless-stopped ${networkParams} ${args.imageName}`
  await commandStandardExecutor(command)
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
