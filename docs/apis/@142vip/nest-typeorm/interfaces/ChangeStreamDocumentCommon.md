[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ChangeStreamDocumentCommon

# 接口: ChangeStreamDocumentCommon

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:997

## theme_extended_by

- [`ChangeStreamCollModDocument`](ChangeStreamCollModDocument.md)
- [`ChangeStreamCreateDocument`](ChangeStreamCreateDocument.md)
- [`ChangeStreamCreateIndexDocument`](ChangeStreamCreateIndexDocument.md)
- [`ChangeStreamDeleteDocument`](ChangeStreamDeleteDocument.md)
- [`ChangeStreamDropDatabaseDocument`](ChangeStreamDropDatabaseDocument.md)
- [`ChangeStreamDropDocument`](ChangeStreamDropDocument.md)
- [`ChangeStreamDropIndexDocument`](ChangeStreamDropIndexDocument.md)
- [`ChangeStreamInsertDocument`](ChangeStreamInsertDocument.md)
- [`ChangeStreamInvalidateDocument`](ChangeStreamInvalidateDocument.md)
- [`ChangeStreamRefineCollectionShardKeyDocument`](ChangeStreamRefineCollectionShardKeyDocument.md)
- [`ChangeStreamRenameDocument`](ChangeStreamRenameDocument.md)
- [`ChangeStreamReplaceDocument`](ChangeStreamReplaceDocument.md)
- [`ChangeStreamReshardCollectionDocument`](ChangeStreamReshardCollectionDocument.md)
- [`ChangeStreamShardCollectionDocument`](ChangeStreamShardCollectionDocument.md)
- [`ChangeStreamUpdateDocument`](ChangeStreamUpdateDocument.md)

## 属性

### \_id

> **\_id**: `unknown`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1002

The id functions as an opaque token for use when resuming an interrupted
change stream.

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

***

### lsid?

> `optional` **lsid?**: [`ServerSessionId`](../type-aliases/ServerSessionId.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1023

The identifier for the session associated with the transaction.
Only present if the operation is part of a multi-document transaction.

***

### txnNumber?

> `optional` **txnNumber?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1018

The transaction number.
Only present if the operation is part of a multi-document transaction.

**NOTE:** txnNumber can be a Long if promoteLongs is set to false
