import type {
  DataSourceConnectionOptions,
  DataSourceParseResponse,
  DataSourceResponseError,
} from '../../data-source.interface'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface IbmDBOptions extends DataSourceConnectionOptions {
  database: string
}

/**
 * DB2 数据源
 */
export class VipIbmDB extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: IbmDBOptions): Promise<DataSourceParseResponse> {
    // eslint-disable-next-line ts/no-require-imports
    const ibmdb = require('ibm_db')
    let connection
    try {
      connection = ibmdb()
      const connectURL = this.getConnectURL(options)
      await connection.open(connectURL)
    }
    catch (err) {
      const error = err as DataSourceResponseError
      return handlerDataSourceConnectError(VipIbmDB.name, error)
    }

    try {
      const data = await connection.query(options.querySql)
      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipIbmDB.name, error)
    }
    finally {
      await connection.close()
    }
  }

  private getConnectURL(options: IbmDBOptions): string {
    return `DATABASE=${options.database};HOSTNAME=${options.host};PORT=${options.port};PROTOCOL=TCPIP;UID=${options.username};PWD=${options.password}`
  }
}
