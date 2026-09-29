[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ReadPreferenceFromOptions

# 接口: ReadPreferenceFromOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4504

## theme_extends

- [`ReadPreferenceLikeOptions`](ReadPreferenceLikeOptions.md)

## 属性

### hedge?

> `optional` **hedge?**: [`HedgeOptions`](HedgeOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4507

Server mode in which the same query is dispatched in parallel to multiple replica set members.

#### 重写了

[`ReadPreferenceLikeOptions`](ReadPreferenceLikeOptions.md).[`hedge`](ReadPreferenceLikeOptions.md#hedge)

***

### maxStalenessSeconds?

> `optional` **maxStalenessSeconds?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4533

Max secondary read staleness in seconds, Minimum value is 90 seconds.

#### 继承自

[`ReadPreferenceLikeOptions`](ReadPreferenceLikeOptions.md).[`maxStalenessSeconds`](ReadPreferenceLikeOptions.md#maxstalenessseconds)

***

### readPreference?

> `optional` **readPreference?**: [`ReadPreferenceLike`](../type-aliases/ReadPreferenceLike.md) \| \{ `maxStalenessSeconds?`: `number`; `mode?`: ReadPreferenceMode \| undefined; `preference?`: ReadPreferenceMode \| undefined; `tags?`: [`TagSet`](../type-aliases/TagSet.md)[]; \}

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4513

#### 继承自

[`ReadPreferenceLikeOptions`](ReadPreferenceLikeOptions.md).[`readPreference`](ReadPreferenceLikeOptions.md#readpreference)

***

### readPreferenceTags?

> `optional` **readPreferenceTags?**: [`TagSet`](../type-aliases/TagSet.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4506

***

### session?

> `optional` **session?**: [`ClientSession`](../classes/ClientSession.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4505
