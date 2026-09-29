[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / RelationCount

# ~~函数: RelationCount()~~

> **RelationCount**\<`T`\>(`relation`, `alias?`, `queryBuilderFactory?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/relations/RelationCount.d.ts:8

Holds a number of children in the closure table of the column.

## 类型参数

### T

`T`

## 参数

### relation

`string` \| ((`object`) => `any`)

### alias?

`string`

### queryBuilderFactory?

(`qb`) => [`SelectQueryBuilder`](../classes/SelectQueryBuilder.md)\<`any`\>

## 返回

`PropertyDecorator`

## 已被弃用

This decorator will removed in the future versions.
Use [VirtualColumn](VirtualColumn.md) to calculate the count instead.
