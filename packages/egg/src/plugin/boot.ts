import type { EggPluginManagerOptions } from './manager'
import { EggPluginManager } from './manager'

/**
 * Egg Plugin 加载基类，包含Egg Plugin生命周期
 */
export class EggPluginBoot {
  private readonly pluginManager: EggPluginManager

  constructor(eggPlugin: EggPluginManagerOptions) {
    this.pluginManager = new EggPluginManager(eggPlugin)
  }

  /**
   * 此时 config 文件已经被读取并合并，但还并未生效
   * 这是应用层修改配置的最后机会
   * 注意：此函数只支持同步调用
   */
  configWillLoad(): void {}

  /**
   * 配置文件加载完成
   */
  configDidLoad(): void {}

  /**
   * 所有配置已经加载完毕
   * 可以用来加载应用自定义的文件，启动自定义服务
   * this.app.type 参考：https://github.com/eggjs/mysql/blob/master/src/boot.ts
   */
  public async didLoad(): Promise<void> {
    this.pluginManager.registerPlugin()
  }

  /**
   * 所有插件已启动完毕，但应用整体尚未 ready
   * 可进行数据初始化等操作，这些操作成功后才启动应用
   */

  public async willReady(): Promise<void> {}

  /**
   * 应用已启动完毕
   */
  public async didReady(): Promise<void> {}

  /**
   * http/https 服务器已启动，开始接收外部请求
   * 此时可以从 app.server 获取 server 实例
   */
  public async serverDidReady(): Promise<void> {}
}
