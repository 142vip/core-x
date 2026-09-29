[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / GridFSBucketWriteStream

# 类: GridFSBucketWriteStream

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3137

A writable stream that enables you to write buffers to GridFS.

Do not instantiate this class directly. Use `openUploadStream()` instead.

## 构造函数

### 构造函数

> **new GridFSBucketWriteStream**(): `GridFSBucketWriteStream`

#### 返回

`GridFSBucketWriteStream`

## 属性

### bucket

> **bucket**: [`GridFSBucket`](GridFSBucket.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3138

***

### bufToStore

> **bufToStore**: `Buffer`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3146

***

### chunks

> **chunks**: [`Collection`](Collection.md)\<[`GridFSChunk`](../interfaces/GridFSChunk.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3139

***

### chunkSizeBytes

> **chunkSizeBytes**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3145

***

### done

> **done**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3143

***

### filename

> **filename**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3140

***

### files

> **files**: [`Collection`](Collection.md)\<[`GridFSFile`](../interfaces/GridFSFile.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3141

***

### id

> **id**: [`ObjectId`](../namespaces/BSON/classes/ObjectId.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3144

***

### length

> **length**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3147

***

### n

> **n**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3148

***

### options

> **options**: [`GridFSBucketWriteStreamOptions`](../interfaces/GridFSBucketWriteStreamOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3142

***

### pos

> **pos**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3149

***

### state

> **state**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3150

#### aborted

> **aborted**: `boolean`

#### errored

> **errored**: `boolean`

#### outstandingRequests

> **outstandingRequests**: `number`

#### streamEnd

> **streamEnd**: `boolean`

***

### writeConcern?

> `optional` **writeConcern?**: [`WriteConcern`](WriteConcern.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3156

## 方法

### abort()

> **abort**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3182

Places this write stream into an aborted state (all future writes fail)
and deletes all chunks that have already been written.

#### 返回

`Promise`\<`void`\>

***

### end()

#### 调用签名

> **end**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3192

Tells the stream that no more data will be coming in. The stream will
persist the remaining data to MongoDB, write the files document, and
then emit a 'finish' event.

##### 返回

`this`

#### 调用签名

> **end**(`chunk`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3193

Tells the stream that no more data will be coming in. The stream will
persist the remaining data to MongoDB, write the files document, and
then emit a 'finish' event.

##### 参数

###### chunk

`Buffer`

Buffer to write

##### 返回

`this`

#### 调用签名

> **end**(`callback`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3194

Tells the stream that no more data will be coming in. The stream will
persist the remaining data to MongoDB, write the files document, and
then emit a 'finish' event.

##### 参数

###### callback

[`Callback`](../type-aliases/Callback.md)\<`void` \| [`GridFSFile`](../interfaces/GridFSFile.md)\>

Function to call when all files and chunks have been persisted to MongoDB

##### 返回

`this`

#### 调用签名

> **end**(`chunk`, `callback`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3195

Tells the stream that no more data will be coming in. The stream will
persist the remaining data to MongoDB, write the files document, and
then emit a 'finish' event.

##### 参数

###### chunk

`Buffer`

Buffer to write

###### callback

[`Callback`](../type-aliases/Callback.md)\<`void` \| [`GridFSFile`](../interfaces/GridFSFile.md)\>

Function to call when all files and chunks have been persisted to MongoDB

##### 返回

`this`

#### 调用签名

> **end**(`chunk`, `encoding`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3196

Tells the stream that no more data will be coming in. The stream will
persist the remaining data to MongoDB, write the files document, and
then emit a 'finish' event.

##### 参数

###### chunk

`Buffer`

Buffer to write

###### encoding

`BufferEncoding`

Optional encoding for the buffer

##### 返回

`this`

#### 调用签名

> **end**(`chunk`, `encoding`, `callback`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3197

Tells the stream that no more data will be coming in. The stream will
persist the remaining data to MongoDB, write the files document, and
then emit a 'finish' event.

##### 参数

###### chunk

`Buffer`

Buffer to write

###### encoding

`BufferEncoding` \| `undefined`

Optional encoding for the buffer

###### callback

[`Callback`](../type-aliases/Callback.md)\<`void` \| [`GridFSFile`](../interfaces/GridFSFile.md)\>

Function to call when all files and chunks have been persisted to MongoDB

##### 返回

`this`

***

### write()

#### 调用签名

> **write**(`chunk`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3174

Write a buffer to the stream.

##### 参数

###### chunk

`string` \| `Buffer`\<`ArrayBufferLike`\>

Buffer to write

##### 返回

`boolean`

False if this write required flushing a chunk to MongoDB. True otherwise.

#### 调用签名

> **write**(`chunk`, `callback`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3175

Write a buffer to the stream.

##### 参数

###### chunk

`string` \| `Buffer`\<`ArrayBufferLike`\>

Buffer to write

###### callback

[`Callback`](../type-aliases/Callback.md)\<`void`\>

Function to call when the chunk was added to the buffer, or if the entire chunk was persisted to MongoDB if this chunk caused a flush.

##### 返回

`boolean`

False if this write required flushing a chunk to MongoDB. True otherwise.

#### 调用签名

> **write**(`chunk`, `encoding`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3176

Write a buffer to the stream.

##### 参数

###### chunk

`string` \| `Buffer`\<`ArrayBufferLike`\>

Buffer to write

###### encoding

`BufferEncoding` \| `undefined`

##### 返回

`boolean`

False if this write required flushing a chunk to MongoDB. True otherwise.

#### 调用签名

> **write**(`chunk`, `encoding`, `callback`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3177

Write a buffer to the stream.

##### 参数

###### chunk

`string` \| `Buffer`\<`ArrayBufferLike`\>

Buffer to write

###### encoding

`BufferEncoding` \| `undefined`

###### callback

[`Callback`](../type-aliases/Callback.md)\<`void`\>

Function to call when the chunk was added to the buffer, or if the entire chunk was persisted to MongoDB if this chunk caused a flush.

##### 返回

`boolean`

False if this write required flushing a chunk to MongoDB. True otherwise.

## Events

### CLOSE

> `readonly` `static` **CLOSE**: `"close"` = `"close"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3158

***

### ERROR

> `readonly` `static` **ERROR**: `"error"` = `"error"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3160

***

### FINISH

> `readonly` `static` **FINISH**: `"finish"` = `"finish"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3165

`end()` was called and the write stream successfully wrote the file metadata and all the chunks to MongoDB.
