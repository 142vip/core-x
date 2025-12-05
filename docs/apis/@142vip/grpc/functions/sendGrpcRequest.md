[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / sendGrpcRequest

# 函数: sendGrpcRequest()

> **sendGrpcRequest**\<`RequestData`, `ResponseData`\>(`serviceClient`, `methodName`, `requestData`): `Promise`\<`ResponseData` \| `ResponseData`[]\>

定义于: [utils/grpc.util.ts:89](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/utils/grpc.util.ts#L89)

发送GRPC请求
注意：rpcMethod.call(grpcService 这个写法，避免grpcClient的this指向异常

## 类型参数

### RequestData

`RequestData`

### ResponseData

`ResponseData`

## 参数

### serviceClient

`ServiceClient`

### methodName

`string`

### requestData

`RequestData`

## 返回

`Promise`\<`ResponseData` \| `ResponseData`[]\>
