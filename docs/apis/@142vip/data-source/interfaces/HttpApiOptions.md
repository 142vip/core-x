[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / HttpApiOptions

# 接口: HttpApiOptions

定义于: [packages/data-source/src/core/apis/vip-http-api.ts:6](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/data-source/src/core/apis/vip-http-api.ts#L6)

## theme_extends

- [`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md)

## 属性

### adapter?

> `optional` **adapter?**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:332

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`adapter`](../../axios/interfaces/AxiosRequestConfig.md#adapter)

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:322

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`allowAbsoluteUrls`](../../axios/interfaces/AxiosRequestConfig.md#allowabsoluteurls)

***

### auth?

> `optional` **auth?**: `AxiosBasicCredentials`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:333

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`auth`](../../axios/interfaces/AxiosRequestConfig.md#auth)

***

### baseURL?

> `optional` **baseURL?**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:321

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`baseURL`](../../axios/interfaces/AxiosRequestConfig.md#baseurl)

***

### beforeRedirect?

> `optional` **beforeRedirect?**: (`options`, `responseDetails`) => `void`

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

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`beforeRedirect`](../../axios/interfaces/AxiosRequestConfig.md#beforeredirect)

***

### cancelToken?

> `optional` **cancelToken?**: `CancelToken`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:351

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`cancelToken`](../../axios/interfaces/AxiosRequestConfig.md#canceltoken)

***

### data?

> `optional` **data?**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:328

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`data`](../../axios/interfaces/AxiosRequestConfig.md#data)

***

### decompress?

> `optional` **decompress?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:352

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`decompress`](../../axios/interfaces/AxiosRequestConfig.md#decompress)

***

### env?

> `optional` **env?**: `object`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:356

#### FormData?

> `optional` **FormData?**: (...`args`) => `object`

##### 参数

###### args

...`any`[]

##### 返回

`object`

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`env`](../../axios/interfaces/AxiosRequestConfig.md#env)

***

### family?

> `optional` **family?**: `AddressFamily`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:360

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`family`](../../axios/interfaces/AxiosRequestConfig.md#family)

***

### fetchOptions?

> `optional` **fetchOptions?**: `Record`\<`string`, `any`\> \| `Omit`\<`RequestInit`, `"body"` \| `"headers"` \| `"method"` \| `"signal"`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:364

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`fetchOptions`](../../axios/interfaces/AxiosRequestConfig.md#fetchoptions)

***

### formSerializer?

> `optional` **formSerializer?**: `FormSerializerOptions`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:359

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`formSerializer`](../../axios/interfaces/AxiosRequestConfig.md#formserializer)

***

### headers?

> `optional` **headers?**: [`AxiosHeaders`](../../axios/interfaces/AxiosHeaders.md) \| `Partial`\<`RawAxiosHeaders` & `object` & `object`\> & `Partial`\<`object` & `object`\>

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:325

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`headers`](../../axios/interfaces/AxiosRequestConfig.md#headers)

***

### httpAgent?

> `optional` **httpAgent?**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:348

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`httpAgent`](../../axios/interfaces/AxiosRequestConfig.md#httpagent)

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:349

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`httpsAgent`](../../axios/interfaces/AxiosRequestConfig.md#httpsagent)

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:355

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`insecureHTTPParser`](../../axios/interfaces/AxiosRequestConfig.md#insecurehttpparser)

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<`LookupAddress` \| \[`LookupAddressEntry` \| `LookupAddressEntry`[], `AddressFamily`\]\>)

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:361

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`lookup`](../../axios/interfaces/AxiosRequestConfig.md#lookup)

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:342

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`maxBodyLength`](../../axios/interfaces/AxiosRequestConfig.md#maxbodylength)

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:340

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`maxContentLength`](../../axios/interfaces/AxiosRequestConfig.md#maxcontentlength)

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:344

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`maxRate`](../../axios/interfaces/AxiosRequestConfig.md#maxrate)

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:343

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`maxRedirects`](../../axios/interfaces/AxiosRequestConfig.md#maxredirects)

***

### method?

> `optional` **method?**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:320

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`method`](../../axios/interfaces/AxiosRequestConfig.md#method)

***

### onDownloadProgress?

> `optional` **onDownloadProgress?**: (`progressEvent`) => `void`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:339

#### 参数

##### progressEvent

`AxiosProgressEvent`

#### 返回

`void`

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`onDownloadProgress`](../../axios/interfaces/AxiosRequestConfig.md#ondownloadprogress)

***

### onUploadProgress?

> `optional` **onUploadProgress?**: (`progressEvent`) => `void`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:338

#### 参数

##### progressEvent

`AxiosProgressEvent`

#### 返回

`void`

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`onUploadProgress`](../../axios/interfaces/AxiosRequestConfig.md#onuploadprogress)

***

### params?

> `optional` **params?**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:326

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`params`](../../axios/interfaces/AxiosRequestConfig.md#params)

***

### paramsSerializer?

> `optional` **paramsSerializer?**: `ParamsSerializerOptions` \| `CustomParamsSerializer`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:327

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`paramsSerializer`](../../axios/interfaces/AxiosRequestConfig.md#paramsserializer)

***

### proxy?

> `optional` **proxy?**: `false` \| `AxiosProxyConfig`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:350

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`proxy`](../../axios/interfaces/AxiosRequestConfig.md#proxy)

***

### responseEncoding?

> `optional` **responseEncoding?**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:335

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`responseEncoding`](../../axios/interfaces/AxiosRequestConfig.md#responseencoding)

***

### responseType?

> `optional` **responseType?**: `ResponseType`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:334

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`responseType`](../../axios/interfaces/AxiosRequestConfig.md#responsetype)

***

### signal?

> `optional` **signal?**: `GenericAbortSignal`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:354

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`signal`](../../axios/interfaces/AxiosRequestConfig.md#signal)

***

### socketPath?

> `optional` **socketPath?**: `string` \| `null`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:346

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`socketPath`](../../axios/interfaces/AxiosRequestConfig.md#socketpath)

***

### timeout?

> `optional` **timeout?**: `number`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:329

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`timeout`](../../axios/interfaces/AxiosRequestConfig.md#timeout)

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:330

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`timeoutErrorMessage`](../../axios/interfaces/AxiosRequestConfig.md#timeouterrormessage)

***

### transformRequest?

> `optional` **transformRequest?**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:323

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`transformRequest`](../../axios/interfaces/AxiosRequestConfig.md#transformrequest)

***

### transformResponse?

> `optional` **transformResponse?**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:324

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`transformResponse`](../../axios/interfaces/AxiosRequestConfig.md#transformresponse)

***

### transitional?

> `optional` **transitional?**: `TransitionalOptions`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:353

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`transitional`](../../axios/interfaces/AxiosRequestConfig.md#transitional)

***

### transport?

> `optional` **transport?**: `any`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:347

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`transport`](../../axios/interfaces/AxiosRequestConfig.md#transport)

***

### url?

> `optional` **url?**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:319

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`url`](../../axios/interfaces/AxiosRequestConfig.md#url)

***

### validateStatus?

> `optional` **validateStatus?**: ((`status`) => `boolean`) \| `null`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:341

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`validateStatus`](../../axios/interfaces/AxiosRequestConfig.md#validatestatus)

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:331

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`withCredentials`](../../axios/interfaces/AxiosRequestConfig.md#withcredentials)

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:363

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`withXSRFToken`](../../axios/interfaces/AxiosRequestConfig.md#withxsrftoken)

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:336

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`xsrfCookieName`](../../axios/interfaces/AxiosRequestConfig.md#xsrfcookiename)

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

定义于: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:337

#### 继承自

[`AxiosRequestConfig`](../../axios/interfaces/AxiosRequestConfig.md).[`xsrfHeaderName`](../../axios/interfaces/AxiosRequestConfig.md#xsrfheadername)
