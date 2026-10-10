# @142vip/fairy-cli

技术说明。不随 npm 发布。

## 定位

**开发依赖向** CLI（`fa` / `fairy` / `fan` / `ffr` / `ff`）：本地与 CI 工程化（安装、发版、CHANGELOG、lint、commit 钩子等），不作为业务运行时依赖。

编排 `@142vip/release-version`、`@142vip/changelog`、`@142vip/commit-linter`、`@142vip/eslint-config`、`@142vip/copyright`、`@142vip/agent-skills`，并依赖 `@142vip/utils` 提供通用能力。

`src/utils/commit.util.ts`、`eslint-config.util.ts` 对 `commit-linter` / `eslint-config` 做 **re-export** 并承载 CLI 配置解析；`commit-msg` 走 `fa commit --quiet -s './apps/*' -s './packages/*'`。校验配置优先级：命令行 `-f`（含 `fairy.config` → `commit.config`）> `fairy.config` → `commit` 的校验字段 > `commit-linter.config` > 内置 `config/default-commit-linter.config.cjs`。`commit` / `release` / `ai` 的命令参数同样是「命令行显式传入 > 配置 > 命令内置默认」。

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

### `utils/commit.util.ts` / `eslint-config.util.ts`

- `commitLinter`、`defineVipCommitLinterConfig`、`loadCommitLinterConfig` ← `@142vip/commit-linter`（re-export）
- `resolveEslintConfigPath` / `resolveBundledDefaultEslintConfigPath`（`fa lint -f` 与内置 `config/default-eslint.config.mjs`）；`defineVipEslintConfig` 请直接从 `@142vip/eslint-config` 引入（避免 CJS `fa` 启动时 `require` ESM 编排包）

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

### `fairy.config.*`（`defineFairyConfig` / `loadFairyConfig`）

- cosmiconfig 模块名：`fairy`（与 `releasex.config` / `commit-linter.config` 同级）
- **`hooks`**：统一钩子表；每项为 `string` 或 `string[]`。`loadFairyConfig` 按键合并，同名键整段覆盖
  - 默认：`precommit` = `npx fa lint --fix`；`commitmsg` = `npx fa commit --quiet -s './apps/*' -s './packages/*'`；`preinstall` 在存在 `scripts/` 且其中有文件时 `chmod +x`，目录缺失或为空则跳过
  - 本地 `fa i` / `fa ci` 在 `postinstall` 末尾经 `simple-git-hooks` 写入 `.git/hooks`（`precommit` → `pre-commit`，`commitmsg` → `commit-msg`）。`CI=true` 时跳过
  - `fa i` / `fa ci` 本身调用 pnpm（`fa i --npm` 才改用 npm）。不要在 `preinstall` 里跑 `only-allow`：`npx fa` 会把 `npm_config_user_agent` 标成 npm，`only-allow` 会误判并退出
  - `postinstall` 无默认命令，项目在 `fairy.config` 里写
  - 包 npm `postinstall`：`bin/fairy-postinstall.cjs`。`node_modules` 内的发布物只跑 `hooks.postinstall`；仓库源码才 `pnpm --filter @142vip/fairy-cli... build`。`fa i` / `fa ci` 未 `--ignore-scripts` 时不重复跑该 hook
  - 克隆后安装：`pnpm i`、`npx fa ci`、`npx fa i -f`。CI / CD 使用 `pnpm i --frozen-lockfile --force`（会触发上述 postinstall）
  - 其它 git 文件名（如 `pre-push`）可直接作为键
- **`scripts`**：`string` / `string[]`，由 `fa run <name>` 执行。默认含 `clean`、`clean:cache`、`clean:dist`、`clean:hooks`、`sync`。检查代码用 `npx fa lint` / `npx fa lint --fix`，不进默认脚本。与用户 `scripts`、`package.json` → `scripts` 聚合（**package.json 优先**）
- `install.ignoreScripts`：默认是否为 `fa i` / `fa ci` 追加 `--ignore-scripts`
- **`commit`**（可选，`FairyCommitConfig`）：`fa commit` 的默认参数，整段保留、不与默认配置拼接
  - 命令参数：`config`（`-f`）、`quiet`（`-q`）、`push`（`-p`）、`message`（`-m`）、`scope`（`-s`，可多条）、`dryRun`、`vip`
  - 校验字段：`types`、`scopes`、`scopeGlobs`、`verify`。写了其中任一字段就不再读取 `commit-linter.config`；已写字段整段替换，未写字段保留内置 `default-commit-linter.config.cjs`。只写命令参数时仍读该文件
  - `scope` 有值时优先于 `scopeGlobs`。命令行 `-f` 与 `config` 优先于校验字段
