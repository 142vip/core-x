[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TypeOrmModuleOptions

# 类型别名: TypeOrmModuleOptions

> **TypeOrmModuleOptions** = `object` & `Partial`\<[`DataSourceOptions`](DataSourceOptions.md)\>

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:3

## 类型声明

### autoLoadEntities?

> `optional` **autoLoadEntities?**: `boolean`

If `true`, entities will be loaded automatically.

### manualInitialization?

> `optional` **manualInitialization?**: `boolean`

If `true` database initialization will not be performed during module initialization.
This means that database connection will not be established and migrations will not run.
Database initialization will have to be performed manually using `DataSource.initialize`
and it will have to implement own retry mechanism (if necessary).

### retryAttempts?

> `optional` **retryAttempts?**: `number`

Number of times to retry connecting
Default: 10

### retryDelay?

> `optional` **retryDelay?**: `number`

Delay between connection retry attempts (ms)
Default: 3000

### toRetry?

> `optional` **toRetry?**: (`err`) => `boolean`

Function that determines whether the module should
attempt to connect upon failure.

#### 参数

##### err

`any`

error that was thrown

#### 返回

`boolean`

whether to retry connection or not

### verboseRetryLog?

> `optional` **verboseRetryLog?**: `boolean`

If `true`, will show verbose error messages on each connection retry.
