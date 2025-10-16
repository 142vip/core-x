import type { GrpcClient } from '@142vip/grpc'
import type { ServiceClient } from '@grpc/grpc-js/build/src/make-client'
import { PluginLoadType } from '@142vip/egg'
import { exampleProtoServicePath, GrpcExampleServiceMethod, sendGrpcRequest } from '@142vip/grpc'
import { beforeEach, describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { PluginInstanceName } from '../plugin.config'

function getExampleServiceClient(type: PluginLoadType, instanceName?: string): ServiceClient {
  let grpcClient: GrpcClient
  if (type === PluginLoadType.SIMPLE) {
    const instanceNames = app.grpcClient.getInstanceNames()
    expect(instanceNames).toEqual([PluginInstanceName.DEFAULT])
    grpcClient = app.grpcClient.getInstance()
  }
  else if (type === PluginLoadType.MULTIPLE) {
    const instanceNames = app.grpcClient.getInstanceNames()
    expect(instanceNames).toEqual([PluginInstanceName.EXAMPLE1, PluginInstanceName.EXAMPLE2])
    expect(instanceName).toBeDefined()
    expect(instanceNames.includes(instanceName)).toBeTruthy()
    grpcClient = app.grpcClient.getInstance(instanceName)
  }
  else {
    grpcClient = app.grpcClient
  }

  expect(grpcClient).toBeDefined()

  return grpcClient.getService<ServiceClient>(exampleProtoServicePath)
}

/**
 * 测试grpcClient客户端
 */
export function testGrpcClient(type: PluginLoadType, instanceName: string = PluginInstanceName.DEFAULT): void {
  describe('基于grpcClient实例，测试exampleProto对应的grpc方法', () => {
    let exampleServiceClient: ServiceClient
    /**
     * 获取Example RPC 客户端 Service
     */
    beforeEach(async () => {
      exampleServiceClient = getExampleServiceClient(type, instanceName)
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientToServer}`, async () => {
      // 调用匿名函数并获取响应
      const requestData = { name: GrpcExampleServiceMethod.ClientToServer }

      const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientToServer, requestData)

      console.log(`${GrpcExampleServiceMethod.ClientToServer} response===>`, response)

      expect(response).toBeDefined()
      expect(response).toHaveProperty('data')
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientStreamToServer}`, async () => {
      const requestData = { name: GrpcExampleServiceMethod.ClientStreamToServer }
      const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientStreamToServer, requestData)

      console.log(`${GrpcExampleServiceMethod.ClientStreamToServer} response===>`, response)

      expect(response).toBeDefined()
      expect(response).toHaveProperty('data')
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientToServerStream}`, async () => {
      const requestData = { name: GrpcExampleServiceMethod.ClientToServerStream }
      const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientToServerStream, requestData)

      console.log(`${GrpcExampleServiceMethod.ClientToServerStream} response===>`, response)
      expect(response).toBeDefined()
      expect(response).toHaveProperty('data')
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientStreamToServerStream}`, async () => {
      const requestData = { name: GrpcExampleServiceMethod.ClientStreamToServerStream }

      const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientStreamToServerStream, requestData)

      console.log(`${GrpcExampleServiceMethod.ClientStreamToServerStream} response===>`, response)
      expect(response).toBeDefined()
      expect(response).toHaveProperty('data')
    })
  })
}
