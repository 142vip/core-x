import type { AxiosRequestConfig } from 'axios'
import type { DataSourceParseResponse } from '../../data-source.interface'
import axios from 'axios'
import { DataSourceManager } from '../../data-source.manager'

export interface HttpApiOptions extends AxiosRequestConfig {}

/**
 * 发送Http，请求API
 * - 标准的axios请求
 */
export class VipHttpApi extends DataSourceManager {
  public override async getConnectionData<T>(options: HttpApiOptions): Promise<DataSourceParseResponse<T>> {
    // 这里DTable返回类似DataSourceParseResponse
    const { data, status } = await axios(options)
    // 状态码为200，请求成功
    if (status === 200) {
      return data
    }
    return { success: false }
  }
}
