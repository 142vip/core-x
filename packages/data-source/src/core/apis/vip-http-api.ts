import type { AxiosRequestConfig } from '@142vip/axios'
import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceParseResponse } from '../../data-source.interface'
import { createVipAxios, HttpStatus } from '@142vip/axios'

export interface HttpApiOptions extends AxiosRequestConfig {}

/**
 * 用 `@142vip/axios` 的 `createVipAxios()` 发 HTTP。
 * 不传配置时复用 axios 默认实例，与原先直接调用 `axios(config)` 一样。
 */
export class VipHttpApi implements DataSourceConnector<HttpApiOptions> {
  private readonly axiosClient = createVipAxios()

  /**
   * 获取连接数据
   */
  public async getConnectionData<T>(options: HttpApiOptions): Promise<DataSourceParseResponse<T>> {
    // 未传 validateStatus 时不把非 2xx 抛掉，改按状态码收成失败结果
    const { data, status } = await this.axiosClient.request({
      ...options,
      validateStatus: options.validateStatus ?? (() => true),
    })
    if (status === HttpStatus.OK)
      return data
    return { success: false }
  }
}
