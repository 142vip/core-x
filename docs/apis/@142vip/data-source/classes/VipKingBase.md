[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipKingBase

# Class: VipKingBase

Defined in: [packages/data-source/src/core/sql/vip-kingbase.ts:14](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-kingbase.ts#L14)

金仓数据源

## Implements

- `DataSourceConnector`\<[`KingBaseOptions`](../interfaces/KingBaseOptions.md)\>

## Constructors

### Constructor

> **new VipKingBase**(): `VipKingBase`

#### Returns

`VipKingBase`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-kingbase.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-kingbase.ts#L18)

获取连接数据

#### Parameters

##### options

[`KingBaseOptions`](../interfaces/KingBaseOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
