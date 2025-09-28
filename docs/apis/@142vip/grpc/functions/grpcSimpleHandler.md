[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / grpcSimpleHandler

# 函数: grpcSimpleHandler()

> **grpcSimpleHandler**(`methodFunc`): \<`RequestType`, `ResponseType`\>(`call`, `callback`) => `Promise`\<`void`\>

定义于: [core/grpc.handler.ts:15](https://github.com/142vip/core-x/blob/7cfc2fa6b24172631d6526590fc6ea4be89357c6/packages/grpc/src/core/grpc.handler.ts#L15)

处理GRPC一元调用，不涉及流
- 异步抓换为同步处理
- async/await

## 参数

### methodFunc

[`ServiceMethodFuncImpl`](../type-aliases/ServiceMethodFuncImpl.md)

## 返回

> \<`RequestType`, `ResponseType`\>(`call`, `callback`): `Promise`\<`void`\>

处理一元调用，不涉及流

### 类型参数

#### RequestType

`RequestType`

#### ResponseType

`ResponseType`

### 参数

#### call

`ServerUnaryCall`\<`RequestType`, `ResponseType`\>

#### callback

`sendUnaryData`\<[`GrpcResponse`](../interfaces/GrpcResponse.md)\<`ResponseType`\>\>

### 返回

`Promise`\<`void`\>
