[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / GridFSBucketOptions

# 接口: GridFSBucketOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3047

## theme_extends

- [`WriteConcernOptions`](WriteConcernOptions.md)

## 属性

### bucketName?

> `optional` **bucketName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3049

The 'files' and 'chunks' collections will be prefixed with the bucket name followed by a dot.

***

### chunkSizeBytes?

> `optional` **chunkSizeBytes?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3051

Number of bytes stored in each chunk. Defaults to 255KB

***

### readPreference?

> `optional` **readPreference?**: [`ReadPreference`](../classes/ReadPreference.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3053

Read preference to be passed to read operations

***

### writeConcern?

> `optional` **writeConcern?**: [`WriteConcern`](../classes/WriteConcern.md) \| [`WriteConcernSettings`](WriteConcernSettings.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5468

Write Concern as an object

#### 继承自

[`WriteConcernOptions`](WriteConcernOptions.md).[`writeConcern`](WriteConcernOptions.md#writeconcern)
