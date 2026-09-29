[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / EntitySchemaColumnOptions

# 接口: EntitySchemaColumnOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:5

## theme_extends

- `SpatialColumnOptions`

## 属性

### array?

> `optional` **array?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:169

Indicates if this column is an array.
Can be simply set to true or array length can be specified.
Supported only by postgres.

***

### asExpression?

> `optional` **asExpression?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:154

Generated column expression.

***

### charset?

> `optional` **charset?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:138

Defines a column character set.
Not supported by all database types.

***

### collation?

> `optional` **collation?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:142

Defines a column collation.

***

### columnDefinition?

> `optional` **columnDefinition?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:102

Extra column definition. Should be used only in emergency situations. Note that if you'll use this property
auto schema generation will not work properly anymore. Avoid using it.

***

### comment?

> `optional` **comment?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:106

Column comment.

***

### createDate?

> `optional` **createDate?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:17

Indicates if this column is a created date column.

***

### default?

> `optional` **default?**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:110

Default database value.

***

### deleteDate?

> `optional` **deleteDate?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:25

Indicates if this column is a delete date column.

***

### enum?

> `optional` **enum?**: `Object` \| `any`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:146

Array of possible enumerated values.

***

### enumName?

> `optional` **enumName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:150

Exact name of enum

***

### foreignKey?

> `optional` **foreignKey?**: `EntitySchemaColumnForeignKeyOptions`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:182

Foreign key options of this column.

***

### generated?

> `optional` **generated?**: `true` \| `"uuid"` \| `"rowid"` \| `"increment"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:93

Specifies if this column will use AUTO_INCREMENT or not (e.g. generated number).

***

### generatedType?

> `optional` **generatedType?**: `"VIRTUAL"` \| `"STORED"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:158

Generated column type.

***

### hstoreType?

> `optional` **hstoreType?**: `"string"` \| `"object"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:163

Return type of HSTORE column.
Returns value as string or as object.

***

### insert?

> `optional` **insert?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:89

Indicates if column is inserted by default.
Default value is "true".

***

### length?

> `optional` **length?**: `string` \| `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:54

Column type's length. For example type = "string" and length = 100 means that ORM will create a column with
type varchar(100).

***

### name?

> `optional` **name?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:49

Column name in the database.

***

### nullable?

> `optional` **nullable?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:63

Indicates if column's value can be set to NULL.

***

### objectId?

> `optional` **objectId?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:13

Indicates if this column is of type ObjectId

***

### onUpdate?

> `optional` **onUpdate?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:114

ON UPDATE trigger. Works only for MySQL.

***

### precision?

> `optional` **precision?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:119

The precision for a decimal (exact numeric) column (applies only for decimal column), which is the maximum
number of digits that are stored for the values.

***

### primary?

> `optional` **primary?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:9

Indicates if this column is a primary column.

***

### primaryKeyConstraintName?

> `optional` **primaryKeyConstraintName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:178

Name of the primary key constraint.

***

### query?

> `optional` **query?**: (`alias`) => `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:188

Query to be used to populate the column data. This query is used when generating the relational db script.
The query function is called with the current entities alias either defined by the Entity Decorator or automatically

#### 参数

##### alias

`string`

#### 返回

`string`

#### See

https://typeorm.io/decorator-reference#virtualcolumn for more details.

***

### ~~readonly?~~

> `optional` **readonly?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:73

Indicates if column value is not updated by "save" operation.
It means you'll be able to write this value only when you first time insert the object.
Default value is "false".

#### 已被弃用

Please use the `update` option instead.  Careful, it takes
the opposite value to readonly.

***

### scale?

> `optional` **scale?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:124

The scale for a decimal (exact numeric) column (applies only for decimal column), which represents the number
of digits to the right of the decimal point and must not be greater than precision.

***

### select?

> `optional` **select?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:84

Indicates if column is always selected by QueryBuilder and find operations.
Default value is "true".

***

### spatialFeatureType?

> `optional` **spatialFeatureType?**: `"Point"` \| `"LineString"` \| `"Polygon"` \| `"MultiPoint"` \| `"MultiLineString"` \| `"MultiPolygon"` \| `"GeometryCollection"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/SpatialColumnOptions.d.ts:10

Column type's feature type.
Geometry, Point, Polygon, etc.

#### 继承自

`SpatialColumnOptions.spatialFeatureType`

***

### srid?

> `optional` **srid?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/SpatialColumnOptions.d.ts:15

Column type's SRID.
Spatial Reference ID or EPSG code.

#### 继承自

`SpatialColumnOptions.srid`

***

### transformer?

> `optional` **transformer?**: [`ValueTransformer`](ValueTransformer.md) \| [`ValueTransformer`](ValueTransformer.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:174

Specifies a value transformer that is to be used to (un)marshal
this column when reading or writing to the database.

***

### treeChildrenCount?

> `optional` **treeChildrenCount?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:33

Indicates if this column is a treeChildrenCount column.

***

### treeLevel?

> `optional` **treeLevel?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:37

Indicates if this column is a treeLevel column.

***

### type

> **type**: [`ColumnType`](../type-aliases/ColumnType.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:45

Column type. Must be one of the value from the ColumnTypes class.

***

### unique?

> `optional` **unique?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:97

Specifies if column's value must be unique or not.

***

### unsigned?

> `optional` **unsigned?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:133

Puts UNSIGNED attribute on to numeric column. Works only for MySQL.

***

### update?

> `optional` **update?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:79

Indicates if column value is updated by "save" operation.
If false you'll be able to write this value only when you first time insert the object.
Default value is "true".

***

### updateDate?

> `optional` **updateDate?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:21

Indicates if this column is an update date column.

***

### version?

> `optional` **version?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:29

Indicates if this column is a version column.

***

### virtualProperty?

> `optional` **virtualProperty?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:41

Indicates if this column is a virtualProperty column.

***

### width?

> `optional` **width?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:59

Column type's display width. Used only on some column types in MySQL.
For example, INT(4) specifies an INT with a display width of four digits.

***

### zerofill?

> `optional` **zerofill?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/entity-schema/EntitySchemaColumnOptions.d.ts:129

Puts ZEROFILL attribute on to numeric column. Works only for MySQL.
If you specify ZEROFILL for a numeric column, MySQL automatically adds the UNSIGNED attribute to the column
