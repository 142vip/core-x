import type { DataSourceConnector } from '../../data-source.connector'
import type {
  DataSourceConnectionOptions,
  DataSourceParseResponse,
} from '../../data-source.interface'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface IbmDBOptions extends DataSourceConnectionOptions {
  database: string
}

/**
 * DB2 数据源
 */
export class VipIbmDB implements DataSourceConnector<IbmDBOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: IbmDBOptions): Promise<DataSourceParseResponse> {
    // eslint-disable-next-line ts/no-require-imports
    const ibmDB = require('ibm_db')
    let connection
    try {
      connection = ibmDB()
      const connectURL = this.getConnectURL(options)
      await connection.open(connectURL)
    }
    catch (error) {
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

  /**
   * 获取链接URL
   * @param options
   * @private
   */
  private getConnectURL(options: IbmDBOptions): string {
    return `DATABASE=${options.database};HOSTNAME=${options.host};PORT=${options.port};PROTOCOL=TCPIP;UID=${options.username};PWD=${options.password}`
  }
}
