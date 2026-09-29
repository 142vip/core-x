[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / CreateDateColumn

# 函数: CreateDateColumn()

> **CreateDateColumn**(`options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/columns/CreateDateColumn.d.ts:7

This column will store a creation date of the inserted object.
Creation date is generated and inserted only once,
at the first time when you create an object, the value is inserted into the table, and is never touched again.

## 参数

### options?

[`ColumnOptions`](../interfaces/ColumnOptions.md)

## 返回

`PropertyDecorator`
