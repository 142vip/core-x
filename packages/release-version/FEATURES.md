# @142vip/release-version

技术说明。不随 npm 发布。

## 定位

Monorepo 版本 bump 与发版编排：读取/更新 `package.json` version、可选生成 CHANGELOG、git commit / tag / push、执行 `execute` 钩子命令。底层由 `fa release` / `releasePackage` 与 bin `bumpx` 调用。

## 功能

### 子路径

- `@142vip/release-version`：主入口（`src/index.ts`）
- bin：由 `release-version-cli.ts` 自启动（包名 `bumpx` 配置，见 `package.json` bin 字段）

### 核心 API（`src/core/version-bump.ts`）

- `versionBump(options: VersionBumpOptions): Promise<VersionBumpResults | undefined>`
  - 流程：`versionBumpDryRun` → `gitCommit` → `gitTag` → `runPostVersionScript` → `gitPush`
- `versionBumpDryRun(options): Promise<ReleaseOperation>`
  - `versionBumpInfo` → 可选 `confirm` 确认 → `runPreVersionScript` → `updateVersion` → `updateChangelogDoc` → `doExecute` → `runVersionScript`
- `versionBumpInfo(arg): Promise<ReleaseOperation>`

### Git 与 package.json（`src/core/`）

- `git.ts`：`gitCommit`、`gitTag`、`gitPush`
- `package-json.ts`：`getCurrentVersion`、`getNewVersion`、`updateVersion`、`runScript`、`runPreVersionScript`、`runVersionScript`、`runPostVersionScript`
- `changelog.ts`：`updateChangelogDoc(operation)`
- `version-operation.ts`：`ReleaseOperation` 类（`ReleaseOperation.start(arg)`）

### 配置工具（`src/utils/config.ts`）

- `bumpConfigDefaults` / `bumpDefaultConfig`
- `CONFIG_DEFAULT_NAME`：`'bumpx'`
- `getBumpDefaultConfig()`
- `defineBumpXConfig(config): Partial<VersionBumpOptions>`

### `VersionBumpOptions` 字段（`src/enums/version-bump.interface.ts`）

- `preid?`：预发布标识，默认 CLI `'alpha'`
- `changelog?`：是否生成 CHANGELOG.md
- `currentVersion?`：当前版本
- `commit?`：`boolean | string`（`%s` 替换为新版本）
- `tag?`：`boolean | string`
- `push?`：是否推送（默认 `true`）
- `all?`：`git commit --all`
- `confirm?`：交互确认（默认 `true`）
- `skipGitVerify?`：`--no-verify`
- `cwd?`：工作目录
- `ignoreScripts?`：忽略 version 生命周期脚本
- `execute?`：bump 后、commit 前执行的 shell 命令
- `scopeName?`：Monorepo 子包 npm 名
- `recursive?`：递归 bump 子 package.json

### `VersionBumpResults`

- `release?`、`currentVersion`、`newVersion`、`commit`、`tag`

### `VersionHooksEnum`

- `PreVersion` → `'preversion'`
- `Version` → `'version'`
- `PostVersion` → `'postversion'`

### `VersionProgressEventEnum`

- `GitCommit`、`GitTag`、`GitPush`、`NpmScript`

### CLI（`release-version-cli.ts`）

```text
bumpx [...files] [options]

选项：
  --preid <preid>              预发布标记（默认 alpha）
  --all                        Include all files（默认 bumpConfigDefaults.all）
  -c, --commit                 提交信息，可跳过 commit（默认 true）
  -t, --tag                    标签名，可跳过 tag（默认 false）
  -p, --push                   推送到远程（默认 bumpConfigDefaults.push）
  -y, --confirm                跳过确认（默认 bumpConfigDefaults.confirm）
  -r, --recursive              递归 bump package.json（默认 false）
  --skip-git-verify            跳过 git 钩子
  --ignore-scripts             忽略 scripts（默认 false）
  --changelog                  生成 CHANGELOG.md（默认 false）
  --current-version <version>  指定当前版本
  -x, --execute <command>      bump 后执行的命令
  --scopeName <scopeName>      Monorepo 包名
  --dry-run                    试运行
  --vip                        @142vip 组织专用（声明项）
  --logger                     日志追踪
```

配置合并：`vipConfig.loadCliConfig('bumpx', bumpConfigDefaults)` + `mergeCommanderConfig`。

### `bumpConfigDefaults`

- `commit: true`
- `push: true`
- `tag: true`
- `recursive: false`
- `skipGitVerify: false`
- `confirm: true`
- `ignoreScripts: false`
- `all: false`

## 配置

### 用户配置文件

- 文件名：`bumpx`（`CONFIG_DEFAULT_NAME`）
- 自定义：`defineBumpXConfig(partial)`

### 与 fairy-cli 集成

`releasePackage` 典型参数：

- `preid: 'alpha'`
- `changelog: true`
- `commit: 'release(@pkg): publish \`v%s\`' | 'chore(release): publish v%s'`
- `execute: 'git add CHANGELOG.md'`
- `push: true`、`all: true`、`skipGitVerify: true`
- 子包：`scopeName`、`tag: false`、`cwd`

## 最佳实践

- 日常发版用 `pnpm release` / `fa release`，由工具生成 commit message（`release(@142vip/xxx): publish \`vX.Y.Z\``）以触发 CD
- 子包与根版本分开发：`tag: false` 打包子包，`tag: true` 打根 `chore(release)`
- `confirm: true` 时发版前会交互确认 bump 摘要
- `execute` 常用于 `git add CHANGELOG.md`，与 `changelog: true` 联用
- 试运行：`versionBumpDryRun` 或 CLI `--dry-run`

## 构建

`unbuild` 双格式

```shell
cd packages/release-version && pnpm build
```

## 验证

```shell
cd packages/release-version && pnpm build && pnpm typecheck
cd packages/release-version && pnpm test
pnpm check:release    # 根目录
```

## 演示

无独立 demo；与 `fa release`、`pnpm release` 在 core-x Monorepo 中联调。
