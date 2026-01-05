module.exports = {
  starter: {
    port: 3000,
    enableSwagger: true,
    swagger: {
      // docPath: '/doc',
      // envs: {
      //   local: 'http://127.0.0.1',
      // },
    },
    redis: {
      url: 'redis://127.0.0.1:6379',
    },
    typeorm: {
      url: 'postgres://root:123456@127.0.0.1:5432/oauth-service',
      synchronize: false,
      logging: 'true',
    },
    enableLogger: true,
    // enableSwagger: true,
  },
}
