[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ReadPreferenceOptions

# 接口: ReadPreferenceOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4531

## theme_extended_by

- [`ReadPreferenceLikeOptions`](ReadPreferenceLikeOptions.md)

## 属性

### hedge?

> `optional` **hedge?**: [`HedgeOptions`](HedgeOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4535

Server mode in which the same query is dispatched in parallel to multiple replica set members.

***

### maxStalenessSeconds?

> `optional` **maxStalenessSeconds?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4533

Max secondary read staleness in seconds, Minimum value is 90 seconds.
