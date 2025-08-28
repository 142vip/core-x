import type { DamengOptions } from '@142vip/data-source'
import { VipDameng } from '@142vip/data-source'

process.env.NODE_OPTIONS = '--openssl-legacy-provider'

describe('vip-dameng', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: DamengOptions = {
      host: '172.16.202.232',
      port: 5236,
      username: 'SYSDBA',
      password: 'SYSDBA',
      querySql: 'select 1',
    }
    const vipDameng = new VipDameng()

    const data = await vipDameng.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ 1: 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: DamengOptions = {
      host: '172.16.202.232',
      port: 5236,
      username: 'SYSDBA',
      password: 'SYSDBA123456',
      querySql: 'select 1',
    }
    const vipDameng = new VipDameng()

    const data = await vipDameng.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
