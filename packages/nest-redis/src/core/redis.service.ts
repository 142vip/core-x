import type { RedisClient, RedisConfig } from '@142vip/redis'
import { RedisFactory } from '@142vip/redis'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RedisService {
  private readonly config: RedisConfig
  private readonly client: RedisClient

  constructor(config: RedisConfig) {
    this.config = config
    this.client = this.getClient()
  }

  /**
   * 获取客户端
   */
  public getClient(): RedisClient {
    return new RedisFactory().getClient(this.config)
  }

  /**
   * 存储
   * - 单位：分钟
   * @param key
   * @param data
   * @param expiredTime
   */
  public async setEx<T>(key: string, data: T, expiredTime: number): Promise<void> {
    const jsonData = JSON.stringify(data)
    await this.client.set(key, jsonData, 'EX', expiredTime)
  }

  /**
   * 获取
   */
  public async getEx<T>(key: string): Promise<T | null> {
    const jsonData = await this.client.get(key)

    try {
      if (jsonData == null) {
        return null
      }
      return JSON.parse(jsonData) as T
    }
    catch {
      return null
    }
  }

  /**
   * 删除
   * - 支持延迟双删
   */
  public async del(key: string): Promise<void> {
    await this.client.del(key)
    setTimeout(async (): Promise<void> => {
      await this.client.del(key)
    }, 1000)
  }
}
