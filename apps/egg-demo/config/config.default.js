module.exports = () => {
  // 配置
  const config = {
    keys: 'egg-demo-test',
  }

  // 中间件配置
  config.middleware = []

  // add your user config here
  const userConfig = {
  }

  return {
    ...config,
    ...userConfig,
  }
}
