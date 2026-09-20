# @142vip/release-version

[![NPM version](https://img.shields.io/npm/v/@142vip/release-version?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/release-version)

通用型版本迭代 CLI 工具，支持版本迭代更新，Git 提交信息、打标记并推送到远程。

## 安装

CLI 全局命令：`bumpx` / `bump`。

```shell
# npm
npm install @142vip/release-version

# pnpm
pnpm add @142vip/release-version
```

## 功能

- [x] 交互式或编程式 bump `package.json` 版本
- [x] 可选生成 CHANGELOG、git commit / tag / push
- [x] `versionBump` `versionBumpDryRun` `versionBumpInfo` API
- [x] cosmiconfig 配置名 `bumpx`
- [x] Monorepo `--scopeName` 与 `--vip` 专用能力

## 配置

配置文件名默认 `bumpx`（`defineBumpXConfig` / `bumpConfigDefaults`）。

默认：`commit: true` `push: true` `tag: true` `confirm: true` `preid: alpha`（CLI）。

## 使用

CLI（仓库根 `pnpm release` 封装 `fa release`，底层能力同源）：

```shell
npx bumpx -h
npx bumpx --dry-run --vip
```

API：

```ts
import { versionBump, versionBumpDryRun } from '@142vip/release-version'

await versionBumpDryRun({ confirm: false, changelog: true })
```

### CLI 主要参数（`bumpx -h`）

| 参数 | 说明 |
|------|------|
| `--preid` | 预发布标识（默认 `alpha`） |
| `-c, --commit` | 是否提交（默认 true） |
| `-t, --tag` | 是否打 tag（默认 false） |
| `-p, --push` | 是否推送（默认 true） |
| `-y, --confirm` | 跳过确认（默认 true） |
| `-r, --recursive` | 递归 bump package.json |
| `--changelog` | 生成 CHANGELOG.md |
| `-x, --execute` | bump 后执行命令 |
| `--scopeName` | Monorepo 包名 |
| `--dry-run` | 试运行 |
| `--vip` | @142vip 组织专用功能 |
| `--skip-git-verify` | 跳过 git 钩子 |
| `--ignore-scripts` | 忽略 version 脚本 |

## 升级

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
