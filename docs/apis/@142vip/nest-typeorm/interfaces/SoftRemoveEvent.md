[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / SoftRemoveEvent

# 接口: SoftRemoveEvent\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/SoftRemoveEvent.d.ts:5

SoftRemoveEvent is an object that broadcaster sends to the entity subscriber when entity is being soft removed to the database.

## theme_extends

- [`RemoveEvent`](RemoveEvent.md)\<`Entity`\>

## 类型参数

### Entity

`Entity`

## 属性

### connection

> **connection**: [`DataSource`](../classes/DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/RemoveEvent.d.ts:12

Connection used in the event.

#### 继承自

[`RemoveEvent`](RemoveEvent.md).[`connection`](RemoveEvent.md#connection)

***

### databaseEntity

> **databaseEntity**: `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/RemoveEvent.d.ts:35

Database representation of entity that is being removed.

#### 继承自

[`RemoveEvent`](RemoveEvent.md).[`databaseEntity`](RemoveEvent.md#databaseentity)

***

### entity?

> `optional` **entity?**: `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/RemoveEvent.d.ts:27

Entity that is being removed.
This may absent if entity is removed without being loaded (for examples by cascades).

#### 继承自

[`RemoveEvent`](RemoveEvent.md).[`entity`](RemoveEvent.md#entity-1)

***

### entityId?

> `optional` **entityId?**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/RemoveEvent.d.ts:39

Id or ids of the entity that is being removed.

#### 继承自

[`RemoveEvent`](RemoveEvent.md).[`entityId`](RemoveEvent.md#entityid)

***

### manager

> **manager**: [`EntityManager`](../classes/EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/RemoveEvent.d.ts:22

EntityManager used in the event transaction.
All database operations in the subscribed event listener should be performed using this entity manager instance.

#### 继承自

[`RemoveEvent`](RemoveEvent.md).[`manager`](RemoveEvent.md#manager)

***

### metadata

> **metadata**: [`EntityMetadata`](../classes/EntityMetadata.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/RemoveEvent.d.ts:31

Metadata of the entity.

#### 继承自

[`RemoveEvent`](RemoveEvent.md).[`metadata`](RemoveEvent.md#metadata)

***

### queryRunner

> **queryRunner**: [`QueryRunner`](QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/subscriber/event/RemoveEvent.d.ts:17

QueryRunner used in the event transaction.
All database operations in the subscribed event listener should be performed using this query runner instance.

#### 继承自

[`RemoveEvent`](RemoveEvent.md).[`queryRunner`](RemoveEvent.md#queryrunner)
