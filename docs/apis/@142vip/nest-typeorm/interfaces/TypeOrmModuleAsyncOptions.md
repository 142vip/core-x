[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TypeOrmModuleAsyncOptions

# 接口: TypeOrmModuleAsyncOptions

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:42

## theme_extends

- `Pick`\<`ModuleMetadata`, `"imports"`\>

## 属性

### dataSourceFactory?

> `optional` **dataSourceFactory?**: [`TypeOrmDataSourceFactory`](../type-aliases/TypeOrmDataSourceFactory.md)

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:47

***

### extraProviders?

> `optional` **extraProviders?**: `Provider`[]

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:49

***

### imports?

> `optional` **imports?**: (`DynamicModule` \| `Type`\<`any`\> \| `Promise`\<`DynamicModule`\> \| `ForwardReference`\<`any`\>)[]

定义于: node\_modules/.pnpm/@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_reflect-metadata@0.2.2\_rxjs@7.8.2/node\_modules/@nestjs/common/interfaces/modules/module-metadata.interface.d.ts:18

Optional list of imported modules that export the providers which are
required in this module.

#### 继承自

`Pick.imports`

***

### inject?

> `optional` **inject?**: `any`[]

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:48

***

### name?

> `optional` **name?**: `string`

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:43

***

### useClass?

> `optional` **useClass?**: `Type`\<[`TypeOrmOptionsFactory`](TypeOrmOptionsFactory.md)\>

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:45

***

### useExisting?

> `optional` **useExisting?**: `Type`\<[`TypeOrmOptionsFactory`](TypeOrmOptionsFactory.md)\>

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:44

***

### useFactory?

> `optional` **useFactory?**: (...`args`) => [`TypeOrmModuleOptions`](../type-aliases/TypeOrmModuleOptions.md) \| `Promise`\<[`TypeOrmModuleOptions`](../type-aliases/TypeOrmModuleOptions.md)\>

定义于: node\_modules/.pnpm/@nestjs+typeorm@11.0.0\_@nestjs+common@11.1.27\_class-transformer@0.5.1\_class-validator@0.15.1\_\_w3l2nzzfdqmsbyfdcl3hv65nci/node\_modules/@nestjs/typeorm/dist/interfaces/typeorm-options.interface.d.ts:46

#### 参数

##### args

...`any`[]

#### 返回

[`TypeOrmModuleOptions`](../type-aliases/TypeOrmModuleOptions.md) \| `Promise`\<[`TypeOrmModuleOptions`](../type-aliases/TypeOrmModuleOptions.md)\>
