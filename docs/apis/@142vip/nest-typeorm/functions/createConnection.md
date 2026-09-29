[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / createConnection

# ~~函数: createConnection()~~

## 调用签名

> **createConnection**(): `Promise`\<[`DataSource`](../classes/DataSource.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/globals.d.ts:37

Creates a new connection and registers it in the manager.
Only one connection from ormconfig will be created (name "default" or connection without name).

### 返回

`Promise`\<[`DataSource`](../classes/DataSource.md)\>

### 已被弃用

## 调用签名

> **createConnection**(`name`): `Promise`\<[`DataSource`](../classes/DataSource.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/globals.d.ts:43

Creates a new connection from the ormconfig file with a given name.

### 参数

#### name

`string`

### 返回

`Promise`\<[`DataSource`](../classes/DataSource.md)\>

### 已被弃用

## 调用签名

> **createConnection**(`options`): `Promise`\<[`DataSource`](../classes/DataSource.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/globals.d.ts:49

Creates a new connection and registers it in the manager.

### 参数

#### options

[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)

### 返回

`Promise`\<[`DataSource`](../classes/DataSource.md)\>

### 已被弃用
