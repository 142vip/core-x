import type { GrpcRequest } from './enum/grpc.interface'

/**
 * 这里的traceId，可以选择不继承，根据实际业务需要决定
 */
export interface ExampleRequestDataType extends GrpcRequest {}

/**
 * 响应 数据格式 简单演示
 */
export interface ExampleResponseDataType {
  methodName: string
  message: string
}

export interface GrpcExampleServiceImpl {
  clientToServer: (requestData: ExampleRequestDataType) => Promise<ExampleResponseDataType>
  clientStreamToServer: (requestData: ExampleRequestDataType) => Promise<ExampleResponseDataType>
  clientToServerStream: (requestData: ExampleRequestDataType) => Promise<ExampleResponseDataType>
  clientStreamToServerStream: (requestData: ExampleRequestDataType) => Promise<ExampleResponseDataType>
}

export class GrpcExampleService implements GrpcExampleServiceImpl {
  /**
   * 普通一元调用
   * @param requestData
   */
  public async clientToServer(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
    console.log('request--->clientToServer:', requestData)
    return {
      message: JSON.stringify(requestData),
      methodName: 'clientToServer',
    }
  }

  /**
   * 客户端流式
   * @param requestData
   */
  public async clientStreamToServer(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
    console.log('request--->clientStreamToServer:', requestData)
    return {
      message: JSON.stringify(requestData),
      methodName: 'clientStreamToServer',
    }
  }

  /**
   * 服务端流式
   * @param requestData
   */
  public async clientToServerStream(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
    console.log('request--->clientToServerStream:', requestData)
    return {
      message: JSON.stringify(requestData),
      methodName: 'clientToServerStream',
    }
  }

  /**
   * 客户端、服务端，流式
   * @param requestData
   */
  public async clientStreamToServerStream(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
    console.log('request--->clientStreamToServerStream:', requestData)
    return {
      message: JSON.stringify(requestData),
      methodName: 'clientStreamToServerStream',
    }
  }
}

export const grpcExampleService = new GrpcExampleService()

/**
 * 普通一元调用
 * @param requestData
 */
export async function clientToServer(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
  return await grpcExampleService.clientToServer(requestData)
}

/**
 * 客户端流式
 * @param requestData
 */
export async function clientStreamToServer(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
  return await grpcExampleService.clientStreamToServer(requestData)
}

/**
 * 服务端流式
 * @param requestData
 */
export async function clientToServerStream(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
  return await grpcExampleService.clientToServerStream(requestData)
}

/**
 * 客户端、服务端，流式
 * @param requestData
 */
export async function clientStreamToServerStream(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
  return await grpcExampleService.clientStreamToServerStream(requestData)
}

/**
 * Grpc 示例服务方法
 */
export enum GrpcExampleServiceMethod {
  ClientToServer = 'ClientToServer',
  ClientStreamToServer = 'ClientStreamToServer',
  ClientToServerStream = 'ClientToServerStream',
  ClientStreamToServerStream = 'ClientStreamToServerStream',
}
