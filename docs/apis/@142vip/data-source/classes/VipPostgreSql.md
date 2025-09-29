[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipPostgreSql

# 类: VipPostgreSql

定义于: [packages/data-source/src/core/sql/vip-postgresql.ts:14](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/data-source/src/core/sql/vip-postgresql.ts#L14)

PostgreSQL 数据源

## 实现

- `DataSourceConnector`\<[`PostgreSqlOptions`](../interfaces/PostgreSqlOptions.md)\>

## 构造函数

### 构造函数

> **new VipPostgreSql**(): `VipPostgreSql`

#### 返回

`VipPostgreSql`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-postgresql.ts:18](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/data-source/src/core/sql/vip-postgresql.ts#L18)

获取连接数据

#### 参数

##### options

[`PostgreSqlOptions`](../interfaces/PostgreSqlOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
