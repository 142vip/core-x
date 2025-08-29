import type { MysqlOptions } from '@142vip/data-source'
import { VipMysql } from '@142vip/data-source'

describe('vip-mysql', () => {
  const options: MysqlOptions = {
    host: '172.16.202.232',
    port: 3309,
    username: 'root',
    password: 'DTStack2022',
    database: 'information_schema',
    querySql: 'select 1',
  }
  const vipMysql = new VipMysql()

  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipMysql.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ 1: 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipMysql.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'DTStack2022123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
