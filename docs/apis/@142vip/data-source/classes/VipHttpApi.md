[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipHttpApi

# 类: VipHttpApi

定义于: [packages/data-source/src/core/apis/vip-http-api.ts:12](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/apis/vip-http-api.ts#L12)

发送Http，请求API
- 标准的axios请求

## 实现

- `DataSourceConnector`\<[`HttpApiOptions`](../interfaces/HttpApiOptions.md)\>

## 构造函数

### 构造函数

> **new VipHttpApi**(): `VipHttpApi`

#### 返回

`VipHttpApi`

## 方法

### getConnectionData()

> **getConnectionData**\<`T`\>(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`T`\>\>

定义于: [packages/data-source/src/core/apis/vip-http-api.ts:16](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/apis/vip-http-api.ts#L16)

获取连接数据

#### 类型参数

##### T

`T`

#### 参数

##### options

[`HttpApiOptions`](../interfaces/HttpApiOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`T`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
