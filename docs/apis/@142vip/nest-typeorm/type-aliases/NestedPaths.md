[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / NestedPaths

# 类型别名: NestedPaths\<Type, Depth\>

> **NestedPaths**\<`Type`, `Depth`\> = `Depth`\[`"length"`\] *extends* `8` ? \[\] : `Type` *extends* `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| `RegExp` \| `Buffer` \| `Uint8Array` \| ((...`args`) => `any`) \| \{ `_bsontype`: `string`; \} ? \[\] : `Type` *extends* `ReadonlyArray`\<infer ArrayType\> ? \[\] \| \[`number`, `...NestedPaths<ArrayType, [...Depth, 1]>`\] : `Type` *extends* `Map`\<`string`, `any`\> ? \[`string`\] : `Type` *extends* `object` ? \{ \[Key in Extract\<keyof Type, string\>\]: Type\[Key\] extends Type ? \[Key\] : Type extends Type\[Key\] ? \[Key\] : (...)\[(...)\] extends ReadonlyArray\<(...)\> ? (...) extends (...) ? (...) : (...) : (...) \| (...) \}\[`Extract`\<keyof `Type`, `string`\>\] : \[\]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4253

returns tuple of strings (keys to be joined on '.') that represent every path into a schema
https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/

## 类型参数

### Type

`Type`

### Depth

`Depth` *extends* `number`[]

## 备注

Through testing we determined that a depth of 8 is safe for the typescript compiler
and provides reasonable compilation times. This number is otherwise not special and
should be changed if issues are found with this level of checking. Beyond this
depth any helpers that make use of NestedPaths should devolve to not asserting any
type safety on the input.
