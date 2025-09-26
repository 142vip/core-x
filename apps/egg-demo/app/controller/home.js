const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    // grpc 实现类测试
    console.log('index===>', ctx.service.Example)
    ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
