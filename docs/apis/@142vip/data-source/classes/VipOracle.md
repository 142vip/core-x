[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipOracle

# 类: VipOracle

定义于: [packages/data-source/src/core/sql/vip-oracle.ts:14](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/data-source/src/core/sql/vip-oracle.ts#L14)

Oracle 数据源

## 实现

- `DataSourceConnector`\<[`OracleOptions`](../interfaces/OracleOptions.md)\>

## 构造函数

### 构造函数

> **new VipOracle**(): `VipOracle`

#### 返回

`VipOracle`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-oracle.ts:18](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/data-source/src/core/sql/vip-oracle.ts#L18)

获取连接数据

#### 参数

##### options

[`OracleOptions`](../interfaces/OracleOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
