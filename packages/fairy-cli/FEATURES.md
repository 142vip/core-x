# @142vip/fairy-cli

技术说明。不随 npm 发布。

## 定位

**开发依赖向** CLI（`fa` / `fairy` / `fan` / `ffr` / `ff`）：本地与 CI 工程化（安装、发版、CHANGELOG、lint、commit 钩子等），不作为业务运行时依赖。

编排 `@142vip/release-version`、`@142vip/changelog`、`@142vip/commit-linter`、`@142vip/eslint-config`、`@142vip/copyright`、`@142vip/agent-skills`，并依赖 `@142vip/utils` 提供通用能力。

`src/utils/commit.util.ts`、`eslint-config.util.ts` 对 `commit-linter` / `eslint-config` 做 **re-export** 并承载 CLI 配置解析；`commit-msg` 走 `fa commit --quiet -s './apps/*' -s './packages/*'`；配置经 cosmiconfig + 内置 `config/default-commit-linter.config.cjs`。

## 目录

```text
src/
├── constant.ts                # CommandEnum、CLI_COMMAND_DETAIL、bin 别名格式化
├── fairy-cli.ts               # fairyCliMain 入口
├── index.ts
├── utils/
│   ├── index.ts                 # 统一导出 utils
│   ├── command.util.ts          # registerFairySubcommand、根 -v/-h 辅助、解析错误展示
│   ├── dry-run.util.ts          # logDryRunSteps / runOrDryRun
│   ├── http.util.ts             # fetchJson / fetchText / FairyHttpError（Node fetch）
│   ├── commit.util.ts           # fa commit 配置 / 校验 + commit-linter re-export
│   ├── eslint-config.util.ts    # fa lint 配置路径 + eslint-config re-export
│   ├── pkg.util.ts  # 包路径解析与 fa release 发版编排
│   ├── clean-path.util.ts       # fa clean 路径删除
└── commands/
    ├── changelog.ts             # changelogMain → @142vip/changelog
    ├── release.ts
    └── …
```

## 功能

### `utils/commit.util.ts` / `eslint-config.util.ts`（对外 re-export）

- `commitLinter`、`defineVipCommitLinterConfig`、`loadCommitLinterConfig` ← `@142vip/commit-linter`
- `defineVipEslintConfig` ← `@142vip/eslint-config`

### 子路径

- `@142vip/fairy-cli`：主入口（`src/index.ts`）
- bin：`fa`、`fairy`、`fan`、`ffr`、`ff`（`package.json` 别名均指向 `bin/fa.cjs` → `dist/fairy-cli.cjs` → `fairyCliMain`）

### 程序入口

- `fairyCliMain(): Promise<void>`（`src/fairy-cli.ts`）：注册子命令 → `registerFairyCliVersionBanner` / `registerFairyCliErrorHandling` → `parseAsync`

### 导出类型与工具

- `AiCommandOptions`（extends `VipAgentSkillCliOptions`）
- `CommandEnum`、`CLI_COMMAND_DETAIL`（字面量 key + `satisfies`）、`FairyCommandOptions`
- 根程序与子命令均基于 `VipPackageCliCommander`（`@142vip/utils`）
- `registerFairySubcommand(program, CommandEnum, action, setup?)`：业务参数 → `--dry-run` / `--vip` → action
- 根程序 `fa -h`：Commander 默认 `formatHelp`（`registerRootOptions` → `--version` / `--trace` / `--help`）；`-v` 为横幅
- 解析异常（未知子命令等）：`registerFairyCliErrorHandling` → `@142vip/utils` `registerVipPackageCliErrorHandling`
- 子命令 `fa <cmd> -h`：业务参数 → `--dry-run` / `--vip` / `--trace` → `--help`（根与子命令均可传 `--trace`，`optsWithGlobals` 合并）
- `registerFairySubcommand`、`buildReleaseVersionOptions`、`printPreCheckRelease`、`isPackagePendingRelease`、`releasePackage`（`utils/`）

### 子命令一览（`CommandEnum` / `CLI_COMMAND_DETAIL`）

**`login`**（aliases: `l`, `lo`）

- 交互选择 DOCKER / NPM 登录
- DOCKER：`VipDocker.userLogin`，仓库可选 `registry.docker.io` / `registry.cn-hangzhou.aliyuncs.com`
- NPM：打印 `npm login --registry <url>` 供手动执行

