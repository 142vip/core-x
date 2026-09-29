[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MigrationInterface

# 接口: MigrationInterface

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationInterface.d.ts:5

Migrations should implement this interface and all its methods.

## 属性

### name?

> `optional` **name?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationInterface.d.ts:9

Optional migration name, defaults to class name.

***

### transaction?

> `optional` **transaction?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationInterface.d.ts:16

Optional flag to determine whether to run the migration in a transaction or not.
Can only be used when `migrationsTransactionMode` is either "each" or "none"
Defaults to `true` when `migrationsTransactionMode` is "each"
Defaults to `false` when `migrationsTransactionMode` is "none"

## 方法

### down()

> **down**(`queryRunner`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationInterface.d.ts:24

Reverse the migrations.

#### 参数

##### queryRunner

[`QueryRunner`](QueryRunner.md)

#### 返回

`Promise`\<`any`\>

***

### up()

> **up**(`queryRunner`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/migration/MigrationInterface.d.ts:20

Run the migrations.

#### 参数

##### queryRunner

[`QueryRunner`](QueryRunner.md)

#### 返回

`Promise`\<`any`\>
