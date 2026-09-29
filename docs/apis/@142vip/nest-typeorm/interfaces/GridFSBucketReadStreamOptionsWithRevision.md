[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / GridFSBucketReadStreamOptionsWithRevision

# 接口: GridFSBucketReadStreamOptionsWithRevision

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3125

## theme_extends

- [`GridFSBucketReadStreamOptions`](GridFSBucketReadStreamOptions.md)

## 属性

### end?

> `optional` **end?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3122

0-indexed non-negative byte offset to the end of the file contents
to be returned by the stream. `end` is non-inclusive

#### 继承自

[`GridFSBucketReadStreamOptions`](GridFSBucketReadStreamOptions.md).[`end`](GridFSBucketReadStreamOptions.md#end)

***

### revision?

> `optional` **revision?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3129

The revision number relative to the oldest file with the given filename. 0
gets you the oldest file, 1 gets you the 2nd oldest, -1 gets you the
newest.

***

### skip?

> `optional` **skip?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3113

#### 继承自

[`GridFSBucketReadStreamOptions`](GridFSBucketReadStreamOptions.md).[`skip`](GridFSBucketReadStreamOptions.md#skip)

***

### sort?

> `optional` **sort?**: [`Sort`](../type-aliases/Sort.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3112

#### 继承自

[`GridFSBucketReadStreamOptions`](GridFSBucketReadStreamOptions.md).[`sort`](GridFSBucketReadStreamOptions.md#sort)

***

### start?

> `optional` **start?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3117

0-indexed non-negative byte offset from the beginning of the file

#### 继承自

[`GridFSBucketReadStreamOptions`](GridFSBucketReadStreamOptions.md).[`start`](GridFSBucketReadStreamOptions.md#start)
