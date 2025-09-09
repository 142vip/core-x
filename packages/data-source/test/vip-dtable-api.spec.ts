import type { DTableApiOptions } from '@142vip/data-source'
import { VipDTableApi } from '@142vip/data-source'
import { describe, expect, it } from '@jest/globals'

describe('vip-dtable-api', () => {
  const options: DTableApiOptions = {
    apiKey: 'uaksepOr7GfUOkkRc',
    tableId: 'tblFScCoW99Fva4HL',
    viewId: 'viwIGcFu4xW9nviAw',
  }
  const vipDTableApi = new VipDTableApi()

  it('测试GET请求 - 同步获取', async () => {
    const time = new Date().getTime()
    // 获取数据总量
    const total = await vipDTableApi.getPaginationTotal(options)
    const response = await vipDTableApi.getConnectionData(options)

    console.log('测试GET请求，同步获取耗时：', new Date().getTime() - time, JSON.stringify(response))
    expect(response.success).toBe(true)
    expect(response.data?.length).toBe(total)
  })

  it('测试GET请求 - 并发获取', async () => {
    const time = new Date().getTime()
    // 获取数据总量
    const total = await vipDTableApi.getPaginationTotal(options)
    const response = await vipDTableApi.getConnectionDataByConcurrency(options)

    console.log('测试GET请求，并发获取耗时：', new Date().getTime() - time, JSON.stringify(response))
    expect(response.success).toBe(true)
    expect(response.data?.length).toBe(total)
  })
})
