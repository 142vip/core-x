import type { GrpcRequest } from './enum/grpc.interface'

/**
 * 这里的traceId，可以选择不继承，根据实际业务需要决定
 */
interface ExampleRequestDataType extends GrpcRequest {}

/**
 * 响应 数据格式 简单演示
 */
interface ExampleResponseDataType {
  methodName: string
  message: string
}

/**
 * 普通一元调用
 * @param requestData
 */
export async function clientToServer(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
  console.log('call.handler.type--->clientToServer:', requestData)
  return {
    message: JSON.stringify(requestData),
    methodName: 'clientToServer',
  }
}

/**
 * 客户端流式
 * @param requestData
 */
export async function clientStreamToServer(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
  console.log('call.handler.type--->clientStreamToServer:', requestData)
  return {
    message: JSON.stringify(requestData),
    methodName: 'clientStreamToServer',
  }
}

/**
 * 服务端流式
 * @param requestData
 */
export async function clientToServerStream(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
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
export async function clientStreamToServerStream(requestData: ExampleRequestDataType): Promise<ExampleResponseDataType> {
  console.log('request--->clientStreamToServerStream:', requestData)
  return {
    message: JSON.stringify(requestData),
    methodName: 'clientStreamToServerStream',
  }
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
