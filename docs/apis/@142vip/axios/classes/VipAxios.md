[API 参考](../../../index.md) / [@142vip/axios](../index.md) / VipAxios

# 类: VipAxios

定义于: [vip-axios.ts:9](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/axios/src/vip-axios.ts#L9)

axios
- 参考：https://www.npmjs.com/package/axios#features

## 构造函数

### 构造函数

> **new VipAxios**(`config`): `VipAxios`

定义于: [vip-axios.ts:14](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/axios/src/vip-axios.ts#L14)

#### 参数

##### config

`CreateAxiosDefaults`

#### 返回

`VipAxios`

## 属性

### vipAxios

> `static` **vipAxios**: `VipAxios`

定义于: [vip-axios.ts:10](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/axios/src/vip-axios.ts#L10)

## 方法

### clearInterceptor()

> **clearInterceptor**(`type`): `void`

定义于: [vip-axios.ts:46](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/axios/src/vip-axios.ts#L46)

清除拦截器

#### 参数

##### type

[`InterceptorType`](../enumerations/InterceptorType.md)

#### 返回

`void`

***

### getAxios()

> **getAxios**(): `AxiosInstance`

定义于: [vip-axios.ts:32](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/axios/src/vip-axios.ts#L32)

获取axios实例

#### 返回

`AxiosInstance`

***

### getAxiosConfig()

> **getAxiosConfig**(): `CreateAxiosDefaults`

定义于: [vip-axios.ts:39](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/axios/src/vip-axios.ts#L39)

获取配置

#### 返回

`CreateAxiosDefaults`

***

### getInstance()

> `static` **getInstance**(`config`): `VipAxios`

定义于: [vip-axios.ts:22](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/axios/src/vip-axios.ts#L22)

创建单例

#### 参数

##### config

`CreateAxiosDefaults`

#### 返回

`VipAxios`
