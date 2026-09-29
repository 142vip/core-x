[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / DefaultNamingStrategy

# 类: DefaultNamingStrategy

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:6

Naming strategy that is used by default.

## theme_extended_by

- [`LegacyOracleNamingStrategy`](LegacyOracleNamingStrategy.md)

## 实现

- [`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md)

## 构造函数

### 构造函数

> **new DefaultNamingStrategy**(): `DefaultNamingStrategy`

#### 返回

`DefaultNamingStrategy`

## 属性

### materializedPathColumnName

> **materializedPathColumnName**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:47

Column name for materialized paths.

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`materializedPathColumnName`](../interfaces/NamingStrategyInterface.md#materializedpathcolumnname)

***

### nestedSetColumnNames

> **nestedSetColumnNames**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:43

Column names for nested sets.

#### left

> **left**: `string`

#### right

> **right**: `string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`nestedSetColumnNames`](../interfaces/NamingStrategyInterface.md#nestedsetcolumnnames)

## 方法

### checkConstraintName()

> **checkConstraintName**(`tableOrName`, `expression`, `isEnum?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:29

Gets the name of the check constraint.

"isEnum" parameter is used to indicate if this check constraint used
to handle "simple-enum" type for databases that are not supporting "enum"
type out of the box. If "true", constraint is ignored during CHECK constraints
synchronization.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### expression

`string`

##### isEnum?

`boolean`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`checkConstraintName`](../interfaces/NamingStrategyInterface.md#checkconstraintname)

***

### closureJunctionTableName()

> **closureJunctionTableName**(`originalClosureTableName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:20

Creates a table name for a junction table of a closure table.

#### 参数

##### originalClosureTableName

`string`

Name of the closure table which owns this junction table.

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`closureJunctionTableName`](../interfaces/NamingStrategyInterface.md#closurejunctiontablename)

***

### columnName()

> **columnName**(`propertyName`, `customName`, `embeddedPrefixes`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:21

Gets the table's column name from the given property name.

#### 参数

##### propertyName

`string`

##### customName

`string`

##### embeddedPrefixes

`string`[]

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`columnName`](../interfaces/NamingStrategyInterface.md#columnname)

***

### defaultConstraintName()

> **defaultConstraintName**(`tableOrName`, `columnName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:26

Gets the table's default constraint name from the given table name and column name.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### columnName

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`defaultConstraintName`](../interfaces/NamingStrategyInterface.md#defaultconstraintname)

***

### exclusionConstraintName()

> **exclusionConstraintName**(`tableOrName`, `expression`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:30

Gets the name of the exclusion constraint.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### expression

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`exclusionConstraintName`](../interfaces/NamingStrategyInterface.md#exclusionconstraintname)

***

### foreignKeyName()

> **foreignKeyName**(`tableOrName`, `columnNames`, `_referencedTablePath?`, `_referencedColumnNames?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:27

Gets the name of the foreign key.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### columnNames

`string`[]

##### \_referencedTablePath?

`string`

##### \_referencedColumnNames?

`string`[]

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`foreignKeyName`](../interfaces/NamingStrategyInterface.md#foreignkeyname)

***

### getTableName()

> `protected` **getTableName**(`tableOrName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:7

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

#### 返回

`string`

***

### indexName()

> **indexName**(`tableOrName`, `columnNames`, `where?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:28

Gets the name of the index - simple and compose index.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### columnNames

`string`[]

##### where?

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`indexName`](../interfaces/NamingStrategyInterface.md#indexname)

***

### joinColumnName()

> **joinColumnName**(`relationName`, `referencedColumnName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:31

Gets the name of the join column used in the one-to-one and many-to-one relations.

#### 参数

##### relationName

`string`

##### referencedColumnName

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`joinColumnName`](../interfaces/NamingStrategyInterface.md#joincolumnname)

***

### joinTableColumnDuplicationPrefix()

> **joinTableColumnDuplicationPrefix**(`columnName`, `index`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:33

Columns in join tables can have duplicate names in case of self-referencing.
This method provide a resolution for such column names.

#### 参数

##### columnName

`string`

##### index

`number`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`joinTableColumnDuplicationPrefix`](../interfaces/NamingStrategyInterface.md#jointablecolumnduplicationprefix)

***

### joinTableColumnName()

> **joinTableColumnName**(`tableName`, `propertyName`, `columnName?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:34

Gets the name of the column used for columns in the junction tables.

The reverse?:boolean parameter denotes if the joinTableColumnName is called for the junctionColumn (false)
or the inverseJunctionColumns (true)

#### 参数

##### tableName

`string`

##### propertyName

`string`

##### columnName?

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`joinTableColumnName`](../interfaces/NamingStrategyInterface.md#jointablecolumnname)

***

### joinTableInverseColumnName()

> **joinTableInverseColumnName**(`tableName`, `propertyName`, `columnName?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:35

Gets the name of the column used for columns in the junction tables from the invers side of the relationship.

#### 参数

##### tableName

`string`

##### propertyName

`string`

##### columnName?

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`joinTableInverseColumnName`](../interfaces/NamingStrategyInterface.md#jointableinversecolumnname)

***

### joinTableName()

> **joinTableName**(`firstTableName`, `secondTableName`, `firstPropertyName`, `secondPropertyName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:32

Gets the name of the join table used in the many-to-many relations.

#### 参数

##### firstTableName

`string`

##### secondTableName

`string`

##### firstPropertyName

`string`

##### secondPropertyName

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`joinTableName`](../interfaces/NamingStrategyInterface.md#jointablename)

***

### prefixTableName()

> **prefixTableName**(`prefix`, `tableName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:42

Adds globally set prefix to the table name.
This method is executed no matter if prefix was set or not.
Table name is either user's given table name, either name generated from entity target.
Note that table name comes here already normalized by #tableName method.

#### 参数

##### prefix

`string`

##### tableName

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`prefixTableName`](../interfaces/NamingStrategyInterface.md#prefixtablename)

***

### primaryKeyName()

> **primaryKeyName**(`tableOrName`, `columnNames`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:23

Gets the table's primary key name from the given table name and column names.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### columnNames

`string`[]

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`primaryKeyName`](../interfaces/NamingStrategyInterface.md#primarykeyname)

***

### relationConstraintName()

> **relationConstraintName**(`tableOrName`, `columnNames`, `where?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:25

Gets the relation constraint (UNIQUE or UNIQUE INDEX) name from the given table name, column names
and WHERE condition, if UNIQUE INDEX used.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### columnNames

`string`[]

##### where?

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`relationConstraintName`](../interfaces/NamingStrategyInterface.md#relationconstraintname)

***

### relationName()

> **relationName**(`propertyName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:22

Gets the table's relation name from the given property name.

#### 参数

##### propertyName

`string`

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`relationName`](../interfaces/NamingStrategyInterface.md#relationname)

***

### tableName()

> **tableName**(`targetName`, `userSpecifiedName`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:14

Normalizes table name.

#### 参数

##### targetName

`string`

Name of the target entity that can be used to generate a table name.

##### userSpecifiedName

`string` \| `undefined`

For example if user specified a table name in a decorator, e.g. @Entity("name")

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`tableName`](../interfaces/NamingStrategyInterface.md#tablename)

***

### uniqueConstraintName()

> **uniqueConstraintName**(`tableOrName`, `columnNames`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/naming-strategy/DefaultNamingStrategy.d.ts:24

Gets the table's unique constraint name from the given table name and column names.

#### 参数

##### tableOrName

`string` \| [`Table`](Table.md)

##### columnNames

`string`[]

#### 返回

`string`

#### 实现了

[`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md).[`uniqueConstraintName`](../interfaces/NamingStrategyInterface.md#uniqueconstraintname)
