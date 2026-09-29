[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ColumnOptions

# 接口: ColumnOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:7

Describes all column's options.

## theme_extends

- `ColumnCommonOptions`

## 属性

### array?

> `optional` **array?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:150

Indicates if this column is an array.
Can be simply set to true or array length can be specified.
Supported only by postgres.

#### 重写了

`ColumnCommonOptions.array`

***

### asExpression?

> `optional` **asExpression?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:131

Generated column expression.

***

### charset?

> `optional` **charset?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:107

Defines a column character set.
Not supported by all database types.

***

### collation?

> `optional` **collation?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:111

Defines a column collation.

***

### comment?

> `optional` **comment?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:80

Column comment. Not supported by all database types.

#### 重写了

`ColumnCommonOptions.comment`

***

### default?

> `optional` **default?**: `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:63

Default database value.

#### 重写了

`ColumnCommonOptions.default`

***

### enum?

> `optional` **enum?**: `Object` \| (`string` \| `number`)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:115

Array of possible enumerated values.

***

### enumName?

> `optional` **enumName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:119

Exact name of enum

***

### foreignKeyConstraintName?

> `optional` **foreignKeyConstraintName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:127

If this column is foreign key then this specifies the name for it.

***

### generated?

> `optional` **generated?**: `boolean` \| `"uuid"` \| `"rowid"` \| `"increment"` \| `"identity"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnCommonOptions.d.ts:24

Specifies if this column will use auto increment (sequence, generated identity, rowid).
Note that in some databases only one column in entity can be marked as generated, and it must be a primary column.

#### 继承自

`ColumnCommonOptions.generated`

***

### generatedIdentity?

> `optional` **generatedIdentity?**: `"ALWAYS"` \| `"BY DEFAULT"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:139

Identity column type. Supports only in Postgres 10+.

***

### generatedType?

> `optional` **generatedType?**: `"VIRTUAL"` \| `"STORED"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:135

Generated column type.

***

### hstoreType?

> `optional` **hstoreType?**: `"string"` \| `"object"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:144

Return type of HSTORE column.
Returns value as string or as object.

***

### insert?

> `optional` **insert?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:59

Indicates if column is inserted by default.
Default value is "true".

***

### length?

> `optional` **length?**: `string` \| `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:20

Column type's length. Used only on some column types.
For example type = "string" and length = "100" means that ORM will create a column with type varchar(100).

***

### name?

> `optional` **name?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:15

Column name in the database.

#### 重写了

`ColumnCommonOptions.name`

***

### nullable?

> `optional` **nullable?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:33

Indicates if column's value can be set to NULL.
Default value is "false".

#### 重写了

`ColumnCommonOptions.nullable`

***

### onUpdate?

> `optional` **onUpdate?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:67

ON UPDATE trigger. Works only for MySQL.

#### 重写了

`ColumnCommonOptions.onUpdate`

***

### precision?

> `optional` **precision?**: `number` \| `null`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:85

The precision for a decimal (exact numeric) column (applies only for decimal column), which is the maximum
number of digits that are stored for the values.

***

### primary?

> `optional` **primary?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:72

Indicates if this column is a primary key.
Same can be achieved when

#### Primary Column

decorator is used.

#### 重写了

`ColumnCommonOptions.primary`

***

### primaryKeyConstraintName?

> `optional` **primaryKeyConstraintName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:123

If this column is primary key then this specifies the name for it.

***

### query?

> `optional` **query?**: (`alias`) => `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:169

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

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:43

Indicates if column value is not updated by "save" operation.
It means you'll be able to write this value only when you first time insert the object.
Default value is "false".

#### 已被弃用

Please use the `update` option instead.  Careful, it takes
the opposite value to readonly.

***

### scale?

> `optional` **scale?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:90

The scale for a decimal (exact numeric) column (applies only for decimal column), which represents the number
of digits to the right of the decimal point and must not be greater than precision.

***

### select?

> `optional` **select?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:54

Indicates if column is always selected by QueryBuilder and find operations.
Default value is "true".

#### 重写了

`ColumnCommonOptions.select`

***

### spatialFeatureType?

> `optional` **spatialFeatureType?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:159

Spatial Feature Type (Geometry, Point, Polygon, etc.)

***

### srid?

> `optional` **srid?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:163

SRID (Spatial Reference ID (EPSG code))

***

### transformer?

> `optional` **transformer?**: [`ValueTransformer`](ValueTransformer.md) \| [`ValueTransformer`](ValueTransformer.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:155

Specifies a value transformer that is to be used to (un)marshal
this column when reading or writing to the database.

#### 重写了

`ColumnCommonOptions.transformer`

***

### type?

> `optional` **type?**: [`ColumnType`](../type-aliases/ColumnType.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:11

Column type. Must be one of the value from the ColumnTypes class.

***

### unique?

> `optional` **unique?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:76

Specifies if column's value must be unique or not.

#### 重写了

`ColumnCommonOptions.unique`

***

### unsigned?

> `optional` **unsigned?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:102

Puts UNSIGNED attribute on to numeric column. Works only for MySQL.

***

### update?

> `optional` **update?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:49

Indicates if column value is updated by "save" operation.
If false, you'll be able to write this value only when you first time insert the object.
Default value is "true".

***

### utc?

> `optional` **utc?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:179

Indicates if date values should be stored and retrieved in UTC timezone
instead of local timezone. Only applies to "date" column type.
Default value is "false" (uses local timezone for backward compatibility).

#### 示例

```ts
@Column({ type: "date", utc: true })
birthDate: Date
```

***

### ~~width?~~

> `optional` **width?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:28

Column type's display width. Used only on some column types in MySQL.
For example, INT(4) specifies an INT with a display width of four digits.

#### 已被弃用

No longer supported in newer MySQL versions, will be removed
from TypeORM in an upcoming version. Use a character column and the
`LPAD` function as suggested by MySQL

***

### ~~zerofill?~~

> `optional` **zerofill?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/options/ColumnOptions.d.ts:98

Puts ZEROFILL attribute on to numeric column. Works only for MySQL.
If you specify ZEROFILL for a numeric column, MySQL automatically adds the UNSIGNED attribute to this column

#### 已被弃用

No longer supported in newer MySQL versions, will be removed
from TypeORM in an upcoming version. Use a character column and the
`LPAD` function as suggested by MySQL
