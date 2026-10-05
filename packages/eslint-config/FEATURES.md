# @142vip/eslint-config

技术说明。不随 npm 发布。

## 定位

基于 [@antfu/eslint-config](https://www.npmjs.com/package/@antfu/eslint-config)（当前 `9.5.1`）的仓库统一 ESLint Flat Config 封装。core-x 经 `fa lint` 加载 `@142vip/fairy-cli` 内置配置；对 Markdown 内嵌代码块单独降级规则，避免教学示例误报。本包**仅 ESM 发布**（`emitCJS: false`），因上游与 `@antfu/eslint-config` 不可被 CJS `require`。

## 功能

### 子路径

- `@142vip/eslint-config`：主入口（`src/index.ts` → `eslint.config.ts`）

### 导出符号

- `defineVipEslintConfig(options?: EslintConfigOptions, ...userConfigs): Promise<TypedFlatConfigItem[]>`
  - 合并 `defaultEslintConfig` 与调用方 `options` 作为 antfu 第一参；`files` 不进入第一参
  - 无 `files` 时，`baseEslintRules` 与 `options.rules` 组成 `vip/rules`，位于 antfu 之后
  - 有 `files` 时，`options.rules` 只挂在该 `files` 上，排在整份配置最后
  - 第二参起的 flat config 同样排在最后，同名规则整段替换
  - 合并 `settings.node.exitFunctions`：`['process.exit', 'VipNodeJS.exitProcess']`
  - `markdownCodeBlockOverrides`（匹配 `**/*.md/**`）位于全局规则之后、用户 `files` 配置之前
- `defaultEslintConfig: EslintConfigOptions`
- `baseEslintRules`

### `defaultEslintConfig` 默认开关

- `gitignore: true`
- `typescript: true`
- `vue: true`
- `jsonc: true`
- `e18e: false`、`pnpm: false`：见下文「antfu v9 可选集成」
- Markdown 表格列数：沿用 antfu v9 默认 `markdown/table-column-count`（不在 `baseEslintRules` 关闭）
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

### core-x 根仓库用法

全仓 `fa lint` / `pnpm lint:fix` 使用 `@142vip/fairy-cli` 的 `config/default-eslint.config.mjs`（本包 `defineVipEslintConfig`）。无根目录 `eslint.config.js`。

其它项目仍可自建配置文件：

```js
import { defineVipEslintConfig } from '@142vip/eslint-config'

// 无 files：全局覆盖
export default defineVipEslintConfig({
  rules: {},
})
```

```js
import { defineVipEslintConfig } from '@142vip/eslint-config'

// 只覆盖这些文件，且位于配置数组末尾
export default defineVipEslintConfig({
  files: ['**/*.vue'],
  rules: {},
})
```

### 可覆盖项

- antfu 全局 options 任意字段（本包透传，不额外枚举；文档常见键：`typescript`、`vue`、`markdown`、`react`、`stylistic`、`formatters`、`ignores`）
- `rules`、`settings`（与 `baseEslintRules` 浅合并；有 `files` 时 `rules` 不并进全局）
- 第二参起的 `TypedFlatConfigItem`（可带 `files`），排在 markdown 代码块降级之后

无独立 `changelog.config` 类文件；配置即 `defineVipEslintConfig` 入参。

### antfu v9 可选集成（本包默认）

- **`e18e: false`** — [@e18e/eslint-plugin](https://github.com/e18e/eslint-plugin)（「高效现代 JS」规则集，如推荐 `??`/`??=`、`Object.hasOwn`、`Date.now()` 等）。antfu v9 默认开启；本仓为控制升级面先关闭，全仓采纳时可改为 `true` 并分批修 lint。
- **`pnpm: false`** — 校验 `pnpm-workspace.yaml` 推荐设置；本仓 workspace 未对齐其 opinion 时保持关闭。

## 最佳实践

- 业务 `.ts` / `.vue` 保持严格规则；仅 Markdown 内嵌示例享受 overrides
- Markdown 正文表格须符合 `markdown/table-column-count`（列数与分隔行一致）
- 需要关闭 markdown 处理：`defineVipEslintConfig({ markdown: false })`
- Nest 包 DI：`fairy-cli` 默认配置已关闭 `ts/consistent-type-imports`（Injectable 须值导入）
- 修改默认规则时同步检查根 `pre-commit` 钩子 `npx fa lint --fix` 影响面
- Vue 插件规则写在带 `files: ['**/*.vue']` 的配置里。无 `files` 时这些规则会套到全部文件，出现规则未定义
- 同名规则以后出现的配置整段替换，不与前面的选项做深度合并；`ignores` 需要写全
- 勿在 overrides 中扩大 `files` 到业务源码，避免全局降级

## 构建

`unbuild` 仅 ESM（`emitCJS: false`；依赖 `@antfu/eslint-config` 不可被 CJS `require`）

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

无独立 demo；core-x 通过 `fa lint` 内置配置消费本包。
