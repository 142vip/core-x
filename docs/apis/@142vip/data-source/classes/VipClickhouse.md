[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipClickhouse

# 类: VipClickhouse

定义于: [packages/data-source/src/core/sql/vip-clickhouse.ts:13](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/data-source/src/core/sql/vip-clickhouse.ts#L13)

ClickHouse数据库

## 实现

- `DataSourceConnector`\<[`ClickHouseOptions`](../interfaces/ClickHouseOptions.md)\>

## 构造函数

### 构造函数

> **new VipClickhouse**(): `VipClickhouse`

#### 返回

`VipClickhouse`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-clickhouse.ts:17](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/data-source/src/core/sql/vip-clickhouse.ts#L17)

获取连接数据

#### 参数

##### options

[`ClickHouseOptions`](../interfaces/ClickHouseOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
