[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / DeleteManyModel

# 接口: DeleteManyModel\<TSchema\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2541

## 类型参数

### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

## 属性

### collation?

> `optional` **collation?**: [`CollationOptions`](CollationOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2545

Specifies a collation.

***

### filter

> **filter**: [`Filter`](../type-aliases/Filter.md)\<`TSchema`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2543

The filter to limit the deleted documents.

***

### hint?

> `optional` **hint?**: [`Hint`](../type-aliases/Hint.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:2547

The index to use. If specified, then the query system will only consider plans using the hinted index.
