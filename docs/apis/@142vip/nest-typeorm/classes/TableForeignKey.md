[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TableForeignKey

# 类: TableForeignKey

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:7

Foreign key from the database stored in this class.

## 构造函数

### 构造函数

> **new TableForeignKey**(`options`): `TableForeignKey`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:48

#### 参数

##### options

[`TableForeignKeyOptions`](../interfaces/TableForeignKeyOptions.md)

#### 返回

`TableForeignKey`

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:8

***

### columnNames

> **columnNames**: `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:16

Column names which included by this foreign key.

***

### deferrable?

> `optional` **deferrable?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:47

Set this foreign key constraint as "DEFERRABLE" e.g. check constraints at start
or at the end of a transaction

***

### name?

> `optional` **name?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:12

Name of the foreign key constraint.

***

### onDelete?

> `optional` **onDelete?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:37

"ON DELETE" of this foreign key, e.g. what action database should perform when
referenced stuff is being deleted.

***

### onUpdate?

> `optional` **onUpdate?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:42

"ON UPDATE" of this foreign key, e.g. what action database should perform when
referenced stuff is being updated.

***

### referencedColumnNames

> **referencedColumnNames**: `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:32

Column names which included by this foreign key.

***

### referencedDatabase?

> `optional` **referencedDatabase?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:20

Database of Table referenced in the foreign key.

***

### referencedSchema?

> `optional` **referencedSchema?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:24

Database of Table referenced in the foreign key.

***

### referencedTableName

> **referencedTableName**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:28

Table referenced in the foreign key.

## 方法

### clone()

> **clone**(): `TableForeignKey`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:52

Creates a new copy of this foreign key with exactly same properties.

#### 返回

`TableForeignKey`

***

### create()

> `static` **create**(`metadata`, `driver`): `TableForeignKey`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/TableForeignKey.d.ts:56

Creates a new table foreign key from the given foreign key metadata.

#### 参数

##### metadata

`ForeignKeyMetadata`

##### driver

[`Driver`](../interfaces/Driver.md)

#### 返回

`TableForeignKey`
