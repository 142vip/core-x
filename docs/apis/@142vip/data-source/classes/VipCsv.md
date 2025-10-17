[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipCsv

# Class: VipCsv

Defined in: [packages/data-source/src/core/vip-csv.ts:14](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/vip-csv.ts#L14)

## Implements

- `DataSourceConnector`\<[`CSVOptions`](../interfaces/CSVOptions.md)\>

## Constructors

### Constructor

> **new VipCsv**(): `VipCsv`

#### Returns

`VipCsv`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/vip-csv.ts:18](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/vip-csv.ts#L18)

获取连接数据

#### Parameters

##### options

[`CSVOptions`](../interfaces/CSVOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
