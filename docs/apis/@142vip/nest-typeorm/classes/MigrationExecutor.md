[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MigrationExecutor

# 类: MigrationExecutor

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:7

Executes migrations: runs pending and reverts previously executed migrations.

## 构造函数

### 构造函数

> **new MigrationExecutor**(`connection`, `queryRunner?`): `MigrationExecutor`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:29

#### 参数

##### connection

[`DataSource`](DataSource.md)

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`MigrationExecutor`

## 属性

### connection

> `protected` **connection**: [`DataSource`](DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:8

***

### fake

> **fake**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:24

Option to fake-run or fake-revert a migration, adding to the
executed migrations table, but not actually running it. This feature is
useful for when migrations are added after the fact or for
interoperability between applications which are desired to each keep
a consistent migration history.

***

### queryRunner?

> `protected` `optional` **queryRunner?**: [`QueryRunner`](../interfaces/QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:9

***

### transaction

> **transaction**: `"all"` \| `"none"` \| `"each"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:16

Indicates how migrations should be run in transactions.
  all: all migrations are run in a single transaction
  none: all migrations are run without a transaction
  each: each migration is run in a separate transaction

## 方法

### checkForDuplicateMigrations()

> `protected` **checkForDuplicateMigrations**(`migrations`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:82

#### 参数

##### migrations

[`Migration`](Migration.md)[]

#### 返回

`void`

***

### createMigrationsTableIfNotExist()

> `protected` **createMigrationsTableIfNotExist**(`queryRunner`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:73

Creates table "migrations" that will store information about executed migrations.

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`Promise`\<`void`\>

***

### deleteExecutedMigration()

> `protected` **deleteExecutedMigration**(`queryRunner`, `migration`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:99

Delete previously executed migration's data from the migrations table.

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

##### migration

[`Migration`](Migration.md)

#### 返回

`Promise`\<`void`\>

***

### deleteMigration()

> **deleteMigration**(`migration`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:55

Deletes an executed migration.

#### 参数

##### migration

[`Migration`](Migration.md)

#### 返回

`Promise`\<`void`\>

***

### executeMigration()

> **executeMigration**(`migration`): `Promise`\<[`Migration`](Migration.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:33

Tries to execute a single migration given.

#### 参数

##### migration

[`Migration`](Migration.md)

#### 返回

`Promise`\<[`Migration`](Migration.md)\>

***

### executePendingMigrations()

> **executePendingMigrations**(): `Promise`\<[`Migration`](Migration.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:65

Executes all pending migrations. Pending migrations are migrations that are not yet executed,
thus not saved in the database.

#### 返回

`Promise`\<[`Migration`](Migration.md)[]\>

***

### ~~getAllMigrations()~~

> **getAllMigrations**(): `Promise`\<[`Migration`](Migration.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:39

Returns an array of all migrations.

#### 返回

`Promise`\<[`Migration`](Migration.md)[]\>

#### 已被弃用

use getMigrations instead

***

### getExecutedMigrations()

> **getExecutedMigrations**(): `Promise`\<[`Migration`](Migration.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:43

#### 返回

`Promise`\<[`Migration`](Migration.md)[]\>

An array of all executed migrations

***

### getLatestExecutedMigration()

> `protected` **getLatestExecutedMigration**(`sortedMigrations`): [`Migration`](Migration.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:91

Finds the latest migration in the given array of migrations.
PRE: Migration array must be sorted by descending id.

#### 参数

##### sortedMigrations

[`Migration`](Migration.md)[]

#### 返回

[`Migration`](Migration.md) \| `undefined`

***

### getLatestTimestampMigration()

> `protected` **getLatestTimestampMigration**(`migrations`): [`Migration`](Migration.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:86

Finds the latest migration (sorts by timestamp) in the given array of migrations.

#### 参数

##### migrations

[`Migration`](Migration.md)[]

#### 返回

[`Migration`](Migration.md) \| `undefined`

***

### getMigrations()

> `protected` **getMigrations**(): [`Migration`](Migration.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:81

Gets all migrations that setup for this connection.

#### 返回

[`Migration`](Migration.md)[]

***

### getPendingMigrations()

> **getPendingMigrations**(): `Promise`\<[`Migration`](Migration.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:47

Returns an array of all pending migrations.

#### 返回

`Promise`\<[`Migration`](Migration.md)[]\>

***

### insertExecutedMigration()

> `protected` **insertExecutedMigration**(`queryRunner`, `migration`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:95

Inserts new executed migration's data into migrations table.

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

##### migration

[`Migration`](Migration.md)

#### 返回

`Promise`\<`void`\>

***

### insertMigration()

> **insertMigration**(`migration`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:51

Inserts an executed migration.

#### 参数

##### migration

[`Migration`](Migration.md)

#### 返回

`Promise`\<`void`\>

***

### loadExecutedMigrations()

> `protected` **loadExecutedMigrations**(`queryRunner`): `Promise`\<[`Migration`](Migration.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:77

Loads all migrations that were executed and saved into the database (sorts by id).

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`Promise`\<[`Migration`](Migration.md)[]\>

***

### showMigrations()

> **showMigrations**(): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:60

Lists all migrations and whether they have been executed or not
returns true if there are unapplied migrations

#### 返回

`Promise`\<`boolean`\>

***

### undoLastMigration()

> **undoLastMigration**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:69

Reverts last migration that were run.

#### 返回

`Promise`\<`void`\>

***

### withQueryRunner()

> `protected` **withQueryRunner**\<`T`\>(`callback`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationExecutor.d.ts:100

#### 类型参数

##### T

`T` *extends* `unknown`

#### 参数

##### callback

(`queryRunner`) => `T` \| `Promise`\<`T`\>

#### 返回

`Promise`\<`T`\>
