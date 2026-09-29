[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / UpsertOptions

# 接口: UpsertOptions\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/UpsertOptions.d.ts:7

Special options passed to Repository#upsert

## theme_extends

- `InsertOrUpdateOptions`

## 类型参数

### Entity

`Entity`

## 属性

### conflictPaths

> **conflictPaths**: `string`[] \| \{ \[P in string \| number \| symbol\]?: true \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/UpsertOptions.d.ts:8

***

### indexPredicate?

> `optional` **indexPredicate?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/InsertOrUpdateOptions.d.ts:12

If included, postgres will apply the index predicate to a conflict target (partial index)

#### 继承自

`InsertOrUpdateOptions.indexPredicate`

***

### overwriteCondition?

> `optional` **overwriteCondition?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/InsertOrUpdateOptions.d.ts:14

#### parameters?

> `optional` **parameters?**: [`ObjectLiteral`](ObjectLiteral.md)

#### where

> **where**: `string` \| [`ObjectLiteral`](ObjectLiteral.md) \| [`ObjectLiteral`](ObjectLiteral.md)[] \| [`Brackets`](../classes/Brackets.md)

#### 继承自

`InsertOrUpdateOptions.overwriteCondition`

***

### returning?

> `optional` **returning?**: [`ReturningOption`](../type-aliases/ReturningOption.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/UpsertOptions.d.ts:25

Allows selecting custom RETURNING / OUTPUT clause.
Works only on drivers with returning support.

***

### skipUpdateIfNoValuesChanged?

> `optional` **skipUpdateIfNoValuesChanged?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/UpsertOptions.d.ts:14

If true, postgres will skip the update if no values would be changed (reduces writes)

#### 重写了

`InsertOrUpdateOptions.skipUpdateIfNoValuesChanged`

***

### upsertType?

> `optional` **upsertType?**: `UpsertType`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/UpsertOptions.d.ts:20

Define the type of upsert to use (currently, CockroachDB only).

If none provided, it will use the default for the database (first one in the list)

#### 重写了

`InsertOrUpdateOptions.upsertType`
