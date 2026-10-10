import type { RedisClient } from '@142vip/redis'
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals'
import { Test } from '@nestjs/testing'
import { NestRedisModule, RedisService } from '../src'
import { isRedisReachable } from './redis-live.util'

describe('RedisService', () => {
  let redisClient: RedisClient | undefined
  let live = false

  beforeAll(async () => {
    live = await isRedisReachable()
    if (!live) {
      console.warn('[nest-redis:test] skip: Redis 未就绪 (127.0.0.1:6379)')
      return
    }

    const module = await Test.createTestingModule({
      imports: [NestRedisModule.register({
        url: 'redis://127.0.0.1:6379',
      })],
    }).compile()

    const redisService = module.get(RedisService)
    expect(redisService).toBeDefined()

    redisClient = redisService.getClient()
    expect(redisClient).toBeDefined()
  }, 15_000)

  afterAll(async () => {
    if (!live || redisClient == null)
      return
    // del() 内部还有 1s 延迟双删；先等它结束再 quit，否则事件循环不退出
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 1100)
    })
    await redisClient.quit()
  })

  it('设置缓存', async () => {
    if (!live || redisClient == null)
      return
    await redisClient.set('test', '123')
  })

  it('获取缓存', async () => {
    if (!live || redisClient == null)
      return
    const value = await redisClient.get('test')
    expect(value).toBe('123')
  })

  it('删除缓存', async () => {
    if (!live || redisClient == null)
      return
    await redisClient.del('test')
  })
})
