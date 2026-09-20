# @142vip/changelog

技术说明。不随 npm 发布。

## 定位

基于 Git Conventional Commits 解析提交记录，生成 Markdown 格式 CHANGELOG，并可调用 GitHub API 创建 Release。供 `fa changelog`、`pnpm release` 链路与 CD 工作流使用。

## 功能

### 子路径

- `@142vip/changelog`：主入口（`src/index.ts` → `core` / `enums` / `shared`）
- bin：`changelog`、`ch`（`cli.mjs` → `changelog-cli.ts`）

### API 对象（`src/core/`）

**`ChangelogAPI`**（`changelog.api.ts`）

- `generateChangelogInfo(config: ChangelogGenerateOptions): Promise<GenerateChangelogResult>`
- `upsertChangelogDoc(outputPath, markdown, releaseVersionName, markdownHeader): Promise<void>`
- `changelogCoreHandler(cliOptions: ChangelogCliOptions): Promise<void>`（CLI 主流程）

**`GitCommitAPI`**（`git-commit.api.ts`）

- `getGitCommitDiff(options: GitCommitDiffOptions): Promise<GitCommitRaw[]>`
- `parseGitCommits(commits, scopeMap): GitCommitRecord[]`
- `parseCommitsToMarkdownStr(commits, config): Promise<string>`

**`GithubAPI`**（`github.api.ts`）

- `getAuthorInfo(options, info): Promise<GitAuthorInfo>`
- `isExistTag(...)`、`generateReleaseUrl(...)`、`printReleaseUrl(webUrl, success?)`
- `getHeaders(token)`、`resolveAuthors(commits, options)`
- `createGithubRelease(options)`

**`MarkdownAPI`**（`markdown.api.ts`）

- `formatSection(...)`、`getNoSignificantChanges()`
- `getNPMVersionDescription(pkgName, pkgVersion)`
- `getGithubVersionDescription({ baseUrl, repo, fromVersion, toVersion })`

### 配置与解析（`src/shared/config.ts`）

- `CONFIG_DEFAULT_NAME`：`'changelog'`（`vipConfig.loadCliConfig` 配置文件名）
- `CONFIG_DEFAULT_HEADER`：CHANGELOG 文件头 Markdown 模板
- `ChangelogDefaultConfig`：默认 `types` / `scopeMap` / `titles` / `contributors` / `capitalize` / `group` / `emoji` / `baseUrl` / `baseUrlApi` / `prerelease`
- `defineChangelogConfig(config): ChangelogGenerateOptions`
- `loadChangelogConfig()`：合并用户配置文件与默认配置
- `parseCliOptions(cliOptions): ChangelogGenerateOptions`：CLI 入参 + 配置 + Git 自动推断 `from` / `to` / `repo` / `name` / `prerelease`

### 默认 commit type 映射（`ChangelogDefaultConfig.types`）

- `feat` → `✨ Features`（semver `minor`）
- `perf` → `🔥 Performance`（`patch`）
- `fix` → `🐛 Bug Fixes`（`patch`）
- `refactor` → `💅 Refactors`（`patch`）
- `docs` → `📖 Documentation`（`patch`）
- `build` → `📦 Build`（`patch`）
- `types` → `🌊 Types`（`patch`）
- `release` → `😏 Release Packages`（`patch`）

### 类型（`src/enums/`）

**`ChangelogCliOptions`**（extends `VipCommanderOptions`）

- `token?`、`from?`、`to?`、`github?`、`name?`、`prerelease?`、`output?`、`scopeName?`

**`ChangelogGenerateOptions`**

- `types`、`scopeMap`、`titles`、`header?`、`scopeName?`、`dryRun?`、`output?`
- `contributors`、`capitalize`、`group`（`boolean | 'multiple'`）、`emoji`
- `name`、`baseUrlApi`、`baseUrl`、`from`、`to`、`prerelease`、`repo`

**`GenerateChangelogResult`**：`config`、`commits`、`markdown`、`releaseUrl`

**`Commit`**：extends `GitCommitRecord`，含 `resolvedAuthors?`

**`GitAuthorInfo`**：`name`、`email`、`commits`、`login?`

**`GitCommitRaw`** / **`GitCommitRecord`** / **`GitCommitAuthor`** / **`GitCommitReference`** / **`GitCommitDiffOptions`**

**`GitCommitMessageType`**：`pull-request` | `issue` | `hash`

### CLI（`changelog-cli.ts`）

```text
changelog [options]

选项：
  --token <token>         GitHub Token（亦可 GITHUB_TOKEN / TOKEN 环境变量）
  --from <from>           起始 tag
  --to <to>               结束 tag（缺省：HEAD 上 tag 或当前分支）
  --name <name>           Release 名称（缺省同 to）
  --github <github>       仓库，如 @142vip/core-x
  --output <output>       输出 CHANGELOG 路径（建议绝对路径）
  --scopeName <scopeName> Monorepo 子包名
  --prerelease            标记为预发布（默认 true）
```

CLI 流程概要：`parseCliOptions` → 生成 markdown → `dryRun` 则打印并退出 → 写 `output` → 校验 token → 浅克隆检测 → `createGithubRelease`。

## 配置

### 用户配置文件

- 文件名：`changelog`（`vipConfig.loadCliConfig`，与 `CONFIG_DEFAULT_NAME` 一致）
- 自定义入口：`defineChangelogConfig(config)`

### 环境变量

- `GITHUB_TOKEN` 或 `TOKEN`：GitHub API；CLI `--token` 优先

### `ChangelogDefaultConfig` 关键默认值

- `contributors: true`
- `capitalize: true`
- `group: true`
- `emoji: true`
- `baseUrl: 'github.com'`
- `baseUrlApi: 'api.github.com'`
- `prerelease: true`
- `scopeMap: {}`

## 最佳实践

- Monorepo 子包发版传 `--scopeName`，输出 NPM 版本描述而非根仓库 GitHub compare 链接
- CI 浅克隆须 `fetch-depth: 0`，否则 `commits.length === 0` 且 `isRepoShallow()` 会报错退出
- 自定义 scope 显示名写在配置 `scopeMap`
- 发版前用 `dryRun`（经 `VipCommanderOptions`）预览 markdown，确认后再写文件与创建 Release
- 勿手改生成逻辑中的 Conventional Commit 正则；不合规 commit 会被 `parseGitCommit` 过滤

## 构建

`unbuild` 双格式

```shell
cd packages/changelog && pnpm build
```

## 验证

```shell
cd packages/changelog && pnpm build && pnpm typecheck
cd packages/changelog && pnpm test
```

## 演示

无独立 demo 应用；在 core-x 中由 `fa changelog` 调用 `npx changelog`，CD 工作流 push `next` 后触发 `npx changelog`。
