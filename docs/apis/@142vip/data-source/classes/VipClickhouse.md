[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipClickhouse

# Class: VipClickhouse

Defined in: [packages/data-source/src/core/sql/vip-clickhouse.ts:14](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-clickhouse.ts#L14)

ClickHouse数据库

## Implements

- `DataSourceConnector`\<[`ClickHouseOptions`](../interfaces/ClickHouseOptions.md)\>

## Constructors

### Constructor

> **new VipClickhouse**(): `VipClickhouse`

#### Returns

`VipClickhouse`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-clickhouse.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-clickhouse.ts#L18)

获取连接数据

#### Parameters

##### options

[`ClickHouseOptions`](../interfaces/ClickHouseOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
