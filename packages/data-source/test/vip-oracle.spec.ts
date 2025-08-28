import type { OracleOptions } from '@142vip/data-source'
import { VipOracle } from '@142vip/data-source'

describe('vip-oracle', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: OracleOptions = {
      host: '172.16.202.232',
      port: 1521,
      username: 'system',
      password: 'helowin',
      sid: 'helowin',
      querySql: 'select 1',
    }
    const vipOracle = new VipOracle()

    const data = await vipOracle.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: OracleOptions = {
      host: '172.16.202.232',
      port: 1521,
      username: 'system',
      password: 'helowin',
      sid: 'helowin',
      querySql: 'select 1',
    }
    const vipOracle = new VipOracle()

    const data = await vipOracle.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
