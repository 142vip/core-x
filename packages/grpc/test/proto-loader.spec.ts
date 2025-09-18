import type { ServiceDefinition } from '@grpc/grpc-js'
import {
  DEFAULT_LOADER_OPTIONS,
  exampleProto,
  exampleProtoPackageName,
  exampleProtoServicePath,
  GrpcExampleServiceMethod,
  healthProto,
  healthProtoPackageName,
  healthProtoServicePath,
  ProtoLoader,
  protos,
  testProto,
  testProtoPackageName,
  testProtoSimpleServicePath,
  testProtoStreamServicePath,
} from '@142vip/grpc'
import { describe, expect, it } from '@jest/globals'

/**
 * 简单rpc 函数功能测试
 * @param simpleServiceDef
 * @param serviceMethod
 */
function expectSimpleServiceDef(simpleServiceDef: ServiceDefinition, serviceMethod: string): void {
  const SimpleServiceMethodNames = Object.keys(simpleServiceDef)
  expect(SimpleServiceMethodNames).toContain(serviceMethod)
  const { ClientToServer } = simpleServiceDef

  // 简单rpc
  expect(ClientToServer).toBeDefined()
  expect(ClientToServer.requestStream).toBe(false)
  expect(ClientToServer.responseStream).toBe(false)
}

/**
 * 流式rpc 函数功能测试
 * @param streamServiceDef
 * @param serviceMethods
 */
function expectStreamServiceDef(streamServiceDef: ServiceDefinition, serviceMethods: string[]): void {
  expect(streamServiceDef).toBeDefined()
  const methodNames = Object.keys(streamServiceDef)

  for (const serviceMethod of serviceMethods) {
    expect(methodNames).toContain(serviceMethod)
  }

  const {
    ClientStreamToServer,
    ClientToServerStream,
    ClientStreamToServerStream,
  } = streamServiceDef

  // 客户端流式rpc
  expect(ClientStreamToServer).toBeDefined()
  expect(ClientStreamToServer.requestStream).toBe(true)
  expect(ClientStreamToServer.responseStream).toBe(false)

  // 服务端流式rpc
  expect(ClientToServerStream).toBeDefined()
  expect(ClientToServerStream.requestStream).toBe(false)
  expect(ClientToServerStream.responseStream).toBe(true)

  // 客户端、服务端流式rpc
  expect(ClientStreamToServerStream).toBeDefined()
  expect(ClientStreamToServerStream.requestStream).toBe(true)
  expect(ClientStreamToServerStream.responseStream).toBe(true)
}

/**
 * 测试proto-loader加载测试
 */
describe('proto-loader加载测试', () => {
  const protoLoader = new ProtoLoader(protos)
  it('测试解析，解析多个proto文件', () => {
    const packageNames = protoLoader.getPackageNames()

    expect(packageNames).toBeDefined()
    expect(packageNames).toHaveLength(3)
    expect(packageNames).toContain(healthProtoPackageName)
    expect(packageNames).toContain(testProtoPackageName)
    expect(packageNames).toContain(exampleProtoPackageName)

    const servicePaths = protoLoader.getServicePaths()
    expect(servicePaths).toBeDefined()
    expect(servicePaths).toHaveLength(4)
    expect(servicePaths).toContain(healthProtoServicePath)
    expect(servicePaths).toContain(testProtoSimpleServicePath)
    expect(servicePaths).toContain(testProtoStreamServicePath)
    expect(servicePaths).toContain(exampleProtoServicePath)
  })

  it('proto文件，有效路径', () => {
    expect(protos).toHaveLength(3)
    expect(protos).toContain(healthProto)
    expect(protos).toContain(testProto)
    expect(protos).toContain(exampleProto)
  })

  it('测试解析 test.proto', () => {
    const testProtoLoader = new ProtoLoader(testProto)
    const defaultLoaderOptions = testProtoLoader.getLoaderOptions()
    expect(defaultLoaderOptions).toEqual(DEFAULT_LOADER_OPTIONS)
    // 包名唯一
    const packageNames = testProtoLoader.getPackageNames()
    expect(packageNames).toHaveLength(1)
    expect(packageNames[0]).toBe(testProtoPackageName)

    const servicePaths = testProtoLoader.getServicePaths()
    expect(servicePaths).toHaveLength(2)
    expect(servicePaths[0]).toBe(testProtoSimpleServicePath)
    expect(servicePaths[1]).toBe(testProtoStreamServicePath)

    const simpleServiceDef = testProtoLoader.getServerServiceDefinition(testProtoSimpleServicePath)
    // 简单rpc
    expectSimpleServiceDef(simpleServiceDef, GrpcExampleServiceMethod.ClientToServer)

    // stream service
    const streamServiceDef = testProtoLoader.getServerServiceDefinition(testProtoStreamServicePath)
    // 流式rpc
    expectStreamServiceDef(streamServiceDef, [
      GrpcExampleServiceMethod.ClientStreamToServer,
      GrpcExampleServiceMethod.ClientToServerStream,
      GrpcExampleServiceMethod.ClientStreamToServerStream,
    ])
  })

  it('测试解析 health.proto', () => {
    const healthProtoLoader = new ProtoLoader(healthProto)

    const packageNames = healthProtoLoader.getPackageNames()
    expect(packageNames).toHaveLength(1)
    expect(packageNames[0]).toBe(healthProtoPackageName)

    const servicePaths = healthProtoLoader.getServicePaths()
    expect(servicePaths).toHaveLength(1)
    expect(servicePaths[0]).toBe(healthProtoServicePath)

    const healthServiceDef = healthProtoLoader.getServerServiceDefinition(healthProtoServicePath)

    expect(healthServiceDef).toBeDefined()
    const methodNames = Object.keys(healthServiceDef)
    expect(methodNames).toHaveLength(3)
    expect(methodNames).toEqual(['Check', 'Watch', 'List'])

    const { Watch, Check, List } = healthServiceDef

    expect(Watch).toBeDefined()
    expect(Watch.requestStream).toBe(false)
    expect(Watch.responseStream).toBe(true)

    expect(Check).toBeDefined()
    expect(Check.requestStream).toBe(false)
    expect(Check.responseStream).toBe(false)

    expect(List).toBeDefined()
    expect(List.requestStream).toBe(false)
    expect(List.responseStream).toBe(false)
  })

  it('测试解析 example.proto', () => {
    const exampleProtoLoader = new ProtoLoader(exampleProto)

    const packageNames = exampleProtoLoader.getPackageNames()
    expect(packageNames).toHaveLength(1)
    expect(packageNames[0]).toBe(exampleProtoPackageName)

    const servicePaths = exampleProtoLoader.getServicePaths()
    expect(servicePaths).toHaveLength(1)
    expect(servicePaths[0]).toBe(exampleProtoServicePath)
    expect(servicePaths).toContain(exampleProtoServicePath)

    const serviceDef = exampleProtoLoader.getServerServiceDefinition(exampleProtoServicePath)

    // 简单rpc
    expectSimpleServiceDef(serviceDef, GrpcExampleServiceMethod.ClientToServer)

    // 流式rpc
    expectStreamServiceDef(serviceDef, [
      GrpcExampleServiceMethod.ClientStreamToServer,
      GrpcExampleServiceMethod.ClientToServerStream,
      GrpcExampleServiceMethod.ClientStreamToServerStream,
    ])
  })
})
