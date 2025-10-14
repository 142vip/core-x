import type { GrpcServer } from '@142vip/grpc'
import { vipDetect } from '@142vip/utils'
import { beforeAll, expect } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV } from '../plugin.config'

describe('@142vip/egg-grpc-server 测试 - 单实例 ', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_SERVER
  let grpcServer

  beforeAll(() => {
    // 从agent.js加载的对象获取grpcServer
    grpcServer = app.agent.grpcServer
    expect(grpcServer).toBeDefined()
    console.log(1111, grpcServer)
  })

  afterAll(() => {
    grpcServer.getInstance('default').forceShutdown()
  })

  it('加载插件 - 检查默认实例', async () => {
    expect(grpcServer).toBeDefined()

    // 校验instanceNames
    const grpcServerInstanceNames = grpcServer.getInstanceNames()
    expect(grpcServerInstanceNames).toBeDefined()
    expect(grpcServerInstanceNames).toHaveLength(1)
    expect(grpcServerInstanceNames).toContain('default')
  })

  it('端口、连接地址检测', async () => {
    // 从agent.js加载的对象获取grpcServer
    const grpcServer = app.agent.grpcServer
    expect(grpcServer).toHaveProperty('getInstance')
    const grpcServerInstance = grpcServer.getInstance<GrpcServer>('default') as GrpcServer
    expect(grpcServerInstance).toBeDefined()

    // 连接地址
    const connectInfos = grpcServerInstance.getConnectInfo()
    expect(connectInfos).toBeDefined()
    expect(connectInfos).toHaveLength(1)

    // 确保每个端口都已被占用
    for (const { port } of connectInfos) {
      const occupied = await vipDetect.detectPort(port)
      expect(occupied).toBeTruthy()
    }
  })
})
