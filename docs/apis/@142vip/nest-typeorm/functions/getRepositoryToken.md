[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / getRepositoryToken

# 函数: getRepositoryToken()

> **getRepositoryToken**(`entity`, `dataSource?`): `string` \| `Function`

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/common/typeorm.utils.d.ts:11

This function generates an injection token for an Entity or Repository

## 参数

### entity

`EntityClassOrSchema`

parameter can either be an Entity or Repository

### dataSource?

`string` \| [`DataSourceOptions`](../type-aliases/DataSourceOptions.md) \| [`DataSource`](../classes/DataSource.md)

DataSource name

## 返回

`string` \| `Function`

The Entity | Repository injection token
