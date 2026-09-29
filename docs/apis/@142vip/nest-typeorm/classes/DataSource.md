[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / DataSource

# 类: DataSource

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:33

DataSource is a pre-defined connection configuration to a specific database.
You can have multiple data sources connected (with multiple connections in it),
connected to multiple databases in your application.

Before, it was called `Connection`, but now `Connection` is deprecated
because `Connection` isn't the best name for what it's actually is.

## theme_extended_by

- [`Connection`](Connection.md)

## 构造函数

### 构造函数

> **new DataSource**(`options`): `DataSource`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:95

#### 参数

##### options

[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)

#### 返回

`DataSource`

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:34

***

### driver

> **driver**: [`Driver`](../interfaces/Driver.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:52

Database driver used by this connection.

***

### entityMetadatas

> `readonly` **entityMetadatas**: [`EntityMetadata`](EntityMetadata.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:80

All entity metadatas that are registered for this connection.

***

### entityMetadatasMap

> `readonly` **entityMetadatasMap**: `Map`\<[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>, [`EntityMetadata`](EntityMetadata.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:85

All entity metadatas that are registered for this connection.
This is a copy of #.entityMetadatas property -\> used for more performant searches.

***

### isInitialized

> `readonly` **isInitialized**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:48

Indicates if DataSource is initialized or not.

***

### logger

> **logger**: [`Logger`](../interfaces/Logger.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:68

Logger used to log orm events.

***

### manager

> `readonly` **manager**: [`EntityManager`](EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:56

EntityManager of this connection.

***

### metadataTableName

> `readonly` **metadataTableName**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:64

Name for the metadata table

***

### migrations

> `readonly` **migrations**: [`MigrationInterface`](../interfaces/MigrationInterface.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:72

Migration instances that are registered for this connection.

***

### ~~name~~

> `readonly` **name**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:40

Connection name.

#### 已被弃用

we don't need names anymore since we are going to drop all related methods relying on this property.

***

### namingStrategy

> **namingStrategy**: [`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:60

Naming strategy used in the connection.

***

### options

> `readonly` **options**: [`DataSourceOptions`](../type-aliases/DataSourceOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:44

Connection options.

***

### queryResultCache?

> `optional` **queryResultCache?**: `QueryResultCache`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:89

Used to work with query result cache.

***

### relationIdLoader

> `readonly` **relationIdLoader**: `RelationIdLoader`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:94

***

### relationLoader

> `readonly` **relationLoader**: `RelationLoader`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:93

Used to load relations and work with lazy relations.

***

### subscribers

> `readonly` **subscribers**: [`EntitySubscriberInterface`](../interfaces/EntitySubscriberInterface.md)\<`any`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:76

Entity subscriber instances that are registered for this connection.

## 访问器

### isConnected

#### Getter 签名

> **get** **isConnected**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:101

Indicates if DataSource is initialized or not.
*
*

##### 已被弃用

use .isInitialized instead

##### 返回

`boolean`

***

### mongoManager

#### Getter 签名

> **get** **mongoManager**(): [`MongoEntityManager`](MongoEntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:108

Gets the mongodb entity manager that allows to perform mongodb-specific repository operations
with any entity in this connection.

Available only in mongodb connections.

##### 返回

[`MongoEntityManager`](MongoEntityManager.md)

***

### sqljsManager

#### Getter 签名

> **get** **sqljsManager**(): `SqljsEntityManager`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:114

Gets a sql.js specific Entity Manager that allows to perform special load and save operations

Available only in connection with the sqljs driver.

##### 返回

`SqljsEntityManager`

## 方法

### buildMetadatas()

> `protected` **buildMetadatas**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:263

Builds metadatas for all registered classes inside this connection.

#### 返回

`Promise`\<`void`\>

***

### ~~close()~~

> **close**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:146

Closes connection with the database.
Once connection is closed, you cannot use repositories or perform any operations except opening connection again.

#### 返回

`Promise`\<`void`\>

#### 已被弃用

use .destroy method instead

***

### ~~connect()~~

> **connect**(): `Promise`\<`DataSource`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:134

Performs connection to the database.
This method should be called once on application bootstrap.
This method not necessarily creates database connection (depend on database type),
but it also can setup a connection pool with database to use.

#### 返回

`Promise`\<`DataSource`\>

#### 已被弃用

use .initialize method instead

***

### createEntityManager()

> **createEntityManager**(`queryRunner?`): [`EntityManager`](EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:255

Creates an Entity Manager for the current connection with the help of the EntityManagerFactory.

#### 参数

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

[`EntityManager`](EntityManager.md)

***

### createQueryBuilder()

#### 调用签名

> **createQueryBuilder**\<`Entity`\>(`entityClass`, `alias`, `queryRunner?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:232

Creates a new query builder that can be used to build a SQL query.

##### 类型参数

###### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

##### 参数

###### entityClass

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

###### alias

`string`

###### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`Entity`\>

#### 调用签名

> **createQueryBuilder**(`queryRunner?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:236

Creates a new query builder that can be used to build a SQL query.

##### 参数

###### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

***

### createQueryRunner()

> **createQueryRunner**(`mode?`): [`QueryRunner`](../interfaces/QueryRunner.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:247

Creates a query runner used for perform queries on a single database connection.
Using query runners you can control your queries to execute using single database connection and
manually control your database transaction.

Mode is used in replication mode and indicates whatever you want to connect
to master database or any of slave databases.
If you perform writes you must use master database,
if you perform reads you can use slave databases.

#### 参数

##### mode?

[`ReplicationMode`](../type-aliases/ReplicationMode.md)

#### 返回

[`QueryRunner`](../interfaces/QueryRunner.md)

***

### defaultReplicationModeForReads()

> **defaultReplicationModeForReads**(): [`ReplicationMode`](../type-aliases/ReplicationMode.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:267

Get the replication mode SELECT queries should use for this datasource by default

#### 返回

[`ReplicationMode`](../type-aliases/ReplicationMode.md)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:139

Closes connection with the database.
Once connection is closed, you cannot use repositories or perform any operations except opening connection again.

#### 返回

`Promise`\<`void`\>

***

### dropDatabase()

> **dropDatabase**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:159

Drops the database and all its data.
Be careful with this method on production since this method will erase all your database tables and their data.
Can be used only after connection to the database is established.

#### 返回

`Promise`\<`void`\>

***

### findMetadata()

> `protected` **findMetadata**(`target`): [`EntityMetadata`](EntityMetadata.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:259

Finds exist entity metadata by the given entity class, target name or table name.

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

#### 返回

[`EntityMetadata`](EntityMetadata.md) \| `undefined`

***

### ~~getCustomRepository()~~

> **getCustomRepository**\<`T`\>(`customRepository`): `T`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:208

Gets custom entity repository marked with

#### 类型参数

##### T

`T`

#### 参数

##### customRepository

[`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>

#### 返回

`T`

#### Entity Repository

decorator.

#### 已被弃用

use Repository.extend function to create a custom repository

***

### getManyToManyMetadata()

> **getManyToManyMetadata**(`entityTarget`, `relationPropertyPath`): [`EntityMetadata`](EntityMetadata.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:251

Gets entity metadata of the junction table (many-to-many table).

#### 参数

##### entityTarget

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

##### relationPropertyPath

`string`

#### 返回

[`EntityMetadata`](EntityMetadata.md) \| `undefined`

***

### getMetadata()

> **getMetadata**(`target`): [`EntityMetadata`](EntityMetadata.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:188

Gets entity metadata for the given entity class or schema name.

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

#### 返回

[`EntityMetadata`](EntityMetadata.md)

***

### getMongoRepository()

> **getMongoRepository**\<`Entity`\>(`target`): [`MongoRepository`](MongoRepository.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:202

Gets mongodb-specific repository for the given entity class or name.
Works only if connection is mongodb-specific.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

[`MongoRepository`](MongoRepository.md)\<`Entity`\>

***

### getRepository()

> **getRepository**\<`Entity`\>(`target`): [`Repository`](Repository.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:192

Gets repository for the given entity.

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

[`Repository`](Repository.md)\<`Entity`\>

***

### getTreeRepository()

> **getTreeRepository**\<`Entity`\>(`target`): [`TreeRepository`](TreeRepository.md)\<`Entity`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:197

Gets tree repository for the given entity class or name.
Only tree-type entities can have a TreeRepository, like ones decorated with

#### 类型参数

##### Entity

`Entity` *extends* [`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`Entity`\>

#### 返回

[`TreeRepository`](TreeRepository.md)\<`Entity`\>

#### Tree

decorator.

***

### hasMetadata()

> **hasMetadata**(`target`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:184

Checks if entity metadata exist for the given entity class, target name or table name.

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

#### 返回

`boolean`

***

### initialize()

> **initialize**(): `Promise`\<`DataSource`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:125

Performs connection to the database.
This method should be called once on application bootstrap.
This method not necessarily creates database connection (depend on database type),
but it also can setup a connection pool with database to use.

#### 返回

`Promise`\<`DataSource`\>

***

### query()

> **query**\<`T`\>(`query`, `parameters?`, `queryRunner?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:220

Executes raw SQL query and returns raw database results.

#### 类型参数

##### T

`T` = `any`

#### 参数

##### query

`string`

##### parameters?

`any`[]

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

`Promise`\<`T`\>

#### 参阅

[Official docs](https://typeorm.io/data-source-api) for examples.

***

### runMigrations()

> **runMigrations**(`options?`): `Promise`\<[`Migration`](Migration.md)[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:164

Runs all pending migrations.
Can be used only after connection to the database is established.

#### 参数

##### options?

###### fake?

`boolean`

###### transaction?

`"all"` \| `"none"` \| `"each"`

#### 返回

`Promise`\<[`Migration`](Migration.md)[]\>

***

### setOptions()

> **setOptions**(`options`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:118

Updates current connection options with provided options.

#### 参数

##### options

`Partial`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)\>

#### 返回

`this`

***

### showMigrations()

> **showMigrations**(): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:180

Lists all migrations and whether they have been run.
Returns true if there are pending migrations

#### 返回

`Promise`\<`boolean`\>

***

### sql()

> **sql**\<`T`\>(`strings`, ...`values`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:228

Tagged template function that executes raw SQL query and returns raw database results.
Template expressions are automatically transformed into database parameters.
Raw query execution is supported only by relational databases (MongoDB is not supported).
Note: Don't call this as a regular function, it is meant to be used with backticks to tag a template literal.
Example: dataSource.sql`SELECT * FROM table_name WHERE id = ${id}`

#### 类型参数

##### T

`T` = `any`

#### 参数

##### strings

`TemplateStringsArray`

##### values

...`unknown`[]

#### 返回

`Promise`\<`T`\>

***

### synchronize()

> **synchronize**(`dropBeforeSync?`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:153

Creates database schema for all entities registered in this connection.
Can be used only after connection to the database is established.

#### 参数

##### dropBeforeSync?

`boolean`

If set to true then it drops the database with all its tables and data

#### 返回

`Promise`\<`void`\>

***

### transaction()

#### 调用签名

> **transaction**\<`T`\>(`runInTransaction`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:213

Wraps given function execution (and all operations made there) into a transaction.
All database operations must be executed using provided entity manager.

##### 类型参数

###### T

`T`

##### 参数

###### runInTransaction

(`entityManager`) => `Promise`\<`T`\>

##### 返回

`Promise`\<`T`\>

#### 调用签名

> **transaction**\<`T`\>(`isolationLevel`, `runInTransaction`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:214

Wraps given function execution (and all operations made there) into a transaction.
All database operations must be executed using provided entity manager.

##### 类型参数

###### T

`T`

##### 参数

###### isolationLevel

`IsolationLevel`

###### runInTransaction

(`entityManager`) => `Promise`\<`T`\>

##### 返回

`Promise`\<`T`\>

***

### undoLastMigration()

> **undoLastMigration**(`options?`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:172

Reverts last executed migration.
Can be used only after connection to the database is established.

#### 参数

##### options?

###### fake?

`boolean`

###### transaction?

`"all"` \| `"none"` \| `"each"`

#### 返回

`Promise`\<`void`\>
