[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / HttpApiOptions

# 接口: HttpApiOptions

定义于: [packages/data-source/src/core/apis/vip-http-api.ts:6](https://github.com/142vip/core-x/blob/58a4aca72f73ebc92491a458c9b83754486dc296/packages/data-source/src/core/apis/vip-http-api.ts#L6)

## theme_extends

- `AxiosRequestConfig`

## 属性

### adapter?

> `optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:332

#### 继承自

`AxiosRequestConfig.adapter`

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:322

#### 继承自

`AxiosRequestConfig.allowAbsoluteUrls`

***

### auth?

> `optional` **auth**: `AxiosBasicCredentials`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:333

#### 继承自

`AxiosRequestConfig.auth`

***

### baseURL?

> `optional` **baseURL**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:321

#### 继承自

`AxiosRequestConfig.baseURL`

***

### beforeRedirect()?

> `optional` **beforeRedirect**: (`options`, `responseDetails`) => `void`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:345

#### 参数

##### options

`Record`\<`string`, `any`\>

##### responseDetails

###### headers

`Record`\<`string`, `string`\>

###### statusCode

`HttpStatusCode`

#### 返回

`void`

#### 继承自

`AxiosRequestConfig.beforeRedirect`

***

### cancelToken?

> `optional` **cancelToken**: `CancelToken`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:351

#### 继承自

`AxiosRequestConfig.cancelToken`

***

### data?

> `optional` **data**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:328

#### 继承自

`AxiosRequestConfig.data`

***

### decompress?

> `optional` **decompress**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:352

#### 继承自

`AxiosRequestConfig.decompress`

***

### env?

> `optional` **env**: `object`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:356

#### FormData()?

> `optional` **FormData**: (...`args`) => `object`

##### 参数

###### args

...`any`[]

##### 返回

`object`

#### 继承自

`AxiosRequestConfig.env`

***

### family?

> `optional` **family**: `AddressFamily`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:360

#### 继承自

`AxiosRequestConfig.family`

***

### fetchOptions?

> `optional` **fetchOptions**: `Record`\<`string`, `any`\> \| `Omit`\<`RequestInit`, `"body"` \| `"headers"` \| `"method"` \| `"signal"`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:364

#### 继承自

`AxiosRequestConfig.fetchOptions`

***

### formSerializer?

> `optional` **formSerializer**: `FormSerializerOptions`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:359

#### 继承自

`AxiosRequestConfig.formSerializer`

***

### headers?

> `optional` **headers**: `AxiosHeaders` \| `Partial`\<`RawAxiosHeaders` & `object` & `object`\> & `Partial`\<`object` & `object`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:325

#### 继承自

`AxiosRequestConfig.headers`

***

### httpAgent?

> `optional` **httpAgent**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:348

#### 继承自

`AxiosRequestConfig.httpAgent`

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:349

#### 继承自

`AxiosRequestConfig.httpsAgent`

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:355

#### 继承自

`AxiosRequestConfig.insecureHTTPParser`

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<`LookupAddress` \| \[`LookupAddressEntry` \| `LookupAddressEntry`[], `AddressFamily`\]\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:361

#### 继承自

`AxiosRequestConfig.lookup`

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:342

#### 继承自

`AxiosRequestConfig.maxBodyLength`

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:340

#### 继承自

`AxiosRequestConfig.maxContentLength`

***

### maxRate?

> `optional` **maxRate**: `number` \| \[`number`, `number`\]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:344

#### 继承自

`AxiosRequestConfig.maxRate`

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:343

#### 继承自

`AxiosRequestConfig.maxRedirects`

***

### method?

> `optional` **method**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:320

#### 继承自

`AxiosRequestConfig.method`

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:339

#### 参数

##### progressEvent

`AxiosProgressEvent`

#### 返回

`void`

#### 继承自

`AxiosRequestConfig.onDownloadProgress`

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:338

#### 参数

##### progressEvent

`AxiosProgressEvent`

#### 返回

`void`

#### 继承自

`AxiosRequestConfig.onUploadProgress`

***

### params?

> `optional` **params**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:326

#### 继承自

`AxiosRequestConfig.params`

***

### paramsSerializer?

> `optional` **paramsSerializer**: `ParamsSerializerOptions` \| `CustomParamsSerializer`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:327

#### 继承自

`AxiosRequestConfig.paramsSerializer`

***

### proxy?

> `optional` **proxy**: `false` \| `AxiosProxyConfig`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:350

#### 继承自

`AxiosRequestConfig.proxy`

***

### responseEncoding?

> `optional` **responseEncoding**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:335

#### 继承自

`AxiosRequestConfig.responseEncoding`

***

### responseType?

> `optional` **responseType**: `ResponseType`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:334

#### 继承自

`AxiosRequestConfig.responseType`

***

### signal?

> `optional` **signal**: `GenericAbortSignal`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:354

#### 继承自

`AxiosRequestConfig.signal`

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:346

#### 继承自

`AxiosRequestConfig.socketPath`

***

### timeout?

> `optional` **timeout**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:329

#### 继承自

`AxiosRequestConfig.timeout`

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:330

#### 继承自

`AxiosRequestConfig.timeoutErrorMessage`

***

### transformRequest?

> `optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:323

#### 继承自

`AxiosRequestConfig.transformRequest`

***

### transformResponse?

> `optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:324

#### 继承自

`AxiosRequestConfig.transformResponse`

***

### transitional?

> `optional` **transitional**: `TransitionalOptions`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:353

#### 继承自

`AxiosRequestConfig.transitional`

***

### transport?

> `optional` **transport**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:347

#### 继承自

`AxiosRequestConfig.transport`

***

### url?

> `optional` **url**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:319

#### 继承自

`AxiosRequestConfig.url`

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:341

#### 继承自

`AxiosRequestConfig.validateStatus`

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:331

#### 继承自

`AxiosRequestConfig.withCredentials`

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:363

#### 继承自

`AxiosRequestConfig.withXSRFToken`

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:336

#### 继承自

`AxiosRequestConfig.xsrfCookieName`

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:337

#### 继承自

`AxiosRequestConfig.xsrfHeaderName`
