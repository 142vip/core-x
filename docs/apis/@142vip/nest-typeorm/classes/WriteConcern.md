[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / WriteConcern

# 类: WriteConcern

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5423

A MongoDB WriteConcern, which describes the level of acknowledgement
requested from MongoDB for write operations.

## 参阅

https://www.mongodb.com/docs/manual/reference/write-concern/

## 构造函数

### 构造函数

> **new WriteConcern**(`w?`, `wtimeout?`, `j?`, `fsync?`): `WriteConcern`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5439

Constructs a WriteConcern from the write concern properties.

#### 参数

##### w?

[`W`](../type-aliases/W.md)

request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.

##### wtimeout?

`number`

specify a time limit to prevent write operations from blocking indefinitely

##### j?

`boolean`

request acknowledgment that the write operation has been written to the on-disk journal

##### fsync?

`boolean` \| `1`

equivalent to the j option

#### 返回

`WriteConcern`

## 属性

### fsync?

> `optional` **fsync?**: `boolean` \| `1`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5431

equivalent to the j option

***

### j?

> `optional` **j?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5429

request acknowledgment that the write operation has been written to the on-disk journal

***

### w?

> `optional` **w?**: [`W`](../type-aliases/W.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5425

request acknowledgment that the write operation has propagated to a specified number of mongod instances or to mongod instances with specified tags.

***

### wtimeout?

> `optional` **wtimeout?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5427

specify a time limit to prevent write operations from blocking indefinitely

## 方法

### fromOptions()

> `static` **fromOptions**(`options?`, `inherit?`): `WriteConcern` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5441

Construct a WriteConcern given an options object.

#### 参数

##### options?

[`WriteConcernOptions`](../interfaces/WriteConcernOptions.md) \| `WriteConcern` \| [`W`](../type-aliases/W.md)

##### inherit?

[`WriteConcernOptions`](../interfaces/WriteConcernOptions.md) \| `WriteConcern`

#### 返回

`WriteConcern` \| `undefined`
