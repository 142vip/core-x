[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Collection

# 类: Collection\<TSchema\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1467

The **Collection** class is an internal class that embodies a MongoDB collection
allowing for insert/find/update/delete and other command operation on that MongoDB collection.

**COLLECTION Cannot directly be instantiated**

## 示例

```ts
import { MongoClient } from 'mongodb';

interface Pet {
  name: string;
  kind: 'dog' | 'cat' | 'fish';
}

const client = new MongoClient('mongodb://localhost:27017');
const pets = client.db().collection<Pet>('pets');

const petCursor = pets.find();

for await (const pet of petCursor) {
  console.log(`${pet.name} is a ${pet.kind}!`);
}
```

## 类型参数

### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

## 构造函数

### 构造函数

> **new Collection**\<`TSchema`\>(): `Collection`\<`TSchema`\>

#### 返回

`Collection`\<`TSchema`\>

## 访问器

### bsonOptions

#### Getter 签名

> **get** **bsonOptions**(): [`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1490

##### 返回

[`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

***

### collectionName

#### Getter 签名

> **get** **collectionName**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1475

The name of this collection

##### 返回

`string`

***

### dbName

#### Getter 签名

> **get** **dbName**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1471

The name of the database this collection belongs to

##### 返回

`string`

***

### hint

#### Getter 签名

> **get** **hint**(): [`Hint`](../type-aliases/Hint.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1497

The current index hint for the collection

##### 返回

[`Hint`](../type-aliases/Hint.md) \| `undefined`

#### Setter 签名

> **set** **hint**(`v`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1498

##### 参数

###### v

[`Hint`](../type-aliases/Hint.md) \| `undefined`

##### 返回

`void`

***

### namespace

#### Getter 签名

> **get** **namespace**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1479

The namespace of this collection, in the format `${this.dbName}.${this.collectionName}`

##### 返回

`string`

***

### readConcern

#### Getter 签名

> **get** **readConcern**(): [`ReadConcern`](ReadConcern.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1484

The current readConcern of the collection. If not explicitly defined for
this collection, will be inherited from the parent DB

##### 返回

[`ReadConcern`](ReadConcern.md) \| `undefined`

***

### readPreference

#### Getter 签名

> **get** **readPreference**(): [`ReadPreference`](ReadPreference.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1489

The current readPreference of the collection. If not explicitly defined for
this collection, will be inherited from the parent DB

##### 返回

[`ReadPreference`](ReadPreference.md) \| `undefined`

***

### writeConcern

#### Getter 签名

> **get** **writeConcern**(): [`WriteConcern`](WriteConcern.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1495

The current writeConcern of the collection. If not explicitly defined for
this collection, will be inherited from the parent DB

##### 返回

[`WriteConcern`](WriteConcern.md) \| `undefined`

## 方法

### aggregate()

> **aggregate**\<`T`\>(`pipeline?`, `options?`): [`AggregationCursor`](AggregationCursor.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1810

Execute an aggregation framework pipeline against the collection, needs MongoDB \\>= 2.2

#### 类型参数

##### T

`T` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

#### 参数

##### pipeline?

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

An array of aggregation pipelines to execute

##### options?

[`AggregateOptions`](../interfaces/AggregateOptions.md)

Optional settings for the command

#### 返回

[`AggregationCursor`](AggregationCursor.md)\<`T`\>

***

### bulkWrite()

> **bulkWrite**(`operations`, `options?`): `Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1536

Perform a bulkWrite operation without a fluent API

Legal operation types are
- `insertOne`
- `replaceOne`
- `updateOne`
- `updateMany`
- `deleteOne`
- `deleteMany`

If documents passed in do not contain the **_id** field,
one will be added to each of the documents missing it by the driver, mutating the document. This behavior
can be overridden by setting the **forceServerObjectId** flag.

#### 参数

##### operations

[`AnyBulkWriteOperation`](../type-aliases/AnyBulkWriteOperation.md)\<`TSchema`\>[]

Bulk operations to perform

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

#### 抛出

MongoDriverError if operations is not an array

***

### ~~count()~~

> **count**(`filter?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1880

An estimated count of matching documents in the db to a filter.

**NOTE:** This method has been deprecated, since it does not provide an accurate count of the documents
in a collection. To obtain an accurate count of documents in the collection, use [countDocuments](#countdocuments).
To obtain an estimated count of all documents in the collection, use [estimatedDocumentCount](#estimateddocumentcount).

#### 参数

##### filter?

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter for the count.

##### options?

[`CountOptions`](../interfaces/CountOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`number`\>

#### 已被弃用

use [countDocuments](#countdocuments) or [estimatedDocumentCount](#estimateddocumentcount) instead

***

### countDocuments()

> **countDocuments**(`filter?`, `options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1755

Gets the number of documents matching the filter.
For a fast count of the total documents in a collection see [estimatedDocumentCount](#estimateddocumentcount).
**Note**: When migrating from [count](#count) to [countDocuments](#countdocuments)
the following query operators must be replaced:

| Operator | Replacement |
| -------- | ----------- |
| `$where`   | [`$expr`][1] |
| `$near`    | [`$geoWithin`][2] with [`$center`][3] |
| `$nearSphere` | [`$geoWithin`][2] with [`$centerSphere`][4] |

[1]: https://www.mongodb.com/docs/manual/reference/operator/query/expr/
[2]: https://www.mongodb.com/docs/manual/reference/operator/query/geoWithin/
[3]: https://www.mongodb.com/docs/manual/reference/operator/query/center/#op._S_center
[4]: https://www.mongodb.com/docs/manual/reference/operator/query/centerSphere/#op._S_centerSphere

#### 参数

##### filter?

[`Document`](../namespaces/BSON/interfaces/Document.md)

The filter for the count

##### options?

[`CountDocumentsOptions`](../interfaces/CountDocumentsOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`number`\>

#### 参阅

 - https://www.mongodb.com/docs/manual/reference/operator/query/expr/
 - https://www.mongodb.com/docs/manual/reference/operator/query/geoWithin/
 - https://www.mongodb.com/docs/manual/reference/operator/query/center/#op._S_center
 - https://www.mongodb.com/docs/manual/reference/operator/query/centerSphere/#op._S_centerSphere

***

### createIndex()

> **createIndex**(`indexSpec`, `options?`): `Promise`\<`string`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1651

Creates an index on the db and collection collection.

#### 参数

##### indexSpec

[`IndexSpecification`](../type-aliases/IndexSpecification.md)

The field name or index specification to create an index for

##### options?

[`CreateIndexesOptions`](../interfaces/CreateIndexesOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`string`\>

#### 示例

```ts
const collection = client.db('foo').collection('bar');

await collection.createIndex({ a: 1, b: -1 });

// Alternate syntax for { c: 1, d: -1 } that ensures order of indexes
await collection.createIndex([ [c, 1], [d, -1] ]);

// Equivalent to { e: 1 }
await collection.createIndex('e');

// Equivalent to { f: 1, g: 1 }
await collection.createIndex(['f', 'g'])

// Equivalent to { h: 1, i: -1 }
await collection.createIndex([ { h: 1 }, { i: -1 } ]);

// Equivalent to { j: 1, k: -1, l: 2d }
await collection.createIndex(['j', ['k', -1], { l: '2d' }])
```

***

### createIndexes()

> **createIndexes**(`indexSpecs`, `options?`): `Promise`\<`string`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1683

Creates multiple indexes in the collection, this method is only supported for
MongoDB 2.6 or higher. Earlier version of MongoDB will throw a command not supported
error.

**Note**: Unlike [createIndex](#createindex), this function takes in raw index specifications.
Index specifications are defined [here](https://www.mongodb.com/docs/manual/reference/command/createIndexes/|).

#### 参数

##### indexSpecs

[`IndexDescription`](../interfaces/IndexDescription.md)[]

An array of index specifications to be created

##### options?

[`CreateIndexesOptions`](../interfaces/CreateIndexesOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`string`[]\>

#### 示例

```ts
const collection = client.db('foo').collection('bar');
await collection.createIndexes([
  // Simple index on field fizz
  {
    key: { fizz: 1 },
  }
  // wildcard index
  {
    key: { '$**': 1 }
  },
  // named index on darmok and jalad
  {
    key: { darmok: 1, jalad: -1 }
    name: 'tanagra'
  }
]);
```

***

### deleteMany()

> **deleteMany**(`filter?`, `options?`): `Promise`\<`DeleteResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1574

Delete multiple documents from a collection

#### 参数

##### filter?

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the documents to remove

##### options?

[`DeleteOptions`](../interfaces/DeleteOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`DeleteResult`\>

***

### deleteOne()

> **deleteOne**(`filter?`, `options?`): `Promise`\<`DeleteResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1567

Delete a document from a collection

#### 参数

##### filter?

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the document to remove

##### options?

[`DeleteOptions`](../interfaces/DeleteOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`DeleteResult`\>

***

### distinct()

#### 调用签名

> **distinct**\<`Key`\>(`key`): `Promise`\<[`Flatten`](../type-aliases/Flatten.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\[`Key`\]\>[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1763

The distinct command returns a list of distinct values for the given key across a collection.

##### 类型参数

###### Key

`Key` *extends* `string` \| `number` \| `symbol`

##### 参数

###### key

`Key`

Field of the document to find distinct values for

##### 返回

`Promise`\<[`Flatten`](../type-aliases/Flatten.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\[`Key`\]\>[]\>

#### 调用签名

> **distinct**\<`Key`\>(`key`, `filter`): `Promise`\<[`Flatten`](../type-aliases/Flatten.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\[`Key`\]\>[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1764

The distinct command returns a list of distinct values for the given key across a collection.

##### 类型参数

###### Key

`Key` *extends* `string` \| `number` \| `symbol`

##### 参数

###### key

`Key`

Field of the document to find distinct values for

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter for filtering the set of documents to which we apply the distinct filter.

##### 返回

`Promise`\<[`Flatten`](../type-aliases/Flatten.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\[`Key`\]\>[]\>

#### 调用签名

> **distinct**\<`Key`\>(`key`, `filter`, `options`): `Promise`\<[`Flatten`](../type-aliases/Flatten.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\[`Key`\]\>[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1765

The distinct command returns a list of distinct values for the given key across a collection.

##### 类型参数

###### Key

`Key` *extends* `string` \| `number` \| `symbol`

##### 参数

###### key

`Key`

Field of the document to find distinct values for

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter for filtering the set of documents to which we apply the distinct filter.

###### options

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

##### 返回

`Promise`\<[`Flatten`](../type-aliases/Flatten.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\[`Key`\]\>[]\>

#### 调用签名

> **distinct**(`key`): `Promise`\<`any`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1766

The distinct command returns a list of distinct values for the given key across a collection.

##### 参数

###### key

`string`

Field of the document to find distinct values for

##### 返回

`Promise`\<`any`[]\>

#### 调用签名

> **distinct**(`key`, `filter`): `Promise`\<`any`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1767

The distinct command returns a list of distinct values for the given key across a collection.

##### 参数

###### key

`string`

Field of the document to find distinct values for

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter for filtering the set of documents to which we apply the distinct filter.

##### 返回

`Promise`\<`any`[]\>

#### 调用签名

> **distinct**(`key`, `filter`, `options`): `Promise`\<`any`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1768

The distinct command returns a list of distinct values for the given key across a collection.

##### 参数

###### key

`string`

Field of the document to find distinct values for

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter for filtering the set of documents to which we apply the distinct filter.

###### options

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

##### 返回

`Promise`\<`any`[]\>

***

### drop()

> **drop**(`options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1590

Drop the collection from the database, removing it permanently. New accesses will create a new collection.

#### 参数

##### options?

[`DropCollectionOptions`](../interfaces/DropCollectionOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`boolean`\>

***

### dropIndex()

> **dropIndex**(`indexName`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1690

Drops an index from this collection.

#### 参数

##### indexName

`string`

Name of the index to drop.

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### dropIndexes()

> **dropIndexes**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1696

Drops all indexes from this collection.

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### estimatedDocumentCount()

> **estimatedDocumentCount**(`options?`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1729

Gets an estimate of the count of documents in a collection using collection metadata.
This will always run a count command on all server versions.

due to an oversight in versions 5.0.0-5.0.8 of MongoDB, the count command,
which estimatedDocumentCount uses in its implementation, was not included in v1 of
the Stable API, and so users of the Stable API with estimatedDocumentCount are
recommended to upgrade their server version to 5.0.9+ or set apiStrict: false to avoid
encountering errors.

#### 参数

##### options?

[`EstimatedDocumentCountOptions`](../interfaces/EstimatedDocumentCountOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`number`\>

#### 参阅

[Behavior](https://www.mongodb.com/docs/manual/reference/command/count/#behavior|Count:)

***

### find()

#### 调用签名

> **find**(): [`FindCursor`](FindCursor.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1608

Creates a cursor for a filter that can be used to iterate over results from MongoDB

##### 返回

[`FindCursor`](FindCursor.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\>

#### 调用签名

> **find**(`filter`, `options?`): [`FindCursor`](FindCursor.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1609

Creates a cursor for a filter that can be used to iterate over results from MongoDB

##### 参数

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter predicate. If unspecified, then all documents in the collection will match the predicate

###### options?

[`FindOptions`](../interfaces/FindOptions.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### 返回

[`FindCursor`](FindCursor.md)\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\>\>

#### 调用签名

> **find**\<`T`\>(`filter`, `options?`): [`FindCursor`](FindCursor.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1610

Creates a cursor for a filter that can be used to iterate over results from MongoDB

##### 类型参数

###### T

`T` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md)

##### 参数

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter predicate. If unspecified, then all documents in the collection will match the predicate

###### options?

[`FindOptions`](../interfaces/FindOptions.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

##### 返回

[`FindCursor`](FindCursor.md)\<`T`\>

***

### findOne()

#### 调用签名

> **findOne**(): `Promise`\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\> \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1597

Fetches the first document that matches the filter

##### 返回

`Promise`\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\> \| `null`\>

#### 调用签名

> **findOne**(`filter`): `Promise`\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\> \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1598

Fetches the first document that matches the filter

##### 参数

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

Query for find Operation

##### 返回

`Promise`\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\> \| `null`\>

#### 调用签名

> **findOne**(`filter`, `options`): `Promise`\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\> \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1599

Fetches the first document that matches the filter

##### 参数

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

Query for find Operation

###### options

[`FindOptions`](../interfaces/FindOptions.md)

Optional settings for the command

##### 返回

`Promise`\<[`WithId`](../type-aliases/WithId.md)\<`TSchema`\> \| `null`\>

#### 调用签名

> **findOne**\<`T`\>(): `Promise`\<`T` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1600

Fetches the first document that matches the filter

##### 类型参数

###### T

`T` = `TSchema`

##### 返回

`Promise`\<`T` \| `null`\>

#### 调用签名

> **findOne**\<`T`\>(`filter`): `Promise`\<`T` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1601

Fetches the first document that matches the filter

##### 类型参数

###### T

`T` = `TSchema`

##### 参数

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

Query for find Operation

##### 返回

`Promise`\<`T` \| `null`\>

#### 调用签名

> **findOne**\<`T`\>(`filter`, `options?`): `Promise`\<`T` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1602

Fetches the first document that matches the filter

##### 类型参数

###### T

`T` = `TSchema`

##### 参数

###### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

Query for find Operation

###### options?

[`FindOptions`](../interfaces/FindOptions.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

Optional settings for the command

##### 返回

`Promise`\<`T` \| `null`\>

***

### findOneAndDelete()

> **findOneAndDelete**(`filter`, `options?`): `Promise`\<[`ModifyResult`](../interfaces/ModifyResult.md)\<`TSchema`\> \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1787

Find a document and delete it in one atomic operation. Requires a write lock for the duration of the operation.

#### 参数

##### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the document to remove

##### options?

[`FindOneAndDeleteOptions`](../interfaces/FindOneAndDeleteOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`ModifyResult`](../interfaces/ModifyResult.md)\<`TSchema`\> \| `null`\>

***

### findOneAndReplace()

> **findOneAndReplace**(`filter`, `replacement`, `options?`): `Promise`\<[`ModifyResult`](../interfaces/ModifyResult.md)\<`TSchema`\> \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1795

Find a document and replace it in one atomic operation. Requires a write lock for the duration of the operation.

#### 参数

##### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the document to replace

##### replacement

[`WithoutId`](../type-aliases/WithoutId.md)\<`TSchema`\>

The Document that replaces the matching document

##### options?

[`FindOneAndReplaceOptions`](../interfaces/FindOneAndReplaceOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`ModifyResult`](../interfaces/ModifyResult.md)\<`TSchema`\> \| `null`\>

***

### findOneAndUpdate()

> **findOneAndUpdate**(`filter`, `update`, `options?`): `Promise`\<[`ModifyResult`](../interfaces/ModifyResult.md)\<`TSchema`\> \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1803

Find a document and update it in one atomic operation. Requires a write lock for the duration of the operation.

#### 参数

##### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the document to update

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<`TSchema`\>

Update operations to be performed on the document

##### options?

[`FindOneAndUpdateOptions`](../interfaces/FindOneAndUpdateOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`ModifyResult`](../interfaces/ModifyResult.md)\<`TSchema`\> \| `null`\>

***

### indexes()

> **indexes**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1774

Retrieve all the indexes on the collection.

#### 参数

##### options?

[`IndexInformationOptions`](../interfaces/IndexInformationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)[]\>

***

### indexExists()

> **indexExists**(`indexes`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1709

Checks if one or more indexes exist on the collection, fails on first non-existing index

#### 参数

##### indexes

`string` \| `string`[]

One or more index names to check.

##### options?

[`IndexInformationOptions`](../interfaces/IndexInformationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`boolean`\>

***

### indexInformation()

> **indexInformation**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1715

Retrieves this collections index info.

#### 参数

##### options?

[`IndexInformationOptions`](../interfaces/IndexInformationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### initializeOrderedBulkOp()

> **initializeOrderedBulkOp**(`options?`): [`OrderedBulkOperation`](OrderedBulkOperation.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1867

Initiate an In order bulk write operation. Operations will be serially executed in the order they are added, creating a new operation for each switch in types.

#### 参数

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

[`OrderedBulkOperation`](OrderedBulkOperation.md)

#### 抛出

MongoNotConnectedError

#### 备注

**NOTE:** MongoClient must be connected prior to calling this method due to a known limitation in this legacy implementation.
However, `collection.bulkWrite()` provides an equivalent API that does not require prior connecting.

***

### initializeUnorderedBulkOp()

> **initializeUnorderedBulkOp**(`options?`): [`UnorderedBulkOperation`](UnorderedBulkOperation.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1858

Initiate an Out of order batch write operation. All operations will be buffered into insert/update/remove commands executed out of order.

#### 参数

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

[`UnorderedBulkOperation`](UnorderedBulkOperation.md)

#### 抛出

MongoNotConnectedError

#### 备注

**NOTE:** MongoClient must be connected prior to calling this method due to a known limitation in this legacy implementation.
However, `collection.bulkWrite()` provides an equivalent API that does not require prior connecting.

***

### insertMany()

> **insertMany**(`docs`, `options?`): `Promise`\<[`InsertManyResult`](../interfaces/InsertManyResult.md)\<`TSchema`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1516

Inserts an array of documents into MongoDB. If documents passed in do not contain the **_id** field,
one will be added to each of the documents missing it by the driver, mutating the document. This behavior
can be overridden by setting the **forceServerObjectId** flag.

#### 参数

##### docs

[`OptionalUnlessRequiredId`](../type-aliases/OptionalUnlessRequiredId.md)\<`TSchema`\>[]

The documents to insert

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`InsertManyResult`](../interfaces/InsertManyResult.md)\<`TSchema`\>\>

***

### insertOne()

> **insertOne**(`doc`, `options?`): `Promise`\<[`InsertOneResult`](../interfaces/InsertOneResult.md)\<`TSchema`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1507

Inserts a single document into MongoDB. If documents passed in do not contain the **_id** field,
one will be added to each of the documents missing it by the driver, mutating the document. This behavior
can be overridden by setting the **forceServerObjectId** flag.

#### 参数

##### doc

[`OptionalUnlessRequiredId`](../type-aliases/OptionalUnlessRequiredId.md)\<`TSchema`\>

The document to insert

##### options?

[`InsertOneOptions`](../interfaces/InsertOneOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`InsertOneResult`](../interfaces/InsertOneResult.md)\<`TSchema`\>\>

***

### isCapped()

> **isCapped**(`options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1622

Returns if the collection is a capped collection

#### 参数

##### options?

[`OperationOptions`](../interfaces/OperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`boolean`\>

***

### listIndexes()

> **listIndexes**(`options?`): [`ListIndexesCursor`](ListIndexesCursor.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1702

Get the list of all indexes information for the collection.

#### 参数

##### options?

[`ListIndexesOptions`](../interfaces/ListIndexesOptions.md)

Optional settings for the command

#### 返回

[`ListIndexesCursor`](ListIndexesCursor.md)

***

### options()

> **options**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1616

Returns the options of the collection.

#### 参数

##### options?

[`OperationOptions`](../interfaces/OperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### rename()

> **rename**(`newName`, `options?`): `Promise`\<`Collection`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1584

Rename the collection.

#### 参数

##### newName

`string`

New name of of the collection.

##### options?

[`RenameOptions`](../interfaces/RenameOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`Collection`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>\>

#### 备注

This operation does not inherit options from the Db or MongoClient.

***

### replaceOne()

> **replaceOne**(`filter`, `replacement`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1552

Replace a document in a collection with another document

#### 参数

##### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the document to replace

##### replacement

[`WithoutId`](../type-aliases/WithoutId.md)\<`TSchema`\>

The Document that replaces the matching document

##### options?

[`ReplaceOptions`](../interfaces/ReplaceOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md) \| `UpdateResult`\>

***

### stats()

> **stats**(`options?`): `Promise`\<[`CollStats`](../interfaces/CollStats.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1780

Get all the collection statistics.

#### 参数

##### options?

[`CollStatsOptions`](../interfaces/CollStatsOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`CollStats`](../interfaces/CollStats.md)\>

***

### updateMany()

> **updateMany**(`filter`, `update`, `options?`): `Promise`\<`UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1560

Update multiple documents in a collection

#### 参数

##### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the documents to update

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<`TSchema`\>

The update operations to be applied to the documents

##### options?

[`UpdateOptions`](../interfaces/UpdateOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`UpdateResult`\>

***

### updateOne()

> **updateOne**(`filter`, `update`, `options?`): `Promise`\<`UpdateResult`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1544

Update a single document in a collection

#### 参数

##### filter

[`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

The filter used to select the document to update

##### update

[`UpdateFilter`](../type-aliases/UpdateFilter.md)\<`TSchema`\> \| `Partial`\<`TSchema`\>

The update operations to be applied to the document

##### options?

[`UpdateOptions`](../interfaces/UpdateOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`UpdateResult`\>

***

### watch()

> **watch**\<`TLocal`, `TChange`\>(`pipeline?`, `options?`): [`ChangeStream`](ChangeStream.md)\<`TLocal`, `TChange`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1849

Create a new Change Stream, watching for new changes (insertions, updates, replacements, deletions, and invalidations) in this collection.

#### 类型参数

##### TLocal

`TLocal` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = `TSchema`

Type of the data being detected by the change stream

##### TChange

`TChange` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`ChangeStreamDocument`](../type-aliases/ChangeStreamDocument.md)\<`TLocal`\>

Type of the whole change stream document emitted

#### 参数

##### pipeline?

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

An array of [pipeline stages](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation) through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.

##### options?

[`ChangeStreamOptions`](../interfaces/ChangeStreamOptions.md)

Optional settings for the command

#### 返回

[`ChangeStream`](ChangeStream.md)\<`TLocal`, `TChange`\>

#### 备注

watch() accepts two generic arguments for distinct use cases:
- The first is to override the schema that may be defined for this specific collection
- The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument

#### Examples

By just providing the first argument I can type the change to be `ChangeStreamDocument<{ _id: number }>`
```ts
collection.watch<{ _id: number }>()
  .on('change', change => console.log(change._id.toFixed(4)));
```

Passing a second argument provides a way to reflect the type changes caused by an advanced pipeline.
Here, we are using a pipeline to have MongoDB filter for insert changes only and add a comment.
No need start from scratch on the ChangeStreamInsertDocument type!
By using an intersection we can save time and ensure defaults remain the same type!
```ts
collection
  .watch<Schema, ChangeStreamInsertDocument<Schema> & { comment: string }>([
    { $addFields: { comment: 'big changes' } },
    { $match: { operationType: 'insert' } }
  ])
  .on('change', change => {
    change.comment.startsWith('big');
    change.operationType === 'insert';
    // No need to narrow in code because the generics did that for us!
    expectType<Schema>(change.fullDocument);
  });
```
