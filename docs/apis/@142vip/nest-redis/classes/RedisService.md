[API 参考](../../../index.md) / [@142vip/nest-redis](../index.md) / RedisService

# 类: RedisService

定义于: [core/redis.service.ts:6](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/core/redis.service.ts#L6)

## 构造函数

### 构造函数

> **new RedisService**(`config`): `RedisService`

定义于: [core/redis.service.ts:18](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/core/redis.service.ts#L18)

#### 参数

##### config

`RedisConfig`

#### 返回

`RedisService`

## 方法

### del()

> **del**(`key`): `Promise`\<`void`\>

定义于: [core/redis.service.ts:63](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/core/redis.service.ts#L63)

删除
- 支持延迟双删

#### 参数

##### key

`string`

#### 返回

`Promise`\<`void`\>

***

### getClient()

> **getClient**(): `RedisClient`

定义于: [core/redis.service.ts:26](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/core/redis.service.ts#L26)

获取客户端

#### 返回

`RedisClient`

***

### getEx()

> **getEx**\<`T`\>(`key`): `Promise`\<`null` \| `T`\>

定义于: [core/redis.service.ts:45](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/core/redis.service.ts#L45)

获取

#### 类型参数

##### T

`T`

#### 参数

##### key

`string`

#### 返回

`Promise`\<`null` \| `T`\>

***

### setEx()

> **setEx**\<`T`\>(`key`, `data`, `expiredTime`): `Promise`\<`void`\>

定义于: [core/redis.service.ts:37](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/core/redis.service.ts#L37)

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
