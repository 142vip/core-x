import { PluginLoadType } from '@142vip/egg'
import { exampleProtoServicePath, GrpcConnectURI } from '@142vip/grpc'
import { beforeAll, describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV, PluginInstanceName } from '../plugin.config'
import { testGrpcClient } from './egg-grpc-client'

describe('@142vip/egg-grpc-client 测试 - 单实例 - default实例', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_CLIENT
  let grpcClient

  beforeAll(() => {
    // 从agent.js加载的对象获取grpcServer
    grpcClient = app.grpcClient
    expect(grpcClient).toBeDefined()
  })

  it('加载插件 - 检查默认实例', async () => {
    expect(grpcClient).toBeDefined()

    // 校验instanceNames
    const grpcServerInstanceNames = grpcClient.getInstanceNames()
    expect(grpcServerInstanceNames).toBeDefined()
    expect(grpcServerInstanceNames).toHaveLength(1)
    expect(grpcServerInstanceNames).toContain(PluginInstanceName.DEFAULT)
  })

  it('检测服务路径', async () => {
    const servicePaths = await grpcClient.getInstance().getServicePaths()
    expect(servicePaths).toBeDefined()
    expect(servicePaths).toHaveLength(1)
    expect(servicePaths).toContain(exampleProtoServicePath)
  })

  it('获取服务实例', async () => {
    const exampleClient = await grpcClient.getInstance().getService(exampleProtoServicePath)
    expect(exampleClient).toBeDefined()
  })
})

describe('@142vip/egg-grpc-client 测试 - 单实例 - 功能应用', () => {
  // eslint-disable-next-line ts/no-require-imports
  const { GrpcExampleServerManager } = require('@142vip/egg-grpc-server/example/example-grpc.js')
  const exampleGrpcServer = new GrpcExampleServerManager()

  beforeAll(async () => {
    await exampleGrpcServer.listen(GrpcConnectURI.PORT_50003)
  })
  afterAll(async () => {
    exampleGrpcServer.shutdown()
  })

  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_CLIENT
  testGrpcClient(PluginLoadType.SIMPLE)
})
