import type { DataSourceParseResponse } from '../../data-source.interface'
import { mapValues } from 'lodash'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

interface DamengOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
  querySql: string
}

/**
 * 达梦数据库
 */
export class VipDameng extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: DamengOptions): Promise<DataSourceParseResponse> {
    // 动态引入包，保证应用启动不报错
    // eslint-disable-next-line ts/no-require-imports
    const dmdb = require('dmdb')
    let connection
    let dmPool
    try {
      dmPool = await dmdb.createPool({
        connectString: `dm://${options.username}:${options.password}@${options.host}:${options.port}`,
        poolMax: 10,
        poolMin: 1,
      })
      connection = await dmPool.getConnection()
      // 执行sql查询结果
      const result = await connection.execute(options.querySql, [], {
        outFormat: dmdb.OUT_FORMAT_OBJECT,
      })

      // 处理bigint数据
      const data = result.rows?.map((item: Record<string, unknown>) =>
        mapValues(item, value => typeof value === 'bigint'
          ? value.toString()
          : value),
      )

      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipDameng.name, error)
    }
    finally {
      await dmPool?.close()
      await connection?.close()
    }
  }
}
