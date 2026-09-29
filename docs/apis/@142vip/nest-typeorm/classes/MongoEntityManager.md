[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MongoEntityManager

# 类: MongoEntityManager

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:23

Entity manager supposed to work with any entity, automatically find its repository and call its methods,
whatever entity type are you passing.

This implementation is used for MongoDB driver which has some specifics in its EntityManager.

## theme_extends

- [`EntityManager`](EntityManager.md)

## 构造函数

### 构造函数

> **new MongoEntityManager**(`connection`): `MongoEntityManager`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:26

#### 参数

##### connection

[`DataSource`](DataSource.md)

#### 返回

`MongoEntityManager`

#### 重写了

[`EntityManager`](EntityManager.md).[`constructor`](EntityManager.md#constructor)

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:24

#### 重写了

[`EntityManager`](EntityManager.md).[`@instanceof`](EntityManager.md#instanceof)

***

### connection

> `readonly` **connection**: [`DataSource`](DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:35

Connection used by this entity manager.

#### 继承自

[`EntityManager`](EntityManager.md).[`connection`](EntityManager.md#connection)

***

### plainObjectToEntityTransformer

> `protected` **plainObjectToEntityTransformer**: `PlainObjectToNewEntityTransformer`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:53

Plain to object transformer used in create and merge operations.

#### 继承自

[`EntityManager`](EntityManager.md).[`plainObjectToEntityTransformer`](EntityManager.md#plainobjecttoentitytransformer)

***

### queryRunner?

> `readonly` `optional` **queryRunner?**: [`QueryRunner`](../interfaces/QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:40

Custom query runner to be used for operations in this entity manager.
Used only in non-global entity manager.

#### 继承自

[`EntityManager`](EntityManager.md).[`queryRunner`](EntityManager.md#queryrunner)

***

### repositories

> `protected` **repositories**: `Map`\<[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>, [`Repository`](Repository.md)\<`any`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:45

Once created and then reused by repositories.
Created as a future replacement for the #repositories to provide a bit more perf optimization.

#### 继承自

[`EntityManager`](EntityManager.md).[`repositories`](EntityManager.md#repositories)

***

### treeRepositories

> `protected` **treeRepositories**: [`TreeRepository`](TreeRepository.md)\<`any`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:49

Once created and then reused by repositories.

#### 继承自

[`EntityManager`](EntityManager.md).[`treeRepositories`](EntityManager.md#treerepositories)

## 访问器

### mongoQueryRunner

#### Getter 签名

> **get** **mongoQueryRunner**(): `MongoQueryRunner`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:25

##### 返回

`MongoQueryRunner`

## 方法

### aggregate()

> **aggregate**\<`Entity`, `R`\>(`entityClassOrName`, `pipeline`, `options?`): [`AggregationCursor`](AggregationCursor.md)\<`R`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:107

Execute an aggregation framework pipeline against the collection.

#### 类型参数

##### Entity

`Entity`

##### R

`R` = `any`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### pipeline

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

##### options?

[`AggregateOptions`](../interfaces/AggregateOptions.md)

#### 返回

[`AggregationCursor`](AggregationCursor.md)\<`R`\>

***

### aggregateEntity()

> **aggregateEntity**\<`Entity`\>(`entityClassOrName`, `pipeline`, `options?`): [`AggregationCursor`](AggregationCursor.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:112

Execute an aggregation framework pipeline against the collection.
This returns modified version of cursor that transforms each result into Entity model.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### pipeline

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

##### options?

[`AggregateOptions`](../interfaces/AggregateOptions.md)

#### 返回

[`AggregationCursor`](AggregationCursor.md)\<`Entity`\>

***

### applyEntityTransformationToCursor()

> `protected` **applyEntityTransformationToCursor**\<`Entity`\>(`metadata`, `cursor`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:251

Overrides cursor's toArray and next methods to convert results to entity automatically.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### cursor

[`FindCursor`](FindCursor.md)\<`Entity`\> \| [`AggregationCursor`](AggregationCursor.md)\<`Entity`\>

#### 返回

`void`

***

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

#### 继承自

[`EntityManager`](EntityManager.md).[`average`](EntityManager.md#average)

***

### bulkWrite()

> **bulkWrite**\<`Entity`\>(`entityClassOrName`, `operations`, `options?`): `Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:116

Perform a bulkWrite operation without a fluent API.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### operations

[`AnyBulkWriteOperation`](../type-aliases/AnyBulkWriteOperation.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

`Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

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

#### 继承自

[`EntityManager`](EntityManager.md).[`clear`](EntityManager.md#clear)

***

### collectionIndexes()

> **collectionIndexes**\<`Entity`\>(`entityClassOrName`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:174

Retrieve all the indexes on the collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### collectionIndexExists()

> **collectionIndexExists**\<`Entity`\>(`entityClassOrName`, `indexes`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:178

Retrieve all the indexes on the collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### indexes

`string` \| `string`[]

#### 返回

`Promise`\<`boolean`\>

***

### collectionIndexInformation()

> **collectionIndexInformation**\<`Entity`\>(`entityClassOrName`, `options?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:182

Retrieves this collections index info.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`IndexInformationOptions`](../interfaces/IndexInformationOptions.md)

#### 返回

`Promise`\<`any`\>

***

### convertFindManyOptionsOrConditionsToMongodbQuery()

> `protected` **convertFindManyOptionsOrConditionsToMongodbQuery**\<`Entity`\>(`optionsOrConditions`): [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:231

Converts FindManyOptions to mongodb query.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### optionsOrConditions

`any`[] \| `MongoFindManyOptions`\<`Entity`\> \| `Partial`\<`Entity`\> \| [`FilterOperators`](../interfaces/FilterOperators.md)\<`Entity`\> \| `undefined`

#### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

***

### convertFindOneOptionsOrConditionsToMongodbQuery()

> `protected` **convertFindOneOptionsOrConditionsToMongodbQuery**\<`Entity`\>(`optionsOrConditions`): [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:235

Converts FindOneOptions to mongodb query.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### optionsOrConditions

`MongoFindOneOptions`\<`Entity`\> \| `Partial`\<`Entity`\> \| `undefined`

#### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

***

### convertFindOptionsOrderToOrderCriteria()

> `protected` **convertFindOptionsOrderToOrderCriteria**(`order`): [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:239

Converts FindOptions into mongodb order by criteria.

#### 参数

##### order

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

***

### convertFindOptionsSelectToProjectCriteria()

> `protected` **convertFindOptionsSelectToProjectCriteria**(`selects`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:243

Converts FindOptions into mongodb select by criteria.

#### 参数

##### selects

[`FindOptionsSelect`](../type-aliases/FindOptionsSelect.md)\<`any`\> \| [`FindOptionsSelectByString`](../type-aliases/FindOptionsSelectByString.md)\<`any`\>

#### 返回

`any`

***

### convertMixedCriteria()

> `protected` **convertMixedCriteria**(`metadata`, `idMap`): [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:247

Ensures given id is an id for query.

#### 参数

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### idMap

`any`

#### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

***

### count()

> **count**\<`Entity`\>(`entityClassOrName`, `query?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:120

Count number of matching documents in the db to a query.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query?

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`CountOptions`](../interfaces/CountOptions.md)

#### 返回

`Promise`\<`number`\>

#### 重写了

[`EntityManager`](EntityManager.md).[`count`](EntityManager.md#count)

***

### countBy()

> **countBy**\<`Entity`\>(`entityClassOrName`, `query?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:128

Count number of matching documents in the db to a query.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`CountOptions`](../interfaces/CountOptions.md)

#### 返回

`Promise`\<`number`\>

#### 重写了

[`EntityManager`](EntityManager.md).[`countBy`](EntityManager.md#countby)

***

### countDocuments()

> **countDocuments**\<`Entity`\>(`entityClassOrName`, `query?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:124

Count number of matching documents in the db to a query.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query?

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`CountDocumentsOptions`](../interfaces/CountDocumentsOptions.md)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`create`](EntityManager.md#create)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`create`](EntityManager.md#create)

***

### createCollectionIndex()

> **createCollectionIndex**\<`Entity`\>(`entityClassOrName`, `fieldOrSpec`, `options?`): `Promise`\<`string`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:132

Creates an index on the db and collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### fieldOrSpec

[`IndexSpecification`](../type-aliases/IndexSpecification.md)

##### options?

[`CreateIndexesOptions`](../interfaces/CreateIndexesOptions.md)

#### 返回

`Promise`\<`string`\>

***

### createCollectionIndexes()

> **createCollectionIndexes**\<`Entity`\>(`entityClassOrName`, `indexSpecs`): `Promise`\<`string`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:138

Creates multiple indexes in the collection, this method is only supported for MongoDB 2.6 or higher.
Earlier version of MongoDB will throw a command not supported error.
Index specifications are defined at http://docs.mongodb.org/manual/reference/command/createIndexes/.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### indexSpecs

[`IndexDescription`](../interfaces/IndexDescription.md)[]

#### 返回

`Promise`\<`string`[]\>

***

### createCursor()

> **createCursor**\<`Entity`, `T`\>(`entityClassOrName`, `query?`): [`FindCursor`](FindCursor.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:98

Creates a cursor for a query that can be used to iterate over results from MongoDB.

#### 类型参数

##### Entity

`Entity`

##### T

`T` = `any`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

[`FindCursor`](FindCursor.md)\<`T`\>

***

### createEntityCursor()

> **createEntityCursor**\<`Entity`\>(`entityClassOrName`, `query?`): [`FindCursor`](FindCursor.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:103

Creates a cursor for a query that can be used to iterate over results from MongoDB.
This returns modified version of cursor that transforms each result into Entity model.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

[`FindCursor`](FindCursor.md)\<`Entity`\>

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

##### 继承自

[`EntityManager`](EntityManager.md).[`createQueryBuilder`](EntityManager.md#createquerybuilder)

#### 调用签名

> **createQueryBuilder**(`queryRunner?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:86

Creates a new query builder that can be used to build a SQL query.

##### 参数

###### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

##### 继承自

[`EntityManager`](EntityManager.md).[`createQueryBuilder`](EntityManager.md#createquerybuilder)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`decrement`](EntityManager.md#decrement)

***

### delete()

> **delete**\<`Entity`\>(`target`, `criteria`): `Promise`\<[`DeleteResult`](DeleteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:94

Deletes entities by a given conditions.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient DELETE query.
Does not check if entity exist in the database.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### criteria

`string` \| `number` \| `string`[] \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[] \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[]

#### 返回

`Promise`\<[`DeleteResult`](DeleteResult.md)\>

#### 重写了

[`EntityManager`](EntityManager.md).[`delete`](EntityManager.md#delete)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`deleteAll`](EntityManager.md#deleteall)

***

### deleteMany()

> **deleteMany**\<`Entity`\>(`entityClassOrName`, `query`, `options?`): `Promise`\<`DeleteResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:142

Delete multiple documents on MongoDB.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`DeleteOptions`](../interfaces/DeleteOptions.md)

#### 返回

`Promise`\<`DeleteResult`\>

***

### deleteOne()

> **deleteOne**\<`Entity`\>(`entityClassOrName`, `query`, `options?`): `Promise`\<`DeleteResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:146

Delete a document on MongoDB.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`DeleteOptions`](../interfaces/DeleteOptions.md)

#### 返回

`Promise`\<`DeleteResult`\>

***

### distinct()

> **distinct**\<`Entity`\>(`entityClassOrName`, `key`, `query`, `options?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:150

The distinct command returns returns a list of distinct values for the given key across a collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### key

`string`

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

#### 返回

`Promise`\<`any`\>

***

### dropCollectionIndex()

> **dropCollectionIndex**\<`Entity`\>(`entityClassOrName`, `indexName`, `options?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:154

Drops an index from this collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### indexName

`string`

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

#### 返回

`Promise`\<`any`\>

***

### dropCollectionIndexes()

> **dropCollectionIndexes**\<`Entity`\>(`entityClassOrName`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:158

Drops all indexes from the collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

`Promise`\<`any`\>

***

### executeFind()

> `protected` **executeFind**\<`Entity`\>(`entityClassOrName`, `optionsOrConditions?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:257

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### optionsOrConditions?

`any`[] \| `MongoFindManyOptions`\<`Entity`\> \| `Partial`\<`Entity`\>

#### 返回

`Promise`\<`Entity`[]\>

***

### executeFindAndCount()

> **executeFindAndCount**\<`Entity`\>(`entityClassOrName`, `optionsOrConditions?`): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:261

Finds entities that match given find options or conditions.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### optionsOrConditions?

`MongoFindManyOptions`\<`Entity`\> \| `Partial`\<`Entity`\>

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

***

### executeFindOne()

> `protected` **executeFindOne**\<`Entity`\>(`entityClassOrName`, `optionsOrConditions?`, `maybeOptions?`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:256

Finds first entity that matches given conditions and/or find options.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### optionsOrConditions?

`any`

##### maybeOptions?

`MongoFindOneOptions`\<`Entity`\>

#### 返回

`Promise`\<`Entity` \| `null`\>

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

#### 继承自

[`EntityManager`](EntityManager.md).[`exists`](EntityManager.md#exists)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`existsBy`](EntityManager.md#existsby)

***

### filterSoftDeleted()

> `protected` **filterSoftDeleted**\<`Entity`\>(`cursor`, `deleteDateColumn`, `query?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:252

#### 类型参数

##### Entity

`Entity`

#### 参数

##### cursor

[`FindCursor`](FindCursor.md)\<`Entity`\>

##### deleteDateColumn

`ColumnMetadata`

##### query?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`void`

***

### find()

> **find**\<`Entity`\>(`entityClassOrName`, `optionsOrConditions?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:33

Finds entities that match given find options or conditions.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### optionsOrConditions?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\> \| `Partial`\<`Entity`\> \| [`FilterOperators`](../interfaces/FilterOperators.md)\<`Entity`\>

#### 返回

`Promise`\<`Entity`[]\>

#### 重写了

[`EntityManager`](EntityManager.md).[`find`](EntityManager.md#find)

***

### findAndCount()

> **findAndCount**\<`Entity`\>(`entityClassOrName`, `options?`): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:39

Finds entities that match given find options or conditions.
Also counts all entities that match given conditions,
but ignores pagination settings (from and take options).

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

`MongoFindManyOptions`\<`Entity`\>

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

#### 重写了

[`EntityManager`](EntityManager.md).[`findAndCount`](EntityManager.md#findandcount)

***

### findAndCountBy()

> **findAndCountBy**\<`Entity`\>(`entityClassOrName`, `where`): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:43

Finds entities that match given where conditions.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

`any`

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

#### 重写了

[`EntityManager`](EntityManager.md).[`findAndCountBy`](EntityManager.md#findandcountby)

***

### findBy()

> **findBy**\<`Entity`\>(`entityClassOrName`, `where`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:47

Finds entities that match given WHERE conditions.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

`any`

#### 返回

`Promise`\<`Entity`[]\>

#### 重写了

[`EntityManager`](EntityManager.md).[`findBy`](EntityManager.md#findby)

***

### ~~findByIds()~~

> **findByIds**\<`Entity`\>(`entityClassOrName`, `ids`, `optionsOrConditions?`): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:54

Finds entities by ids.
Optionally find options can be applied.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### ids

`any`[]

##### optionsOrConditions?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\> \| `Partial`\<`Entity`\>

#### 返回

`Promise`\<`Entity`[]\>

#### 已被弃用

use `findBy` method instead.

#### 重写了

[`EntityManager`](EntityManager.md).[`findByIds`](EntityManager.md#findbyids)

***

### findOne()

> **findOne**\<`Entity`\>(`entityClassOrName`, `options`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:58

Finds first entity that matches given conditions and/or find options.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options

`MongoFindOneOptions`\<`Entity`\>

#### 返回

`Promise`\<`Entity` \| `null`\>

#### 重写了

[`EntityManager`](EntityManager.md).[`findOne`](EntityManager.md#findone)

***

### findOneAndDelete()

> **findOneAndDelete**\<`Entity`\>(`entityClassOrName`, `query`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:162

Find a document and delete it in one atomic operation, requires a write lock for the duration of the operation.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### options?

[`FindOneAndDeleteOptions`](../interfaces/FindOneAndDeleteOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

***

### findOneAndReplace()

> **findOneAndReplace**\<`Entity`\>(`entityClassOrName`, `query`, `replacement`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:166

Find a document and replace it in one atomic operation, requires a write lock for the duration of the operation.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### replacement

[`Document`](../namespaces/BSON/interfaces/Document.md)

##### options?

[`FindOneAndReplaceOptions`](../interfaces/FindOneAndReplaceOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

***

### findOneAndUpdate()

> **findOneAndUpdate**\<`Entity`\>(`entityClassOrName`, `query`, `update`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:170

Find a document and update it in one atomic operation, requires a write lock for the duration of the operation.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`FindOneAndUpdateOptions`](../interfaces/FindOneAndUpdateOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `null`\>

***

### findOneBy()

> **findOneBy**\<`Entity`\>(`entityClassOrName`, `where`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:62

Finds first entity that matches given WHERE conditions.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### where

`any`

#### 返回

`Promise`\<`Entity` \| `null`\>

#### 重写了

[`EntityManager`](EntityManager.md).[`findOneBy`](EntityManager.md#findoneby)

***

### ~~findOneById()~~

> **findOneById**\<`Entity`\>(`entityClassOrName`, `id`): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:72

Finds entity that matches given id.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

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

#### 重写了

[`EntityManager`](EntityManager.md).[`findOneById`](EntityManager.md#findonebyid)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`findOneByOrFail`](EntityManager.md#findonebyorfail)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`findOneOrFail`](EntityManager.md#findoneorfail)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`getCustomRepository`](EntityManager.md#getcustomrepository)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`getId`](EntityManager.md#getid)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`getId`](EntityManager.md#getid)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`getMongoRepository`](EntityManager.md#getmongorepository)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`getRepository`](EntityManager.md#getrepository)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`getTreeRepository`](EntityManager.md#gettreerepository)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`hasId`](EntityManager.md#hasid)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`hasId`](EntityManager.md#hasid)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`increment`](EntityManager.md#increment)

***

### initializeOrderedBulkOp()

> **initializeOrderedBulkOp**\<`Entity`\>(`entityClassOrName`, `options?`): [`OrderedBulkOperation`](OrderedBulkOperation.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:186

Initiate an In order bulk write operation, operations will be serially executed in the order they are added, creating a new operation for each switch in types.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

[`OrderedBulkOperation`](OrderedBulkOperation.md)

***

### initializeUnorderedBulkOp()

> **initializeUnorderedBulkOp**\<`Entity`\>(`entityClassOrName`, `options?`): [`UnorderedBulkOperation`](UnorderedBulkOperation.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:190

Initiate a Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

[`UnorderedBulkOperation`](UnorderedBulkOperation.md)

***

### insert()

> **insert**\<`Entity`\>(`target`, `entity`): `Promise`\<[`InsertResult`](InsertResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:80

Inserts a given entity into the database.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient INSERT query.
Does not check if entity exist in the database, so query will fail if duplicate entity is being inserted.
You can execute bulk inserts using this method.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### entity

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\> \| `_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>[]

#### 返回

`Promise`\<[`InsertResult`](InsertResult.md)\>

#### 重写了

[`EntityManager`](EntityManager.md).[`insert`](EntityManager.md#insert)

***

### insertMany()

> **insertMany**\<`Entity`\>(`entityClassOrName`, `docs`, `options?`): `Promise`\<[`InsertManyResult`](../interfaces/InsertManyResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:194

Inserts an array of documents into MongoDB.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### docs

[`OptionalId`](../type-aliases/OptionalId.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

`Promise`\<[`InsertManyResult`](../interfaces/InsertManyResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

***

### insertOne()

> **insertOne**\<`Entity`\>(`entityClassOrName`, `doc`, `options?`): `Promise`\<[`InsertOneResult`](../interfaces/InsertOneResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:198

Inserts a single document into MongoDB.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### doc

[`OptionalId`](../type-aliases/OptionalId.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`InsertOneOptions`](../interfaces/InsertOneOptions.md)

#### 返回

`Promise`\<[`InsertOneResult`](../interfaces/InsertOneResult.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

***

### isCapped()

> **isCapped**\<`Entity`\>(`entityClassOrName`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:202

Returns if the collection is a capped collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

`Promise`\<`any`\>

***

### listCollectionIndexes()

> **listCollectionIndexes**\<`Entity`\>(`entityClassOrName`, `options?`): [`ListIndexesCursor`](ListIndexesCursor.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:206

Get the list of all indexes information for the collection.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`ListIndexesOptions`](../interfaces/ListIndexesOptions.md)

#### 返回

[`ListIndexesCursor`](ListIndexesCursor.md)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`maximum`](EntityManager.md#maximum)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`merge`](EntityManager.md#merge)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`minimum`](EntityManager.md#minimum)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`preload`](EntityManager.md#preload)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`query`](EntityManager.md#query)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`recover`](EntityManager.md#recover)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`recover`](EntityManager.md#recover)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`recover`](EntityManager.md#recover)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`recover`](EntityManager.md#recover)

***

### release()

> **release**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/EntityManager.d.ts:410

Releases all resources used by entity manager.
This is used when entity manager is created with a single query runner,
and this single query runner needs to be released after job with entity manager is done.

#### 返回

`Promise`\<`void`\>

#### 继承自

[`EntityManager`](EntityManager.md).[`release`](EntityManager.md#release)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`remove`](EntityManager.md#remove)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`remove`](EntityManager.md#remove)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`remove`](EntityManager.md#remove)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`remove`](EntityManager.md#remove)

***

### rename()

> **rename**\<`Entity`\>(`entityClassOrName`, `newName`, `options?`): `Promise`\<[`Collection`](Collection.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:210

Reindex all indexes on the collection Warning: reIndex is a blocking operation (indexes are rebuilt in the foreground) and will be slow for large collections.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### newName

`string`

##### options?

[`RenameOptions`](../interfaces/RenameOptions.md)

#### 返回

`Promise`\<[`Collection`](Collection.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

***

### replaceOne()

> **replaceOne**\<`Entity`\>(`entityClassOrName`, `query`, `doc`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:214

Replace a document on MongoDB.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### doc

[`Document`](../namespaces/BSON/interfaces/Document.md)

##### options?

[`ReplaceOptions`](../interfaces/ReplaceOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

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

#### 继承自

[`EntityManager`](EntityManager.md).[`restore`](EntityManager.md#restore)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`save`](EntityManager.md#save)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`save`](EntityManager.md#save)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`save`](EntityManager.md#save)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`save`](EntityManager.md#save)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`save`](EntityManager.md#save)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`save`](EntityManager.md#save)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`softDelete`](EntityManager.md#softdelete)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`softRemove`](EntityManager.md#softremove)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`softRemove`](EntityManager.md#softremove)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`softRemove`](EntityManager.md#softremove)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`softRemove`](EntityManager.md#softremove)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`sql`](EntityManager.md#sql)

***

### stats()

> **stats**\<`Entity`\>(`entityClassOrName`, `options?`): `Promise`\<[`CollStats`](../interfaces/CollStats.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:218

Get all the collection statistics.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### options?

[`CollStatsOptions`](../interfaces/CollStatsOptions.md)

#### 返回

`Promise`\<[`CollStats`](../interfaces/CollStats.md)\>

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

#### 继承自

[`EntityManager`](EntityManager.md).[`sum`](EntityManager.md#sum)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`transaction`](EntityManager.md#transaction)

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

##### 继承自

[`EntityManager`](EntityManager.md).[`transaction`](EntityManager.md#transaction)

***

### update()

> **update**\<`Entity`\>(`target`, `criteria`, `partialEntity`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:87

Updates entity partially. Entity can be found by a given conditions.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### criteria

`string` \| `number` \| `string`[] \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[]

##### partialEntity

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 重写了

[`EntityManager`](EntityManager.md).[`update`](EntityManager.md#update)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`updateAll`](EntityManager.md#updateall)

***

### updateMany()

> **updateMany**\<`Entity`\>(`entityClassOrName`, `query`, `update`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:223

Update multiple documents on MongoDB.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`UpdateOptions`](../interfaces/UpdateOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

***

### updateOne()

> **updateOne**\<`Entity`\>(`entityClassOrName`, `query`, `update`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:227

Update a single document on MongoDB.

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### query

[`Filter`](../type-aliases/Filter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### options?

[`UpdateOptions`](../interfaces/UpdateOptions.md)

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

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

#### 继承自

[`EntityManager`](EntityManager.md).[`upsert`](EntityManager.md#upsert)

***

### watch()

> **watch**\<`Entity`\>(`entityClassOrName`, `pipeline?`, `options?`): [`ChangeStream`](ChangeStream.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-manager/MongoEntityManager.d.ts:219

#### 类型参数

##### Entity

`Entity`

#### 参数

##### entityClassOrName

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

##### pipeline?

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

##### options?

[`ChangeStreamOptions`](../interfaces/ChangeStreamOptions.md)

#### 返回

[`ChangeStream`](ChangeStream.md)

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

#### 继承自

[`EntityManager`](EntityManager.md).[`withRepository`](EntityManager.md#withrepository)
