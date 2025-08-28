import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { DataSourceManager } from '../../data-source.manager'

interface HttpApiOptions extends AxiosRequestConfig {

}

/**
 * 发送Http，请求API
 * - 标准的axios请求
 */
export class VipHttpApi extends DataSourceManager {
  public override async getConnectionData(options: HttpApiOptions) {
    const { data, status } = await axios(options)
    if (status === 200) {
      return { success: true, data }
    }
    return { success: false }
  }
}
