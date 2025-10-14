import type { MySQLPool } from '@142vip/egg'
import { beforeAll, expect } from '@jest/globals'
import { app } from 'egg-mock/bootstrap'
import { EGG_SERVER_ENV } from '../plugin.config'

/**
 * @142vip/egg-mysql 测试
 */
describe('默认环境加载插件配置', () => {
  process.env.EGG_SERVER_ENV = EGG_SERVER_ENV.MYSQL
  let mysql: any

  beforeAll(() => {
    // 从agent.js加载的对象获取grpcServer
    mysql = app.mysql
    expect(mysql).toBeDefined()
  })

  it('加载插件 - 检查默认实例', async () => {
    expect(mysql).toBeDefined()

    // 校验instanceNames
    const grpcServerInstanceNames = mysql.getInstanceNames()
    expect(grpcServerInstanceNames).toBeDefined()
    expect(grpcServerInstanceNames).toHaveLength(1)
    expect(grpcServerInstanceNames).toContain('default')
  })

  it('端口、连接地址检测', async () => {
    const mysqlInstance = mysql.getInstance('default') as MySQLPool
    expect(mysqlInstance).toBeDefined()
    expect(mysql).toHaveProperty('getInstances')

    console.log(mysqlInstance.config)
  })
})
