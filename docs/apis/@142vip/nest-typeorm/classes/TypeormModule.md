[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TypeormModule

# 类: TypeormModule

定义于: [typeorm.module.ts:21](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/nest-typeorm/src/core/typeorm.module.ts#L21)

## 构造函数

### 构造函数

> **new TypeormModule**(): `TypeormModule`

#### 返回

`TypeormModule`

## 方法

### forFeature()

> `static` **forFeature**(`entitiesOrRepositories`, `token?`): `DynamicModule`

定义于: [typeorm.module.ts:22](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/nest-typeorm/src/core/typeorm.module.ts#L22)

#### 参数

##### entitiesOrRepositories

`EntitiesOrRepositories`

##### token?

`string`

#### 返回

`DynamicModule`

***

### forRoot()

> `static` **forRoot**(`options`): `DynamicModule`

定义于: [typeorm.module.ts:56](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/nest-typeorm/src/core/typeorm.module.ts#L56)

#### 参数

##### options

`TypeOrmModuleOptions`

#### 返回

`DynamicModule`

***

### forRootAsync()

> `static` **forRootAsync**(`options`): `DynamicModule`

定义于: [typeorm.module.ts:66](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/nest-typeorm/src/core/typeorm.module.ts#L66)

#### 参数

##### options

`TypeOrmModuleAsyncOptions`

#### 返回

`DynamicModule`
