[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / AfterQueryEvent

# 接口: AfterQueryEvent\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:33

BeforeQueryEvent is an object that broadcaster sends to the entity subscriber before query is ran against the database.

## theme_extends

- [`QueryEvent`](QueryEvent.md)\<`Entity`\>

## 类型参数

### Entity

`Entity`

## 属性

### connection

> **connection**: [`DataSource`](../classes/DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:11

Connection used in the event.

#### 继承自

[`QueryEvent`](QueryEvent.md).[`connection`](QueryEvent.md#connection)

***

### error?

> `optional` **error?**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:49

The error thrown if the query was unsuccessful.

***

### executionTime?

> `optional` **executionTime?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:41

The duration of the query execution, in milliseconds.

***

### manager

> **manager**: [`EntityManager`](../classes/EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:21

EntityManager used in the event transaction.
All database operations in the subscribed event listener should be performed using this entity manager instance.

#### 继承自

[`QueryEvent`](QueryEvent.md).[`manager`](QueryEvent.md#manager)

***

### parameters?

> `optional` **parameters?**: `any`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:29

Parameters used in the query.

#### 继承自

[`QueryEvent`](QueryEvent.md).[`parameters`](QueryEvent.md#parameters)

***

### query

> **query**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:25

Query that is being executed.

#### 继承自

[`QueryEvent`](QueryEvent.md).[`query`](QueryEvent.md#query)

***

### queryRunner

> **queryRunner**: [`QueryRunner`](QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:16

QueryRunner used in the event transaction.
All database operations in the subscribed event listener should be performed using this query runner instance.

#### 继承自

[`QueryEvent`](QueryEvent.md).[`queryRunner`](QueryEvent.md#queryrunner)

***

### rawResults?

> `optional` **rawResults?**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:45

The raw results from the database if the query was successful.

***

### success

> **success**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:37

Whether the query was successful.
