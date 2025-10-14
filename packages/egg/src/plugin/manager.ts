import type { EggApp, PluginCreateInstance } from '../egg.interface'
import type { RegisterEggPluginName } from './plugin.interface'
import { PluginLoader } from './plugin.interface'

export interface EggPluginManagerOptions {
  pluginName: RegisterEggPluginName
  appOrAgent: EggApp
  createEggPluginInstance: PluginCreateInstance
}

/**
 * 插件注册管理器
 */
export class EggPluginManager {
  private readonly pluginName: RegisterEggPluginName
  private readonly appOrAgent: EggApp
  private readonly createEggPluginInstance: PluginCreateInstance
  private readonly defaultInstanceName = 'default'

  constructor(eggPluginOptions: EggPluginManagerOptions) {
    this.pluginName = eggPluginOptions.pluginName
    this.appOrAgent = eggPluginOptions.appOrAgent
    this.createEggPluginInstance = eggPluginOptions.createEggPluginInstance
  }

  /**
   * 注册插件
   * - 区分单实例、多实例挂载
   * 参考：https://github.com/eggjs/core/blob/41fe40ff68432db1f0bd89a88bdc33dd321bffb6/src/singleton.ts#L50
   */
  public registerPlugin(): void {
    if (!this.isLoaderPlugin()) {
      return
    }

    console.log('插件注册', `env:${this.appOrAgent.config.env}`, this.appOrAgent.config[this.pluginName])

    const instanceNames = this.getInstanceNames()

    console.log('挂载的实例：', instanceNames)

    // 多实例挂载，考虑get方法冲突
    const instances = {} as Record<string, any>

    instanceNames.forEach((instanceName) => {
      const pluginConfig = this.getPluginConfig(instanceName)
      instances[instanceName] = this.createEggPluginInstance(pluginConfig, this.appOrAgent)
    })

    // 挂载实例管理器，但使用不同的方法名来避免冲突
    this.appOrAgent[this.pluginName] = {
      getInstance: (name?: string) => instances[name || this.defaultInstanceName],
      getInstances: () => instances,
      getInstanceNames: () => instanceNames,
    }

    // 参考：https://github.com/eggjs/mysql/blob/master/src/boot.ts
    // Reflect.defineProperty(this.appOrAgent, this.pluginName, {
    //   get() {
    //     return instance
    //   },
    // })
  }

  /**
   * 是否加载插件
   * - 支持app.js agent.js中加载
   */
  private isLoaderPlugin(): boolean {
    // 配置不存在，不加载
    if (this.appOrAgent.config[this.pluginName] == null) {
      return false
    }
    // 获取加载配置，默认app.js
    const { loaders = [] } = this.appOrAgent.config[this.pluginName]

    // app.js 加载限定
    if (loaders.includes(PluginLoader.APP) && this.appOrAgent.type !== 'application') {
      return false
    }

    // agent.js 加载限定
    if (loaders.includes(PluginLoader.AGENT) && this.appOrAgent.type !== 'agent') {
      return false
    }

    // 加载
    return true
  }

  /**
   * 获取插件配置
   * @private
   */
  private getPluginConfig(instanceName: string) {
    const { clients, default: defaultConfig, client, loaders = [] } = this.appOrAgent.config[this.pluginName]

    const baseConfig = {
      instanceName,
      loaders,
      ...defaultConfig,

    }
    // 多实例配置
    if (this.isMultiClient()) {
      return { ...baseConfig, ...clients[instanceName] }
    }

    return { ...baseConfig, ...client }
  }

  /**
   * 获取所有的实例名称，单实例时，默认为default
   * @private
   */
  private getInstanceNames(): string[] {
    const { clients } = this.appOrAgent.config[this.pluginName]
    // 多配置插件，返回所有实例名
    return this.isMultiClient() ? Object.keys(clients) : [this.defaultInstanceName]
  }

  /**
   * 插件是否为多客户端配置
   * @private
   */
  private isMultiClient(): boolean {
    const { clients } = this.appOrAgent.config[this.pluginName]
    return clients != null
  }
}
