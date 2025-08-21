import type { DataSourceParseResponse } from '../../data-source.interface'
import crypto from 'node:crypto'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'
import { VipHttpApi } from './vip-http-api'

/**
 * api 认证
 */
interface DTStackAPIAuth {
  // 请求的api id，来源于actionId
  apiId: string
  appKey: string
  appSecret: string
}

interface DTStackAPIParams extends DTStackAPIAuth {
  url: string
  method: 'get' | 'post'
  pathParams: string
  headerParams: Record<string, string>
  bodyParams: Record<string, unknown>
  queryParams: Record<string, unknown>
}

/**
 * 数栈API
 */
export class VipDtStackApi extends DataSourceManager {
  public override async getConnectionData(apiParams: DTStackAPIParams): Promise<DataSourceParseResponse> {
    try {
      const apiConfig = this.getConfig(apiParams)
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
  private getConfig(apiParams: DTStackAPIParams) {
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

    return {
      url: apiParams.url,
      method: apiParams.method,
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
