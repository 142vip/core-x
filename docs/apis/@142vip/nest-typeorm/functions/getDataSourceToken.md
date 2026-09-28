[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / getDataSourceToken

# 函数: getDataSourceToken()

> **getDataSourceToken**(`dataSource?`): `string` \| `Function` \| `Type`\<[`DataSource`](../classes/DataSource.md)\>

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/common/typeorm.utils.d.ts:24

This function returns a DataSource injection token for the given DataSource, DataSourceOptions or dataSource name.

## 参数

### dataSource?

`string` \| [`DataSourceOptions`](../type-aliases/DataSourceOptions.md) \| [`DataSource`](../classes/DataSource.md)

This optional parameter is either
a DataSource, or a DataSourceOptions or a string.

## 返回

`string` \| `Function` \| `Type`\<[`DataSource`](../classes/DataSource.md)\>

The DataSource injection token.
