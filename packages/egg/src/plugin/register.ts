import type { CreatePluginInstance, EggApp } from '../egg.interface'
import { VipLodash } from '@142vip/utils'

/**
 * 注册的Egg插件key
 */
export enum RegisterEggPluginName {
  EGG_AXIOS = 'axios',
  EGG_MYSQL = 'mysql',
  EGG_REDIS = 'redis',
  EGG_SEQUELIZE = 'sequelize',
  EGG_RABBIT = 'rabbit',
  EGG_VALIDATE = 'validate',
  EGG_SWAGGER = 'swagger',
  EGG_GRPC_CLIENT = 'grpcClient',
  EGG_GRPC_SERVER = 'grpcServer',
}

/**
 * 插件注册
 * @param name
 * @param app
 * @param createInstance
 */
export function registerPlugin(name: RegisterEggPluginName, app: EggApp, createInstance: CreatePluginInstance) {
  // 配置 agent 或者 app 才加载单例
  if (app.config[name] != null) {
    app.addSingleton(name, createInstance)
  }
}

/**
 * 插件加载时机
 * - app.js 中
 * - agent.js 中
 */
export enum PluginLoader {
  APP = 'app',
  AGENT = 'agent',
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

  return VipLodash.merge(defaultConfig, userConfig)
}

/**
 * egg启动的生命周期
 * - 参考：https://www.eggjs.org/zh-CN/basics/app-start
 */
export class EggPluginBoot {
  private readonly pluginName: RegisterEggPluginName
  private readonly appOrAgent: EggApp
  private readonly createEggPluginInstance: CreatePluginInstance
  constructor(eggPlugin: {
    pluginName: RegisterEggPluginName
    appOrAgent: EggApp
    createEggPluginInstance: CreatePluginInstance
  }) {
    this.pluginName = eggPlugin.pluginName
    this.appOrAgent = eggPlugin.appOrAgent
    this.createEggPluginInstance = eggPlugin.createEggPluginInstance
  }

  /**
   * 此时 config 文件已经被读取并合并，但还并未生效
   * 这是应用层修改配置的最后机会
   * 注意：此函数只支持同步调用
   */
  configWillLoad(): void {

  }

  /**
   * 所有配置已经加载完毕
   * 可以用来加载应用自定义的文件，启动自定义服务
   */
  public async didLoad(): Promise<void> {
    // app.加载
    if (this.loaderPlugin(PluginLoader.APP)) {
      this.registerPlugin()
    }

    // agent.js加载
    if (this.loaderPlugin(PluginLoader.AGENT)) {
      this.registerPlugin()
    }
  }

  /**
   * 所有插件已启动完毕，但应用整体尚未 ready
   * 可进行数据初始化等操作，这些操作成功后才启动应用
   */

  public async willReady(): Promise<void> {

  }

  /**
   * 应用已启动完毕
   */
  public async didReady(): Promise<void> {

  }

  /**
   * http/https 服务器已启动，开始接收外部请求
   * 此时可以从 app.server 获取 server 实例
   */
  public async serverDidReady(): Promise<void> {

  }

  /**
   * 是否加载插件
   */
  private loaderPlugin(loader: PluginLoader = PluginLoader.APP) {
    // 获取加载配置，默认app.js
    const { loaders = [] } = this.appOrAgent.config[this.pluginName]
    return loaders.includes(loader)
  }

  /**
   * 注册插件
   */
  private registerPlugin(): void {
    // 配置 agent 或者 app 才加载单例
    if (this.appOrAgent.config[this.pluginName] != null) {
      this.appOrAgent.addSingleton(this.pluginName, this.createEggPluginInstance)
    }
  }
}
