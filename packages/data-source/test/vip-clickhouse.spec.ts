import type { ClickHouseOptions } from '@142vip/data-source'
import { VipClickhouse } from '@142vip/data-source'

describe('vip-clickhouse', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: ClickHouseOptions = {
      host: '172.16.202.232',
      port: 8123,
      username: 'easyv',
      password: 'Easyv123',
      database: 'default',
      querySql: 'select 1',
    }
    const vipClickhouse = new VipClickhouse()

    const data = await vipClickhouse.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ 1: 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: ClickHouseOptions = {
      host: '172.16.202.232',
      port: 8123,
      username: 'easyv',
      password: 'Easyv123456',
      database: 'default',
      querySql: 'select 1',
    }
    const vipClickhouse = new VipClickhouse()

    const data = await vipClickhouse.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
