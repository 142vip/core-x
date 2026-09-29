[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / DeleteResult

# 类: DeleteResult

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/DeleteResult.d.ts:5

Result object returned by DeleteQueryBuilder execution.

## 构造函数

### 构造函数

> **new DeleteResult**(): `DeleteResult`

#### 返回

`DeleteResult`

## 属性

### affected?

> `optional` **affected?**: `number` \| `null`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/DeleteResult.d.ts:15

Number of affected rows/documents
Not all drivers support this

***

### raw

> **raw**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/DeleteResult.d.ts:10

Raw SQL result returned by executed query.

## 方法

### from()

> `static` **from**(`queryResult`): `DeleteResult`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/result/DeleteResult.d.ts:6

#### 参数

##### queryResult

[`QueryResult`](QueryResult.md)

#### 返回

`DeleteResult`
