import { RedisClient } from '@142vip/redis'
import { beforeAll, describe, expect, it } from '@jest/globals'
import { Test } from '@nestjs/testing'
import { NestRedisModule, RedisService } from '../src'

describe('RedisService', () => {
  let redisClient: RedisClient
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [NestRedisModule.register({
        url: 'redis://127.0.0.1:6379',
      })],
    }).compile()

    const redisService = module.get(RedisService)
    expect(redisService).toBeDefined()

    // redis对象
    redisClient = redisService.getClient()
    expect(redisClient).toBeDefined()
  })

  it('设置缓存', async () => {
    await redisClient.set('test', '123')
  })

  it('获取缓存', async () => {
    const value = await redisClient.get('test')
    expect(value).toBe('123')
  })

  it('删除缓存', async () => {
    await redisClient.del('test')
  })
})
