# @142vip/release-version

技术说明。不随 npm 发布。

## 定位

Monorepo 版本迭代与发版编排：读取/更新 `package.json` version、可选生成 CHANGELOG、git commit / tag / push、执行 `execute` 钩子命令。底层由 `fa release` / `releasePackage` 与 bin `releasex` / `release` 调用。

## 目录

```text
src/
├── releasex.interface.ts      # 类型与枚举（与 CLI 同级）
├── releasex-cli.ts            # standalone bin 入口
├── release.api.ts             # ReleaseApi 对外聚合
├── config.ts
├── core/
│   ├── releasex-operation.ts  # ReleaseVersionOperation 分步发版编排
│   └── index.ts
└── index.ts
```

## 功能

### 子路径

- `@142vip/release-version`：主入口（API + 配置 + 类型）
- bin：`releasex`、`release`（`bin/releasex.cjs` → `dist/releasex-cli.cjs` → `releaseXCliMain`）

### 类型（`releasex.interface.ts`）

- `ReleaseVersionOptions`、`ReleaseVersionResults`、`ReleaseVersionProgress`
- `ReleaseVersionOperationOptions`、`ReleaseVersionCliOptions`
- `VersionProgressEvent`、`VersionHooks`

### `ReleaseVersionOperation`（`core/releasex-operation.ts`）

- `static create(input)`：归一化 `ReleaseVersionOptions` → `ReleaseVersionOperationOptions`
- `resolveVersions()`：读取当前版本、交互选择新版本（不写盘）
- `prepareRelease()`：确认 → preversion → 写版本 → CHANGELOG → execute → version 脚本
- `finalizeRelease()`：git commit → tag → postversion → push

### 对外 API（`release.api.ts` · `releaseApi`）

- `releaseApi.releaseVersion(options)`：完整发版（含 git 与 push）
- `releaseApi.releaseVersionDryRun(options)`：准备阶段（写版本、CHANGELOG、脚本；不含 git push）
- `releaseApi.releaseVersionInfo(options)`：仅解析当前/目标版本

### 配置（`src/config.ts`）

- `CONFIG_DEFAULT_NAME`：`'releasex'`
- `releaseVersionDefaultConfig`、`getReleaseVersionDefaultConfig`（返回副本，供调用方安全修改）
- `loadReleaseVersionConfig`：`loadCliConfig` 合并用户配置与默认项（与 changelog 同构）
- `parseReleaseVersionCliOptions`：`mergeCommanderConfig` 以空对象为 merge 目标，不污染默认常量
- `defineReleaseXConfig`

### CLI 通用选项（与 `fa` / `changelog` 一致）

- `fa release -h`：fairy-cli `registerFairySubcommand` → 业务参数 → `--dry-run` / `--vip` → `--help`
- `releasex -h`：`registerStandalone` + `parseAsync` → 业务参数 → `--dry-run` / `--vip` / `--trace` → `--help`（+ `--version`）

### CLI（`releasex-cli.ts`）

```text
releasex [options]   # 别名 release

选项：
  --preid <preid>              预发布标识（默认 alpha）
  --all                        git commit --all
  -c, --commit [message]       创建 commit（默认开启）
  -t, --tag [name]             创建 tag（默认开启）
  -p, --push                   推送远程（默认 true）
  -y, --yes                    跳过发版前确认
  -r, --recursive              递归更新子 package.json
  --skip-git-verify            git commit --no-verify
  --ignore-scripts             忽略 lifecycle 脚本
  --changelog                  生成 CHANGELOG.md
  --current-version <version>  指定当前版本
  -x, --execute <command>      升版本后执行命令
  --scopeName <scopeName>      Monorepo 子包名
  --dry-run                    试运行
  --vip                        @142vip 专用声明
  --trace                      日志追踪（VipCommander）
```

### `releaseVersionDefaultConfig`

- `commit: true`、`push: true`、`tag: true`、`confirm: true`
- `recursive: false`、`skipGitVerify: false`、`ignoreScripts: false`、`all: false`

## 配置

### 用户配置文件

- 文件名：`releasex`（`CONFIG_DEFAULT_NAME`）
- 自定义：`defineReleaseXConfig(partial)`

### 与 fairy-cli 集成

`releasePackage` 典型参数（`buildReleaseVersionOptions`）：

- `preid: 'alpha'`、`changelog: true`、`confirm: false`
- `commit: 'release(@pkg): publish \`v%s\`' | 'chore(release): publish v%s'`
- `execute: 'git add CHANGELOG.md'`、`push: true`、`all: true`、`skipGitVerify: true`
- 子包：`scopeName`、`tag: false`、`cwd`

## 升级（自旧版）

| 旧 | 新 |
|----|-----|
| `versionBump` | `releaseVersion` |
| `versionRelease` | `releaseVersion` |
| `ReleaseOperation` | `ReleaseVersionOperation` |
| `VersionReleaseOptions` | `ReleaseVersionOptions` |
| `buildVersionReleaseOptions` | `buildReleaseVersionOptions` |

## 最佳实践

- 日常发版用 `pnpm release` / `fa release`
- 子包与根版本分开发：`tag: false` 打包子包，`tag: true` 打根仓库
- `confirm: false` 或 CLI `-y` 用于 CI / `fa release` 无交互场景
- `execute` 常与 `changelog: true` 联用：`git add CHANGELOG.md`
- 试运行：`--dry-run` 或 `releasePackage({ dryRun: true })`
- 需要细粒度控制时直接 `ReleaseVersionOperation.create()` 分步调用

## 构建

```shell
cd packages/release-version && pnpm build
```

unbuild 双入口：`src/index`、`src/releasex-cli`。

## 验证

```shell
cd packages/release-version && pnpm test
cd packages/release-version && pnpm build && pnpm typecheck
```

测试与源码对应：

- `test/release-version-operation.spec.ts` → `core/releasex-operation.ts`
- `test/release-version.api.spec.ts` → `core/releasex.api.ts`
- `test/config.spec.ts` → `config.ts`

## 演示

无独立 demo；与 `fa release`、`pnpm release` 在 core-x Monorepo 中联调。
