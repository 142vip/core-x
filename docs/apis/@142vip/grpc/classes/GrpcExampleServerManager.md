[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcExampleServerManager

# Class: GrpcExampleServerManager

Defined in: [example.manager.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.manager.ts#L18)

基于exampleProto的GRPC服务管理器

## Constructors

### Constructor

> **new GrpcExampleServerManager**(): `GrpcExampleServerManager`

Defined in: [example.manager.ts:22](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.manager.ts#L22)

#### Returns

`GrpcExampleServerManager`

## Methods

### getGrpcServer()

> **getGrpcServer**(): [`GrpcServer`](GrpcServer.md)

Defined in: [example.manager.ts:48](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.manager.ts#L48)

获取原生的grpcServer服务

#### Returns

[`GrpcServer`](GrpcServer.md)

***

### getServiceClient()

> **getServiceClient**(`connectUri`): `ServiceClient`

Defined in: [example.manager.ts:56](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.manager.ts#L56)

获取客户端

#### Parameters

##### connectUri

[`GrpcConnectURI`](../enumerations/GrpcConnectURI.md)

#### Returns

`ServiceClient`

***

### listen()

> **listen**(`connectUri`): `Promise`\<`void`\>

Defined in: [example.manager.ts:40](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.manager.ts#L40)

启动GRPC服务，监听端口

#### Parameters

##### connectUri

[`GrpcConnectURI`](../enumerations/GrpcConnectURI.md)

#### Returns

`Promise`\<`void`\>

***

### registerService()

> **registerService**(): `void`

Defined in: [example.manager.ts:26](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.manager.ts#L26)

#### Returns

`void`

***

### shutdown()

> **shutdown**(): `void`

Defined in: [example.manager.ts:70](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.manager.ts#L70)

关闭GRPC服务
- 服务端

#### Returns

`void`
