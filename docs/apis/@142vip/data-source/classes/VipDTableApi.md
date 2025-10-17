[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipDTableApi

# 类: VipDTableApi

定义于: [packages/data-source/src/core/apis/vip-dtable-api.ts:48](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/apis/vip-dtable-api.ts#L48)

DTable API

## 实现

- `DataSourceConnector`\<[`DTableApiOptions`](../interfaces/DTableApiOptions.md)\>

## 构造函数

### 构造函数

> **new VipDTableApi**(): `VipDTableApi`

#### 返回

`VipDTableApi`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>

定义于: [packages/data-source/src/core/apis/vip-dtable-api.ts:54](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/apis/vip-dtable-api.ts#L54)

获取连接数据

#### 参数

##### options

[`DTableApiOptions`](../interfaces/DTableApiOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`

***

### getConnectionDataByConcurrency()

> **getConnectionDataByConcurrency**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>

定义于: [packages/data-source/src/core/apis/vip-dtable-api.ts:68](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/apis/vip-dtable-api.ts#L68)

并发获取所有记录，提高获取速度

#### 参数

##### options

[`DTableApiOptions`](../interfaces/DTableApiOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`DTableRecords`\>\>
