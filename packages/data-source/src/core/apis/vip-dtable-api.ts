import type { AxiosRequestConfig } from 'axios'
import type { DataSourceParseResponse } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'
import { VipHttpApi } from './vip-http-api'

export interface DTableAPIData {
  page?: number
  size?: number
  total?: number
  records?: any
}

/**
 * DTable API
 */
export class VipDTableApi extends DataSourceManager {
  public override async getConnectionData(config: AxiosRequestConfig): Promise<DataSourceParseResponse<DTableAPIData>> {
    const vipHttpApi = new VipHttpApi()

    return await vipHttpApi.getConnectionData(config)
  }
}
