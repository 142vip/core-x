import { VipColor, vipDetect, vipLodash } from '@142vip/utils'
import { INestApplication, Logger } from '@nestjs/common'
import { StarterConfig } from './config'
import { nestProcess } from './nest-process'

export class NestUtil {
  public readonly app: INestApplication
  public readonly starterConfig: StarterConfig
  private logger = new Logger()

  constructor(app: INestApplication, starterConfig: StarterConfig) {
    this.app = app
    this.starterConfig = starterConfig
  }

  /**
   * 是否为开发模式
   * - 本地环境
   * - 开发环境
   * - 测试环境
   */
  public isDevelopMode(): boolean {
    return nestProcess.isDevelopMode()
  }

  public async printAppModuleStarterLogger() {
    // 未开启日志
    if (!this.starterConfig.enableLogger)
      return

    // 应用日志
    this.printAppLogger()

    // http 日志
    await this.printHttpLogger()

    // grpc 日志
    this.privateGrpcLogger()

    // swagger日志
    this.printSwaggerLogger()
  }

  /**
   * GRPC 日志
   * @private
   */
  private privateGrpcLogger() {
    // if (this.starterConfig.grpcServer?.url)
    //   logger.log(`🔌 GRPC服务: ${this.starterConfig.grpcServer.url}`)

  }

  private printAppLogger() {
    const appName = nestProcess.getAppEnv()
    const template = this.getLoggerTemplate('🚀 应用启动成功', {
      nodeEnv: nestProcess.getNodeEnv()!,
      config: `${nestProcess.getRunEnv()}.config.js`,
      ...(appName == null ? {} : { appName }),
      ...(this.starterConfig.globalPrefix == null ? {} : { globalPrefix: this.starterConfig.globalPrefix }),
    })
    this.logger.log(template)
  }

  /**
   * 获取日志模板
   * @private
   */
  private printSwaggerLogger(): void {
    if (!this.starterConfig.enableSwagger || this.starterConfig.swagger?.envs == null) {
      return
    }

    // swagger envs 配置 遍历
    for (const [envName, serverUrl] of Object.entries(this.starterConfig.swagger?.envs)) {
      const docPath = this.starterConfig.swagger?.docPath
      const uiUrl = `${serverUrl}:${this.starterConfig.port}/${docPath}`
      const apiUrl = `${serverUrl}:${this.starterConfig.port}/${docPath}-json`

      const template = this.getLoggerTemplate(`📚 Swagger API，${VipColor.greenBright(envName)} ${VipColor.greenBright('环境')}`, {
        doc: uiUrl,
        JSON: apiUrl,
      })
      this.logger.log(template)
    }
  }

  /**
   * http服务日志
   * @private
   */
  private async printHttpLogger(): Promise<void> {
    const apiUrl = await this.app.getUrl()
    const { local, ip } = await vipDetect.getAddress()

    const [localOrigin, ipOrigin] = [local, ip].map((address) => {
      const api = new URL(apiUrl)
      // 替换hostname为地址
      api.hostname = address!

      return api.origin
    })

    const template = this.getLoggerTemplate(`🌐 HTTP服务`, { local: localOrigin, network: ipOrigin })
    this.logger.log(template)
  }

  /**
   * 终端日志模板
   * @param title
   * @param info
   */
  private getLoggerTemplate(title: string, info: Record<string, string>): string {
    let content = ''
    const maxKeyLength = Math.max(...Object.keys(info).map(key => key.length))
    Object.entries(info).forEach(([key, value]) => {
      content += `    ➜    ${vipLodash.upperFirst(key)}:${' '.repeat(maxKeyLength - key.length + 8)}${VipColor.greenBright(value)}\n`
    })
    content = `\n${content}`
    return `${title}：${content}`
  }
}
