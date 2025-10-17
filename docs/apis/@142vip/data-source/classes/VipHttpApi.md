[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipHttpApi

# Class: VipHttpApi

Defined in: [packages/data-source/src/core/apis/vip-http-api.ts:12](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-http-api.ts#L12)

发送Http，请求API
- 标准的axios请求

## Implements

- `DataSourceConnector`\<[`HttpApiOptions`](../interfaces/HttpApiOptions.md)\>

## Constructors

### Constructor

> **new VipHttpApi**(): `VipHttpApi`

#### Returns

`VipHttpApi`

## Methods

### getConnectionData()

> **getConnectionData**\<`T`\>(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`T`\>\>

Defined in: [packages/data-source/src/core/apis/vip-http-api.ts:16](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-http-api.ts#L16)

获取连接数据

#### Type Parameters

##### T

`T`

#### Parameters

##### options

[`HttpApiOptions`](../interfaces/HttpApiOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`T`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
