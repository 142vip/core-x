import type { DataSourceParseResponse } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'

/**
 * 数栈API
 */
export class VipDtStackApi extends DataSourceManager {
  public override async getConnectionData<T>(_options: T): Promise<DataSourceParseResponse> {
    return super.getConnectionData(_options)
  }
}
