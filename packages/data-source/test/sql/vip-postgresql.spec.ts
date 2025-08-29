import type { PostgreSqlOptions } from '@142vip/data-source'
import { VipPostgreSql } from '@142vip/data-source'

/**
 * 测试pgsql的连接
 */
describe('vip-postgresql', () => {
  const options: PostgreSqlOptions = {
    host: '172.16.202.232',
    port: 5432,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'postgres',
    querySql: 'select 1',
  }
  const vipPostgreSql = new VipPostgreSql()

  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipPostgreSql.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipPostgreSql.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'mysecretpassword123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
