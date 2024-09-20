import process from 'node:process'
import {
  VipDockerAddress,
  buildImage,
  deleteImage,
  getRecentGitCommit,
  isExistImage,
  pushImage,
} from '@142vip/utils'
import pkg from '../package.json'

async function test() {
  // 1-获取参数
  const aaa = process.argv.slice(2)
  console.log(111, aaa)

  // 镜像地址
  const imageName = `${VipDockerAddress}/docs:${pkg.name.split('/')[1]}-${pkg.version}`

  // 提交信息
  const { hash: gitHash } = await getRecentGitCommit()

  // 构建镜像
  await buildImage({
    imageName,
    buildArgs: [
      ['NEED_PROXY', true],
      ['APP_NAME', pkg.name],
      ['APP_VERSION', pkg.version],
      ['APP_DESCRIPTION', pkg.description],
      ['AUTHOR', pkg.authorInfo.name],
      ['EMAIL', pkg.authorInfo.email],
      ['HOME_PAGE', pkg.authorInfo.homePage],
      ['GIT_HASH', gitHash],
    ],
  })

  const exist = await isExistImage(imageName)

  if (exist) {
    // 上传镜像
    await pushImage(imageName)

    // 删除本地镜像
    await deleteImage(imageName)
  }
}

;(async () => {
  try {
    await test()
  }
  catch (e) {
    console.log('异常信息:', e)
  }
})()
