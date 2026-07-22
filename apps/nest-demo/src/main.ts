import { NestStarter } from '@142vip/nest-starter'
import { AppModule } from './app.module'
import { Config } from './config'

/**
 * 统一启动：
 * - 开发（NODE_ENV=local）：交互选择 xxx.config.js
 * - 生产：加载 config.js
 * - 配置由 NestStarter 注入为全局模块，AppModule 内可直接 DI（如 StarterConfig）
 * - start 完成后也可使用 nestStaterConfig / nestAppConfig / getConfig
 */
void NestStarter.getInstance().start(AppModule, Config)
