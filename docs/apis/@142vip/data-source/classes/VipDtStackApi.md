[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipDtStackApi

# Class: VipDtStackApi

Defined in: [packages/data-source/src/core/apis/vip-dtstack-api.ts:30](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-dtstack-api.ts#L30)

数栈API

## Implements

- `DataSourceConnector`\<[`DTStackAPIOptions`](../interfaces/DTStackAPIOptions.md)\>

## Constructors

### Constructor

> **new VipDtStackApi**(): `VipDtStackApi`

#### Returns

`VipDtStackApi`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/apis/vip-dtstack-api.ts:34](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-dtstack-api.ts#L34)

获取连接数据

#### Parameters

##### options

[`DTStackAPIOptions`](../interfaces/DTStackAPIOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
