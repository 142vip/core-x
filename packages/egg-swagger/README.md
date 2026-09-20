# @142vip/egg-swagger

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-swagger?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-swagger)

Egg.js 框架下 Swagger 插件（当前为骨架实现）。

## 安装

```shell
# npm
npm install @142vip/egg-swagger @142vip/egg

# pnpm
pnpm add @142vip/egg-swagger @142vip/egg
```

## 功能

- [x] 插件注册与 `EggPluginBoot` 生命周期
- [x] `app.swagger.getInstance()` 挂载约定
- [ ] `createEggSwaggerInstance` 仅打印初始化日志，**未**集成 Swagger UI / OpenAPI 生成

## 配置

`config/plugin.js`：

```js
module.exports = {
  swagger: {
    enable: true,
    package: '@142vip/egg-swagger',
  },
}
```

`config/config.default.js`：

```js
module.exports = {
  swagger: {
    client: {},
  },
}
```

## 使用

```js
// 插件加载后
this.app.swagger.getInstance()
// 当前无可用 Swagger 运行时 API
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-swagger
```

## 参考

- [@142vip/egg-swagger](https://www.npmjs.com/package/@142vip/egg-swagger)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
