[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcClient

# Class: GrpcClient

Defined in: [core/grpc-client.ts:12](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L12)

Grpc 客户端

## Constructors

### Constructor

> **new GrpcClient**(`connectUri`): `GrpcClient`

Defined in: [core/grpc-client.ts:16](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L16)

#### Parameters

##### connectUri

`string`

#### Returns

`GrpcClient`

## Methods

### getConnectUri()

> **getConnectUri**(): `string`

Defined in: [core/grpc-client.ts:60](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L60)

获取连接地址

#### Returns

`string`

***

### getService()

> **getService**\<`T`\>(`servicePath`): `T`

Defined in: [core/grpc-client.ts:37](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L37)

获取连接Service

#### Type Parameters

##### T

`T`

#### Parameters

##### servicePath

`string`

#### Returns

`T`

***

### getServicePaths()

> **getServicePaths**(): `string`[]

Defined in: [core/grpc-client.ts:67](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L67)

获取所有的服务路径

#### Returns

`string`[]

***

### getServiceSize()

> **getServiceSize**(): `number`

Defined in: [core/grpc-client.ts:74](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L74)

获取连接数

#### Returns

`number`

***

### registerService()

> **registerService**(`servicePath`, `IServiceClientConstructor`): `void`

Defined in: [core/grpc-client.ts:25](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L25)

建立连接

#### Parameters

##### servicePath

`string`

##### IServiceClientConstructor

`ServiceClientConstructor`

#### Returns

`void`

***

### removeService()

> **removeService**(`servicePath?`): `void`

Defined in: [core/grpc-client.ts:82](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-client.ts#L82)

关闭gRPC连接
- 异步关闭

#### Parameters

##### servicePath?

`string`

#### Returns

`void`
