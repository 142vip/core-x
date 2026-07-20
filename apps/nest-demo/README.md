# nest-demo

`@142vip/nest-starter` 及相关 Nest 插件的使用示例。

## 快速开始

```shell
# 安装依赖（在 monorepo 根目录）
pnpm install

# 本地开发：交互选择 config/*.config.js
pnpm --filter nest-demo dev

# 生产路径启动：加载 prod.config.js
pnpm --filter nest-demo start
```

## 配置说明

`config/` 目录仅允许 `xxx.config.js`：

```
config/
├── local.config.js  # 本地开发
├── test.config.js   # 测试
└── prod.config.js   # 生产（pnpm start）
```

| 命令 | `NODE_ENV` | 加载配置 |
|------|------------|---------|
| `pnpm dev` | `local` | 多文件时交互选择；仅一个文件时直接使用 |
| `pnpm start` | 未设置 | 加载 `prod.config.js` |

配置加载失败时，终端会输出 `[@142vip/nest-starter] [异常]` 日志并直接退出，不会打印 Error 堆栈。

## 入口

```ts
// src/main.ts
void NestStarter.getInstance().start(AppModule, Config)
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
