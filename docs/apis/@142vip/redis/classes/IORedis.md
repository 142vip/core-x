[API 参考](../../../index.md) / [@142vip/redis](../index.md) / IORedis

# 类: IORedis

定义于: [io-redis.ts:16](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/redis/src/io-redis.ts#L16)

## 构造函数

### 构造函数

> **new IORedis**(): `IORedis`

#### 返回

`IORedis`

## 方法

### createClient()

> **createClient**(`config`): `Redis`

定义于: [io-redis.ts:20](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/redis/src/io-redis.ts#L20)

简单&哨兵模式

#### 参数

##### config

`RedisOptions`

#### 返回

`Redis`

***

### createCluster()

> **createCluster**(`nodes`, `options?`): `Cluster`

定义于: [io-redis.ts:27](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/redis/src/io-redis.ts#L27)

集群模式

#### 参数

##### nodes

`ClusterNode`[]

##### options?

`ClusterOptions`

#### 返回

`Cluster`
