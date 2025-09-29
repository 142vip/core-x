[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipAliGatewayApi

# 类: VipAliGatewayApi

定义于: [packages/data-source/src/core/apis/vip-ali-gateway-api.ts:25](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/data-source/src/core/apis/vip-ali-gateway-api.ts#L25)

阿里云网关API
参考：https://www.npmjs.com/package/aliyun-api-gateway

## 实现

- `DataSourceConnector`\<[`AliGatewayApiOptions`](../interfaces/AliGatewayApiOptions.md)\>

## 构造函数

### 构造函数

> **new VipAliGatewayApi**(): `VipAliGatewayApi`

#### 返回

`VipAliGatewayApi`

## 方法

### getConnectionData()

> **getConnectionData**(`params`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/apis/vip-ali-gateway-api.ts:29](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/data-source/src/core/apis/vip-ali-gateway-api.ts#L29)

获取连接数据

#### 参数

##### params

[`AliGatewayApiOptions`](../interfaces/AliGatewayApiOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
