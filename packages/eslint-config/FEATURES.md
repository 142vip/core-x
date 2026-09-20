# @142vip/eslint-config

技术说明。不随 npm 发布。

## 定位

基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 的仓库统一 ESLint Flat Config 封装。根 `eslint.config.js` 通过 `defineVipEslintConfig` 加载；对 Markdown 内嵌代码块单独降级规则，避免教学示例误报。

## 功能

### 子路径

- `@142vip/eslint-config`：主入口（`src/index.ts` → `eslint.config.ts`）

### 导出符号

- `defineVipEslintConfig(options?: EslintConfigOptions): Promise<TypedFlatConfigItem[]>`
  - 合并 `defaultEslintConfig` 与调用方 `options` 作为 antfu 第一参
  - 追加 `baseEslintRules` 与 `options.rules`
  - 合并 `settings.node.exitFunctions`：`['process.exit', 'VipNodeJS.exitProcess']`
  - 末尾追加 `markdownCodeBlockOverrides`（匹配 `**/*.md/**` 虚拟文件）
- `defaultEslintConfig: EslintConfigOptions`
- `baseEslintRules`

### `defaultEslintConfig` 默认开关

- `gitignore: true`
- `typescript: true`
- `vue: true`
- `jsonc: true`
- `yaml: true`
- `markdown: true`（antfu markdown 处理器；内嵌 ts/js 块由 overrides 降级）

### `baseEslintRules`

- `no-console: 'warn'`
- `no-restricted-syntax`：禁止 `console` 上除 `log` / `warn` / `error` / `info` / `trace` 以外的属性调用

### Markdown 代码块 overrides（`files: ['**/*.md/**']`）

关闭规则：

- `ts/no-unused-vars`
- `style/max-statements-per-line`
- `style/multiline-comment-style`
- `style/no-tabs`
- `no-unused-vars`
- `no-undef`
- `no-console`
- `ts/no-require-imports`
- `ts/no-var-requires`
- `ts/no-unused-expressions`

### 类型

- `EslintConfigOptions`：`OptionsConfig & TypedFlatConfigItem`（antfu 选项 + flat config 项）

## 配置

### 根仓库用法

```js
// eslint.config.js
import { defineVipEslintConfig } from '@142vip/eslint-config'

export default defineVipEslintConfig({
  // 可覆盖 defaultEslintConfig，例如 markdown: false
  rules: {
    // 追加或覆盖规则
  },
})
```

### 可覆盖项

- antfu 全局 options 任意字段（本包透传，不额外枚举；文档常见键：`typescript`、`vue`、`markdown`、`react`、`stylistic`、`formatters`、`ignores`）
- `rules`、`settings`（与 `baseEslintRules` 浅合并）

无独立 `changelog.config` 类文件；配置即 `defineVipEslintConfig` 入参。

## 最佳实践

- 业务 `.ts` / `.vue` 保持严格规则；仅 Markdown 内嵌示例享受 overrides
- 需要关闭 markdown 处理：`defineVipEslintConfig({ markdown: false })`
- Nest 包 DI：根 `eslint.config.js` 已关闭 `ts/consistent-type-imports`（Injectable 须值导入）
- 修改默认规则时同步检查根 `pre-commit` 钩子 `pnpm lint:fix` 影响面
- 勿在 overrides 中扩大 `files` 到业务源码，避免全局降级

## 构建

`unbuild` 双格式

```shell
cd packages/eslint-config && pnpm build
```

## 验证

```shell
cd packages/eslint-config && pnpm build && pnpm typecheck
pnpm lint          # 根目录，消费本包配置
pnpm lint:fix      # pre-commit 钩子
```

## 演示

无独立 demo；全仓 `eslint.config.js` 为本包唯一消费方。
