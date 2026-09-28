[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Db

# 类: Db

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2345

The **Db** class is a class that represents a MongoDB Database.

## 示例

```ts
import { MongoClient } from 'mongodb'

interface Pet {
  name: string
  kind: 'dog' | 'cat' | 'fish'
}

const client = new MongoClient('mongodb://localhost:27017')
const db = client.db()

// Create a collection that validates our union
await db.createCollection<Pet>('pets', {
  validator: { $expr: { $in: ['$kind', ['dog', 'cat', 'fish']] } }
})
```

## 构造函数

### 构造函数

> **new Db**(`client`, `databaseName`, `options?`): `Db`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2359

Creates a new Db instance

#### 参数

##### client

[`MongoClient`](MongoClient.md)

The MongoClient for the database.

##### databaseName

`string`

The name of the database this instance represents.

##### options?

[`DbOptions`](../interfaces/DbOptions.md)

Optional settings for Db construction

#### 返回

`Db`

## 属性

### SYSTEM\_COMMAND\_COLLECTION

> `static` **SYSTEM\_COMMAND\_COLLECTION**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2350

***

### SYSTEM\_INDEX\_COLLECTION

> `static` **SYSTEM\_INDEX\_COLLECTION**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2347

***

### SYSTEM\_JS\_COLLECTION

> `static` **SYSTEM\_JS\_COLLECTION**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2351

***

### SYSTEM\_NAMESPACE\_COLLECTION

> `static` **SYSTEM\_NAMESPACE\_COLLECTION**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2346

***

### SYSTEM\_PROFILE\_COLLECTION

> `static` **SYSTEM\_PROFILE\_COLLECTION**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2348

***

### SYSTEM\_USER\_COLLECTION

> `static` **SYSTEM\_USER\_COLLECTION**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2349

## 访问器

### bsonOptions

#### Getter 签名

> **get** **bsonOptions**(): [`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2372

##### 返回

[`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

***

### databaseName

#### Getter 签名

> **get** **databaseName**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2360

##### 返回

`string`

***

### namespace

#### Getter 签名

> **get** **namespace**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2374

##### 返回

`string`

***

### options

#### Getter 签名

> **get** **options**(): [`DbOptions`](../interfaces/DbOptions.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2361

##### 返回

[`DbOptions`](../interfaces/DbOptions.md) \| `undefined`

***

### readConcern

#### Getter 签名

> **get** **readConcern**(): [`ReadConcern`](ReadConcern.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2366

##### 返回

[`ReadConcern`](ReadConcern.md) \| `undefined`

***

### readPreference

#### Getter 签名

> **get** **readPreference**(): [`ReadPreference`](ReadPreference.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2371

The current readPreference of the Db. If not explicitly defined for
this Db, will be inherited from the parent MongoClient

##### 返回

[`ReadPreference`](ReadPreference.md)

***

### secondaryOk

#### Getter 签名

> **get** **secondaryOk**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2365

Check if a secondary can be used (because the read preference is *not* set to primary)

##### 返回

`boolean`

***

### writeConcern

#### Getter 签名

> **get** **writeConcern**(): [`WriteConcern`](WriteConcern.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2373

##### 返回

[`WriteConcern`](WriteConcern.md) \| `undefined`

## 方法

### addUser()

> **addUser**(`username`, `passwordOrOptions?`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2473

Add a user to the database

#### 参数

##### username

`string`

The username for the new user

##### passwordOrOptions?

`string` \| [`AddUserOptions`](../interfaces/AddUserOptions.md)

An optional password for the new user, or the options for the command

##### options?

[`AddUserOptions`](../interfaces/AddUserOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### admin()

> **admin**(): [`Admin`](Admin.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2401

Return the Admin db instance

#### 返回

[`Admin`](Admin.md)

***

### aggregate()

> **aggregate**\<`T`\>(`pipeline?`, `options?`): [`AggregationCursor`](AggregationCursor.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2399

Execute an aggregation framework pipeline against the database, needs MongoDB \\>= 3.6

#### 类型参数

##### T

`T` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

#### 参数

##### pipeline?

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

An array of aggregation stages to be executed

##### options?

[`AggregateOptions`](../interfaces/AggregateOptions.md)

Optional settings for the command

#### 返回

[`AggregationCursor`](AggregationCursor.md)\<`T`\>

***

### collection()

> **collection**\<`TSchema`\>(`name`, `options?`): [`Collection`](Collection.md)\<`TSchema`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2408

Returns a reference to a MongoDB Collection. If it does not exist it will be created implicitly.

#### 类型参数

##### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

#### 参数

##### name

`string`

the collection name we wish to access.

##### options?

[`CollectionOptions`](../interfaces/CollectionOptions.md)

#### 返回

[`Collection`](Collection.md)\<`TSchema`\>

return the new Collection instance

***

### collections()

> **collections**(`options?`): `Promise`\<[`Collection`](Collection.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2457

Fetch all collections for the current db.

#### 参数

##### options?

[`ListCollectionsOptions`](../interfaces/ListCollectionsOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Collection`](Collection.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]\>

***

### command()

> **command**(`command`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2392

Execute a command

#### 参数

##### command

[`Document`](../namespaces/BSON/interfaces/Document.md)

The command to run

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

#### 备注

This command does not inherit options from the MongoClient.

***

### createCollection()

> **createCollection**\<`TSchema`\>(`name`, `options?`): `Promise`\<[`Collection`](Collection.md)\<`TSchema`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2382

Create a new collection on a server with the specified options. Use this to create capped collections.
More information about command options available at https://www.mongodb.com/docs/manual/reference/command/create/

#### 类型参数

##### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

#### 参数

##### name

`string`

The name of the collection to create

##### options?

[`CreateCollectionOptions`](../interfaces/CreateCollectionOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Collection`](Collection.md)\<`TSchema`\>\>

***

### createIndex()

> **createIndex**(`name`, `indexSpec`, `options?`): `Promise`\<`string`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2465

Creates an index on the db and collection.

#### 参数

##### name

`string`

Name of the collection to create the index on.

##### indexSpec

[`IndexSpecification`](../type-aliases/IndexSpecification.md)

Specify the field to index, or an index specification

##### options?

[`CreateIndexesOptions`](../interfaces/CreateIndexesOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`string`\>

***

### dropCollection()

> **dropCollection**(`name`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2445

Drop a collection from the database, removing it permanently. New accesses will create a new collection.

#### 参数

##### name

`string`

Name of collection to drop

##### options?

[`DropCollectionOptions`](../interfaces/DropCollectionOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`boolean`\>

***

### dropDatabase()

> **dropDatabase**(`options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2451

Drop a database, removing it permanently from the server.

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`boolean`\>

***

### indexInformation()

> **indexInformation**(`name`, `options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2500

Retrieves this collections index info.

#### 参数

##### name

`string`

The name of the collection.

##### options?

[`IndexInformationOptions`](../interfaces/IndexInformationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### listCollections()

#### 调用签名

> **listCollections**(`filter`, `options`): [`ListCollectionsCursor`](ListCollectionsCursor.md)\<`Pick`\<[`CollectionInfo`](../interfaces/CollectionInfo.md), `"type"` \| `"name"`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2421

List all collections of this database with optional filter

##### 参数

###### filter

[`Document`](../namespaces/BSON/interfaces/Document.md)

Query to filter collections by

###### options

[`ListCollectionsOptions`](../interfaces/ListCollectionsOptions.md) & `object`

Optional settings for the command

##### 返回

[`ListCollectionsCursor`](ListCollectionsCursor.md)\<`Pick`\<[`CollectionInfo`](../interfaces/CollectionInfo.md), `"type"` \| `"name"`\>\>

#### 调用签名

> **listCollections**(`filter`, `options`): [`ListCollectionsCursor`](ListCollectionsCursor.md)\<[`CollectionInfo`](../interfaces/CollectionInfo.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2424

List all collections of this database with optional filter

##### 参数

###### filter

[`Document`](../namespaces/BSON/interfaces/Document.md)

Query to filter collections by

###### options

[`ListCollectionsOptions`](../interfaces/ListCollectionsOptions.md) & `object`

Optional settings for the command

##### 返回

[`ListCollectionsCursor`](ListCollectionsCursor.md)\<[`CollectionInfo`](../interfaces/CollectionInfo.md)\>

#### 调用签名

> **listCollections**\<`T`\>(`filter?`, `options?`): [`ListCollectionsCursor`](ListCollectionsCursor.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2427

List all collections of this database with optional filter

##### 类型参数

###### T

`T` *extends* [`CollectionInfo`](../interfaces/CollectionInfo.md) \| `Pick`\<[`CollectionInfo`](../interfaces/CollectionInfo.md), `"type"` \| `"name"`\> = [`CollectionInfo`](../interfaces/CollectionInfo.md) \| `Pick`\<[`CollectionInfo`](../interfaces/CollectionInfo.md), `"type"` \| `"name"`\>

##### 参数

###### filter?

[`Document`](../namespaces/BSON/interfaces/Document.md)

Query to filter collections by

###### options?

[`ListCollectionsOptions`](../interfaces/ListCollectionsOptions.md)

Optional settings for the command

##### 返回

[`ListCollectionsCursor`](ListCollectionsCursor.md)\<`T`\>

***

### profilingLevel()

> **profilingLevel**(`options?`): `Promise`\<`string`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2493

Retrieve the current profiling Level for MongoDB

#### 参数

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`string`\>

***

### removeUser()

> **removeUser**(`username`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2480

Remove a user from a database

#### 参数

##### username

`string`

The username to remove

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<`boolean`\>

***

### renameCollection()

> **renameCollection**\<`TSchema`\>(`fromCollection`, `toCollection`, `options?`): `Promise`\<[`Collection`](Collection.md)\<`TSchema`\>\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2438

Rename a collection.

#### 类型参数

##### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

#### 参数

##### fromCollection

`string`

Name of current collection to rename

##### toCollection

`string`

New name of of the collection

##### options?

[`RenameOptions`](../interfaces/RenameOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Collection`](Collection.md)\<`TSchema`\>\>

#### 备注

This operation does not inherit options from the MongoClient.

***

### setProfilingLevel()

> **setProfilingLevel**(`level`, `options?`): `Promise`\<[`ProfilingLevel`](../type-aliases/ProfilingLevel.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2487

Set the current profiling level of MongoDB

#### 参数

##### level

[`ProfilingLevel`](../type-aliases/ProfilingLevel.md)

The new profiling level (off, slow_only, all).

##### options?

[`CommandOperationOptions`](../interfaces/CommandOperationOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`ProfilingLevel`](../type-aliases/ProfilingLevel.md)\>

***

### stats()

> **stats**(`options?`): `Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2414

Get all the db statistics.

#### 参数

##### options?

[`DbStatsOptions`](../interfaces/DbStatsOptions.md)

Optional settings for the command

#### 返回

`Promise`\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>

***

### watch()

> **watch**\<`TSchema`, `TChange`\>(`pipeline?`, `options?`): [`ChangeStream`](ChangeStream.md)\<`TSchema`, `TChange`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2516

Create a new Change Stream, watching for new changes (insertions, updates,
replacements, deletions, and invalidations) in this database. Will ignore all
changes to system collections.

#### 类型参数

##### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

Type of the data being detected by the change stream

##### TChange

`TChange` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`ChangeStreamDocument`](../type-aliases/ChangeStreamDocument.md)\<`TSchema`\>

Type of the whole change stream document emitted

#### 参数

##### pipeline?

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

An array of [pipeline stages](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/|aggregation) through which to pass change stream documents. This allows for filtering (using $match) and manipulating the change stream documents.

##### options?

[`ChangeStreamOptions`](../interfaces/ChangeStreamOptions.md)

Optional settings for the command

#### 返回

[`ChangeStream`](ChangeStream.md)\<`TSchema`, `TChange`\>

#### 备注

watch() accepts two generic arguments for distinct use cases:
- The first is to provide the schema that may be defined for all the collections within this database
- The second is to override the shape of the change stream document entirely, if it is not provided the type will default to ChangeStreamDocument of the first argument
