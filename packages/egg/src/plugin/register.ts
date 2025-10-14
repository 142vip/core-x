// 备份

// import type { EggApp, PluginCreateInstance } from '../egg.interface'
// import type { RegisterEggPluginName } from './plugin.interface'
// import { PluginLoader } from './plugin.interface'
//
// /**
//  * egg启动的生命周期
//  * - 参考：https://www.eggjs.org/zh-CN/basics/app-start
//  */
// export class EggPluginBoot {
//   private readonly pluginName: RegisterEggPluginName
//   private readonly appOrAgent: EggApp
//   private readonly createEggPluginInstance: PluginCreateInstance
//   constructor(eggPlugin: {
//     pluginName: RegisterEggPluginName
//     appOrAgent: EggApp
//     createEggPluginInstance: PluginCreateInstance
//   }) {
//     this.pluginName = eggPlugin.pluginName
//     this.appOrAgent = eggPlugin.appOrAgent
//     this.createEggPluginInstance = eggPlugin.createEggPluginInstance
//   }
//
//   /**
//    * 此时 config 文件已经被读取并合并，但还并未生效
//    * 这是应用层修改配置的最后机会
//    * 注意：此函数只支持同步调用
//    */
//   configWillLoad(): void {
//
//   }
//
//   /**
//    * 配置文件加载完成
//    */
//   configDidLoad(): void {
//   }
//
//   /**
//    * 所有配置已经加载完毕
//    * 可以用来加载应用自定义的文件，启动自定义服务
//    * this.app.type 参考：https://github.com/eggjs/mysql/blob/master/src/boot.ts
//    */
//   public async didLoad(): Promise<void> {
//     // app.js 加载限定
//     if (this.loaderPlugin(PluginLoader.APP) && this.appOrAgent.type !== 'application') {
//       return
//     }
//
//     // agent.js 加载限定
//     if (this.loaderPlugin(PluginLoader.AGENT) && this.appOrAgent.type !== 'agent') {
//       return
//     }
//
//     this.registerPlugin()
//   }
//
//   /**
//    * 所有插件已启动完毕，但应用整体尚未 ready
//    * 可进行数据初始化等操作，这些操作成功后才启动应用
//    */
//
//   public async willReady(): Promise<void> {
//
//   }
//
//   /**
//    * 应用已启动完毕
//    */
//   public async didReady(): Promise<void> {
//   }
//
//   /**
//    * http/https 服务器已启动，开始接收外部请求
//    * 此时可以从 app.server 获取 server 实例
//    */
//   public async serverDidReady(): Promise<void> {
//   }
//
//   /**
//    * 是否加载插件
//    */
//   private loaderPlugin(loader: PluginLoader = PluginLoader.APP) {
//     // 获取加载配置，默认app.js
//     const { loaders = [] } = this.appOrAgent.config[this.pluginName]
//
//     return loaders.includes(loader)
//   }
//
//   /**
//    * 注册插件
//    * - 区分单实例、多实例挂载
//    * 参考：https://github.com/eggjs/core/blob/41fe40ff68432db1f0bd89a88bdc33dd321bffb6/src/singleton.ts#L50
//    */
//   private registerPlugin(): void {
//     if (this.appOrAgent.config[this.pluginName] == null) {
//       return
//     }
//
//     console.log('插件注册', `env:${this.appOrAgent.config.env}`, this.appOrAgent.config[this.pluginName])
//
//     const { clients, default: defaultConfig, client, loaders = [] } = this.appOrAgent.config[this.pluginName]
//
//     // 配置 agent 或者 app 才加载单例
//     if (clients == null) {
//       // 单实例挂载，这里的配置，单例函数自己覆盖
//       // this.appOrAgent.addSingleton(this.pluginName, this.createEggPluginInstance)
//
//       const instanceName = 'default'
//       const pluginConfig = {
//         instanceName,
//         ...defaultConfig,
//         ...client,
//         // 加载位置
//         loaders,
//       }
//       const instance = this.createEggPluginInstance(pluginConfig, this.appOrAgent)
//       console.log('单实例挂载', this.pluginName, instance)
//       // this.appOrAgent[this.pluginName] = {
//       //   getInstance: (_name?: string) => instance,
//       //   getInstances: () => ({ default: instance }),
//       //   getInstanceNames: () => ['default'],
//       //   // 将第一个配置对应的实例，作为默认实例
//       //   ...instance,
//       // } as EggPluginInstance<T>
//
//       // Object.assign(this.appOrAgent[this.pluginName] as EggPluginInstance<T>, {
//       //   getInstance: (_name?: string) => instance,
//       //   getInstances: () => ({ default: instance }),
//       //   getInstanceNames: () => ['default'],
//       // })
//       this.appOrAgent[this.pluginName] = {
//         // ...instance,
//         getInstance: (_name?: string) => instance,
//         getInstances: () => ({ [instanceName]: instance }),
//         getInstanceNames: () => [instanceName],
//       }
//       // 参考：https://github.com/eggjs/mysql/blob/master/src/boot.ts
//       // Reflect.defineProperty(this.appOrAgent, this.pluginName, {
//       //   get() {
//       //     return instance
//       //   },
//       // })
//     }
//     else {
//       // 多实例挂载，考虑get方法冲突
//       const instances = {} as Record<string, any>
//       const instanceNames = Object.keys(clients)
//       console.log('多实例挂载', instanceNames)
//
//       instanceNames.forEach((name) => {
//         // 覆盖默认值
//         const instanceConfig = {
//           // 多实例加载时，补一个实例名，用于配置、实例获取
//           instanceName: name,
//           ...defaultConfig,
//           ...clients[name],
//           loaders,
//         }
//         instances[name] = this.createEggPluginInstance(instanceConfig, this.appOrAgent)
//       })
//
//       // 挂载实例管理器，但使用不同的方法名来避免冲突
//       this.appOrAgent[this.pluginName] = {
//         getInstance: (name: string) => instances[name],
//         getInstances: () => instances,
//         getInstanceNames: () => instanceNames,
//         // 将第一个配置对应的实例，作为默认实例
//         // ...instances[instanceNames[0]],
//       }
//     }
//   }
// }
