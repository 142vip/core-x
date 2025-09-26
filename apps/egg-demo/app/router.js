module.exports = (app) => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  // test grpc
  router.get('/testGrpcClient', controller.home.testGrpcClient)
  router.get('/testGrpcServer', controller.home.testGrpcServer)
}
