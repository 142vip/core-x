import { PluginLoadEnv } from '@142vip/egg'
import { app } from 'egg-mock/bootstrap'

describe('@142vip/egg-grpc-client 测试 - 单实例 - default', () => {
  process.env.EGG_SERVER_ENV = PluginLoadEnv.SIMPLE

  it('12312', () => {
    console.log('grpcClient', app)
    const aa = app.grpcClient.getInstanceNames()
    console.log(111, aa)
  })

  process.env.EGG_SERVER_ENV = ''
})