**`install`**（aliases: `i`, `add`, `in`）

- `-f, --force`：强制更新 lock
- `--registry`：默认 `RegistryAddressEnum.VIP_NPM_ALIBABA`
- 交互选择 `npm` 或 `pnpm` 安装

**`release`**（aliases: `re`, `rel`）— 默认 `vip: true`

- `--preid <preid>`：预发布标识
- `--tag <tag>`：标签名（默认 false）
- `--commit <msg>`：提交信息（默认 false）
- `--push`：推送到远程（默认 true）
- `--skip-confirm`：跳过确认框
- `-r, --recursive`：递归更新所有 package.json version
- `--execute <command>`：版本更新后执行的命令
- `--package <package>`：指定发布的包
- `--branch <branch>`：指定分支（默认 `next`）
- `--check-release`：校验 Monorepo 子模块版本
- `--check-branch [checkBranch]`：发布前校验分支（数组解析器，默认 `[]`）
- `-F, --filter <filter>`：模块路径过滤（默认 `[]`）
- `--prerelease`：GitHub Release 标记为 Pre-release（默认 Latest）
- `--dry-run`：打印将执行的命令/HTTP 步骤（`runOrDryRun`）
- `--vip`：Monorepo 交互发版（`release` / `sync`）
- `vip` 模式：`execVipRelease` 交互选包 → `releasePackage`
- 非 `vip` + `--package`：`releaseVersion`（普通 release，部分路径待完善）

**`changelog`**（aliases: `c`, `ch`, `cha`）

- `changelogMain` → `program.registerSubcommand(CLI_COMMAND_DETAIL.changelog, changelogCommandRegistration)`（`@142vip/changelog`）

**`publish`**（aliases: `p`, `pu`）

- `-r, --registry`：默认 `RegistryAddressEnum.NPM`
- 交互确认 dry-run 后执行 `npm publish --access public --registry=...`

**`sync`**（aliases: `s`, `sy`, `syn`）— 默认 `vip: true`

- 参数 `[packageName]`
- `vip` 且无包名：从 `VipMonorepo.getReleasePkgJSON('./packages/*')` 选择
- 否则：npm 在线搜索选包
- 调用 npmmirror `PUT .../-/package/{name}/syncs` 触发 CNPM 同步

**`deploy`**（aliases: `de`, `dep`）

- `-gh, --github-page`：部署 GitHub Pages（当前 `execDeploy` 为占位实现）

**`lint`**（aliases: `li`）

- `-f, --config <path>`：显式 ESLint 配置路径
- 省略 `-f`：`vipConfig.searchConfigFilePath('eslint')` → 无则 `config/default-eslint.config.mjs`
- `--fix`：执行 `npx eslint . --config … [--fix]`

**`clean`**（aliases: `cl`, `clear`）

- 多目录清理选项 + `--dry-run`（内置 `fs.rm`，见 `utils/clean-path.util.ts`）

**`copyright`**（aliases: `cr`, `cop`, `cri`）

- 交互生成软著源代码文档；支持 `--dry-run`

**`commit`**（aliases: `co`, `com`）

- 默认：交互式规范提交（`loadCommitLinterConfigForCli()`：用户配置合并内置 `default-commit-linter.config.cjs`）
- `-f, --config <path>`：`commit-linter` 配置文件路径（与 `fa lint -f` 一致；未传则 cosmiconfig 发现或内置默认）
- `-q, --quiet`：仅校验 commit 首行（`commit-msg` / `pnpm check:commit`）
- `-p, --push`：交互提交后推送远程
- `-s, --scope <glob>`：Monorepo glob（可多次），扫描 npm 包名写入 scope 白名单；**优先于**配置 `scopeGlobs`
- `-m, --message <msg>`：`--quiet` 时待校验首行；默认读 `.git/COMMIT_EDITMSG`
- `--trace`：各子命令 action 入口输出 `<command>: 解析` 与业务选项；`runOrDryRun` / `clean` 等追加执行步骤（见 `registerFairySubcommand`、`logVipCliTrace`）

| CLI `-s` | 配置 `scopeGlobs` | 行为 |
|---|---|---|
| 无 | 无 | 仅用配置 `scopes` + 校验器内置默认 scope |
| 有 | 任意 | 按 `-s` glob 扫描，与配置 `scopes` 合并 |
| 无 | 有（内置默认含 `./apps/*`、`./packages/*`） | 按配置 glob 扫描 |

