[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcServer

# 类: GrpcServer

定义于: [grpc-server.ts:5](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/grpc/src/grpc-server.ts#L5)

## theme_extends

- `Singleton`\<`GrpcServer`\>

## 构造函数

### 构造函数

> **new GrpcServer**(): `GrpcServer`

定义于: [grpc-server.ts:7](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/grpc/src/grpc-server.ts#L7)

#### 返回

`GrpcServer`

#### 重写了

`Singleton<GrpcServer>.constructor`

## 方法

### addService()

> **addService**(`service`, `implementation`): `void`

定义于: [grpc-server.ts:15](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/grpc/src/grpc-server.ts#L15)

添加服务

#### 参数

##### service

`ServiceDefinition`

##### implementation

`UntypedServiceImplementation`

#### 返回

`void`

***

### listen()

> **listen**(`connectUri`): `Promise`\<`number`\>

定义于: [grpc-server.ts:31](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/grpc/src/grpc-server.ts#L31)

监听端口，即启动

#### 参数

##### connectUri

`string`

#### 返回

`Promise`\<`number`\>

***

### removeService()

> **removeService**(`service`): `void`

定义于: [grpc-server.ts:23](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/grpc/src/grpc-server.ts#L23)

移除服务

#### 参数

##### service

`ServiceDefinition`

#### 返回

`void`

***

### getInstance()

> `static` **getInstance**\<`T`\>(`this`, ...`args`): `T`

定义于: [singleton.ts:13](https://github.com/142vip/core-x/blob/d59cdcda9f62fc93dcb0efb54c66772997c75711/packages/grpc/src/singleton.ts#L13)

#### 类型参数

##### T

`T`

#### 参数

##### this

(...`args`) => `T`

##### args

...`any`[]

#### 返回

`T`

#### 继承自

`Singleton.getInstance`
