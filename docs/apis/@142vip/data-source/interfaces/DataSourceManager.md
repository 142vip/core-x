[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / DataSourceManager

# Interface: DataSourceManager

Defined in: [packages/data-source/src/data-source.manager.ts:5](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/data-source.manager.ts#L5)

数据源管理器

## Properties

### getDataBaseNames()

> **getDataBaseNames**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`string`[]\>\>

Defined in: [packages/data-source/src/data-source.manager.ts:17](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/data-source.manager.ts#L17)

获取表名列表

#### Returns

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`string`[]\>\>

***

### getTableColumns()

> **getTableColumns**: (`tableName`, `schema?`) => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceColumn`](DataSourceColumn.md)[]\>\>

Defined in: [packages/data-source/src/data-source.manager.ts:25](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/data-source.manager.ts#L25)

获取表字段列表

#### Parameters

##### tableName

`string`

##### schema?

`string`

#### Returns

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceColumn`](DataSourceColumn.md)[]\>\>

***

### getTableNames()

> **getTableNames**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceTable`](DataSourceTable.md)[]\>\>

Defined in: [packages/data-source/src/data-source.manager.ts:21](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/data-source.manager.ts#L21)

获取表名列表

#### Returns

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<[`DataSourceTable`](DataSourceTable.md)[]\>\>

***

### parseData()

> **parseData**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/data-source.manager.ts:9](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/data-source.manager.ts#L9)

解析数据

#### Returns

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>

***

### testConnect()

> **testConnect**: () => `Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>

Defined in: [packages/data-source/src/data-source.manager.ts:13](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/data-source.manager.ts#L13)

测试连接

#### Returns

`Promise`\<[`DataSourceParseResponse`](DataSourceParseResponse.md)\<`unknown`\>\>
