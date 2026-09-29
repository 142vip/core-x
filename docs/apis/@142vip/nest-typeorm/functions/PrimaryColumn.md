[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / PrimaryColumn

# 函数: PrimaryColumn()

## 调用签名

> **PrimaryColumn**(`options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/columns/PrimaryColumn.d.ts:15

Column decorator is used to mark a specific class property as a table column.
Only properties decorated with this decorator will be persisted to the database when entity be saved.
Primary columns also creates a PRIMARY KEY for this column in a db.

### 参数

#### options?

[`PrimaryColumnOptions`](../type-aliases/PrimaryColumnOptions.md)

### 返回

`PropertyDecorator`

## 调用签名

> **PrimaryColumn**(`type?`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/columns/PrimaryColumn.d.ts:21

Column decorator is used to mark a specific class property as a table column.
Only properties decorated with this decorator will be persisted to the database when entity be saved.
Primary columns also creates a PRIMARY KEY for this column in a db.

### 参数

#### type?

[`ColumnType`](../type-aliases/ColumnType.md)

#### options?

[`PrimaryColumnOptions`](../type-aliases/PrimaryColumnOptions.md)

### 返回

`PropertyDecorator`
