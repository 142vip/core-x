[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipMongo

# 类: VipMongo

定义于: [packages/data-source/src/core/sql/vip-mongo.ts:21](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/core/sql/vip-mongo.ts#L21)

MongoDB数据源

## 实现

- `DataSourceConnector`\<[`MongoDBOptions`](../interfaces/MongoDBOptions.md)\>

## 构造函数

### 构造函数

> **new VipMongo**(): `VipMongo`

#### 返回

`VipMongo`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`WithId`\<`Document`\>[]\>\>

定义于: [packages/data-source/src/core/sql/vip-mongo.ts:25](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/core/sql/vip-mongo.ts#L25)

获取连接数据

#### 参数

##### options

[`MongoDBOptions`](../interfaces/MongoDBOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`WithId`\<`Document`\>[]\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
