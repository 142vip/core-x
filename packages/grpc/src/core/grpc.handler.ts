import type {
  sendUnaryData,
  ServerDuplexStream,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
} from '@grpc/grpc-js'
import type { GrpcRequest, GrpcResponse, ServiceMethodFuncImpl } from '../enum/grpc.interface'
import { ServiceMethodType } from '../enum/grpc.interface'
import { GRPC_ERROR_CODE, grpcErrorHandler, GrpcException } from './grpc-exception'

/**
 * 处理GRPC一元调用，不涉及流
 * - 异步抓换为同步处理
 * - async/await
 */
export function grpcSimpleHandler(methodFunc: ServiceMethodFuncImpl) {
  /**
   * 处理一元调用，不涉及流
   */
  async function handleUnaryCall<RequestType extends GrpcRequest, ResponseType>(
    call: ServerUnaryCall<RequestType, ResponseType>,
    callback: sendUnaryData<GrpcResponse<ResponseType>>,
  ): Promise<void> {
    const requestData = call.request

    try {
      // 执行
      const responseData = await methodFunc<RequestType, ResponseType>(requestData)

      callback(null, { data: responseData })
    }
    catch (error) {
      const e = new GrpcException(GRPC_ERROR_CODE.HANDLE_UNARY_CALL, error as Error)
      callback(null, { error: grpcErrorHandler(e, requestData) })
    }
  }

  return handleUnaryCall
}

/**
 * 处理GRPC流式调用，返回流对象
 */
export function grpcStreamHandler(methodType: Omit<ServiceMethodType, 'unary'>, methodFunc: ServiceMethodFuncImpl) {
  /**
   * 客户端流
   */
  function handleClientStreamingCall<RequestType extends GrpcRequest, ResponseType>(
    call: ServerReadableStream<RequestType, ResponseType>,
    callback: sendUnaryData<GrpcResponse<ResponseType>>,
  ): void {
    let requestData: RequestType

    /**
     * 优化这里的数据处理逻辑
     */
    call.on('data', (data: RequestType) => {
      requestData = data
    })

    call.on('end', async () => {
      try {
        // 执行
        const responseData = await methodFunc<RequestType, ResponseType>(requestData)
        callback(null, { data: responseData })
      }
      catch (error) {
        const e = new GrpcException(GRPC_ERROR_CODE.HANDLE_CLIENT_STREAM_CALL, error as Error)
        callback(null, { error: grpcErrorHandler(e, requestData) })
      }
    })
  }

  /**
   * 服务端流
   */
  async function handleServerStreamingCall<RequestType extends GrpcRequest, ResponseType>(
    call: ServerWritableStream<RequestType, GrpcResponse<ResponseType>>,
  ): Promise<void> {
    const requestData = call.request

    try {
      const responseData = await methodFunc<RequestType, ResponseType>(requestData)
      call.write({ data: responseData })
    }
    catch (error) {
      const e = new GrpcException(GRPC_ERROR_CODE.HANDLE_SERVER_STREAM_CELLl, error as Error)
      call.write({ error: grpcErrorHandler(e, requestData) })
    }

    // 结束
    call.end()
  }

  /**
   * 客户端、服务端，流式
   */
  function handleBidiStreamingCall<RequestType extends GrpcRequest, ResponseType>(
    call: ServerDuplexStream<RequestType, GrpcResponse<ResponseType>>,
  ): void {
    // 流，接收数据
    call.on('data', async (requestData: RequestType) => {
      try {
        const responseData = await methodFunc<RequestType, ResponseType>(requestData)
        // 流写回
        call.write({ data: responseData })
      }
      catch (error) {
        const e = new GrpcException(GRPC_ERROR_CODE.HANDLE_BIDI_STREAM_CALL, error as Error)
        call.write({ error: grpcErrorHandler(e, requestData) })
      }
    })

    // 结束
    call.on('end', () => {
      call.end()
    })
  }

  if (methodType === ServiceMethodType.ClientStream) {
    return handleClientStreamingCall
  }
  else if (methodType === ServiceMethodType.ServerStream) {
    return handleServerStreamingCall
  }
  else if (methodType === ServiceMethodType.BidiStream) {
    return handleBidiStreamingCall
  }
  else {
    const error = new Error('grpc method type not support, reference: https://grpc.io/docs/languages/node/basics/')
    throw new GrpcException(GRPC_ERROR_CODE.HANDLE_UNKNOWN, error)
  }
}
