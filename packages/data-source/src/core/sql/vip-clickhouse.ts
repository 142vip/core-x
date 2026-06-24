import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceConnectionOptions, DataSourceParseResponse } from '../../data-source.interface'
import { ClickHouseClient, createClient } from '@clickhouse/client'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface ClickHouseOptions extends DataSourceConnectionOptions {
  database: string
}

/**
 * ClickHouse数据库
 */
export class VipClickhouse implements DataSourceConnector<ClickHouseOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: ClickHouseOptions): Promise<DataSourceParseResponse> {
    let client: ClickHouseClient | undefined
    try {
      client = createClient({
        url: this.buildClickHouseUrl(options.host, options.port),
        username: options.username,
        password: options.password,
        ...(options.database ? { database: options.database } : {}),
        request_timeout: 60_000,
        compression: {
          response: false,
        },
        // clickhouse_settings: {
        //   session_timeout: 60,
        // },
      })
      const resultSet = await client.query({
        query: options.querySql,
        format: 'JSONEachRow',
      })
      const data = await resultSet.json()
      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipClickhouse.name, error)
    }
    finally {
      await client?.close()
    }
  }

  private buildClickHouseUrl(host: string, port: number): string {
    if (host.startsWith('http://') || host.startsWith('https://'))
      return /:\d+$/.test(host) ? host : `${host}:${port}`
    return `http://${host}:${port}`
  }
}
