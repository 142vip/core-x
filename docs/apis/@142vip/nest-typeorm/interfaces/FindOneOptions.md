[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / FindOneOptions

# 接口: FindOneOptions\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:9

Defines a special criteria to find specific entity.

## theme_extended_by

- [`FindManyOptions`](FindManyOptions.md)

## 类型参数

### Entity

`Entity` = `any`

## 属性

### cache?

> `optional` **cache?**: `number` \| `boolean` \| \{ `id`: `any`; `milliseconds`: `number`; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:49

Enables or disables query result caching.

***

### comment?

> `optional` **comment?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:15

Adds a comment with the supplied string in the generated query.  This is
helpful for debugging purposes, such as finding a specific query in the
database server's logs, or for categorization using an APM product.

***

### ~~join?~~

> `optional` **join?**: [`JoinOptions`](JoinOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:41

Specifies what relations should be loaded.

#### 已被弃用

***

### loadEagerRelations?

> `optional` **loadEagerRelations?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:82

Indicates if eager relations should be loaded or not.
By default, they are loaded when find methods are used.

***

### loadRelationIds?

> `optional` **loadRelationIds?**: `boolean` \| \{ `disableMixedMap?`: `boolean`; `relations?`: `string`[]; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:74

If sets to true then loads all relation ids of the entity and maps them into relation values (not relation objects).
If array of strings is given then loads only relation ids of the given properties.

***

### lock?

> `optional` **lock?**: \{ `mode`: `"optimistic"`; `version`: `number` \| `Date`; \} \| \{ `mode`: `"pessimistic_read"` \| `"pessimistic_write"` \| `"dirty_read"` \| `"pessimistic_partial_write"` \| `"pessimistic_write_or_fail"` \| `"for_no_key_update"` \| `"for_key_share"`; `onLocked?`: `"nowait"` \| `"skip_locked"`; `tables?`: `string`[]; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:58

Indicates what locking mode should be used.

Note: For lock tables, you must specify the table names and not the relation names

***

### order?

> `optional` **order?**: [`FindOptionsOrder`](../type-aliases/FindOptionsOrder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:45

Order, in which entities should be ordered.

***

### relationLoadStrategy?

> `optional` **relationLoadStrategy?**: `"join"` \| `"query"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:35

Specifies how relations must be loaded - using "joins" or separate queries.
If you are loading too much data with nested joins it's better to load relations
using separate queries.

Default strategy is "join", but default can be customized in connection options.

***

### relations?

> `optional` **relations?**: [`FindOptionsRelations`](../type-aliases/FindOptionsRelations.md)\<`Entity`\> \| [`FindOptionsRelationByString`](../type-aliases/FindOptionsRelationByString.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:27

Indicates what relations of entity should be loaded (simplified left join form).

***

### select?

> `optional` **select?**: [`FindOptionsSelect`](../type-aliases/FindOptionsSelect.md)\<`Entity`\> \| [`FindOptionsSelectByString`](../type-aliases/FindOptionsSelectByString.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:19

Specifies what columns should be retrieved.

***

### transaction?

> `optional` **transaction?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:86

If this is set to true, SELECT query in a `find` method will be executed in a transaction.

***

### where?

> `optional` **where?**: [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`Entity`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:23

Simple condition that should be applied to match entities.

***

### withDeleted?

> `optional` **withDeleted?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOneOptions.d.ts:69

Indicates if soft-deleted rows should be included in entity result.
