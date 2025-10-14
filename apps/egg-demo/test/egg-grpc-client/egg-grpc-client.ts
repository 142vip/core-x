import type { ExampleResponseDataType, GrpcClient, GrpcResponse } from '@142vip/grpc'
import type { ServiceClient } from '@grpc/grpc-js/build/src/make-client'
import { PluginLoadType } from '@142vip/egg'
import { exampleProtoServicePath, GrpcExampleServiceMethod } from '@142vip/grpc'
import { beforeEach, describe, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { PluginInstanceName } from '../plugin.config'

function getExampleClient(type: PluginLoadType, instanceName?: string): ServiceClient {
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
    let exampleClient
    /**
     * 获取Example RPC 客户端
     */
    beforeEach(async () => {
      exampleClient = getExampleClient(type, instanceName)
      console.log('exampleClient===>', exampleClient)
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientToServer}`, async () => {
      try {
        // 调用匿名函数并获取响应
        const response = await new Promise((resolve, reject) => {
          exampleClient.clientToServer({ name: GrpcExampleServiceMethod.ClientToServer }, (error: Error, response: GrpcResponse<ExampleResponseDataType>) => {
            if (error) {
              reject(error)
            }
            else {
              resolve(response)
            }
          })
        })

        console.log(`${GrpcExampleServiceMethod.ClientToServer} response===>`, response)

        expect(response).toBeDefined()
        expect(response).toHaveProperty('data')
      }
      catch (error) {
        console.error('Error calling clientToServer:', error)
        throw error
      }
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientStreamToServer}`, async () => {
      const response = await new Promise((resolve, reject) => {
        const call = exampleClient.clientStreamToServer((error: Error, response: GrpcResponse<ExampleResponseDataType>) => {
          if (error) {
            reject(error)
          }
          else {
            resolve(response)
          }
        })
        // 发送数据
        call.write({ name: GrpcExampleServiceMethod.ClientStreamToServer })
        // 发送动作结束
        call.end()
      })

      console.log(`${GrpcExampleServiceMethod.ClientStreamToServer} response===>`, response)

      expect(response).toBeDefined()
      expect(response).toHaveProperty('data')
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientToServerStream}`, async () => {
      const response = await new Promise((resolve, reject) => {
        const call = exampleClient.clientToServerStream({ name: GrpcExampleServiceMethod.ClientToServerStream })

        const result: GrpcResponse<ExampleResponseDataType>[] = []
        // 发送数据后的返回
        call.on('data', (data: GrpcResponse<ExampleResponseDataType>): void => {
          console.log('Received data:', data)
          result.push(data)
        })

        // 发现错误
        call.on('error', (error: Error): void => {
          reject(error)
        })

        // 接送数据
        call.on('end', (): void => {
          console.log('Stream ended')
          resolve(result)
        })
      })

      console.log(`${GrpcExampleServiceMethod.ClientToServerStream} response===>`, response)
      expect(response).toBeDefined()
    })

    it(`测试exampleProto文件函数调用 - ${GrpcExampleServiceMethod.ClientStreamToServerStream}`, async () => {
      const response = await new Promise((resolve, reject) => {
        const call = exampleClient.clientStreamToServerStream()

        // 发送数据
        call.write({ name: GrpcExampleServiceMethod.ClientStreamToServerStream })
        call.end()

        // 接收数据
        const result: GrpcResponse<ExampleResponseDataType>[] = []
        // 发送数据后的返回
        call.on('data', (data: GrpcResponse<ExampleResponseDataType>): void => {
          console.log('Received data:', data)
          result.push(data)
        })

        // 发现错误
        call.on('error', (error: Error): void => {
          reject(error)
        })

        // 接送数据
        call.on('end', (): void => {
          console.log('Stream ended')
          resolve(result)
        })
      })

      console.log(`${GrpcExampleServiceMethod.ClientStreamToServerStream} response===>`, response)
      expect(response).toBeDefined()
      expect(response).toHaveLength(1)
    })
  })
}
