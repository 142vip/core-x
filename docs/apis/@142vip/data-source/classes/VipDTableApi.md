[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipDTableApi

# Class: VipDTableApi

Defined in: [packages/data-source/src/core/apis/vip-dtable-api.ts:48](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-dtable-api.ts#L48)

DTable API

## Implements

- `DataSourceConnector`\<[`DTableApiOptions`](../interfaces/DTableApiOptions.md)\>

## Constructors

### Constructor

> **new VipDTableApi**(): `VipDTableApi`

#### Returns

`VipDTableApi`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>

Defined in: [packages/data-source/src/core/apis/vip-dtable-api.ts:54](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-dtable-api.ts#L54)

获取连接数据

#### Parameters

##### options

[`DTableApiOptions`](../interfaces/DTableApiOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`

***

### getConnectionDataByConcurrency()

> **getConnectionDataByConcurrency**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>

Defined in: [packages/data-source/src/core/apis/vip-dtable-api.ts:68](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-dtable-api.ts#L68)

并发获取所有记录，提高获取速度

#### Parameters

##### options

[`DTableApiOptions`](../interfaces/DTableApiOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>
