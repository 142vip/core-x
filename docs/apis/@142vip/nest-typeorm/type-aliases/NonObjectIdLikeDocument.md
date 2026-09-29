[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / NonObjectIdLikeDocument

# 类型别名: NonObjectIdLikeDocument

> **NonObjectIdLikeDocument** = `{ [key in keyof ObjectIdLike]?: never }` & [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4270

A type that extends Document but forbids anything that "looks like" an object id.
