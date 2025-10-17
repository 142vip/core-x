[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipMongo

# 类: VipMongo

定义于: [packages/data-source/src/core/sql/vip-mongo.ts:21](https://github.com/142vip/core-x/blob/58a4aca72f73ebc92491a458c9b83754486dc296/packages/data-source/src/core/sql/vip-mongo.ts#L21)

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

定义于: [packages/data-source/src/core/sql/vip-mongo.ts:25](https://github.com/142vip/core-x/blob/58a4aca72f73ebc92491a458c9b83754486dc296/packages/data-source/src/core/sql/vip-mongo.ts#L25)

获取连接数据

#### 参数

##### options

[`MongoDBOptions`](../interfaces/MongoDBOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`WithId`\<`Document`\>[]\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
