import { execCommand } from '../utils'

interface NpmOptions {
  registry: string
  public: boolean
}

interface DockerOptions {
  // docker push xx
  image: string
  cleanUp: boolean
}

/**
 * 发布到docker
 * - 清理本地
 */
export async function publishDocker(args: DockerOptions) {
  // docker push xxx
  await execCommand(`docker push ${args.image}`)

  // 清理本地
  if (args.cleanUp) {
    await execCommand(`docker rmi ${args.image}`)
  }
}

/**
 * 发布到npm
 */
export async function publishNpm(args: NpmOptions) {
  // npm publish --access public --registry  https://registry.npmjs.org
  await execCommand('npm publish')

  if (args.registry != null) {
    console.log('发布到指定地址')
  }
}
