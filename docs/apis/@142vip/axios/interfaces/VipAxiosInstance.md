[API 参考](../../../index.md) / [@142vip/axios](../index.md) / VipAxiosInstance

# 接口: VipAxiosInstance()

定义于: [packages/axios/src/core/axios.factory.ts:11](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/axios/src/core/axios.factory.ts#L11)

VipAxios实例类型
- 继承自AxiosInstance，添加了自定义方法
- 提供了清除拦截器的方法
- 提供了获取默认配置的方法

## theme_extends

- [`AxiosInstance`](AxiosInstance.md)

## 调用签名

> **VipAxiosInstance**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

定义于: [packages/axios/src/core/axios.factory.ts:11](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/axios/src/core/axios.factory.ts#L11)

VipAxios实例类型
- 继承自AxiosInstance，添加了自定义方法
- 提供了清除拦截器的方法
- 提供了获取默认配置的方法

### 类型参数

#### T

`T` = `any`

#### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

#### D

`D` = `any`

### 参数

#### config

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

### 返回

`Promise`\<`R`\>

## 调用签名

> **VipAxiosInstance**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: [packages/axios/src/core/axios.factory.ts:11](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/axios/src/core/axios.factory.ts#L11)

VipAxios实例类型
- 继承自AxiosInstance，添加了自定义方法
- 提供了清除拦截器的方法
- 提供了获取默认配置的方法

### 类型参数

#### T

`T` = `any`

#### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

#### D

`D` = `any`

### 参数

#### url

`string`

#### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

### 返回

`Promise`\<`R`\>

## 属性

### clearInterceptor

> **clearInterceptor**: (`type`) => `void`

定义于: [packages/axios/src/core/axios.factory.ts:12](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/axios/src/core/axios.factory.ts#L12)

#### 参数

##### type

[`InterceptorType`](../enumerations/InterceptorType.md)

#### 返回

`void`

***

### defaults

> **defaults**: `Omit`\<`AxiosDefaults`\<`any`\>, `"headers"`\> & `object`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:672

#### 类型声明

##### headers

> **headers**: `HeadersDefaults` & `object`

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`defaults`](AxiosInstance.md#defaults)

***

### getConfig

> **getConfig**: () => [`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`\> \| `undefined`

定义于: [packages/axios/src/core/axios.factory.ts:13](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/axios/src/core/axios.factory.ts#L13)

#### 返回

[`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`\> \| `undefined`

***

### interceptors

> **interceptors**: `object`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:608

#### request

> **request**: `AxiosInterceptorManager`\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: `AxiosInterceptorManager`\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`, \{ \}\>\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`interceptors`](AxiosInstance.md#interceptors)

## 方法

### create()

> **create**(`config?`): [`AxiosInstance`](AxiosInstance.md)

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:671

#### 参数

##### config?

[`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`\>

#### 返回

[`AxiosInstance`](AxiosInstance.md)

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`create`](AxiosInstance.md#create)

***

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:618

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`delete`](AxiosInstance.md#delete)

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:614

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`get`](AxiosInstance.md#get)

***

### getUri()

> **getUri**(`config?`): `string`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:612

#### 参数

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`any`\>

#### 返回

`string`

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`getUri`](AxiosInstance.md#geturi)

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:622

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`head`](AxiosInstance.md#head)

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:626

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`options`](AxiosInstance.md#options)

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:640

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`patch`](AxiosInstance.md#patch)

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:655

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`patchForm`](AxiosInstance.md#patchform)

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:630

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`post`](AxiosInstance.md#post)

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:645

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`postForm`](AxiosInstance.md#postform)

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:635

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`put`](AxiosInstance.md#put)

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:650

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`putForm`](AxiosInstance.md#putform)

***

### query()

> **query**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:660

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`query`](AxiosInstance.md#query)

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:613

#### 类型参数

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`, \{ \}\>

##### D

`D` = `any`

#### 参数

##### config

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

[`AxiosInstance`](AxiosInstance.md).[`request`](AxiosInstance.md#request)
