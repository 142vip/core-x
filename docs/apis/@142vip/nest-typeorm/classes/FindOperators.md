[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / FindOperators

# 类: FindOperators

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2906

A builder object that is returned from [BulkOperationBase#find](BulkOperationBase.md#find).
Is used to build a write operation that involves a query filter.

## 构造函数

### 构造函数

> **new FindOperators**(): `FindOperators`

#### 返回

`FindOperators`

## 属性

### bulkOperation

> **bulkOperation**: [`BulkOperationBase`](BulkOperationBase.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2907

## 方法

### arrayFilters()

> **arrayFilters**(`arrayFilters`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2923

Specifies arrayFilters for UpdateOne or UpdateMany bulk operations.

#### 参数

##### arrayFilters

[`Document`](../namespaces/BSON/interfaces/Document.md)[]

#### 返回

`this`

***

### collation()

> **collation**(`collation`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2921

Specifies the collation for the query condition.

#### 参数

##### collation

[`CollationOptions`](../interfaces/CollationOptions.md)

#### 返回

`this`

***

### delete()

> **delete**(): [`BulkOperationBase`](BulkOperationBase.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2917

Add a delete many operation to the bulk operation

#### 返回

[`BulkOperationBase`](BulkOperationBase.md)

***

### deleteOne()

> **deleteOne**(): [`BulkOperationBase`](BulkOperationBase.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2915

Add a delete one operation to the bulk operation

#### 返回

[`BulkOperationBase`](BulkOperationBase.md)

***

### hint()

> **hint**(`hint`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2925

Specifies hint for the bulk operation.

#### 参数

##### hint

[`Hint`](../type-aliases/Hint.md)

#### 返回

`this`

***

### replaceOne()

> **replaceOne**(`replacement`): [`BulkOperationBase`](BulkOperationBase.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2913

Add a replace one operation to the bulk operation

#### 参数

##### replacement

[`Document`](../namespaces/BSON/interfaces/Document.md)

#### 返回

[`BulkOperationBase`](BulkOperationBase.md)

***

### update()

> **update**(`updateDocument`): [`BulkOperationBase`](BulkOperationBase.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2909

Add a multiple update operation to the bulk operation

#### 参数

##### updateDocument

[`Document`](../namespaces/BSON/interfaces/Document.md) \| [`Document`](../namespaces/BSON/interfaces/Document.md)[]

#### 返回

[`BulkOperationBase`](BulkOperationBase.md)

***

### updateOne()

> **updateOne**(`updateDocument`): [`BulkOperationBase`](BulkOperationBase.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2911

Add a single update operation to the bulk operation

#### 参数

##### updateDocument

[`Document`](../namespaces/BSON/interfaces/Document.md) \| [`Document`](../namespaces/BSON/interfaces/Document.md)[]

#### 返回

[`BulkOperationBase`](BulkOperationBase.md)

***

### upsert()

> **upsert**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2919

Upsert modifier for update bulk operation, noting that this operation is an upsert.

#### 返回

`this`
