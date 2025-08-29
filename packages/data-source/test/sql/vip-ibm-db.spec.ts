import type { IbmDBOptions } from '@142vip/data-source'
import { VipIbmDB } from '@142vip/data-source'

describe('vip-ibm-db', () => {
  const options: IbmDBOptions = {
    host: '172.16.202.232',
    port: 50000,
    username: 'DB2INST1',
    password: 'Easyv.cloud',
    database: 'easyvdb',
    querySql: 'select 1',
  }
  const vipIbmDB = new VipIbmDB()

  it('连接数据库成功，返回查询结果', async () => {
    const response = await vipIbmDB.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const response = await vipIbmDB.getConnectionData({
      ...options,
      // 特意密码错误
      password: 'Easyv.cloud123456',
    })

    console.log('连接数据库失败，返回失败信息：', response)
    expect(response.success).toBe(false)
  })
})
