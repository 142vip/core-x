[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / FindManyOptions

# 接口: FindManyOptions\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindManyOptions.d.ts:5

Defines a special criteria to find specific entities.

## theme_extends

- [`FindOneOptions`](FindOneOptions.md)\<`Entity`\>

## 类型参数

### Entity

`Entity` = `any`

## 属性

### cache?

> `optional` **cache?**: `number` \| `boolean` \| \{ `id`: `any`; `milliseconds`: `number`; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:49

Enables or disables query result caching.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`cache`](FindOneOptions.md#cache)

***

### comment?

> `optional` **comment?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:15

Adds a comment with the supplied string in the generated query.  This is
helpful for debugging purposes, such as finding a specific query in the
database server's logs, or for categorization using an APM product.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`comment`](FindOneOptions.md#comment)

***

### ~~join?~~

> `optional` **join?**: [`JoinOptions`](JoinOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:41

Specifies what relations should be loaded.

#### 已被弃用

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`join`](FindOneOptions.md#join)

***

### loadEagerRelations?

> `optional` **loadEagerRelations?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:82

Indicates if eager relations should be loaded or not.
By default, they are loaded when find methods are used.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`loadEagerRelations`](FindOneOptions.md#loadeagerrelations)

***

### loadRelationIds?

> `optional` **loadRelationIds?**: `boolean` \| \{ `disableMixedMap?`: `boolean`; `relations?`: `string`[]; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:74

If sets to true then loads all relation ids of the entity and maps them into relation values (not relation objects).
If array of strings is given then loads only relation ids of the given properties.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`loadRelationIds`](FindOneOptions.md#loadrelationids)

***

### lock?

> `optional` **lock?**: \{ `mode`: `"optimistic"`; `version`: `number` \| `Date`; \} \| \{ `mode`: `"pessimistic_read"` \| `"pessimistic_write"` \| `"dirty_read"` \| `"pessimistic_partial_write"` \| `"pessimistic_write_or_fail"` \| `"for_no_key_update"` \| `"for_key_share"`; `onLocked?`: `"nowait"` \| `"skip_locked"`; `tables?`: `string`[]; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:58

Indicates what locking mode should be used.

Note: For lock tables, you must specify the table names and not the relation names

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`lock`](FindOneOptions.md#lock)

***

### order?

> `optional` **order?**: [`FindOptionsOrder`](../type-aliases/FindOptionsOrder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:45

Order, in which entities should be ordered.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`order`](FindOneOptions.md#order)

***

### relationLoadStrategy?

> `optional` **relationLoadStrategy?**: `"join"` \| `"query"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:35

Specifies how relations must be loaded - using "joins" or separate queries.
If you are loading too much data with nested joins it's better to load relations
using separate queries.

Default strategy is "join", but default can be customized in connection options.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`relationLoadStrategy`](FindOneOptions.md#relationloadstrategy)

***

### relations?

> `optional` **relations?**: [`FindOptionsRelationByString`](../type-aliases/FindOptionsRelationByString.md) \| [`FindOptionsRelations`](../type-aliases/FindOptionsRelations.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:27

Indicates what relations of entity should be loaded (simplified left join form).

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`relations`](FindOneOptions.md#relations)

***

### select?

> `optional` **select?**: [`FindOptionsSelect`](../type-aliases/FindOptionsSelect.md)\<`Entity`\> \| [`FindOptionsSelectByString`](../type-aliases/FindOptionsSelectByString.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:19

Specifies what columns should be retrieved.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`select`](FindOneOptions.md#select)

***

### skip?

> `optional` **skip?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindManyOptions.d.ts:9

Offset (paginated) where from entities should be taken.

***

### take?

> `optional` **take?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindManyOptions.d.ts:13

Limit (paginated) - max number of entities should be taken.

***

### transaction?

> `optional` **transaction?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:86

If this is set to true, SELECT query in a `find` method will be executed in a transaction.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`transaction`](FindOneOptions.md#transaction)

***

### where?

> `optional` **where?**: [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:23

Simple condition that should be applied to match entities.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`where`](FindOneOptions.md#where)

***

### withDeleted?

> `optional` **withDeleted?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:69

Indicates if soft-deleted rows should be included in entity result.

#### 继承自

[`FindOneOptions`](FindOneOptions.md).[`withDeleted`](FindOneOptions.md#withdeleted)
