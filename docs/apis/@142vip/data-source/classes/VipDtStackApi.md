[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipDtStackApi

# 类: VipDtStackApi

定义于: [packages/data-source/src/core/apis/vip-dtstack-api.ts:30](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/data-source/src/core/apis/vip-dtstack-api.ts#L30)

数栈API

## 实现

- `DataSourceConnector`\<[`DTStackAPIOptions`](../interfaces/DTStackAPIOptions.md)\>

## 构造函数

### 构造函数

> **new VipDtStackApi**(): `VipDtStackApi`

#### 返回

`VipDtStackApi`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/apis/vip-dtstack-api.ts:34](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/data-source/src/core/apis/vip-dtstack-api.ts#L34)

获取连接数据

#### 参数

##### options

[`DTStackAPIOptions`](../interfaces/DTStackAPIOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
