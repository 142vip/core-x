[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / ProtoLoader

# 类: ProtoLoader

定义于: [core/proto-loader.ts:22](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L22)

proto文件加载器

## 构造函数

### 构造函数

> **new ProtoLoader**(`protoPath`, `loaderOptions?`): `ProtoLoader`

定义于: [core/proto-loader.ts:32](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L32)

#### 参数

##### protoPath

`string` | `string`[]

##### loaderOptions?

`VipProtoLoaderOptions`

#### 返回

`ProtoLoader`

## 方法

### getClientServiceConstructor()

> **getClientServiceConstructor**(`servicePath`): `ServiceClientConstructor`

定义于: [core/proto-loader.ts:112](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L112)

获取client Service类定义，用于客户端

#### 参数

##### servicePath

`string`

#### 返回

`ServiceClientConstructor`

***

### getGrpcServiceDetail()

> **getGrpcServiceDetail**(): `GrpcServiceDetail`[]

定义于: [core/proto-loader.ts:77](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L77)

获取grpc service详细信息

#### 返回

`GrpcServiceDetail`[]

***

### getLoaderOptions()

> **getLoaderOptions**(): `VipProtoLoaderOptions`

定义于: [core/proto-loader.ts:54](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L54)

获取proto loader options

#### 返回

`VipProtoLoaderOptions`

***

### getPackageNames()

> **getPackageNames**(): `string`[]

定义于: [core/proto-loader.ts:40](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L40)

#### 返回

`string`[]

***

### getServerServiceDefinition()

> **getServerServiceDefinition**(`servicePath`): `ServiceDefinition`

定义于: [core/proto-loader.ts:100](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L100)

获取rpc Service类定义

#### 参数

##### servicePath

`string`

#### 返回

`ServiceDefinition`

***

### getServiceDetail()

> **getServiceDetail**(): `GrpcServicePath`[]

定义于: [core/proto-loader.ts:65](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L65)

#### 返回

`GrpcServicePath`[]

***

### getServiceName()

> **getServiceName**(`servicePath`): `string`

定义于: [core/proto-loader.ts:47](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L47)

获取grpc对应的service名称

#### 参数

##### servicePath

`string`

#### 返回

`string`

***

### getServicePaths()

> **getServicePaths**(): `string`[]

定义于: [core/proto-loader.ts:61](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L61)

获取所有的路径定义

#### 返回

`string`[]

***

### isProtobufTypeDefinition()

> **isProtobufTypeDefinition**(`obj`): `obj is ProtobufTypeDefinition`

定义于: [core/proto-loader.ts:123](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/grpc/src/core/proto-loader.ts#L123)

判断是否是ProtobufTypeDefinition

#### 参数

##### obj

`ServiceClientConstructor` | `GrpcObject` | `ProtobufTypeDefinition`

#### 返回

`obj is ProtobufTypeDefinition`
