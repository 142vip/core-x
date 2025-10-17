[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / GrpcProtoLoader

# Class: GrpcProtoLoader

Defined in: [core/grpc-proto-loader.ts:22](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L22)

proto文件加载器

## Constructors

### Constructor

> **new GrpcProtoLoader**(`protoPath`, `loaderOptions?`): `GrpcProtoLoader`

Defined in: [core/grpc-proto-loader.ts:32](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L32)

#### Parameters

##### protoPath

`string` | `string`[]

##### loaderOptions?

`VipProtoLoaderOptions`

#### Returns

`GrpcProtoLoader`

## Methods

### getClientServiceConstructor()

> **getClientServiceConstructor**(`servicePath`): `ServiceClientConstructor`

Defined in: [core/grpc-proto-loader.ts:112](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L112)

获取client Service类定义，用于客户端

#### Parameters

##### servicePath

`string`

#### Returns

`ServiceClientConstructor`

***

### getGrpcServiceDetail()

> **getGrpcServiceDetail**(): `GrpcServiceDetail`[]

Defined in: [core/grpc-proto-loader.ts:77](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L77)

获取grpc service详细信息

#### Returns

`GrpcServiceDetail`[]

***

### getLoaderOptions()

> **getLoaderOptions**(): `VipProtoLoaderOptions`

Defined in: [core/grpc-proto-loader.ts:54](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L54)

获取proto loader options

#### Returns

`VipProtoLoaderOptions`

***

### getPackageNames()

> **getPackageNames**(): `string`[]

Defined in: [core/grpc-proto-loader.ts:40](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L40)

#### Returns

`string`[]

***

### getServerServiceDefinition()

> **getServerServiceDefinition**(`servicePath`): `ServiceDefinition`

Defined in: [core/grpc-proto-loader.ts:100](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L100)

获取rpc Service类定义

#### Parameters

##### servicePath

`string`

#### Returns

`ServiceDefinition`

***

### getServiceDetail()

> **getServiceDetail**(): `GrpcServicePath`[]

Defined in: [core/grpc-proto-loader.ts:65](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L65)

#### Returns

`GrpcServicePath`[]

***

### getServiceName()

> **getServiceName**(`servicePath`): `string`

Defined in: [core/grpc-proto-loader.ts:47](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L47)

获取grpc对应的service名称

#### Parameters

##### servicePath

`string`

#### Returns

`string`

***

### getServicePaths()

> **getServicePaths**(): `string`[]

Defined in: [core/grpc-proto-loader.ts:61](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L61)

获取所有的路径定义

#### Returns

`string`[]

***

### isProtobufTypeDefinition()

> **isProtobufTypeDefinition**(`obj`): `obj is ProtobufTypeDefinition`

Defined in: [core/grpc-proto-loader.ts:123](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/grpc/src/core/grpc-proto-loader.ts#L123)

判断是否是ProtobufTypeDefinition

#### Parameters

##### obj

`ServiceClientConstructor` | `GrpcObject` | `ProtobufTypeDefinition`

#### Returns

`obj is ProtobufTypeDefinition`
