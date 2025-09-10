import type { MongoDBOptions } from '@142vip/data-source'
import { VipMongo } from '@142vip/data-source'
import { describe, expect, it } from '@jest/globals'

describe('vip-mongo', () => {
  const options: MongoDBOptions = {
    host: '172.16.202.232',
    port: 27017,
    username: 'easyv',
    password: 'easyv',
    database: 'test',
    table: 'test',
    findFilter: {},
    findOptions: {},
  }
  const vipMongo = new VipMongo()
  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipMongo.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toBeDefined()
    expect(response.data).toBeInstanceOf(Array)
    expect(response.data?.length).toBeGreaterThan(0)
    expect(response.data?.[0]).toHaveProperty('_id')
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipMongo.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'easyv123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
