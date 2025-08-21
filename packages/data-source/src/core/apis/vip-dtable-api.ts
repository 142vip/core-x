import type { AxiosRequestConfig } from 'axios'
import type { DataSourceParseResponse } from '../../data-source.interface'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'
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
    try {
      return await new VipHttpApi().getConnectionData(config)
    }
    catch (error) {
      return handlerDataSourceConnectError(VipDTableApi.name, error)
    }
  }
}
