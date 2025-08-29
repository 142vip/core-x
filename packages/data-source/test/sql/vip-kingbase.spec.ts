import type { KingBaseOptions } from '@142vip/data-source'
import { VipKingBase } from '@142vip/data-source'

describe('vip-kingbase', () => {
  const options: KingBaseOptions = {
    host: '172.16.202.232',
    port: 54321,
    username: 'system',
    password: 'system',
    database: 'test',
    querySql: 'select 1',
  }
  const vipKingBase = new VipKingBase()

  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipKingBase.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipKingBase.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'system123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
