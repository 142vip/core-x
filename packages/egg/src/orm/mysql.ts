import MySQL from 'mysql2/promise'

/**
 * 连接池参数
 */
export interface VipMySQLPoolOptions extends MySQL.PoolOptions {}

/**
 * 连接池对象
 */
export interface MySQLPool extends MySQL.Pool {}

/**
 * 连接池中的连接
 */
export interface MySQLPoolConnection extends MySQL.PoolConnection {}

/**
 * MySQL 连接池
 * - 参考：https://sidorares.github.io/node-mysql2/zh-CN/docs
 */
export class VipMySQLPool {
  public readonly pool: MySQLPool
  constructor(options: VipMySQLPoolOptions) {
    this.pool = MySQL.createPool(options)
  }

  /**
   * 创建连接池
   * @param options
   */
  public static createPool(options: VipMySQLPoolOptions): MySQLPool {
    return MySQL.createPool(options)
  }

  public async query(sql: string) {
    const conn = await this.getConnection()
    const queryRes = await conn.query(sql)

    // 释放连接
    this.pool.releaseConnection(conn)
    return queryRes
  }

  /**
   * database不存在，则创建
   * @param databaseName
   */
  public async createDataBaseName(databaseName: string) {
    const sql = `CREATE DATABASE IF NOT EXISTS ${databaseName} default charset utf8 COLLATE utf8_general_ci`

    return await this.query(sql)
  }

  /**
   * 事务提交
   * @param transactionFun
   */
  // eslint-disable-next-line ts/no-unsafe-function-type
  public async transaction(transactionFun: Function): Promise<void> {
    const conn = await this.getConnection()

    try {
      await conn.beginTransaction()
      await transactionFun()

      // 事务提交
      await conn.commit()
    }
    catch (e) {
      await conn.rollback()
      conn.release()
      throw e
    }
  }

  /**
   * 获取连接池的连接
   * - 手动获取，需要手动释放
   * @private
   */
  private async getConnection(): Promise<MySQLPoolConnection> {
    return await this.pool.getConnection()
  }
}
