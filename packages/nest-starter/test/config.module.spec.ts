import { mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from '@jest/globals'
import { NestAppConfig } from '../src/app.config'
import { StarterConfig } from '../src/config'
import { getConfig, nestAppConfig, NestConfigModule, nestStaterConfig, useConfigModule } from '../src/config.module'

describe('config.module active config', () => {
  it('useConfigModule 后 nestStaterConfig / nestAppConfig / getConfig 读取同一份配置', () => {
    const cwd = join(tmpdir(), `nest-cfg-mod-${Date.now()}`)
    const configDir = join(cwd, 'config')
    mkdirSync(configDir, { recursive: true })
    const configFilePath = join(configDir, 'local.config.js')
    writeFileSync(configFilePath, `module.exports = {
      starter: {
        port: 4321,
        enableLogger: false,
        enableSwagger: false,
      },
    }`)

    const ConfigModule = NestConfigModule.register(NestAppConfig, {
      absolutePath: configFilePath,
    })
    useConfigModule(ConfigModule, NestAppConfig)

    expect(nestStaterConfig.port).toBe(4321)
    expect(nestAppConfig.starter.port).toBe(4321)
    expect(getConfig(StarterConfig).port).toBe(4321)
  })
})
