# @142vip/nest-starter

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-starter?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-starter)

Nest 应用统一启动器，集成配置加载、日志、Redis、TypeORM、Swagger 等能力。

## 安装

```shell
# npm
npm install @142vip/nest-starter
# pnpm
pnpm i @142vip/nest-starter
```

## 配置

### 目录约定

在项目根目录创建 `config/` 目录，**仅允许** `xxx.config.js` 文件，用于多环境区分：

| 文件 | 说明 |
|------|------|
| `local.config.js` | 本地开发 |
| `test.config.js` | 测试 |
| `dev.config.js` | 开发 |
| `prod.config.js` | 生产 |

示例：

```
config/
├── local.config.js
├── test.config.js
└── prod.config.js
```

### 加载规则

| 启动方式 | `NODE_ENV` | 行为 |
|---------|------------|------|
| 本地开发 | `local` | 多个文件时终端交互选择；仅一个文件时直接使用 |
| 生产 / 其他 | 非 `local` | 加载 `{NODE_ENV}.config.js`；未设置或 `production` 时默认 `prod.config.js` |

`resolveSync`（模块导入阶段）不支持交互：优先 `prod.config.js`，否则使用唯一配置文件。

支持的环境值（`NestDevEnv`）：`local`、`test`、`dev`、`prod`。`NODE_ENV=production` 会映射为 `prod`。

### 终端日志

配置加载日志仅在 `NestStarter.start()` 启动时输出一次：

```
[@142vip/nest-starter] [信息] 配置加载
  启动模式: 开发
  配置环境: local
  配置文件: /path/to/config/local.config.js
```

配置异常时输出友好日志后直接退出进程，不打印 Error 堆栈：

```
[@142vip/nest-starter] [异常] 配置加载失败
  配置文件不存在: prod.config.js
  可选配置: local.config.js, test.config.js
```

本地开发交互时按 `Ctrl+C` 会友好退出（nest watch 模式下按一次即可）。

### 配置结构

配置文件导出与 `NestAppConfig` 结构一致，至少包含 `starter` 字段：

```js
// config/local.config.js
module.exports = {
  starter: {
    port: 3000,
    enableLogger: true,
    enableSwagger: true,
    globalPrefix: '/api',
    redis: { url: 'redis://127.0.0.1:6379' },
    typeorm: { url: 'postgres://...' },
  },
}
```

## 使用

### 启动应用

```ts
// main.ts
import { NestStarter } from '@142vip/nest-starter'
import { AppModule } from './app.module'
import { Config } from './config'

void NestStarter.getInstance().start(AppModule, Config)
```

`NestStarter.start()` 会按上述规则解析配置，并用**本次选定**的 `StarterConfig` 注册 Redis、TypeORM、端口等，保证与用户选择的 `xxx.config.js` 一致。

### 读取配置

```ts
import { getConfig, nestStaterConfig, StarterConfig } from '@142vip/nest-starter'

// 模块导入时的默认配置（resolveSync：优先 prod.config.js）
const port = nestStaterConfig.port

// 按 Schema 获取
const starter = getConfig(StarterConfig)
```

### 本地开发脚本

```json
{
  "scripts": {
    "dev": "NODE_ENV=local nest start -w",
    "start": "nest start"
  }
}
```

- `pnpm dev`：`NODE_ENV=local`，交互选择 `xxx.config.js`
- `pnpm start`：加载 `prod.config.js`

### 高级选项

```ts
import { nestConfigUtil, NestDevEnv } from '@142vip/nest-starter'

// 跳过交互，指定环境
const configPath = await nestConfigUtil.resolveAsync({ devConfig: NestDevEnv.Test })

// 显式指定配置文件
const configPathByPath = await nestConfigUtil.resolveAsync({
  absolutePath: '/path/to/local.config.js',
})
```

## 参考

完整示例见仓库内 `apps/nest-demo`。

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
