import type { Command } from 'commander'
import { execCommand } from '@142vip/utils'
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

async function execPublish(args: PublishOptions) {
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
async function publishDocker(args: DockerOptions) {
  // docker push xxx
  await execCommand(`docker push ${args.image}`)

  // 清理本地镜像，默认不清理
  if (args.clean) {
    await execCommand(`docker rmi ${args.image}`)
  }
}

/**
 * 发布到npm
 */
async function publishNpm(args: NpmOptions) {
  // npm publish --access public --registry  https://registry.npmjs.org

  if (args.registry == null) {
    args.registry = 'https://registry.npmjs.org'
  }

  await execCommand(`npm publish --access public --registry=${args.registry}`)
}

/**
 * publish 命令入口
 * @param program
 */
export async function publishMain(program: Command) {
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
