import { VipDocker } from '@142vip/utils';

(async () => {
  await VipDocker.isInstallDocker({ logger: true })
  const exist = await VipDocker.isInstallDockerCompose({ logger: true })
  console.log(111, exist)
  await VipDocker.buildImage({
    imageName: 'aaa',
    buildArgs: [
      ['aaa', 123],
      ['bb', 'go'],
    ],
  })
})()
