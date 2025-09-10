import { VipExecutor } from '@142vip/utils'
import { describe, it } from '@jest/globals'

describe('测试版本', () => {
  it('Git简单测试', async () => {
    await VipExecutor.execShell('git -v')
  })
})
