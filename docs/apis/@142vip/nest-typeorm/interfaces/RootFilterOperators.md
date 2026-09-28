[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / RootFilterOperators

# 接口: RootFilterOperators\<TSchema\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4612

## theme_extends

- [`Document`](../namespaces/BSON/interfaces/Document.md)

## 类型参数

### TSchema

`TSchema`

## 可索引

> \[`key`: `string`\]: `any`

## 属性

### $and?

> `optional` **$and?**: [`Filter`](../type-aliases/Filter.md)\<`TSchema`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4613

***

### $comment?

> `optional` **$comment?**: `string` \| [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4623

***

### $nor?

> `optional` **$nor?**: [`Filter`](../type-aliases/Filter.md)\<`TSchema`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4614

***

### $or?

> `optional` **$or?**: [`Filter`](../type-aliases/Filter.md)\<`TSchema`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4615

***

### $text?

> `optional` **$text?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4616

#### $caseSensitive?

> `optional` **$caseSensitive?**: `boolean`

#### $diacriticSensitive?

> `optional` **$diacriticSensitive?**: `boolean`

#### $language?

> `optional` **$language?**: `string`

#### $search

> **$search**: `string`

***

### $where?

> `optional` **$where?**: `string` \| ((`this`) => `boolean`)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4622
