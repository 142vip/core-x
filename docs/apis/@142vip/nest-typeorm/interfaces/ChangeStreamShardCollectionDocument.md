[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ChangeStreamShardCollectionDocument

# 接口: ChangeStreamShardCollectionDocument

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1234

## 参阅

https://www.mongodb.com/docs/manual/reference/change-events/

## theme_extends

- [`ChangeStreamDocumentCommon`](ChangeStreamDocumentCommon.md).[`ChangeStreamDocumentCollectionUUID`](ChangeStreamDocumentCollectionUUID.md).[`ChangeStreamDocumentOperationDescription`](ChangeStreamDocumentOperationDescription.md)

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

### lsid?

> `optional` **lsid?**: [`ServerSessionId`](../type-aliases/ServerSessionId.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1023

The identifier for the session associated with the transaction.
Only present if the operation is part of a multi-document transaction.

#### 继承自

[`ChangeStreamDocumentCommon`](ChangeStreamDocumentCommon.md).[`lsid`](ChangeStreamDocumentCommon.md#lsid)

***

### operationDescription?

> `optional` **operationDescription?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1045

An description of the operation.

Only present when the `showExpandedEvents` flag is enabled.

#### Since Server Version

6.1.0

#### 继承自

[`ChangeStreamDocumentOperationDescription`](ChangeStreamDocumentOperationDescription.md).[`operationDescription`](ChangeStreamDocumentOperationDescription.md#operationdescription)

***

### operationType

> **operationType**: `"shardCollection"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1236

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
