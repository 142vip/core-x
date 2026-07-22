# nest-demo

`@142vip/nest-starter` 及相关 Nest 插件的使用示例。

## 快速开始

```shell
# 安装依赖（在 monorepo 根目录）
pnpm install

# 本地开发：交互选择 xxx.config.js
pnpm --filter nest-demo dev

# 生产路径启动：直接加载 config.js
pnpm --filter nest-demo start
```

## 配置

```
config/
├── config.js          # 生产（必须）
├── local.config.js    # 本地开发
├── staging.config.js  # 任意环境名均可
└── test.config.js
```

| 命令 | `NODE_ENV` | 加载配置 |
|------|------------|---------|
| `pnpm dev` | `local` | 交互选择任意 `xxx.config.js` |
| `pnpm start` | 未设置 | 直接加载 `config.js` |

## AppModule 按配置加载

采用 **`static register()` 约定**（无需继承基类）。`NestStarter` 在配置就绪后调用 `resolveAppModule(AppModule)`，再执行 `register()`：

```ts
@Module({})
export class AppModule {
  static register(): DynamicModule {
    const imports = [ConfigExampleModule, RestExampleModule]

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

Service 内可直接注入 `StarterConfig`（见 `config-example`）。

## 入口

```ts
// src/main.ts
void NestStarter.getInstance().start(AppModule, Config)
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
