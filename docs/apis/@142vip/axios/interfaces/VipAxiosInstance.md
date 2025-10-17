[API 参考](../../../index.md) / [@142vip/axios](../index.md) / VipAxiosInstance

# 接口: VipAxiosInstance()

定义于: [packages/axios/src/core/axios.factory.ts:11](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L11)

VipAxios实例类型
- 继承自AxiosInstance，添加了自定义方法
- 提供了清除拦截器的方法
- 提供了获取默认配置的方法

## theme_extends

- `AxiosInstance`

## 调用签名

> **VipAxiosInstance**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

定义于: [packages/axios/src/core/axios.factory.ts:11](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L11)

VipAxios实例类型
- 继承自AxiosInstance，添加了自定义方法
- 提供了清除拦截器的方法
- 提供了获取默认配置的方法

### 类型参数

#### T

`T` = `any`

#### R

`R` = `AxiosResponse`\<`T`, `any`\>

#### D

`D` = `any`

### 参数

#### config

`AxiosRequestConfig`\<`D`\>

### 返回

`Promise`\<`R`\>

## 调用签名

> **VipAxiosInstance**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: [packages/axios/src/core/axios.factory.ts:11](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L11)

VipAxios实例类型
- 继承自AxiosInstance，添加了自定义方法
- 提供了清除拦截器的方法
- 提供了获取默认配置的方法

### 类型参数

#### T

`T` = `any`

#### R

`R` = `AxiosResponse`\<`T`, `any`\>

#### D

`D` = `any`

### 参数

#### url

`string`

#### config?

`AxiosRequestConfig`\<`D`\>

### 返回

`Promise`\<`R`\>

## 属性

### clearInterceptor()

> **clearInterceptor**: (`type`) => `void`

定义于: [packages/axios/src/core/axios.factory.ts:12](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L12)

#### 参数

##### type

[`InterceptorType`](../enumerations/InterceptorType.md)

#### 返回

`void`

***

### defaults

> **defaults**: `Omit`\<`AxiosDefaults`\<`any`\>, `"headers"`\> & `object`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:518

#### 类型声明

##### headers

> **headers**: `HeadersDefaults` & `object`

#### 继承自

`AxiosInstance.defaults`

***

### getConfig()

> **getConfig**: () => `undefined` \| `CreateAxiosDefaults`\<`any`\>

定义于: [packages/axios/src/core/axios.factory.ts:13](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L13)

#### 返回

`undefined` \| `CreateAxiosDefaults`\<`any`\>

***

### interceptors

> **interceptors**: `object`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:495

#### request

> **request**: `AxiosInterceptorManager`\<`InternalAxiosRequestConfig`\<`any`\>\>

#### response

> **response**: `AxiosInterceptorManager`\<`AxiosResponse`\<`any`, `any`\>\>

#### 继承自

`AxiosInstance.interceptors`

## 方法

### create()

> **create**(`config?`): `AxiosInstance`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:517

#### 参数

##### config?

`CreateAxiosDefaults`\<`any`\>

#### 返回

`AxiosInstance`

#### 继承自

`AxiosInstance.create`

***

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:502

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.delete`

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:501

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.get`

***

### getUri()

> **getUri**(`config?`): `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:499

#### 参数

##### config?

`AxiosRequestConfig`\<`any`\>

#### 返回

`string`

#### 继承自

`AxiosInstance.getUri`

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:503

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.head`

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:504

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.options`

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:507

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.patch`

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:510

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.patchForm`

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:505

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.post`

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:508

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.postForm`

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:506

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.put`

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:509

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### url

`string`

##### data?

`D`

##### config?

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.putForm`

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:500

#### 类型参数

##### T

`T` = `any`

##### R

`R` = `AxiosResponse`\<`T`, `any`\>

##### D

`D` = `any`

#### 参数

##### config

`AxiosRequestConfig`\<`D`\>

#### 返回

`Promise`\<`R`\>

#### 继承自

`AxiosInstance.request`
