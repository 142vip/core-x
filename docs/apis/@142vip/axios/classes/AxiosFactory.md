[API 参考](../../../index.md) / [@142vip/axios](../index.md) / AxiosFactory

# 类: AxiosFactory

定义于: [packages/axios/src/core/axios.factory.ts:20](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L20)

axios
- 参考：https://www.npmjs.com/package/axios#features

## 构造函数

### 构造函数

> **new AxiosFactory**(`config?`): `AxiosFactory`

定义于: [packages/axios/src/core/axios.factory.ts:23](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L23)

#### 参数

##### config?

`CreateAxiosDefaults`\<`any`\>

#### 返回

`AxiosFactory`

## 方法

### clearInterceptor()

> **clearInterceptor**(`type?`): `void`

定义于: [packages/axios/src/core/axios.factory.ts:48](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L48)

清除拦截器，支持同时清理请求拦截器和响应拦截器

#### 参数

##### type?

[`InterceptorType`](../enumerations/InterceptorType.md)

#### 返回

`void`

***

### createAxiosInstance()

> **createAxiosInstance**(): [`VipAxiosInstance`](../interfaces/VipAxiosInstance.md)

定义于: [packages/axios/src/core/axios.factory.ts:31](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L31)

创建vipAxios实例

#### 返回

[`VipAxiosInstance`](../interfaces/VipAxiosInstance.md)

***

### getConfig()

> **getConfig**(): `undefined` \| `CreateAxiosDefaults`\<`any`\>

定义于: [packages/axios/src/core/axios.factory.ts:41](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/axios/src/core/axios.factory.ts#L41)

获取用户初始化的axios实例的默认配置

#### 返回

`undefined` \| `CreateAxiosDefaults`\<`any`\>
