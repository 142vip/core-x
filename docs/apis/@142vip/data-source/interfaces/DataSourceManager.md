[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / DataSourceManager

# 接口: DataSourceManager

定义于: [packages/data-source/src/data-source.manager.ts:5](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/data-source.manager.ts#L5)

数据源管理器

## 属性

### getDataBaseNames()

> **getDataBaseNames**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`string`[]\>\>

定义于: [packages/data-source/src/data-source.manager.ts:17](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/data-source.manager.ts#L17)

获取表名列表

#### 返回

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`string`[]\>\>

***

### getTableColumns()

> **getTableColumns**: (`tableName`, `schema?`) => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceColumn`](DataSourceColumn.md)[]\>\>

定义于: [packages/data-source/src/data-source.manager.ts:25](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/data-source.manager.ts#L25)

获取表字段列表

#### 参数

##### tableName

`string`

##### schema?

`string`

#### 返回

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceColumn`](DataSourceColumn.md)[]\>\>

***

### getTableNames()

> **getTableNames**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceTable`](DataSourceTable.md)[]\>\>

定义于: [packages/data-source/src/data-source.manager.ts:21](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/data-source.manager.ts#L21)

获取表名列表

#### 返回

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceTable`](DataSourceTable.md)[]\>\>

***

### parseData()

> **parseData**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/data-source.manager.ts:9](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/data-source.manager.ts#L9)

解析数据

#### 返回

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>

***

### testConnect()

> **testConnect**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>

定义于: [packages/data-source/src/data-source.manager.ts:13](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/data-source/src/data-source.manager.ts#L13)

测试连接

#### 返回

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>
