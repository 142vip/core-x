import type { CreatePluginInstance, EggApp } from '../egg.interface'
import type { RegisterEggPluginName } from './plugin.interface'
import { mergeConfig } from '../config'
import { PluginLoader } from './plugin.interface'

/**
 * 插件注册
 * @param name
 * @param app
 * @param createInstance
 */
export function registerPlugin(name: RegisterEggPluginName, app: EggApp, createInstance: CreatePluginInstance): void {
  // 配置 agent 或者 app 才加载单例
  if (app.config[name] != null) {
    app.addSingleton(name, createInstance)
  }
}

/**
 * 默认的插件配置
 * @param pkgName  模块包名
 * @param userConfig
 */
export function defaultPluginConfig(pkgName: string, userConfig: any) {
  const defaultConfig = {
    default: {
      pkgName,
    },
    // 默认app.js加载
    loaders: [PluginLoader.APP],
  }

  return mergeConfig(defaultConfig, userConfig)
}
