# @142vip/egg-mysql

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-mysql?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-mysql)

Egg.js 框架下使用 MySQL 的插件，基于 `@142vip/egg` 的 `VipMySQLPool` 简化连接池配置。

## 安装

```shell
# npm
npm install @142vip/egg-mysql @142vip/egg

# pnpm
pnpm add @142vip/egg-mysql @142vip/egg
```

## 功能

- [x] mysql2 连接池创建与挂载
- [x] 可选自动 `CREATE DATABASE`（`database` 非空时）
- [x] 单实例（`client`）与多实例（`clients`）
- [x] `app.mysql.getInstance()` 返回 mysql2 `Pool`
- [x] `app.js` / `agent.js` 双 Boot（`EggMysqlAppBoot` / `EggMysqlAgentBoot`）

## 配置

`config/plugin.js`：

```js
module.exports = {
  mysql: {
    enable: true,
    package: '@142vip/egg-mysql',
  },
}
```

`config/config.default.js`（单实例）：

```js
module.exports = {
  mysql: {
    client: {
      host: 'localhost',
      port: 3306,
      userName: 'root',
      password: '123456',
      database: 'my_db',
    },
  },
}
```

插件默认（`config/config.default.js`）：`default.database: null`、`default.connectionLimit: 5`、`client.username: 'root'`（实例创建读取的是 `userName` 字段，应用配置请使用 `userName`）。

多实例示例：`clients: { db1: { host, port, userName, password, database }, db2: { ... } }`。

## 使用

```js
const pool = this.app.mysql.getInstance()
const [rows] = await pool.query('SELECT 1')

// 多实例
const pool2 = this.app.mysql.getInstance('db2')
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-mysql
```

## 参考

- [@142vip/egg-mysql](https://www.npmjs.com/package/@142vip/egg-mysql)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)
- [mysql2 文档](https://sidorares.github.io/node-mysql2/zh-CN/docs)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
