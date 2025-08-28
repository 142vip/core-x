import type { IbmDBOptions } from '@142vip/data-source'
import { VipIbmDB } from '@142vip/data-source'

describe('vip-ibm-db', () => {
  it('连接数据库成功，返回查询结果', async () => {
    const options: IbmDBOptions = {
      connectURL: 'postgresql://DB2INST1:Easyv.cloud@172.16.202.232:50000/easyvdb',
      querySql: 'select 1',
    }
    const vipIbmDB = new VipIbmDB()

    const data = await vipIbmDB.getConnectionData(options)

    console.log('连接数据库成功，返回查询结果：', data)
    expect(data.success).toBe(true)
    expect(data.data).toEqual([{ '?column?': 1 }])
  })

  it('连接数据库失败，返回失败信息', async () => {
    const options: IbmDBOptions = {
      connectURL: 'postgresql://DB2INST1:Easyv.cloud123456@172.16.202.232:50000/easyvdb',
      querySql: 'select 1',
    }
    const vipIbmDB = new VipIbmDB()

    const data = await vipIbmDB.getConnectionData(options)

    console.log('连接数据库失败，返回失败信息：', data)
    expect(data.success).toBe(false)
  })
})
