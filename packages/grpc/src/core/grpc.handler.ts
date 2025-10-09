import type { GrpcResponse, ServiceMethodFuncImpl } from '@142vip/grpc'
import type {
  sendUnaryData,
  ServerDuplexStream,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
} from '@grpc/grpc-js'
import { ServiceMethodType } from '@142vip/grpc'
/**
 * 处理GRPC一元调用，不涉及流
 * - 异步抓换为同步处理
 * - async/await
 */
export function grpcSimpleHandler(methodFunc: ServiceMethodFuncImpl) {
  /**
   * 处理一元调用，不涉及流
   */
  async function handleUnaryCall<RequestType, ResponseType>(
    call: ServerUnaryCall<RequestType, ResponseType>,
    callback: sendUnaryData<GrpcResponse<ResponseType>>,
  ): Promise<void> {
    const requestData = call.request
    try {
      // 执行
      const responseData = await methodFunc<RequestType, ResponseType>(requestData)

      callback(null, { data: responseData })
    }
    catch {
      callback(null, { error: { message: handleUnaryCall.name, traceId: '123' } })
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
  function handleClientStreamingCall<RequestType, ResponseType>(
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
      catch {
        callback(null, { error: { message: handleClientStreamingCall.name, traceId: '123' } })
      }
    })
  }

  /**
   * 服务端流
   */
  async function handleServerStreamingCall<RequestType, ResponseType>(
    call: ServerWritableStream<RequestType, GrpcResponse<ResponseType>>,
  ): Promise<void> {
    const requestData = call.request

    try {
      const responseData = await methodFunc<RequestType, ResponseType>(requestData)
      call.write({ data: responseData })
    }
    catch {
      call.write({ error: { message: handleServerStreamingCall.name, traceId: '123' } })
    }

    // 结束
    call.end()
  }

  /**
   * 客户端、服务端，流式
   */
  function handleBidiStreamingCall<RequestType, ResponseType>(
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
        console.log(111, error)
        call.write({ error: { message: handleBidiStreamingCall.name, traceId: '123' } })
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
    throw new Error('grpc method type not support, reference: https://grpc.io/docs/languages/node/basics/')
  }
}
