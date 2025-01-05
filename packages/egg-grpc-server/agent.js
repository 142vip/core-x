const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createEggGrpcServerInstance } = require('./core/grpc-server')

class EggGrpcServerAgentBoot extends EggPluginBoot {
  constructor(agent) {
    super({
      pluginName: RegisterEggPluginName.EGG_GRPC_SERVER,
      appOrAgent: agent,
      createEggPluginInstance: createEggGrpcServerInstance,
    })
  }
}

module.exports = EggGrpcServerAgentBoot
