import type { GrpcServer } from '@142vip/grpc'
import { vipDetect } from '@142vip/utils'
import { beforeAll, expect } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV, PluginInstanceName } from '../plugin.config'

describe('@142vip/egg-grpc-server 测试 - 多实例 ', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_SERVER_MULTIPLE
  let grpcServer

  beforeAll(() => {
    // 从agent.js加载的对象获取grpcServer
    grpcServer = app.agent.grpcServer
    expect(grpcServer).toBeDefined()
  })

  afterAll(() => {
    const instances = grpcServer.getInstanceNames()
    instances.forEach((instanceName: string) => {
      app.agent.grpcServer.getInstance(instanceName).forceShutdown()
    })
  })

  it(`加载插件 - 检测实例 - ${PluginInstanceName.EXAMPLE1}`, async () => {
    expect(grpcServer).toBeDefined()

    // 校验instanceNames
    const grpcServerInstanceNames = grpcServer.getInstanceNames()
    expect(grpcServerInstanceNames).toBeDefined()
    expect(grpcServerInstanceNames).toHaveLength(2)
    expect(grpcServerInstanceNames).toContain(PluginInstanceName.EXAMPLE1)

    const example1Instance = grpcServer.getInstance(PluginInstanceName.EXAMPLE1)
    expect(example1Instance).toBeDefined()
  })

  it(`加载插件 - 检测实例 - ${PluginInstanceName.EXAMPLE2}`, async () => {
    expect(grpcServer).toBeDefined()

    // 校验instanceNames
    const grpcServerInstanceNames = grpcServer.getInstanceNames()
    expect(grpcServerInstanceNames).toBeDefined()
    expect(grpcServerInstanceNames).toHaveLength(2)
    expect(grpcServerInstanceNames).toContain(PluginInstanceName.EXAMPLE2)

    const example2Instance = grpcServer.getInstance(PluginInstanceName.EXAMPLE2)
    expect(example2Instance).toBeDefined()
  })

  it(`端口、连接地址检测 - ${PluginInstanceName.EXAMPLE1}`, async () => {
    // 从agent.js加载的对象获取grpcServer
    const grpcServer = app.agent.grpcServer
    await checkInstancePort(grpcServer, PluginInstanceName.EXAMPLE1)
  })

  it(`端口、连接地址检测 - ${PluginInstanceName.EXAMPLE2}`, async () => {
    // 从agent.js加载的对象获取grpcServer
    const grpcServer = app.agent.grpcServer
    await checkInstancePort(grpcServer, PluginInstanceName.EXAMPLE2)
  })
})

async function checkInstancePort(grpcServer: any, instanceName: PluginInstanceName): Promise<void> {
  const grpcServerInstance = grpcServer.getInstance(instanceName) as GrpcServer
  const connectInfos = grpcServerInstance.getConnectInfo()
  expect(connectInfos).toBeDefined()

  // 确保每个端口都已被占用
  for (const { port } of connectInfos) {
    const occupied = await vipDetect.detectPort(port)
    expect(occupied).toBeTruthy()
  }
}
