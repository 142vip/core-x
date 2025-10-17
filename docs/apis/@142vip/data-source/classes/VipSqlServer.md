[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipSqlServer

# Class: VipSqlServer

Defined in: [packages/data-source/src/core/sql/vip-sql-server.ts:13](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-sql-server.ts#L13)

SQL Server 数据源

## Implements

- `DataSourceConnector`\<[`SqlServerOptions`](../interfaces/SqlServerOptions.md)\>

## Constructors

### Constructor

> **new VipSqlServer**(): `VipSqlServer`

#### Returns

`VipSqlServer`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-sql-server.ts:17](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-sql-server.ts#L17)

获取连接数据

#### Parameters

##### options

[`SqlServerOptions`](../interfaces/SqlServerOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
