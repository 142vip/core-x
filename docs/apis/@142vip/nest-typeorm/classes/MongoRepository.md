[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MongoRepository

# 类: MongoRepository\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:14

Repository used to manage mongodb documents of a single entity type.

## theme_extends

- [`Repository`](Repository.md)\<`Entity`\>

## 类型参数

### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

## 构造函数

### 构造函数

> **new MongoRepository**\<`Entity`\>(`target`, `manager`, `queryRunner?`): `MongoRepository`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:42

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### manager

[`EntityManager`](EntityManager.md)

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`MongoRepository`\<`Entity`\>

#### 继承自

[`Repository`](Repository.md).[`constructor`](Repository.md#constructor)

## 属性

### manager

> `readonly` **manager**: [`MongoEntityManager`](MongoEntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:18

Entity Manager used by this repository.

#### 重写了

[`Repository`](Repository.md).[`manager`](Repository.md#manager)

***

### queryRunner?

> `readonly` `optional` **queryRunner?**: [`QueryRunner`](../interfaces/QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:37

Query runner provider used for this repository.

#### 继承自

[`Repository`](Repository.md).[`queryRunner`](Repository.md#queryrunner)

***

### target

> `readonly` **target**: [`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:29

Entity target that is managed by this repository.
If this repository manages entity from schema,
then it returns a name of that schema instead.

#### 继承自

[`Repository`](Repository.md).[`target`](Repository.md#target)

## 访问器

### metadata

#### Getter 签名

> **get** **metadata**(): [`EntityMetadata`](EntityMetadata.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:41

Entity metadata of the entity current repository manages.

##### 返回

[`EntityMetadata`](EntityMetadata.md)

#### 继承自

[`Repository`](Repository.md).[`metadata`](Repository.md#metadata)

## 方法

### aggregate()

> **aggregate**\<`R`\>(`pipeline`, `options?`): [`AggregationCursor`](AggregationCursor.md)\<`R`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:100

Execute an aggregation framework pipeline against the collection.

#### 类型参数

##### R

`R` = `any`

#### 参数

##### pipeline

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)[]

##### options?

[`AggregateOptions`](../interfaces/AggregateOptions.md)

#### 返回

[`AggregationCursor`](AggregationCursor.md)\<`R`\>

***

### aggregateEntity()

> **aggregateEntity**(`pipeline`, `options?`): [`AggregationCursor`](AggregationCursor.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:105

Execute an aggregation framework pipeline against the collection.
This returns modified version of cursor that transforms each result into Entity model.

#### 参数

##### pipeline

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)[]

##### options?

[`AggregateOptions`](../interfaces/AggregateOptions.md)

#### 返回

[`AggregationCursor`](AggregationCursor.md)\<`Entity`\>

***

### average()

> **average**(`columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:246

Return the AVG of a column

#### 参数

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

#### 继承自

[`Repository`](Repository.md).[`average`](Repository.md#average)

***

### bulkWrite()

> **bulkWrite**(`operations`, `options?`): `Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:109

Perform a bulkWrite operation without a fluent API.

#### 参数

##### operations

[`AnyBulkWriteOperation`](../type-aliases/AnyBulkWriteOperation.md)[]

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

`Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

***

### clear()

> **clear**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:338

Clears all the data from the given table/collection (truncates/drops it).

Note: this method uses TRUNCATE and may not work as you expect in transactions on some platforms.

#### 返回

`Promise`\<`void`\>

#### 参阅

https://stackoverflow.com/a/5972738/925151

#### 继承自

[`Repository`](Repository.md).[`clear`](Repository.md#clear)

***

### collectionIndexes()

> **collectionIndexes**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:167

Retrieve all the indexes on the collection.

#### 返回

`Promise`\<`any`\>

***

### collectionIndexExists()

> **collectionIndexExists**(`indexes`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:171

Retrieve all the indexes on the collection.

#### 参数

##### indexes

`string` \| `string`[]

#### 返回

`Promise`\<`boolean`\>

***

### collectionIndexInformation()

> **collectionIndexInformation**(`options?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:175

Retrieves this collections index info.

#### 参数

##### options?

###### full

`boolean`

#### 返回

`Promise`\<`any`\>

***

### count()

> **count**(`query?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:113

Count number of matching documents in the db to a query.

#### 参数

##### query?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`CountOptions`](../interfaces/CountOptions.md)

#### 返回

`Promise`\<`number`\>

#### 重写了

[`Repository`](Repository.md).[`count`](Repository.md#count)

***

### countBy()

> **countBy**(`query?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:121

Count number of matching documents in the db to a query.

#### 参数

##### query?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`CountOptions`](../interfaces/CountOptions.md)

#### 返回

`Promise`\<`number`\>

#### 重写了

[`Repository`](Repository.md).[`countBy`](Repository.md#countby)

***

### countDocuments()

> **countDocuments**(`query?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:117

Count number of matching documents in the db to a query.

#### 参数

##### query?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`CountDocumentsOptions`](../interfaces/CountDocumentsOptions.md)

#### 返回

`Promise`\<`number`\>

***

### create()

#### 调用签名

> **create**(): `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:59

Creates a new entity instance.

##### 返回

`Entity`

##### 继承自

[`Repository`](Repository.md).[`create`](Repository.md#create)

#### 调用签名

> **create**(`entityLikeArray`): `Entity`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:64

Creates new entities and copies all entity properties from given objects into their new entities.
Note that it copies only properties that are present in entity schema.

##### 参数

###### entityLikeArray

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`Entity`\>[]

##### 返回

`Entity`[]

##### 继承自

[`Repository`](Repository.md).[`create`](Repository.md#create)

#### 调用签名

> **create**(`entityLike`): `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:69

Creates a new entity instance and copies all entity properties from this object into a new entity.
Note that it copies only properties that are present in entity schema.

##### 参数

###### entityLike

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`Entity`\>

##### 返回

`Entity`

##### 继承自

[`Repository`](Repository.md).[`create`](Repository.md#create)

***

### createCollectionIndex()

> **createCollectionIndex**(`fieldOrSpec`, `options?`): `Promise`\<`string`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:125

Creates an index on the db and collection.

#### 参数

##### fieldOrSpec

`any`

##### options?

[`CreateIndexesOptions`](../interfaces/CreateIndexesOptions.md)

#### 返回

`Promise`\<`string`\>

***

### createCollectionIndexes()

> **createCollectionIndexes**(`indexSpecs`): `Promise`\<`string`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:131

Creates multiple indexes in the collection, this method is only supported for MongoDB 2.6 or higher.
Earlier version of MongoDB will throw a command not supported error.
Index specifications are defined at http://docs.mongodb.org/manual/reference/command/createIndexes/.

#### 参数

##### indexSpecs

[`IndexDescription`](../interfaces/IndexDescription.md)[]

#### 返回

`Promise`\<`string`[]\>

***

### createCursor()

> **createCursor**\<`T`\>(`query?`): [`FindCursor`](FindCursor.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:91

Creates a cursor for a query that can be used to iterate over results from MongoDB.

#### 类型参数

##### T

`T` = `any`

#### 参数

##### query?

[`Filter`](../type-aliases/Filter.md)\<`Entity`\>

#### 返回

[`FindCursor`](FindCursor.md)\<`T`\>

***

### createEntityCursor()

> **createEntityCursor**(`query?`): [`FindCursor`](FindCursor.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:96

Creates a cursor for a query that can be used to iterate over results from MongoDB.
This returns modified version of cursor that transforms each result into Entity model.

#### 参数

##### query?

[`Filter`](../type-aliases/Filter.md)\<`Entity`\>

#### 返回

[`FindCursor`](FindCursor.md)\<`Entity`\>

***

### createQueryBuilder()

> **createQueryBuilder**(`alias`, `queryRunner?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:28

Using Query Builder with MongoDB is not supported yet.
Calling this method will return an error.

#### 参数

##### alias

`string`

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

#### 重写了

[`Repository`](Repository.md).[`createQueryBuilder`](Repository.md#createquerybuilder)

***

### decrement()

> **decrement**(`conditions`, `propertyPath`, `value`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:346

Decrements some column by provided value of the entities matched given conditions.

#### 参数

##### conditions

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>

##### propertyPath

`string`

##### value

`string` \| `number`

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`decrement`](Repository.md#decrement)

***

### delete()

> **delete**(`criteria`): `Promise`\<[`DeleteResult`](DeleteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:190

Deletes entities by a given criteria.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient DELETE query.
Does not check if entity exist in the database.

#### 参数

##### criteria

`string` \| `number` \| `string`[] \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[] \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<[`DeleteResult`](DeleteResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`delete`](Repository.md#delete)

***

### deleteAll()

> **deleteAll**(): `Promise`\<[`DeleteResult`](DeleteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:198

Deletes all entities of target type.
This is a primitive operation without cascades, relations or other operations included.
Executes fast and efficient DELETE query without WHERE clause.

WARNING! This method deletes ALL rows in the target table.

#### 返回

`Promise`\<[`DeleteResult`](DeleteResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`deleteAll`](Repository.md#deleteall)

***

### deleteMany()

> **deleteMany**(`query`, `options?`): `Promise`\<`DeleteResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:135

Delete multiple documents on MongoDB.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`DeleteOptions`](../interfaces/DeleteOptions.md)

#### 返回

`Promise`\<`DeleteResult`\>

***

### deleteOne()

> **deleteOne**(`query`, `options?`): `Promise`\<`DeleteResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:139

Delete a document on MongoDB.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`DeleteOptions`](../interfaces/DeleteOptions.md)

#### 返回

`Promise`\<`DeleteResult`\>

***

### distinct()

> **distinct**(`key`, `query`, `options?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:143

The distinct command returns returns a list of distinct values for the given key across a collection.

#### 参数

##### key

`string`

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

#### 返回

`Promise`\<`any`\>

***

### dropCollectionIndex()

> **dropCollectionIndex**(`indexName`, `options?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:147

Drops an index from this collection.

#### 参数

##### indexName

`string`

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

#### 返回

`Promise`\<`any`\>

***

### dropCollectionIndexes()

> **dropCollectionIndexes**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:151

Drops all indexes from the collection.

#### 返回

`Promise`\<`any`\>

***

### ~~exist()~~

> **exist**(`options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:220

Checks whether any entity exists that matches the given options.

#### 参数

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`boolean`\>

#### 已被弃用

use `exists` method instead, for example:

.exists()

#### 继承自

[`Repository`](Repository.md).[`exist`](Repository.md#exist)

***

### exists()

> **exists**(`options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:224

Checks whether any entity exists that matches the given options.

#### 参数

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`boolean`\>

#### 继承自

[`Repository`](Repository.md).[`exists`](Repository.md#exists)

***

### existsBy()

> **existsBy**(`where`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:228

Checks whether any entity exists that matches the given conditions.

#### 参数

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`boolean`\>

#### 继承自

[`Repository`](Repository.md).[`existsBy`](Repository.md#existsby)

***

### extend()

> **extend**\<`CustomRepository`\>(`customs`): `MongoRepository`\<`Entity`\> & `CustomRepository`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:350

Extends repository with provided functions.

#### 类型参数

##### CustomRepository

`CustomRepository`

#### 参数

##### customs

`CustomRepository` & `ThisType`\<`MongoRepository`\<`Entity`\> & `CustomRepository`\>

#### 返回

`MongoRepository`\<`Entity`\> & `CustomRepository`

#### 继承自

[`Repository`](Repository.md).[`extend`](Repository.md#extend)

***

### find()

> **find**(`options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:32

Finds entities that match given find options or conditions.

#### 参数

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\> \| `Partial`\<`Entity`\> \| [`FilterOperators`](../interfaces/FilterOperators.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity`[]\>

#### 重写了

[`Repository`](Repository.md).[`find`](Repository.md#find)

***

### findAndCount()

> **findAndCount**(`options?`): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:42

Finds entities that match given find options or conditions.
Also counts all entities that match given conditions,
but ignores pagination settings (from and take options).

#### 参数

##### options?

`MongoFindManyOptions`\<`Entity`\>

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

#### 重写了

[`Repository`](Repository.md).[`findAndCount`](Repository.md#findandcount)

***

### findAndCountBy()

> **findAndCountBy**(`where`): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:48

Finds entities that match given find options or conditions.
Also counts all entities that match given conditions,
but ignores pagination settings (from and take options).

#### 参数

##### where

`any`

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

#### 重写了

[`Repository`](Repository.md).[`findAndCountBy`](Repository.md#findandcountby)

***

### findBy()

> **findBy**(`where`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:36

Finds entities that match given find options or conditions.

#### 参数

##### where

`any`

#### 返回

`Promise`\<`Entity`[]\>

#### 重写了

[`Repository`](Repository.md).[`findBy`](Repository.md#findby)

***

### ~~findByIds()~~

> **findByIds**(`ids`, `options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:59

Finds entities by ids.
Optionally find options can be applied.

#### 参数

##### ids

`any`[]

##### options?

`any`

#### 返回

`Promise`\<`Entity`[]\>

#### 已被弃用

use `findBy` method instead in conjunction with `In` operator, for example:

.findBy(\{
    id: In([1, 2, 3])
\})

#### 重写了

[`Repository`](Repository.md).[`findByIds`](Repository.md#findbyids)

***

### findOne()

> **findOne**(`options`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:63

Finds first entity that matches given find options.

#### 参数

##### options

`MongoFindOneOptions`\<`Entity`\>

#### 返回

`Promise`\<`Entity` \| `null`\>

#### 重写了

[`Repository`](Repository.md).[`findOne`](Repository.md#findone)

***

### findOneAndDelete()

> **findOneAndDelete**(`query`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:155

Find a document and delete it in one atomic operation, requires a write lock for the duration of the operation.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`FindOneAndDeleteOptions`](../interfaces/FindOneAndDeleteOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

***

### findOneAndReplace()

> **findOneAndReplace**(`query`, `replacement`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:159

Find a document and replace it in one atomic operation, requires a write lock for the duration of the operation.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### replacement

`Object`

##### options?

[`FindOneAndReplaceOptions`](../interfaces/FindOneAndReplaceOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

***

### findOneAndUpdate()

> **findOneAndUpdate**(`query`, `update`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:163

Find a document and update it in one atomic operation, requires a write lock for the duration of the operation.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### update

`Object`

##### options?

[`FindOneAndUpdateOptions`](../interfaces/FindOneAndUpdateOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

***

### findOneBy()

> **findOneBy**(`where`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:67

Finds first entity that matches given WHERE conditions.

#### 参数

##### where

`any`

#### 返回

`Promise`\<`Entity` \| `null`\>

#### 重写了

[`Repository`](Repository.md).[`findOneBy`](Repository.md#findoneby)

***

### ~~findOneById()~~

> **findOneById**(`id`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:77

Finds entity that matches given id.

#### 参数

##### id

`string` \| `number` \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)

#### 返回

`Promise`\<`Entity` \| `null`\>

#### 已被弃用

use `findOneBy` method instead in conjunction with `In` operator, for example:

.findOneBy(\{
    id: 1 // where "id" is your primary column name
\})

#### 重写了

[`Repository`](Repository.md).[`findOneById`](Repository.md#findonebyid)

***

### findOneByOrFail()

> **findOneByOrFail**(`where`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:87

Finds first entity that matches given where condition.
If entity was not found in the database - rejects with error.

#### 参数

##### where

`any`

#### 返回

`Promise`\<`Entity`\>

#### 重写了

[`Repository`](Repository.md).[`findOneByOrFail`](Repository.md#findonebyorfail)

***

### findOneOrFail()

> **findOneOrFail**(`options`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:82

Finds first entity by a given find options.
If entity was not found in the database - rejects with error.

#### 参数

##### options

[`FindOneOptions`](../interfaces/FindOneOptions.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity`\>

#### 重写了

[`Repository`](Repository.md).[`findOneOrFail`](Repository.md#findoneorfail)

***

### getId()

> **getId**(`entity`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:55

Gets entity mixed id.

#### 参数

##### entity

`Entity`

#### 返回

`any`

#### 继承自

[`Repository`](Repository.md).[`getId`](Repository.md#getid)

***

### hasId()

> **hasId**(`entity`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:51

Checks if entity has an id.
If entity composite compose ids, it will check them all.

#### 参数

##### entity

`Entity`

#### 返回

`boolean`

#### 继承自

[`Repository`](Repository.md).[`hasId`](Repository.md#hasid)

***

### increment()

> **increment**(`conditions`, `propertyPath`, `value`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:342

Increments some column by provided value of the entities matched given conditions.

#### 参数

##### conditions

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>

##### propertyPath

`string`

##### value

`string` \| `number`

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`increment`](Repository.md#increment)

***

### initializeOrderedBulkOp()

> **initializeOrderedBulkOp**(`options?`): [`OrderedBulkOperation`](OrderedBulkOperation.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:181

Initiate an In order bulk write operation, operations will be serially executed in the order they are added, creating a new operation for each switch in types.

#### 参数

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

[`OrderedBulkOperation`](OrderedBulkOperation.md)

***

### initializeUnorderedBulkOp()

> **initializeUnorderedBulkOp**(`options?`): [`UnorderedBulkOperation`](UnorderedBulkOperation.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:185

Initiate a Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.

#### 参数

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

[`UnorderedBulkOperation`](UnorderedBulkOperation.md)

***

### insert()

> **insert**(`entity`): `Promise`\<[`InsertResult`](InsertResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:162

Inserts a given entity into the database.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient INSERT query.
Does not check if entity exist in the database, so query will fail if duplicate entity is being inserted.

#### 参数

##### entity

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\> \| `_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>[]

#### 返回

`Promise`\<[`InsertResult`](InsertResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`insert`](Repository.md#insert)

***

### insertMany()

> **insertMany**(`docs`, `options?`): `Promise`\<[`InsertManyResult`](../interfaces/InsertManyResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:189

Inserts an array of documents into MongoDB.

#### 参数

##### docs

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)[]

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

`Promise`\<[`InsertManyResult`](../interfaces/InsertManyResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

***

### insertOne()

> **insertOne**(`doc`, `options?`): `Promise`\<[`InsertOneResult`](../interfaces/InsertOneResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:193

Inserts a single document into MongoDB.

#### 参数

##### doc

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`InsertOneOptions`](../interfaces/InsertOneOptions.md)

#### 返回

`Promise`\<[`InsertOneResult`](../interfaces/InsertOneResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

***

### isCapped()

> **isCapped**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:197

Returns if the collection is a capped collection.

#### 返回

`Promise`\<`any`\>

***

### listCollectionIndexes()

> **listCollectionIndexes**(`options?`): [`ListIndexesCursor`](ListIndexesCursor.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:201

Get the list of all indexes information for the collection.

#### 参数

##### options?

[`ListIndexesOptions`](../interfaces/ListIndexesOptions.md)

#### 返回

[`ListIndexesCursor`](ListIndexesCursor.md)

***

### maximum()

> **maximum**(`columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:254

Return the MAX of a column

#### 参数

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

#### 继承自

[`Repository`](Repository.md).[`maximum`](Repository.md#maximum)

***

### merge()

> **merge**(`mergeIntoEntity`, ...`entityLikes`): `Entity`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:73

Merges multiple entities (or entity-like objects) into a given entity.

#### 参数

##### mergeIntoEntity

`Entity`

##### entityLikes

...[`DeepPartial`](../type-aliases/DeepPartial.md)\<`Entity`\>[]

#### 返回

`Entity`

#### 继承自

[`Repository`](Repository.md).[`merge`](Repository.md#merge)

***

### minimum()

> **minimum**(`columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:250

Return the MIN of a column

#### 参数

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

#### 继承自

[`Repository`](Repository.md).[`minimum`](Repository.md#minimum)

***

### preload()

> **preload**(`entityLike`): `Promise`\<`Entity` \| `undefined`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:83

Creates a new entity from the given plain javascript object. If entity already exist in the database, then
it loads it (and everything related to it), replaces all values with the new ones from the given object
and returns this new entity. This new entity is actually a loaded from the db entity with all properties
replaced from the new object.

Note that given entity-like object must have an entity id / primary key to find entity by.
Returns undefined if entity with given id was not found.

#### 参数

##### entityLike

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity` \| `undefined`\>

#### 继承自

[`Repository`](Repository.md).[`preload`](Repository.md#preload)

***

### query()

> **query**(`query`, `parameters?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:23

Raw SQL query execution is not supported by MongoDB.
Calling this method will return an error.

#### 参数

##### query

`string`

##### parameters?

`any`[]

#### 返回

`Promise`\<`any`\>

#### 重写了

[`Repository`](Repository.md).[`query`](Repository.md#query)

***

### recover()

#### 调用签名

> **recover**\<`T`\>(`entities`, `options`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:139

Recovers all given entities in the database.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entities

`T`[]

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`[]\>

##### 继承自

[`Repository`](Repository.md).[`recover`](Repository.md#recover)

#### 调用签名

> **recover**\<`T`\>(`entities`, `options?`): `Promise`\<`T` & `Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:145

Recovers all given entities in the database.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entities

`T`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`[]\>

##### 继承自

[`Repository`](Repository.md).[`recover`](Repository.md#recover)

#### 调用签名

> **recover**\<`T`\>(`entity`, `options`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:149

Recovers a given entity in the database.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entity

`T`

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`\>

##### 继承自

[`Repository`](Repository.md).[`recover`](Repository.md#recover)

#### 调用签名

> **recover**\<`T`\>(`entity`, `options?`): `Promise`\<`T` & `Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:155

Recovers a given entity in the database.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entity

`T`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`\>

##### 继承自

[`Repository`](Repository.md).[`recover`](Repository.md#recover)

***

### remove()

#### 调用签名

> **remove**(`entities`, `options?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:111

Removes a given entities from the database.

##### 参数

###### entities

`Entity`[]

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`Entity`[]\>

##### 继承自

[`Repository`](Repository.md).[`remove`](Repository.md#remove)

#### 调用签名

> **remove**(`entity`, `options?`): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:115

Removes a given entity from the database.

##### 参数

###### entity

`Entity`

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`Entity`\>

##### 继承自

[`Repository`](Repository.md).[`remove`](Repository.md#remove)

***

### rename()

> **rename**(`newName`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:205

Reindex all indexes on the collection Warning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections.

#### 参数

##### newName

`string`

##### options?

###### dropTarget?

`boolean`

#### 返回

`Promise`\<[`Collection`](Collection.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

***

### replaceOne()

> **replaceOne**(`query`, `doc`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:211

Replace a document on MongoDB.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### doc

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`ReplaceOptions`](../interfaces/ReplaceOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

***

### restore()

> **restore**(`criteria`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:212

Restores entities by a given criteria.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.

#### 参数

##### criteria

`string` \| `number` \| `string`[] \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[] \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`restore`](Repository.md#restore)

***

### save()

#### 调用签名

> **save**\<`T`\>(`entities`, `options`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:88

Saves all given entities in the database.
If entities do not exist in the database then inserts, otherwise updates.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entities

`T`[]

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`[]\>

##### 继承自

[`Repository`](Repository.md).[`save`](Repository.md#save)

#### 调用签名

> **save**\<`T`\>(`entities`, `options?`): `Promise`\<`T` & `Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:95

Saves all given entities in the database.
If entities do not exist in the database then inserts, otherwise updates.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entities

`T`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`[]\>

##### 继承自

[`Repository`](Repository.md).[`save`](Repository.md#save)

#### 调用签名

> **save**\<`T`\>(`entity`, `options`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:100

Saves a given entity in the database.
If entity does not exist in the database then inserts, otherwise updates.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entity

`T`

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`\>

##### 继承自

[`Repository`](Repository.md).[`save`](Repository.md#save)

#### 调用签名

> **save**\<`T`\>(`entity`, `options?`): `Promise`\<`T` & `Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:107

Saves a given entity in the database.
If entity does not exist in the database then inserts, otherwise updates.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entity

`T`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`\>

##### 继承自

[`Repository`](Repository.md).[`save`](Repository.md#save)

***

### softDelete()

> **softDelete**(`criteria`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:205

Records the delete date of entities by a given criteria.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.

#### 参数

##### criteria

`string` \| `number` \| `string`[] \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[] \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`softDelete`](Repository.md#softdelete)

***

### softRemove()

#### 调用签名

> **softRemove**\<`T`\>(`entities`, `options`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:119

Records the delete date of all given entities.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entities

`T`[]

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`[]\>

##### 继承自

[`Repository`](Repository.md).[`softRemove`](Repository.md#softremove)

#### 调用签名

> **softRemove**\<`T`\>(`entities`, `options?`): `Promise`\<`T` & `Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:125

Records the delete date of all given entities.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entities

`T`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`[]\>

##### 继承自

[`Repository`](Repository.md).[`softRemove`](Repository.md#softremove)

#### 调用签名

> **softRemove**\<`T`\>(`entity`, `options`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:129

Records the delete date of a given entity.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entity

`T`

###### options

[`SaveOptions`](../interfaces/SaveOptions.md) & `object`

##### 返回

`Promise`\<`T`\>

##### 继承自

[`Repository`](Repository.md).[`softRemove`](Repository.md#softremove)

#### 调用签名

> **softRemove**\<`T`\>(`entity`, `options?`): `Promise`\<`T` & `Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:135

Records the delete date of a given entity.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Map`\<`unknown`, `unknown`\> \| `Set`\<`unknown`\> \| `any`[] \| \{\[`key`: `string`\]: `any`; \}

##### 参数

###### entity

`T`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T` & `Entity`\>

##### 继承自

[`Repository`](Repository.md).[`softRemove`](Repository.md#softremove)

***

### sql()

> **sql**\<`T`\>(`strings`, ...`values`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:331

Tagged template function that executes raw SQL query and returns raw database results.
Template expressions are automatically transformed into database parameters.
Raw query execution is supported only by relational databases (MongoDB is not supported).
Note: Don't call this as a regular function, it is meant to be used with backticks to tag a template literal.
Example: repository.sql`SELECT * FROM table_name WHERE id = ${id}`

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

#### 继承自

[`Repository`](Repository.md).[`sql`](Repository.md#sql)

***

### stats()

> **stats**(`options?`): `Promise`\<[`CollStats`](../interfaces/CollStats.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:215

Get all the collection statistics.

#### 参数

##### options?

[`CollStatsOptions`](../interfaces/CollStatsOptions.md)

#### 返回

`Promise`\<[`CollStats`](../interfaces/CollStats.md)\>

***

### sum()

> **sum**(`columnName`, `where?`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:242

Return the SUM of a column

#### 参数

##### columnName

`PickKeysByType`\<`Entity`, `number`\>

##### where?

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

#### 返回

`Promise`\<`number` \| `null`\>

#### 继承自

[`Repository`](Repository.md).[`sum`](Repository.md#sum)

***

### update()

> **update**(`criteria`, `partialEntity`, `options?`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:169

Updates entity partially. Entity can be found by a given conditions.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.

#### 参数

##### criteria

`string` \| `number` \| `string`[] \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[] \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

##### partialEntity

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

##### options?

[`RepositoryUpdateOptions`](../interfaces/RepositoryUpdateOptions.md)

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`update`](Repository.md#update)

***

### updateAll()

> **updateAll**(`partialEntity`, `options?`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:177

Updates all entities of target type, setting fields from supplied partial entity.
This is a primitive operation without cascades, relations or other operations included.
Executes fast and efficient UPDATE query without WHERE clause.

WARNING! This method updates ALL rows in the target table.

#### 参数

##### partialEntity

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

##### options?

[`RepositoryUpdateOptions`](../interfaces/RepositoryUpdateOptions.md)

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`updateAll`](Repository.md#updateall)

***

### updateMany()

> **updateMany**(`query`, `update`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:219

Update multiple documents on MongoDB.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`UpdateOptions`](../interfaces/UpdateOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

***

### updateOne()

> **updateOne**(`query`, `update`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/MongoRepository.d.ts:223

Update a single document on MongoDB.

#### 参数

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`UpdateOptions`](../interfaces/UpdateOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

***

### upsert()

> **upsert**(`entityOrEntities`, `conflictPathsOrOptions`): `Promise`\<[`InsertResult`](InsertResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/Repository.d.ts:183

Inserts a given entity into the database, unless a unique constraint conflicts then updates the entity
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient INSERT ... ON CONFLICT DO UPDATE/ON DUPLICATE KEY UPDATE query.

#### 参数

##### entityOrEntities

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\> \| `_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>[]

##### conflictPathsOrOptions

`string`[] \| [`UpsertOptions`](../interfaces/UpsertOptions.md)\<`Entity`\>

#### 返回

`Promise`\<[`InsertResult`](InsertResult.md)\>

#### 继承自

[`Repository`](Repository.md).[`upsert`](Repository.md#upsert)
