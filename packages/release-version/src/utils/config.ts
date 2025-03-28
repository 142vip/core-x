import type { VersionBumpOptions } from '../types'
import { dirname } from 'node:path'
import process from 'node:process'
import { VipConfig } from '@142vip/utils'
import escalade from 'escalade/sync'

export const bumpConfigDefaults: VersionBumpOptions = {
  commit: true,
  push: true,
  tag: true,
  recursive: false,
  noVerify: false,
  confirm: true,
  ignoreScripts: false,
  all: false,
  files: [],
}

/**
 * 加载bumpx的配置
 * 例如： bumpx.config.json
 */
export async function loadBumpXConfig(
  overrides?: Partial<VersionBumpOptions>,
  cwd = process.cwd(),
) {
  const name = 'bumpx'
  const configFile = findConfigFile(name, cwd)
  // const { config } = await loadConfig<VersionBumpOptions>({
  //   name,
  //   defaults: bumpConfigDefaults,
  //   overrides: {
  //     ...(overrides as VersionBumpOptions),
  //   },
  //   cwd: configFile ? dirname(configFile) : cwd,
  // })
  const config = await VipConfig.loadCliConfig<VersionBumpOptions>(name, bumpConfigDefaults, {
    overrides: {
      ...(overrides as VersionBumpOptions),
    },
    cwd: configFile ? dirname(configFile) : cwd,
  })
  return config!
}

/**
 * 自定义配置入口
 * - 配置可选
 */
export function defineBumpXConfig(config: Partial<VersionBumpOptions>): Partial<VersionBumpOptions> {
  return config
}

/**
 * 找配置文件
 */
function findConfigFile(name: string, cwd: string) {
  let foundRepositoryRoot = false
  try {
    const candidates = ['js', 'mjs', 'ts', 'mts', 'json'].map(ext => `${name}.config.${ext}`)
    return escalade(cwd, (_dir, files) => {
      const match = files.find((file) => {
        if (candidates.includes(file))
          return true
        if (file === '.git')
          foundRepositoryRoot = true
        return false
      })

      if (match)
        return match

      // Stop at the repository root.
      if (foundRepositoryRoot) {
        // eslint-disable-next-line no-throw-literal
        throw null
      }

      return false
    })
  }
  catch (error) {
    if (foundRepositoryRoot)
      return null
    throw error
  }
}
