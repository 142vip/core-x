[API 参考](../../../index.md) / [@142vip/axios](../index.md) / AxiosError

# 接口: AxiosError\<T, D\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:496

## theme_extends

- `Error`

## 类型参数

### T

`T` = `unknown`

### D

`D` = `any`

## 属性

### cause?

> `optional` **cause?**: `Error`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:512

#### 重写了

`Error.cause`

***

### code?

> `optional` **code?**: `string`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:506

***

### config?

> `optional` **config?**: [`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`D`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:505

***

### event?

> `optional` **event?**: `any`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:513

***

### isAxiosError

> **isAxiosError**: `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:509

***

### message

> **message**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### 继承自

`Error.message`

***

### name

> **name**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### 继承自

`Error.name`

***

### request?

> `optional` **request?**: `any`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:507

***

### response?

> `optional` **response?**: [`AxiosResponse`](AxiosResponse.md)\<`T`, `D`, \{ \}\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:508

***

### stack?

> `optional` **stack?**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### 继承自

`Error.stack`

***

### status?

> `optional` **status?**: `number`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:510

***

### toJSON

> **toJSON**: () => `object`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:511

#### 返回

`object`
