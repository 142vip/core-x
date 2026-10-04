# @142vip/fairy-cli

[![NPM version](https://img.shields.io/npm/v/@142vip/fairy-cli?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/fairy-cli)

开发向 CLI 助手（`devDependencies`），用于多包仓库本地与 CI 工程化。

## 安装

安装后可用下列**等价**命令名（同一可执行文件）：

`fan` · `ffr` · `fa` · `fairy` · `ff`

```shell
# npm
npm install -D @142vip/fairy-cli

# pnpm
pnpm add -D @142vip/fairy-cli
```

下文示例以 `fa` 书写，其它入口相同。

## 功能

- ✅ 命令入口别名：`fan` / `ffr` / `fa` / `fairy` / `ff`；未知子命令时提示全部入口与子命令列表
- ✅ 子命令通用选项：`--dry-run`（打印将执行的命令/HTTP 步骤）、`--trace`（调试日志）、`--vip`（@142vip 多包仓库专用，见 `release` / `sync`）
- ✅ 登录 Docker / npm（`login`）
- ✅ 依赖安装（`install` / `i`，默认 pnpm，`--ignore-scripts`）；`fa ci` 执行 `pnpm i --frozen-lockfile --force`
- ✅ `fairy.config.*`：`hooks`、`scripts`（`fa run`）、`install`。默认含 `precommit`、`commitmsg`、`preinstall`（有 `scripts/` 时 `chmod +x`）以及 `lint` / `clean*` / `sync`
- ✅ `fa run <name>`：内置 → `fairy.config` → `scripts` → `package.json` → `scripts`（后者优先）；`fa -h` / `fa run -h` 列出
- ✅ `fa i` / `fa ci` 执行 `preinstall` 与 `postinstall`；`postinstall` 末尾安装 git 钩子。`fa install --hook-only <name>` 只跑指定钩子
- ✅ 多包版本发布（`release`）
- ✅ CHANGELOG 生成（`changelog`）
- ✅ npm 镜像推送（`publish`）
- ✅ CNPM 包同步（`sync`）
- ✅ 项目部署（`deploy`）
- ✅ ESLint 检查与格式化（`lint`）
- ✅ 清理构建产物（`clean`）
- ✅ 软著源代码文档生成（`copyright`）
- ✅ Git Commit 规范提交（`commit`）
- ✅ Agent Skills 同步与校验（`fa ai` 同步 / `fa ai --check` 校验，集成 `@142vip/agent-skills`）
- ✅ 编程式 API：`fairyCliMain`、`releasePackage`、`buildReleaseVersionOptions`、`printPreCheckRelease`
- ✅ `commit`：`-f` 指定 `commit-linter.config.*`，`-s` 扫描包路径 glob 作为 scope，`-q` 仅校验；内置 `config/default-commit-linter.config.cjs`
- ✅ `lint`：自动发现 `eslint.config.*` 或内置 `config/default-eslint.config.mjs`，`-f` 指定配置
- ✅ 与专用包同源的编程式导出：`commitLinter`、`defineVipCommitLinterConfig`、`loadCommitLinterConfigForCli`（ESLint 配置请从 `@142vip/eslint-config` 引入 `defineVipEslintConfig`）

## 配置

仓库根目录可增加 `fairy.config.ts`（cosmiconfig 模块名 `fairy`），通过 `defineFairyConfig` 声明 `hooks`、`scripts`、`install` 等（见 FEATURES）。`commit-linter` / ESLint 仍使用各自配置文件。

`peerDependencies` 为 `@142vip/utils`；`dependencies` 含 `simple-git-hooks` 及编排包。

## 使用

查看全部命令：

```shell
fa -h
```

常用示例：

```shell
# 交互式规范提交（默认）
fa commit
fa commit -s './packages/*' -p

# commit-msg 钩子 / 手动校验（仅校验，不交互）
fa commit --quiet -s './apps/*' -s './packages/*'

# 指定 commit-linter 配置文件（等同 lint 的 -f）
fa commit -f ./commit-linter.config.cjs
fa commit --quiet -f ./commit-linter.config.cjs -s './packages/*'

# 克隆后安装（corepack + pnpm i --frozen-lockfile --force，并跑 hooks）
npx fa ci
npx fa ci --npm-ali-registry
npx fa ci --prefer-offline --filter @142vip/utils

# 本地安装（默认 pnpm；有 lock 按 lock，无 lock 生成 lock；-f 强制更新 lock）
fa i
fa i --npm-registry
fa i --npm-ali-registry
fa i -f --npm-tencent-registry
fa i --npm
fa i --ignore-scripts

# 清理产物（默认脚本，fa run clean）
npx fa run clean

# 执行 fairy.config → hooks（如 preinstall / postinstall）
fa install --hook-only postinstall

# fa run（npx fa run <name>；fa -h 底部 Run scripts；package.json scripts 优先于 fairy.config）
npx fa run lint:fix
npx fa run build:docs-proxy
npx fa run --list

# ESLint（自动读取 eslint.config.* 或内置配置）
fa lint --trace --fix
fa lint --fix
fa lint -f custom-eslint.config.js --fix

# 多包交互发版（@142vip 组织）
fa release --vip -F './packages/*'

# 试运行：打印将执行的命令/HTTP 步骤，不写盘、不提交
fa release --vip --dry-run
fa sync --vip --dry-run
fa clean --deps --dry-run

# 发布时标记 GitHub Release 为 Pre-release（默认 Latest）
fa release --vip --prerelease

# Agent Skills（默认同步到 .agents/skills/）
fa ai -t .
fa ai --check -t .
```

编程式调用：

```ts
import {
  commitLinter,
  defineVipCommitLinterConfig,
  fairyCliMain,
  printPreCheckRelease,
  releasePackage,
} from '@142vip/fairy-cli'

await fairyCliMain()
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/fairy-cli
```

## 参考

- [@142vip/fairy-cli](https://www.npmjs.com/package/@142vip/fairy-cli)
- [@142vip/agent-skills](https://www.npmjs.com/package/@142vip/agent-skills)
- [@142vip/release-version](https://www.npmjs.com/package/@142vip/release-version)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
