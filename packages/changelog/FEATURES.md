# @142vip/changelog

技术说明。不随 npm 发布。

## 定位

基于 Git Conventional Commits 解析提交记录，生成 Markdown 格式 CHANGELOG，并可调用 GitHub API 创建 Release。供 `changelog` / `ch` CLI、`fa changelog`、`fa release` 与 CD 工作流使用。

## 目录

```text
src/
├── core/
│   ├── apis/                  # 实现层 · GitCommitAPI · GithubAPI · MarkdownAPI
│   └── apis/changelog.api.ts  # ChangelogApi 对外聚合
│   ├── changelog.interface.ts # 全部类型与枚举
│   └── config.ts              # 默认配置与 parseCliOptions
├── changelog-cli.ts           # CLI 注册 · standalone bin 入口
└── index.ts                   # 包主入口
```

## 功能

### 子路径

- `@142vip/changelog`：主入口（`core` API + `changelogCommandRegistration`）
- `@142vip/changelog/cli`：standalone bin 薄入口（与主入口逻辑同源）
- bin：`changelog`、`ch`（`bin/changelog.cjs` → `dist/changelog-cli.cjs` → `changelogCliMain`）

### API 对象

**`changelogApi`**（`core/apis/changelog.api.ts`）

- `generateChangelogInfo(config): Promise<GenerateChangelogResult>`
- `upsertChangelogDoc(outputPath, markdown, releaseVersionName, markdownHeader)`
- `writeChangelogFile(cliOptions)`：仅写 CHANGELOG，不触发 GitHub Release
- `changelogCoreHandler(cliOptions)`：CLI 主流程

**`GitCommitAPI`**（`git-commit.api.ts`）

- `getGitCommitDiff(options): Promise<GitCommitRaw[]>`
- `parseGitCommits(commits, scopeMap): GitCommitRecord[]`
- `parseCommitsToMarkdownStr(commits, config): Promise<string>`

**`GithubAPI`**（`github.api.ts`）

- `fetchGitHubJson<T>(url, init)`：Node 18+ 原生 `fetch`
- `buildGithubReleaseRequestBody(options)`、`generateReleaseUrl(...)`、`createGithubRelease(...)`
- `resolveAuthors`、`getAuthorInfo`、`isExistTag`、`printReleaseUrl`

**`MarkdownAPI`**（`markdown.api.ts`）

- `formatSection(...)`、`getNoSignificantChanges()`
- `getNPMVersionDescription`、`getGithubVersionDescription`

### 配置（`src/core/config.ts`）

- `CONFIG_DEFAULT_NAME`、`CONFIG_DEFAULT_HEADER`、`ChangelogDefaultConfig`
- `defineChangelogConfig`、`loadChangelogConfig`、`parseCliOptions`

### 类型与枚举（`src/core/changelog.interface.ts`）

- `ChangelogCliOptions`、`ChangelogGenerateOptions`、`GenerateChangelogResult`
- `Commit`、`GitAuthorInfo`、`GitCommitRaw`、`GitCommitRecord`、`GitCommitReference`、`GitCommitDiffOptions`
- `GitCommitMessageType`：`pull-request` | `issue` | `hash`（提交引用类型）
- `ChangelogReferenceDisplay`：`issues` | `hash`（Markdown 行尾引用展示分组）

### CLI（`changelog-cli.ts`）

- `CHANGELOG_COMMAND_DETAIL`：与 `fa changelog` 对齐（别名 `c` / `ch` / `cha`）
- `changelogCommandRegistration`：`registerSubcommand` / `registerStandalone` 共用载荷
- `runChangelogCli`：CLI action
- `changelogCliMain`：standalone bin → `registerStandalone` + `parseAsync`

```text
fa changelog -h          # 业务参数 → --dry-run / --vip → --help（--trace 在 fa 根程序）
changelog -h / releasex  # 业务参数 → --dry-run / --vip / --trace → --help（+ --version）

业务参数（changelog）：
  --token / --from / --to / --name / --github / --output / --scopeName / --prerelease
```

CLI 流程：`parseCliOptions` → `generateChangelogInfo` → 打印预览 → `dryRun` 退出 → 写 `output` → 校验 token → `createGithubRelease`。

## 配置

### 用户配置文件

- 文件名：`changelog`（`vipConfig.loadCliConfig`）
- 自定义：`defineChangelogConfig(config)`

### 环境变量

- `GITHUB_TOKEN` 或 `TOKEN`：GitHub API

### `ChangelogDefaultConfig` 关键默认值

- `contributors: true`、`capitalize: true`、`group: true`、`emoji: true`
- `baseUrl: 'github.com'`、`baseUrlApi: 'api.github.com'`
- `prerelease: false`（Latest；CLI `--prerelease` 可覆盖）

## 最佳实践

- Monorepo 子包发版传 `--scopeName`
- CI 须 `fetch-depth: 0`，否则浅克隆无提交记录
- `fa release` / `release-version` 用 `changelogApi.writeChangelogFile`，勿 shell `npx changelog`
- `fa changelog` 直接 `registerSubcommand(CHANGELOG_COMMAND_DETAIL, changelogCommandRegistration)`
- 自定义 scope 显示名写在配置 `scopeMap`

## 构建

```shell
cd packages/changelog && pnpm build
```

unbuild 双入口：`src/index`、`src/changelog-cli`。

## 验证

```shell
cd packages/changelog && pnpm test
cd packages/changelog && pnpm build && pnpm typecheck
```

## 演示

无独立 demo；在 core-x 根仓库 `fa changelog --dry-run` 或 `npx changelog --dry-run` 验证。
