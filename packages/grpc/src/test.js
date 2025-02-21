const { GrpcClient } = require('@142vip/grpc')
const { loadPackageDefinition } = require('@grpc/grpc-js')
const { loadSync } = require('@grpc/proto-loader')

const packageDefinition = loadSync('./test.proto', {})
const test = loadPackageDefinition(packageDefinition)

console.log(1, test)
console.log(2, test.helloWorld)
console.log(3, test.helloWorld.Greeter)

const aa = GrpcClient.getInstance()

console.log(33, aa)

aa.close()
