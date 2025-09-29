[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / grpcStreamHandler

# 函数: grpcStreamHandler()

> **grpcStreamHandler**(`methodType`, `methodFunc`): \<`RequestType`, `ResponseType`\>(`call`, `callback`) => `void` \| \<`RequestType`, `ResponseType`\>(`call`) => `Promise`\<`void`\> \| \<`RequestType`, `ResponseType`\>(`call`) => `void`

定义于: [core/grpc.handler.ts:44](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/core/grpc.handler.ts#L44)

处理GRPC流式调用，返回流对象

## 参数

### methodType

`Omit`\<[`ServiceMethodType`](../enumerations/ServiceMethodType.md), `"unary"`\>

### methodFunc

[`ServiceMethodFuncImpl`](../type-aliases/ServiceMethodFuncImpl.md)

## 返回

\<`RequestType`, `ResponseType`\>(`call`, `callback`) => `void`

客户端流

## 类型参数

### RequestType

`RequestType`

### ResponseType

`ResponseType`

## 参数

### call

`ServerReadableStream`\<`RequestType`, `ResponseType`\>

### callback

`sendUnaryData`\<[`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

## 返回

`void`

\<`RequestType`, `ResponseType`\>(`call`) => `Promise`\<`void`\>

服务端流

## 类型参数

### RequestType

`RequestType`

### ResponseType

`ResponseType`

## 参数

### call

`ServerWritableStream`\<`RequestType`, [`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

## 返回

`Promise`\<`void`\>

\<`RequestType`, `ResponseType`\>(`call`) => `void`

客户端、服务端，流式

## 类型参数

### RequestType

`RequestType`

### ResponseType

`ResponseType`

## 参数

### call

`ServerDuplexStream`\<`RequestType`, [`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

## 返回

`void`
