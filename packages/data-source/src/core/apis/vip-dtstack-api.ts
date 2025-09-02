import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceParseResponse } from '../../data-source.interface'
import type { HttpApiOptions } from './vip-http-api'
import crypto from 'node:crypto'
import { handlerDataSourceConnectError } from '../../data-source.utils'
import { VipHttpApi } from './vip-http-api'

/**
 * api 认证
 */
interface DTStackAPIAuth {
  // 请求的api id，来源于actionId
  apiId: number
  appKey: number
  appSecret: string
}

export interface DTStackAPIOptions extends DTStackAPIAuth {
  url: string
  method: 'GET' | 'POST'
  pathParams: string
  headerParams: Record<string, unknown>
  bodyParams: Record<string, unknown>
  queryParams: Record<string, unknown>
}

/**
 * 数栈API
 */
export class VipDtStackApi implements DataSourceConnector<DTStackAPIOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: DTStackAPIOptions): Promise<DataSourceParseResponse> {
    try {
      const apiConfig = this.getConfig(options)
      return new VipHttpApi().getConnectionData(apiConfig)
    }
    catch (error) {
      return handlerDataSourceConnectError(VipDtStackApi.name, error)
    }
  }

  /**
   * 获取数栈请求时配置
   * @param apiParams
   * @private
   */
  private getConfig(apiParams: DTStackAPIOptions): HttpApiOptions {
    const timestamp = new Date().getDate().toString()
    const signToStr = [
      ...Object.entries(apiParams.bodyParams),
      ...Object.entries(apiParams.headerParams),
      ...Object.entries(apiParams.queryParams),
      ['X-Auth-Key', apiParams.appKey],
      ['X-Auth-ActionId', apiParams.apiId],
      ['X-Auth-Timestamp', timestamp],
    ].sort().map(([key, value]) => {
      return `${key}=${value}`
    }).concat(apiParams.appSecret).join('&')

    // 加签
    const signature = this.getSignature(signToStr)

    // 处理api地址拼接
    const baseUrl = new URL(apiParams.url)
    baseUrl.pathname = apiParams.pathParams.replace(/^\//, '')
    const apiUrl = baseUrl.toString()

    return {
      url: apiUrl,
      method: apiParams.method,
      // query参数
      params: apiParams.queryParams,
      // body参数
      data: apiParams.bodyParams,
      // timeout: APIDTSightConfig.API_TIMEOUT * 1000,
      headers: {
        ...apiParams.headerParams,
        'X-Auth-Key': apiParams.appKey,
        'X-Auth-ActionId': apiParams.apiId,
        'X-Auth-Signature': signature,
        'X-Auth-Timestamp': timestamp,
      },
    }
  }

  /**
   * 字符串进行MD5加密
   * - 数栈请求数据，加密获取签名
   */
  private getSignature(strToSign: string): string {
    return crypto.createHash('md5').update(strToSign, 'utf8').digest('hex')
  }
}
