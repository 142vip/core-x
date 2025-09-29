[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipKingBase

# 类: VipKingBase

定义于: [packages/data-source/src/core/sql/vip-kingbase.ts:14](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/core/sql/vip-kingbase.ts#L14)

金仓数据源

## 实现

- `DataSourceConnector`\<[`KingBaseOptions`](../interfaces/KingBaseOptions.md)\>

## 构造函数

### 构造函数

> **new VipKingBase**(): `VipKingBase`

#### 返回

`VipKingBase`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-kingbase.ts:18](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/core/sql/vip-kingbase.ts#L18)

获取连接数据

#### 参数

##### options

[`KingBaseOptions`](../interfaces/KingBaseOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
