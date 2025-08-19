import type { DataSourceParseResponse, DataSourceResponseError } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'
import { ClickHouse } from 'clickhouse'
import { isEmpty } from 'lodash'

interface ClickHouseOptions {
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
      return { success: true, message: '执行成功', data }
    }
    catch (err) {
      const error = err as DataSourceResponseError
      return { success: false, message: isEmpty(error?.message) ? '执行sql语句失败' : JSON.stringify(error.message) }
    }
  }
}
