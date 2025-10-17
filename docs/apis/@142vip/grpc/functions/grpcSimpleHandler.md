[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / grpcSimpleHandler

# Function: grpcSimpleHandler()

> **grpcSimpleHandler**(`methodFunc`): \<`RequestType`, `ResponseType`\>(`call`, `callback`) => `Promise`\<`void`\>

Defined in: [core/grpc.handler.ts:17](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc.handler.ts#L17)

处理GRPC一元调用，不涉及流
- 异步抓换为同步处理
- async/await

## Parameters

### methodFunc

[`ServiceMethodFuncImpl`](../type-aliases/ServiceMethodFuncImpl.md)

## Returns

> \<`RequestType`, `ResponseType`\>(`call`, `callback`): `Promise`\<`void`\>

处理一元调用，不涉及流

### Type Parameters

#### RequestType

`RequestType` *extends* [`GrpcRequest`](../interfaces/GrpcRequest.md)

#### ResponseType

`ResponseType`

### Parameters

#### call

`ServerUnaryCall`\<`RequestType`, `ResponseType`\>

#### callback

`sendUnaryData`\<[`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

### Returns

`Promise`\<`void`\>
