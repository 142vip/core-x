[API 参考](../../../index.md) / [@142vip/axios](../index.md) / AxiosFactory

# Class: AxiosFactory

Defined in: [packages/axios/src/core/axios.factory.ts:20](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/axios/src/core/axios.factory.ts#L20)

axios
- 参考：https://www.npmjs.com/package/axios#features

## Constructors

### Constructor

> **new AxiosFactory**(`config?`): `AxiosFactory`

Defined in: [packages/axios/src/core/axios.factory.ts:23](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/axios/src/core/axios.factory.ts#L23)

#### Parameters

##### config?

`CreateAxiosDefaults`\<`any`\>

#### Returns

`AxiosFactory`

## Methods

### clearInterceptor()

> **clearInterceptor**(`type?`): `void`

Defined in: [packages/axios/src/core/axios.factory.ts:48](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/axios/src/core/axios.factory.ts#L48)

清除拦截器，支持同时清理请求拦截器和响应拦截器

#### Parameters

##### type?

[`InterceptorType`](../enumerations/InterceptorType.md)

#### Returns

`void`

***

### createAxiosInstance()

> **createAxiosInstance**(): [`VipAxiosInstance`](../interfaces/VipAxiosInstance.md)

Defined in: [packages/axios/src/core/axios.factory.ts:31](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/axios/src/core/axios.factory.ts#L31)

创建vipAxios实例

#### Returns

[`VipAxiosInstance`](../interfaces/VipAxiosInstance.md)

***

### getConfig()

> **getConfig**(): `undefined` \| `CreateAxiosDefaults`\<`any`\>

Defined in: [packages/axios/src/core/axios.factory.ts:41](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/axios/src/core/axios.factory.ts#L41)

获取用户初始化的axios实例的默认配置

#### Returns

`undefined` \| `CreateAxiosDefaults`\<`any`\>
