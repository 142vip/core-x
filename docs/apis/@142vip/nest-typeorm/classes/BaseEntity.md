[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / BaseEntity

# 类: BaseEntity

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:22

Base abstract entity for all entities, used in ActiveRecord patterns.

## 构造函数

### 构造函数

> **new BaseEntity**(): `BaseEntity`

#### 返回

`BaseEntity`

## 访问器

### target

#### Getter 签名

> **get** `static` **target**(): [`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:68

Returns object that is managed by this repository.
If this repository manages entity from schema,
then it returns a name of that schema instead.

##### 返回

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

## 方法

### hasId()

> **hasId**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:31

Checks if entity has an id.
If entity composite compose ids, it will check them all.

#### 返回

`boolean`

***

### recover()

> **recover**(`options?`): `Promise`\<`BaseEntity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:48

Recovers a given entity in the database.

#### 参数

##### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

#### 返回

`Promise`\<`BaseEntity`\>

***

### reload()

> **reload**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:52

Reloads entity data from the database.

#### 返回

`Promise`\<`void`\>

***

### remove()

> **remove**(`options?`): `Promise`\<`BaseEntity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:40

Removes current entity from the database.

#### 参数

##### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

#### 返回

`Promise`\<`BaseEntity`\>

***

### save()

> **save**(`options?`): `Promise`\<`BaseEntity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:36

Saves current entity in the database.
If entity does not exist in the database then inserts, otherwise updates.

#### 参数

##### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

#### 返回

`Promise`\<`BaseEntity`\>

***

### softRemove()

> **softRemove**(`options?`): `Promise`\<`BaseEntity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:44

Records the delete date of current entity.

#### 参数

##### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

#### 返回

`Promise`\<`BaseEntity`\>

***

### average()

> `static` **average**\<`T`\>(`this`, `columnName`, `where`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:230

Return the AVG of a column

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### columnName

`PickKeysByType`\<`T`, `number`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`number` \| `null`\>

***

### clear()

> `static` **clear**\<`T`\>(`this`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:332

Clears all the data from the given table/collection (truncates/drops it).

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

#### 返回

`Promise`\<`void`\>

***

### count()

> `static` **count**\<`T`\>(`this`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:212

Counts entities that match given options.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`T`\>

#### 返回

`Promise`\<`number`\>

***

### countBy()

> `static` **countBy**\<`T`\>(`this`, `where`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:218

Counts entities that match given WHERE conditions.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`number`\>

***

### create()

#### 调用签名

> `static` **create**\<`T`\>(`this`): `T`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:89

Creates a new entity instance.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

##### 返回

`T`

#### 调用签名

> `static` **create**\<`T`\>(`this`, `entityLikeArray`): `T`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:96

Creates a new entities and copies all entity properties from given objects into their new entities.
Note that it copies only properties that present in entity schema.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entityLikeArray

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`T`\>[]

##### 返回

`T`[]

#### 调用签名

> `static` **create**\<`T`\>(`this`, `entityLike`): `T`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:103

Creates a new entity instance and copies all entity properties from this object into a new entity.
Note that it copies only properties that present in entity schema.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entityLike

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`T`\>

##### 返回

`T`

***

### createQueryBuilder()

> `static` **createQueryBuilder**\<`T`\>(`this`, `alias?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:83

Creates a new query builder that can be used to build a SQL query.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### alias?

`string`

#### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`T`\>

***

### delete()

> `static` **delete**\<`T`\>(`this`, `criteria`): `Promise`\<[`DeleteResult`](DeleteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:194

Deletes entities by a given criteria.
Unlike remove method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient DELETE query.
Does not check if entity exist in the database.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### criteria

`string` \| `number` \| `string`[] \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[] \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<[`DeleteResult`](DeleteResult.md)\>

***

### exists()

> `static` **exists**\<`T`\>(`this`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:200

Checks whether any entity exists that matches the given options.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`T`\>

#### 返回

`Promise`\<`boolean`\>

***

### existsBy()

> `static` **existsBy**\<`T`\>(`this`, `where`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:206

Checks whether any entity exists that matches the given conditions.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`boolean`\>

***

### find()

> `static` **find**\<`T`\>(`this`, `options?`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:248

Finds entities that match given options.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`T`\>

#### 返回

`Promise`\<`T`[]\>

***

### findAndCount()

> `static` **findAndCount**\<`T`\>(`this`, `options?`): `Promise`\<\[`T`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:262

Finds entities that match given find options.
Also counts all entities that match given conditions,
but ignores pagination settings (from and take options).

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### options?

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`T`\>

#### 返回

`Promise`\<\[`T`[], `number`\]\>

***

### findAndCountBy()

> `static` **findAndCountBy**\<`T`\>(`this`, `where`): `Promise`\<\[`T`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:270

Finds entities that match given WHERE conditions.
Also counts all entities that match given conditions,
but ignores pagination settings (from and take options).

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<\[`T`[], `number`\]\>

***

### findBy()

> `static` **findBy**\<`T`\>(`this`, `where`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:254

Finds entities that match given WHERE conditions.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`T`[]\>

***

### ~~findByIds()~~

> `static` **findByIds**\<`T`\>(`this`, `ids`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:283

Finds entities by ids.
Optionally find options can be applied.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### ids

`any`[]

#### 返回

`Promise`\<`T`[]\>

#### 已被弃用

use `findBy` method instead in conjunction with `In` operator, for example:

.findBy(\{
    id: In([1, 2, 3])
\})

***

### findOne()

> `static` **findOne**\<`T`\>(`this`, `options`): `Promise`\<`T` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:289

Finds first entity that matches given conditions.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### options

[`FindOneOptions`](../interfaces/FindOneOptions.md)\<`T`\>

#### 返回

`Promise`\<`T` \| `null`\>

***

### findOneBy()

> `static` **findOneBy**\<`T`\>(`this`, `where`): `Promise`\<`T` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:295

Finds first entity that matches given conditions.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`T` \| `null`\>

***

### ~~findOneById()~~

> `static` **findOneById**\<`T`\>(`this`, `id`): `Promise`\<`T` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:307

Finds first entity that matches given options.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### id

`string` \| `number` \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)

#### 返回

`Promise`\<`T` \| `null`\>

#### 已被弃用

use `findOneBy` method instead in conjunction with `In` operator, for example:

.findOneBy(\{
    id: 1 // where "id" is your primary column name
\})

***

### findOneByOrFail()

> `static` **findOneByOrFail**\<`T`\>(`this`, `where`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:319

Finds first entity that matches given conditions.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`T`\>

***

### findOneOrFail()

> `static` **findOneOrFail**\<`T`\>(`this`, `options`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:313

Finds first entity that matches given conditions.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### options

[`FindOneOptions`](../interfaces/FindOneOptions.md)\<`T`\>

#### 返回

`Promise`\<`T`\>

***

### getId()

> `static` **getId**\<`T`\>(`this`, `entity`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:77

Gets entity mixed id.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### entity

`T`

#### 返回

`any`

***

### getRepository()

> `static` **getRepository**\<`T`\>(`this`): [`Repository`](Repository.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:60

Gets current entity's Repository.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

#### 返回

[`Repository`](Repository.md)\<`T`\>

***

### hasId()

> `static` **hasId**(`entity`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:73

Checks entity has an id.
If entity composite compose ids, it will check them all.

#### 参数

##### entity

`BaseEntity`

#### 返回

`boolean`

***

### insert()

> `static` **insert**\<`T`\>(`this`, `entity`): `Promise`\<[`InsertResult`](InsertResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:168

Inserts a given entity into the database.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient INSERT query.
Does not check if entity exist in the database, so query will fail if duplicate entity is being inserted.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### entity

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `T` ? `unknown` : `T`\> \| `_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `T` ? `unknown` : `T`\>[]

#### 返回

`Promise`\<[`InsertResult`](InsertResult.md)\>

***

### maximum()

> `static` **maximum**\<`T`\>(`this`, `columnName`, `where`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:242

Return the MAX of a column

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### columnName

`PickKeysByType`\<`T`, `number`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`number` \| `null`\>

***

### merge()

> `static` **merge**\<`T`\>(`this`, `mergeIntoEntity`, ...`entityLikes`): `T`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:109

Merges multiple entities (or entity-like objects) into a given entity.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### mergeIntoEntity

`T`

##### entityLikes

...[`DeepPartial`](../type-aliases/DeepPartial.md)\<`T`\>[]

#### 返回

`T`

***

### minimum()

> `static` **minimum**\<`T`\>(`this`, `columnName`, `where`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:236

Return the MIN of a column

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### columnName

`PickKeysByType`\<`T`, `number`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`number` \| `null`\>

***

### preload()

> `static` **preload**\<`T`\>(`this`, `entityLike`): `Promise`\<`T` \| `undefined`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:121

Creates a new entity from the given plain javascript object. If entity already exist in the database, then
it loads it (and everything related to it), replaces all values with the new ones from the given object
and returns this new entity. This new entity is actually a loaded from the db entity with all properties
replaced from the new object.

Note that given entity-like object must have an entity id / primary key to find entity by.
Returns undefined if entity with given id was not found.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### entityLike

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`T`\>

#### 返回

`Promise`\<`T` \| `undefined`\>

***

### query()

> `static` **query**\<`T`\>(`this`, `query`, `parameters?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:326

Executes a raw SQL query and returns a raw database results.
Raw query execution is supported only by relational databases (MongoDB is not supported).

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### query

`string`

##### parameters?

`any`[]

#### 返回

`Promise`\<`any`\>

***

### remove()

#### 调用签名

> `static` **remove**\<`T`\>(`this`, `entities`, `options?`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:141

Removes a given entities from the database.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entities

`T`[]

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`T`[]\>

#### 调用签名

> `static` **remove**\<`T`\>(`this`, `entity`, `options?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:147

Removes a given entity from the database.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entity

`T`

###### options?

[`RemoveOptions`](../interfaces/RemoveOptions.md)

##### 返回

`Promise`\<`T`\>

***

### save()

#### 调用签名

> `static` **save**\<`T`\>(`this`, `entities`, `options?`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:128

Saves all given entities in the database.
If entities do not exist in the database then inserts, otherwise updates.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entities

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`T`\>[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`[]\>

#### 调用签名

> `static` **save**\<`T`\>(`this`, `entity`, `options?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:135

Saves a given entity in the database.
If entity does not exist in the database then inserts, otherwise updates.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entity

[`DeepPartial`](../type-aliases/DeepPartial.md)\<`T`\>

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`\>

***

### softRemove()

#### 调用签名

> `static` **softRemove**\<`T`\>(`this`, `entities`, `options?`): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:153

Records the delete date of all given entities.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entities

`T`[]

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`[]\>

#### 调用签名

> `static` **softRemove**\<`T`\>(`this`, `entity`, `options?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:159

Records the delete date of a given entity.

##### 类型参数

###### T

`T` *extends* `BaseEntity`

##### 参数

###### this

() => `T` & *typeof* `BaseEntity`

###### entity

`T`

###### options?

[`SaveOptions`](../interfaces/SaveOptions.md)

##### 返回

`Promise`\<`T`\>

***

### sum()

> `static` **sum**\<`T`\>(`this`, `columnName`, `where`): `Promise`\<`number` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:224

Return the SUM of a column

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### columnName

`PickKeysByType`\<`T`, `number`\>

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

#### 返回

`Promise`\<`number` \| `null`\>

***

### update()

> `static` **update**\<`T`\>(`this`, `criteria`, `partialEntity`, `options?`): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:177

Updates entity partially. Entity can be found by a given conditions.
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient UPDATE query.
Does not check if entity exist in the database.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### criteria

`string` \| `number` \| `string`[] \| `Date` \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md) \| `number`[] \| `Date`[] \| [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)[] \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`T`\>

##### partialEntity

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`T`\>

##### options?

[`RepositoryUpdateOptions`](../interfaces/RepositoryUpdateOptions.md)

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

***

### upsert()

> `static` **upsert**\<`T`\>(`this`, `entityOrEntities`, `conflictPathsOrOptions`): `Promise`\<[`InsertResult`](InsertResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:185

Inserts a given entity into the database, unless a unique constraint conflicts then updates the entity
Unlike save method executes a primitive operation without cascades, relations and other operations included.
Executes fast and efficient INSERT ... ON CONFLICT DO UPDATE/ON DUPLICATE KEY UPDATE query.

#### 类型参数

##### T

`T` *extends* `BaseEntity`

#### 参数

##### this

() => `T` & *typeof* `BaseEntity`

##### entityOrEntities

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `T` ? `unknown` : `T`\> \| `_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `T` ? `unknown` : `T`\>[]

##### conflictPathsOrOptions

`string`[] \| [`UpsertOptions`](../interfaces/UpsertOptions.md)\<`T`\>

#### 返回

`Promise`\<[`InsertResult`](InsertResult.md)\>

***

### useDataSource()

> `static` **useDataSource**(`dataSource`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/BaseEntity.d.ts:56

Sets DataSource to be used by entity.

#### 参数

##### dataSource

[`DataSource`](DataSource.md) \| `null`

#### 返回

`void`
