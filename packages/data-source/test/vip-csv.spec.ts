import type { CSVOptions } from '@142vip/data-source'
import { VipCsv } from '@142vip/data-source'
import { expect } from '@jest/globals'

/**
 * 测试CSV
 */
describe('vip-csv', () => {
  const EN_CODE = {
    UTF8: 'utf-8',
    GBK: 'gbk',
    ASCII: 'ascii',
  }
  const vipCsv = new VipCsv()
  it(`测试CSV文件 - ${EN_CODE.UTF8}编码`, async () => {
    const options: CSVOptions = {
      // eslint-disable-next-line node/prefer-global/buffer
      file: Buffer.from('id,name\n1,csv测试', 'utf-8'),
      encode: 'utf-8',
    }
    const response = await vipCsv.getConnectionData(options)

    console.log(`测试CSV文件 - ${EN_CODE.UTF8}编码，结果`, response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ id: '1', name: 'csv测试' }])
  })

  it(`测试CSV文件 - ${EN_CODE.ASCII}编码`, async () => {
    const options: CSVOptions = {
      // eslint-disable-next-line node/prefer-global/buffer
      file: Buffer.from('id,name\n1,csv测试', 'ascii'),
      encode: 'ascii',
    }

    const response = await vipCsv.getConnectionData(options)

    console.log(`测试CSV文件 - ${EN_CODE.ASCII}编码，结果`, response)
    expect(response.success).toBe(true)
    expect(response.data).toEqual([{ id: '1', name: 'csvK�' }])
  })
})
