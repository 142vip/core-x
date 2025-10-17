[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipDameng

# Class: VipDameng

Defined in: [packages/data-source/src/core/sql/vip-dameng.ts:11](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-dameng.ts#L11)

达梦数据库

## Implements

- `DataSourceConnector`\<[`DamengOptions`](../interfaces/DamengOptions.md)\>

## Constructors

### Constructor

> **new VipDameng**(): `VipDameng`

#### Returns

`VipDameng`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-dameng.ts:15](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-dameng.ts#L15)

获取连接数据

#### Parameters

##### options

[`DamengOptions`](../interfaces/DamengOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
