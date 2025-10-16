import type { ServiceClientConstructor } from '@grpc/grpc-js'
import type grpcProtoLoader from '@grpc/proto-loader'

export interface VipProtoLoaderOptions extends grpcProtoLoader.Options {
}

/**
 * 解析后的GrpcObject
 * - 深度递归
 */
export interface ParsedGrpcObject {
  packageName: string
  serviceName: string
  serviceDef?: ServiceClientConstructor
}

export interface GrpcServicePath {
  servicePath: string
  packageName: string
  serviceName: string
  // serviceDef?: ServiceClientConstructor
}

export interface GrpcServiceDetail extends GrpcServicePath {
  ServiceClientConstructor?: ServiceClientConstructor
  // serviceDef?: ServiceDefinition
  /**
   * 方法原始名称
   */
  methodNames: string[]
  /**
   * 方法小写名
   */
  // methodLowerNames: string[]
  /**
   * service中的方法大写名
   */
  // methodUpperNames: string[]
}
