import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common'
import { Response } from 'express'
import { HttpError } from 'http-errors'

@Catch()
export class GlobalFilter implements ExceptionFilter<Error | HttpException | unknown> {
  protected readonly logger = new Logger(GlobalFilter.name)

  public async catch(
    e: Error | HttpException | unknown,
    host: ArgumentsHost,
  ): Promise<void> {
    if (e instanceof HttpException && e.getStatus() < 500)
      this.logger.warn(e)
    else
      this.logger.error(e)

    if (host.getType<'http' | 'rmq'>() === 'rmq') {
      this.logger.error(e)
      this.logger.error(host.getArgs())
      return
    }
    host
      .switchToHttp()
      .getResponse<Response>()
      // 保留中间件返回的PAYLOAD_TOO_LARGE状态码
      .status(e instanceof HttpException ? e.getStatus() : e instanceof HttpError && e.statusCode === HttpStatus.PAYLOAD_TOO_LARGE ? HttpStatus.PAYLOAD_TOO_LARGE : HttpStatus.OK)
      .json({
        success: false,
        message: e instanceof HttpException
          ? (<{ message: unknown }>(e.getResponse())).message ?? e.getResponse()
          : e instanceof Error
            ? e.message
            : '未知错误',
      })
  }
}
