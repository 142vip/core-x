[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcExampleService

# Class: GrpcExampleService

Defined in: [example.ts:23](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L23)

## Implements

- [`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md)

## Constructors

### Constructor

> **new GrpcExampleService**(): `GrpcExampleService`

#### Returns

`GrpcExampleService`

## Methods

### clientStreamToServer()

> **clientStreamToServer**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

Defined in: [example.ts:40](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L40)

客户端流式

#### Parameters

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### Implementation of

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientStreamToServer`](../interfaces/GrpcExampleServiceImpl.md#clientstreamtoserver)

***

### clientStreamToServerStream()

> **clientStreamToServerStream**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

Defined in: [example.ts:64](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L64)

客户端、服务端，流式

#### Parameters

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### Implementation of

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientStreamToServerStream`](../interfaces/GrpcExampleServiceImpl.md#clientstreamtoserverstream)

***

### clientToServer()

> **clientToServer**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

Defined in: [example.ts:28](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L28)

普通一元调用

#### Parameters

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### Implementation of

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientToServer`](../interfaces/GrpcExampleServiceImpl.md#clienttoserver)

***

### clientToServerStream()

> **clientToServerStream**(`requestData`): `Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

Defined in: [example.ts:52](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/example.ts#L52)

服务端流式

#### Parameters

##### requestData

[`ExampleRequestDataType`](../interfaces/ExampleRequestDataType.md)

#### Returns

`Promise`\<[`ExampleResponseDataType`](../interfaces/ExampleResponseDataType.md)\>

#### Implementation of

[`GrpcExampleServiceImpl`](../interfaces/GrpcExampleServiceImpl.md).[`clientToServerStream`](../interfaces/GrpcExampleServiceImpl.md#clienttoserverstream)
