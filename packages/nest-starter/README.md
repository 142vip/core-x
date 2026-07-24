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

## 快速开始

```ts
// main.ts
import { NestStarter } from '@142vip/nest-starter'
import { AppModule } from './app.module'
import { Config } from './config'

void NestStarter.getInstance().start(AppModule, Config)
```

本地脚本：

```json
{
  "scripts": {
    "dev": "NODE_ENV=local nest start -w",
    "start": "nest start"
  }
}
```

| 命令 | `NODE_ENV` | 行为 |
|------|------------|------|
| `pnpm dev` | `local` | 首次交互选择 `xxx.config.js`，热重载自动复用 |
| `pnpm start` | 非 `local` | 直接加载 `config.js` |

开发模式跳过交互（任选其一）：

```bash
# 1. 环境变量
NODE_ENV=local RUN_ENV=local nest start -w

# 2. 首次交互后写入 node_modules/.cache/@142vip/nest-starter/dev-config
#    同一次 nest watch 会话内热重载自动复用；Ctrl+C 退出后自动清理
#    重新选择：重启 dev 后再启动（或设置 RUN_ENV）
```

缓存位于 `node_modules/.cache`（运行时目录），无需加入版本库。

## 配置目录

生产与开发隔离：

| 文件 | 模式 | 说明 |
|------|------|------|
| `config.js` | 生产 | **必须**；非 `NODE_ENV=local` 时直接加载 |
| `xxx.config.js` | 开发 | 任意环境名；`NODE_ENV=local` 时交互选择 |

```
config/
├── config.js          # 生产（必须）
├── local.config.js    # 本地
├── staging.config.js  # 预发
└── uat.config.js      # 任意 xxx 均可
```

环境名 `xxx`：字母开头，可含字母、数字、`_`、`-`。不可使用 `production`（请用 `config.js`）。

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

## 使用配置

`NestStarter.start()` 选定配置并注册后，业务侧有三种用法。

### 模块入口设计（AppModule.register）

**不需要**定义超级父类或 `extends` 基类。约定通过 `NestAppModuleClass` 接口 + `resolveAppModule` 完成：

```
main.ts: start(AppModule, Config)
    ↓
NestStarter: resolveAsync → useConfigModule（配置就绪）
    ↓
resolveAppModule(AppModule) → 有 register 则调用，无则直接用 Module
    ↓
NestFactory.create(NestRootModule)
```

| 方式 | 适用场景 |
|------|----------|
| `static register()` | 需按 `nestStaterConfig` 决定 imports（多环境、可选 Redis/TypeORM 等） |
| 普通 `@Module` 类 | 模块固定、不读启动配置 |

为何不用基类约束 `register`：

- TypeScript **不能**在编译期强制子类实现 `static register()`
- 基类会增加继承成本，但运行时仍要靠 `resolveAppModule` 检测
- 与 Nest 自带 `DynamicModule.register()` 写法一致，学习成本低

### 1. AppModule 按配置加载模块（推荐）

`@Module({ imports })` 在文件被 import 时就会求值，此时配置尚未选定。
请使用 **`static register()`**，由 `NestStarter` 在配置就绪后自动调用：

```ts
// app.module.ts
import { nestStaterConfig } from '@142vip/nest-starter'
import { DynamicModule, Module } from '@nestjs/common'

@Module({})
export class AppModule {
  static register(): DynamicModule {
    const imports = [RestExampleModule]

    if (nestStaterConfig.typeorm != null) {
      imports.push(TypeormExampleModule)
    }
    if (nestStaterConfig.redis != null) {
      imports.push(RedisExampleModule)
    }

    return { module: AppModule, imports }
  }
}
```

`main.ts` 仍传 `AppModule` 类即可，无需改启动方式。

### 2. Service 依赖注入

```ts
import { StarterConfig } from '@142vip/nest-starter'
import { Injectable } from '@nestjs/common'

@Injectable()
export class XxxService {
  constructor(private readonly starterConfig: StarterConfig) {}
}
```

也可注入自定义根配置类（如 `Config extends NestAppConfig`）。

### 3. 快速读取导出

须在配置就绪后访问（`AppModule.register` 内，或 `start` 完成后）：

```ts
import { getConfig, nestAppConfig, nestStaterConfig, StarterConfig } from '@142vip/nest-starter'

const port = nestStaterConfig.port
const starter = nestAppConfig.starter
const same = getConfig(StarterConfig)
```

## 说明

- 不要在 `AppModule` 的静态 `@Module({ imports })` 里读取 `nestStaterConfig`
- 配置已由 `NestStarter` 全局注入，业务侧用 DI / `nestStaterConfig` / `getConfig` 即可
- 开发模式交互选择时按一次 `Ctrl+C` 即可退出（含 nest watch 父进程）
- 开发模式首次选择后会缓存到 `node_modules/.cache/@142vip/nest-starter/dev-config`，同一次 watch 会话内热重载无需再次选择；Ctrl+C 退出后自动清理

### 终端日志示例

```
[@142vip/nest-starter] [信息] 配置加载
  启动模式: 开发
  配置环境: local
  配置文件: /path/to/config/local.config.js
```

## 高级选项

跳过交互，按环境名指定开发配置（对应 `{devConfig}.config.js`）：

```ts
import { nestConfigUtil } from '@142vip/nest-starter'

const configPath = await nestConfigUtil.resolveAsync({ devConfig: 'staging' })
```

也可用环境变量（`nest start -w` 子进程会继承）：

```bash
NODE_ENV=local RUN_ENV=staging nest start -w
# 等价：DEV_CONFIG / NEST_DEV_CONFIG
```

或指定绝对路径：

```ts
const configPath = await nestConfigUtil.resolveAsync({
  absolutePath: '/abs/path/to/local.config.js',
})
```

### PM2 生产部署

```js
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'app',
    script: 'dist/main.js',
    cwd: __dirname,
    env: {
      // 不要设 local；未设置或 production 都会加载 config.js
      NODE_ENV: 'production',
    },
  }],
}
```

## 参考

完整示例见仓库内 `apps/nest-demo`。

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
