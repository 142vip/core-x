[API 参考](../../../index.md) / [@142vip/nest-redis](../index.md) / RedisService

# 类: RedisService

定义于: [core/redis.service.ts:6](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest-redis/src/core/redis.service.ts#L6)

## 构造函数

### 构造函数

> **new RedisService**(`config`): `RedisService`

定义于: [core/redis.service.ts:18](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest-redis/src/core/redis.service.ts#L18)

#### 参数

##### config

[`RedisConfig`](../../redis/interfaces/RedisConfig.md)

#### 返回

`RedisService`

## 方法

### del()

> **del**(`key`): `Promise`\<`void`\>

定义于: [core/redis.service.ts:64](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest-redis/src/core/redis.service.ts#L64)

删除
- 支持延迟双删

#### 参数

##### key

`string`

#### 返回

`Promise`\<`void`\>

***

### getClient()

> **getClient**(): [`RedisClient`](../../redis/type-aliases/RedisClient.md)

定义于: [core/redis.service.ts:27](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest-redis/src/core/redis.service.ts#L27)

返回构造时缓存的客户端。
重复 new 会留下未关闭的连接，Jest 与进程退出都会被占住。

#### 返回

[`RedisClient`](../../redis/type-aliases/RedisClient.md)

***

### getEx()

> **getEx**\<`T`\>(`key`): `Promise`\<`T` \| `null`\>

定义于: [core/redis.service.ts:46](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest-redis/src/core/redis.service.ts#L46)

获取

#### 类型参数

##### T

`T`

#### 参数

##### key

`string`

#### 返回

`Promise`\<`T` \| `null`\>

***

### setEx()

> **setEx**\<`T`\>(`key`, `data`, `expiredTime`): `Promise`\<`void`\>

定义于: [core/redis.service.ts:38](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest-redis/src/core/redis.service.ts#L38)

存储
- 单位：分钟

#### 类型参数

##### T

`T`

#### 参数

##### key

`string`

##### data

`T`

##### expiredTime

`number`

#### 返回

`Promise`\<`void`\>
