[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcServer

# 类: GrpcServer

定义于: [core/grpc-server.ts:24](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L24)

Grpc 服务端

## 构造函数

### 构造函数

> **new GrpcServer**(): `GrpcServer`

定义于: [core/grpc-server.ts:39](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L39)

#### 返回

`GrpcServer`

## 方法

### forceShutdown()

> **forceShutdown**(): `void`

定义于: [core/grpc-server.ts:103](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L103)

强制关闭连接

#### 返回

`void`

***

### getConnectInfo()

> **getConnectInfo**(): [`GrpcConnectInfo`](../interfaces/GrpcConnectInfo.md)[]

定义于: [core/grpc-server.ts:96](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L96)

#### 返回

[`GrpcConnectInfo`](../interfaces/GrpcConnectInfo.md)[]

***

### getConnectUris()

> **getConnectUris**(): `string`[]

定义于: [core/grpc-server.ts:92](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L92)

获取连接地址

#### 返回

`string`[]

***

### listen()

> **listen**(`connectUri`): `Promise`\<`number`\>

定义于: [core/grpc-server.ts:47](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L47)

监听端口，即启动

#### 参数

##### connectUri

`string`

#### 返回

`Promise`\<`number`\>

***

### registerService()

> **registerService**(`serviceDef`, `methodHandlers`): `void`

定义于: [core/grpc-server.ts:83](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L83)

添加服务

#### 参数

##### serviceDef

`ServiceDefinition`

##### methodHandlers

[`UntypedMethodImplementation`](../interfaces/UntypedMethodImplementation.md)

#### 返回

`void`

***

### setHealthStatus()

> **setHealthStatus**(`methodName`, `status`): `void`

定义于: [core/grpc-server.ts:70](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/grpc/src/core/grpc-server.ts#L70)

设置某个方法的健康状况

#### 参数

##### methodName

`string`

##### status

`GrpcHealthStatus`

#### 返回

`void`
