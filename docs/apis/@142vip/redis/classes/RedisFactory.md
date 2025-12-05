[API 参考](../../../index.md) / [@142vip/redis](../index.md) / RedisFactory

# 类: RedisFactory

定义于: [packages/redis/src/core/redis.factory.ts:8](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.factory.ts#L8)

Redis工厂类

## 构造函数

### 构造函数

> **new RedisFactory**(): `RedisFactory`

#### 返回

`RedisFactory`

## 方法

### createClient()

> **createClient**(`config`): `Redis`

定义于: [packages/redis/src/core/redis.factory.ts:12](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.factory.ts#L12)

简单&哨兵模式

#### 参数

##### config

[`RedisClientConfig`](../interfaces/RedisClientConfig.md)

#### 返回

`Redis`

***

### createCluster()

> **createCluster**(`config`): `Cluster`

定义于: [packages/redis/src/core/redis.factory.ts:19](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.factory.ts#L19)

集群模式

#### 参数

##### config

[`RedisClusterConfig`](../interfaces/RedisClusterConfig.md)

#### 返回

`Cluster`

***

### getClient()

> **getClient**(`config`): [`RedisClient`](../type-aliases/RedisClient.md)

定义于: [packages/redis/src/core/redis.factory.ts:26](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.factory.ts#L26)

获取Redis客户端

#### 参数

##### config

[`RedisConfig`](../interfaces/RedisConfig.md)

#### 返回

[`RedisClient`](../type-aliases/RedisClient.md)
