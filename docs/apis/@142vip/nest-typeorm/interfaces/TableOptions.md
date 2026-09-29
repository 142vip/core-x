[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TableOptions

# 接口: TableOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:10

Table options.

## 属性

### checks?

> `optional` **checks?**: [`TableCheckOptions`](TableCheckOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:42

Table check constraints.

***

### columns?

> `optional` **columns?**: [`TableColumnOptions`](TableColumnOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:26

Table columns.

***

### comment?

> `optional` **comment?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:64

Table comment. Not supported by all database types.

***

### database?

> `optional` **database?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:18

Table database.

***

### engine?

> `optional` **engine?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:60

Table engine.

***

### exclusions?

> `optional` **exclusions?**: [`TableExclusionOptions`](TableExclusionOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:46

Table check constraints.

***

### foreignKeys?

> `optional` **foreignKeys?**: [`TableForeignKeyOptions`](TableForeignKeyOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:34

Table foreign keys.

***

### indices?

> `optional` **indices?**: [`TableIndexOptions`](TableIndexOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:30

Table indices.

***

### justCreated?

> `optional` **justCreated?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:52

Indicates if table was just created.
This is needed, for example to check if we need to skip primary keys creation
for new tables.

***

### name

> **name**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:22

Table name.

***

### schema?

> `optional` **schema?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:14

Table schema.

***

### uniques?

> `optional` **uniques?**: [`TableUniqueOptions`](TableUniqueOptions.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:38

Table unique constraints.

***

### withoutRowid?

> `optional` **withoutRowid?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/options/TableOptions.d.ts:56

Enables Sqlite "WITHOUT ROWID" modifier for the "CREATE TABLE" statement
