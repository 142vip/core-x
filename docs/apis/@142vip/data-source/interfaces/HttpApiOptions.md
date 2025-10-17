[API 参考](../../../index.md) / [@142vip/data-source](../index.md) / HttpApiOptions

# Interface: HttpApiOptions

Defined in: [packages/data-source/src/core/apis/vip-http-api.ts:6](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/data-source/src/core/apis/vip-http-api.ts#L6)

## Extends

- `AxiosRequestConfig`

## Properties

### adapter?

> `optional` **adapter**: `AxiosAdapterConfig` \| `AxiosAdapterConfig`[]

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:332

#### Inherited from

`AxiosRequestConfig.adapter`

***

### allowAbsoluteUrls?

> `optional` **allowAbsoluteUrls**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:322

#### Inherited from

`AxiosRequestConfig.allowAbsoluteUrls`

***

### auth?

> `optional` **auth**: `AxiosBasicCredentials`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:333

#### Inherited from

`AxiosRequestConfig.auth`

***

### baseURL?

> `optional` **baseURL**: `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:321

#### Inherited from

`AxiosRequestConfig.baseURL`

***

### beforeRedirect()?

> `optional` **beforeRedirect**: (`options`, `responseDetails`) => `void`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:345

#### Parameters

##### options

`Record`\<`string`, `any`\>

##### responseDetails

###### headers

`Record`\<`string`, `string`\>

###### statusCode

`HttpStatusCode`

#### Returns

`void`

#### Inherited from

`AxiosRequestConfig.beforeRedirect`

***

### cancelToken?

> `optional` **cancelToken**: `CancelToken`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:351

#### Inherited from

`AxiosRequestConfig.cancelToken`

***

### data?

> `optional` **data**: `any`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:328

#### Inherited from

`AxiosRequestConfig.data`

***

### decompress?

> `optional` **decompress**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:352

#### Inherited from

`AxiosRequestConfig.decompress`

***

### env?

> `optional` **env**: `object`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:356

#### FormData()?

> `optional` **FormData**: (...`args`) => `object`

##### Parameters

###### args

...`any`[]

##### Returns

`object`

#### Inherited from

`AxiosRequestConfig.env`

***

### family?

> `optional` **family**: `AddressFamily`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:360

#### Inherited from

`AxiosRequestConfig.family`

***

### fetchOptions?

> `optional` **fetchOptions**: `Record`\<`string`, `any`\> \| `Omit`\<`RequestInit`, `"body"` \| `"headers"` \| `"method"` \| `"signal"`\>

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:364

#### Inherited from

`AxiosRequestConfig.fetchOptions`

***

### formSerializer?

> `optional` **formSerializer**: `FormSerializerOptions`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:359

#### Inherited from

`AxiosRequestConfig.formSerializer`

***

### headers?

> `optional` **headers**: `AxiosHeaders` \| `Partial`\<`RawAxiosHeaders` & `object` & `object`\> & `Partial`\<`object` & `object`\>

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:325

#### Inherited from

`AxiosRequestConfig.headers`

***

### httpAgent?

> `optional` **httpAgent**: `any`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:348

#### Inherited from

`AxiosRequestConfig.httpAgent`

***

### httpsAgent?

> `optional` **httpsAgent**: `any`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:349

#### Inherited from

`AxiosRequestConfig.httpsAgent`

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:355

#### Inherited from

`AxiosRequestConfig.insecureHTTPParser`

***

### lookup?

> `optional` **lookup**: (`hostname`, `options`, `cb`) => `void` \| (`hostname`, `options`) => `Promise`\<`LookupAddress` \| \[`LookupAddressEntry` \| `LookupAddressEntry`[], `AddressFamily`\]\>

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:361

#### Inherited from

`AxiosRequestConfig.lookup`

***

### maxBodyLength?

> `optional` **maxBodyLength**: `number`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:342

#### Inherited from

`AxiosRequestConfig.maxBodyLength`

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:340

#### Inherited from

`AxiosRequestConfig.maxContentLength`

***

### maxRate?

> `optional` **maxRate**: `number` \| \[`number`, `number`\]

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:344

#### Inherited from

`AxiosRequestConfig.maxRate`

***

### maxRedirects?

> `optional` **maxRedirects**: `number`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:343

#### Inherited from

`AxiosRequestConfig.maxRedirects`

***

### method?

> `optional` **method**: `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:320

#### Inherited from

`AxiosRequestConfig.method`

***

### onDownloadProgress()?

> `optional` **onDownloadProgress**: (`progressEvent`) => `void`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:339

#### Parameters

##### progressEvent

`AxiosProgressEvent`

#### Returns

`void`

#### Inherited from

`AxiosRequestConfig.onDownloadProgress`

***

### onUploadProgress()?

> `optional` **onUploadProgress**: (`progressEvent`) => `void`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:338

#### Parameters

##### progressEvent

`AxiosProgressEvent`

#### Returns

`void`

#### Inherited from

`AxiosRequestConfig.onUploadProgress`

***

### params?

> `optional` **params**: `any`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:326

#### Inherited from

`AxiosRequestConfig.params`

***

### paramsSerializer?

> `optional` **paramsSerializer**: `ParamsSerializerOptions` \| `CustomParamsSerializer`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:327

#### Inherited from

`AxiosRequestConfig.paramsSerializer`

***

### proxy?

> `optional` **proxy**: `false` \| `AxiosProxyConfig`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:350

#### Inherited from

`AxiosRequestConfig.proxy`

***

### responseEncoding?

> `optional` **responseEncoding**: `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:335

#### Inherited from

`AxiosRequestConfig.responseEncoding`

***

### responseType?

> `optional` **responseType**: `ResponseType`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:334

#### Inherited from

`AxiosRequestConfig.responseType`

***

### signal?

> `optional` **signal**: `GenericAbortSignal`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:354

#### Inherited from

`AxiosRequestConfig.signal`

***

### socketPath?

> `optional` **socketPath**: `null` \| `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:346

#### Inherited from

`AxiosRequestConfig.socketPath`

***

### timeout?

> `optional` **timeout**: `number`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:329

#### Inherited from

`AxiosRequestConfig.timeout`

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage**: `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:330

#### Inherited from

`AxiosRequestConfig.timeoutErrorMessage`

***

### transformRequest?

> `optional` **transformRequest**: `AxiosRequestTransformer` \| `AxiosRequestTransformer`[]

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:323

#### Inherited from

`AxiosRequestConfig.transformRequest`

***

### transformResponse?

> `optional` **transformResponse**: `AxiosResponseTransformer` \| `AxiosResponseTransformer`[]

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:324

#### Inherited from

`AxiosRequestConfig.transformResponse`

***

### transitional?

> `optional` **transitional**: `TransitionalOptions`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:353

#### Inherited from

`AxiosRequestConfig.transitional`

***

### transport?

> `optional` **transport**: `any`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:347

#### Inherited from

`AxiosRequestConfig.transport`

***

### url?

> `optional` **url**: `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:319

#### Inherited from

`AxiosRequestConfig.url`

***

### validateStatus?

> `optional` **validateStatus**: `null` \| (`status`) => `boolean`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:341

#### Inherited from

`AxiosRequestConfig.validateStatus`

***

### withCredentials?

> `optional` **withCredentials**: `boolean`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:331

#### Inherited from

`AxiosRequestConfig.withCredentials`

***

### withXSRFToken?

> `optional` **withXSRFToken**: `boolean` \| (`config`) => `undefined` \| `boolean`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:363

#### Inherited from

`AxiosRequestConfig.withXSRFToken`

***

### xsrfCookieName?

> `optional` **xsrfCookieName**: `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:336

#### Inherited from

`AxiosRequestConfig.xsrfCookieName`

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName**: `string`

Defined in: node\_modules/.pnpm/axios@1.11.0/node\_modules/axios/index.d.ts:337

#### Inherited from

`AxiosRequestConfig.xsrfHeaderName`
