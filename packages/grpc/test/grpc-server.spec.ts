import {
  DEFAULT_LOADER_OPTIONS,
  exampleProto,
  GrpcConnectURI,
  GrpcExampleServerManager,
  GrpcExampleServiceMethod,
  GrpcProtoLoader,
  sendGrpcRequest,
} from '@142vip/grpc'
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals'

/**
 * 测试grpcServer服务器
 */
describe('grpcServer服务器', () => {
  const exampleManager = new GrpcExampleServerManager()
  const grpcServer = exampleManager.getGrpcServer()

  beforeAll(async () => {
    await exampleManager.listen(GrpcConnectURI.PORT_50001)
  })
  // 强制清理端口
  afterAll(() => {
    grpcServer.forceShutdown()
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
    const grpcProtoLoader = new GrpcProtoLoader(exampleProto)
    const options = grpcProtoLoader.getLoaderOptions()
    expect(options).toBeDefined()
    expect(options).toEqual(DEFAULT_LOADER_OPTIONS)
  })

  it('验证客户端调用', async () => {
    await grpcServer.listen(GrpcConnectURI.PORT_50003)
    const exampleServiceClient = exampleManager.getServiceClient(GrpcConnectURI.PORT_50001)
    const requestData = { serviceName: 'test grpc' }

    const res1 = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientToServer, requestData)
    expect(res1).toBeDefined()
    expect(res1).toHaveProperty('data')

    const res2 = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientStreamToServer, requestData)
    expect(res2).toBeDefined()
    expect(res2).toHaveProperty('data')

    const res3 = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientToServerStream, requestData)
    expect(res3).toBeDefined()
    expect(res3).toHaveProperty('data')

    const res4 = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientStreamToServerStream, requestData)
    expect(res4).toBeDefined()
    expect(res4).toHaveProperty('data')
  })
})
