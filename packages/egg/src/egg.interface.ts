import type { PluginConfig } from './plugin'

export interface EggApp {
  config: EggConfig
  addSingleton: <T>(pluginName: string, createPluginInstance: CreatePluginInstance) => T
  coreLogger: EggCoreLogger
  [pluginName: string]: unknown | EggPluginInstance<unknown>
}

/**
 * 日志
 */
export interface EggCoreLogger {
  info: (msg: string, ...args: any[]) => void
  warn: (msg: string, ...args: any[]) => void
  error: (msg: string, ...args: any[]) => void
  debug: (msg: string, ...args: any[]) => void
}

export interface EggPluginInstance<T> {
  getInstance: (name?: string) => T | undefined
  getInstances: () => Record<string, T>
  getInstanceNames: () => string[]
}

/**
 * 插件实例
 */
export type CreatePluginInstance = <T>(config: PluginConfig, app: EggApp) => EggPluginInstance<T>

/**
 * 配置
 */
export interface EggConfig extends Record<string, any> {

  // 插件配置
  RegisterEggPluginName: PluginConfig
}