- **`release`**（可选，`FairyReleaseConfig`）：`fa release` 的默认参数。字段：`preid`、`tag`、`commit`、`push`、`skipConfirm`、`recursive`、`execute`、`package`、`branch`、`checkRelease`、`checkBranch`、`filter`、`prerelease`、`vip`、`dryRun`
- **`ai`**（可选，`FairyAiConfig`）：`fa ai` 的默认参数。字段：`target`、`check`、`force`、`dryRun`。`target` 未写时仍用 `AGENT_SKILLS_TARGET`，再回退 cwd
- 命令行优先级：`resolveFairyCommandDefaults` 只在 Commander `getOptionValueSource !== 'cli'` 时填配置。布尔默认值（如 `release.push` 默认 `true`、`commit.quiet` 默认 `false`）不算用户传入；要用 `false` 覆盖配置里的 `true`，传 `--no-<flag>`
- 配置实际补过参数时，`logFairyEquivalentCommand` 打印 `等价命令：fa <子命令> ...`（含本次命令行显式参数）。没有超出内置默认的参数则不打印。命令行已写全（`fromConfig` 为空，如 commit-msg 钩子自带 `-s`）时不打印
- 编程式 API：`runFairyHook`、`resolveHookCommands`、`runFairyCommand`、`installFairyGitHooks`、`applyFairyCommandDefaults`（包入口导出）

### 子命令一览（`CommandEnum` / `CLI_COMMAND_DETAIL`）

**`login`**（aliases: `l`, `lo`）

- 交互选择 DOCKER / NPM 登录
- DOCKER：`VipDocker.userLogin`，仓库可选 `registry.docker.io` / `registry.cn-hangzhou.aliyuncs.com`
- NPM：打印 `npm login --registry <url>` 供手动执行

**`install`**（aliases: `i`, `add`, `in`, **`ci`**）

- 实现：`commands/install.ts`、`utils/install.util.ts`（源解析统一走 `RegistryAddressEnum`：`NPM` / `NPM_ALIBABA` / `NPM_TENCENT`）
- **`fa i` lock**：有 lock → pnpm `--frozen-lockfile` / `npm ci`；无 lock → `pnpm i` / `npm i` 生成 lock；`-f` → `--force`
- **`fa i`**：默认 pnpm；执行前 `VipNpm.logInstallToolchain`；安装前 `preinstall`；未 `--ignore-scripts` 时 `postinstall` 由 `@142vip/fairy-cli` npm lifecycle 触发
- **`fa ci`**：corepack + `pnpm i --frozen-lockfile --force`；安装前 `preinstall`；`--ignore-scripts` 时安装后补跑 `hooks.postinstall`。默认源 npmmirror。本地也可 `npx fa i -f`（强制更新 lock）
- npm 源：`--npm-registry [url]`（仅开关 → npm 官方）、`--npm-ali-registry`、`--npm-tencent-registry`、环境变量 `NPM_REGISTRY`；`fa i` 默认官方，`fa ci` 默认阿里镜像
- corepack 源：`--corepack-registry [url]`、`--corepack-ali-registry`、`--corepack-tencent-registry`、`COREPACK_REGISTRY`；默认 npm 官方
- `--npm`：本地改用 npm（`npm i`，更新 lock）
- `--ignore-scripts`：跳过 install scripts；可与 `fairy.config` → `install.ignoreScripts` 叠加
- `--hook-only <name>`：只跑合并后的 `hooks.<name>`，不安装依赖。`postinstall` 即使命令为空也会写 git 钩子

**`run`**（aliases: `r`, `exec`）

- `fa run <name>`：执行聚合脚本（内置 → `fairy.config` → `scripts` → `package.json` → `scripts`）
- 根 `fa -h` / `fa run -h` 追加 **Run scripts** 表（脚本名 + shell 摘要）
- `-l, --list`：列出可用脚本名
- 透传参数：`fa run build -- --filter pkg`

**`release`**（aliases: `re`, `rel`）— 默认 `vip: true`

- 未在命令行写出的参数采用 `fairy.config` → `release`。`--push` 默认 `true`、`--branch` 默认 `next` 只在配置也没写时生效
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
- `--dry-run`：打印生效参数，以及将执行的命令/HTTP 步骤（`runOrDryRun` / `logVipCliDryRun` 的 `params`）
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

- 多目录清理选项 + `--dry-run`；`-q, --quiet` 跳过删除确认（内置 `fs.rm`，见 `utils/clean-path.util.ts`）

**`copyright`**（aliases: `cr`, `cop`, `cri`）

