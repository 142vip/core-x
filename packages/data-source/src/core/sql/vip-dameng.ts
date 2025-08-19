import type { DataSourceParseResponse, DataSourceResponseError } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'
import _, { isEmpty } from 'lodash'

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
      const data = result.rows?.map((item: Record<string, unknown>) => _.mapValues(item, value => typeof value === 'bigint' ? value.toString() : value))

      return { success: true, data }
    }
    catch (err) {
      const error = err as DataSourceResponseError
      return { success: false, message: isEmpty(error?.message) ? '执行sql语句失败' : JSON.stringify(error.message) }
    }
    finally {
      await dmPool?.close()
      await connection?.close()
    }
  }
}
