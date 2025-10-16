import type { ServiceClientConstructor } from '@grpc/grpc-js'

export type ServiceClientDefinitionMap = Map<string, ServiceClientConstructor>

/**
 * Grpc 连接信息
 */
export interface GrpcConnectInfo {
  /**
   * 连接地址
   */
  connectUri: string
  /**
   * 连接端口
   */
  port: number
}

/**
 * Grpc 连接地址
 */
export enum GrpcConnectURI {
  PORT_50001 = '127.0.0.1:50001',
  PORT_50002 = '127.0.0.1:50002',
  PORT_50003 = '127.0.0.1:50003',
}

/**
 * Grpc 服务端方法类型
 */
export enum ServiceMethodType {
  // 一元调用
  Unary = 'unary',
  ClientStream = 'clientStream',
  ServerStream = 'serverStream',
  BidiStream = 'bidiStream',
}

/**
 * GRPC方法实现
 */
export type ServiceMethodFuncImpl = <RequestType = any, ResponseType = any>(requestData: RequestType) => Promise<ResponseType>

/**
 * GRPC实现方法对应的对象
 */
export interface UntypedMethodImplementation {
  [name: string]: ServiceMethodFuncImpl
}

/**
 * Grpc服务调用，错误信息
 */
export interface GrpcTraceError {
  code: number
  message: string
  traceId: string
}

/**
 * Grpc统一返回结构
 */
export interface GrpcResponse<DataType> {
  error?: GrpcTraceError
  data?: DataType
}

/**
 * Grpc 请求格式
 */
export interface GrpcRequest {
  traceId?: string
}
