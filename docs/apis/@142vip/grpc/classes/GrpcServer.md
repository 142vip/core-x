[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcServer

# Class: GrpcServer

Defined in: [core/grpc-server.ts:24](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L24)

Grpc 服务端

## Constructors

### Constructor

> **new GrpcServer**(): `GrpcServer`

Defined in: [core/grpc-server.ts:39](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L39)

#### Returns

`GrpcServer`

## Methods

### forceShutdown()

> **forceShutdown**(): `void`

Defined in: [core/grpc-server.ts:103](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L103)

强制关闭连接

#### Returns

`void`

***

### getConnectInfo()

> **getConnectInfo**(): [`GrpcConnectInfo`](../interfaces/GrpcConnectInfo.md)[]

Defined in: [core/grpc-server.ts:96](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L96)

#### Returns

[`GrpcConnectInfo`](../interfaces/GrpcConnectInfo.md)[]

***

### getConnectUris()

> **getConnectUris**(): `string`[]

Defined in: [core/grpc-server.ts:92](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L92)

获取连接地址

#### Returns

`string`[]

***

### listen()

> **listen**(`connectUri`): `Promise`\<`number`\>

Defined in: [core/grpc-server.ts:47](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L47)

监听端口，即启动

#### Parameters

##### connectUri

`string`

#### Returns

`Promise`\<`number`\>

***

### registerService()

> **registerService**(`serviceDef`, `methodHandlers`): `void`

Defined in: [core/grpc-server.ts:83](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L83)

添加服务

#### Parameters

##### serviceDef

`ServiceDefinition`

##### methodHandlers

[`UntypedMethodImplementation`](../interfaces/UntypedMethodImplementation.md)

#### Returns

`void`

***

### setHealthStatus()

> **setHealthStatus**(`methodName`, `status`): `void`

Defined in: [core/grpc-server.ts:70](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-server.ts#L70)

设置某个方法的健康状况

#### Parameters

##### methodName

`string`

##### status

`GrpcHealthStatus`

#### Returns

`void`
