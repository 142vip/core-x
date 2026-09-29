[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / VersionColumn

# 函数: VersionColumn()

> **VersionColumn**(`options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/columns/VersionColumn.d.ts:7

This column will store a number - version of the entity.
Every time your entity will be persisted, this number will be increased by one -
so you can organize visioning and update strategies of your entity.

## 参数

### options?

[`ColumnOptions`](../interfaces/ColumnOptions.md)

## 返回

`PropertyDecorator`
