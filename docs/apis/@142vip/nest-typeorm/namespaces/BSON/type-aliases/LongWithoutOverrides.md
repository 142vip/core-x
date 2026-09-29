[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / LongWithoutOverrides

# 类型别名: LongWithoutOverrides

> **LongWithoutOverrides** = (`low`, `high?`, `unsigned?`) => `{ [P in Exclude<keyof Long, TimestampOverrides>]: Long[P] }`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:779

## 参数

### low

`unknown`

### high?

`number` \| `boolean`

### unsigned?

`boolean`

## 返回

`{ [P in Exclude<keyof Long, TimestampOverrides>]: Long[P] }`
