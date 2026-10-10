import type { DamengOptions } from '@142vip/data-source'
import { VipDameng } from '@142vip/data-source'
import { describe, expect, it } from '@jest/globals'

// 实验室握手即返回 dmdb 6001 ECONNRESET，默认不跑。DATA_SOURCE_LIVE=1 时仍执行。
const describeDameng = process.env.DATA_SOURCE_LIVE === '1' ? describe : describe.skip

describeDameng('vip-dameng', () => {
  const options: DamengOptions = {
    host: '172.16.202.232',
    port: 5236,
    username: 'SYSDBA',
    password: 'SYSDBA',
    querySql: 'select 1',
  }
  const vipDameng = new VipDameng()
  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipDameng.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ 1: 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipDameng.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'SYSDBA123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
