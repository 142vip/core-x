[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipIbmDB

# Class: VipIbmDB

Defined in: [packages/data-source/src/core/sql/vip-ibm-db.ts:15](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-ibm-db.ts#L15)

DB2 数据源

## Implements

- `DataSourceConnector`\<[`IbmDBOptions`](../interfaces/IbmDBOptions.md)\>

## Constructors

### Constructor

> **new VipIbmDB**(): `VipIbmDB`

#### Returns

`VipIbmDB`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-ibm-db.ts:19](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-ibm-db.ts#L19)

获取连接数据

#### Parameters

##### options

[`IbmDBOptions`](../interfaces/IbmDBOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
