const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    // grpc 实现类测试
    console.log('index===>', ctx.service.Example)
    ctx.body = 'hi, egg'
  }

  /**
   * 测试grpcClient
   */
  async testGrpcClient() {
    const { ctx, app } = this

    // 获取客户端挂载实例
    const grpcClientInCtx = ctx.grpcClient
    const grpcClientInApp = app.grpcClient

    ctx.body = {
      grpcClientInCtx,
      grpcClientInApp,
      app: this.app.grpcClient,
      keys: Object.keys(grpcClientInApp),
    }
  }

  /**
   * 测试grpcServer
   */
  async testGrpcServer() {
    const { ctx, app } = this

    const grpcServerInCtx = ctx.grpcServer
    const grpcServerInApp = app.grpcServer

    ctx.body = {
      grpcServerInCtx,
      grpcServerInApp,
    }
  }
}

module.exports = HomeController