- 交互生成软著源代码文档；支持 `--dry-run`

**`commit`**（aliases: `co`, `com`）

- 默认：交互式规范提交（`loadCommitLinterConfigForCli()`：内置 `default-commit-linter.config.cjs` 为底）
- 校验配置优先级：命令行 `-f` > `fairy.config` → `commit.config` > `commit` 的 `types` / `scopes` / `scopeGlobs` / `verify` > `commit-linter.config` > 内置默认
- 命令参数优先级：命令行显式 `-q` / `-p` / `-m` / `-s` / `--dry-run` / `--vip` > `fairy.config` → `commit` 同名字段 > 命令内置默认
- `-f, --config <path>`：`commit-linter` 配置文件路径（与 `fa lint -f` 一致）
- `-q, --quiet`：仅校验 commit 首行（`commit-msg` / `pnpm check:commit`）。与 `--dry-run` 同用时不校验，只打印生效参数（`workspace`、`scopes` / `scopesFromScan` / `effectiveScopes`、校验白名单等，见 `formatCommitConfigTrace` / `formatCommitValidationTrace`）
- `-p, --push`：交互提交后推送远程
- `-s, --scope <glob>`：Monorepo glob（可多次），扫描 npm 包名写入 scope 白名单；**优先于** `scopeGlobs`。未传 `-s` 时使用配置 `scope`
- `-m, --message <msg>`：`--quiet` 时待校验首行；默认读 `.git/COMMIT_EDITMSG`
- `--trace`：输出 `commit: 解析`、`commit: 配置`（解析后仍相关的 scope 来源与聚合）、`commit: 校验`（`allowedTypes` / `allowedScopes`）。单包仓不展示配置里的 Monorepo `scopeGlobs`；scope 扫描不把根 `package.json` 名并入白名单

| CLI `-s` | 配置 `scopeGlobs` | 行为 |
|---|---|---|
| 无 | 无 | 仅用配置 `scopes` + 校验器内置默认 scope |
| 有 | 任意 | 按 `-s` glob 扫描，与配置 `scopes` 合并 |
| 无 | 有（内置默认含 `./apps/*`、`./packages/*`） | 按配置 glob 扫描 |

交互与 `--quiet` 共用 `buildCommitLinterOptions`；本仓钩子显式 `-s './apps/*' -s './packages/*'`。

**`ai`**（aliases: `a`）— 动态 `import('@142vip/agent-skills')` 调用 `syncAgentSkills`

- 默认：同步到 `.agents/skills/`（无子命令、无 `--sync` 参数）
- `--check`：只比对、不写盘（与同步互斥）
- `-t, --target <dir>`：下游根目录。优先级：`-t` > `fairy.config` → `ai.target` > `AGENT_SKILLS_TARGET` > cwd
- `--check` / `--force` / `--dry-run` 未在命令行写出时，采用 `fairy.config` → `ai`
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

- 提交规范：把 `types`、`scopes`、`scopeGlobs`、`verify` 写进 `fairy.config` 的 `commit`，不必再单独维护 `commit-linter.config`。`fa commit -f` 仍指向独立文件。常用 `-s` 写在 `commit.scope` 后直接 `fa commit`，日志里的 `等价命令` 可复制。`quiet` 留给显式的 `fa commit --quiet`，避免交互提交被关掉
- Monorepo 发版：`release: { vip: true, filter: ['./packages/*'] }` 后直接 `fa release`；临时改范围仍用 `-F`
- 试运行：命令行 `--dry-run` 优先于配置里的 `dryRun`
- Agent Skills：`ai: { target: '.' }` 后直接 `fa ai`；`fa ai --check` 仍可覆盖配置。未知子命令由 `registerVipPackageCliErrorHandling` 友好提示

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
| `test/install.spec.ts` | `commands/install.ts` + `utils/install.util.ts` |
| `test/fairy.config.spec.ts` | `src/config.ts` |
| `test/hooks.util.spec.ts` | `utils/hooks.util.ts` |
| `test/scripts.util.spec.ts` | `utils/scripts.util.ts` + `commands/run.ts` |
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
| `test/equivalent-command.spec.ts` | `utils/equivalent-command.util.ts` |
| `test/cli-error.spec.ts` | `utils/command.util.ts`（`registerFairyCliErrorHandling`） |

可测试导出（不进入包主入口，仅供单测与复用）：

- `generateDirPatterns`（`clean.ts`）
- `printSplitPkgCommitLogs`（`release.ts`）
- `resolveAiTarget`（`ai.ts`）

## 演示

无独立 demo；在 Monorepo 根目录使用 `pnpm release`（封装 `fa release`）联调。
