[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TypeormModule

# Class: TypeormModule

Defined in: [typeorm.module.ts:21](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/nest-typeorm/src/core/typeorm.module.ts#L21)

## Constructors

### Constructor

> **new TypeormModule**(): `TypeormModule`

#### Returns

`TypeormModule`

## Methods

### forFeature()

> `static` **forFeature**(`entitiesOrRepositories`, `token?`): `DynamicModule`

Defined in: [typeorm.module.ts:22](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/nest-typeorm/src/core/typeorm.module.ts#L22)

#### Parameters

##### entitiesOrRepositories

`EntitiesOrRepositories`

##### token?

`string`

#### Returns

`DynamicModule`

***

### forRoot()

> `static` **forRoot**(`options`): `DynamicModule`

Defined in: [typeorm.module.ts:56](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/nest-typeorm/src/core/typeorm.module.ts#L56)

#### Parameters

##### options

`TypeOrmModuleOptions`

#### Returns

`DynamicModule`

***

### forRootAsync()

> `static` **forRootAsync**(`options`): `DynamicModule`

Defined in: [typeorm.module.ts:66](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/nest-typeorm/src/core/typeorm.module.ts#L66)

#### Parameters

##### options

`TypeOrmModuleAsyncOptions`

#### Returns

`DynamicModule`
