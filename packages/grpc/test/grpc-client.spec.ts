import { exampleProto, exampleProtoServicePath, GrpcClient, GrpcConnectURI, ProtoLoader } from '@142vip/grpc'
import { describe, expect, it } from '@jest/globals'

/**
 * 测试grpcClient客户端
 */
describe('grpcClient客户端', () => {
  const protoLoader = new ProtoLoader([exampleProto])

  const servicePaths = protoLoader.getServicePaths()
  const grpcClient = new GrpcClient(GrpcConnectURI.PORT_50001)

  it('检查客户端', () => {
    expect(grpcClient).toBeDefined()
    expect(grpcClient).toBeInstanceOf(GrpcClient)
  })

  it('获取服务路径', () => {
    expect(servicePaths).toHaveLength(1)
    expect(servicePaths).toContain(exampleProtoServicePath)
  })

  it('注册服务', () => {
    for (const servicePath of servicePaths) {
      const serviceConstructor = protoLoader.getClientServiceConstructor(servicePath)
      grpcClient.registerService(servicePath, serviceConstructor)
    }
  })

  it('获取服务实例', () => {
    const exampleServiceClient = grpcClient.getService<object>(exampleProtoServicePath)
    expect(exampleServiceClient).toBeDefined()
  })

  it('服务对应的方法', () => {
    const serviceClient = grpcClient.getService<any>(exampleProtoServicePath)
    expect(serviceClient).toBeDefined()
    expect(serviceClient.ClientToServer).toBeDefined()
    expect(typeof serviceClient.ClientToServer).toBe('function')

    expect(serviceClient.ClientStreamToServer).toBeDefined()
    expect(typeof serviceClient.ClientStreamToServer).toBe('function')

    expect(serviceClient.ClientToServerStream).toBeDefined()
    expect(typeof serviceClient.ClientToServerStream).toBe('function')

    expect(serviceClient.ClientStreamToServerStream).toBeDefined()
    expect(typeof serviceClient.ClientStreamToServerStream).toBe('function')
  })

  it('连接地址', () => {
    const connectURI = grpcClient.getConnectUri()
    expect(connectURI).toBeDefined()
    expect(connectURI).toBe(GrpcConnectURI.PORT_50001)
  })

  it('关闭连接', () => {
    const serviceSize = grpcClient.getServiceSize()
    expect(serviceSize).toBe(1)

    // 移除所有
    grpcClient.removeService()

    const currentServiceSize = grpcClient.getServiceSize()
    expect(currentServiceSize).toBe(0)
  })
})
