[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Table

# 类: Table

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:13

Table in the database represented in this class.

## 构造函数

### 构造函数

> **new Table**(`options?`): `Table`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:71

#### 参数

##### options?

[`TableOptions`](../interfaces/TableOptions.md)

#### 返回

`Table`

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:14

***

### checks

> **checks**: [`TableCheck`](TableCheck.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:48

Table check constraints.

***

### columns

> **columns**: [`TableColumn`](TableColumn.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:32

Table columns.

***

### comment?

> `optional` **comment?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:70

Table comment. Not supported by all database types.

***

### database?

> `optional` **database?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:18

Database name that this table resides in if it applies.

***

### engine?

> `optional` **engine?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:66

Table engine.

***

### exclusions

> **exclusions**: [`TableExclusion`](TableExclusion.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:52

Table exclusion constraints.

***

### foreignKeys

> **foreignKeys**: [`TableForeignKey`](TableForeignKey.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:40

Table foreign keys.

***

### indices

> **indices**: [`TableIndex`](TableIndex.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:36

Table indices.

***

### justCreated

> **justCreated**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:58

Indicates if table was just created.
This is needed, for example to check if we need to skip primary keys creation
for new tables.

***

### name

> **name**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:28

May contain database name, schema name and table name, unless they're the current database.

E.g. myDB.mySchema.myTable

***

### schema?

> `optional` **schema?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:22

Schema name that this table resides in if it applies.

***

### uniques

> **uniques**: [`TableUnique`](TableUnique.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:44

Table unique constraints.

***

### withoutRowid?

> `optional` **withoutRowid?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:62

Enables Sqlite "WITHOUT ROWID" modifier for the "CREATE TABLE" statement

## 访问器

### primaryColumns

#### Getter 签名

> **get** **primaryColumns**(): [`TableColumn`](TableColumn.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:72

##### 返回

[`TableColumn`](TableColumn.md)[]

## 方法

### addCheckConstraint()

> **addCheckConstraint**(`checkConstraint`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:96

Adds check constraint.

#### 参数

##### checkConstraint

[`TableCheck`](TableCheck.md)

#### 返回

`void`

***

### addColumn()

> **addColumn**(`column`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:80

Add column and creates its constraints.

#### 参数

##### column

[`TableColumn`](TableColumn.md)

#### 返回

`void`

***

### addExclusionConstraint()

> **addExclusionConstraint**(`exclusionConstraint`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:104

Adds exclusion constraint.

#### 参数

##### exclusionConstraint

[`TableExclusion`](TableExclusion.md)

#### 返回

`void`

***

### addForeignKey()

> **addForeignKey**(`foreignKey`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:112

Adds foreign keys.

#### 参数

##### foreignKey

[`TableForeignKey`](TableForeignKey.md)

#### 返回

`void`

***

### addIndex()

> **addIndex**(`index`, `isMysql?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:120

Adds index.

#### 参数

##### index

[`TableIndex`](TableIndex.md)

##### isMysql?

`boolean`

#### 返回

`void`

***

### addUniqueConstraint()

> **addUniqueConstraint**(`uniqueConstraint`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:88

Adds unique constraint.

#### 参数

##### uniqueConstraint

[`TableUnique`](TableUnique.md)

#### 返回

`void`

***

### clone()

> **clone**(): `Table`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:76

Clones this table to a new table with all properties cloned.

#### 返回

`Table`

***

### findColumnByName()

> **findColumnByName**(`name`): [`TableColumn`](TableColumn.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:125

#### 参数

##### name

`string`

#### 返回

[`TableColumn`](TableColumn.md) \| `undefined`

***

### findColumnChecks()

> **findColumnChecks**(`column`): [`TableCheck`](TableCheck.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:141

Returns all column checks.

#### 参数

##### column

[`TableColumn`](TableColumn.md)

#### 返回

[`TableCheck`](TableCheck.md)[]

***

### findColumnForeignKeys()

> **findColumnForeignKeys**(`column`): [`TableForeignKey`](TableForeignKey.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:133

Returns all column foreign keys.

#### 参数

##### column

[`TableColumn`](TableColumn.md)

#### 返回

[`TableForeignKey`](TableForeignKey.md)[]

***

### findColumnIndices()

> **findColumnIndices**(`column`): [`TableIndex`](TableIndex.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:129

Returns all column indices.

#### 参数

##### column

[`TableColumn`](TableColumn.md)

#### 返回

[`TableIndex`](TableIndex.md)[]

***

### findColumnUniques()

> **findColumnUniques**(`column`): [`TableUnique`](TableUnique.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:137

Returns all column uniques.

#### 参数

##### column

[`TableColumn`](TableColumn.md)

#### 返回

[`TableUnique`](TableUnique.md)[]

***

### removeCheckConstraint()

> **removeCheckConstraint**(`removedCheck`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:100

Removes check constraint.

#### 参数

##### removedCheck

[`TableCheck`](TableCheck.md)

#### 返回

`void`

***

### removeColumn()

> **removeColumn**(`column`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:84

Remove column and its constraints.

#### 参数

##### column

[`TableColumn`](TableColumn.md)

#### 返回

`void`

***

### removeExclusionConstraint()

> **removeExclusionConstraint**(`removedExclusion`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:108

Removes exclusion constraint.

#### 参数

##### removedExclusion

[`TableExclusion`](TableExclusion.md)

#### 返回

`void`

***

### removeForeignKey()

> **removeForeignKey**(`removedForeignKey`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:116

Removes foreign key.

#### 参数

##### removedForeignKey

[`TableForeignKey`](TableForeignKey.md)

#### 返回

`void`

***

### removeIndex()

> **removeIndex**(`tableIndex`, `isMysql?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:124

Removes index.

#### 参数

##### tableIndex

[`TableIndex`](TableIndex.md)

##### isMysql?

`boolean`

#### 返回

`void`

***

### removeUniqueConstraint()

> **removeUniqueConstraint**(`removedUnique`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:92

Removes unique constraint.

#### 参数

##### removedUnique

[`TableUnique`](TableUnique.md)

#### 返回

`void`

***

### create()

> `static` **create**(`entityMetadata`, `driver`): `Table`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/schema-builder/table/Table.d.ts:145

Creates table from a given entity metadata.

#### 参数

##### entityMetadata

[`EntityMetadata`](EntityMetadata.md)

##### driver

[`Driver`](../interfaces/Driver.md)

#### 返回

`Table`
