# @142vip/changelog

[![NPM version](https://img.shields.io/npm/v/@142vip/changelog?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/changelog)

基于 Git 提交信息，生成变更记录，输出 Markdown 格式的日志文件。

## 安装

CLI 全局命令：`changelog` / `ch`。

```shell
# npm
npm install @142vip/changelog

# pnpm
pnpm add @142vip/changelog
```

## 功能

- [x] CLI 从 Git 提交生成 CHANGELOG Markdown
- [x] 可选写入 `CHANGELOG.md` 并创建 GitHub Release
- [x] API：`ChangelogAPI` `parseCliOptions` `defineChangelogConfig`
- [x] Monorepo `scopeName` 支持
- [x] 贡献者解析（GitHub API）

## 配置

支持 cosmiconfig 配置文件名 `changelog`（见 `ChangelogDefaultConfig`）；CLI 参数可覆盖。

环境变量：`GITHUB_TOKEN` 或 `TOKEN`（发布 Release 时必需）。

## 使用

CLI：

```shell
npx changelog -h
npx changelog --from v1.0.0 --to v1.1.0 --output CHANGELOG.md --dry-run
```

程序化：

```ts
import { ChangelogAPI } from '@142vip/changelog'

await ChangelogAPI.changelogCoreHandler({ to: 'v1.0.0', dryRun: true })
```

### CLI 主要参数（`changelog -h`）

| 参数 | 说明 |
|------|------|
| `--token` | GitHub Token |
| `--from` / `--to` | 提交范围起止标签 |
| `--name` | Release 名称 |
| `--github` | 仓库，如 `@142vip/core-x` |
| `--output` | CHANGELOG 输出路径 |
| `--scopeName` | Monorepo 包名 |
| `--prerelease` | 预发布标记（默认 true） |
| `--dry-run` | 试运行 |
| `--trace` | 日志追踪 |

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/changelog
```

## 参考

- [@142vip/changelog](https://www.npmjs.com/package/@142vip/changelog)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Releases API](https://docs.github.com/en/rest/releases)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
