# @142vip/fairy-cli

[![NPM version](https://img.shields.io/npm/v/@142vip/fairy-cli?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/fairy-cli)

通用型 CLI 助手、一站式工具，支持多种命令操作

## 安装

安装后可通过 `fa` 或 `fairy` 调用（`package.json` `bin` 字段）。

```shell
# npm
npm install -D @142vip/fairy-cli

# pnpm
pnpm add -D @142vip/fairy-cli
```

## 功能

- [x] 登录 Docker / npm（`login`）
- [x] 依赖安装（`install`）
- [x] Monorepo 版本发布（`release`）
- [x] CHANGELOG 生成（`changelog`）
- [x] npm 镜像推送（`publish`）
- [x] CNPM 包同步（`sync`）
- [x] 项目部署（`deploy`）
- [x] ESLint 检查与格式化（`lint`）
- [x] 清理构建产物（`clean`）
- [x] 软著源代码文档生成（`copyright`）
- [x] Git Commit 规范提交（`commit`）
- [x] Agent Skills 同步与校验（`ai`，集成 `@142vip/agent-skills`）
- [x] 编程式 API：`fairyCliMain`、`releasePackage`、`printPreCheckRelease`

## 配置

无

## 使用

查看全部命令：

```shell
fa -h
```

输出示例：

```text
Usage: @142vip/fairy-cli [options] [command]

通用型Cli助手、一站式工具，支持多种命令操作

Options:
  -v,--version                    VipCommander Version By @142vip
  -h, --help                      display help for command

Commands:
  login|l [options]               登录平台
  install|i [options]             安装依赖
  release|re [options]            发布新的版本
  changelog|c [options]           生成 CHANGELOG 日志记录
  publish|p [options]             远程镜像推送
  sync|s [options] [packageName]  同步NPM包
  deploy|de [options]             项目部署
  lint|li [options]               根据Eslint检查、格式化代码风格
  clean|cl [options]              快速清理项目
  copyright|cr [options]          软件著作权登记的源代码文档生成
  commit|co [options] [vip]       Git Commit 提交信息
  ai|a [options] [action]         AI Agent Skills 管理
  help [command]                  display help for command
```

常用示例：

```shell
# Monorepo 交互发版（@142vip 组织）
fa release --vip -F './packages/*'

# 同步 Agent Skills 到当前项目
fa ai sync -t .

# 校验下游 skills 是否与包内一致
fa ai check -t .

# 查看 agent-skills 包信息
fa ai info
```

编程式调用：

```ts
import { fairyCliMain, printPreCheckRelease, releasePackage } from '@142vip/fairy-cli'

await fairyCliMain()
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/fairy-cli
```

## 参考

- [@142vip/fairy-cli](https://www.npmjs.com/package/@142vip/fairy-cli)
- [@142vip/agent-skills](https://www.npmjs.com/package/@142vip/agent-skills)
- [@142vip/release-version](https://www.npmjs.com/package/@142vip/release-version)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
