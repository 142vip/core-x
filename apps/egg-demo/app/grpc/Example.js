const { clientToServer, clientToServerStream } = require('@142vip/egg-grpc-server/example/example-grpc')
const { clientStreamToServer } = require('@142vip/grpc')
const { Service } = require('egg')

/**
 * 每一个RPC实现类，都应该继承Egg.service类
 * - 可以另外拓展
 */
class Example extends Service {
  async test() {
    const { ctx } = this
    console.log('test:', ctx.method)
  }

  async ClientToServer(requestData) {
    const { app } = this
    console.log(app)
    console.log(this.service)

    return await clientToServer(requestData)
  }

  async ClientToServerStream(requestData) {
    const { app } = this
    console.log(123123, app.service)
    return await clientToServerStream(requestData)
  }

  async clientStreamToServer(requestData) {
    const { app } = this
    console.log(123123, app.service)
    return await clientStreamToServer(requestData)
  }
}

module.exports = Example
