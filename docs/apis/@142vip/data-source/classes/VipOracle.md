[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipOracle

# Class: VipOracle

Defined in: [packages/data-source/src/core/sql/vip-oracle.ts:14](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-oracle.ts#L14)

Oracle 数据源

## Implements

- `DataSourceConnector`\<[`OracleOptions`](../interfaces/OracleOptions.md)\>

## Constructors

### Constructor

> **new VipOracle**(): `VipOracle`

#### Returns

`VipOracle`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-oracle.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-oracle.ts#L18)

获取连接数据

#### Parameters

##### options

[`OracleOptions`](../interfaces/OracleOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
