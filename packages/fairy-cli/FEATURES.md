# @142vip/fairy-cli

技术说明。不随 npm 发布。

## 定位

142vip 一站式 CLI（`fa` / `fairy`）：登录、安装依赖、发版、CHANGELOG、发布、同步镜像、清理、Lint、部署、软著、规范提交、Agent Skills 同步。编排包：`@142vip/release-version`、`@142vip/changelog`、`@142vip/commit-linter`、`@142vip/copyright`、`@142vip/agent-skills`。

## 目录

```text
src/
├── fairy.interface.ts         # CommandEnum、CLI_COMMAND_DETAIL、FairyCommandOptions
├── fairy-cli.ts               # fairyCliMain 入口
├── index.ts
├── utils/
│   ├── index.ts                 # 统一导出 utils
│   ├── command.util.ts          # registerFairySubcommand
│   ├── dry-run.util.ts          # logDryRunSteps / runOrDryRun
│   ├── http.util.ts             # fetchJson / fetchText / FairyHttpError（Node fetch）
│   ├── release-package.util.ts  # fa release 发版编排
│   └── clean-path.util.ts       # fa clean 删除
└── commands/
    ├── release.ts
    ├── changelog.ts
    └── …
```

## 功能

### 子路径

- `@142vip/fairy-cli`：主入口（`src/index.ts`）
- bin：`fa`、`fairy`（`bin/fa.cjs` → `dist/fairy-cli.cjs` → `fairyCliMain`）

### 程序入口

- `fairyCliMain(): Promise<void>`（`src/fairy-cli.ts`）：注册全部子命令后 `program.parseAsync`

### 导出类型与工具

- `AiCommandOptions`（extends `VipAgentSkillCliOptions`）
- `CommandEnum`、`CLI_COMMAND_DETAIL`、`FairyCommandOptions`
- 根程序与子命令均基于 `VipPackageCliCommander`（`@142vip/utils`）
- `registerFairySubcommand(program, CommandEnum, action, setup?)`：业务参数 → `--dry-run` / `--vip` → action
- 根程序 `fa -h`：`program.registerRootOptions()` → `--version` / `--trace` / `--help`
- 子命令 `fa <cmd> -h`：业务参数 → `--dry-run` / `--vip` → `--help`（`--trace` 仅在根程序 `fa --trace <cmd>`）
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

- `program.registerSubcommand(CHANGELOG_COMMAND_DETAIL, changelogCommandRegistration)`（`@142vip/changelog`）

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

- `-c, --config`：ESLint 配置文件路径（声明未接入执行逻辑）
- `-f, --fix`：执行 `npx eslint . [--fix]`

**`clean`**（aliases: `cl`, `clear`）

- 多目录清理选项 + `--dry-run`（内置 `fs.rm`，见 `utils/clean-path.util.ts`）

**`copyright`**（aliases: `cr`, `cop`, `cri`）

- 交互生成软著源代码文档；支持 `--dry-run`

**`commit [vip]`**（aliases: `co`, `com`）

- `--push`：提交后推送远程
- 仅 `vip` 子命令参数为真时执行规范提交流程

**`ai [action]`**（aliases: `a`）— 委托 `@142vip/agent-skills`

- 参数 `action`：`sync` | `check` | `info`（默认 `sync`）
- `-t, --target <dir>`：下游根目录（或 `AGENT_SKILLS_TARGET`）
- `--force` / `--check` / `--dry-run` / `--trace`

### `releasePackage` 行为摘要

流程：`buildReleaseVersionOptions` →（`dryRun` ? `releaseVersionInfo` + changelog 预览 : `releaseVersion`）

- 发版计划打印：复用 `ReleaseVersionOperation.printReleasePlan`
- 子包：`release({pkg.name}): publish \`v%s\``，`tag: false`，`cwd: pkg.path`
- 根：`chore(release): publish v%s`，`tag: true`
- `--prerelease`：透传 `changelogPrerelease: true`

## 配置

无独立配置文件。各子命令依赖：

- 环境变量：`AGENT_SKILLS_TARGET`（`fa ai`）
- Monorepo：`pnpm-workspace.yaml` 与各包 `package.json`
- Git 远程与分支（`release`、`commit --push`）

## 最佳实践

- Monorepo 发版：`fa release --vip -F './packages/*'`
- 试运行：`fa release --vip --dry-run`
- Agent Skills：`fa ai sync -t .` / `fa ai check -t .`

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
| `test/release-package.spec.ts` | `utils/release-package.util.ts` |
| `test/changelog.spec.ts` | `commands/changelog.ts` |
| `test/publish.spec.ts` | `commands/publish.ts` |
| `test/sync.spec.ts` | `commands/sync.ts` |
| `test/deploy.spec.ts` | `commands/deploy.ts` |
| `test/lint.spec.ts` | `commands/lint.ts` |
| `test/clean.spec.ts` | `commands/clean.ts` |
| `test/clean-path.util.spec.ts` | `utils/clean-path.util.ts` |
| `test/copyright.spec.ts` | `commands/copyright.ts` |
| `test/commit.spec.ts` | `commands/commit.ts` |
| `test/ai.spec.ts` | `commands/ai.ts`（`resolveAiAction` / `resolveTarget`） |

可测试导出（不进入包主入口，仅供单测与复用）：

- `generateDirPatterns`（`clean.ts`）
- `printSplitPkgCommitLogs`（`release.ts`）
- `resolveTarget`（`ai.ts`）

## 演示

无独立 demo；在 core-x 根目录使用 `pnpm release`（封装 `fa release`）联调。
