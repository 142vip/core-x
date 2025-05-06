# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.


## v0.0.3-alpha.24 (2025-05-06)

### ✨ Features

- 移除`js-yaml`等依赖模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/498 [<samp>(76de7)</samp>](https://github.com/142vip/core-x/commit/76de7b0)

**Release New Version v0.0.3-alpha.24 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.23 (2025-04-23)

### ✨ Features

- 优化`commit`命令交互框逻辑，支持`git`提交、推送 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/477 [<samp>(39ef7)</samp>](https://github.com/142vip/core-x/commit/39ef711)
- 优化`release`命令交互体验 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/478 [<samp>(5c15f)</samp>](https://github.com/142vip/core-x/commit/5c15ff2)
- 核心`cli`逻辑重构，优化模块整理结构，支持命令别名机制 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/479 [<samp>(23b82)</samp>](https://github.com/142vip/core-x/commit/23b824a)
- `release`命令提交时，默认配置`noVerify`参数，忽略`git`钩子函数 &nbsp;-&nbsp; by **chufan** [<samp>(2f53c)</samp>](https://github.com/142vip/core-x/commit/2f53c0f)
- Release命令增加`check-branch`参数，支持指定分支检测 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/497 [<samp>(15ecc)</samp>](https://github.com/142vip/core-x/commit/15ecc34)

### 🐛 Bug Fixes

- 修复`copyright`命令依赖异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/491 [<samp>(96158)</samp>](https://github.com/142vip/core-x/commit/961584f)

### 💅 Refactors

- 基于`VipCommander`的`initCommand`方法，重写`fairy`工具链 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/494 [<samp>(2ea95)</samp>](https://github.com/142vip/core-x/commit/2ea95c5)

**Release New Version v0.0.3-alpha.23 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.22 (2025-04-15)

### ✨ Features

- `fairy`助手增加`copyright`命令，支持著作权申请业务 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/445 [<samp>(8cdab)</samp>](https://github.com/142vip/core-x/commit/8cdab0a)
- 移除`verifyCommit`校验函数及类型 &nbsp;-&nbsp; by **chufan** [<samp>(77b0c)</samp>](https://github.com/142vip/core-x/commit/77b0c89)
- 移除`getLatestTagName`、`getCommitLogs`函数，功能逻辑简化 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/457 [<samp>(4f645)</samp>](https://github.com/142vip/core-x/commit/4f64519)
- 移除`monorepo`方法，使用`VipMonorepo`工具替换 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/460 [<samp>(eb95f)</samp>](https://github.com/142vip/core-x/commit/eb95f58)
- 增加`commit`命令，拓展`cli`功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/464 [<samp>(bd3c9)</samp>](https://github.com/142vip/core-x/commit/bd3c9d5)
- 拓展`release`方法，支持`check`命令终端预览当前版本`commit`记录 &nbsp;-&nbsp; by **chufan** [<samp>(a7f86)</samp>](https://github.com/142vip/core-x/commit/a7f869e)

**Release New Version v0.0.3-alpha.22 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.21 (2025-03-29)

### ✨ Features

- `sync`处理逻辑优化 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/414 [<samp>(f9962)</samp>](https://github.com/142vip/core-x/commit/f996290)
- 拓展`install`、`clean`、`changelog`等命令 &nbsp;-&nbsp; by **chufan** [<samp>(2d253)</samp>](https://github.com/142vip/core-x/commit/2d253e0)
- 优化`fa`各子命令，简化`login`、`release`等逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(451d5)</samp>](https://github.com/142vip/core-x/commit/451d5c5)

**Release New Version v0.0.3-alpha.21 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.20 (2025-02-13)

### ✨ Features

- 调整`VipExecutor`方法导入 &nbsp;-&nbsp; by **chufan** [<samp>(3d2ce)</samp>](https://github.com/142vip/core-x/commit/3d2ce7e)
- 移除`getBranchName`方法，简化`release`命令参数定义 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/359 [<samp>(24a31)</samp>](https://github.com/142vip/core-x/commit/24a31e0)

### 💅 Refactors

- 优化基础命令逻辑，简化代码 &nbsp;-&nbsp; by **chufan** [<samp>(28db8)</samp>](https://github.com/142vip/core-x/commit/28db882)

**Release New Version v0.0.3-alpha.20 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.19 (2025-02-06)

### ✨ Features

- `clean`命令增加`--git-hooks`参数，支持`.git/hooks`目录清理 &nbsp;-&nbsp; by **chufan** [<samp>(8c8cc)</samp>](https://github.com/142vip/core-x/commit/8c8ccb3)

### 💅 Refactors

- `sync`功能日志、代码优化 &nbsp;-&nbsp; by **chufan** [<samp>(100f6)</samp>](https://github.com/142vip/core-x/commit/100f615)

**Release New Version v0.0.3-alpha.19 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.18 (2025-01-20)

### ✨ Features

- `clean`命令增加`--coverage`参数，支持单元测试目录清理 &nbsp;-&nbsp; by **chufan** [<samp>(81a46)</samp>](https://github.com/142vip/core-x/commit/81a46ff)
- `cli`入口逻辑优化，使用`VipConsole`增加日志逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(c9cc3)</samp>](https://github.com/142vip/core-x/commit/c9cc355)
- 强化`TS`类型支持 &nbsp;-&nbsp; by **chufan** [<samp>(351b5)</samp>](https://github.com/142vip/core-x/commit/351b539)

### 🐛 Bug Fixes

- 修复`VipInquirer`模块使用异常 &nbsp;-&nbsp; by **chufan** [<samp>(58912)</samp>](https://github.com/142vip/core-x/commit/589122b)

**Release New Version v0.0.3-alpha.18 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.17 (2024-12-12)

### ✨ Features

- `clean`命令支持`--midway`参数删除`typings`目录 &nbsp;-&nbsp; by **chufan** [<samp>(375e7)</samp>](https://github.com/142vip/core-x/commit/375e784)
- 移除`commander`模块，使用`VipCommander`进行终端`cli`定义 &nbsp;-&nbsp; by **chufan** [<samp>(22f00)</samp>](https://github.com/142vip/core-x/commit/22f00ea)

**Release New Version v0.0.3-alpha.17 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.16 (2024-12-09)

### 🐛 Bug Fixes

- 修复`clean`命令删除`dist`目录异常，避免删除`node_modules`中的`dist`目录，增加`--deps`参数 &nbsp;-&nbsp; by **chufan** [<samp>(65bb3)</samp>](https://github.com/142vip/core-x/commit/65bb3cf)

### 📖 Documentation

- 更新文档，支持`clean`、`sync`命令说明 &nbsp;-&nbsp; by **chufan** [<samp>(ffb96)</samp>](https://github.com/142vip/core-x/commit/ffb96bd)

**Release New Version v0.0.3-alpha.16 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.15 (2024-12-07)

### ✨ Features

- `clean`命令增加`deps`可选参数，`vite`、`turbo`、`deps`参数默认值为`false` &nbsp;-&nbsp; by **chufan** [<samp>(0b633)</samp>](https://github.com/142vip/core-x/commit/0b6339b)

**Release New Version v0.0.3-alpha.15 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.14 (2024-10-28)

### ✨ Features

- 代码清理，模块结构优化 &nbsp;-&nbsp; by **chufan** [<samp>(08df8)</samp>](https://github.com/142vip/core-x/commit/08df8bd)

**Release New Version v0.0.3-alpha.14 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.13 (2024-09-25)

### ✨ Features

- 拓展`changelog`命令，支持`cli`工具快速执行`npx changelog`相关命令 &nbsp;-&nbsp; by **chufan** [<samp>(81f3e)</samp>](https://github.com/142vip/core-x/commit/81f3e3e)

**Release New Version v0.0.3-alpha.13 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.12 (2024-09-24)

### ✨ Features

- 移除`exec-command`命令执行器，替换为`@142vip/utils`模块 &nbsp;-&nbsp; by **chufan** [<samp>(2f29c)</samp>](https://github.com/142vip/core-x/commit/2f29c4a)

**Release New Version v0.0.3-alpha.12 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.11 (2024-09-19)

### ✨ Features

- `release`命令改造，支持非`monorepo`仓库，`--filter`参数支持默认`[]`空数组返回 &nbsp;-&nbsp; by **chufan** [<samp>(184a8)</samp>](https://github.com/142vip/core-x/commit/184a813)

**Release New Version v0.0.3-alpha.11 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.10 (2024-09-17)

### 🐛 Bug Fixes

- 修复`release`命令提醒日志打印异常 &nbsp;-&nbsp; by **chufan** [<samp>(106be)</samp>](https://github.com/142vip/core-x/commit/106bee3)

**Release New Version v0.0.3-alpha.10 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.9 (2024-09-12)

### ✨ Features

- 移除`log-symbols`模块，优化`check`命令的日志输出 &nbsp;-&nbsp; by **chufan** [<samp>(47635)</samp>](https://github.com/142vip/core-x/commit/4763593)
- `release`发布命令增加`--filter`可选参数，支持多次调用，用于指定模块路径 &nbsp;-&nbsp; by **chufan** [<samp>(d0cc1)</samp>](https://github.com/142vip/core-x/commit/d0cc1e7)

### 🐛 Bug Fixes

- 修复`sync`命令同步模块异常，更改同步源域名为：`https://registry-direct.npmmirror.com` &nbsp;-&nbsp; by **chufan** [<samp>(4c971)</samp>](https://github.com/142vip/core-x/commit/4c971a4)

**Release New Version v0.0.3-alpha.9 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.8 (2024-09-08)

### ✨ Features

- 将`@142vip/common`替换成`@142vip/utils`，使用`execShell`执行函数 &nbsp;-&nbsp; by **chufan** [<samp>(72a2d)</samp>](https://github.com/142vip/core-x/commit/72a2dc5)
- 修改`lint`命令，使用异步执行器执行`eslint`校验命令 &nbsp;-&nbsp; by **chufan** [<samp>(bd87c)</samp>](https://github.com/142vip/core-x/commit/bd87c0b)

**Release New Version v0.0.3-alpha.8 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.7 (2024-08-30)

### ✨ Features

- 新增`verifyCommit`函数，支持`git commit`信息校验 &nbsp;-&nbsp; by **chufan** [<samp>(aa29a)</samp>](https://github.com/142vip/core-x/commit/aa29ab2)

### 🐛 Bug Fixes

- 修复`clean`命令配置`--nuxt`参数，`.output`目录删除异常 &nbsp;-&nbsp; by **chufan** [<samp>(2e441)</samp>](https://github.com/142vip/core-x/commit/2e441e0)

**Release New Version v0.0.3-alpha.7 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.6 (2024-08-23)

### ✨ Features

- 修复`release`根模块时`tag`功能触发异常 &nbsp;-&nbsp; by **微信公众号：储凡** [<samp>(468c4)</samp>](https://github.com/142vip/core-x/commit/468c4bd)

**Release New Version v0.0.3-alpha.6 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.5 (2024-08-23)

### ✨ Features

- 修正`CHANGELOG`文档，优化`release`命令支持版本名称`markdown`显示 &nbsp;-&nbsp; by **chufan** [<samp>(77678)</samp>](https://github.com/142vip/core-x/commit/7767850)
- 移除`inquirer`模块，`release`命令有限`check-release`逻辑，日志格式调整 &nbsp;-&nbsp; by **chufan** [<samp>(5e56c)</samp>](https://github.com/142vip/core-x/commit/5e56c42)
- 丰富`TS`类型，增加`branch`参数，默认从`next`分支获取`commit`信息，增加`release`交互全局错误捕获 &nbsp;-&nbsp; by **chufan** [<samp>(c2793)</samp>](https://github.com/142vip/core-x/commit/c2793ad)

### 🐛 Bug Fixes

- 修复`lint`命令，支持`--fix`参数配置自动修复代码 &nbsp;-&nbsp; by **chufan** [<samp>(76472)</samp>](https://github.com/142vip/core-x/commit/7647248)


**Release New Version v0.0.3-alpha.5 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.4 (2024-08-23)

### ✨ Features

- 移除`cnpm`模块，基于api实现，支持npm包同步到cnpm平台上 &nbsp;-&nbsp; by **chufan** [<samp>(92eaa)</samp>](https://github.com/142vip/core-x/commit/92eaa4c)
- `release`命令增加`--vip`等参数，支持`cli`交互式选择发布的模块和版本 &nbsp;-&nbsp; by **chufan** [<samp>(d2694)</samp>](https://github.com/142vip/core-x/commit/d26941d)
- 优化`versionBump`参数，支持提交`commit`信息和`push`远程仓库 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/64 [<samp>(a5bf5)</samp>](https://github.com/142vip/core-x/commit/a5bf5fa)


**Release New Version v0.0.3-alpha.4 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.3 (2024-08-09)

### 💅 Refactors

- 模块结构调整，简化导出代码和cli处理流程 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/52 [<samp>(dfac2)</samp>](https://github.com/142vip/core-x/commit/dfac2c5)

**Release New Version v0.0.3-alpha.3 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/fairy-cli)**

## v0.0.3-alpha.2 (2024-08-08)

**No Significant Changes**


## v0.0.3-alpha.1 (2024-07-21)

### ✨ Features

- 完成基础`cli`流程，添加参数校验 by . @chufan
- 优化`shell`执行逻辑 配置`eslint`  by . @mmdapl

## v0.0.3-alpha.0 (2024-07-14)

### ✨ Features

- 新增终端交互方式 by . @chufan
- 新增`shell`执行，优化文档  by . @chufan
