[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / SaveOptions

# 接口: SaveOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/SaveOptions.d.ts:4

Special options passed to Repository#save, Repository#insert and Repository#update methods.

## 属性

### chunk?

> `optional` **chunk?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/SaveOptions.d.ts:26

Breaks save execution into chunks of a given size.
For example, if you want to save 100,000 objects but you have issues with saving them,
you can break them into 10 groups of 10,000 objects (by setting \{ chunk: 10000 \}) and save each group separately.
This option is needed to perform very big insertions when you have issues with underlying driver parameter number limitation.

***

### data?

> `optional` **data?**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/SaveOptions.d.ts:9

Additional data to be passed with persist method.
This data can be used in subscribers then.

***

### listeners?

> `optional` **listeners?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/SaveOptions.d.ts:14

Indicates if listeners and subscribers are called for this operation.
By default they are enabled, you can disable them by setting \{ listeners: false \} in save/remove options.

***

### reload?

> `optional` **reload?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/SaveOptions.d.ts:34

Flag to determine whether the entity that is being persisted
should be reloaded during the persistence operation.

It will work only on databases which do not support RETURNING / OUTPUT statement.
Enabled by default.

***

### transaction?

> `optional` **transaction?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/repository/SaveOptions.d.ts:19

By default transactions are enabled and all queries in persistence operation are wrapped into the transaction.
You can disable this behaviour by setting \{ transaction: false \} in the persistence options.
