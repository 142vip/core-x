# @142vip/egg-validate

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-validate?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-validate)

Egg.js 框架下参数校验插件（当前为骨架实现，依赖 joi）。

## 安装

```shell
# npm
npm install @142vip/egg-validate @142vip/egg joi

# pnpm
pnpm add @142vip/egg-validate @142vip/egg joi
```

## 功能

- [x] 插件注册与 `EggPluginBoot` 生命周期
- [x] 依赖 `joi@17`
- [ ] **骨架状态**：`createEggValidateInstance` 使用空 `Joi.object({})`，未提供可用的校验 API
- [ ] **配置键不一致**：`eggPlugin.name` 为 `validate`，但包内 `config/config.default.js` 顶层键误写为 `swagger`（历史拷贝），运行时读取 `config.validate`，需在应用内自行提供 `validate` 配置

## 配置

`config/plugin.js`：

```js
module.exports = {
  validate: {
    enable: true,
    package: '@142vip/egg-validate',
  },
}
```

应用 `config/config.default.js`（**须使用 `validate` 键**，勿照搬插件仓库内的 `swagger` 键）：

```js
module.exports = {
  validate: {
    client: {},
  },
}
```

## 使用

```js
// 插件加载后（实现完成前实例行为未定义）
this.app.validate.getInstance()
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-validate
```

## 参考

- [@142vip/egg-validate](https://www.npmjs.com/package/@142vip/egg-validate)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)
- [joi](https://joi.dev/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
