[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / InsertResult

# 类: InsertResult

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/InsertResult.d.ts:6

Result object returned by InsertQueryBuilder execution.

## 构造函数

### 构造函数

> **new InsertResult**(): `InsertResult`

#### 返回

`InsertResult`

## 属性

### generatedMaps

> **generatedMaps**: [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/InsertResult.d.ts:17

Generated values returned by a database.
Has entity-like structure (not just column database name and values).

***

### identifiers

> **identifiers**: [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/InsertResult.d.ts:12

Contains inserted entity id.
Has entity-like structure (not just column database name and values).

***

### raw

> **raw**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/InsertResult.d.ts:21

Raw SQL result returned by executed query.

## 方法

### from()

> `static` **from**(`queryResult`): `InsertResult`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/InsertResult.d.ts:7

#### 参数

##### queryResult

[`QueryResult`](QueryResult.md)

#### 返回

`InsertResult`
