[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcExampleServiceImpl

# 接口: GrpcExampleServiceImpl

定义于: [example.ts:16](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L16)

## 属性

### clientStreamToServer()

> **clientStreamToServer**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

定义于: [example.ts:18](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L18)

#### 参数

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

***

### clientStreamToServerStream()

> **clientStreamToServerStream**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

定义于: [example.ts:20](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L20)

#### 参数

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

***

### clientToServer()

> **clientToServer**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

定义于: [example.ts:17](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L17)

#### 参数

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

***

### clientToServerStream()

> **clientToServerStream**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

定义于: [example.ts:19](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/grpc/src/example.ts#L19)

#### 参数

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### 返回

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>
