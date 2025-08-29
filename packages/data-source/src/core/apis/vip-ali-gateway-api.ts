import type { DataSourceParseResponse } from '../../data-source.interface'
import { Client } from 'aliyun-api-gateway'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

const AliGateway_API_TIMEOUT = 30000 // API 请求超时时间  默认30s

interface AliGatewayAPIAuth {
  appKey: string
  appSecret: string
}

export interface AliGatewayApiOptions extends AliGatewayAPIAuth {
  method: 'post' | 'get' | 'put' | 'delete'
  url: string
  bodyParams?: Record<string, unknown>
  headerParams?: Record<string, unknown>
}

/**
 * 阿里云网关API
 * 参考：https://www.npmjs.com/package/aliyun-api-gateway
 */
export class VipAliGatewayApi extends DataSourceManager {
  public override async getConnectionData(params: AliGatewayApiOptions): Promise<DataSourceParseResponse> {
    try {
      const aliClient = new Client(params.appKey, params.appSecret)

      const data = await aliClient[params.method](params.url, {
        timeout: AliGateway_API_TIMEOUT,
        data: params.bodyParams,
        headers: params.headerParams,
      })

      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipAliGatewayApi.name, error)
    }
  }
}
