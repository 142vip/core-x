import type { UntypedMethodImplementation } from '@142vip/grpc'
import {
  clientStreamToServer,
  clientStreamToServerStream,
  clientToServer,
  clientToServerStream,
  DEFAULT_LOADER_OPTIONS,
  exampleProto,
  exampleProtoServicePath,
  GrpcConnectURI,
  GrpcServer,
  ProtoLoader,
} from '@142vip/grpc'
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals'

/**
 * 测试grpcServer服务器
 */
describe('grpcServer服务器', () => {
  const handlers = {
    clientToServer,
    clientStreamToServer,
    clientToServerStream,
    clientStreamToServerStream,
  }
  const protoLoader = new ProtoLoader(exampleProto)

  const grpcServer = new GrpcServer()

  beforeAll(() => {
    const serviceDef = protoLoader.getServerServiceDefinition(exampleProtoServicePath)
    grpcServer.registerService(serviceDef, handlers as UntypedMethodImplementation)
  })

  // 强制清理端口
  afterAll(() => {
    grpcServer.forceShutdown()
  })

  it('监听端口', async () => {
    // 监听
    const port = await grpcServer.listen(GrpcConnectURI.PORT_50001)
    expect(port).toBeDefined()
    expect(port).toBe(50001)
  })

  it('连接地址', () => {
    const connectUris = grpcServer.getConnectUris()

    expect(connectUris).toBeDefined()
    expect(connectUris).toHaveLength(1)
    expect(connectUris).toContain(GrpcConnectURI.PORT_50001)
    expect(connectUris).toEqual([GrpcConnectURI.PORT_50001])
  })

  it('启动两个连接地址', async () => {
    await grpcServer.listen(GrpcConnectURI.PORT_50002)
    const connectUris = grpcServer.getConnectUris()
    expect(connectUris).toBeDefined()
    expect(connectUris).toHaveLength(2)
    expect(connectUris).toContain(GrpcConnectURI.PORT_50001)
    expect(connectUris).toContain(GrpcConnectURI.PORT_50002)
  })

  it('默认配置', () => {
    const options = protoLoader.getLoaderOptions()
    expect(options).toBeDefined()
    expect(options).toEqual(DEFAULT_LOADER_OPTIONS)
  })
})
