import { RedisConfig } from '@142vip/redis'
import { DynamicModule, Module } from '@nestjs/common'
import { REDIS_CLIENT_TOKEN } from './redis.constants'
import { RedisService } from './redis.service'

@Module({})
export class RedisModule {
  public static register(config: RedisConfig): DynamicModule {
    const redisService = new RedisService(config)
    const providers = [
      {
        provide: RedisService,
        useValue: redisService,
      },
      {
        provide: REDIS_CLIENT_TOKEN,
        useValue: redisService.getClient(),
      },
    ]
    return {
      module: RedisModule,
      providers,
      exports: providers,
      global: true,
    }
  }
}
