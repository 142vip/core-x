[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipMysql

# Class: VipMysql

Defined in: [packages/data-source/src/core/sql/vip-mysql.ts:13](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-mysql.ts#L13)

MySQL 数据源

## Implements

- `DataSourceConnector`\<[`MysqlOptions`](../interfaces/MysqlOptions.md)\>

## Constructors

### Constructor

> **new VipMysql**(): `VipMysql`

#### Returns

`VipMysql`

## Methods

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/core/sql/vip-mysql.ts:17](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/sql/vip-mysql.ts#L17)

获取连接数据

#### Parameters

##### options

[`MysqlOptions`](../interfaces/MysqlOptions.md)

#### Returns

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### Implementation of

`DataSourceConnector.getConnectionData`
