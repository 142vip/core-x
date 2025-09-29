[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcExampleService

# 类: GrpcExampleService

定义于: [example.ts:23](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L23)

## 实现

- [`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md)

## 构造函数

### 构造函数

> **new GrpcExampleService**(): `GrpcExampleService`

#### 返回

`GrpcExampleService`

## 方法

### clientStreamToServer()

> **clientStreamToServer**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

定义于: [example.ts:40](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L40)

客户端流式

#### 参数

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### 实现了

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientStreamToServer`](../interfaces/GrpcExampleServiceImpl.md#clientstreamtoserver)

***

### clientStreamToServerStream()

> **clientStreamToServerStream**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

定义于: [example.ts:64](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L64)

客户端、服务端，流式

#### 参数

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### 实现了

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientStreamToServerStream`](../interfaces/GrpcExampleServiceImpl.md#clientstreamtoserverstream)

***

### clientToServer()

> **clientToServer**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

定义于: [example.ts:28](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L28)

普通一元调用

#### 参数

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### 实现了

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientToServer`](../interfaces/GrpcExampleServiceImpl.md#clienttoserver)

***

### clientToServerStream()

> **clientToServerStream**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

定义于: [example.ts:52](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L52)

服务端流式

#### 参数

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### 实现了

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientToServerStream`](../interfaces/GrpcExampleServiceImpl.md#clienttoserverstream)
