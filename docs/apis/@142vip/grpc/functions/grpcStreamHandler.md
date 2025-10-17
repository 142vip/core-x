[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / grpcStreamHandler

# Function: grpcStreamHandler()

> **grpcStreamHandler**(`methodType`, `methodFunc`): \<`RequestType`, `ResponseType`\>(`call`, `callback`) => `void` \| \<`RequestType`, `ResponseType`\>(`call`) => `Promise`\<`void`\> \| \<`RequestType`, `ResponseType`\>(`call`) => `void`

Defined in: [core/grpc.handler.ts:45](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc.handler.ts#L45)

处理GRPC流式调用，返回流对象

## Parameters

### methodType

`Omit`\<[`ServiceMethodType`](../enumerations/ServiceMethodType.md), `"unary"`\>

### methodFunc

[`ServiceMethodFuncImpl`](../type-aliases/ServiceMethodFuncImpl.md)

## Returns

\<`RequestType`, `ResponseType`\>(`call`, `callback`) => `void`

客户端流

## Type Parameters

### RequestType

`RequestType` *extends* [`GrpcRequest`](../interfaces/GrpcRequest.md)

### ResponseType

`ResponseType`

## Parameters

### call

`ServerReadableStream`\<`RequestType`, `ResponseType`\>

### callback

`sendUnaryData`\<[`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

## Returns

`void`

\<`RequestType`, `ResponseType`\>(`call`) => `Promise`\<`void`\>

服务端流

## Type Parameters

### RequestType

`RequestType` *extends* [`GrpcRequest`](../interfaces/GrpcRequest.md)

### ResponseType

`ResponseType`

## Parameters

### call

`ServerWritableStream`\<`RequestType`, [`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

## Returns

`Promise`\<`void`\>

\<`RequestType`, `ResponseType`\>(`call`) => `void`

客户端、服务端，流式

## Type Parameters

### RequestType

`RequestType` *extends* [`GrpcRequest`](../interfaces/GrpcRequest.md)

### ResponseType

`ResponseType`

## Parameters

### call

`ServerDuplexStream`\<`RequestType`, [`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

## Returns

`void`
