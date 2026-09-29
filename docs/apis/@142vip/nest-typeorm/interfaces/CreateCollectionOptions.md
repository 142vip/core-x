[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / CreateCollectionOptions

# 接口: CreateCollectionOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2227

BSON Serialization options.

## theme_extends

- [`CommandOperationOptions`](CommandOperationOptions.md)

## 属性

### authdb?

> `optional` **authdb?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1991

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`authdb`](CommandOperationOptions.md#authdb)

***

### ~~autoIndexId?~~

> `optional` **autoIndexId?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2233

#### 已被弃用

Create an index on the _id field of the document. This option is deprecated in MongoDB 3.2+ and will be removed once no longer supported by the server.

***

### bsonRegExp?

> `optional` **bsonRegExp?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:331

return BSON regular expressions as BSONRegExp instances.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`bsonRegExp`](../namespaces/BSON/interfaces/DeserializeOptions.md#bsonregexp)

***

### capped?

> `optional` **capped?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2231

Create a capped collection

***

### changeStreamPreAndPostImages?

> `optional` **changeStreamPreAndPostImages?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2268

If set, enables pre-update and post-update document events to be included for any
change streams that listen on this collection.

#### enabled

> **enabled**: `boolean`

***

### checkKeys?

> `optional` **checkKeys?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:913

the serializer will check if keys are valid.

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`checkKeys`](../namespaces/BSON/interfaces/SerializeOptions.md#checkkeys)

***

### clusteredIndex?

> `optional` **clusteredIndex?**: [`ClusteredCollectionOptions`](ClusteredCollectionOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2259

A document specifying configuration options for clustered collections. For MongoDB 5.3 and above.

***

### collation?

> `optional` **collation?**: [`CollationOptions`](CollationOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1977

Collation

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`collation`](CommandOperationOptions.md#collation)

***

### comment?

> `optional` **comment?**: `unknown`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1987

Comment to apply to the operation.

In server versions pre-4.4, 'comment' must be string.  A server
error will be thrown if any other type is provided.

In server versions 4.4 and above, 'comment' can be any valid BSON type.

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`comment`](CommandOperationOptions.md#comment)

***

### dbName?

> `optional` **dbName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1990

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`dbName`](CommandOperationOptions.md#dbname)

***

### enableUtf8Validation?

> `optional` **enableUtf8Validation?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:710

Enable utf8 validation when deserializing BSON documents.  Defaults to true.

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`enableUtf8Validation`](CommandOperationOptions.md#enableutf8validation)

***

### encryptedFields?

> `optional` **encryptedFields?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2263

**`Experimental`**

***

### expireAfterSeconds?

> `optional` **expireAfterSeconds?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2261

The number of seconds after which a document in a timeseries or clustered collection expires.

***

### explain?

> `optional` **explain?**: [`ExplainVerbosityLike`](../type-aliases/ExplainVerbosityLike.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2645

Specifies the verbosity mode for the explain output.

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`explain`](CommandOperationOptions.md#explain)

***

### fieldsAsRaw?

> `optional` **fieldsAsRaw?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:329

allow to specify if there what fields we wish to return as unserialized raw buffer.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`fieldsAsRaw`](../namespaces/BSON/interfaces/DeserializeOptions.md#fieldsasraw)

***

### flags?

> `optional` **flags?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2239

Available for the MMAPv1 storage engine only to set the usePowerOf2Sizes and the noPadding flag

***

### ignoreUndefined?

> `optional` **ignoreUndefined?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:917

serialize will not emit undefined fields **(default:true)**

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`ignoreUndefined`](../namespaces/BSON/interfaces/SerializeOptions.md#ignoreundefined)

***

### indexOptionDefaults?

> `optional` **indexOptionDefaults?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2249

Allows users to specify a default configuration for indexes when creating a collection

***

### max?

> `optional` **max?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2237

The maximum number of documents in the capped collection

***

### maxTimeMS?

> `optional` **maxTimeMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1978

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`maxTimeMS`](CommandOperationOptions.md#maxtimems)

***

### noResponse?

> `optional` **noResponse?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1992

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`noResponse`](CommandOperationOptions.md#noresponse)

***

### omitReadPreference?

> `optional` **omitReadPreference?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4322

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`omitReadPreference`](CommandOperationOptions.md#omitreadpreference)

***

### pipeline?

> `optional` **pipeline?**: [`Document`](../namespaces/BSON/interfaces/Document.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2253

An array that consists of the aggregation pipeline stage. Creates the view by applying the specified pipeline to the viewOn collection or view

***

### pkFactory?

> `optional` **pkFactory?**: [`PkFactory`](PkFactory.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2255

A primary key factory function for generation of custom _id keys.

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

[`CommandOperationOptions`](CommandOperationOptions.md).[`raw`](CommandOperationOptions.md#raw)

***

### readConcern?

> `optional` **readConcern?**: [`ReadConcernLike`](../type-aliases/ReadConcernLike.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1975

Specify a read concern and level for the collection. (only MongoDB 3.2 or higher supported)

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`readConcern`](CommandOperationOptions.md#readconcern)

***

### readPreference?

> `optional` **readPreference?**: [`ReadPreferenceLike`](../type-aliases/ReadPreferenceLike.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4321

The preferred read preference (ReadPreference.primary, ReadPreference.primary_preferred, ReadPreference.secondary, ReadPreference.secondary_preferred, ReadPreference.nearest).

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`readPreference`](CommandOperationOptions.md#readpreference)

***

### retryWrites?

> `optional` **retryWrites?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1989

Should retry failed writes

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`retryWrites`](CommandOperationOptions.md#retrywrites)

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

[`CommandOperationOptions`](CommandOperationOptions.md).[`session`](CommandOperationOptions.md#session)

***

### size?

> `optional` **size?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2235

The size of the capped collection in bytes

***

### storageEngine?

> `optional` **storageEngine?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2241

Allows users to specify configuration to the storage engine on a per-collection basis when creating a collection

***

### strict?

> `optional` **strict?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2229

Returns an error if the collection does not exist

***

### timeseries?

> `optional` **timeseries?**: [`TimeSeriesCollectionOptions`](TimeSeriesCollectionOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2257

A document specifying configuration options for timeseries collections.

***

### useBigInt64?

> `optional` **useBigInt64?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:321

when deserializing a Long will return as a BigInt.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`useBigInt64`](../namespaces/BSON/interfaces/DeserializeOptions.md#usebigint64)

***

### validationAction?

> `optional` **validationAction?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2247

Determines whether to error on invalid documents or just warn about the violations but allow invalid documents to be inserted

***

### validationLevel?

> `optional` **validationLevel?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2245

Determines how strictly MongoDB applies the validation rules to existing documents during an update

***

### validator?

> `optional` **validator?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2243

Allows users to specify validation rules or expressions for the collection. For more information, see Document Validation

***

### viewOn?

> `optional` **viewOn?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2251

The name of the source collection or view from which to create the view. The name is not the full namespace of the collection or view (i.e., does not include the database name and implies the same database as the view to create)

***

### willRetryWrite?

> `optional` **willRetryWrite?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4319

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`willRetryWrite`](CommandOperationOptions.md#willretrywrite)

***

### writeConcern?

> `optional` **writeConcern?**: [`WriteConcern`](../classes/WriteConcern.md) \| [`WriteConcernSettings`](WriteConcernSettings.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5468

Write Concern as an object

#### 继承自

[`CommandOperationOptions`](CommandOperationOptions.md).[`writeConcern`](CommandOperationOptions.md#writeconcern)
