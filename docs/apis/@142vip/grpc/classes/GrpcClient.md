[API 参考](../../../packages.md) / [@142vip/grpc](../index.md) / GrpcClient

# 类: GrpcClient

定义于: [grpc-client.ts:8](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/grpc/src/grpc-client.ts#L8)

## theme_extends

- `Singleton`\<`GrpcClient`\>

## 构造函数

### 构造函数

> **new GrpcClient**(): `GrpcClient`

定义于: [grpc-client.ts:10](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/grpc/src/grpc-client.ts#L10)

#### 返回

`GrpcClient`

#### 重写了

`Singleton<GrpcClient>.constructor`

## 方法

### close()

> **close**(): `void`

定义于: [grpc-client.ts:47](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/grpc/src/grpc-client.ts#L47)

关闭gRPC连接

#### 返回

`void`

***

### connect()

> **connect**(`connectUri`, `serviceClaDefinitions`): `void`

定义于: [grpc-client.ts:18](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/grpc/src/grpc-client.ts#L18)

建立连接

#### 参数

##### connectUri

`string`

##### serviceClaDefinitions

[`ServiceClaDefinition`](../interfaces/ServiceClaDefinition.md)[]

#### 返回

`void`

***

### getConnectSize()

> **getConnectSize**(): `number`

定义于: [grpc-client.ts:40](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/grpc/src/grpc-client.ts#L40)

获取连接数

#### 返回

`number`

***

### getService()

> **getService**\<`T`\>(`serviceName`): `T`

定义于: [grpc-client.ts:29](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/grpc/src/grpc-client.ts#L29)

获取连接Service

#### 类型参数

##### T

`T`

#### 参数

##### serviceName

`string`

#### 返回

`T`

***

### getInstance()

> `static` **getInstance**\<`T`\>(`this`, ...`args`): `T`

定义于: [singleton.ts:13](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/grpc/src/singleton.ts#L13)

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
