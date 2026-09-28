[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ChangeStreamDeleteDocument

# 接口: ChangeStreamDeleteDocument\<TSchema\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:966

## 参阅

https://www.mongodb.com/docs/manual/reference/change-events/#delete-event

## theme_extends

- [`ChangeStreamDocumentCommon`](ChangeStreamDocumentCommon.md).[`ChangeStreamDocumentKey`](ChangeStreamDocumentKey.md)\<`TSchema`\>.[`ChangeStreamDocumentCollectionUUID`](ChangeStreamDocumentCollectionUUID.md)

## 类型参数

### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

## 属性

### \_id

> **\_id**: `unknown`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1002

The id functions as an opaque token for use when resuming an interrupted
change stream.

#### 继承自

[`ChangeStreamDocumentCommon`](ChangeStreamDocumentCommon.md).[`_id`](ChangeStreamDocumentCommon.md#id)

***

### clusterTime?

> `optional` **clusterTime?**: [`Timestamp`](../namespaces/BSON/classes/Timestamp.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1011

The timestamp from the oplog entry associated with the event.
For events that happened as part of a multi-document transaction, the associated change stream
notifications will have the same clusterTime value, namely the time when the transaction was committed.
On a sharded cluster, events that occur on different shards can have the same clusterTime but be
associated with different transactions or even not be associated with any transaction.
To identify events for a single transaction, you can use the combination of lsid and txnNumber in the change stream event document.

#### 继承自

[`ChangeStreamDocumentCommon`](ChangeStreamDocumentCommon.md).[`clusterTime`](ChangeStreamDocumentCommon.md#clustertime)

***

### collectionUUID

> **collectionUUID**: [`Binary`](../namespaces/BSON/classes/Binary.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:994

The UUID (Binary subtype 4) of the collection that the operation was performed on.

Only present when the `showExpandedEvents` flag is enabled.

**NOTE:** collectionUUID will be converted to a NodeJS Buffer if the promoteBuffers
   flag is enabled.

#### Since Server Version

6.1.0

#### 继承自

[`ChangeStreamDocumentCollectionUUID`](ChangeStreamDocumentCollectionUUID.md).[`collectionUUID`](ChangeStreamDocumentCollectionUUID.md#collectionuuid)

***

### documentKey

> **documentKey**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1031

For unsharded collections this contains a single field `_id`.
For sharded collections, this will contain all the components of the shard key

#### 索引签名

\[`shardKey`: `string`\]: `any`

#### \_id

> **\_id**: [`InferIdType`](../type-aliases/InferIdType.md)\<`TSchema`\>

#### 继承自

[`ChangeStreamDocumentKey`](ChangeStreamDocumentKey.md).[`documentKey`](ChangeStreamDocumentKey.md#documentkey)

***

### fullDocumentBeforeChange?

> `optional` **fullDocumentBeforeChange?**: `TSchema`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:978

Contains the pre-image of the modified or deleted document if the
pre-image is available for the change event and either 'required' or
'whenAvailable' was specified for the 'fullDocumentBeforeChange' option
when creating the change stream. If 'whenAvailable' was specified but the
pre-image is unavailable, this will be explicitly set to null.

***

### lsid?

> `optional` **lsid?**: [`ServerSessionId`](../type-aliases/ServerSessionId.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1023

The identifier for the session associated with the transaction.
Only present if the operation is part of a multi-document transaction.

#### 继承自

[`ChangeStreamDocumentCommon`](ChangeStreamDocumentCommon.md).[`lsid`](ChangeStreamDocumentCommon.md#lsid)

***

### ns

> **ns**: [`ChangeStreamNameSpace`](ChangeStreamNameSpace.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:970

Namespace the delete event occurred on

***

### operationType

> **operationType**: `"delete"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:968

Describes the type of operation represented in this change notification

***

### txnNumber?

> `optional` **txnNumber?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1018

The transaction number.
Only present if the operation is part of a multi-document transaction.

**NOTE:** txnNumber can be a Long if promoteLongs is set to false

#### 继承自

[`ChangeStreamDocumentCommon`](ChangeStreamDocumentCommon.md).[`txnNumber`](ChangeStreamDocumentCommon.md#txnnumber)
