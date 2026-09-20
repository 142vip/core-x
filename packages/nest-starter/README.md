# @142vip/nest-starter

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-starter?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-starter)

Nest.js 启动器：多环境配置、Swagger、日志与子模块聚合

## 安装

```shell
# npm
npm install @142vip/nest-starter @142vip/nest @142vip/nest-logger @142vip/nest-redis @142vip/nest-typeorm @142vip/utils

# pnpm
pnpm add @142vip/nest-starter @142vip/nest @142vip/nest-logger @142vip/nest-redis @142vip/nest-typeorm @142vip/utils
```

## 功能

- [x] `NestStarter` 单例启动：解析配置、创建应用、注册全局模块、监听端口
- [x] 多环境配置：`config/config.js`（生产）与 `config/*.config.js`（开发，如 `local.config.js`）
- [x] 开发模式（`NODE_ENV=local`）交互选择配置文件，热重载复用缓存
- [x] 聚合日志、Redis、TypeORM、Swagger（按配置开关）
- [x] 全局拦截器/过滤器（来自 `@142vip/nest`）
- [x] 配置访问：`nestStaterConfig`、`nestAppConfig`、`getConfig`

## 配置

配置文件放在项目根 `config/`：

- `config.js` — 生产（`NODE_ENV !== local` 时**必须**存在）
- `local.config.js` — 开发示例（`NODE_ENV=local` 时可选之一）
- `xxx.config.js` — 任意环境名，例如 `staging.config.js`

配置文件导出对象须含 `starter` 字段（对应 `StarterConfig`），例如：

```js
module.exports = {
  starter: {
    port: 3000,
    enableLogger: true,
    enableSwagger: true,
    swagger: { docPath: 'doc' },
    redis: { url: 'redis://127.0.0.1:6379' },
    typeorm: { type: 'postgres', url: 'postgres://...' },
  },
}
```

跳过开发交互的环境变量（任选）：`RUN_ENV`、`DEV_CONFIG`、`NEST_DEV_CONFIG`（值为环境名，如 `local` → `local.config.js`）。

## 使用

定义根配置 Schema 与业务模块后，在 `main.ts` 启动：

```ts
import { NestStarter } from '@142vip/nest-starter'
import { AppModule } from './app.module'
import { Config } from './config'

void NestStarter.getInstance().start(AppModule, Config)
```

`Config` 为 extends `NestAppConfig` 的 class-validator 类；`AppModule` 可实现静态 `register()` 按配置组装子模块。

启动后读取配置：

```ts
import { getConfig, nestStaterConfig, StarterConfig } from '@142vip/nest-starter'

const port = nestStaterConfig.port
const starter = getConfig(StarterConfig)
```

开发：

```shell
NODE_ENV=local node dist/main.js
```

生产加载 `config/config.js`：

```shell
NODE_ENV=production node dist/main.js
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/nest-starter
```

## 参考

- [@142vip/nest-starter](https://www.npmjs.com/package/@142vip/nest-starter)
- [@142vip/nest](https://www.npmjs.com/package/@142vip/nest)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
