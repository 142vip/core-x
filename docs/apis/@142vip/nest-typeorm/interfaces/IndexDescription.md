[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / IndexDescription

# 接口: IndexDescription

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3261

## theme_extends

- `Pick`\<[`CreateIndexesOptions`](CreateIndexesOptions.md), `"background"` \| `"unique"` \| `"partialFilterExpression"` \| `"sparse"` \| `"hidden"` \| `"expireAfterSeconds"` \| `"storageEngine"` \| `"version"` \| `"weights"` \| `"default_language"` \| `"language_override"` \| `"textIndexVersion"` \| `"2dsphereIndexVersion"` \| `"bits"` \| `"min"` \| `"max"` \| `"bucketSize"` \| `"wildcardProjection"`\>

## 属性

### 2dsphereIndexVersion?

> `optional` **2dsphereIndexVersion?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2296

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`2dsphereIndexVersion`](CreateIndexesOptions.md#_2dsphereindexversion)

***

### background?

> `optional` **background?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2275

Creates the index in the background, yielding whenever possible.

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`background`](CreateIndexesOptions.md#background)

***

### bits?

> `optional` **bits?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2297

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`bits`](CreateIndexesOptions.md#bits)

***

### bucketSize?

> `optional` **bucketSize?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2302

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`bucketSize`](CreateIndexesOptions.md#bucketsize)

***

### collation?

> `optional` **collation?**: [`CollationOptions`](CollationOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3262

***

### default\_language?

> `optional` **default\_language?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2293

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`default_language`](CreateIndexesOptions.md#default-language)

***

### expireAfterSeconds?

> `optional` **expireAfterSeconds?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2285

Allows you to expire data on indexes applied to a data (MongoDB 2.2 or higher)

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`expireAfterSeconds`](CreateIndexesOptions.md#expireafterseconds)

***

### hidden?

> `optional` **hidden?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2305

Specifies that the index should exist on the target collection but should not be used by the query planner when executing operations. (MongoDB 4.4 or higher)

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`hidden`](CreateIndexesOptions.md#hidden)

***

### key

> **key**: \{\[`key`: `string`\]: [`IndexDirection`](../type-aliases/IndexDirection.md); \} \| `Map`\<`string`, [`IndexDirection`](../type-aliases/IndexDirection.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3264

***

### language\_override?

> `optional` **language\_override?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2294

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`language_override`](CreateIndexesOptions.md#language-override)

***

### max?

> `optional` **max?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2301

For geospatial indexes set the high bound for the co-ordinates.

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`max`](CreateIndexesOptions.md#max)

***

### min?

> `optional` **min?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2299

For geospatial indexes set the lower bound for the co-ordinates.

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`min`](CreateIndexesOptions.md#min)

***

### name?

> `optional` **name?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3263

***

### partialFilterExpression?

> `optional` **partialFilterExpression?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2281

Creates a partial index based on the given filter object (MongoDB 3.2 or higher)

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`partialFilterExpression`](CreateIndexesOptions.md#partialfilterexpression)

***

### sparse?

> `optional` **sparse?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2283

Creates a sparse index.

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`sparse`](CreateIndexesOptions.md#sparse)

***

### storageEngine?

> `optional` **storageEngine?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2287

Allows users to configure the storage engine on a per-index basis when creating an index. (MongoDB 3.0 or higher)

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`storageEngine`](CreateIndexesOptions.md#storageengine)

***

### textIndexVersion?

> `optional` **textIndexVersion?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2295

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`textIndexVersion`](CreateIndexesOptions.md#textindexversion)

***

### unique?

> `optional` **unique?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2277

Creates a unique index.

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`unique`](CreateIndexesOptions.md#unique)

***

### version?

> `optional` **version?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2291

Specifies the index version number, either 0 or 1.

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`version`](CreateIndexesOptions.md#version)

***

### weights?

> `optional` **weights?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2292

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`weights`](CreateIndexesOptions.md#weights)

***

### wildcardProjection?

> `optional` **wildcardProjection?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2303

#### 继承自

[`CreateIndexesOptions`](CreateIndexesOptions.md).[`wildcardProjection`](CreateIndexesOptions.md#wildcardprojection)
