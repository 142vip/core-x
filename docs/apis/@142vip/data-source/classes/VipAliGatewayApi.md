[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipAliGatewayApi

# Class: VipAliGatewayApi

Defined in: [packages/data-source/src/core/apis/vip-ali-gateway-api.ts:25](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-ali-gateway-api.ts#L25)

阿里云网关API
参考：https://www.npmjs.com/package/aliyun-api-gateway

## Implements

- `DataSourceConnector`\<[`AliGatewayApiOptions`](../interfaces/AliGatewayApiOptions.md)\>

## Constructors

### Constructor

> **new VipAliGatewayApi**(): `VipAliGatewayApi`

#### Returns

`VipAliGatewayApi`

## Methods

### getConnectionData()

> **getConnectionData**(`params`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/apis/vip-ali-gateway-api.ts:29](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-ali-gateway-api.ts#L29)

获取连接数据

#### Parameters

##### params

[`AliGatewayApiOptions`](../interfaces/AliGatewayApiOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
