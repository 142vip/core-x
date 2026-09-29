[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / NestTypeOrmModule

# 类: NestTypeOrmModule

定义于: [packages/nest-typeorm/src/core/typeorm.module.ts:14](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest-typeorm/src/core/typeorm.module.ts#L14)

参考：
- https://docs.nestjs.cn/techniques/sql
- https://github.com/nestjs/typeorm/blob/master/lib/typeorm.module.ts

## 构造函数

### 构造函数

> **new NestTypeOrmModule**(): `NestTypeOrmModule`

#### 返回

`NestTypeOrmModule`

## 方法

### forFeature()

> `static` **forFeature**(`entities?`, `dataSource?`): `DynamicModule`

定义于: [packages/nest-typeorm/src/core/typeorm.module.ts:34](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest-typeorm/src/core/typeorm.module.ts#L34)

注册实体
完全兼容 TypeOrmModule.forFeature()

#### 参数

##### entities?

`EntityClassOrSchema`[] = `[]`

##### dataSource?

`string` \| [`DataSourceOptions`](../type-aliases/DataSourceOptions.md) \| [`DataSource`](DataSource.md)

#### 返回

`DynamicModule`

***

### forRoot()

> `static` **forRoot**(`options?`): `DynamicModule`

定义于: [packages/nest-typeorm/src/core/typeorm.module.ts:19](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest-typeorm/src/core/typeorm.module.ts#L19)

同步注册数据库连接。
直接委托 TypeOrmModule.forRoot，避免额外包装导致 TypeOrmCoreModule 的 DataSource 无法全局注入。

#### 参数

##### options?

[`TypeOrmModuleOptions`](../type-aliases/TypeOrmModuleOptions.md) = `{}`

#### 返回

`DynamicModule`

***

### forRootAsync()

> `static` **forRootAsync**(`options`): `DynamicModule`

定义于: [packages/nest-typeorm/src/core/typeorm.module.ts:26](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest-typeorm/src/core/typeorm.module.ts#L26)

异步注册数据库连接，行为与 TypeOrmModule.forRootAsync 一致。

#### 参数

##### options

[`TypeOrmModuleAsyncOptions`](../interfaces/TypeOrmModuleAsyncOptions.md)

#### 返回

`DynamicModule`

***

### register()

> `static` **register**(`config`): `DynamicModule`

定义于: [packages/nest-typeorm/src/core/typeorm.module.ts:48](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest-typeorm/src/core/typeorm.module.ts#L48)

兼容方法，等同于 forRoot
完全兼容 TypeOrmModule.forRoot()

#### 参数

##### config

[`TypeOrmModuleOptions`](../type-aliases/TypeOrmModuleOptions.md)

#### 返回

`DynamicModule`
