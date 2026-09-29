[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Connection

# ~~类: Connection~~

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/connection/Connection.d.ts:9

Connection is a single database ORM connection to a specific database.
Its not required to be a database connection, depend on database type it can create connection pool.
You can have multiple connections to multiple databases in your application.

## 已被弃用

## theme_extends

- [`DataSource`](DataSource.md)

## 构造函数

### 构造函数

> **new Connection**(`options`): `Connection`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:95

#### 参数

##### options

[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)

#### 返回

`Connection`

#### 继承自

[`DataSource`](DataSource.md).[`constructor`](DataSource.md#constructor)

## 属性

### ~~@instanceof~~

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:34

#### 继承自

[`DataSource`](DataSource.md).[`@instanceof`](DataSource.md#instanceof)

***

### ~~driver~~

> **driver**: [`Driver`](../interfaces/Driver.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:52

Database driver used by this connection.

#### 继承自

[`DataSource`](DataSource.md).[`driver`](DataSource.md#driver)

***

### ~~entityMetadatas~~

> `readonly` **entityMetadatas**: [`EntityMetadata`](EntityMetadata.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:80

All entity metadatas that are registered for this connection.

#### 继承自

[`DataSource`](DataSource.md).[`entityMetadatas`](DataSource.md#entitymetadatas)

***

### ~~entityMetadatasMap~~

> `readonly` **entityMetadatasMap**: `Map`\<[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>, [`EntityMetadata`](EntityMetadata.md)\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:85

All entity metadatas that are registered for this connection.
This is a copy of #.entityMetadatas property -\> used for more performant searches.

#### 继承自

[`DataSource`](DataSource.md).[`entityMetadatasMap`](DataSource.md#entitymetadatasmap)

***

### ~~isInitialized~~

> `readonly` **isInitialized**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:48

Indicates if DataSource is initialized or not.

#### 继承自

[`DataSource`](DataSource.md).[`isInitialized`](DataSource.md#isinitialized)

***

### ~~logger~~

> **logger**: [`Logger`](../interfaces/Logger.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:68

Logger used to log orm events.

#### 继承自

[`DataSource`](DataSource.md).[`logger`](DataSource.md#logger)

***

### ~~manager~~

> `readonly` **manager**: [`EntityManager`](EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:56

EntityManager of this connection.

#### 继承自

[`DataSource`](DataSource.md).[`manager`](DataSource.md#manager)

***

### ~~metadataTableName~~

> `readonly` **metadataTableName**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:64

Name for the metadata table

#### 继承自

[`DataSource`](DataSource.md).[`metadataTableName`](DataSource.md#metadatatablename)

***

### ~~migrations~~

> `readonly` **migrations**: [`MigrationInterface`](../interfaces/MigrationInterface.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:72

Migration instances that are registered for this connection.

#### 继承自

[`DataSource`](DataSource.md).[`migrations`](DataSource.md#migrations)

***

### ~~name~~

> `readonly` **name**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:40

Connection name.

#### 已被弃用

we don't need names anymore since we are going to drop all related methods relying on this property.

#### 继承自

[`DataSource`](DataSource.md).[`name`](DataSource.md#name)

***

### ~~namingStrategy~~

> **namingStrategy**: [`NamingStrategyInterface`](../interfaces/NamingStrategyInterface.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:60

Naming strategy used in the connection.

#### 继承自

[`DataSource`](DataSource.md).[`namingStrategy`](DataSource.md#namingstrategy)

***

### ~~options~~

> `readonly` **options**: [`DataSourceOptions`](../type-aliases/DataSourceOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:44

Connection options.

#### 继承自

[`DataSource`](DataSource.md).[`options`](DataSource.md#options)

***

### ~~queryResultCache?~~

> `optional` **queryResultCache?**: `QueryResultCache`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:89

Used to work with query result cache.

#### 继承自

[`DataSource`](DataSource.md).[`queryResultCache`](DataSource.md#queryresultcache)

***

### ~~relationIdLoader~~

> `readonly` **relationIdLoader**: `RelationIdLoader`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:94

#### 继承自

[`DataSource`](DataSource.md).[`relationIdLoader`](DataSource.md#relationidloader)

***

### ~~relationLoader~~

> `readonly` **relationLoader**: `RelationLoader`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:93

Used to load relations and work with lazy relations.

#### 继承自

[`DataSource`](DataSource.md).[`relationLoader`](DataSource.md#relationloader)

***

### ~~subscribers~~

> `readonly` **subscribers**: [`EntitySubscriberInterface`](../interfaces/EntitySubscriberInterface.md)\<`any`\>[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:76

Entity subscriber instances that are registered for this connection.

#### 继承自

[`DataSource`](DataSource.md).[`subscribers`](DataSource.md#subscribers)

## 访问器

### ~~isConnected~~

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

#### 继承自

[`DataSource`](DataSource.md).[`isConnected`](DataSource.md#isconnected)

***

### ~~mongoManager~~

#### Getter 签名

> **get** **mongoManager**(): [`MongoEntityManager`](MongoEntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:108

Gets the mongodb entity manager that allows to perform mongodb-specific repository operations
with any entity in this connection.

Available only in mongodb connections.

##### 返回

[`MongoEntityManager`](MongoEntityManager.md)

#### 继承自

[`DataSource`](DataSource.md).[`mongoManager`](DataSource.md#mongomanager)

***

### ~~sqljsManager~~

#### Getter 签名

> **get** **sqljsManager**(): `SqljsEntityManager`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:114

Gets a sql.js specific Entity Manager that allows to perform special load and save operations

Available only in connection with the sqljs driver.

##### 返回

`SqljsEntityManager`

#### 继承自

[`DataSource`](DataSource.md).[`sqljsManager`](DataSource.md#sqljsmanager)

## 方法

### ~~buildMetadatas()~~

> `protected` **buildMetadatas**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:263

Builds metadatas for all registered classes inside this connection.

#### 返回

`Promise`\<`void`\>

#### 继承自

[`DataSource`](DataSource.md).[`buildMetadatas`](DataSource.md#buildmetadatas)

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

#### 继承自

[`DataSource`](DataSource.md).[`close`](DataSource.md#close)

***

### ~~connect()~~

> **connect**(): `Promise`\<`Connection`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:134

Performs connection to the database.
This method should be called once on application bootstrap.
This method not necessarily creates database connection (depend on database type),
but it also can setup a connection pool with database to use.

#### 返回

`Promise`\<`Connection`\>

#### 已被弃用

use .initialize method instead

#### 继承自

[`DataSource`](DataSource.md).[`connect`](DataSource.md#connect)

***

### ~~createEntityManager()~~

> **createEntityManager**(`queryRunner?`): [`EntityManager`](EntityManager.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:255

Creates an Entity Manager for the current connection with the help of the EntityManagerFactory.

#### 参数

##### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

#### 返回

[`EntityManager`](EntityManager.md)

#### 继承自

[`DataSource`](DataSource.md).[`createEntityManager`](DataSource.md#createentitymanager)

***

### ~~createQueryBuilder()~~

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

##### 继承自

[`DataSource`](DataSource.md).[`createQueryBuilder`](DataSource.md#createquerybuilder)

#### 调用签名

> **createQueryBuilder**(`queryRunner?`): [`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:236

Creates a new query builder that can be used to build a SQL query.

##### 参数

###### queryRunner?

[`QueryRunner`](../interfaces/QueryRunner.md)

##### 返回

[`SelectQueryBuilder`](SelectQueryBuilder.md)\<`any`\>

##### 继承自

[`DataSource`](DataSource.md).[`createQueryBuilder`](DataSource.md#createquerybuilder)

***

### ~~createQueryRunner()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`createQueryRunner`](DataSource.md#createqueryrunner)

***

### ~~defaultReplicationModeForReads()~~

> **defaultReplicationModeForReads**(): [`ReplicationMode`](../type-aliases/ReplicationMode.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:267

Get the replication mode SELECT queries should use for this datasource by default

#### 返回

[`ReplicationMode`](../type-aliases/ReplicationMode.md)

#### 继承自

[`DataSource`](DataSource.md).[`defaultReplicationModeForReads`](DataSource.md#defaultreplicationmodeforreads)

***

### ~~destroy()~~

> **destroy**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:139

Closes connection with the database.
Once connection is closed, you cannot use repositories or perform any operations except opening connection again.

#### 返回

`Promise`\<`void`\>

#### 继承自

[`DataSource`](DataSource.md).[`destroy`](DataSource.md#destroy)

***

### ~~dropDatabase()~~

> **dropDatabase**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:159

Drops the database and all its data.
Be careful with this method on production since this method will erase all your database tables and their data.
Can be used only after connection to the database is established.

#### 返回

`Promise`\<`void`\>

#### 继承自

[`DataSource`](DataSource.md).[`dropDatabase`](DataSource.md#dropdatabase)

***

### ~~findMetadata()~~

> `protected` **findMetadata**(`target`): [`EntityMetadata`](EntityMetadata.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:259

Finds exist entity metadata by the given entity class, target name or table name.

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

#### 返回

[`EntityMetadata`](EntityMetadata.md) \| `undefined`

#### 继承自

[`DataSource`](DataSource.md).[`findMetadata`](DataSource.md#findmetadata)

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

#### 继承自

[`DataSource`](DataSource.md).[`getCustomRepository`](DataSource.md#getcustomrepository)

***

### ~~getManyToManyMetadata()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`getManyToManyMetadata`](DataSource.md#getmanytomanymetadata)

***

### ~~getMetadata()~~

> **getMetadata**(`target`): [`EntityMetadata`](EntityMetadata.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:188

Gets entity metadata for the given entity class or schema name.

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

#### 返回

[`EntityMetadata`](EntityMetadata.md)

#### 继承自

[`DataSource`](DataSource.md).[`getMetadata`](DataSource.md#getmetadata)

***

### ~~getMongoRepository()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`getMongoRepository`](DataSource.md#getmongorepository)

***

### ~~getRepository()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`getRepository`](DataSource.md#getrepository)

***

### ~~getTreeRepository()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`getTreeRepository`](DataSource.md#gettreerepository)

***

### ~~hasMetadata()~~

> **hasMetadata**(`target`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:184

Checks if entity metadata exist for the given entity class, target name or table name.

#### 参数

##### target

[`EntityTarget`](../type-aliases/EntityTarget.md)\<`any`\>

#### 返回

`boolean`

#### 继承自

[`DataSource`](DataSource.md).[`hasMetadata`](DataSource.md#hasmetadata)

***

### ~~initialize()~~

> **initialize**(): `Promise`\<`Connection`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:125

Performs connection to the database.
This method should be called once on application bootstrap.
This method not necessarily creates database connection (depend on database type),
but it also can setup a connection pool with database to use.

#### 返回

`Promise`\<`Connection`\>

#### 继承自

[`DataSource`](DataSource.md).[`initialize`](DataSource.md#initialize)

***

### ~~query()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`query`](DataSource.md#query)

***

### ~~runMigrations()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`runMigrations`](DataSource.md#runmigrations)

***

### ~~setOptions()~~

> **setOptions**(`options`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:118

Updates current connection options with provided options.

#### 参数

##### options

`Partial`\<[`DataSourceOptions`](../type-aliases/DataSourceOptions.md)\>

#### 返回

`this`

#### 继承自

[`DataSource`](DataSource.md).[`setOptions`](DataSource.md#setoptions)

***

### ~~showMigrations()~~

> **showMigrations**(): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/data-source/DataSource.d.ts:180

Lists all migrations and whether they have been run.
Returns true if there are pending migrations

#### 返回

`Promise`\<`boolean`\>

#### 继承自

[`DataSource`](DataSource.md).[`showMigrations`](DataSource.md#showmigrations)

***

### ~~sql()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`sql`](DataSource.md#sql)

***

### ~~synchronize()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`synchronize`](DataSource.md#synchronize)

***

### ~~transaction()~~

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

##### 继承自

[`DataSource`](DataSource.md).[`transaction`](DataSource.md#transaction)

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

##### 继承自

[`DataSource`](DataSource.md).[`transaction`](DataSource.md#transaction)

***

### ~~undoLastMigration()~~

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

#### 继承自

[`DataSource`](DataSource.md).[`undoLastMigration`](DataSource.md#undolastmigration)
