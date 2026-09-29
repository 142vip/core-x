[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / CountDocumentsOptions

# 接口: CountDocumentsOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2209

BSON Serialization options.

## theme_extends

- [`AggregateOptions`](AggregateOptions.md)

## 属性

### allowDiskUse?

> `optional` **allowDiskUse?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:289

allowDiskUse lets the server know if it can use disk to store temporary results for the aggregation (requires mongodb 2.6 \\>).

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`allowDiskUse`](AggregateOptions.md#allowdiskuse)

***

### authdb?

> `optional` **authdb?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1991

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`authdb`](AggregateOptions.md#authdb)

***

### batchSize?

> `optional` **batchSize?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:291

The number of documents to return per batch. See [aggregation documentation](https://www.mongodb.com/docs/manual/reference/command/aggregate).

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`batchSize`](AggregateOptions.md#batchsize)

***

### bsonRegExp?

> `optional` **bsonRegExp?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:331

return BSON regular expressions as BSONRegExp instances.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`bsonRegExp`](../namespaces/BSON/interfaces/DeserializeOptions.md#bsonregexp)

***

### bypassDocumentValidation?

> `optional` **bypassDocumentValidation?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:293

Allow driver to bypass schema validation in MongoDB 3.2 or higher.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`bypassDocumentValidation`](AggregateOptions.md#bypassdocumentvalidation)

***

### checkKeys?

> `optional` **checkKeys?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:913

the serializer will check if keys are valid.

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`checkKeys`](../namespaces/BSON/interfaces/SerializeOptions.md#checkkeys)

***

### collation?

> `optional` **collation?**: [`CollationOptions`](CollationOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:301

Specify collation.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`collation`](AggregateOptions.md#collation)

***

### comment?

> `optional` **comment?**: `unknown`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1987

Comment to apply to the operation.

In server versions pre-4.4, 'comment' must be string.  A server
error will be thrown if any other type is provided.

In server versions 4.4 and above, 'comment' can be any valid BSON type.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`comment`](AggregateOptions.md#comment)

***

### cursor?

> `optional` **cursor?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:295

Return the query as cursor, on 2.6 \\> it returns as a real cursor on pre 2.6 it returns as an emulated cursor.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`cursor`](AggregateOptions.md#cursor)

***

### dbName?

> `optional` **dbName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1990

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`dbName`](AggregateOptions.md#dbname)

***

### enableUtf8Validation?

> `optional` **enableUtf8Validation?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:710

Enable utf8 validation when deserializing BSON documents.  Defaults to true.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`enableUtf8Validation`](AggregateOptions.md#enableutf8validation)

***

### explain?

> `optional` **explain?**: [`ExplainVerbosityLike`](../type-aliases/ExplainVerbosityLike.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2645

Specifies the verbosity mode for the explain output.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`explain`](AggregateOptions.md#explain)

***

### fieldsAsRaw?

> `optional` **fieldsAsRaw?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:329

allow to specify if there what fields we wish to return as unserialized raw buffer.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`fieldsAsRaw`](../namespaces/BSON/interfaces/DeserializeOptions.md#fieldsasraw)

***

### hint?

> `optional` **hint?**: [`Hint`](../type-aliases/Hint.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:303

Add an index selection hint to an aggregation command

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`hint`](AggregateOptions.md#hint)

***

### ignoreUndefined?

> `optional` **ignoreUndefined?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:917

serialize will not emit undefined fields **(default:true)**

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`ignoreUndefined`](../namespaces/BSON/interfaces/SerializeOptions.md#ignoreundefined)

***

### let?

> `optional` **let?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:305

Map of parameter names and values that can be accessed using $$var (requires MongoDB 5.0).

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`let`](AggregateOptions.md#let)

***

### limit?

> `optional` **limit?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2213

The maximum amounts to count before aborting.

***

### maxAwaitTimeMS?

> `optional` **maxAwaitTimeMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:299

The maximum amount of time for the server to wait on new documents to satisfy a tailable cursor query.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`maxAwaitTimeMS`](AggregateOptions.md#maxawaittimems)

***

### maxTimeMS?

> `optional` **maxTimeMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:297

specifies a cumulative time limit in milliseconds for processing operations on the cursor. MongoDB interrupts the operation at the earliest following interrupt point.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`maxTimeMS`](AggregateOptions.md#maxtimems)

***

### noResponse?

> `optional` **noResponse?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1992

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`noResponse`](AggregateOptions.md#noresponse)

***

### omitReadPreference?

> `optional` **omitReadPreference?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4322

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`omitReadPreference`](AggregateOptions.md#omitreadpreference)

***

### out?

> `optional` **out?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:306

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`out`](AggregateOptions.md#out)

***

### promoteBuffers?

> `optional` **promoteBuffers?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:325

when deserializing a Binary will return it as a node.js Buffer instance.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`promoteBuffers`](../namespaces/BSON/interfaces/DeserializeOptions.md#promotebuffers)

***

### promoteLongs?

> `optional` **promoteLongs?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:323

when deserializing a Long will fit it into a Number if it's smaller than 53 bits.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`promoteLongs`](../namespaces/BSON/interfaces/DeserializeOptions.md#promotelongs)

***

### promoteValues?

> `optional` **promoteValues?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:327

when deserializing will promote BSON values to their Node.js closest equivalent types.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`promoteValues`](../namespaces/BSON/interfaces/DeserializeOptions.md#promotevalues)

***

### raw?

> `optional` **raw?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:708

Enabling the raw option will return a [Node.js Buffer](https://nodejs.org/api/buffer.html)
which is allocated using [allocUnsafe API](https://nodejs.org/api/buffer.html#static-method-bufferallocunsafesize).
See this section from the [Node.js Docs here](https://nodejs.org/api/buffer.html#what-makes-bufferallocunsafe-and-bufferallocunsafeslow-unsafe)
for more detail about what "unsafe" refers to in this context.
If you need to maintain your own editable clone of the bytes returned for an extended life time of the process, it is recommended you allocate
your own buffer and clone the contents:

#### 示例

```ts
const raw = await collection.findOne({}, { raw: true })
const myBuffer = Buffer.alloc(raw.byteLength)
myBuffer.set(raw, 0)
// Only save and use `myBuffer` beyond this point
```

#### 备注

Please note there is a known limitation where this option cannot be used at the MongoClient level (see [NODE-3946](https://jira.mongodb.org/browse/NODE-3946)).
It does correctly work at `Db`, `Collection`, and per operation the same as other BSON options work.

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`raw`](AggregateOptions.md#raw)

***

### readConcern?

> `optional` **readConcern?**: [`ReadConcernLike`](../type-aliases/ReadConcernLike.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1975

Specify a read concern and level for the collection. (only MongoDB 3.2 or higher supported)

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`readConcern`](AggregateOptions.md#readconcern)

***

### readPreference?

> `optional` **readPreference?**: [`ReadPreferenceLike`](../type-aliases/ReadPreferenceLike.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4321

The preferred read preference (ReadPreference.primary, ReadPreference.primary_preferred, ReadPreference.secondary, ReadPreference.secondary_preferred, ReadPreference.nearest).

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`readPreference`](AggregateOptions.md#readpreference)

***

### retryWrites?

> `optional` **retryWrites?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1989

Should retry failed writes

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`retryWrites`](AggregateOptions.md#retrywrites)

***

### serializeFunctions?

> `optional` **serializeFunctions?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:915

serialize the javascript functions **(default:false)**.

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`serializeFunctions`](../namespaces/BSON/interfaces/SerializeOptions.md#serializefunctions)

***

### session?

> `optional` **session?**: [`ClientSession`](../classes/ClientSession.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4318

Specify ClientSession for this command

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`session`](AggregateOptions.md#session)

***

### skip?

> `optional` **skip?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2211

The number of documents to skip.

***

### useBigInt64?

> `optional` **useBigInt64?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:321

when deserializing a Long will return as a BigInt.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`useBigInt64`](../namespaces/BSON/interfaces/DeserializeOptions.md#usebigint64)

***

### willRetryWrite?

> `optional` **willRetryWrite?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4319

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`willRetryWrite`](AggregateOptions.md#willretrywrite)

***

### writeConcern?

> `optional` **writeConcern?**: [`WriteConcern`](../classes/WriteConcern.md) \| [`WriteConcernSettings`](WriteConcernSettings.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5468

Write Concern as an object

#### 继承自

[`AggregateOptions`](AggregateOptions.md).[`writeConcern`](AggregateOptions.md#writeconcern)
