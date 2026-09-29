[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / createConnections

# ~~函数: createConnections()~~

> **createConnections**(`options?`): `Promise`\<[`DataSource`](../classes/DataSource.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/globals.d.ts:59

Creates new connections and registers them in the manager.

If connection options were not specified, then it will try to create connection automatically,
based on content of ormconfig (json/js/env) file or environment variables.
All connections from the ormconfig will be created.

## 参数

### options?

[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)[]

## 返回

`Promise`\<[`DataSource`](../classes/DataSource.md)[]\>

## 已被弃用
