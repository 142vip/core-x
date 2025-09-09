/**
 * 注册的Egg插件key
 */
export enum RegisterEggPluginName {
  EGG_AXIOS = 'axios',
  EGG_MYSQL = 'mysql',
  EGG_REDIS = 'redis',
  EGG_SEQUELIZE = 'sequelize',
  EGG_RABBIT = 'rabbit',
  EGG_VALIDATE = 'validate',
  EGG_SWAGGER = 'swagger',
  EGG_GRPC_CLIENT = 'grpcClient',
  EGG_GRPC_SERVER = 'grpcServer',
}

/**
 * egg插件加载方式
 * - simple 简单模式
 * - multiple 多实例模式
 */
export enum PluginLoadType {
  SIMPLE = 'simple',
  MULTIPLE = 'multiple',
}

/**
 * egg插件加载时的环境变量
 * - 动态赋值给插件加载时的环境变量EGG_SERVER_ENV字段
 */
export enum PluginLoadEnv {
  DEFAULT = 'default',
  SIMPLE = 'simple',
  MULTIPLE = 'multiple',
}

/**
 * 插件加载时机
 * - app.js 中
 * - agent.js 中
 */
export enum PluginLoader {
  APP = 'app',
  AGENT = 'agent',
}

/**
 * 插件配置
 */
export interface PluginConfig {
  // 默认配置插件名 例如：@142vip/egg-mysql
  pkgName: string

  // 其他属性
  [propName: string]: unknown
}
