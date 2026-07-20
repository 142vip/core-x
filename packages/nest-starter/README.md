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

在项目根目录创建 `config/` 目录，仅允许以下两类文件：

| 文件 | 说明 |
|------|------|
| `config.js` | 生产环境配置 |
| `xxx.config.js` | 开发环境配置（如 `local.config.js`、`test.config.js`） |

示例：

```
config/
├── config.js          # 生产
├── local.config.js    # 本地开发
└── test.config.js     # 测试
```

### 加载规则

| 启动方式 | `NODE_ENV` | 行为 |
|---------|------------|------|
| `nest start` / 生产部署 | 非 `local` | 直接加载 `config.js`，不弹交互 |
| 本地开发 + 多个配置文件 | `local` | 终端交互选择 |
| 本地开发 + 仅一个配置文件 | `local` | 确认是否启动，并提示多环境配置建议 |
| 本地开发 + 非交互终端 | `local` | 优先 `config.js`，否则自动选择唯一开发配置 |

`resolveSync`（模块导入阶段）不支持交互：存在 `config.js` 时优先使用；仅一个开发配置时可自动选中。

### 终端日志

配置加载日志仅在 `NestStarter.start()` 启动时输出一次：

```
[@142vip/nest-starter] [信息] 配置加载
  启动模式: 生产
  配置文件: /path/to/config/config.js
```

单配置文件时的多环境提示：

```
[@142vip/nest-starter] [警告] 配置提示
  当前仅发现配置文件: test.config.js
  多环境配置建议:
    生产环境: config.js
    开发环境: local.config.js、test.config.js 等
```

配置异常时输出友好日志后直接退出进程，不打印 Error 堆栈：

```
[@142vip/nest-starter] [异常] 配置加载失败
  未找到生产配置文件: /path/to/config/config.js
  请在 config 目录创建 config.js
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

### 读取配置

```ts
import { getConfig, nestStaterConfig, StarterConfig } from '@142vip/nest-starter'

// 启动配置（模块导入时可用）
console.log(nestStaterConfig.port)

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

- `pnpm dev`：`NODE_ENV=local`，按上述本地开发规则选择/确认配置
- `pnpm start`：生产路径，直接加载 `config.js`

### 高级选项

通过 `NestConfigModule.register` 第二参数或 `nestConfigUtil` 覆盖默认行为：

```ts
import { nestConfigUtil, NestDevEnv } from '@142vip/nest-starter'

// 跳过交互，指定开发环境
const configPath = await nestConfigUtil.resolveAsync({ devConfig: NestDevEnv.Test })

// 显式指定配置文件
const configPath = await nestConfigUtil.resolveAsync({
  absolutePath: '/path/to/local.config.js',
})
```

## 参考

完整示例见仓库内 `apps/nest-demo`。

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
