import Redis from 'ioredis'
import Cluster, { ClusterNode } from 'ioredis/built/cluster'
import { ClusterOptions } from 'ioredis/built/cluster/ClusterOptions'
import { RedisOptions } from 'ioredis/built/redis/RedisOptions'

/**
 * io-redis支持的连接模式
 */
export enum RedisMode {
  STANDARD = 'standard',
  CLUSTER = 'cluster',
  SENTINEL = 'sentinel',
}

/**
 * 单机、哨兵配置
 */
export interface RedisClientConfig extends RedisOptions {
  url?: string
}

/**
 * 集群配置
 */
export interface RedisClusterConfig {
  clusterNodes: ClusterNode[]
  clusterOptions?: ClusterOptions
}

/**
 * Redis 建立连接配置
 */
export interface RedisConfig extends RedisClientConfig, Partial<RedisClusterConfig> {}

/**
 * Redis 客户端
 */
export type RedisClient = Redis | Cluster
