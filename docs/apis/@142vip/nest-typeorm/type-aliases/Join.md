[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Join

# 类型别名: Join\<T, D\>

> **Join**\<`T`, `D`\> = `T` *extends* \[\] ? `""` : `T` *extends* \[`string` \| `number`\] ? `` `${T[0]}` `` : `T` *extends* \[`string` \| `number`, `...(infer R)`\] ? `` `${T[0]}${D}${Join<R, D>}` `` : `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3325

## 类型参数

### T

`T` *extends* `unknown`[]

### D

`D` *extends* `string`
