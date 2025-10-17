[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipCsv

# 类: VipCsv

定义于: [packages/data-source/src/core/vip-csv.ts:14](https://github.com/142vip/core-x/blob/58a4aca72f73ebc92491a458c9b83754486dc296/packages/data-source/src/core/vip-csv.ts#L14)

## 实现

- `DataSourceConnector`\<[`CSVOptions`](../interfaces/CSVOptions.md)\>

## 构造函数

### 构造函数

> **new VipCsv**(): `VipCsv`

#### 返回

`VipCsv`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/vip-csv.ts:18](https://github.com/142vip/core-x/blob/58a4aca72f73ebc92491a458c9b83754486dc296/packages/data-source/src/core/vip-csv.ts#L18)

获取连接数据

#### 参数

##### options

[`CSVOptions`](../interfaces/CSVOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
