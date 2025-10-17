[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipMysql

# 类: VipMysql

定义于: [packages/data-source/src/core/sql/vip-mysql.ts:13](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-mysql.ts#L13)

MySQL 数据源

## 实现

- `DataSourceConnector`\<[`MysqlOptions`](../interfaces/MysqlOptions.md)\>

## 构造函数

### 构造函数

> **new VipMysql**(): `VipMysql`

#### 返回

`VipMysql`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-mysql.ts:17](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-mysql.ts#L17)

获取连接数据

#### 参数

##### options

[`MysqlOptions`](../interfaces/MysqlOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
