import type { DataSourceParseResponse } from '../../data-source.interface'

import { ClickHouse } from 'clickhouse'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface ClickHouseOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
  querySql: string
}

/**
 * ClickHouse数据库
 */
export class VipClickhouse extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: ClickHouseOptions): Promise<DataSourceParseResponse> {
    try {
      const ch = new ClickHouse({
        url: options.host,
        port: options.port,
        basicAuth: {
          username: options.username,
          password: options.password,
        },
        config: {
          session_timeout: 60,
          enable_http_compression: 0,
          database: options.database,
        },
      })

      const data = await ch.query(options.querySql).toPromise()

      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipClickhouse.name, error)
    }
  }
}
