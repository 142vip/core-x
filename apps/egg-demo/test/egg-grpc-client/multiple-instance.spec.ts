import { PluginLoadType } from '@142vip/egg'
import {
  exampleProtoServicePath,
  GrpcConnectURI,
} from '@142vip/grpc'
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV, PluginInstanceName } from '../plugin.config'
import { testGrpcClient } from './egg-grpc-client'

describe('@142vip/egg-grpc-client 实例测试', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_CLIENT_MULTIPLE
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
    expect(grpcServerInstanceNames).toHaveLength(2)
    expect(grpcServerInstanceNames).toContain(PluginInstanceName.EXAMPLE1)
    expect(grpcServerInstanceNames).toContain(PluginInstanceName.EXAMPLE2)
  })

  it(`检测服务路径、实例 - ${PluginInstanceName.EXAMPLE1}`, async () => {
    const client = grpcClient.getInstance(PluginInstanceName.EXAMPLE1)
    const servicePaths = await client.getServicePaths()
    expect(servicePaths).toBeDefined()
    expect(servicePaths).toHaveLength(1)
    expect(servicePaths).toContain(exampleProtoServicePath)

    const exampleClient1 = await client.getService(exampleProtoServicePath)
    expect(exampleClient1).toBeDefined()
  })
  it(`检测服务路径、实例 - ${PluginInstanceName.EXAMPLE2}`, async () => {
    const client = grpcClient.getInstance(PluginInstanceName.EXAMPLE2)
    const servicePaths = await client.getServicePaths()
    expect(servicePaths).toBeDefined()
    expect(servicePaths).toHaveLength(1)
    expect(servicePaths).toContain(exampleProtoServicePath)

    const exampleClient2 = await client.getService(exampleProtoServicePath)
    expect(exampleClient2).toBeDefined()
  })
})

describe(`@142vip/egg-grpc-client 功能测试 - 实例：${PluginInstanceName.EXAMPLE1}`, () => {
  // eslint-disable-next-line ts/no-require-imports
  const { GrpcExampleServerManager } = require('@142vip/egg-grpc-server/example/example-grpc.js')
  const exampleGrpcServer = new GrpcExampleServerManager()

  beforeAll(async () => {
    await exampleGrpcServer.listen(GrpcConnectURI.PORT_50001)
  })
  afterAll(async () => {
    exampleGrpcServer.shutdown()
  })
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_CLIENT_MULTIPLE
  testGrpcClient(PluginLoadType.MULTIPLE, PluginInstanceName.EXAMPLE1)
})

describe(`@142vip/egg-grpc-client 功能测试 - 实例：${PluginInstanceName.EXAMPLE2}`, () => {
  // eslint-disable-next-line ts/no-require-imports
  const { GrpcExampleServerManager } = require('@142vip/egg-grpc-server/example/example-grpc.js')
  const exampleGrpcServer = new GrpcExampleServerManager()

  beforeAll(async () => {
    await exampleGrpcServer.listen(GrpcConnectURI.PORT_50002)
  })
  afterAll(async () => {
    exampleGrpcServer.shutdown()
  })
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_CLIENT_MULTIPLE
  testGrpcClient(PluginLoadType.MULTIPLE, PluginInstanceName.EXAMPLE2)
})
