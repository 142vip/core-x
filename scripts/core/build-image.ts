import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import { VipDocker, VipGit, VipNodeJS, VipPackageJSON } from '@142vip/utils'

/**
 * 构建Docker镜像
 */
async function buildImageMain(): Promise<void> {
  try {
    // 获取package.json文件
    const { name, version, description } = VipPackageJSON.getPackageJSON<{ description: string }>()

    // 镜像地址
    const imageName = `${OPEN_SOURCE_ADDRESS.DOCKER_ALIYUNCS_VIP}/docs:${name.split('/')[1]}-${version}`

    // 最近一次提交信息
    const gitShortHash = VipGit.getRecentCommitShortHash()

    // 构建镜像
    await VipDocker.buildImage({
      imageName,
      buildArgs: [
        // 参数中是否包含 --proxy
        ['NEED_PROXY', VipNodeJS.getProcessArgv().includes('--proxy')],
        ['APP_NAME', name],
        ['APP_VERSION', version],
        ['APP_DESCRIPTION', description],
        ['AUTHOR', OPEN_SOURCE_AUTHOR.name],
        ['EMAIL', OPEN_SOURCE_AUTHOR.email],
        ['HOME_PAGE', OPEN_SOURCE_AUTHOR.homePage],
        ['GIT_HASH', gitShortHash],
      ],
      push: true,
      delete: true,
      logger: true,
    })
  }
  catch (e) {
    console.log('异常信息:', e)
  }
}

void buildImageMain()
