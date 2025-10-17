[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcExampleServiceImpl

# Interface: GrpcExampleServiceImpl

Defined in: [example.ts:16](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L16)

## Properties

### clientStreamToServer()

> **clientStreamToServer**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

Defined in: [example.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L18)

#### Parameters

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

***

### clientStreamToServerStream()

> **clientStreamToServerStream**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

Defined in: [example.ts:20](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L20)

#### Parameters

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

***

### clientToServer()

> **clientToServer**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

Defined in: [example.ts:17](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L17)

#### Parameters

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

***

### clientToServerStream()

> **clientToServerStream**: (`requestData`) => `Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>

Defined in: [example.ts:19](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L19)

#### Parameters

##### requestData

[`ExampleRequestDataType`](ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](ExampleResponseDataType.md)\>
