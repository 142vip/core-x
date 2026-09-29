# @142vip/release-version

[![NPM version](https://img.shields.io/npm/v/@142vip/release-version?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/release-version)

通用型版本迭代 CLI 工具，支持版本迭代更新，Git 提交信息、打标记并推送到远程。

## 安装

CLI 全局命令：`releasex` / `release`。

```shell
# npm
npm install @142vip/release-version

# pnpm
pnpm add @142vip/release-version
```

## 功能

- ✅ 交互式或编程式更新 `package.json` 版本
- ✅ 可选生成 CHANGELOG、git commit / tag / push
- ✅ `releaseApi`（`releaseVersion` / `releaseVersionDryRun` / `releaseVersionInfo`）
- ✅ `ReleaseVersionOperation` 发版流程状态机（OOP 编排 commit / tag / CHANGELOG）
- ✅ cosmiconfig 配置名 `releasex`
- ✅ Monorepo `--scopeName` 与 `--vip` 专用能力
- ✅ 基于 `VipCommander`，与 `fa` / `changelog` CLI 体验一致

## 配置

配置文件名：`releasex`（`defineReleaseXConfig` / `releaseVersionDefaultConfig`）。

默认：`commit: true` `push: true` `tag: true` `confirm: true` `preid: alpha`（CLI）。

## 使用

CLI（仓库根 `pnpm release` 封装 `fa release`，底层能力同源）：

```shell
npx releasex -h
npx releasex --dry-run --yes
```

API：

```ts
import { defineReleaseXConfig, releaseApi } from '@142vip/release-version'

await releaseApi.releaseVersionDryRun({ confirm: false, changelog: true })
```

### CLI 主要参数（`releasex -h`）

| 参数 | 说明 |
|------|------|
| `--preid` | 预发布标识（默认 `alpha`） |
| `-c, --commit` | 是否提交（默认 true） |
| `-t, --tag` | 是否打 tag（默认 true） |
| `-p, --push` | 是否推送（默认 true） |
| `-y, --yes` | 跳过发版前确认 |
| `-r, --recursive` | 递归更新子 package.json 版本 |
| `--changelog` | 生成 CHANGELOG.md |
| `-x, --execute` | 升版本后执行命令 |
| `--scopeName` | Monorepo 包名 |
| `--dry-run` | 试运行 |
| `--vip` | @142vip 组织专用功能 |
| `--skip-git-verify` | 跳过 git 钩子 |
| `--ignore-scripts` | 忽略 version 脚本 |

## 升级

自旧版迁移时请对照下表：

| 旧项 | 新项 |
|------|------|
| CLI `bumpx` / `bump` | `releasex` / `release` |
| 配置文件 `bumpx.config.*` | `releasex.config.*` |
| `defineBumpXConfig` | `defineReleaseXConfig` |
| `bumpConfigDefaults` | `releaseVersionDefaultConfig` |
| `getBumpDefaultConfig` | `getReleaseVersionDefaultConfig` |
| `releaseVersionDefaults` | `releaseVersionDefaultConfig` |
| `getReleaseVersionDefaults` | `getReleaseVersionDefaultConfig` |
| `VersionProgressEventEnum` | `VersionProgressEvent` |
| `VersionHooksEnum` | `VersionHooks` |
| `versionBump` | `releaseVersion` |
| `versionBumpDryRun` | `releaseVersionDryRun` |
| `versionBumpInfo` | `releaseVersionInfo` |
| `versionRelease` | `releaseVersion` |
| `versionReleaseDryRun` | `releaseVersionDryRun` |
| `versionReleaseInfo` | `releaseVersionInfo` |
| `VersionBumpOptions` | `ReleaseVersionOptions` |
| `VersionReleaseOptions` | `ReleaseVersionOptions` |
| `ReleaseOperation` | `ReleaseVersionOperation` |
| `buildVersionReleaseOptions`（fairy-cli） | `buildReleaseVersionOptions` |

```shell
# 依赖更新
pnpm upgrade @142vip/release-version
```

## 参考

- [@142vip/release-version](https://www.npmjs.com/package/@142vip/release-version)
- [@142vip/changelog](https://www.npmjs.com/package/@142vip/changelog)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
