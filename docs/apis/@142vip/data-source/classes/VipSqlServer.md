[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipSqlServer

# 类: VipSqlServer

定义于: [packages/data-source/src/core/sql/vip-sql-server.ts:13](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-sql-server.ts#L13)

SQL Server 数据源

## 实现

- `DataSourceConnector`\<[`SqlServerOptions`](../interfaces/SqlServerOptions.md)\>

## 构造函数

### 构造函数

> **new VipSqlServer**(): `VipSqlServer`

#### 返回

`VipSqlServer`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-sql-server.ts:17](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-sql-server.ts#L17)

获取连接数据

#### 参数

##### options

[`SqlServerOptions`](../interfaces/SqlServerOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
