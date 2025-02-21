import type { ClusterNode } from 'ioredis/built/cluster'
import type Cluster from 'ioredis/built/cluster'
import type { ClusterOptions } from 'ioredis/built/cluster/ClusterOptions'
import type { RedisOptions } from 'ioredis/built/redis/RedisOptions'
import Redis from 'ioredis'

/**
 * io-redis支持的连接模式
 */
export enum RedisMode {
  STANDARD = 'standard',
  CLUSTER = 'cluster',
  SENTINEL = 'sentinel',
}

export class IORedis {
  /**
   * 简单&哨兵模式
   */
  public createClient(config: RedisOptions): Redis {
    return new Redis(config)
  }

  /**
   * 集群模式
   */
  public createCluster(nodes: ClusterNode[], options?: ClusterOptions): Cluster {
    return new Redis.Cluster(nodes, options)
  }
}
