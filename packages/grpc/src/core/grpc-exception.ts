import type { GrpcRequest, GrpcTraceError } from '@142vip/grpc'
import { generateTraceId } from '@142vip/grpc'

/**
 * GRPC 错误码
 */
export enum GRPC_ERROR_CODE {
  /**
   * 未知错误
   */
  UNKNOWN = 2,
  /**
   * 客户端服务未注册
   */
  CLIENT_SERVICE_NOT_REGISTERED = 40421,
  /**
   * 方法未找到
   */
  METHOD_NOT_FOUND = 40422,
  /**
   * 方法类型不支持
   */
  METHOD_TYPE_NOT_SUPPORTED = 40402,

  /**
   * 参数错误
   */
  INVALID_ARGUMENT = 40001,

  /**
   * 服务端请求错误
   */
  CLIENT_REQUEST = 50081,

  /**
   * 服务端未知错误
   */
  SERVER_UNKNOWN = 50091,
  /**
   * 服务端handler处理错误码
   */
  HANDLE_UNARY_CALL = 50001,
  HANDLE_SERVER_STREAM_CELLl = 50002,
  HANDLE_CLIENT_STREAM_CALL = 50003,
  HANDLE_BIDI_STREAM_CALL = 50004,
  HANDLE_UNKNOWN = 50005,
  /**
   * 服务端 健康检查
   */
  HEALTH_STATUS_NOT_FOUND = 50011,
  HEALTH_LIST = 50012,

  /**
   * Proto 错误
   */
  PROTO_ARGUMENT_ERROR = 50021,
}

/**
 * GRPC 异常
 */
export class GrpcException extends Error {
  public readonly errorCode: GRPC_ERROR_CODE
  private readonly detailMessage: string

  constructor(errorCode: GRPC_ERROR_CODE, error?: Error) {
    let message = '服务错误'

    switch (errorCode / 100) {
      case 400:
        message = '参数错误'
        break
      case 404:
        message = '服务未发现'
        break
      case 500:
        message = '服务异常'
        break
      default:
        message = '服务错误'
        break
    }

    super(message)
    this.errorCode = errorCode
    this.detailMessage = error?.message ?? '出现异常，联系作者'
    // 临时
    console.log(this.errorCode, this.detailMessage)
  }
}

/**
 * 统一处理GRPC错误
 */
export function grpcErrorHandler<T extends GrpcRequest>(error: unknown, requestData: T): GrpcTraceError {
  let code = GRPC_ERROR_CODE.UNKNOWN
  let message = '未知错误'

  // GRPC 异常实例
  if (error instanceof GrpcException) {
    code = error.errorCode
    message = error.message
  }

  return {
    code,
    message,
    // 补充traceId , 用于追踪
    traceId: requestData.traceId ?? generateTraceId(),
  }
}
