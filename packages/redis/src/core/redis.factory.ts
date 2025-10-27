import type Cluster from 'ioredis/built/cluster'
import Redis from 'ioredis'
import { RedisClient, RedisClientConfig, RedisClusterConfig, RedisConfig } from './redis.interface'

/**
 * Redis工厂类
 */
export class RedisFactory {
  /**
   * 简单&哨兵模式
   */
  public createClient(config: RedisClientConfig): Redis {
    return config.url != null ? new Redis(config.url, config) : new Redis(config)
  }

  /**
   * 集群模式
   */
  public createCluster(config: RedisClusterConfig): Cluster {
    return new Redis.Cluster(config.clusterNodes, config.clusterOptions)
  }

  /**
   * 获取Redis客户端
   */
  public getClient(config: RedisConfig): RedisClient {
    // 集群模式
    if (config.clusterNodes != null) {
      return this.createCluster(config as RedisClusterConfig)
    }
    else {
      return this.createClient(config)
    }
  }
}
