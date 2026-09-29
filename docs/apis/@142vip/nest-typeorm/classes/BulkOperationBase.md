[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / BulkOperationBase

# 抽象 类: BulkOperationBase

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:717

## theme_extended_by

- [`OrderedBulkOperation`](OrderedBulkOperation.md)
- [`UnorderedBulkOperation`](UnorderedBulkOperation.md)

## 构造函数

### 构造函数

> **new BulkOperationBase**(): `BulkOperationBase`

#### 返回

`BulkOperationBase`

## 属性

### isOrdered

> **isOrdered**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:718

***

### operationId?

> `optional` **operationId?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:719

## 访问器

### batches

#### Getter 签名

> **get** **batches**(): [`Batch`](Batch.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:776

##### 返回

[`Batch`](Batch.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]

***

### bsonOptions

#### Getter 签名

> **get** **bsonOptions**(): [`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:774

##### 返回

[`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

***

### writeConcern

#### Getter 签名

> **get** **writeConcern**(): [`WriteConcern`](WriteConcern.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:775

##### 返回

[`WriteConcern`](WriteConcern.md) \| `undefined`

## 方法

### addToOperationsList()

> `abstract` **addToOperationsList**(`batchType`, `document`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:778

#### 参数

##### batchType

[`BatchType`](../type-aliases/BatchType.md)

##### document

[`Document`](../namespaces/BSON/interfaces/Document.md) \| [`UpdateStatement`](../interfaces/UpdateStatement.md) \| [`DeleteStatement`](../interfaces/DeleteStatement.md)

#### 返回

`this`

***

### execute()

> **execute**(`options?`): `Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:777

#### 参数

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

`Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

***

### find()

> **find**(`selector`): [`FindOperators`](FindOperators.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:771

Builds a find operation for an update/updateOne/delete/deleteOne/replaceOne.
Returns a builder object used to complete the definition of the operation.

#### 参数

##### selector

[`Document`](../namespaces/BSON/interfaces/Document.md)

#### 返回

[`FindOperators`](FindOperators.md)

#### 示例

```ts
const bulkOp = collection.initializeOrderedBulkOp()

// Add an updateOne to the bulkOp
bulkOp.find({ a: 1 }).updateOne({ $set: { b: 2 } })

// Add an updateMany to the bulkOp
bulkOp.find({ c: 3 }).update({ $set: { d: 4 } })

// Add an upsert
bulkOp.find({ e: 5 }).upsert().updateOne({ $set: { f: 6 } })

// Add a deletion
bulkOp.find({ g: 7 }).deleteOne()

// Add a multi deletion
bulkOp.find({ h: 8 }).delete()

// Add a replaceOne
bulkOp.find({ i: 9 }).replaceOne({ writeConcern: { j: 10 } })

// Update using a pipeline (requires Mongodb 4.2 or higher)
bulk.find({ k: 11, y: { $exists: true }, z: { $exists: true } }).updateOne([
  { $set: { total: { $sum: ['$y', '$z'] } } }
])

// All of the ops will now be executed
await bulkOp.execute()
```

***

### insert()

> **insert**(`document`): `BulkOperationBase`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:735

Add a single insert document to the bulk operation

#### 参数

##### document

[`Document`](../namespaces/BSON/interfaces/Document.md)

#### 返回

`BulkOperationBase`

#### 示例

```ts
const bulkOp = collection.initializeOrderedBulkOp()

// Adds three inserts to the bulkOp.
bulkOp
  .insert({ a: 1 })
  .insert({ b: 2 })
  .insert({ c: 3 })
await bulkOp.execute()
```

***

### raw()

> **raw**(`op`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:773

Specifies a raw operation to perform in the bulk write.

#### 参数

##### op

[`AnyBulkWriteOperation`](../type-aliases/AnyBulkWriteOperation.md)

#### 返回

`this`
