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
    // 这里DTable返回类似DataSourceParseResponse
    const { data, status } = await axios(options)
    // 状态码为200，请求成功
    if (status === 200) {
      return data
    }
    return { success: false }
  }
}
