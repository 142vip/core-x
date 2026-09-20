# @142vip/fairy-cli

技术说明。不随 npm 发布。

## 定位

142vip 一站式 CLI（`fa` / `fairy`）：登录、安装依赖、发版、CHANGELOG、发布、同步镜像、清理、Lint、部署、软著、规范提交、Agent Skills 同步。编排包：`@142vip/release-version`、`@142vip/changelog`、`@142vip/commit-linter`、`@142vip/copyright`、`@142vip/agent-skills`。

## 功能

### 子路径

- `@142vip/fairy-cli`：主入口（`src/index.ts`）
- bin：`fa`、`fairy`（`cli.mjs` → `fairyCliMain`）

### 程序入口

- `fairyCliMain(): Promise<void>`（`src/fairy-cli.ts`）：注册全部子命令后 `program.parseAsync`

### 导出类型与工具

- `AiCommandOptions`（extends `VipAgentSkillCliOptions`）
- `CommandEnum`、`CLI_COMMAND_DETAIL`
- `FairyCommandOptions`
- `printPreCheckRelease(packageNames)`、`releasePackage(pkg?)`（`src/utils/release-package.ts`）

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
- `vip` 模式：`execVipRelease` 交互选包 → `releasePackage`
- 非 `vip` + `--package`：`versionBump`（普通 release，部分路径待完善）

**`changelog`**（aliases: `c`, `ch`, `cha`）

- 继承 `VipCommander` 默认 `--dry-run`
- 执行 `npx changelog`（透传 dry-run）

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

- `-n, --nuxt`：删除 `.nuxt`、`.output`
- `-d, --dist`：删除 `dist`（忽略 `node_modules/**/dist`）
- `-m, --midway`：删除 `run`、`logs`、`typings`
- `-t, --turbo`：删除 `.turbo`
- `--vite`：删除 `.vite`
- `--deps`：删除 `node_modules`
- `-c, --coverage`：删除 `coverage`
- `--git-hooks`：删除 `.git/hooks`
- `-f, --force`：强制删除
- `-a, --all`：深度删除（`**/{dir}` 模式）
- `--ignore-tips`：跳过确认框
- 继承 `--dry-run`（`del` 的 `dryRun`）

**`copyright`**（aliases: `cr`, `cop`, `cri`）

- `-l, --max-line-count`：每页最大行数（默认 50）
- `-s, --max-source-count`：扫描最大代码行数（默认 2000）
- 交互输入软著名称、版本、扫描目录、语言类型 → `VipCopyright.generateDocx`
- `--dry-run`：只打印参数不生成

**`commit [vip]`**（aliases: `co`, `com`）

- `--push`：提交后推送远程
- 仅 `vip` 子命令参数为真时执行 `execVipCodeCommit`（交互 type / scope / subject → `commitLiner` → `git add .` → commit → 可选 push）

**`ai [action]`**（aliases: `a`）— 委托 `@142vip/agent-skills`

- 参数 `action`：`sync` | `check` | `info`（默认 `sync`）
- `-t, --target <dir>`：下游根目录（或 `AGENT_SKILLS_TARGET`）
- `--force`：无 `package.json` 仍继续
- `--check`：等价 `action=check`
- `--dry-run`：sync 试运行（与 `--check` 互斥）
- 动态 `import('@142vip/agent-skills')`，缺失时提示安装

### `releasePackage` 行为摘要

- 子包：`release({pkg.name}): publish \`v%s\``，`tag: false`，`cwd: pkg.path`
- 根：`chore(release): publish v%s`，`tag: true`
- 内部调用 `versionBump`：`preid: 'alpha'`、`changelog: true`、`execute: 'git add CHANGELOG.md'`、`push: true`、`skipGitVerify: true`

## 配置

无独立配置文件。各子命令依赖：

- 环境变量：`AGENT_SKILLS_TARGET`（`fa ai`）
- Monorepo：`pnpm-workspace.yaml` 与各包 `package.json`
- Git 远程与分支（`release`、`commit --push`）

## 最佳实践

- 发版优先 `fa release`（`vip` 模式），勿手改 `package.json` version
- Agent Skills 用 `fa ai sync -t .`，CI 用 `fa ai check -t .`
- `fa commit vip` 适合交互式提交；钩子校验仍走 `commit-linter` + `check:commit`
- `fa changelog --dry-run` 预览后再由 release 流程写 CHANGELOG
- `fa sync` 仅维护者同步 npmmirror，需网络可达 `registry-direct.npmmirror.com`

## 构建

`unbuild` 双格式

```shell
cd packages/fairy-cli && pnpm build
```

## 验证

```shell
cd packages/fairy-cli && pnpm build && pnpm typecheck
cd packages/fairy-cli && pnpm test
fa -h
fa ai info
```

## 演示

无独立 `*-demo`；能力在 core-x 根仓库日常命令中验证（`fa release`、`fa ai`、`pnpm release`）。
