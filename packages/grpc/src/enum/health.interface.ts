import type { GrpcRequest, GrpcResponse } from './grpc.interface'

/**
 * 健康检查状态码
 */
export enum GrpcHealthStatus {
  /**
   * 未知
   */
  UNKNOWN = 'UNKNOWN',
  /**
   * 服务中
   */
  SERVING = 'SERVING',
  /**
   * 未服务中
   */
  NOT_SERVING = 'NOT_SERVING',

  SERVICE_UNKNOWN = 'SERVICE_UNKNOWN',
}

export enum GrpcHealthErrorCode {
  GRPC_STATUS_NOT_FOUND = 5,
}

export interface GrpcHealthStatusWatcher {
  (status: GrpcHealthStatus): void
}

/**
 * grpc服务端，标记整个服务状态
 */
export const GRPC_SERVER_METHOD_NAME = 'grpcServer'

/**
 * 健康检查，check、watch方法
 */
export interface GrpcHealthCheckOrWatchRequest extends GrpcRequest {
  serviceName: string
}

export type GrpcHealthCheckOrWatchResponse = GrpcResponse<string>

/**
 * 健康检查 List方法
 */
export interface GrpcHealthListRequest extends GrpcRequest {}
export interface GrpcHealthListDataResponse {
  [methodName: string]: GrpcHealthStatus
}
export type GrpcHealthListResponse = GrpcResponse<GrpcHealthListDataResponse>
