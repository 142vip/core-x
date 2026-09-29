[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / EntitySchemaOptions

# 类: EntitySchemaOptions\<T\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:17

Interface for entity metadata mappings stored inside "schemas" instead of models decorated by decorators.

## 类型参数

### T

`T`

## 构造函数

### 构造函数

> **new EntitySchemaOptions**\<`T`\>(): `EntitySchemaOptions`\<`T`\>

#### 返回

`EntitySchemaOptions`\<`T`\>

## 属性

### checks?

> `optional` **checks?**: `EntitySchemaCheckOptions`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:79

Entity check options.

***

### columns

> **columns**: \{ \[P in string \| number \| symbol\]?: EntitySchemaColumnOptions \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:49

Entity column's options.

***

### database?

> `optional` **database?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:33

Database name. Used in MySql and Sql Server.

***

### discriminatorValue?

> `optional` **discriminatorValue?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:113

Custom discriminator value for Single Table Inheritance.

***

### embeddeds?

> `optional` **embeddeds?**: \{ \[P in string \| number \| symbol\]: EntitySchemaEmbeddedColumnOptions \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:87

Embedded Entities options

***

### exclusions?

> `optional` **exclusions?**: `EntitySchemaExclusionOptions`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:83

Entity exclusion options.

***

### expression?

> `optional` **expression?**: `string` \| ((`connection`) => [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:105

View expression.

***

### foreignKeys?

> `optional` **foreignKeys?**: `EntitySchemaForeignKeyOptions`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:71

Entity foreign keys options.

***

### indices?

> `optional` **indices?**: [`EntitySchemaIndexOptions`](../interfaces/EntitySchemaIndexOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:67

Entity indices options.

***

### inheritance?

> `optional` **inheritance?**: `EntitySchemaInheritanceOptions`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:109

Inheritance options.

***

### name

> **name**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:25

Entity name.

***

### orderBy?

> `optional` **orderBy?**: [`OrderByCondition`](../type-aliases/OrderByCondition.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:45

Specifies a property name by which queries will perform ordering by default when fetching rows.

***

### relationIds?

> `optional` **relationIds?**: \{ \[P in string \| number \| symbol\]?: EntitySchemaRelationIdOptions \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:61

Entity relation id options.

***

### relations?

> `optional` **relations?**: \{ \[P in string \| number \| symbol\]?: EntitySchemaRelationOptions \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:55

Entity relation's options.

***

### schema?

> `optional` **schema?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:37

Schema name. Used in Postgres and Sql Server.

***

### synchronize?

> `optional` **synchronize?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:95

Indicates if schema synchronization is enabled or disabled for this entity.
If it will be set to false then schema sync will and migrations ignore this entity.
By default schema synchronization is enabled for all entities.

***

### tableName?

> `optional` **tableName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:29

Table name.

***

### target?

> `optional` **target?**: `Function`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:21

Target bind to this entity schema. Optional.

***

### trees?

> `optional` **trees?**: `Omit`\<`TreeMetadataArgs`, `"target"`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:114

***

### type?

> `optional` **type?**: `TableType`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:41

Table type.

***

### uniques?

> `optional` **uniques?**: `EntitySchemaUniqueOptions`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:75

Entity uniques options.

***

### withoutRowid?

> `optional` **withoutRowid?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaOptions.d.ts:101

If set to 'true' this option disables Sqlite's default behaviour of secretly creating
an integer primary key column named 'rowid' on table creation.

#### 参阅

https://www.sqlite.org/withoutrowid.html.
