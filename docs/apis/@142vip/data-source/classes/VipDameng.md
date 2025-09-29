[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / VipDameng

# 类: VipDameng

定义于: [packages/data-source/src/core/sql/vip-dameng.ts:11](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-dameng.ts#L11)

达梦数据库

## 实现

- `DataSourceConnector`\<[`DamengOptions`](../interfaces/DamengOptions.md)\>

## 构造函数

### 构造函数

> **new VipDameng**(): `VipDameng`

#### 返回

`VipDameng`

## 方法

### getConnectionData()

> **getConnectionData**(`options`): `Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/core/sql/vip-dameng.ts:15](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/data-source/src/core/sql/vip-dameng.ts#L15)

获取连接数据

#### 参数

##### options

[`DamengOptions`](../interfaces/DamengOptions.md)

#### 返回

`Promise`\<[`DataSourceParseResponse`](../interfaces/DataSourceParseResponse.md)\<`unknown`\>\>

#### 实现了

`DataSourceConnector.getConnectionData`
