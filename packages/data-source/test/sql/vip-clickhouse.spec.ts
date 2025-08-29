import type { ClickHouseOptions } from '@142vip/data-source'
import { VipClickhouse } from '@142vip/data-source'

describe('vip-clickhouse', () => {
  const options: ClickHouseOptions = {
    host: '172.16.202.232',
    port: 8123,
    username: 'easyv',
    password: 'Easyv123',
    database: 'default',
    querySql: 'select 1',
  }
  const vipClickhouse = new VipClickhouse()
  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipClickhouse.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ 1: 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipClickhouse.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'Easyv123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
