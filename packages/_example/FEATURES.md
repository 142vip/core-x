# @142vip/_example

技术说明。不随 npm 发布。

## 定位

`@142vip/_example` 是 unbuild 包的最小母版（`private: true`），供 `./scripts/npm-pkg` 复制后改写为可发布包，本身不计入 31 个可发布包。

## 功能

### 子路径

- `@142vip/_example`：主入口（`src/index.ts` → `src/core`）

### 导出符号

- `createExampleMessage(name: string): string`：示例函数，返回问候字符串（见 `src/core/example.ts`）

### 目录结构

```
packages/_example/
├── src/
│   ├── core/
│   │   ├── example.ts   # 核心逻辑
│   │   └── index.ts
│   └── index.ts         # 包入口 re-export
├── build.config.ts
├── package.json
└── tsconfig.json
```

## 配置

无

## 最佳实践

- 新包优先用 `./scripts/npm-pkg <名>` 从此目录复制，勿手建目录
- 复制后替换 `createExampleMessage` 为实际 API，并更新 `package.json` 的 `name` / `description`
- 保持 `src/core/` + 根 `index.ts` re-export 结构
- `private` 包勿写入根 README 可发布包列表
- 改母版后跑 `pnpm build && pnpm typecheck` 确保脚手架可用
- README / FEATURES 章节顺序遵循 npm 包规范

## 构建

`unbuild` → `cd packages/_example && pnpm build`

## 验证

```shell
cd packages/_example && pnpm build && pnpm typecheck
```

## 演示

无
