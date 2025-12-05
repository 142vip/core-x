[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / NestTypeOrmModule

# 类: NestTypeOrmModule

定义于: [typeorm.module.ts:8](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-typeorm/src/core/typeorm.module.ts#L8)

参考：https://docs.nestjs.cn/techniques/sql

## 构造函数

### 构造函数

> **new NestTypeOrmModule**(): `NestTypeOrmModule`

#### 返回

`NestTypeOrmModule`

## 方法

### forFeature()

> `static` **forFeature**(`entities?`, `dataSourceName?`): `DynamicModule`

定义于: [typeorm.module.ts:41](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-typeorm/src/core/typeorm.module.ts#L41)

注册实体

#### 参数

##### entities?

`EntityClassOrSchema`[]

##### dataSourceName?

`string`

#### 返回

`DynamicModule`

***

### forRoot()

> `static` **forRoot**(`options`, `dataSourceName?`): `DynamicModule`

定义于: [typeorm.module.ts:19](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-typeorm/src/core/typeorm.module.ts#L19)

同步注册数据库连接

#### 参数

##### options

`TypeOrmModuleOptions`

##### dataSourceName?

`string`

#### 返回

`DynamicModule`

***

### forRootAsync()

> `static` **forRootAsync**(`options`, `dataSourceName?`): `DynamicModule`

定义于: [typeorm.module.ts:30](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-typeorm/src/core/typeorm.module.ts#L30)

异步注册数据库连接

#### 参数

##### options

`TypeOrmModuleAsyncOptions`

##### dataSourceName?

`string`

#### 返回

`DynamicModule`

***

### register()

> `static` **register**(`config`): `DynamicModule`

定义于: [typeorm.module.ts:12](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-typeorm/src/core/typeorm.module.ts#L12)

同步注册数据库连接，全局模块

#### 参数

##### config

`TypeOrmModuleOptions`

#### 返回

`DynamicModule`
