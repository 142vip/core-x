import { Inject } from '@nestjs/common'
import { REDIS_CLIENT_TOKEN } from './redis.constants'

/**
 * redis client 装饰器
 */
export function InjectRedisClient(): PropertyDecorator & ParameterDecorator {
  return Inject(REDIS_CLIENT_TOKEN)
}
