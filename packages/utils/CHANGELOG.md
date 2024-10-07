# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## v0.0.1-alpha.6 (2024-10-06)

### ✨ Features

- 引入`qs`模块，导出`vipQs`对象，支持`stringify`、`parse`方法 &nbsp;-&nbsp; by **chufan** [<samp>(007fc)</samp>](https://github.com/142vip/core-x/commit/007fc90)
- 新增`OPEN_SOURCE`相关常量，优化结构 &nbsp;-&nbsp; by **chufan** [<samp>(30d96)</samp>](https://github.com/142vip/core-x/commit/30d9624)

**Release New Version v0.0.1-alpha.6 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/utils)**

## v0.0.1-alpha.5 (2024-09-24)

### ✨ Features

- 拓展`buildImage`函数，支持`Dockerfile`中的`--target`参数，分步骤构建 &nbsp;-&nbsp; by **chufan** [<samp>(b558a)</samp>](https://github.com/142vip/core-x/commit/b558a7c)
- 修改命令输出日志格式 &nbsp;-&nbsp; by **chufan** [<samp>(92036)</samp>](https://github.com/142vip/core-x/commit/92036b7)

### 🐛 Bug Fixes

- 拓展`buildImage`函数功能，增加`memory`参数，支持`Docker`内存限制 &nbsp;-&nbsp; by **chufan** [<samp>(694f0)</samp>](https://github.com/142vip/core-x/commit/694f054)

**Release New Version v0.0.1-alpha.5 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/utils)**

## v0.0.1-alpha.4 (2024-09-21)

### ✨ Features

- 优化`buildImage`方法，支持`Docker`地址导出 &nbsp;-&nbsp; by **chufan** [<samp>(8ecd1)</samp>](https://github.com/142vip/core-x/commit/8ecd17b)
- 优化`commandStandardExecutor`执行器逻辑，增加日志 &nbsp;-&nbsp; by **chufan** [<samp>(a0bcd)</samp>](https://github.com/142vip/core-x/commit/a0bcdf3)
- 修改docker命令执行逻辑，`push`、`delete`镜像等操作直接执行 &nbsp;-&nbsp; by **chufan** [<samp>(4fc01)</samp>](https://github.com/142vip/core-x/commit/4fc0177)
- 修改`getRecentGitCommit`函数逻辑，只获取最近的`push`信息，包含`merge`操作 &nbsp;-&nbsp; by **chufan** [<samp>(a47e5)</samp>](https://github.com/142vip/core-x/commit/a47e559)
- 修改buildImage核心逻辑，支持`push`、`delete`等可选参数 &nbsp;-&nbsp; by **chufan** [<samp>(d9347)</samp>](https://github.com/142vip/core-x/commit/d934732)

**Release New Version v0.0.1-alpha.4 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/utils)**

## v0.0.1-alpha.3 (2024-09-20)

### ✨ Features

- 修改`getLogInfo`函数为`getRecentGitCommit` &nbsp;-&nbsp; by **chufan** [<samp>(f7923)</samp>](https://github.com/142vip/core-x/commit/f79237b)
- 增加`docker`相关`api`方法 &nbsp;-&nbsp; by **chufan** [<samp>(461bb)</samp>](https://github.com/142vip/core-x/commit/461bb18)

**Release New Version v0.0.1-alpha.3 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/utils)**

## v0.0.1-alpha.2 (2024-09-12)

### ✨ Features

- 移除`chalk`，使用`ansi-colors`模块，新增`vipColor`和`vipSymbols`常用终端日志输出变量 &nbsp;-&nbsp; by **chufan** [<samp>(55ae6)</samp>](https://github.com/142vip/core-x/commit/55ae636)

**Release New Version v0.0.1-alpha.2 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/utils)**

## v0.0.1-alpha.1 (2024-09-08)

### ✨ Features

- 模块新增，支持`shell`、`logger`基础功能封装，支持`@142vip/common`模块部分功能 &nbsp;-&nbsp; by **chufan** [<samp>(bd760)</samp>](https://github.com/142vip/core-x/commit/bd7606c)
- 修复`execShell`函数执行异常，支持同步执行命令 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/94 [<samp>(b00c9)</samp>](https://github.com/142vip/core-x/commit/b00c950)

**Release New Version v0.0.1-alpha.1 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/utils)**