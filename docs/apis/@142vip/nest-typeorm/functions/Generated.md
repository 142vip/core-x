[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Generated

# 函数: Generated()

> **Generated**(`strategy?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/Generated.d.ts:10

Marks a column to generate a value on entity insertion.
There are three types of generation strategy - increment, uuid and rowid (cockroachdb only).
Increment uses a number which increases by one on each insertion.
Uuid generates a special UUID token.
Rowid supports only in CockroachDB and uses `unique_rowid()` function

Note, some databases do not support non-primary generation columns.

## 参数

### strategy?

`"uuid"` \| `"rowid"` \| `"increment"`

## 返回

`PropertyDecorator`
