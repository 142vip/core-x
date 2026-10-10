[API 参考](../../../index.md) / [@142vip/axios](../index.md) / AxiosHeaders

# 接口: AxiosHeaders

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:23

## 可索引

> \[`key`: `string`\]: `any`

## 方法

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<\[`string`, `AxiosHeaderValue`\]\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:94

#### 返回

`IterableIterator`\<\[`string`, `AxiosHeaderValue`\]\>

***

### clear()

> **clear**(`matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:42

#### 参数

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### concat()

> **concat**(...`targets`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:46

#### 参数

##### targets

...(`string` \| `RawAxiosHeaders` \| `AxiosHeaders` \| `null` \| `undefined`)[]

#### 返回

`AxiosHeaders`

***

### delete()

> **delete**(`header`, `matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:40

#### 参数

##### header

`string` \| `string`[]

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### get()

#### 调用签名

> **get**(`headerName`, `parser`): `RegExpExecArray` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:35

##### 参数

###### headerName

`string`

###### parser

`RegExp`

##### 返回

`RegExpExecArray` \| `null`

#### 调用签名

> **get**(`headerName`, `matcher?`): `AxiosHeaderValue`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:36

##### 参数

###### headerName

`string`

###### matcher?

`true` \| `AxiosHeaderParser`

##### 返回

`AxiosHeaderValue`

***

### getAccept()

#### 调用签名

> **getAccept**(`parser?`): `RegExpExecArray` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:73

##### 参数

###### parser?

`RegExp`

##### 返回

`RegExpExecArray` \| `null`

#### 调用签名

> **getAccept**(`matcher?`): `AxiosHeaderValue`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:74

##### 参数

###### matcher?

`AxiosHeaderMatcher`

##### 返回

`AxiosHeaderValue`

***

### getAuthorization()

#### 调用签名

> **getAuthorization**(`parser?`): `RegExpExecArray` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:88

##### 参数

###### parser?

`RegExp`

##### 返回

`RegExpExecArray` \| `null`

#### 调用签名

> **getAuthorization**(`matcher?`): `AxiosHeaderValue`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:89

##### 参数

###### matcher?

`AxiosHeaderMatcher`

##### 返回

`AxiosHeaderValue`

***

### getContentEncoding()

#### 调用签名

> **getContentEncoding**(`parser?`): `RegExpExecArray` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:83

##### 参数

###### parser?

`RegExp`

##### 返回

`RegExpExecArray` \| `null`

#### 调用签名

> **getContentEncoding**(`matcher?`): `AxiosHeaderValue`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:84

##### 参数

###### matcher?

`AxiosHeaderMatcher`

##### 返回

`AxiosHeaderValue`

***

### getContentLength()

#### 调用签名

> **getContentLength**(`parser?`): `RegExpExecArray` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:68

##### 参数

###### parser?

`RegExp`

##### 返回

`RegExpExecArray` \| `null`

#### 调用签名

> **getContentLength**(`matcher?`): `AxiosHeaderValue`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:69

##### 参数

###### matcher?

`AxiosHeaderMatcher`

##### 返回

`AxiosHeaderValue`

***

### getContentType()

#### 调用签名

> **getContentType**(`parser?`): `RegExpExecArray` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:63

##### 参数

###### parser?

`RegExp`

##### 返回

`RegExpExecArray` \| `null`

#### 调用签名

> **getContentType**(`matcher?`): `AxiosHeaderValue`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:64

##### 参数

###### matcher?

`AxiosHeaderMatcher`

##### 返回

`AxiosHeaderValue`

***

### getSetCookie()

> **getSetCookie**(): `string`[]

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:92

#### 返回

`string`[]

***

### getUserAgent()

#### 调用签名

> **getUserAgent**(`parser?`): `RegExpExecArray` \| `null`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:78

##### 参数

###### parser?

`RegExp`

##### 返回

`RegExpExecArray` \| `null`

#### 调用签名

> **getUserAgent**(`matcher?`): `AxiosHeaderValue`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:79

##### 参数

###### matcher?

`AxiosHeaderMatcher`

##### 返回

`AxiosHeaderValue`

***

### has()

> **has**(`header`, `matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:38

#### 参数

##### header

`string`

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### hasAccept()

> **hasAccept**(`matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:75

#### 参数

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### hasAuthorization()

> **hasAuthorization**(`matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:90

#### 参数

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### hasContentEncoding()

> **hasContentEncoding**(`matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:85

#### 参数

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### hasContentLength()

> **hasContentLength**(`matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:70

#### 参数

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### hasContentType()

> **hasContentType**(`matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:65

#### 参数

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### hasUserAgent()

> **hasUserAgent**(`matcher?`): `boolean`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:80

#### 参数

##### matcher?

`AxiosHeaderMatcher`

#### 返回

`boolean`

***

### normalize()

> **normalize**(`format`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:44

#### 参数

##### format

`boolean`

#### 返回

`AxiosHeaders`

***

### set()

#### 调用签名

> **set**(`headerName?`, `value?`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:28

##### 参数

###### headerName?

`string`

###### value?

`AxiosHeaderValue`

###### rewrite?

`boolean` \| `AxiosHeaderMatcher`

##### 返回

`AxiosHeaders`

#### 调用签名

> **set**(`headers?`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:33

##### 参数

###### headers?

`string` \| `RawAxiosHeaders` \| `AxiosHeaders`

###### rewrite?

`boolean`

##### 返回

`AxiosHeaders`

***

### setAccept()

> **setAccept**(`value`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:72

#### 参数

##### value

`AxiosHeaderValue`

##### rewrite?

`boolean` \| `AxiosHeaderMatcher`

#### 返回

`AxiosHeaders`

***

### setAuthorization()

> **setAuthorization**(`value`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:87

#### 参数

##### value

`AxiosHeaderValue`

##### rewrite?

`boolean` \| `AxiosHeaderMatcher`

#### 返回

`AxiosHeaders`

***

### setContentEncoding()

> **setContentEncoding**(`value`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:82

#### 参数

##### value

`AxiosHeaderValue`

##### rewrite?

`boolean` \| `AxiosHeaderMatcher`

#### 返回

`AxiosHeaders`

***

### setContentLength()

> **setContentLength**(`value`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:67

#### 参数

##### value

`AxiosHeaderValue`

##### rewrite?

`boolean` \| `AxiosHeaderMatcher`

#### 返回

`AxiosHeaders`

***

### setContentType()

> **setContentType**(`value`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:62

#### 参数

##### value

`ContentType`

##### rewrite?

`boolean` \| `AxiosHeaderMatcher`

#### 返回

`AxiosHeaders`

***

### setUserAgent()

> **setUserAgent**(`value`, `rewrite?`): `AxiosHeaders`

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:77

#### 参数

##### value

`AxiosHeaderValue`

##### rewrite?

`boolean` \| `AxiosHeaderMatcher`

#### 返回

`AxiosHeaders`

***

### toJSON()

#### 调用签名

> **toJSON**(`asStrings`): `Record`\<`string`, `string`\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:50

##### 参数

###### asStrings

`true`

##### 返回

`Record`\<`string`, `string`\>

#### 调用签名

> **toJSON**(`asStrings?`): `Record`\<`string`, `string` \| `string`[]\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:51

##### 参数

###### asStrings?

`false`

##### 返回

`Record`\<`string`, `string` \| `string`[]\>

#### 调用签名

> **toJSON**(`asStrings?`): `Record`\<`string`, `string` \| `string`[]\>

定义于: node\_modules/.pnpm/axios@1.17.0/node\_modules/axios/index.d.ts:52

##### 参数

###### asStrings?

`boolean`

##### 返回

`Record`\<`string`, `string` \| `string`[]\>
