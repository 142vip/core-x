import type { OracleOptions } from '@142vip/data-source'
import { VipOracle } from '@142vip/data-source'

describe('vip-oracle', () => {
  const options: OracleOptions = {
    host: '172.16.202.232',
    port: 1521,
    username: 'system',
    password: 'helowin',
    sid: 'helowin',
    querySql: 'select 1',
  }
  const vipOracle = new VipOracle()

  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipOracle.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipOracle.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'helowin123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
