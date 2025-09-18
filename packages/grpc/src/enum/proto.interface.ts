import type { ServiceClientConstructor } from '@grpc/grpc-js'
import type protoLoader from '@grpc/proto-loader'

export interface VipProtoLoaderOptions extends protoLoader.Options {
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
