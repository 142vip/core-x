import type { MsSQLOptions } from '@142vip/data-source'
import { VipSqlServer } from '@142vip/data-source'

describe('vip-mssql', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: MsSQLOptions = {
      host: '172.16.202.232',
      port: 1433,
      username: 'sa',
      password: 'YourStrong@Passw0rd',
      database: 'master',
      querySql: 'select 1',
    }
    const vipSqlServer = new VipSqlServer()

    const data = await vipSqlServer.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ '': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: MsSQLOptions = {
      host: '172.16.202.232',
      port: 1433,
      username: 'sa',
      password: 'YourStrong@Passw0rd123456',
      database: 'master',
      querySql: 'select 1',
    }
    const vipSqlServer = new VipSqlServer()

    const data = await vipSqlServer.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
