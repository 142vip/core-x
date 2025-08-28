import type { MysqlOptions } from '@142vip/data-source'
import { VipMysql } from '@142vip/data-source'

describe('vip-mysql', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: MysqlOptions = {
      host: '172.16.202.232',
      port: 3309,
      username: 'root',
      password: 'DTStack2022',
      database: 'information_schema',
      querySql: 'select 1',
    }
    const vipMysql = new VipMysql()

    const data = await vipMysql.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ 1: 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: MysqlOptions = {
      host: '172.16.202.232',
      port: 3309,
      username: 'root',
      password: 'DTStack2022123456',
      database: 'information_schema',
      querySql: 'select 1',
    }
    const vipMysql = new VipMysql()

    const data = await vipMysql.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
