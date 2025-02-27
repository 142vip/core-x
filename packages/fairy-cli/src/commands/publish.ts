import type { VipCommander } from '@142vip/utils'
import { VipExecutor } from '@142vip/utils'
import { CliCommandEnum } from '../shared'

export type PublishOptions = NpmOptions & DockerOptions

interface NpmOptions {
  registry: string
  public: boolean
  npm: boolean
}

interface DockerOptions {
  // docker push xx
  image: string
  docker: boolean
  clean: boolean
}

async function execPublish(args: PublishOptions): Promise<void> {
  // npm发包
  if (args.npm) {
    await publishNpm(args)
  }

  // docker 推送镜像
  if (args.docker) {
    await publishDocker(args)
  }
}

/**
 * 发布到docker
 * - 清理本地
 */
async function publishDocker(args: DockerOptions): Promise<void> {
  // docker push xxx
  await VipExecutor.execCommand(`docker push ${args.image}`)

  // 清理本地镜像，默认不清理
  if (args.clean) {
    await VipExecutor.execCommand(`docker rmi ${args.image}`)
  }
}

/**
 * 发布到npm
 */
async function publishNpm(args: NpmOptions): Promise<void> {
  // npm publish --access public --registry  https://registry.npmjs.org

  if (args.registry == null) {
    args.registry = 'https://registry.npmjs.org'
  }

  await VipExecutor.execCommand(`npm publish --access public --registry=${args.registry}`)
}

/**
 * publish 命令入口
 */
export async function publishMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.PUBLISH)
    .description('publish to remote platform，eg. Docker Image & Npm Package')
    .option('-d,--docker', 'publish to Docker', false)
    .option('-n,--npm', 'publish to Npm', false)
    .option('-c --clean', 'clean after publishing', false)
    .option('--registry', 'npm registry address', 'https://registry.npmjs.org')
    .action(async (args: PublishOptions) => {
      await execPublish(args)
    })
}
