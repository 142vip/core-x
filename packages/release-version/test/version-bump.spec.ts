import { bumpConfigDefaults, CONFIG_DEFAULT_NAME, defineBumpXConfig } from '@142vip/release-version'
import { vipConfig, VipExecutor } from '@142vip/utils'
import { describe, expect, it } from '@jest/globals'

describe('测试版本', () => {
  it('Git简单测试', async () => {
    await VipExecutor.execShell('git -v')
  })
})

describe('测试配置', () => {
  const bumpXConfig = defineBumpXConfig({
    all: true,
  })
  it('bumpx默认配置', async () => {
    const cliConfig = vipConfig.loadConfig(CONFIG_DEFAULT_NAME)
    expect(cliConfig).toBeDefined()
    expect(cliConfig).toEqual(bumpXConfig)

    // 获取和默认配置合并后的配置
    const config = vipConfig.loadCliConfig(CONFIG_DEFAULT_NAME, bumpConfigDefaults)
    expect(config).toBeDefined()
    expect(config).toHaveProperty('all', true)
  })
})
