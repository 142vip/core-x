[API 参考](../../../index.md) / [@142vip/axios](../index.md) / AxiosInstance

# 接口: AxiosInstance()

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:667

## theme_extends

- `Axios`

## theme_extended_by

- [`VipAxiosInstance`](VipAxiosInstance.md)

## 调用签名

> **AxiosInstance**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:668

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

> **AxiosInstance**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:669

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

### defaults

> **defaults**: `Omit`\<`AxiosDefaults`\<`any`\>, `"headers"`\> & `object`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:672

#### 类型声明

##### headers

> **headers**: `HeadersDefaults` & `object`

#### 重写了

`Axios.defaults`

***

### interceptors

> **interceptors**: `object`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:608

#### request

> **request**: `AxiosInterceptorManager`\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: `AxiosInterceptorManager`\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`, \{ \}\>\>

#### 继承自

`Axios.interceptors`

## 方法

### create()

> **create**(`config?`): `AxiosInstance`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:671

#### 参数

##### config?

[`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`\>

#### 返回

`AxiosInstance`

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

`Axios.delete`

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

`Axios.get`

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

`Axios.getUri`

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

`Axios.head`

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

`Axios.options`

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

`Axios.patch`

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

`Axios.patchForm`

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

`Axios.post`

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

`Axios.postForm`

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

`Axios.put`

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

`Axios.putForm`

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

`Axios.query`

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

`Axios.request`
