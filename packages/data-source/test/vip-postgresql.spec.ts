import type { PostgreSqlOptions } from '@142vip/data-source'
import { VipPostgreSql } from '@142vip/data-source'

/**
 * 测试pgsql的连接
 */
describe('vip-postgresql', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: PostgreSqlOptions = {
      connectURL: 'postgresql://postgres:mysecretpassword@172.16.202.232:5432/postgres',
      querySql: 'select 1',
    }
    const vipPostgreSql = new VipPostgreSql()

    const data = await vipPostgreSql.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: PostgreSqlOptions = {
      connectURL: 'postgresql://postgres:mysecretpassword123456@172.16.202.232:5432/postgres',
      querySql: 'select 1',
    }
    const vipPostgreSql = new VipPostgreSql()

    const data = await vipPostgreSql.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
