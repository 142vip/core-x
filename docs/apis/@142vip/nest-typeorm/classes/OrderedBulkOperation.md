[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / OrderedBulkOperation

# 类: OrderedBulkOperation

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4352

## theme_extends

- [`BulkOperationBase`](BulkOperationBase.md)

## 构造函数

### 构造函数

> **new OrderedBulkOperation**(): `OrderedBulkOperation`

#### 返回

`OrderedBulkOperation`

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`constructor`](BulkOperationBase.md#constructor)

## 属性

### isOrdered

> **isOrdered**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:718

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`isOrdered`](BulkOperationBase.md#isordered)

***

### operationId?

> `optional` **operationId?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:719

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`operationId`](BulkOperationBase.md#operationid)

## 访问器

### batches

#### Getter 签名

> **get** **batches**(): [`Batch`](Batch.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:776

##### 返回

[`Batch`](Batch.md)\<[`Document`](../namespaces/BSON/interfaces/Document.md)\>[]

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`batches`](BulkOperationBase.md#batches)

***

### bsonOptions

#### Getter 签名

> **get** **bsonOptions**(): [`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:774

##### 返回

[`BSONSerializeOptions`](../interfaces/BSONSerializeOptions.md)

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`bsonOptions`](BulkOperationBase.md#bsonoptions)

***

### writeConcern

#### Getter 签名

> **get** **writeConcern**(): [`WriteConcern`](WriteConcern.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:775

##### 返回

[`WriteConcern`](WriteConcern.md) \| `undefined`

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`writeConcern`](BulkOperationBase.md#writeconcern)

## 方法

### addToOperationsList()

> **addToOperationsList**(`batchType`, `document`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4353

#### 参数

##### batchType

[`BatchType`](../type-aliases/BatchType.md)

##### document

[`Document`](../namespaces/BSON/interfaces/Document.md) \| [`UpdateStatement`](../interfaces/UpdateStatement.md) \| [`DeleteStatement`](../interfaces/DeleteStatement.md)

#### 返回

`this`

#### 重写了

[`BulkOperationBase`](BulkOperationBase.md).[`addToOperationsList`](BulkOperationBase.md#addtooperationslist)

***

### execute()

> **execute**(`options?`): `Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:777

#### 参数

##### options?

[`BulkWriteOptions`](../interfaces/BulkWriteOptions.md)

#### 返回

`Promise`\<[`BulkWriteResult`](BulkWriteResult.md)\>

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`execute`](BulkOperationBase.md#execute)

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

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`find`](BulkOperationBase.md#find)

***

### insert()

> **insert**(`document`): [`BulkOperationBase`](BulkOperationBase.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:735

Add a single insert document to the bulk operation

#### 参数

##### document

[`Document`](../namespaces/BSON/interfaces/Document.md)

#### 返回

[`BulkOperationBase`](BulkOperationBase.md)

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

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`insert`](BulkOperationBase.md#insert)

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

#### 继承自

[`BulkOperationBase`](BulkOperationBase.md).[`raw`](BulkOperationBase.md#raw)
