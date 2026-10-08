import type { AxiosRequestConfig } from 'axios'
import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceParseResponse } from '../../data-source.interface'
import axios from 'axios'

export interface HttpApiOptions extends AxiosRequestConfig {}

/**
 * 发送Http，请求API
 * - 标准的axios请求
 */
export class VipHttpApi implements DataSourceConnector<HttpApiOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData<T>(options: HttpApiOptions): Promise<DataSourceParseResponse<T>> {
    // axios 默认把非 2xx 抛掉；未自定义 validateStatus 时按状态码收成失败结果
    const { data, status } = await axios({
      ...options,
      validateStatus: options.validateStatus ?? (() => true),
    })
    if (status === 200)
      return data
    return { success: false }
  }
}
