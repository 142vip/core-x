[API 参考](../../../index.md) / [@142vip/grpc](../index.md) / ProtoLoader

# 类: ProtoLoader

定义于: [proto-loader.ts:11](https://github.com/142vip/core-x/blob/bdff6769b69266ddfe7392709afaa643b39c00f4/packages/grpc/src/proto-loader.ts#L11)

proto文件加载器

## theme_extends

- `Singleton`\<`ProtoLoader`\>

## 构造函数

### 构造函数

> **new ProtoLoader**(`protoPath`, `loaderOptions`): `ProtoLoader`

定义于: [proto-loader.ts:17](https://github.com/142vip/core-x/blob/bdff6769b69266ddfe7392709afaa643b39c00f4/packages/grpc/src/proto-loader.ts#L17)

#### 参数

##### protoPath

`string`

##### loaderOptions

`Options`

#### 返回

`ProtoLoader`

#### 重写了

`Singleton<ProtoLoader>.constructor`

## 方法

### getPackageName()

> **getPackageName**(): `string`

定义于: [proto-loader.ts:25](https://github.com/142vip/core-x/blob/bdff6769b69266ddfe7392709afaa643b39c00f4/packages/grpc/src/proto-loader.ts#L25)

#### 返回

`string`

***

### getServiceClassDefinition()

> **getServiceClassDefinition**(): [`ServiceClaDefinition`](../interfaces/ServiceClaDefinition.md)[]

定义于: [proto-loader.ts:32](https://github.com/142vip/core-x/blob/bdff6769b69266ddfe7392709afaa643b39c00f4/packages/grpc/src/proto-loader.ts#L32)

获取rpc Service类定义

#### 返回

[`ServiceClaDefinition`](../interfaces/ServiceClaDefinition.md)[]

***

### getInstance()

> `static` **getInstance**\<`T`\>(`this`, ...`args`): `T`

定义于: [singleton.ts:13](https://github.com/142vip/core-x/blob/bdff6769b69266ddfe7392709afaa643b39c00f4/packages/grpc/src/singleton.ts#L13)

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
