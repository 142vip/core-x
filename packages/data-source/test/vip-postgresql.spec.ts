import type { PostgreSqlOptions } from '@142vip/data-source'
import { VipPostgreSql } from '@142vip/data-source'

describe('vip-postgresql', () => {
  it('should work', async () => {
    const options: PostgreSqlOptions = {
      connectURL: 'postgresql://postgres:postgres@localhost:5432/postgres',
      querySql: 'select 1',
    }
    const vipPostgreSql = new VipPostgreSql()

    const data = vipPostgreSql.getConnectionData(options)
    console.log(1, data)
    expect(1).toBe(1)
  })
})
