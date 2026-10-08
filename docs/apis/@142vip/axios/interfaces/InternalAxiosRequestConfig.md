[API 参考](../../../index.md) / [@142vip/axios](../index.md) / InternalAxiosRequestConfig

# 接口: InternalAxiosRequestConfig\<D\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:460

## theme_extends

- [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## 类型参数

### D

`D` = `any`

## 属性

### adapter?

> `optional` **adapter?**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:383

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`adapter`](AxiosRequestConfig.md#adapter)

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:373

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`allowAbsoluteUrls`](AxiosRequestConfig.md#allowabsoluteurls)

***

### allowedSocketPaths?

> `optional` **allowedSocketPaths?**: `string` \| `string`[] \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:409

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`allowedSocketPaths`](AxiosRequestConfig.md#allowedsocketpaths)

***

### auth?

> `optional` **auth?**: `AxiosBasicCredentials`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:384

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`auth`](AxiosRequestConfig.md#auth)

***

### axios-retry?

> `optional` **axios-retry?**: `IAxiosRetryConfigExtended`

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:69

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`axios-retry`](AxiosRequestConfig.md#axios-retry)

***

### baseURL?

> `optional` **baseURL?**: `string`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:372

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`baseURL`](AxiosRequestConfig.md#baseurl)

***

### beforeRedirect?

> `optional` **beforeRedirect?**: (`options`, `responseDetails`, `requestDetails`) => `void`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:396

#### 参数

##### options

`Record`\<`string`, `any`\>

##### responseDetails

###### headers

`Record`\<`string`, `string`\>

###### statusCode

`HttpStatusCode`

##### requestDetails

###### headers

`Record`\<`string`, `string`\>

###### method

`string`

###### url

`string`

#### 返回

`void`

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`beforeRedirect`](AxiosRequestConfig.md#beforeredirect)

***

### cancelToken?

> `optional` **cancelToken?**: `CancelToken`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:414

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`cancelToken`](AxiosRequestConfig.md#canceltoken)

***

### data?

> `optional` **data?**: `D`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:379

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`data`](AxiosRequestConfig.md#data)

***

### decompress?

> `optional` **decompress?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:415

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`decompress`](AxiosRequestConfig.md#decompress)

***

### env?

> `optional` **env?**: `object`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:419

#### fetch?

> `optional` **fetch?**: (`input`, `init?`) => `Promise`\<`Response`\>

##### 参数

###### input

`string` \| `URL` \| `Request`

###### init?

`RequestInit`

##### 返回

`Promise`\<`Response`\>

#### FormData?

> `optional` **FormData?**: (...`args`) => `object`

##### 参数

###### args

...`any`[]

##### 返回

`object`

#### Request?

> `optional` **Request?**: (`input`, `init?`) => `Request`

##### 参数

###### input

`string` \| `URL` \| `Request`

###### init?

`RequestInit`

##### 返回

`Request`

#### Response?

> `optional` **Response?**: (`body?`, `init?`) => `Response`

##### 参数

###### body?

`string` \| `Blob` \| `ArrayBuffer` \| `FormData` \| `URLSearchParams` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `null`

###### init?

`ResponseInit`

##### 返回

`Response`

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`env`](AxiosRequestConfig.md#env)

***

### family?

> `optional` **family?**: `AddressFamily`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:429

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`family`](AxiosRequestConfig.md#family)

***

### fetchOptions?

> `optional` **fetchOptions?**: `Omit`\<`RequestInit`, `"headers"` \| `"method"` \| `"signal"` \| `"body"`\> \| `Record`\<`string`, `any`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:448

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`fetchOptions`](AxiosRequestConfig.md#fetchoptions)

***

### formDataHeaderPolicy?

> `optional` **formDataHeaderPolicy?**: `"legacy"` \| `"content-only"`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:453

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formDataHeaderPolicy`](AxiosRequestConfig.md#formdataheaderpolicy)

***

### formSerializer?

> `optional` **formSerializer?**: `FormSerializerOptions`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:428

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formSerializer`](AxiosRequestConfig.md#formserializer)

***

### headers

> **headers**: `AxiosRequestHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:461

#### 重写了

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`headers`](AxiosRequestConfig.md#headers)

***

### http2Options?

> `optional` **http2Options?**: `Record`\<`string`, `any`\> & `object`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:450

#### 类型声明

##### sessionTimeout?

> `optional` **sessionTimeout?**: `number`

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`http2Options`](AxiosRequestConfig.md#http2options)

***

### httpAgent?

> `optional` **httpAgent?**: `any`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:411

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpAgent`](AxiosRequestConfig.md#httpagent)

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:412

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpsAgent`](AxiosRequestConfig.md#httpsagent)

***

### httpVersion?

> `optional` **httpVersion?**: `2` \| `1`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:449

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpVersion`](AxiosRequestConfig.md#httpversion)

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:418

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`insecureHTTPParser`](AxiosRequestConfig.md#insecurehttpparser)

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<`LookupAddress` \| \[`LookupAddressEntry` \| `LookupAddressEntry`[], `AddressFamily`\]\>)

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:430

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`lookup`](AxiosRequestConfig.md#lookup)

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:393

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxBodyLength`](AxiosRequestConfig.md#maxbodylength)

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:391

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxContentLength`](AxiosRequestConfig.md#maxcontentlength)

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:395

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRate`](AxiosRequestConfig.md#maxrate)

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:394

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRedirects`](AxiosRequestConfig.md#maxredirects)

***

### method?

> `optional` **method?**: `StringLiteralsOrString`\<`Method`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:371

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`method`](AxiosRequestConfig.md#method)

***

### onDownloadProgress?

> `optional` **onDownloadProgress?**: (`progressEvent`) => `void`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:390

#### 参数

##### progressEvent

`AxiosProgressEvent`

#### 返回

`void`

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onDownloadProgress`](AxiosRequestConfig.md#ondownloadprogress)

***

### onUploadProgress?

> `optional` **onUploadProgress?**: (`progressEvent`) => `void`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:389

#### 参数

##### progressEvent

`AxiosProgressEvent`

#### 返回

`void`

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onUploadProgress`](AxiosRequestConfig.md#onuploadprogress)

***

### params?

> `optional` **params?**: `any`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:377

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`params`](AxiosRequestConfig.md#params)

***

### paramsSerializer?

> `optional` **paramsSerializer?**: `ParamsSerializerOptions` \| `CustomParamsSerializer`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:378

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`paramsSerializer`](AxiosRequestConfig.md#paramsserializer)

***

### parseReviver?

> `optional` **parseReviver?**: (`this`, `key`, `value`, `context?`) => `any`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:447

#### 参数

##### this

`any`

##### key

`string`

##### value

`any`

##### context?

###### source?

`string`

#### 返回

`any`

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`parseReviver`](AxiosRequestConfig.md#parsereviver)

***

### proxy?

> `optional` **proxy?**: `false` \| `AxiosProxyConfig`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:413

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`proxy`](AxiosRequestConfig.md#proxy)

***

### redact?

> `optional` **redact?**: `string`[]

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:454

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`redact`](AxiosRequestConfig.md#redact)

***

### responseEncoding?

> `optional` **responseEncoding?**: `StringLiteralsOrString`\<[`responseEncoding`](CreateAxiosDefaults.md#responseencoding)\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:386

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseEncoding`](AxiosRequestConfig.md#responseencoding)

***

### responseType?

> `optional` **responseType?**: `ResponseType`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:385

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseType`](AxiosRequestConfig.md#responsetype)

***

### signal?

> `optional` **signal?**: `GenericAbortSignal`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:417

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`signal`](AxiosRequestConfig.md#signal)

***

### socketPath?

> `optional` **socketPath?**: `string` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:408

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`socketPath`](AxiosRequestConfig.md#socketpath)

***

### timeout?

> `optional` **timeout?**: `number`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:380

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeout`](AxiosRequestConfig.md#timeout)

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:381

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeoutErrorMessage`](AxiosRequestConfig.md#timeouterrormessage)

***

### transformRequest?

> `optional` **transformRequest?**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:374

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformRequest`](AxiosRequestConfig.md#transformrequest)

***

### transformResponse?

> `optional` **transformResponse?**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:375

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformResponse`](AxiosRequestConfig.md#transformresponse)

***

### transitional?

> `optional` **transitional?**: `TransitionalOptions`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:416

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transitional`](AxiosRequestConfig.md#transitional)

***

### transport?

> `optional` **transport?**: `any`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:410

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transport`](AxiosRequestConfig.md#transport)

***

### url?

> `optional` **url?**: `string`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:370

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`url`](AxiosRequestConfig.md#url)

***

### validateStatus?

> `optional` **validateStatus?**: ((`status`) => `boolean`) \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:392

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`validateStatus`](AxiosRequestConfig.md#validatestatus)

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:382

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withCredentials`](AxiosRequestConfig.md#withcredentials)

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:446

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withXSRFToken`](AxiosRequestConfig.md#withxsrftoken)

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:387

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfCookieName`](AxiosRequestConfig.md#xsrfcookiename)

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:388

#### 继承自

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfHeaderName`](AxiosRequestConfig.md#xsrfheadername)
