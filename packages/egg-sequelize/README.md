# @142vip/egg-sequelize

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-sequelize?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-sequelize)

Egg.js 框架下使用 Sequelize 的插件，基于 `@142vip/egg` 的 `SequelizeORM` 创建连接。

## 安装

```shell
# npm
npm install @142vip/egg-sequelize @142vip/egg sequelize

# pnpm
pnpm add @142vip/egg-sequelize @142vip/egg sequelize
```

## 功能

- [x] `SequelizeORM` 封装连接与 `authenticate` 重试（最多 3 次，`SequelizeConnectionRefusedError`）
- [x] 单实例 / 多实例挂载到 `app.sequelize`
- [x] `app.sequelize.getInstance()` 返回 Sequelize 实例
- [x] `EggSequelizeAppBoot` / `EggSequelizeAgentBoot`
- [ ] `core/sequelize-plus.js` 为独立遗留加载器（`sequelizePlus` 配置），**未**接入当前 `app.js`

## 配置

`config/plugin.js`：

```js
module.exports = {
  sequelize: {
    enable: true,
    package: '@142vip/egg-sequelize',
  },
}
```

`config/config.default.js`（单库）：

```js
module.exports = {
  sequelize: {
    client: {
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'my_db',
      dialect: 'mysql',
    },
  },
}
```

亦支持 `connectUri` 传入 `SequelizeORM`（见 `@142vip/egg`）。多实例使用 `clients`。

## 使用

```js
const sequelize = this.app.sequelize.getInstance()
await sequelize.authenticate()
// 使用 sequelize 定义模型与查询
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-sequelize
```

## 参考

- [@142vip/egg-sequelize](https://www.npmjs.com/package/@142vip/egg-sequelize)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)
- [Sequelize 文档](https://sequelize.org/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
