import type { IncomingHttpHeaders } from 'node:http'
import { AsyncLocalStorage } from 'node:async_hooks'
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { SSE_METADATA } from '@nestjs/common/constants'
import { Observable } from 'rxjs'

interface Store {
  headers: Record<string, string | string[] | undefined>
}

export const propagationContext = new AsyncLocalStorage<Store>()

@Injectable()
export class PropagationInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return propagationContext.run({ headers: this.getHeaders(context) }, () => next.handle())
  }

  private getHttpHeaders(context: ExecutionContext): IncomingHttpHeaders {
    const request = context.switchToHttp().getRequest()
    const response = context.switchToHttp().getResponse()

    // TODO 增加swagger支持x-request-id
    if (!Reflect.getMetadata(SSE_METADATA, context.getHandler()))
      response.header('x-request-id', request.headers['x-request-id'])

    return request.headers
  }

  private getWsHeaders(context: ExecutionContext): IncomingHttpHeaders {
    const host = context.switchToWs()
    const socket = host.getClient()
    const data = host.getData()
    const headers = socket.handshake.headers
    if (data?.headers) {
      return {
        ...headers,
        ...data.headers,
      }
    }
    return headers
  }

  private getRpcHeaders(context: ExecutionContext): IncomingHttpHeaders {
    const rpcContext = context.switchToRpc().getContext()
    // metadata
    return rpcContext.getMap ? rpcContext.getMap() : {}
  }

  private getHeaders(context: ExecutionContext): IncomingHttpHeaders {
    const type = context.getType()
    if (type === 'http')
      return this.getHttpHeaders(context)

    if (type === 'ws')
      return this.getWsHeaders(context)

    if (type === 'rpc')
      return this.getRpcHeaders(context)

    return {}
  }
}
