[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Driver

# 接口: Driver

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:23

Driver organizes TypeORM communication with specific database management system.

## 属性

### cteCapabilities

> **cteCapabilities**: `CteCapabilities`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:104

***

### database?

> `optional` **database?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:37

Database name used to perform all write queries.

todo: probably move into query runner.

***

### dataTypeDefaults

> **dataTypeDefaults**: `DataTypeDefaults`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:74

Default values of length, precision and scale depends on column data type.
Used in the cases when length/precision/scale is not specified by user.

***

### dummyTableName?

> `optional` **dummyTableName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:108

Dummy table name

***

### isReplicated

> **isReplicated**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:45

Indicates if replication is enabled.

***

### mappedDataTypes

> **mappedDataTypes**: `MappedColumnTypes`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:95

Orm has special columns and we need to know what database column types should be for those types.
Column types are driver dependant.

***

### maxAliasLength?

> `optional` **maxAliasLength?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:103

Max length allowed by the DBMS for aliases (execution of queries).

***

### options

> **options**: `BaseDataSourceOptions`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:27

Connection options.

***

### parametersPrefix?

> `optional` **parametersPrefix?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:99

The prefix used for the parameters

***

### schema?

> `optional` **schema?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:41

Schema name used to perform all write queries.

***

### spatialTypes

> **spatialTypes**: [`ColumnType`](../type-aliases/ColumnType.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:78

Gets list of spatial column data types.

***

### supportedDataTypes

> **supportedDataTypes**: [`ColumnType`](../type-aliases/ColumnType.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:57

Gets list of supported column data types by a driver.

***

### supportedOnDeleteTypes?

> `optional` **supportedOnDeleteTypes?**: `OnDeleteType`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:65

Returns list of supported onDelete types by driver

***

### supportedOnUpdateTypes?

> `optional` **supportedOnUpdateTypes?**: `OnUpdateType`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:69

Returns list of supported onUpdate types by driver

***

### supportedUpsertTypes

> **supportedUpsertTypes**: `UpsertType`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:61

Returns type of upsert supported by driver if any

***

### transactionSupport

> **transactionSupport**: `"none"` \| `"simple"` \| `"nested"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:53

Represent transaction support by this driver

***

### treeSupport

> **treeSupport**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:49

Indicates if tree tables are supported by this driver.

***

### version?

> `optional` **version?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:31

Database version/release. Often requires a SQL query to the DB, so it is not always set

***

### withLengthColumnTypes

> **withLengthColumnTypes**: [`ColumnType`](../type-aliases/ColumnType.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:82

Gets list of column data types that support length by a driver.

***

### withPrecisionColumnTypes

> **withPrecisionColumnTypes**: [`ColumnType`](../type-aliases/ColumnType.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:86

Gets list of column data types that support precision by a driver.

***

### withScaleColumnTypes

> **withScaleColumnTypes**: [`ColumnType`](../type-aliases/ColumnType.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:90

Gets list of column data types that support scale by a driver.

## 方法

### afterConnect()

> **afterConnect**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:117

Makes any action after connection (e.g. create extensions in Postgres driver).

#### 返回

`Promise`\<`void`\>

***

### buildTableName()

> **buildTableName**(`tableName`, `schema?`, `database?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:145

Build full table name with database name, schema name and table name.
E.g. myDB.mySchema.myTable

#### 参数

##### tableName

`string`

##### schema?

`string`

##### database?

`string`

#### 返回

`string`

***

### connect()

> **connect**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:113

Performs connection to the database.
Depend on driver type it may create a connection pool.

#### 返回

`Promise`\<`void`\>

***

### createFullType()

> **createFullType**(`column`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:187

Normalizes "default" value of the column.

#### 参数

##### column

[`TableColumn`](../classes/TableColumn.md)

#### 返回

`string`

***

### createGeneratedMap()

> **createGeneratedMap**(`metadata`, `insertResult`, `entityIndex?`, `entityNum?`): [`ObjectLiteral`](ObjectLiteral.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:203

Creates generated map of values generated or returned by database after INSERT query.

#### 参数

##### metadata

[`EntityMetadata`](../classes/EntityMetadata.md)

##### insertResult

`any`

##### entityIndex?

`number`

##### entityNum?

`number`

#### 返回

[`ObjectLiteral`](ObjectLiteral.md) \| `undefined`

***

### createParameter()

> **createParameter**(`parameterName`, `index`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:224

Creates an escaped parameter.

#### 参数

##### parameterName

`string`

##### index

`number`

#### 返回

`string`

***

### createQueryRunner()

> **createQueryRunner**(`mode`): [`QueryRunner`](QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:129

Creates a query runner used for common queries.

#### 参数

##### mode

[`ReplicationMode`](../type-aliases/ReplicationMode.md)

#### 返回

[`QueryRunner`](QueryRunner.md)

***

### createSchemaBuilder()

> **createSchemaBuilder**(): `SchemaBuilder`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:125

Synchronizes database schema (creates tables, indices, etc).

#### 返回

`SchemaBuilder`

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:121

Closes connection with database and releases all resources.

#### 返回

`Promise`\<`void`\>

***

### escape()

> **escape**(`name`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:140

Escapes a table name, column name or an alias.

todo: probably escape should be able to handle dots in the names and automatically escape them

#### 参数

##### name

`string`

#### 返回

`string`

***

### escapeQueryWithParameters()

> **escapeQueryWithParameters**(`sql`, `parameters`, `nativeParameters`): \[`string`, `any`[]\]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:134

Replaces parameters in the given sql with special escaping character
and an array of parameter names to be passed to a query.

#### 参数

##### sql

`string`

##### parameters

[`ObjectLiteral`](ObjectLiteral.md)

##### nativeParameters

[`ObjectLiteral`](ObjectLiteral.md)

#### 返回

\[`string`, `any`[]\]

***

### findChangedColumns()

> **findChangedColumns**(`tableColumns`, `columnMetadatas`): `ColumnMetadata`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:208

Differentiate columns of this table and columns from the given column metadatas columns
and returns only changed.

#### 参数

##### tableColumns

[`TableColumn`](../classes/TableColumn.md)[]

##### columnMetadatas

`ColumnMetadata`[]

#### 返回

`ColumnMetadata`[]

***

### getColumnLength()

> **getColumnLength**(`column`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:183

Calculates column length taking into account the default length values.

#### 参数

##### column

`ColumnMetadata`

#### 返回

`string`

***

### isFullTextColumnTypeSupported()

> **isFullTextColumnTypeSupported**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:220

Returns true if driver supports fulltext indices.

#### 返回

`boolean`

***

### isReturningSqlSupported()

> **isReturningSqlSupported**(`returningType`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:212

Returns true if driver supports RETURNING / OUTPUT statement.

#### 参数

##### returningType

`ReturningType`

#### 返回

`boolean`

***

### isUUIDGenerationSupported()

> **isUUIDGenerationSupported**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:216

Returns true if driver supports uuid values generation on its own.

#### 返回

`boolean`

***

### normalizeDefault()

> **normalizeDefault**(`columnMetadata`): `string` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:175

Normalizes "default" value of the column.

#### 参数

##### columnMetadata

`ColumnMetadata`

#### 返回

`string` \| `undefined`

***

### normalizeIsUnique()

> **normalizeIsUnique**(`column`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:179

Normalizes "isUnique" value of the column.

#### 参数

##### column

`ColumnMetadata`

#### 返回

`boolean`

***

### normalizeType()

> **normalizeType**(`column`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:165

Transforms type of the given column to a database column type.

#### 参数

##### column

###### isArray?

`boolean`

###### length?

`string` \| `number`

###### precision?

`number` \| `null`

###### scale?

`number`

###### type?

`string` \| `BooleanConstructor` \| `DateConstructor` \| `NumberConstructor` \| `StringConstructor`

#### 返回

`string`

***

### obtainMasterConnection()

> **obtainMasterConnection**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:193

Obtains a new database connection to a master server.
Used for replication.
If replication is not setup then returns default connection's database connection.

#### 返回

`Promise`\<`any`\>

***

### obtainSlaveConnection()

> **obtainSlaveConnection**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:199

Obtains a new database connection to a slave server.
Used for replication.
If replication is not setup then returns master (default) connection's database connection.

#### 返回

`Promise`\<`any`\>

***

### parseTableName()

> **parseTableName**(`target`): `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:149

Parse a target table name or other types and return a normalized table definition.

#### 参数

##### target

`string` \| [`EntityMetadata`](../classes/EntityMetadata.md) \| [`TableForeignKey`](../classes/TableForeignKey.md) \| [`Table`](../classes/Table.md) \| [`View`](../classes/View.md)

#### 返回

`object`

##### database?

> `optional` **database?**: `string`

##### schema?

> `optional` **schema?**: `string`

##### tableName

> **tableName**: `string`

***

### prepareHydratedValue()

> **prepareHydratedValue**(`value`, `column`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:161

Prepares given value to a value to be persisted, based on its column type.

#### 参数

##### value

`any`

##### column

`ColumnMetadata`

#### 返回

`any`

***

### preparePersistentValue()

> **preparePersistentValue**(`value`, `column`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/Driver.d.ts:157

Prepares given value to a value to be persisted, based on its column type and metadata.

#### 参数

##### value

`any`

##### column

`ColumnMetadata`

#### 返回

`any`
