# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## v0.0.1-alpha.7 (2024-10-07)

### ✨ Features

- 移除`qs`、`kolorist`模块，使用`@142vip/utils`进行替换 &nbsp;-&nbsp; by **chufan** [<samp>(22e66)</samp>](https://github.com/142vip/core-x/commit/22e6617)

**Release New Version v0.0.1-alpha.7 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/changelog)**

## v0.0.1-alpha.6 (2024-08-24)

### 🐛 Bug Fixes

- 修复子模块`CHANGELOG`文档变更记录冲突的问题 &nbsp;-&nbsp; by **chufan** [<samp>(19873)</samp>](https://github.com/142vip/core-x/commit/1987368)

**Release New Version v0.0.1-alpha.6 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/changelog)**

## v0.0.1-alpha.5 (2024-08-23)

### ✨ Features

- 移除`@antfu/utils`模块，采用原生ts实现函数功能 &nbsp;-&nbsp; by **chufan** [<samp>(3dcb1)</samp>](https://github.com/142vip/core-x/commit/3dcb175)
- 移除`dayjs`模块，原生实现时间格式化 &nbsp;-&nbsp; by **chufan** [<samp>(60187)</samp>](https://github.com/142vip/core-x/commit/6018782)

### 💅 Refactors

- 模块结构调整，优化工具函数的实现和调用链路 &nbsp;-&nbsp; by **chufan** [<samp>(64f1b)</samp>](https://github.com/142vip/core-x/commit/64f1bff)

**Release New Version v0.0.1-alpha.5 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/changelog)**

## v0.0.1-alpha.4 (2024-08-07)

### ✨ Features

- 修改默认配置，`CHANGELOG`文档支持release类型提交 &nbsp;-&nbsp; by **chufan** [<samp>(29f00)</samp>](https://github.com/142vip/core-x/commit/29f00d1)

### 💅 Refactors

- 结构调整，移除`cac`等模块，替换为`commander`模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/47 [<samp>(a828b)</samp>](https://github.com/142vip/core-x/commit/a828b4c)

**Release New Version v0.0.1-alpha.4 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/changelog)**

## v0.0.1-alpha.3 (2024-08-02)

### ✨ Features

- 支持`monorepo`模式下，基于`scopeName`参数生成子模块的`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(cd7af)</samp>](https://github.com/142vip/core-x/commit/cd7afb1)

**Release New Version v0.0.1-alpha.3 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/changelog)**

## v0.0.1-alpha.1 (2024-07-24)

### 🐛 Bug Fixes

- 修复`scope`信息存在时，单条`commit`信息分类打印异常 &nbsp;-&nbsp; by **chufan** [<samp>(1c8c5)</samp>](https://github.com/142vip/core-x/commit/1c8c544)
- 新增`defineChangelogDefaultConfig`函数，支持`changelog`关键字配置文件 &nbsp;-&nbsp; by **chufan** [<samp>(1f25d)</samp>](https://github.com/142vip/core-x/commit/1f25da0)
- 新增`scopeName`参数，支持`monorepo`的模块生成`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(14ca6)</samp>](https://github.com/142vip/core-x/commit/14ca631)

**Release New Version v0.0.1-alpha.1 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/changelog)**

## v0.0.1-alpha.0 (2024-07-14)

### ✨ Features

- 新增脚手架支持自动记录变更日志 &nbsp;-&nbsp; by **chufan** [<samp>(14ca6)</samp>](https://github.com/142vip/core-x/commit/d5a1a04521c5fb02a1d0e6929293982aa5c45fff)
- 新增`tsconfig`配置，统一模块编译 by . @chufan
- 基本结构初始化  by . @chufan
