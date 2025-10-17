[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipPostgreSql

# Class: VipPostgreSql

Defined in: [packages/data-source/src/core/sql/vip-postgresql.ts:14](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-postgresql.ts#L14)

PostgreSQL 数据源

## Implements

- `DataSourceConnector`\<[`PostgreSqlOptions`](../interfaces/PostgreSqlOptions.md)\>

## Constructors

### Constructor

> **new VipPostgreSql**(): `VipPostgreSql`

#### Returns

`VipPostgreSql`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-postgresql.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-postgresql.ts#L18)

获取连接数据

#### Parameters

##### options

[`PostgreSqlOptions`](../interfaces/PostgreSqlOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
