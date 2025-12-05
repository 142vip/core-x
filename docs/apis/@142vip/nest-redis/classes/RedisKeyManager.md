[API 参考](../../../index.md) / [@142vip/nest-redis](../index.md) / RedisKeyManager

# 类: RedisKeyManager\<T\>

定义于: [redis-key.manager.ts:4](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/redis-key.manager.ts#L4)

redis key管理器

## 类型参数

### T

`T` *extends* `string`

## 构造函数

### 构造函数

> **new RedisKeyManager**\<`T`\>(`clientKey`): `RedisKeyManager`\<`T`\>

定义于: [redis-key.manager.ts:5](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/redis-key.manager.ts#L5)

#### 参数

##### clientKey

`T`

#### 返回

`RedisKeyManager`\<`T`\>

## 方法

### generateKey()

> **generateKey**(`key`): `string`

定义于: [redis-key.manager.ts:12](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/nest-redis/src/redis-key.manager.ts#L12)

创建缓存key

#### 参数

##### key

`string`

#### 返回

`string`
