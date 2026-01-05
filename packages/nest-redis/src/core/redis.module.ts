import { RedisConfig } from '@142vip/redis'
import { DynamicModule, Module } from '@nestjs/common'
import { REDIS_CLIENT_TOKEN } from './redis.constants'
import { RedisService } from './redis.service'

@Module({})
export class NestRedisModule {
  public static register(config: RedisConfig): DynamicModule {
    const redisService = new RedisService(config)
    const providers = [
      {
        provide: REDIS_CLIENT_TOKEN,
        useValue: redisService.getClient(),
      },
      {
        provide: RedisService,
        useValue: redisService,
      },
    ]
    return {
      module: NestRedisModule,
      providers,
      exports: providers,
      global: true,
    }
  }
}
