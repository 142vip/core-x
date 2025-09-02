import type { SqlServerOptions } from '@142vip/data-source'
import { VipSqlServer } from '@142vip/data-source'

describe('vip-sql-server', () => {
  const options: SqlServerOptions = {
    host: '172.16.202.232',
    port: 1433,
    username: 'sa',
    password: 'YourStrong@Passw0rd',
    database: 'master',
    querySql: 'select 1',
  }
  const vipSqlServer = new VipSqlServer()

  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipSqlServer.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ '': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipSqlServer.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'YourStrong@Passw0rd123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
