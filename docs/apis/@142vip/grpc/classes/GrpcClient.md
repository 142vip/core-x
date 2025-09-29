[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcClient

# 类: GrpcClient

定义于: [core/grpc-client.ts:11](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L11)

Grpc 客户端

## 构造函数

### 构造函数

> **new GrpcClient**(`connectUri`): `GrpcClient`

定义于: [core/grpc-client.ts:15](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L15)

#### 参数

##### connectUri

`string`

#### 返回

`GrpcClient`

## 方法

### getConnectUri()

> **getConnectUri**(): `string`

定义于: [core/grpc-client.ts:58](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L58)

获取连接地址

#### 返回

`string`

***

### getService()

> **getService**\<`T`\>(`servicePath`): `T`

定义于: [core/grpc-client.ts:36](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L36)

获取连接Service

#### 类型参数

##### T

`T`

#### 参数

##### servicePath

`string`

#### 返回

`T`

***

### getServicePaths()

> **getServicePaths**(): `string`[]

定义于: [core/grpc-client.ts:65](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L65)

获取所有的服务路径

#### 返回

`string`[]

***

### getServiceSize()

> **getServiceSize**(): `number`

定义于: [core/grpc-client.ts:72](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L72)

获取连接数

#### 返回

`number`

***

### registerService()

> **registerService**(`servicePath`, `IServiceClientConstructor`): `void`

定义于: [core/grpc-client.ts:24](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L24)

建立连接

#### 参数

##### servicePath

`string`

##### IServiceClientConstructor

`ServiceClientConstructor`

#### 返回

`void`

***

### removeService()

> **removeService**(`servicePath?`): `void`

定义于: [core/grpc-client.ts:80](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/grpc/src/core/grpc-client.ts#L80)

关闭gRPC连接
- 异步关闭

#### 参数

##### servicePath?

`string`

#### 返回

`void`
