[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / UpdateQueryBuilder

# 类: UpdateQueryBuilder\<Entity\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:13

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

> **new UpdateQueryBuilder**\<`Entity`\>(`connectionOrQueryBuilder`, `queryRunner?`): `UpdateQueryBuilder`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:15

#### 参数

##### connectionOrQueryBuilder

[`DataSource`](DataSource.md) \| [`QueryBuilder`](QueryBuilder.md)\<`any`\>

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`UpdateQueryBuilder`\<`Entity`\>

#### 重写了

[`QueryBuilder`](QueryBuilder.md).[`constructor`](QueryBuilder.md#constructor)

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:14

#### 重写了

[`QueryBuilder`](QueryBuilder.md).[`@instanceof`](QueryBuilder.md#instanceof)

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

### addOrderBy()

> **addOrderBy**(`sort`, `order?`, `nulls?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:110

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

### andWhere()

> **andWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:39

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

### andWhereInIds()

> **andWhereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:54

Adds new AND WHERE with conditions for the given ids.

#### 参数

##### ids

`any`

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`andWhereInIds`](../interfaces/WhereExpressionBuilder.md#andwhereinids)

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

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\> \| ((`qb`) => [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>)

##### aliasName?

`string`

#### 返回

`Alias`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createFromAlias`](QueryBuilder.md#createfromalias)

***

### createLimitExpression()

> `protected` **createLimitExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:138

Creates "LIMIT" parts of SQL query.

#### 返回

`string`

***

### createOrderByExpression()

> `protected` **createOrderByExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:134

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

### createTimeTravelQuery()

> `protected` **createTimeTravelQuery**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:243

Time travel queries for CockroachDB

#### 返回

`string`

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`createTimeTravelQuery`](QueryBuilder.md#createtimetravelquery)

***

### createUpdateExpression()

> `protected` **createUpdateExpression**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:130

Creates UPDATE express used to perform insert query.

#### 返回

`string`

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

> **execute**(): `Promise`\<[`UpdateResult`](UpdateResult.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:23

Executes sql generated by query builder and returns raw database results.

#### 返回

`Promise`\<[`UpdateResult`](UpdateResult.md)\>

#### 重写了

[`QueryBuilder`](QueryBuilder.md).[`execute`](QueryBuilder.md#execute)

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

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:19

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

### getValueSet()

> `protected` **getValueSet**(): [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:142

Gets array of values need to be inserted into the target table.

#### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

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

### insert()

> **insert**(): [`InsertQueryBuilder`](InsertQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:86

Creates INSERT query.

#### 返回

[`InsertQueryBuilder`](InsertQueryBuilder.md)\<`Entity`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`insert`](QueryBuilder.md#insert)

***

### limit()

> **limit**(`limit?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:114

Sets LIMIT - maximum number of rows to be selected.

#### 参数

##### limit?

`number`

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

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:279

Creates a query builder used to execute sql queries inside this query builder.

#### 返回

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`obtainQueryRunner`](QueryBuilder.md#obtainqueryrunner)

***

### orderBy()

#### 调用签名

> **orderBy**(): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:94

Sets ORDER BY condition in the query builder.
If you had previously ORDER BY expression defined,
calling this function will override previously set ORDER BY conditions.

Calling order by without order set will remove all previously set order bys.

##### 返回

`this`

#### 调用签名

> **orderBy**(`sort`, `order?`, `nulls?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:100

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

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:106

Sets ORDER BY condition in the query builder.
If you had previously ORDER BY expression defined,
calling this function will override previously set ORDER BY conditions.

##### 参数

###### order

[`OrderByCondition`](../type-aliases/OrderByCondition.md)

##### 返回

`this`

***

### orWhere()

> **orWhere**(`where`, `parameters?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:44

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

### orWhereInIds()

> **orWhereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:58

Adds new OR WHERE with conditions for the given ids.

#### 参数

##### ids

`any`

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`orWhereInIds`](../interfaces/WhereExpressionBuilder.md#orwhereinids)

***

### output()

#### 调用签名

> **output**(`columns`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:63

Optional returning/output clause.
This will return given column values.

##### 参数

###### columns

`string`[]

##### 返回

`this`

#### 调用签名

> **output**(`output`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:68

Optional returning/output clause.
Returning is a SQL string containing returning statement.

##### 参数

###### output

`string`

##### 返回

`this`

#### 调用签名

> **output**(`output`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:72

Optional returning/output clause.

##### 参数

###### output

`string` \| `string`[]

##### 返回

`this`

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

### returning()

#### 调用签名

> **returning**(`columns`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:77

Optional returning/output clause.
This will return given column values.

##### 参数

###### columns

`string`[]

##### 返回

`this`

#### 调用签名

> **returning**(`returning`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:82

Optional returning/output clause.
Returning is a SQL string containing returning statement.

##### 参数

###### returning

`string`

##### 返回

`this`

#### 调用签名

> **returning**(`returning`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:86

Optional returning/output clause.

##### 参数

###### returning

`string` \| `string`[]

##### 返回

`this`

***

### select()

#### 调用签名

> **select**(): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:72

Creates SELECT query.
Replaces all previous selections if they exist.

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`select`](QueryBuilder.md#select)

#### 调用签名

> **select**(`selection`, `selectionAliasName?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:77

Creates SELECT query and selects given data.
Replaces all previous selections if they exist.

##### 参数

###### selection

`string`

###### selectionAliasName?

`string`

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`select`](QueryBuilder.md#select)

#### 调用签名

> **select**(`selection`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:82

Creates SELECT query and selects given data.
Replaces all previous selections if they exist.

##### 参数

###### selection

`string`[]

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`select`](QueryBuilder.md#select)

***

### set()

> **set**(`values`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:27

Values needs to be updated.

#### 参数

##### values

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

#### 返回

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

### softDelete()

> **softDelete**(): `SoftDeleteQueryBuilder`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:107

#### 返回

`SoftDeleteQueryBuilder`\<`any`\>

#### 继承自

[`QueryBuilder`](QueryBuilder.md).[`softDelete`](QueryBuilder.md#softdelete)

***

### update()

#### 调用签名

> **update**(): `UpdateQueryBuilder`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:90

Creates UPDATE query and applies given update values.

##### 返回

`UpdateQueryBuilder`\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

#### 调用签名

> **update**(`updateSet`): `UpdateQueryBuilder`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:94

Creates UPDATE query and applies given update values.

##### 参数

###### updateSet

[`QueryDeepPartialEntity`](../type-aliases/QueryDeepPartialEntity.md)\<`Entity`\>

##### 返回

`UpdateQueryBuilder`\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

#### 调用签名

> **update**\<`Entity`\>(`entity`, `updateSet?`): `UpdateQueryBuilder`\<`Entity`\>

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

`UpdateQueryBuilder`\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

#### 调用签名

> **update**(`tableName`, `updateSet?`): `UpdateQueryBuilder`\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/QueryBuilder.d.ts:102

Creates UPDATE query for the given table name and applies given update values.

##### 参数

###### tableName

`string`

###### updateSet?

`_QueryDeepPartialEntity`\<[`ObjectLiteral`](../interfaces/ObjectLiteral.md) *extends* `Entity` ? `unknown` : `Entity`\>

##### 返回

`UpdateQueryBuilder`\<`Entity`\>

##### 继承自

[`QueryBuilder`](QueryBuilder.md).[`update`](QueryBuilder.md#update)

***

### updateEntity()

> **updateEntity**(`enabled`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:126

Indicates if entity must be updated after update operation.
This may produce extra query or use RETURNING / OUTPUT statement (depend on database).
Enabled by default.

#### 参数

##### enabled

`boolean`

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

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:34

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

### whereEntity()

> **whereEntity**(`entity`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:120

Indicates if entity must be updated after update operation.
This may produce extra query or use RETURNING / OUTPUT statement (depend on database).
Enabled by default.

#### 参数

##### entity

`Entity` \| `Entity`[]

#### 返回

`this`

***

### whereInIds()

> **whereInIds**(`ids`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/query-builder/UpdateQueryBuilder.d.ts:50

Sets WHERE condition in the query builder with a condition for the given ids.
If you had previously WHERE expression defined,
calling this function will override previously set WHERE conditions.

#### 参数

##### ids

`any`

#### 返回

`this`

#### 实现了

[`WhereExpressionBuilder`](../interfaces/WhereExpressionBuilder.md).[`whereInIds`](../interfaces/WhereExpressionBuilder.md#whereinids)

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
