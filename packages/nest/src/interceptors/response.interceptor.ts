import type { Observable } from 'rxjs'
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { SSE_METADATA } from '@nestjs/common/constants'
import { plainToInstance } from 'class-transformer'
import { map } from 'rxjs/operators'
import { METADATA_KEY_PAGINATION_VO_CLASS, METADATA_KEY_RESPONSE_VO_CLASS_KEY } from '../constants'
import { PaginationVo } from '../dtos'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    // 获取当前处理的方法
    const ctxHandler = context.getHandler()

    if (context.getType() !== 'http' || Reflect.getMetadata(SSE_METADATA, ctxHandler))
      return next.handle()

    const response = context.switchToHttp().getResponse()

    // 统一状态码为200
    response.status(HttpStatus.OK)

    // 统一返回格式
    return next
      .handle()
      .pipe(
        map((response) => {
        // 获取VO类,存在ItemVo类时，用户需要分页
          const paginationVoClass = Reflect.getMetadata(METADATA_KEY_PAGINATION_VO_CLASS, ctxHandler)
          // 分页，自动包装
          if (paginationVoClass != null) {
            response = PaginationVo.format(paginationVoClass, response)
          }
          else {
          // 非分页，返回对象或者数组
            const resVoClass = Reflect.getMetadata(METADATA_KEY_RESPONSE_VO_CLASS_KEY, ctxHandler)
            if (resVoClass != null) {
            // 数组 or 对象
              response = Array.isArray(response)
                ? response.map(item => plainToInstance(resVoClass, item))
                : plainToInstance(resVoClass, response)
            }
          }

          // 统一返回
          return { success: true, data: response }
        }),
      )
  }
}
