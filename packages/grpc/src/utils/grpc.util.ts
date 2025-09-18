import type { ServiceDefinition } from '@grpc/grpc-js'
import { ServiceMethodType } from '@142vip/grpc'

/**
 * TODO，替换为优雅写法
 * @param str
 */
function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

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

  throw new Error('GRPC方法类型不存在，支持官网四种')
}

export function getSimpleGrpcClient() {

}

export function getStreamGrpcClient() {

}
