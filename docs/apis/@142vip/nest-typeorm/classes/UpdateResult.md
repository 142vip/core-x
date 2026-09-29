[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / UpdateResult

# 类: UpdateResult

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/UpdateResult.d.ts:6

Result object returned by UpdateQueryBuilder execution.

## 构造函数

### 构造函数

> **new UpdateResult**(): `UpdateResult`

#### 返回

`UpdateResult`

## 属性

### affected?

> `optional` **affected?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/UpdateResult.d.ts:16

Number of affected rows/documents
Not all drivers support this

***

### generatedMaps

> **generatedMaps**: [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/UpdateResult.d.ts:25

Generated values returned by a database.
Has entity-like structure (not just column database name and values).

***

### raw

> **raw**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/UpdateResult.d.ts:11

Raw SQL result returned by executed query.

## 方法

### from()

> `static` **from**(`queryResult`): `UpdateResult`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/UpdateResult.d.ts:7

#### 参数

##### queryResult

[`QueryResult`](QueryResult.md)

#### 返回

`UpdateResult`
