[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TypeOrmModule

# 类: TypeOrmModule

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/typeorm.module.d.ts:5

## 构造函数

### 构造函数

> **new TypeOrmModule**(): `TypeOrmModule`

#### 返回

`TypeOrmModule`

## 方法

### forFeature()

> `static` **forFeature**(`entities?`, `dataSource?`): `DynamicModule`

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/typeorm.module.d.ts:7

#### 参数

##### entities?

`EntityClassOrSchema`[]

##### dataSource?

`string` \| [`DataSourceOptions`](../type-aliases/DataSourceOptions.md) \| [`DataSource`](DataSource.md)

#### 返回

`DynamicModule`

***

### forRoot()

> `static` **forRoot**(`options?`): `DynamicModule`

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/typeorm.module.d.ts:6

#### 参数

##### options?

[`TypeOrmModuleOptions`](../type-aliases/TypeOrmModuleOptions.md)

#### 返回

`DynamicModule`

***

### forRootAsync()

> `static` **forRootAsync**(`options`): `DynamicModule`

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/typeorm.module.d.ts:8

#### 参数

##### options

[`TypeOrmModuleAsyncOptions`](../interfaces/TypeOrmModuleAsyncOptions.md)

#### 返回

`DynamicModule`
