[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ReadPreferenceLikeOptions

# 接口: ReadPreferenceLikeOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4512

## theme_extends

- [`ReadPreferenceOptions`](ReadPreferenceOptions.md)

## theme_extended_by

- [`ReadPreferenceFromOptions`](ReadPreferenceFromOptions.md)

## 属性

### hedge?

> `optional` **hedge?**: [`HedgeOptions`](HedgeOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4535

Server mode in which the same query is dispatched in parallel to multiple replica set members.

#### 继承自

[`ReadPreferenceOptions`](ReadPreferenceOptions.md).[`hedge`](ReadPreferenceOptions.md#hedge)

***

### maxStalenessSeconds?

> `optional` **maxStalenessSeconds?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4533

Max secondary read staleness in seconds, Minimum value is 90 seconds.

#### 继承自

[`ReadPreferenceOptions`](ReadPreferenceOptions.md).[`maxStalenessSeconds`](ReadPreferenceOptions.md#maxstalenessseconds)

***

### readPreference?

> `optional` **readPreference?**: [`ReadPreferenceLike`](../type-aliases/ReadPreferenceLike.md) \| \{ `maxStalenessSeconds?`: `number`; `mode?`: ReadPreferenceMode \| undefined; `preference?`: ReadPreferenceMode \| undefined; `tags?`: [`TagSet`](../type-aliases/TagSet.md)[]; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4513
