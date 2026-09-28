[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / EntityManager

# 类: EntityManager

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:30

Entity manager supposed to work with any entity, automatically find its repository and call its methods,
whatever entity type are you passing.

## theme_extended_by

- [`MongoEntityManager`](MongoEntityManager.md)

## 构造函数

### 构造函数

> **new EntityManager**(`connection`, `queryRunner?`): `EntityManager`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:54

#### 参数

##### connection

[`DataSource`](DataSource.md)

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`EntityManager`

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:31

***

### connection

> `readonly` **connection**: [`DataSource`](DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:35

Connection used by this entity manager.

***

### plainObjectToEntityTransformer

> `protected` **plainObjectToEntityTransformer**: `PlainObjectToNewEntityTransformer`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:53

Plain to object transformer used in create and merge operations.

***

### queryRunner?

> `readonly` `optional` **queryRunner?**: [`QueryRunner`](../interfaces/QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:40

Custom query runner to be used for operations in this entity manager.
Used only in non-global entity manager.

***

### repositories

> `protected` **repositories**: `Map`\<[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>, [`Repository`](Repository.md)\<`any`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:45

Once created and then reused by repositories.
Created as a future replacement for the #repositories to provide a bit more perf optimization.

***

### treeRepositories

> `protected` **treeRepositories**: [`TreeRepository`](TreeRepository.md)\<`any`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:49

Once created and then reused by repositories.

## 方法

### average()

> **average**\<`Entity`\>(`entityClass`, `columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:288

Return the AVG of a column

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

***

### clear()

> **clear**\<`Entity`\>(`entityClass`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:366

Clears all the data from the given table (truncates/drops it).

Note: this method uses TRUNCATE and may not work as you expect in transactions on some platforms.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

`Promise`\<`void`\>

#### 参阅

https://stackoverflow.com/a/5972738/925151

***

### count()

> **count**\<`Entity`\>(`entityClass`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:275

Counts entities that match given options.
Useful for pagination.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`number`\>

***

### countBy()

> **countBy**\<`Entity`\>(`entityClass`, `where`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:280

Counts entities that match given conditions.
Useful for pagination.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number`\>

***

### create()

#### 调用签名

> **create**\<`Entity`, `EntityLike`\>(`entityClass`, `plainObject?`): `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:107

Creates a new entity instance and copies all entity properties from this object into a new entity.
Note that it copies only properties that present in entity schema.

##### 类型参数

###### Entity

`Entity`

###### EntityLike

`EntityLike`

##### 参数

###### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### plainObject?

`EntityLike`

##### 返回

`Entity`

#### 调用签名

> **create**\<`Entity`, `EntityLike`\>(`entityClass`, `plainObjects?`): `Entity`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:112

Creates a new entities and copies all entity properties from given objects into their new entities.
Note that it copies only properties that present in entity schema.

##### 类型参数

###### Entity

`Entity`

###### EntityLike

`EntityLike`

##### 参数

###### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### plainObjects?

`EntityLike`[]

##### 返回

`Entity`[]

***

### createQueryBuilder()

#### 调用签名

> **createQueryBuilder**\<`Entity`\>(`entityClass`, `alias`, `queryRunner?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:82

Creates a new query builder that can be used to build a SQL query.

##### 类型参数

###### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### alias

`string`

###### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

#### 调用签名

> **createQueryBuilder**(`queryRunner?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:86

Creates a new query builder that can be used to build a SQL query.

##### 参数

###### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

***

### decrement()

> **decrement**\<`Entity`\>(`entityClass`, `conditions`, `propertyPath`, `value`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:374

Decrements some column by provided value of the entities matched given conditions.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### conditions

`any`

##### propertyPath

`string`

##### value

`string` \| `number`

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

***

### delete()

> **delete**\<`Entity`\>(`targetOrEntity`, `criteria`): `Promise`\<[`DeleteResult`](DeleteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:238

Deletes entities by a given condition(s).
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient DELETE query.
Does not check if entity exist in the database.
Condition(s) cannot be empty.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### criteria

`any`

#### 返回

`Promise`\<[`DeleteResult`](DeleteResult.md)\>

***

### deleteAll()

> **deleteAll**\<`Entity`\>(`targetOrEntity`): `Promise`\<[`DeleteResult`](DeleteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:246

Deletes all entities of target type.
This is a primitive operation without cascades, relations or other operations included.
Executes fast and efficient DELETE query without WHERE clause.

WARNING! This method deletes ALL rows in the target table.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

`Promise`\<[`DeleteResult`](DeleteResult.md)\>

***

### exists()

> **exists**\<`Entity`\>(`entityClass`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:266

Checks whether any entity exists with the given options.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`boolean`\>

***

### existsBy()

> **existsBy**\<`Entity`\>(`entityClass`, `where`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:270

Checks whether any entity exists with the given conditions.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`boolean`\>

***

### find()

> **find**\<`Entity`\>(`entityClass`, `options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:301

Finds entities that match given find options.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity`[]\>

***

### findAndCount()

> **findAndCount**\<`Entity`\>(`entityClass`, `options?`): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:311

Finds entities that match given find options.
Also counts all entities that match given conditions,
but ignores pagination settings (from and take options).

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\>

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

***

### findAndCountBy()

> **findAndCountBy**\<`Entity`\>(`entityClass`, `where`): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:317

Finds entities that match given WHERE conditions.
Also counts all entities that match given conditions,
but ignores pagination settings (from and take options).

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

***

### findBy()

> **findBy**\<`Entity`\>(`entityClass`, `where`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:305

Finds entities that match given find options.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`Entity`[]\>

***

### ~~findByIds()~~

> **findByIds**\<`Entity`\>(`entityClass`, `ids`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:328

Finds entities with ids.
Optionally find options or conditions can be applied.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### ids

`any`[]

#### 返回

`Promise`\<`Entity`[]\>

#### 已被弃用

use `findBy` method instead in conjunction with `In` operator, for example:

.findBy(\{
    id: In([1, 2, 3])
\})

***

### findOne()

> **findOne**\<`Entity`\>(`entityClass`, `options`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:333

Finds first entity by a given find options.
If entity was not found in the database - returns null.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options

[`FindOneOptions`](../interfaces/FindOneOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity` \| `null`\>

***

### findOneBy()

> **findOneBy**\<`Entity`\>(`entityClass`, `where`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:338

Finds first entity that matches given where condition.
If entity was not found in the database - returns null.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`Entity` \| `null`\>

***

### ~~findOneById()~~

> **findOneById**\<`Entity`\>(`entityClass`, `id`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:349

Finds first entity that matches given id.
If entity was not found in the database - returns null.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### id

`string` \| `number` \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)

#### 返回

`Promise`\<`Entity` \| `null`\>

#### 已被弃用

use `findOneBy` method instead in conjunction with `In` operator, for example:

.findOneBy(\{
    id: 1 // where "id" is your primary column name
\})

***

### findOneByOrFail()

> **findOneByOrFail**\<`Entity`\>(`entityClass`, `where`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:359

Finds first entity that matches given where condition.
If entity was not found in the database - rejects with error.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`Entity`\>

***

### findOneOrFail()

> **findOneOrFail**\<`Entity`\>(`entityClass`, `options`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:354

Finds first entity by a given find options.
If entity was not found in the database - rejects with error.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options

[`FindOneOptions`](../interfaces/FindOneOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity`\>

***

### ~~getCustomRepository()~~

> **getCustomRepository**\<`T`\>(`customRepository`): `T`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:404

Gets custom entity repository marked with

#### 类型参数

##### T

`T`

#### 参数

##### customRepository

[`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>

#### 返回

`T`

#### Entity Repository

decorator.

#### 已被弃用

use Repository.extend to create custom repositories

***

### getId()

#### 调用签名

> **getId**(`entity`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:98

Gets entity mixed id.

##### 参数

###### entity

`any`

##### 返回

`any`

#### 调用签名

> **getId**(`target`, `entity`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:102

Gets entity mixed id.

##### 参数

###### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

###### entity

`any`

##### 返回

`any`

***

### getMongoRepository()

> **getMongoRepository**\<`Entity`\>(`target`): [`MongoRepository`](MongoRepository.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:392

Gets mongodb repository for the given entity class.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

[`MongoRepository`](MongoRepository.md)\<`Entity`\>

***

### getRepository()

> **getRepository**\<`Entity`\>(`target`): [`Repository`](Repository.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:381

Gets repository for the given entity class or name.
If single database connection mode is used, then repository is obtained from the
repository aggregator, where each repository is individually created for this entity manager.
When single database connection is not used, repository is being obtained from the connection.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

[`Repository`](Repository.md)\<`Entity`\>

***

### getTreeRepository()

> **getTreeRepository**\<`Entity`\>(`target`): [`TreeRepository`](TreeRepository.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:388

Gets tree repository for the given entity class or name.
If single database connection mode is used, then repository is obtained from the
repository aggregator, where each repository is individually created for this entity manager.
When single database connection is not used, repository is being obtained from the connection.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

[`TreeRepository`](TreeRepository.md)\<`Entity`\>

***

### hasId()

#### 调用签名

> **hasId**(`entity`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:90

Checks if entity has an id.

##### 参数

###### entity

`any`

##### 返回

`boolean`

#### 调用签名

> **hasId**(`target`, `entity`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:94

Checks if entity of given schema name has an id.

##### 参数

###### target

`string` \| `Function`

###### entity

`any`

##### 返回

`boolean`

***

### increment()

> **increment**\<`Entity`\>(`entityClass`, `conditions`, `propertyPath`, `value`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:370

Increments some column by provided value of the entities matched given conditions.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### conditions

`any`

##### propertyPath

`string`

##### value

`string` \| `number`

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

***

### insert()

> **insert**\<`Entity`\>(`target`, `entity`): `Promise`\<[`InsertResult`](InsertResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:213

Inserts a given entity into the database.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient INSERT query.
Does not check if entity exist in the database, so query will fail if duplicate entity is being inserted.
You can execute bulk inserts using this method.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### entity

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\> \| `_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>[]

#### 返回

`Promise`\<[`InsertResult`](InsertResult.md)\>

***

### maximum()

> **maximum**\<`Entity`\>(`entityClass`, `columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:296

Return the MAX of a column

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

***

### merge()

> **merge**\<`Entity`\>(`entityClass`, `mergeIntoEntity`, ...`entityLikes`): `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:116

Merges two entities into one new entity.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### mergeIntoEntity

`Entity`

##### entityLikes

...[`DeepPartial`](../type-aliases/DeepPartial.md)\<`Entity`\>[]

#### 返回

`Entity`

***

### minimum()

> **minimum**\<`Entity`\>(`entityClass`, `columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:292

Return the MIN of a column

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

***

### preload()

> **preload**\<`Entity`\>(`entityClass`, `entityLike`): `Promise`\<`Entity` \| `undefined`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:123

Creates a new entity from the given plain javascript object. If entity already exist in the database, then
it loads it (and everything related to it), replaces all values with the new ones from the given object
and returns this new entity. This new entity is actually a loaded from the db entity with all properties
replaced from the new object.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### entityLike

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity` \| `undefined`\>

***

### query()

> **query**\<`T`\>(`query`, `parameters?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:70

Executes raw SQL query and returns raw database results.

#### 类型参数

##### T

`T` = `any`

#### 参数

##### query

`string`

##### parameters?

`any`[]

#### 返回

`Promise`\<`T`\>

#### 参阅

[Official docs](https://typeorm.io/docs/Working%20with%20Entity%20Manager/entity-manager-api/) for examples.

***

### recover()

#### 调用签名

> **recover**\<`Entity`\>(`entities`, `options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:193

Recovers all given entities.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entities

`Entity`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`Entity`[]\>

#### 调用签名

> **recover**\<`Entity`\>(`entity`, `options?`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:197

Recovers a given entity.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entity

`Entity`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`Entity`\>

#### 调用签名

> **recover**\<`Entity`, `T`\>(`targetOrEntity`, `entities`, `options?`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:201

Recovers all given entities.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entities

`T`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`[]\>

#### 调用签名

> **recover**\<`Entity`, `T`\>(`targetOrEntity`, `entity`, `options?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:205

Recovers a given entity.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entity

`T`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`\>

***

### release()

> **release**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:410

Releases all resources used by entity manager.
This is used when entity manager is created with a single query runner,
and this single query runner needs to be released after job with entity manager is done.

#### 返回

`Promise`\<`void`\>

***

### remove()

#### 调用签名

> **remove**\<`Entity`\>(`entity`, `options?`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:161

Removes a given entity from the database.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entity

`Entity`

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`Entity`\>

#### 调用签名

> **remove**\<`Entity`\>(`targetOrEntity`, `entity`, `options?`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:165

Removes a given entity from the database.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entity

`Entity`

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`Entity`\>

#### 调用签名

> **remove**\<`Entity`\>(`entity`, `options?`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:169

Removes a given entity from the database.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entity

`Entity`[]

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`Entity`\>

#### 调用签名

> **remove**\<`Entity`\>(`targetOrEntity`, `entity`, `options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:173

Removes a given entity from the database.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entity

`Entity`[]

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`Entity`[]\>

***

### restore()

> **restore**\<`Entity`\>(`targetOrEntity`, `criteria`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:262

Restores entities by a given condition(s).
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.
Condition(s) cannot be empty.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### criteria

`any`

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

***

### save()

#### 调用签名

> **save**\<`Entity`\>(`entities`, `options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:128

Saves all given entities in the database.
If entities do not exist in the database then inserts, otherwise updates.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entities

`Entity`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`Entity`[]\>

#### 调用签名

> **save**\<`Entity`\>(`entity`, `options?`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:133

Saves all given entities in the database.
If entities do not exist in the database then inserts, otherwise updates.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entity

`Entity`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`Entity`\>

#### 调用签名

> **save**\<`Entity`, `T`\>(`targetOrEntity`, `entities`, `options`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:138

Saves all given entities in the database.
If entities do not exist in the database then inserts, otherwise updates.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entities

`T`[]

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`[]\>

#### 调用签名

> **save**\<`Entity`, `T`\>(`targetOrEntity`, `entities`, `options?`): `Promise`\<`T` & `Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:145

Saves all given entities in the database.
If entities do not exist in the database then inserts, otherwise updates.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entities

`T`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`[]\>

#### 调用签名

> **save**\<`Entity`, `T`\>(`targetOrEntity`, `entity`, `options`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:150

Saves a given entity in the database.
If entity does not exist in the database then inserts, otherwise updates.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entity

`T`

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`\>

#### 调用签名

> **save**\<`Entity`, `T`\>(`targetOrEntity`, `entity`, `options?`): `Promise`\<`T` & `Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:157

Saves a given entity in the database.
If entity does not exist in the database then inserts, otherwise updates.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entity

`T`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`\>

***

### softDelete()

> **softDelete**\<`Entity`\>(`targetOrEntity`, `criteria`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:254

Records the delete date of entities by a given condition(s).
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.
Condition(s) cannot be empty.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### criteria

`any`

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

***

### softRemove()

#### 调用签名

> **softRemove**\<`Entity`\>(`entities`, `options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:177

Records the delete date of all given entities.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entities

`Entity`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`Entity`[]\>

#### 调用签名

> **softRemove**\<`Entity`\>(`entity`, `options?`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:181

Records the delete date of a given entity.

##### 类型参数

###### Entity

`Entity`

##### 参数

###### entity

`Entity`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`Entity`\>

#### 调用签名

> **softRemove**\<`Entity`, `T`\>(`targetOrEntity`, `entities`, `options?`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:185

Records the delete date of all given entities.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entities

`T`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`[]\>

#### 调用签名

> **softRemove**\<`Entity`, `T`\>(`targetOrEntity`, `entity`, `options?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:189

Records the delete date of a given entity.

##### 类型参数

###### Entity

`Entity`

###### T

`T`

##### 参数

###### targetOrEntity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### entity

`T`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`\>

***

### sql()

> **sql**\<`T`\>(`strings`, ...`values`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:78

Tagged template function that executes raw SQL query and returns raw database results.
Template expressions are automatically transformed into database parameters.
Raw query execution is supported only by relational databases (MongoDB is not supported).
Note: Don't call this as a regular function, it is meant to be used with backticks to tag a template literal.
Example: entityManager.sql`SELECT * FROM table_name WHERE id = ${id}`

#### 类型参数

##### T

`T` = `any`

#### 参数

##### strings

`TemplateStringsArray`

##### values

...`unknown`[]

#### 返回

`Promise`\<`T`\>

***

### sum()

> **sum**\<`Entity`\>(`entityClass`, `columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:284

Return the SUM of a column

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

***

### transaction()

#### 调用签名

> **transaction**\<`T`\>(`runInTransaction`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:59

Wraps given function execution (and all operations made there) in a transaction.
All database operations must be executed using provided entity manager.

##### 类型参数

###### T

`T`

##### 参数

###### runInTransaction

(`entityManager`) => `Promise`\<`T`\>

##### 返回

`Promise`\<`T`\>

#### 调用签名

> **transaction**\<`T`\>(`isolationLevel`, `runInTransaction`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:64

Wraps given function execution (and all operations made there) in a transaction.
All database operations must be executed using provided entity manager.

##### 类型参数

###### T

`T`

##### 参数

###### isolationLevel

`IsolationLevel`

###### runInTransaction

(`entityManager`) => `Promise`\<`T`\>

##### 返回

`Promise`\<`T`\>

***

### update()

> **update**\<`Entity`\>(`target`, `criteria`, `partialEntity`, `options?`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:222

Updates entity partially. Entity can be found by a given condition(s).
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.
Condition(s) cannot be empty.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### criteria

`any`

##### partialEntity

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

##### options?

[`RepositoryUpdateOptions`](../interfaces/RepositoryUpdateOptions.md)

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

***

### updateAll()

> **updateAll**\<`Entity`\>(`target`, `partialEntity`, `options?`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:230

Updates all entities of target type, setting fields from supplied partial entity.
This is a primitive operation without cascades, relations or other operations included.
Executes fast and efficient UPDATE query without WHERE clause.

WARNING! This method updates ALL rows in the target table.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### partialEntity

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

##### options?

[`RepositoryUpdateOptions`](../interfaces/RepositoryUpdateOptions.md)

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

***

### upsert()

> **upsert**\<`Entity`\>(`target`, `entityOrEntities`, `conflictPathsOrOptions`): `Promise`\<[`InsertResult`](InsertResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:214

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### entityOrEntities

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\> \| `_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>[]

##### conflictPathsOrOptions

`string`[] \| [`UpsertOptions`](../interfaces/UpsertOptions.md)\<`Entity`\>

#### 返回

`Promise`\<[`InsertResult`](InsertResult.md)\>

***

### withRepository()

> **withRepository**\<`Entity`, `R`\>(`repository`): `R`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:398

Creates a new repository instance out of a given Repository and
sets current EntityManager instance to it. Used to work with custom repositories
in transactions.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### R

`R` *extends* [`Repository`](Repository.md)\<`any`\>

#### 参数

##### repository

`R` & [`Repository`](Repository.md)\<`Entity`\>

#### 返回

`R`
