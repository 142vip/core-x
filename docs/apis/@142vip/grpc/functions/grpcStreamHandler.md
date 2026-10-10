[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / grpcStreamHandler

# 函数: grpcStreamHandler()

> **grpcStreamHandler**(`methodType`, `methodFunc`): (\<`RequestType`, `ResponseType`\>(`call`, `callback`) => `void`) \| (\<`RequestType`, `ResponseType`\>(`call`) => `Promise`\<`void`\>) \| (\<`RequestType`, `ResponseType`\>(`call`) => `void`)

定义于: [core/grpc.handler.ts:45](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/grpc/src/core/grpc.handler.ts#L45)

处理GRPC流式调用，返回流对象

## 参数

### methodType

`Omit`\<[`ServiceMethodType`](../enumerations/ServiceMethodType.md), `"unary"`\>

### methodFunc

[`ServiceMethodFuncImpl`](../type-aliases/ServiceMethodFuncImpl.md)

## 返回

### 函数

\<`RequestType`, `ResponseType`\>(`call`, `callback`) => `void`

客户端流

#### 类型参数

##### RequestType

`RequestType` *extends* [`GrpcRequest`](../interfaces/GrpcRequest.md)

##### ResponseType

`ResponseType`

#### 参数

##### call

`ServerReadableStream`\<`RequestType`, `ResponseType`\>

##### callback

`sendUnaryData`\<[`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

#### 返回

`void`

***

### 函数

\<`RequestType`, `ResponseType`\>(`call`) => `Promise`\<`void`\>

服务端流

#### 类型参数

##### RequestType

`RequestType` *extends* [`GrpcRequest`](../interfaces/GrpcRequest.md)

##### ResponseType

`ResponseType`

#### 参数

##### call

`ServerWritableStream`\<`RequestType`, [`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

#### 返回

`Promise`\<`void`\>

***

### 函数

\<`RequestType`, `ResponseType`\>(`call`) => `void`

客户端、服务端，流式

#### 类型参数

##### RequestType

`RequestType` *extends* [`GrpcRequest`](../interfaces/GrpcRequest.md)

##### ResponseType

`ResponseType`

#### 参数

##### call

`ServerDuplexStream`\<`RequestType`, [`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

#### 返回

`void`
