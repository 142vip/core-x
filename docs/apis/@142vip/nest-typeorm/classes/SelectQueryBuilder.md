[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / SelectQueryBuilder

# 类: SelectQueryBuilder\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:22

Allows to build complex sql queries in a fashion way and execute those queries.

## theme_extends

- [`QueryBuilder`](QueryBuilder.md)\<`Entity`\>

## 类型参数

### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

## 实现

- [`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md)

## 构造函数

### 构造函数

> **new SelectQueryBuilder**\<`Entity`\>(`queryBuilder`): `SelectQueryBuilder`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:54

QueryBuilder can be initialized from given Connection and QueryRunner objects or from given other QueryBuilder.

#### 参数

##### queryBuilder

[`QueryBuilder`](QueryBuilder.md)\<`any`\>

#### 返回

`SelectQueryBuilder`\<`Entity`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`constructor`](QueryBuilder.md#constructor)

### 构造函数

> **new SelectQueryBuilder**\<`Entity`\>(`connection`, `queryRunner?`): `SelectQueryBuilder`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:58

QueryBuilder can be initialized from given Connection and QueryRunner objects or from given other QueryBuilder.

#### 参数

##### connection

[`DataSource`](DataSource.md)

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`SelectQueryBuilder`\<`Entity`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`constructor`](QueryBuilder.md#constructor)

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:23

#### 重写了

[`QueryBuilder`](QueryBuilder.md).[`@instanceof`](QueryBuilder.md#instanceof)

***

### conditions

> `protected` **conditions**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:34

***

### connection

> `readonly` **connection**: [`DataSource`](DataSource.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:30

Connection on which QueryBuilder was created.

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`connection`](QueryBuilder.md#connection)

***

### expressionMap

> `readonly` **expressionMap**: `QueryExpressionMap`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:34

Contains all properties of the QueryBuilder that needs to be build a final query.

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`expressionMap`](QueryBuilder.md#expressionmap)

***

### findOptions

> `protected` **findOptions**: [`FindManyOptions`](../interfaces/FindManyOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:24

***

### joins

> `protected` **joins**: `object`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:26

#### alias

> **alias**: `string`

#### parentAlias

> **parentAlias**: `string`

#### relationMetadata

> **relationMetadata**: `RelationMetadata`

#### select

> **select**: `boolean`

#### selection

> **selection**: [`FindOptionsSelect`](../type-aliases/FindOptionsSelect.md)\<`any`\> \| `undefined`

#### type

> **type**: `"inner"` \| `"left"`

***

### orderBys

> `protected` **orderBys**: `object`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:35

#### alias

> **alias**: `string`

#### direction

> **direction**: `"ASC"` \| `"DESC"`

#### nulls?

> `optional` **nulls?**: `"NULLS FIRST"` \| `"NULLS LAST"`

***

### parentQueryBuilder

> `protected` **parentQueryBuilder**: [`QueryBuilder`](QueryBuilder.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:42

If QueryBuilder was created in a subquery mode then its parent QueryBuilder (who created subquery) will be stored here.

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`parentQueryBuilder`](QueryBuilder.md#parentquerybuilder)

***

### queryRunner?

> `protected` `optional` **queryRunner?**: [`QueryRunner`](../interfaces/QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:38

Query runner used to execute query builder query.

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`queryRunner`](QueryBuilder.md#queryrunner)

***

### relationMetadatas

> `protected` **relationMetadatas**: `RelationMetadata`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:40

***

### selects

> `protected` **selects**: `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:25

## 访问器

### alias

#### Getter 签名

> **get** **alias**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:67

Gets the main alias string used in this query builder.

##### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`alias`](QueryBuilder.md#alias)

## 方法

### addCommonTableExpression()

> **addCommonTableExpression**(`queryBuilder`, `alias`, `options?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:215

Adds CTE to query

#### 参数

##### queryBuilder

`string` \| [`QueryBuilder`](QueryBuilder.md)\<`any`\>

##### alias

`string`

##### options?

`QueryBuilderCteOptions`

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`addCommonTableExpression`](QueryBuilder.md#addcommontableexpression)

***

### addFrom()

#### 调用签名

> **addFrom**\<`T`\>(`entityTarget`, `aliasName`): `SelectQueryBuilder`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:112

Specifies FROM which entity's table select/update/delete will be executed.
Also sets a main string alias of the selection data.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entityTarget

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### aliasName

`string`

##### 返回

`SelectQueryBuilder`\<`T`\>

#### 调用签名

> **addFrom**\<`T`\>(`entityTarget`, `aliasName`): `SelectQueryBuilder`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:117

Specifies FROM which entity's table select/update/delete will be executed.
Also sets a main string alias of the selection data.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entityTarget

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`T`\>

###### aliasName

`string`

##### 返回

`SelectQueryBuilder`\<`T`\>

***

### addGroupBy()

> **addGroupBy**(`groupBy`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:476

Adds GROUP BY condition in the query builder.

#### 参数

##### groupBy

`string`

#### 返回

`this`

***

### addOrderBy()

> **addOrderBy**(`sort`, `order?`, `nulls?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:504

Adds ORDER BY condition in the query builder.

#### 参数

##### sort

`string`

##### order?

`"ASC"` \| `"DESC"`

##### nulls?

`"NULLS FIRST"` \| `"NULLS LAST"`

#### 返回

`this`

***

### addSelect()

#### 调用签名

> **addSelect**(`selection`, `selectionAliasName?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:73

Adds new selection to the SELECT query.

##### 参数

###### selection

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### selectionAliasName?

`string`

##### 返回

`this`

#### 调用签名

> **addSelect**(`selection`, `selectionAliasName?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:77

Adds new selection to the SELECT query.

##### 参数

###### selection

`string`

###### selectionAliasName?

`string`

##### 返回

`this`

#### 调用签名

> **addSelect**(`selection`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:81

Adds new selection to the SELECT query.

##### 参数

###### selection

`string`[]

##### 返回

`this`

***

### andHaving()

> **andHaving**(`having`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:455

Adds new AND HAVING condition in the query builder.
Additionally you can add parameters used in where expression.

#### 参数

##### having

`string`

##### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

***

### andWhere()

> **andWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:399

Adds new AND WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

#### 参数

##### where

`string` \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[] \| [`Brackets`](Brackets.md) \| ((`qb`) => `string`)

##### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`andWhere`](../interfaces/WhereExpressionBuilder.md#andwhere)

***

### andWhereExists()

> **andWhereExists**(`subQuery`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:412

Adds a new AND where EXISTS clause

#### 参数

##### subQuery

`SelectQueryBuilder`\<`any`\>

#### 返回

`this`

***

### andWhereInIds()

> **andWhereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:434

Adds new AND WHERE with conditions for the given ids.

Ids are mixed.
It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
If you have multiple primary keys you need to pass object with property names and values specified,
for example [\{ firstId: 1, secondId: 2 \}, \{ firstId: 2, secondId: 3 \}, ...]

#### 参数

##### ids

`any`

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`andWhereInIds`](../interfaces/WhereExpressionBuilder.md#andwhereinids)

***

### applyFindOptions()

> `protected` **applyFindOptions**(): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:660

#### 返回

`void`

***

### buildEagerRelations()

> `protected` **buildEagerRelations**(`relations`, `selection`, `metadata`, `alias`, `embedPrefix?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:684

#### 参数

##### relations

[`FindOptionsRelations`](../type-aliases/FindOptionsRelations.md)\<`any`\>

##### selection

[`FindOptionsSelect`](../type-aliases/FindOptionsSelect.md)\<`any`\> \| `undefined`

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### alias

`string`

##### embedPrefix?

`string`

#### 返回

`void`

***

### buildEscapedEntityColumnSelects()

> `protected` **buildEscapedEntityColumnSelects**(`aliasName`, `metadata`): `SelectQuery`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:655

#### 参数

##### aliasName

`string`

##### metadata

[`EntityMetadata`](EntityMetadata.md)

#### 返回

`SelectQuery`[]

***

### buildOrder()

> `protected` **buildOrder**(`order`, `metadata`, `alias`, `embedPrefix?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:685

#### 参数

##### order

[`FindOptionsOrder`](../type-aliases/FindOptionsOrder.md)\<`any`\>

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### alias

`string`

##### embedPrefix?

`string`

#### 返回

`void`

***

### buildRelations()

> `protected` **buildRelations**(`relations`, `selection`, `metadata`, `alias`, `embedPrefix?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:683

#### 参数

##### relations

[`FindOptionsRelations`](../type-aliases/FindOptionsRelations.md)\<`any`\>

##### selection

[`FindOptionsSelect`](../type-aliases/FindOptionsSelect.md)\<`any`\> \| `undefined`

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### alias

`string`

##### embedPrefix?

`string`

#### 返回

`void`

***

### buildSelect()

> `protected` **buildSelect**(`select`, `metadata`, `alias`, `embedPrefix?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:682

#### 参数

##### select

[`FindOptionsSelect`](../type-aliases/FindOptionsSelect.md)\<`any`\>

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### alias

`string`

##### embedPrefix?

`string`

#### 返回

`void`

***

### buildWhere()

> `protected` **buildWhere**(`where`, `metadata`, `alias`, `embedPrefix?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:686

#### 参数

##### where

[`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`any`\> \| [`FindOptionsWhere`](../type-aliases/FindOptionsWhere.md)\<`any`\>[]

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### alias

`string`

##### embedPrefix?

`string`

#### 返回

`string`

***

### cache()

#### 调用签名

> **cache**(`enabled`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:599

Enables or disables query result caching.

##### 参数

###### enabled

`boolean`

##### 返回

`this`

#### 调用签名

> **cache**(`milliseconds`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:604

Enables query result caching and sets in milliseconds in which cache will expire.
If not set then global caching time will be used.

##### 参数

###### milliseconds

`number`

##### 返回

`this`

#### 调用签名

> **cache**(`id`, `milliseconds?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:608

Enables query result caching and sets cache id and milliseconds in which cache will expire.

##### 参数

###### id

`any`

###### milliseconds?

`number`

##### 返回

`this`

***

### callListeners()

> **callListeners**(`enabled`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:207

Indicates if listeners and subscribers must be called before and after query execution.
Enabled by default.

#### 参数

##### enabled

`boolean`

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`callListeners`](QueryBuilder.md#calllisteners)

***

### clone()

> **clone**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:184

Clones query builder as it is.
Note: it uses new query runner, if you want query builder that uses exactly same query runner,
you can create query builder using its constructor, for example new SelectQueryBuilder(queryBuilder)
where queryBuilder is cloned QueryBuilder.

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`clone`](QueryBuilder.md#clone)

***

### comment()

> **comment**(`comment`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:190

Includes a Query comment in the query builder.  This is helpful for debugging purposes,
such as finding a specific query in the database server's logs, or for categorization using
an APM product.

#### 参数

##### comment

`string`

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`comment`](QueryBuilder.md#comment)

***

### concatRelationMetadata()

> **concatRelationMetadata**(`relationMetadata`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:661

#### 参数

##### relationMetadata

`RelationMetadata`

#### 返回

`void`

***

### createComment()

> `protected` **createComment**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:239

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createComment`](QueryBuilder.md#createcomment)

***

### createCteExpression()

> `protected` **createCteExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:262

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createCteExpression`](QueryBuilder.md#createcteexpression)

***

### createFromAlias()

> `protected` **createFromAlias**(`entityTarget`, `aliasName?`): `Alias`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:229

Specifies FROM which entity's table select/update/delete will be executed.
Also sets a main string alias of the selection data.

#### 参数

##### entityTarget

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\> \| ((`qb`) => `SelectQueryBuilder`\<`any`\>)

##### aliasName?

`string`

#### 返回

`Alias`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createFromAlias`](QueryBuilder.md#createfromalias)

***

### createGroupByExpression()

> `protected` **createGroupByExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:629

Creates "GROUP BY" part of SQL query.

#### 返回

`string`

***

### createHavingExpression()

> `protected` **createHavingExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:654

Creates "HAVING" part of SQL query.

#### 返回

`string`

***

### createJoinExpression()

> `protected` **createJoinExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:625

Creates "JOIN" part of SQL query.

#### 返回

`string`

***

### createLimitOffsetExpression()

> `protected` **createLimitOffsetExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:637

Creates "LIMIT" and "OFFSET" parts of SQL query.

#### 返回

`string`

***

### createLockExpression()

> `protected` **createLockExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:650

#### 返回

`string`

"LOCK" part of SQL query

***

### createOrderByCombinedWithSelectExpression()

> `protected` **createOrderByCombinedWithSelectExpression**(`parentAlias`): \[`string`, [`OrderByCondition`](../type-aliases/OrderByCondition.md)\]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:669

#### 参数

##### parentAlias

`string`

#### 返回

\[`string`, [`OrderByCondition`](../type-aliases/OrderByCondition.md)\]

***

### createOrderByExpression()

> `protected` **createOrderByExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:633

Creates "ORDER BY" part of SQL query.

#### 返回

`string`

***

### createParameter()

> `protected` **createParameter**(`value`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:145

#### 参数

##### value

`any`

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createParameter`](QueryBuilder.md#createparameter)

***

### createPropertyPath()

> `protected` **createPropertyPath**(`metadata`, `entity`, `prefix?`): `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:272

Creates a property paths for a given ObjectLiteral.

#### 参数

##### metadata

[`EntityMetadata`](EntityMetadata.md)

##### entity

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### prefix?

`string`

#### 返回

`string`[]

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createPropertyPath`](QueryBuilder.md#createpropertypath)

***

### createQueryBuilder()

> **createQueryBuilder**(`queryRunner?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:177

Creates a completely new query builder.
Uses same query runner as current QueryBuilder.

#### 参数

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createQueryBuilder`](QueryBuilder.md#createquerybuilder)

***

### createReturningExpression()

> `protected` **createReturningExpression**(`returningType`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:251

Creates "RETURNING" / "OUTPUT" expression.

#### 参数

##### returningType

`ReturningType`

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createReturningExpression`](QueryBuilder.md#createreturningexpression)

***

### createSelectDistinctExpression()

> `protected` **createSelectDistinctExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:621

Creates select | select distinct part of SQL query.

#### 返回

`string`

***

### createSelectExpression()

> `protected` **createSelectExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:617

Creates "SELECT FROM" part of SQL query.

#### 返回

`string`

***

### createTimeTravelQuery()

> `protected` **createTimeTravelQuery**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:243

Time travel queries for CockroachDB

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createTimeTravelQuery`](QueryBuilder.md#createtimetravelquery)

***

### createWhereClausesExpression()

> `protected` **createWhereClausesExpression**(`clauses`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:257

#### 参数

##### clauses

`WhereClause`[]

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createWhereClausesExpression`](QueryBuilder.md#createwhereclausesexpression)

***

### createWhereConditionExpression()

> `protected` **createWhereConditionExpression**(`condition`, `alwaysWrap?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:261

Computes given where argument - transforms to a where string all forms it can take.

#### 参数

##### condition

`WhereClauseCondition`

##### alwaysWrap?

`boolean`

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createWhereConditionExpression`](QueryBuilder.md#createwhereconditionexpression)

***

### createWhereExpression()

> `protected` **createWhereExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:247

Creates "WHERE" expression.

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createWhereExpression`](QueryBuilder.md#createwhereexpression)

***

### delete()

> **delete**(): [`DeleteQueryBuilder`](DeleteQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:106

Creates DELETE query.

#### 返回

[`DeleteQueryBuilder`](DeleteQueryBuilder.md)\<`Entity`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`delete`](QueryBuilder.md#delete)

***

### disableEscaping()

> **disableEscaping**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:194

Disables escaping.

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`disableEscaping`](QueryBuilder.md#disableescaping)

***

### distinct()

> **distinct**(`distinct?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:90

Sets whether the selection is DISTINCT.

#### 参数

##### distinct?

`boolean`

#### 返回

`this`

***

### distinctOn()

> **distinctOn**(`distinctOn`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:94

Sets the distinct on clause for Postgres.

#### 参数

##### distinctOn

`string`[]

#### 返回

`this`

***

### escape()

> **escape**(`name`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:198

Escapes table name, column name or alias name using current database's escaping character.

#### 参数

##### name

`string`

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`escape`](QueryBuilder.md#escape)

***

### execute()

> **execute**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:172

Executes sql generated by query builder and returns raw database results.

#### 返回

`Promise`\<`any`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`execute`](QueryBuilder.md#execute)

***

### executeCountQuery()

> `protected` **executeCountQuery**(`queryRunner`): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:658

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`Promise`\<`number`\>

***

### executeEntitiesAndRawResults()

> `protected` **executeEntitiesAndRawResults**(`queryRunner`): `Promise`\<\{ `entities`: `Entity`[]; `raw`: `any`[]; \}\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:665

Executes sql generated by query builder and returns object with raw results and entities created from them.

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`Promise`\<\{ `entities`: `Entity`[]; `raw`: `any`[]; \}\>

***

### executeExistsQuery()

> `protected` **executeExistsQuery**(`queryRunner`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:659

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`Promise`\<`boolean`\>

***

### findEntityColumnSelects()

> `protected` **findEntityColumnSelects**(`aliasName`, `metadata`): `SelectQuery`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:656

#### 参数

##### aliasName

`string`

##### metadata

[`EntityMetadata`](EntityMetadata.md)

#### 返回

`SelectQuery`[]

***

### from()

#### 调用签名

> **from**\<`T`\>(`entityTarget`, `aliasName`): `SelectQueryBuilder`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:101

Specifies FROM which entity's table select/update/delete will be executed.
Also sets a main string alias of the selection data.
Removes all previously set from-s.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entityTarget

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### aliasName

`string`

##### 返回

`SelectQueryBuilder`\<`T`\>

#### 调用签名

> **from**\<`T`\>(`entityTarget`, `aliasName`): `SelectQueryBuilder`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:107

Specifies FROM which entity's table select/update/delete will be executed.
Also sets a main string alias of the selection data.
Removes all previously set from-s.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entityTarget

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`T`\>

###### aliasName

`string`

##### 返回

`SelectQueryBuilder`\<`T`\>

***

### fromDummy()

> **fromDummy**(): `SelectQueryBuilder`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:95

#### 返回

`SelectQueryBuilder`\<`any`\>

***

### getCount()

> **getCount**(): `Promise`\<`number`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:580

Gets count - number of entities selected by sql generated by this query builder.
Count excludes all limitations set by offset, limit, skip, and take.

#### 返回

`Promise`\<`number`\>

***

### getExists()

> **getExists**(): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:585

Gets exists
Returns whether any rows exists matching current query.

#### 返回

`Promise`\<`boolean`\>

***

### getExistsCondition()

> `protected` **getExistsCondition**(`subQuery`): \[`string`, `any`[]\]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:267

#### 参数

##### subQuery

`any`

#### 返回

\[`string`, `any`[]\]

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getExistsCondition`](QueryBuilder.md#getexistscondition)

***

### getMainTableName()

> `protected` **getMainTableName**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:224

Gets name of the table where insert should be performed.

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getMainTableName`](QueryBuilder.md#getmaintablename)

***

### getMany()

> **getMany**(): `Promise`\<`Entity`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:575

Gets entities returned by execution of generated query builder sql.

#### 返回

`Promise`\<`Entity`[]\>

***

### getManyAndCount()

> **getManyAndCount**(): `Promise`\<\[`Entity`[], `number`\]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:590

Executes built SQL query and returns entities and overall entities count (without limitation).
This method is useful to build pagination.

#### 返回

`Promise`\<\[`Entity`[], `number`\]\>

***

### getOne()

> **getOne**(): `Promise`\<`Entity` \| `null`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:567

Gets single entity returned by execution of generated query builder sql.

#### 返回

`Promise`\<`Entity` \| `null`\>

***

### getOneOrFail()

> **getOneOrFail**(): `Promise`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:571

Gets the first entity returned by execution of generated query builder sql or rejects the returned promise on error.

#### 返回

`Promise`\<`Entity`\>

***

### getParameters()

> **getParameters**(): [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:155

Gets all parameters.

#### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getParameters`](QueryBuilder.md#getparameters)

***

### getPredicates()

> `protected` **getPredicates**(`where`): `Generator`\<`any`[], `void`, `unknown`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:273

#### 参数

##### where

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`Generator`\<`any`[], `void`, `unknown`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getPredicates`](QueryBuilder.md#getpredicates)

***

### getQuery()

> **getQuery**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:44

Gets generated SQL query without parameters being replaced.

#### 返回

`string`

#### 重写了

[`QueryBuilder`](QueryBuilder.md).[`getQuery`](QueryBuilder.md#getquery)

***

### getQueryAndParameters()

> **getQueryAndParameters**(): \[`string`, `any`[]\]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:168

Gets query to be executed with all parameters used in it.

#### 返回

\[`string`, `any`[]\]

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getQueryAndParameters`](QueryBuilder.md#getqueryandparameters)

***

### getRawAndEntities()

> **getRawAndEntities**\<`T`\>(): `Promise`\<\{ `entities`: `Entity`[]; `raw`: `T`[]; \}\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:560

Executes sql generated by query builder and returns object with raw results and entities created from them.

#### 类型参数

##### T

`T` = `any`

#### 返回

`Promise`\<\{ `entities`: `Entity`[]; `raw`: `T`[]; \}\>

***

### getRawMany()

> **getRawMany**\<`T`\>(): `Promise`\<`T`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:556

Gets all raw results returned by execution of generated query builder sql.

#### 类型参数

##### T

`T` = `any`

#### 返回

`Promise`\<`T`[]\>

***

### getRawOne()

> **getRawOne**\<`T`\>(): `Promise`\<`T` \| `undefined`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:552

Gets first raw result returned by execution of generated query builder sql.

#### 类型参数

##### T

`T` = `any`

#### 返回

`Promise`\<`T` \| `undefined`\>

***

### getReturningColumns()

> `protected` **getReturningColumns**(): `ColumnMetadata`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:256

If returning / output cause is set to array of column names,
then this method will return all column metadatas of those column names.

#### 返回

`ColumnMetadata`[]

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getReturningColumns`](QueryBuilder.md#getreturningcolumns)

***

### getSql()

> **getSql**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:164

Gets generated sql that will be executed.
Parameters in the query are escaped for the currently used driver.

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getSql`](QueryBuilder.md#getsql)

***

### getTableName()

> `protected` **getTableName**(`tablePath`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:220

Gets escaped table name with schema name if SqlServer driver used with custom
schema name, otherwise returns escaped table name.

#### 参数

##### tablePath

`string`

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getTableName`](QueryBuilder.md#gettablename)

***

### getWhereCondition()

> `protected` **getWhereCondition**(`where`): `WhereClauseCondition`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:275

#### 参数

##### where

`string` \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[] \| [`Brackets`](Brackets.md) \| [`NotBrackets`](NotBrackets.md) \| ((`qb`) => `string`)

#### 返回

`WhereClauseCondition`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getWhereCondition`](QueryBuilder.md#getwherecondition)

***

### getWhereInIdsCondition()

> `protected` **getWhereInIdsCondition**(`ids`): [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| [`Brackets`](Brackets.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:266

Creates "WHERE" condition for an in-ids condition.

#### 参数

##### ids

`any`

#### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| [`Brackets`](Brackets.md)

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getWhereInIdsCondition`](QueryBuilder.md#getwhereinidscondition)

***

### getWherePredicateCondition()

> `protected` **getWherePredicateCondition**(`aliasPath`, `parameterValue`): `WhereClauseCondition`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:274

#### 参数

##### aliasPath

`string`

##### parameterValue

`any`

#### 返回

`WhereClauseCondition`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`getWherePredicateCondition`](QueryBuilder.md#getwherepredicatecondition)

***

### groupBy()

#### 调用签名

> **groupBy**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:466

Sets GROUP BY condition in the query builder.
If you had previously GROUP BY expression defined,
calling this function will override previously set GROUP BY conditions.

##### 返回

`this`

#### 调用签名

> **groupBy**(`groupBy`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:472

Sets GROUP BY condition in the query builder.
If you had previously GROUP BY expression defined,
calling this function will override previously set GROUP BY conditions.

##### 参数

###### groupBy

`string`

##### 返回

`this`

***

### hasCommonTableExpressions()

> `protected` **hasCommonTableExpressions**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:280

#### 返回

`boolean`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`hasCommonTableExpressions`](QueryBuilder.md#hascommontableexpressions)

***

### hasParameter()

> **hasParameter**(`key`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:134

Check the existence of a parameter for this query builder.

#### 参数

##### key

`string`

#### 返回

`boolean`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`hasParameter`](QueryBuilder.md#hasparameter)

***

### hasRelation()

#### 调用签名

> **hasRelation**\<`T`\>(`target`, `relation`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:123

Checks if given relation exists in the entity.
Returns true if relation exists, false otherwise.

todo: move this method to manager? or create a shortcut?

##### 类型参数

###### T

`T`

##### 参数

###### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`T`\>

###### relation

`string`

##### 返回

`boolean`

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`hasRelation`](QueryBuilder.md#hasrelation)

#### 调用签名

> **hasRelation**\<`T`\>(`target`, `relation`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:130

Checks if given relations exist in the entity.
Returns true if relation exists, false otherwise.

todo: move this method to manager? or create a shortcut?

##### 类型参数

###### T

`T`

##### 参数

###### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`T`\>

###### relation

`string`[]

##### 返回

`boolean`

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`hasRelation`](QueryBuilder.md#hasrelation)

***

### having()

> **having**(`having`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:450

Sets HAVING condition in the query builder.
If you had previously HAVING expression defined,
calling this function will override previously set HAVING conditions.
Additionally you can add parameters used in where expression.

#### 参数

##### having

`string`

##### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

***

### innerJoin()

#### 调用签名

> **innerJoin**(`subQueryFactory`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:123

INNER JOINs (without selection) given subquery.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoin**(`property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:130

INNER JOINs (without selection) entity's property.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoin**(`entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:136

INNER JOINs (without selection) given entity's table.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoin**(`tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:142

INNER JOINs (without selection) given table.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### innerJoinAndMapMany()

#### 调用签名

> **innerJoinAndMapMany**(`mapToProperty`, `subQueryFactory`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:226

INNER JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndMapMany**(`mapToProperty`, `property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:235

INNER JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndMapMany**(`mapToProperty`, `entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:243

INNER JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndMapMany**(`mapToProperty`, `tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:251

INNER JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### innerJoinAndMapOne()

#### 调用签名

> **innerJoinAndMapOne**(`mapToProperty`, `subQueryFactory`, `alias`, `condition?`, `parameters?`, `mapAsEntity?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:260

INNER JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

###### mapAsEntity?

`string` \| `Function`

##### 返回

`this`

#### 调用签名

> **innerJoinAndMapOne**(`mapToProperty`, `property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:269

INNER JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndMapOne**(`mapToProperty`, `entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:277

INNER JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndMapOne**(`mapToProperty`, `tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:285

INNER JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### innerJoinAndSelect()

#### 调用签名

> **innerJoinAndSelect**(`subQueryFactory`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:173

INNER JOINs given subquery and adds all selection properties to SELECT..
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndSelect**(`property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:180

INNER JOINs entity's property and adds all selection properties to SELECT.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndSelect**(`entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:186

INNER JOINs entity and adds all selection properties to SELECT.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **innerJoinAndSelect**(`tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:192

INNER JOINs table and adds all selection properties to SELECT.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### insert()

> **insert**(): [`InsertQueryBuilder`](InsertQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:86

Creates INSERT query.

#### 返回

[`InsertQueryBuilder`](InsertQueryBuilder.md)\<`Entity`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`insert`](QueryBuilder.md#insert)

***

### join()

> `protected` **join**(`direction`, `entityOrProperty`, `aliasName`, `condition?`, `parameters?`, `mapToProperty?`, `isMappingMany?`, `mapAsEntity?`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:613

#### 参数

##### direction

`"INNER"` \| `"LEFT"`

##### entityOrProperty

`string` \| `Function` \| ((`qb`) => `SelectQueryBuilder`\<`any`\>)

##### aliasName

`string`

##### condition?

`string`

##### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### mapToProperty?

`string`

##### isMappingMany?

`boolean`

##### mapAsEntity?

`string` \| `Function`

#### 返回

`void`

***

### leftJoin()

#### 调用签名

> **leftJoin**(`subQueryFactory`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:148

LEFT JOINs (without selection) given subquery.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoin**(`property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:155

LEFT JOINs (without selection) entity's property.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoin**(`entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:161

LEFT JOINs (without selection) entity's table.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoin**(`tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:167

LEFT JOINs (without selection) given table.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### leftJoinAndMapMany()

#### 调用签名

> **leftJoinAndMapMany**(`mapToProperty`, `subQueryFactory`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:294

LEFT JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndMapMany**(`mapToProperty`, `property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:303

LEFT JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndMapMany**(`mapToProperty`, `entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:311

LEFT JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndMapMany**(`mapToProperty`, `tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:319

LEFT JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there are multiple rows of selecting data, and mapped result will be an array.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### leftJoinAndMapOne()

#### 调用签名

> **leftJoinAndMapOne**(`mapToProperty`, `subQueryFactory`, `alias`, `condition?`, `parameters?`, `mapAsEntity?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:328

LEFT JOINs given subquery, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

###### mapAsEntity?

`string` \| `Function`

##### 返回

`this`

#### 调用签名

> **leftJoinAndMapOne**(`mapToProperty`, `property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:337

LEFT JOINs entity's property, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndMapOne**(`mapToProperty`, `entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:345

LEFT JOINs entity's table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndMapOne**(`mapToProperty`, `tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:353

LEFT JOINs table, SELECTs the data returned by a join and MAPs all that data to some entity's property.
This is extremely useful when you want to select some data and map it to some virtual property.
It will assume that there is a single row of selecting data, and mapped result will be a single selected value.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### leftJoinAndSelect()

#### 调用签名

> **leftJoinAndSelect**(`subQueryFactory`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:198

LEFT JOINs given subquery and adds all selection properties to SELECT..
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### subQueryFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndSelect**(`property`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:205

LEFT JOINs entity's property and adds all selection properties to SELECT.
Given entity property should be a relation.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### property

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndSelect**(`entity`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:211

LEFT JOINs entity and adds all selection properties to SELECT.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### entity

`string` \| `Function`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

#### 调用签名

> **leftJoinAndSelect**(`tableName`, `alias`, `condition?`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:217

LEFT JOINs table and adds all selection properties to SELECT.
You also need to specify an alias of the joined data.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### tableName

`string`

###### alias

`string`

###### condition?

`string`

###### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 返回

`this`

***

### limit()

> **limit**(`limit?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:511

Sets LIMIT - maximum number of rows to be selected.
NOTE that it may not work as you expect if you are using joins.
If you want to implement pagination, and you are having join in your query,
then use the take method instead.

#### 参数

##### limit?

`number`

#### 返回

`this`

***

### loadAllRelationIds()

> **loadAllRelationIds**(`options?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:384

Loads all relation ids for all relations of the selected entity.
All relation ids will be mapped to relation property themself.
If array of strings is given then loads only relation ids of the given properties.

#### 参数

##### options?

###### disableMixedMap?

`boolean`

###### relations?

`string`[]

#### 返回

`this`

***

### loadRawResults()

> `protected` **loadRawResults**(`queryRunner`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:673

Loads raw results from the database.

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`Promise`\<`any`\>

***

### loadRelationCountAndMap()

> **loadRelationCountAndMap**(`mapToProperty`, `relationName`, `aliasName?`, `queryBuilderFactory?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:378

Counts number of entities of entity's relation and maps the value into some entity's property.
Optionally, you can add condition and parameters used in condition.

#### 参数

##### mapToProperty

`string`

##### relationName

`string`

##### aliasName?

`string`

##### queryBuilderFactory?

(`qb`) => `SelectQueryBuilder`\<`any`\>

#### 返回

`this`

***

### loadRelationIdAndMap()

#### 调用签名

> **loadRelationIdAndMap**(`mapToProperty`, `relationName`, `options?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:366

LEFT JOINs relation id and maps it into some entity's property.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### relationName

`string`

###### options?

###### disableMixedMap?

`boolean`

##### 返回

`this`

#### 调用签名

> **loadRelationIdAndMap**(`mapToProperty`, `relationName`, `alias`, `queryBuilderFactory`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:373

LEFT JOINs relation id and maps it into some entity's property.
Optionally, you can add condition and parameters used in condition.

##### 参数

###### mapToProperty

`string`

###### relationName

`string`

###### alias

`string`

###### queryBuilderFactory

(`qb`) => `SelectQueryBuilder`\<`any`\>

##### 返回

`this`

***

### maxExecutionTime()

> **maxExecutionTime**(`milliseconds`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:86

Set max execution time.

#### 参数

##### milliseconds

`number`

#### 返回

`this`

***

### mergeExpressionMap()

> `protected` **mergeExpressionMap**(`expressionMap`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:677

Merges into expression map given expression map properties.

#### 参数

##### expressionMap

`Partial`\<`QueryExpressionMap`\>

#### 返回

`this`

***

### normalizeNumber()

> `protected` **normalizeNumber**(`num`): `any`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:282

#### 参数

##### num

`any`

#### 返回

`any`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`normalizeNumber`](QueryBuilder.md#normalizenumber)

***

### obtainQueryRunner()

> `protected` **obtainQueryRunner**(): [`QueryRunner`](../interfaces/QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:681

Creates a query builder used to execute sql queries inside this query builder.

#### 返回

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 重写了

[`QueryBuilder`](QueryBuilder.md).[`obtainQueryRunner`](QueryBuilder.md#obtainqueryrunner)

***

### offset()

> **offset**(`offset?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:518

Sets OFFSET - selection offset.
NOTE that it may not work as you expect if you are using joins.
If you want to implement pagination, and you are having join in your query,
then use the skip method instead.

#### 参数

##### offset?

`number`

#### 返回

`this`

***

### orderBy()

#### 调用签名

> **orderBy**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:488

Sets ORDER BY condition in the query builder.
If you had previously ORDER BY expression defined,
calling this function will override previously set ORDER BY conditions.

Calling order by without order set will remove all previously set order bys.

##### 返回

`this`

#### 调用签名

> **orderBy**(`sort`, `order?`, `nulls?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:494

Sets ORDER BY condition in the query builder.
If you had previously ORDER BY expression defined,
calling this function will override previously set ORDER BY conditions.

##### 参数

###### sort

`string`

###### order?

`"ASC"` \| `"DESC"`

###### nulls?

`"NULLS FIRST"` \| `"NULLS LAST"`

##### 返回

`this`

#### 调用签名

> **orderBy**(`order`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:500

Sets ORDER BY condition in the query builder.
If you had previously ORDER BY expression defined,
calling this function will override previously set ORDER BY conditions.

##### 参数

###### order

[`OrderByCondition`](../type-aliases/OrderByCondition.md)

##### 返回

`this`

***

### orHaving()

> **orHaving**(`having`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:460

Adds new OR HAVING condition in the query builder.
Additionally you can add parameters used in where expression.

#### 参数

##### having

`string`

##### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

***

### orWhere()

> **orWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:404

Adds new OR WHERE condition in the query builder.
Additionally you can add parameters used in where expression.

#### 参数

##### where

`string` \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[] \| [`Brackets`](Brackets.md) \| ((`qb`) => `string`)

##### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`orWhere`](../interfaces/WhereExpressionBuilder.md#orwhere)

***

### orWhereExists()

> **orWhereExists**(`subQuery`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:416

Adds a new OR where EXISTS clause

#### 参数

##### subQuery

`SelectQueryBuilder`\<`any`\>

#### 返回

`this`

***

### orWhereInIds()

> **orWhereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:443

Adds new OR WHERE with conditions for the given ids.

Ids are mixed.
It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
If you have multiple primary keys you need to pass object with property names and values specified,
for example [\{ firstId: 1, secondId: 2 \}, \{ firstId: 2, secondId: 3 \}, ...]

#### 参数

##### ids

`any`

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`orWhereInIds`](../interfaces/WhereExpressionBuilder.md#orwhereinids)

***

### printSql()

> **printSql**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:159

Prints sql to stdout using console.log.

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`printSql`](QueryBuilder.md#printsql)

***

### relation()

#### 调用签名

> **relation**(`propertyPath`): [`RelationQueryBuilder`](RelationQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:112

Sets entity's relation with which this query builder gonna work.

##### 参数

###### propertyPath

`string`

##### 返回

[`RelationQueryBuilder`](RelationQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`relation`](QueryBuilder.md#relation)

#### 调用签名

> **relation**\<`T`\>(`entityTarget`, `propertyPath`): [`RelationQueryBuilder`](RelationQueryBuilder.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:116

Sets entity's relation with which this query builder gonna work.

##### 类型参数

###### T

`T` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entityTarget

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`T`\>

###### propertyPath

`string`

##### 返回

[`RelationQueryBuilder`](RelationQueryBuilder.md)\<`T`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`relation`](QueryBuilder.md#relation)

***

### ~~replacePropertyNames()~~

> `protected` **replacePropertyNames**(`statement`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:234

#### 参数

##### statement

`string`

#### 返回

`string`

#### 已被弃用

this way of replace property names is too slow.
 Instead, we'll replace property names at the end - once query is build.

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`replacePropertyNames`](QueryBuilder.md#replacepropertynames)

***

### replacePropertyNamesForTheWholeQuery()

> `protected` **replacePropertyNamesForTheWholeQuery**(`statement`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:238

Replaces all entity's propertyName to name in the given SQL string.

#### 参数

##### statement

`string`

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`replacePropertyNamesForTheWholeQuery`](QueryBuilder.md#replacepropertynamesforthewholequery)

***

### restore()

> **restore**(): `SoftDeleteQueryBuilder`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:108

#### 返回

`SoftDeleteQueryBuilder`\<`any`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`restore`](QueryBuilder.md#restore)

***

### select()

#### 调用签名

> **select**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:54

Creates SELECT query.
Replaces all previous selections if they exist.

##### 返回

`this`

##### 重写了

[`QueryBuilder`](QueryBuilder.md).[`select`](QueryBuilder.md#select)

#### 调用签名

> **select**(`selection`, `selectionAliasName?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:59

Creates SELECT query.
Replaces all previous selections if they exist.

##### 参数

###### selection

(`qb`) => `SelectQueryBuilder`\<`any`\>

###### selectionAliasName?

`string`

##### 返回

`this`

##### 重写了

[`QueryBuilder`](QueryBuilder.md).[`select`](QueryBuilder.md#select)

#### 调用签名

> **select**(`selection`, `selectionAliasName?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:64

Creates SELECT query and selects given data.
Replaces all previous selections if they exist.

##### 参数

###### selection

`string`

###### selectionAliasName?

`string`

##### 返回

`this`

##### 重写了

[`QueryBuilder`](QueryBuilder.md).[`select`](QueryBuilder.md#select)

#### 调用签名

> **select**(`selection`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:69

Creates SELECT query and selects given data.
Replaces all previous selections if they exist.

##### 参数

###### selection

`string`[]

##### 返回

`this`

##### 重写了

`QueryBuilder.select`

***

### setFindOptions()

> **setFindOptions**(`findOptions`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:45

#### 参数

##### findOptions

[`FindManyOptions`](../interfaces/FindManyOptions.md)\<`Entity`\>

#### 返回

`this`

***

### setLock()

#### 调用签名

> **setLock**(`lockMode`, `lockVersion`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:536

Sets locking mode.

##### 参数

###### lockMode

`"optimistic"`

###### lockVersion

`number` \| `Date`

##### 返回

`this`

#### 调用签名

> **setLock**(`lockMode`, `lockVersion?`, `lockTables?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:540

Sets locking mode.

##### 参数

###### lockMode

`"pessimistic_read"` \| `"pessimistic_write"` \| `"dirty_read"` \| `"pessimistic_partial_write"` \| `"pessimistic_write_or_fail"` \| `"for_no_key_update"` \| `"for_key_share"`

###### lockVersion?

`undefined`

###### lockTables?

`string`[]

##### 返回

`this`

***

### ~~setNativeParameters()~~

> **setNativeParameters**(`parameters`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:151

Adds native parameters from the given object.

#### 参数

##### parameters

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

#### 已被弃用

Use `setParameters` instead

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`setNativeParameters`](QueryBuilder.md#setnativeparameters)

***

### setOnLocked()

> **setOnLocked**(`onLocked`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:544

Sets lock handling by adding NO WAIT or SKIP LOCKED.

#### 参数

##### onLocked

`"nowait"` \| `"skip_locked"`

#### 返回

`this`

***

### setOption()

> **setOption**(`option`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:612

Sets extra options that can be used to configure how query builder works.

#### 参数

##### option

`SelectQueryBuilderOption`

#### 返回

`this`

***

### setParameter()

> **setParameter**(`key`, `value`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:140

Sets parameter name and its value.

The key for this parameter may contain numbers, letters, underscores, or periods.

#### 参数

##### key

`string`

##### value

`any`

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`setParameter`](QueryBuilder.md#setparameter)

***

### setParameters()

> **setParameters**(`parameters`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:144

Adds all parameters from the given object.

#### 参数

##### parameters

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`setParameters`](QueryBuilder.md#setparameters)

***

### setQueryRunner()

> **setQueryRunner**(`queryRunner`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:202

Sets or overrides query builder's QueryRunner.

#### 参数

##### queryRunner

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`setQueryRunner`](QueryBuilder.md#setqueryrunner)

***

### skip()

> **skip**(`skip?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:526

Sets number of entities to skip.

#### 参数

##### skip?

`number`

#### 返回

`this`

***

### softDelete()

> **softDelete**(): `SoftDeleteQueryBuilder`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:107

#### 返回

`SoftDeleteQueryBuilder`\<`any`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`softDelete`](QueryBuilder.md#softdelete)

***

### stream()

> **stream**(): `Promise`\<`ReadStream`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:595

Executes built SQL query and returns raw data stream.

#### 返回

`Promise`\<`ReadStream`\>

***

### subQuery()

> **subQuery**(): `SelectQueryBuilder`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:49

Creates a subquery - query that can be used inside other queries.

#### 返回

`SelectQueryBuilder`\<`any`\>

***

### take()

> **take**(`take?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:522

Sets maximal number of entities to take.

#### 参数

##### take?

`number`

#### 返回

`this`

***

### timeTravelQuery()

> **timeTravelQuery**(`timeTravelFn?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:480

Enables time travelling for the current query (only supported by cockroach currently)

#### 参数

##### timeTravelFn?

`string` \| `boolean`

#### 返回

`this`

***

### update()

#### 调用签名

> **update**(): [`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:90

Creates UPDATE query and applies given update values.

##### 返回

[`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

#### 调用签名

> **update**(`updateSet`): [`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:94

Creates UPDATE query and applies given update values.

##### 参数

###### updateSet

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

##### 返回

[`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

#### 调用签名

> **update**\<`Entity`\>(`entity`, `updateSet?`): [`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:98

Creates UPDATE query for the given entity and applies given update values.

##### 类型参数

###### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entity

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### updateSet?

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>

##### 返回

[`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

#### 调用签名

> **update**(`tableName`, `updateSet?`): [`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:102

Creates UPDATE query for the given table name and applies given update values.

##### 参数

###### tableName

`string`

###### updateSet?

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>

##### 返回

[`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

***

### useIndex()

> **useIndex**(`index`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:532

Set certain index to be used by the query.

#### 参数

##### index

`string`

Name of index to be used.

#### 返回

`this`

***

### useTransaction()

> **useTransaction**(`enabled`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:211

If set to true the query will be wrapped into a transaction.

#### 参数

##### enabled

`boolean`

#### 返回

`this`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`useTransaction`](QueryBuilder.md#usetransaction)

***

### validateNumericInput()

> `protected` **validateNumericInput**(`label`, `num`): `number` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:287

Normalizes and validates a numeric query parameter,
throwing if the result is NaN.

#### 参数

##### label

`string`

##### num

`number` \| `undefined`

#### 返回

`number` \| `undefined`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`validateNumericInput`](QueryBuilder.md#validatenumericinput)

***

### validateOrderByCondition()

> `protected` **validateOrderByCondition**(`sort`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:281

#### 参数

##### sort

[`OrderByCondition`](../type-aliases/OrderByCondition.md)

#### 返回

`void`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`validateOrderByCondition`](QueryBuilder.md#validateorderbycondition)

***

### where()

> **where**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:394

Sets WHERE condition in the query builder.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.
Additionally you can add parameters used in where expression.

#### 参数

##### where

`string` \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| [`ObjectLiteral`](../interfaces/ObjectLiteral.md)[] \| [`Brackets`](Brackets.md) \| ((`qb`) => `string`)

##### parameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`where`](../interfaces/WhereExpressionBuilder.md#where)

***

### whereExists()

> **whereExists**(`subQuery`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:408

Sets a new where EXISTS clause

#### 参数

##### subQuery

`SelectQueryBuilder`\<`any`\>

#### 返回

`this`

***

### whereInIds()

> **whereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:425

Adds new AND WHERE with conditions for the given ids.

Ids are mixed.
It means if you have single primary key you can pass a simple id values, for example [1, 2, 3].
If you have multiple primary keys you need to pass object with property names and values specified,
for example [\{ firstId: 1, secondId: 2 \}, \{ firstId: 2, secondId: 3 \}, ...]

#### 参数

##### ids

`any`

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`whereInIds`](../interfaces/WhereExpressionBuilder.md#whereinids)

***

### withDeleted()

> **withDeleted**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/SelectQueryBuilder.d.ts:548

Disables the global condition of "non-deleted" for the entity with delete date columns.

#### 返回

`this`

***

### registerQueryBuilderClass()

> `static` **registerQueryBuilderClass**(`name`, `factory`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:59

#### 参数

##### name

`string`

##### factory

`any`

#### 返回

`void`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`registerQueryBuilderClass`](QueryBuilder.md#registerquerybuilderclass)
