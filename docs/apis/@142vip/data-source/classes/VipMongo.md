[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipMongo

# Class: VipMongo

Defined in: [packages/data-source/src/core/sql/vip-mongo.ts:21](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-mongo.ts#L21)

MongoDB数据源

## Implements

- `DataSourceConnector`\<[`MongoDBOptions`](../interfaces/MongoDBOptions.md)\>

## Constructors

### Constructor

> **new VipMongo**(): `VipMongo`

#### Returns

`VipMongo`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`WithId`\<`Document`\>[]\>\>

Defined in: [packages/data-source/src/core/sql/vip-mongo.ts:25](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-mongo.ts#L25)

获取连接数据

#### Parameters

##### options

[`MongoDBOptions`](../interfaces/MongoDBOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`WithId`\<`Document`\>[]\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
