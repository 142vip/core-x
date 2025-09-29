[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipClickhouse

# 类: VipClickhouse

定义于: [packages/data-source/src/core/sql/vip-clickhouse.ts:14](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-clickhouse.ts#L14)

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

定义于: [packages/data-source/src/core/sql/vip-clickhouse.ts:18](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-clickhouse.ts#L18)

获取连接数据

#### 参数

##### options

[`ClickHouseOptions`](../interfaces/ClickHouseOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
