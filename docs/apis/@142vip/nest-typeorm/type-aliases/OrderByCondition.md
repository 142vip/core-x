[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / OrderByCondition

# ~~类型别名: OrderByCondition~~

> **OrderByCondition** = `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/OrderByCondition.d.ts:12

Special object that defines order condition for ORDER BY in sql.

Example:
\{
 "name": "ASC",
 "id": "DESC"
\}

## 索引签名

\[`columnName`: `string`\]: `"ASC"` \| `"DESC"` \| \{ `nulls?`: `"NULLS FIRST"` \| `"NULLS LAST"`; `order`: `"ASC"` \| `"DESC"`; \}

## 已被弃用
