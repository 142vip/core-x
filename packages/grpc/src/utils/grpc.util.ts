import type { ServiceDefinition } from '@grpc/grpc-js'
import type { ServiceClient } from '@grpc/grpc-js/build/src/make-client'
import type { MethodDefinition } from '@grpc/grpc-js/src/make-client'
import type { ServerReadableStream } from '@grpc/grpc-js/src/server-call'
import { ServiceMethodType } from '@142vip/grpc'
import { GRPC_ERROR_CODE, GrpcException } from '../core/grpc-exception'

/**
 * TODO，替换为优雅写法
 * 首字母转换为大写
 * @param str
 */
function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 首字母转换为小写
 * @param str
 */
// function lowerFirst(str: string): string {
//   return str.charAt(0).toLowerCase() + str.slice(1)
// }

/**
 * 将rpc对应的方法名转换为首字母大写
 * @param methodName
 */
export function methodNameToUpperFirst(methodName: string): string {
  return upperFirst(methodName)
}

/**
 * 生成唯一的traceId
 */
export function generateTraceId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

/**
 * 获取GRPC方法类型
 */
export function getMethodType(methodName: string, serviceDef: ServiceDefinition): ServiceMethodType {
  // 注意这里函数首字母大写
  const upperFirstMethodName = methodNameToUpperFirst(methodName)

  const method = serviceDef[upperFirstMethodName]

  if (method == null) {
    throw new Error(`GRPC方法${methodName}不存在`)
  }

  // 一元调用
  if (!method.requestStream && !method.responseStream) {
    return ServiceMethodType.Unary
  }
  // 客户端流
  if (method.requestStream && !method.responseStream) {
    return ServiceMethodType.ClientStream
  }

  // 服务端流
  if (!method.requestStream && method.responseStream) {
    return ServiceMethodType.ServerStream
  }

  // 双端流
  if (method.requestStream && method.responseStream) {
    return ServiceMethodType.BidiStream
  }
  const e = new Error('GRPC方法类型不存在，支持官网四种')

  throw new GrpcException(GRPC_ERROR_CODE.METHOD_TYPE_NOT_SUPPORTED, e)
}

export function getSimpleGrpcClient() {

}

export function getStreamGrpcClient() {

}

/**
 * 发送GRPC请求
 * 注意：rpcMethod.call(grpcService 这个写法，避免grpcClient的this指向异常
 * @param serviceClient
 * @param methodName
 * @param requestData
 */
export async function sendGrpcRequest<RequestData, ResponseData>(serviceClient: ServiceClient, methodName: string, requestData: RequestData): Promise<ResponseData | ResponseData[]> {
  const rpcMethod = serviceClient[methodName]
  if (rpcMethod == null) {
    const e = new Error(`GRPC方法不存在，method:${methodName}`)
    throw new GrpcException(GRPC_ERROR_CODE.METHOD_NOT_FOUND, e)
  }

  try {
    // 获取方法的定义
    const { requestStream, responseStream } = rpcMethod as unknown as MethodDefinition<RequestData, ResponseData>

    return await new Promise((resolve, reject) => {
      // 客户端非流式，服务端非流式
      if (!requestStream && !responseStream) {
        rpcMethod.call(serviceClient, requestData, (error: Error, response: ResponseData) => {
          if (error) {
            reject(error)
          }
          else {
            resolve(response)
          }
        })
      }

      // 客户端非流式，服务端流式
      if (!requestStream && responseStream) {
        const call = rpcMethod.call(serviceClient, requestData)

        // 流式
        warpGrpcCallResponse(call, resolve, reject)
      }

      // 客户端流式，服务端非流式
      if (requestStream && !responseStream) {
        const call = rpcMethod.call(serviceClient, (error: Error, response: ResponseData) => {
          if (error) {
            reject(error)
          }
          else {
            resolve(response)
          }
        })
        call.write(requestData)
        call.end()
      }

      // 客户端流式，服务端流式
      if (requestStream && responseStream) {
        const call = rpcMethod.call(serviceClient)

        // 发送
        call.write(requestData)
        call.end()

        // 返回流式
        warpGrpcCallResponse(call, resolve, reject)
      }
    })
  }
  catch (error) {
    throw new GrpcException(GRPC_ERROR_CODE.CLIENT_REQUEST, error as Error)
  }
}

/**
 * 包装 Grpc Call，将流式数据转换为Promise
 */
function warpGrpcCallResponse<T>(call: ServerReadableStream<any, T>, resolve: (value: T | T[]) => void, reject: (reason?: any) => void): void {
  const responseData: T[] = []

  /**
   * 监听数据
   */
  call.on('data', (data: T) => {
    resolve(data)
  })
  /**
   * 监听错误
   */
  call.on('error', (error: Error) => {
    reject(error)
  })
  /**
   * 监听流式结束
   */
  call.on('end', () => {
    // 兼容流式多次发送请求，一次返回数据
    resolve(responseData.length === 1 ? responseData[0] : responseData)
  })
}
