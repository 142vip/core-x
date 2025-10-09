import type { ExampleResponseDataType, GrpcResponse } from '@142vip/grpc'
import { exampleProtoServicePath, GrpcExampleServiceMethod } from '@142vip/grpc'
import { beforeAll, expect, it } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV } from '../plugin.config'

describe('@142vip/egg-grpc-client 测试 - 单实例 - default', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.GRPC_CLIENT
  let grpcClient
  let exampleClient

  beforeAll(() => {
    // 从agent.js加载的对象获取grpcServer
    grpcClient = app.grpcClient
    expect(grpcClient).toBeDefined()
  })

  /**
   * 获取Example RPC 客户端
   */
  beforeAll(async () => {
    exampleClient = await grpcClient.getService(exampleProtoServicePath)
    console.log('exampleClient===>', exampleClient)
  })

  it('加载插件 - 检查默认实例', async () => {
    expect(grpcClient).toBeDefined()

    // 校验instanceNames
    const grpcServerInstanceNames = grpcClient.getInstanceNames()
    expect(grpcServerInstanceNames).toBeDefined()
    expect(grpcServerInstanceNames).toHaveLength(1)
    expect(grpcServerInstanceNames).toContain('default')
  })

  it('检测服务路径', async () => {
    const servicePaths = await grpcClient.getServicePaths()
    expect(servicePaths).toBeDefined()
    expect(servicePaths).toHaveLength(1)
    expect(servicePaths).toContain(exampleProtoServicePath)
  })

  it('获取服务实例', async () => {
    expect(exampleClient).toBeDefined()
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
