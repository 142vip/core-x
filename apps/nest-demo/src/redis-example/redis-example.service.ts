import { RedisService } from '@142vip/nest-redis'
import { Injectable } from '@nestjs/common'

const storeExample = { key: 'test', value: 'redis-example' }

@Injectable()
export class RedisExampleService {
  constructor(
    private readonly redisService: RedisService,
  ) { }

  async setKey(): Promise<void> {
    await this.redisService.setEx(storeExample.key, storeExample.value, 5)
  }

  async getKey(): Promise<string | null> {
    return await this.redisService.getEx(storeExample.key)
  }

  async delKey(): Promise<void> {
    await this.redisService.del(storeExample.key)
  }
}
