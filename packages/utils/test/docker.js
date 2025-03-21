import { VIP_DEPLOY_DOCKER_ENV, VipDocker } from '@142vip/utils'

(async () => {
  await VipDocker.isExistDocker({ logger: true })
  const exist = await VipDocker.isExistDockerCompose({ logger: true })
  console.log(111, exist)
  await VipDocker.buildImage({
    imageName: 'aaa',
    buildArgs: [
      ['aaa', 123],
      ['bb', 'go'],
    ],
  })

  console.log(await VipDocker.listContainerNames())
  console.log(await VipDocker.listRunningContainerNames())
  console.log(await VipDocker.listNoRunningContainerNames())
  console.log(await VipDocker.listContainerStatus())

  console.log(await VipDocker.getImageAddress('gitlab'))
  console.log(await VipDocker.listNetworkNames())
  console.log(await VipDocker.isExistNetwork(VIP_DEPLOY_DOCKER_ENV.NETWORK_NAME))
})()
