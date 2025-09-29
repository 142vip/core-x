[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipIbmDB

# 类: VipIbmDB

定义于: [packages/data-source/src/core/sql/vip-ibm-db.ts:15](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-ibm-db.ts#L15)

DB2 数据源

## 实现

- `DataSourceConnector`\<[`IbmDBOptions`](../interfaces/IbmDBOptions.md)\>

## 构造函数

### 构造函数

> **new VipIbmDB**(): `VipIbmDB`

#### 返回

`VipIbmDB`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-ibm-db.ts:19](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-ibm-db.ts#L19)

获取连接数据

#### 参数

##### options

[`IbmDBOptions`](../interfaces/IbmDBOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
