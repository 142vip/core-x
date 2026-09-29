[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / QueryEvent

# 接口: QueryEvent\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:7

BeforeQueryEvent is an object that broadcaster sends to the entity subscriber before query is ran against the database.

## theme_extended_by

- [`BeforeQueryEvent`](BeforeQueryEvent.md)
- [`AfterQueryEvent`](AfterQueryEvent.md)

## 类型参数

### Entity

`Entity`

## 属性

### connection

> **connection**: [`DataSource`](../classes/DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:11

Connection used in the event.

***

### manager

> **manager**: [`EntityManager`](../classes/EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:21

EntityManager used in the event transaction.
All database operations in the subscribed event listener should be performed using this entity manager instance.

***

### parameters?

> `optional` **parameters?**: `any`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:29

Parameters used in the query.

***

### query

> **query**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:25

Query that is being executed.

***

### queryRunner

> **queryRunner**: [`QueryRunner`](QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/QueryEvent.d.ts:16

QueryRunner used in the event transaction.
All database operations in the subscribed event listener should be performed using this query runner instance.