交互与 `--quiet` 共用 `buildCommitLinterOptions`；本仓钩子显式 `-s './apps/*' -s './packages/*'`。

**`ai`**（aliases: `a`）— 委托 `@142vip/agent-skills`

- 默认：同步到 `.agents/skills/`（无子命令、无 `--sync` 参数）
- `--check`：只比对、不写盘（与同步互斥）
- `-t, --target <dir>`：下游根目录（或 `AGENT_SKILLS_TARGET`）
- `--force` / `--dry-run` / `--trace`
- 不再支持 `fa ai sync` 等子命令写法；多余参数由 `command.util` `registerFairyCliErrorHandling` 提示

### `releasePackage` 行为摘要

流程：`buildReleaseVersionOptions` →（`dryRun` ? `releaseVersionInfo` + changelog 预览 : `releaseVersion`）

- 发版计划打印：复用 `ReleaseVersionOperation.printReleasePlan`
- 子包：`release({pkg.name}): publish \`v%s\``，`tag: false`，`cwd: pkg.path`
- 根：`chore(release): publish v%s`，`tag: true`
- `--prerelease`：透传 `changelogPrerelease: true`

## 配置

### `package.json` 依赖分工

- `peerDependencies`：`@142vip/utils`（消费方须能解析同版本 `utils`）
- `dependencies`：`@142vip/utils` + `@142vip/agent-skills`、`@142vip/changelog`、`@142vip/commit-linter`、`@142vip/copyright`、`@142vip/eslint-config`、`@142vip/release-version`（随 npm 安装带入下游，避免仅装 `fa` 时缺模块；`unbuild` 构建为 external）

### 运行环境

- 环境变量：`AGENT_SKILLS_TARGET`（`fa ai`）
- Monorepo：`pnpm-workspace.yaml` 与各包 `package.json`
- Git 远程与分支（`release`、`commit --push`）

## 最佳实践

- Monorepo 发版：`fa release --vip -F './packages/*'`
- 试运行：`fa release --vip --dry-run`
- Agent Skills：`fa ai -t .` / `fa ai --check -t .`；未知子命令由 `registerVipPackageCliErrorHandling` 友好提示

## 构建

```shell
cd packages/fairy-cli && pnpm build
```

## 验证

```shell
cd packages/fairy-cli && pnpm test
cd packages/fairy-cli && pnpm test:coverage
cd packages/fairy-cli && pnpm build && pnpm typecheck
```

测试与源码对应（`test/helpers/command-runner.ts` 提供 `runCliArgv` / `findCommand`）：

| 测试文件 | 覆盖模块 |
|---|---|
| `test/login.spec.ts` | `commands/login.ts` |
| `test/install.spec.ts` | `commands/install.ts` |
| `test/release.spec.ts` | `commands/release.ts`（含 `printSplitPkgCommitLogs`） |
| `test/release-package.spec.ts` | `utils/pkg.util.ts` |
| `test/changelog.spec.ts` | `commands/changelog.ts` |
| `test/publish.spec.ts` | `commands/publish.ts` |
| `test/sync.spec.ts` | `commands/sync.ts` |
| `test/deploy.spec.ts` | `commands/deploy.ts` |
| `test/lint.spec.ts` | `commands/lint.ts` |
| `test/clean.spec.ts` | `commands/clean.ts` |
| `test/clean-path.util.spec.ts` | `utils/clean-path.util.ts` |
| `test/copyright.spec.ts` | `commands/copyright.ts` |
| `test/commit.spec.ts` | `commands/commit.ts` |
| `test/commit.util.spec.ts` | `utils/commit.util.ts` |
| `test/eslint-config.util.spec.ts` | `utils/eslint-config.util.ts` |
| `test/ai.spec.ts` | `commands/ai.ts`（`resolveAiTarget`） |
| `test/cli-error.spec.ts` | `utils/command.util.ts`（`registerFairyCliErrorHandling`） |

可测试导出（不进入包主入口，仅供单测与复用）：

- `generateDirPatterns`（`clean.ts`）
- `printSplitPkgCommitLogs`（`release.ts`）
- `resolveAiTarget`（`ai.ts`）

## 演示

无独立 demo；在 Monorepo 根目录使用 `pnpm release`（封装 `fa release`）联调。
