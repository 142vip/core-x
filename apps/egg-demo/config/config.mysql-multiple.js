/**
 * @142vip/egg-mysql 多实例
 */
module.exports = {
  mysql: {
    clients: {
      example1: {
        host: 'localhost',
        port: 3306,
        database: 'test',
        username: 'root',
        password: '123456',
      },
      example2: {
        host: 'localhost',
        port: 3306,
        database: 'test',
        username: 'root',
        password: '123456',
      },
    },
  },
}
