[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Migration

# 类: Migration

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/Migration.d.ts:5

Represents entity of the migration in the database.

## 构造函数

### 构造函数

> **new Migration**(`id`, `timestamp`, `name`, `instance?`, `transaction?`): `Migration`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/Migration.d.ts:27

#### 参数

##### id

`number` \| `undefined`

##### timestamp

`number`

##### name

`string`

##### instance?

[`MigrationInterface`](../interfaces/MigrationInterface.md)

##### transaction?

`boolean`

#### 返回

`Migration`

## 属性

### id

> **id**: `number` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/Migration.d.ts:10

Migration id.
Indicates order of the executed migrations.

***

### instance?

> `optional` **instance?**: [`MigrationInterface`](../interfaces/MigrationInterface.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/Migration.d.ts:22

Migration instance that needs to be run.

***

### name

> **name**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/Migration.d.ts:18

Name of the migration (class name).

***

### timestamp

> **timestamp**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/Migration.d.ts:14

Timestamp of the migration.

***

### transaction?

> `optional` **transaction?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/Migration.d.ts:26

Whether to run this migration within a transaction
