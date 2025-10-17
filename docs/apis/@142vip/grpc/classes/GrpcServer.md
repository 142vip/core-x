[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcServer

# 类: GrpcServer

定义于: [core/grpc-server.ts:29](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L29)

Grpc 服务端

## 构造函数

### 构造函数

> **new GrpcServer**(): `GrpcServer`

定义于: [core/grpc-server.ts:44](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L44)

#### 返回

`GrpcServer`

## 方法

### forceShutdown()

> **forceShutdown**(): `void`

定义于: [core/grpc-server.ts:108](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L108)

强制关闭连接

#### 返回

`void`

***

### getConnectInfo()

> **getConnectInfo**(): [`GrpcConnectInfo`](../interfaces/GrpcConnectInfo.md)[]

定义于: [core/grpc-server.ts:101](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L101)

#### 返回

[`GrpcConnectInfo`](../interfaces/GrpcConnectInfo.md)[]

***

### getConnectUris()

> **getConnectUris**(): `string`[]

定义于: [core/grpc-server.ts:97](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L97)

获取连接地址

#### 返回

`string`[]

***

### listen()

> **listen**(`connectUri`): `Promise`\<`number`\>

定义于: [core/grpc-server.ts:52](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L52)

监听端口，即启动

#### 参数

##### connectUri

`string`

#### 返回

`Promise`\<`number`\>

***

### registerService()

> **registerService**(`serviceDef`, `methodHandlers`): `void`

定义于: [core/grpc-server.ts:88](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L88)

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

定义于: [core/grpc-server.ts:75](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/grpc-server.ts#L75)

设置某个方法的健康状况

#### 参数

##### methodName

`string`

##### status

`GrpcHealthStatus`

#### 返回

`void`
