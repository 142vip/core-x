import { VipDocker } from '@142vip/utils';

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
})()
