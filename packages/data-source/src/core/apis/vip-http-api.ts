import type { AxiosRequestConfig } from 'axios'
import { DataSourceManager } from '@142vip/data-source'
import axios from 'axios'

interface HttpApiOptions extends AxiosRequestConfig {

}

/**
 * 发送Http，请求API
 */
export class VipHttpApi extends DataSourceManager {
  public async getConnectionData(options: HttpApiOptions) {
    const { data, status } = await axios(options)
    if (status === 200) {
      return { success: true, data }
    }
    return { success: false }
  }
}
