[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / UpdateEvent

# 接口: UpdateEvent\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:11

UpdateEvent is an object that broadcaster sends to the entity subscriber when entity is being updated in the database.

## 类型参数

### Entity

`Entity`

## 属性

### connection

> **connection**: [`DataSource`](../classes/DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:15

Connection used in the event.

***

### databaseEntity

> **databaseEntity**: `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:41

Updating entity in the database.

Is set only when one of the following methods are used: .save(), .remove(), .softRemove(), and .recover()

***

### entity

> **entity**: [`ObjectLiteral`](ObjectLiteral.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:31

Updating entity.

Contains the same data that was passed to the updating method, be it the instance of an entity or the partial entity.

***

### manager

> **manager**: [`EntityManager`](../classes/EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:25

EntityManager used in the event transaction.
All database operations in the subscribed event listener should be performed using this entity manager instance.

***

### metadata

> **metadata**: [`EntityMetadata`](../classes/EntityMetadata.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:35

Metadata of the entity.

***

### queryRunner

> **queryRunner**: [`QueryRunner`](QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:20

QueryRunner used in the event transaction.
All database operations in the subscribed event listener should be performed using this query runner instance.

***

### updatedColumns

> **updatedColumns**: `ColumnMetadata`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:45

List of updated columns. In query builder has no affected

***

### updatedRelations

> **updatedRelations**: `RelationMetadata`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/UpdateEvent.d.ts:49

List of updated relations. In query builder has no affected
