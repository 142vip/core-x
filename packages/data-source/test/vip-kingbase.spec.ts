import type { KingBaseOptions } from '@142vip/data-source'
import { VipKingBase } from '@142vip/data-source'

describe('vip-kingbase', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: KingBaseOptions = {
      host: '172.16.202.232',
      port: 54321,
      username: 'system',
      password: 'system',
      database: 'test',
      querySql: 'select 1',
    }
    const vipKingBase = new VipKingBase()

    const data = await vipKingBase.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: KingBaseOptions = {
      host: '172.16.202.232',
      port: 54321,
      username: 'system',
      password: 'system123456',
      database: 'test',
      querySql: 'select 1',
    }
    const vipKingBase = new VipKingBase()

    const data = await vipKingBase.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
