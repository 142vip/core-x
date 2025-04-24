# @142vip/changelog

[![NPM version](https://img.shields.io/npm/v/@142vip/changelog?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/changelog)

根据`Git`提交记录，自动生成`CHANGELOG`文档

从 `GitHub` 提交信息[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)中生成更改日志。 这个模块实现参考了 [changelogen](https://github.com/unjs/changelogen) 和 [changelogithub](https://github.com/antfu/changelogithub) 两个模块的实现。

非常感谢两位作者的实现思路

[👉 使用示例](https://github.com/142vip/core-x/releases)

## 安装

```shell
# 安装
pnpm i @142vip/changelog -D
```

## 使用

### 生成CHANGELOG.md文档

```bash
# output参数可以配置，支持做本地文档更新
npx changelog --output CHANGELOG.md
```

### 试运行

```bash
# 只本地生成创建版本的URL
npx changelog --dry-run
```

### 配合Github Actions使用

```yml
# .github/workflows/release.yml
name: Release

permissions:
  contents: write

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      # 安装node版本，大于16
      - uses: actions/setup-node@v4
        with:
          node-version: 16.x

      # Github发布版本，并更新Release信息
      - name: Release New Version
        run: |
          npx changelog
        env:
          GITHUB_TOKEN: ${{secrets.TOKEN}}
```

向 GitHub 推送以“v”开头的标签时，`github actions`会被触发。

在142vip所有的开源仓库中，都可以通过`@142vip/changelog`模块来实现发布，例如：

```yaml
#
# CD持续交付
#

name: CD
on:
  push:
    branches:
      - next
  workflow_dispatch:
jobs:
  # 版本发布
  github-release:
    name: 创建Github发布
    runs-on: ubuntu-latest
    # 主库next且执行release更新时执行
    if: github.repository == '142vip/core-x' && startsWith(github.event.head_commit.message, 'chore(release):')

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          persist-credentials: false
          fetch-depth: 0

      # 安装PNPM
      - name: PNPM Install
        uses: pnpm/action-setup@v4
        with:
          version: 9.6.0

      # 安装Node环境
      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20.12.2
          # 缓存
          cache: pnpm

      # 基于国内镜像源下载依赖，并执行初始化脚本：钩子函数、思维导图构建
      - name: Install Dependencies
        run: |
          ./scripts/ci

      # ci的hooks已经执行
      #      - name: Build All Packages
      #        run: |
      #          pnpm build:packages

      # Github发布版本，并更新Release信息
      - name: Release New Version
        run: npx changelog
        env:
          GITHUB_TOKEN: ${{secrets.TOKEN}}
```

### 更多功能

```shell
# 常看命令
npx changelog -h

Usage: @142vip/changelog [options]

基于Git提交信息，生成变更记录，输出Markdown格式的CHANGELOG.md文件

Options:
  -v,--version             VipCommander Version By @142vip
  --trace                  开启日志追踪模式 (default: false)
  --dry-run                试运行 (default: false)
  --token <token>          GitHub的Token
  --from <from>            Git Commit信息的开始的标签
  --to <to>                Git Commit信息的结束标签
  --name <name>            发布的名称
  --github <github>        Github仓库地址，例如：@142vip/core-x
  --output <output>        输出文档的文件名，建议用绝对路径，例如：CHANGELOG.md
  --scopeName <scopeName>  Monorepo模式下的应用包名称
  --prerelease             将当前发布的版本标记为预发布状态 (default: true)
  -h, --help               display help for command
```

## 配置

可以将配置文件放在项目根目录中，名为 `changelog.config.{json，ts，js，mjs，cjs}`或使用 `changelog` 字段在`package.json`中。

```ts
// 默认配置
export default {
  scopeMap: {},
  types: {
    feat: { title: '✨ Features', semver: 'minor' },
    perf: { title: '🔥 Performance', semver: 'patch' },
    fix: { title: '🐛 Bug Fixes', semver: 'patch' },
    refactor: { title: '💅 Refactors', semver: 'patch' },
    docs: { title: '📖 Documentation', semver: 'patch' },
    build: { title: '📦 Build', semver: 'patch' },
    types: { title: '🌊 Types', semver: 'patch' },
    release: { title: '😏 Release Packages', semver: 'patch' },
  },
  titles: {
    breakingChanges: '🚨 Breaking Changes',
  },
  contributors: true,
  capitalize: true,
  group: true,
  emoji: true,
  baseUrl: 'github.com',
  baseUrlApi: 'api.github.com',
  prerelease: true,
}
```

## API

- `GithubAPI` 对象
- `Changelog` 对象
- `ChangelogAPI`
- `GitCommitAPI` 对象
- `MarkdownAPI` 对象

```ts
/**
 * changelog相关API
 */
export const ChangelogAPI = {
  generateChangelogInfo,
  upsertChangelogDoc,
  changelogCoreHandler,
}

/**
 * Git Commit相关API
 */
export const GitCommitAPI = {
  getGitCommitDiff,
  parseGitCommits,
  parseCommitsToMarkdownStr,
}

/**
 * Github相关API
 */
export const GithubAPI = {
  getAuthorInfo,
  isExistTag,
  generateReleaseUrl,
  printReleaseUrl,
  getHeaders,
  resolveAuthors,
  createGithubRelease,
}

/**
 * markdown文档相关API
 */
export const MarkdownAPI = {
  formatSection,
  getNoSignificantChanges,
  getNPMVersionDescription,
  getGithubVersionDescription,
}
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
