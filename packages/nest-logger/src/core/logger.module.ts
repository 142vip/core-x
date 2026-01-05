import { DynamicModule, INestApplication } from '@nestjs/common'
import { Logger, LoggerModule } from 'nestjs-pino'
import pino from 'pino'
import { ConsoleLogger } from '../adapter'
import { NestLoggerConfig } from './logger.config'
import StreamEntry = pino.StreamEntry

/**
 * 日志模块
 */
export class NestLoggerModule {
  /**
   * 注入
   * @param loggerConfig
   */
  public static register(loggerConfig: NestLoggerConfig): DynamicModule {
    return LoggerModule.forRootAsync({
      useFactory: () => {
        const { consoleLogger, fileLogger } = loggerConfig

        // 本地启动时，禁止连接钉钉，推送告警信息到钉钉
        const loggers: StreamEntry[] = []
        // 终端日志
        if (consoleLogger != null) {
          loggers.push({
            stream: new ConsoleLogger(consoleLogger),
            level: consoleLogger.level,
          })
        }

        // 文件日志
        if (fileLogger != null) {
          loggers.push({ stream: fileLogger, level: fileLogger.level })
        }

        return {
          pinoHttp: [
            // traceId 从请求头获取
            {
              genReqId: req => req.headers['x-request-id'] ?? '123',
              level: 'trace',
            },
            pino.multistream(loggers),
          ],
        }
      },
    })
  }

  /**
   * 开启日志
   */
  public static useLogger(app: INestApplication): INestApplication {
    const logger = app.get(Logger)
    app.useLogger(logger)
    app.flushLogs()
    return app
  }
}
