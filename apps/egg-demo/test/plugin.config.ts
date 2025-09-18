import { createRequire } from 'node:module'

const nodeRequire = createRequire(import.meta.url)

/**
 * 插件默认的配置
 */
export const defaultEggAxiosPluginConfig = nodeRequire('@142vip/egg-axios/config/config.default').axios
export const defaultEggMysqlPluginConfig = nodeRequire('@142vip/egg-mysql/config/config.default').mysql
export const defaultEggGrpcClientPluginConfig = nodeRequire('@142vip/egg-grpc-client/config/config.default').grpcClient
export const defaultEggGrpcServerPluginConfig = nodeRequire('@142vip/egg-grpc-server/config/config.default').grpcServer
