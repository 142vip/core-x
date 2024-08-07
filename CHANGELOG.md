# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## v0.0.1-alpha.8 (2024-08-07)

### ✨ Features

- Packages中的各模块增加homepage等信息 &nbsp;-&nbsp; by **chufan** [<samp>(b0df1)</samp>](https://github.com/142vip/core-x/commit/b0df105)
- **@142vip/changelog**:
  - 修改默认配置，CHANGELOG文档支持release类型提交 &nbsp;-&nbsp; by **chufan** [<samp>(29f00)</samp>](https://github.com/142vip/core-x/commit/29f00d1)
- **Github Actions**:
  - 新增release流水线，自动发布到npm平台 &nbsp;-&nbsp; by **chufan** [<samp>(7a75c)</samp>](https://github.com/142vip/core-x/commit/7a75cf9)

### 🔥 Performance

- **@142vip/release-version**:
  - 修复一些语法问题，使用更好的代码风格 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/44 [<samp>(fc7de)</samp>](https://github.com/142vip/core-x/commit/fc7defc)

### 🐛 Bug Fixes

- **Github Actions**:
  - 修复release发布异常，支持自动发布npm包 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/45 [<samp>(d4263)</samp>](https://github.com/142vip/core-x/commit/d426349)

### 💅 Refactors

- **@142vip/changelog**:
  - 结构调整，移除cac等模块，替换为commander模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/47 [<samp>(a828b)</samp>](https://github.com/142vip/core-x/commit/a828b4c)

### 📖 Documentation

- 优化目录结构，搜索功能接入algolia平台 &nbsp;-&nbsp; by **chufan** [<samp>(234a2)</samp>](https://github.com/142vip/core-x/commit/234a2da)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish v0.0.1-alpha.4 &nbsp;-&nbsp; by **chufan** [<samp>(4fc81)</samp>](https://github.com/142vip/core-x/commit/4fc81e2)
- **@142vip/release-version**:
  - Publish v0.0.1-alpha.6 &nbsp;-&nbsp; by **chufan** [<samp>(70953)</samp>](https://github.com/142vip/core-x/commit/7095387)

**Release New Version v0.0.1-alpha.8 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.7...v0.0.1-alpha.8)**

## v0.0.1-alpha.7 (2024-08-03)

### ✨ Features

- 优化release脚本，支持子模块版本发布 &nbsp;-&nbsp; by **chufan** [<samp>(3d721)</samp>](https://github.com/142vip/core-x/commit/3d721c5)
- 移除lerna-lite模块，修改对应的version和publish配置 &nbsp;-&nbsp; by **chufan** [<samp>(5db2a)</samp>](https://github.com/142vip/core-x/commit/5db2a78)
- 删除lerna配置和依赖，使用pnpm exec替代模块命令执行 &nbsp;-&nbsp; by **chufan** [<samp>(47329)</samp>](https://github.com/142vip/core-x/commit/473294a)
- **@142vip/changelog**:
  - 支持monorepo模式下，基于scopeName参数生成子模块的changelog文档 &nbsp;-&nbsp; by **chufan** [<samp>(cd7af)</samp>](https://github.com/142vip/core-x/commit/cd7afb1)
- **@142vip/release-version**:
  - 新增scopeName可选参数，支持在Monorepo模式下发布子模块版本、更新CHANGELOG文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/39 [<samp>(9f183)</samp>](https://github.com/142vip/core-x/commit/9f18339)

**Release New Version v0.0.1-alpha.7 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.6...v0.0.1-alpha.7)**

## v0.0.1-alpha.6 (2024-08-02)

### ✨ Features

- Packages下的模块统一新增publishConfig配置 &nbsp;-&nbsp; by **chufan** [<samp>(47217)</samp>](https://github.com/142vip/core-x/commit/47217d2)
- 移除changelogPreset配置，支持bumpx的发布流程 &nbsp;-&nbsp; by **chufan** [<samp>(01a66)</samp>](https://github.com/142vip/core-x/commit/01a66d9)
- 各模块增加files配置，限定npm包发布文件 &nbsp;-&nbsp; by **chufan** [<samp>(4edbe)</samp>](https://github.com/142vip/core-x/commit/4edbe15)
- 修改npmrc配置，支持pnpm publish发布多模块时预检 &nbsp;-&nbsp; by **chufan** [<samp>(0ca59)</samp>](https://github.com/142vip/core-x/commit/0ca5911)
- **@142vip/fairy-cli**:
  - 新增sync命令，支持npm包同步到cnpm仓库 &nbsp;-&nbsp; by **微信公众号：储凡** in https://github.com/142vip/core-x/issues/37 [<samp>(9509e)</samp>](https://github.com/142vip/core-x/commit/9509eac)
- **@142vip/release-version**:
  - 移除@jsdevtools/ez-spawn模块，使用execShell函数执行命令 &nbsp;-&nbsp; by **chufan** [<samp>(6c572)</samp>](https://github.com/142vip/core-x/commit/6c57236)

### 🔥 Performance

- 升级pnpm版本到9.6.0，支持Node.js版本18.x &nbsp;-&nbsp; by **chufan** [<samp>(e48a8)</samp>](https://github.com/142vip/core-x/commit/e48a80a)
- **@142vip/fairy-cli**:
  - 升级代码模块的引入 &nbsp;-&nbsp; by **chufan** [<samp>(fe950)</samp>](https://github.com/142vip/core-x/commit/fe950b6)

### 🐛 Bug Fixes

- **@142vip/release-version**:
  - 修复commit和tag操作异常 &nbsp;-&nbsp; by **chufan** [<samp>(69f3b)</samp>](https://github.com/142vip/core-x/commit/69f3b1e)

**Release New Version v0.0.1-alpha.6 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.5...v0.0.1-alpha.6)**

## v0.0.1-alpha.5 (2024-07-26)

### ✨ Features

- 在monorepo配置中移除docs项目，静态文档作为根目录处理 &nbsp;-&nbsp; by **chufan** [<samp>(31060)</samp>](https://github.com/142vip/core-x/commit/3106033)
- 新增issues和pr配置，更新文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/30 [<samp>(87efa)</samp>](https://github.com/142vip/core-x/commit/87efadc)
- **@142vip/fairy-cli**:
  - 拓展cli工具，支持install、login等命令 &nbsp;-&nbsp; by **chufan** [<samp>(798ff)</samp>](https://github.com/142vip/core-x/commit/798ff87)
  - 移除unbuild等重复依赖，复用根目录依赖 &nbsp;-&nbsp; by **chufan** [<samp>(92eb3)</samp>](https://github.com/142vip/core-x/commit/92eb3ea)

### 🔥 Performance

- 删除script冗余脚本，优化sync脚本逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(3c18c)</samp>](https://github.com/142vip/core-x/commit/3c18ced)
- 移除docker构建相关配置和忽略文件 &nbsp;-&nbsp; by **chufan** [<samp>(0257d)</samp>](https://github.com/142vip/core-x/commit/0257d4c)
- **@142vip/changelog**:
  - 移除未使用到的开发依赖，统一依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(95cfc)</samp>](https://github.com/142vip/core-x/commit/95cfc50)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复流水线执行成功，程序非0异常退出 &nbsp;-&nbsp; by **chufan** [<samp>(f99ea)</samp>](https://github.com/142vip/core-x/commit/f99ea7a)

### 📖 Documentation

- 修改文档，删除冗余内容 &nbsp;-&nbsp; by **chufan** [<samp>(edfb8)</samp>](https://github.com/142vip/core-x/commit/edfb8ea)

**Release New Version v0.0.1-alpha.5 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.4...v0.0.1-alpha.5)**

## v0.0.1-alpha.4 (2024-07-25)

### ✨ Features

- 关闭markdown格式校验，忽略antfu/no-import-dist校验 &nbsp;-&nbsp; by **chufan** [<samp>(43552)</samp>](https://github.com/142vip/core-x/commit/43552da)
- 移除markdown-cli模块，使用eslint校验文档格式 &nbsp;-&nbsp; by **chufan** [<samp>(938ab)</samp>](https://github.com/142vip/core-x/commit/938ab79)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复预发布标签验证异常导致CI执行失败 &nbsp;-&nbsp; by **chufan** [<samp>(cbe8d)</samp>](https://github.com/142vip/core-x/commit/cbe8df1)

### 💅 Refactors

- **@142vip/fairy-cli**:
  - 调整模块代码结构，易于维护、补充文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/18 [<samp>(1d61d)</samp>](https://github.com/142vip/core-x/commit/1d61d30)

### 📖 Documentation

- 更新静态网站，新增团队成员和一些功能说明 &nbsp;-&nbsp; by **chufan** [<samp>(5baf4)</samp>](https://github.com/142vip/core-x/commit/5baf4a4)

**Release New Version v0.0.1-alpha.4 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.3...v0.0.1-alpha.4)**

## v0.0.1-alpha.3 (2024-07-24)

### ✨ Features

- Markdown文件校验忽略CHANGELOG &nbsp;-&nbsp; by **chufan** [<samp>(3cbce)</samp>](https://github.com/142vip/core-x/commit/3cbce8b)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复scope信息存在时，单条commit信息分类打印异常 &nbsp;-&nbsp; by **chufan** [<samp>(1c8c5)</samp>](https://github.com/142vip/core-x/commit/1c8c544)
  - 新增defineChangelogDefaultConfig函数，支持changelog关键字配置文件 &nbsp;-&nbsp; by **chufan** [<samp>(1f25d)</samp>](https://github.com/142vip/core-x/commit/1f25da0)
  - 新增scopeName参数，支持monorepo的模块生成CHANGELOG文档 &nbsp;-&nbsp; by **chufan** [<samp>(14ca6)</samp>](https://github.com/142vip/core-x/commit/14ca631)

**Release New Version v0.0.1-alpha.3 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.2...v0.0.1-alpha.3)**

## v0.0.1-alpha.2 (2024-07-24)

### ✨ Features

- 支持自动化Release流程，发布新版本 &nbsp;-&nbsp; by **chufan** [<samp>(79bb9)</samp>](https://github.com/142vip/core-x/commit/79bb926)
- **@142vip/release-version**: 使用execShell函数 &nbsp;-&nbsp; by **chufan** [<samp>(8f8d7)</samp>](https://github.com/142vip/core-x/commit/8f8d793)

**Release New Version v0.0.1-alpha.2 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)**

## v0.0.1-alpha.1 (2024-07-24)

### ✨ Features

- 删除clean脚本，支持脚手架实现删除 &nbsp;-&nbsp; by **chufan** [<samp>(6b76d)</samp>](https://github.com/142vip/core-x/commit/6b76dae)
- 增加各模块配置，支持build命令 &nbsp;-&nbsp; by **chufan** [<samp>(2f6d3)</samp>](https://github.com/142vip/core-x/commit/2f6d3b5)
- 新增docs文档，静态页面搭建 &nbsp;-&nbsp; by **chufan** [<samp>(6e84f)</samp>](https://github.com/142vip/core-x/commit/6e84fd1)
- 插件相关文档更新，丰富配置 &nbsp;-&nbsp; by **chufan** [<samp>(48bdf)</samp>](https://github.com/142vip/core-x/commit/48bdfe2)
- 依赖更新，支持docs项目管理，配置.vite忽略 &nbsp;-&nbsp; by **chufan** [<samp>(49851)</samp>](https://github.com/142vip/core-x/commit/49851de)
- 官方文档支持CI 自动化部署 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/11> [<samp>(5a786)</samp>](https://github.com/142vip/core-x/commit/5a786d3)
- 文档网站内容更新，优化模块包 &nbsp;-&nbsp; by **chufan** [<samp>(80903)</samp>](https://github.com/142vip/core-x/commit/80903ea)
- **@142vip/changelog**:
  - 支持自定义版本名称 &nbsp;-&nbsp; by **chufan** [<samp>(e062c)</samp>](https://github.com/142vip/core-x/commit/e062c06)
- **@142vip/fairy-cli**:
  - 搭建基本结构，增加部分逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(44f43)</samp>](https://github.com/142vip/core-x/commit/44f43f8)
  - 增加clean命令，支持在当前目录下指定删除 &nbsp;-&nbsp; by **chufan** [<samp>(be939)</samp>](https://github.com/142vip/core-x/commit/be939b2)
  - 支持turbo可选参数，删除turbo构建目录 &nbsp;-&nbsp; by **chufan** [<samp>(7ba7b)</samp>](https://github.com/142vip/core-x/commit/7ba7be9)
  - 支持vite缓存目录删除，增加--vite参数 &nbsp;-&nbsp; by **chufan** [<samp>(0fb42)</samp>](https://github.com/142vip/core-x/commit/0fb42bb)
  - 支持原生exec命令 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/8> [<samp>(2e296)</samp>](https://github.com/142vip/core-x/commit/2e29629)
  - 支持turbo命令，简化dev、build的使用 &nbsp;-&nbsp; by **chufan** [<samp>(bad23)</samp>](https://github.com/142vip/core-x/commit/bad23ce)
  - 模块包内增加turbo依赖，删除全局turbo依赖 &nbsp;-&nbsp; by **chufan** [<samp>(a36b4)</samp>](https://github.com/142vip/core-x/commit/a36b40b)
- **@142vip/release-version**:
  - 搭建基础框架，新增部分功能 &nbsp;-&nbsp; by **chufan** [<samp>(29346)</samp>](https://github.com/142vip/core-x/commit/2934667)
  - 支持bumpx多种配置文件格式 &nbsp;-&nbsp; by **chufan** [<samp>(16a55)</samp>](https://github.com/142vip/core-x/commit/16a5540)
- **@142vip/vitepress**:
  - 新增组件，支持i18n和基础配置 &nbsp;-&nbsp; by **chufan** [<samp>(770fd)</samp>](https://github.com/142vip/core-x/commit/770fddf)
- **changelog**:
  - 修改md文案 &nbsp;-&nbsp; by **chufan** [<samp>(a2793)</samp>](https://github.com/142vip/core-x/commit/a2793cf)
  - 测试scope &nbsp;-&nbsp; by **chufan** [<samp>(81283)</samp>](https://github.com/142vip/core-x/commit/8128340)
  - 支持多模块生成日志文档 &nbsp;-&nbsp; by **chufan** [<samp>(f4e42)</samp>](https://github.com/142vip/core-x/commit/f4e420e)

### 🔥 Performance

- 升级依赖和脚本 &nbsp;-&nbsp; by **chufan** [<samp>(eba2b)</samp>](https://github.com/142vip/core-x/commit/eba2b91)

### 🐛 Bug Fixes

- 修复官方文档部署异常，新增部分链接 &nbsp;-&nbsp; by **chufan** [<samp>(46ab1)</samp>](https://github.com/142vip/core-x/commit/46ab19a)

### 💅 Refactors

- **@142vip/release-version**:
  - 结构与编码风格优化，配置bumpx命令 &nbsp;-&nbsp; by **chufan** [<samp>(3680d)</samp>](https://github.com/142vip/core-x/commit/3680d42)
  - 结构调整，简化代码，优化逻辑流程 &nbsp;-&nbsp; by **chufan** [<samp>(d61f4)</samp>](https://github.com/142vip/core-x/commit/d61f4c7)

### 📖 Documentation

- 修改文档模块，支持项目包启动 &nbsp;-&nbsp; by **chufan** [<samp>(e439a)</samp>](https://github.com/142vip/core-x/commit/e439a04)
- **@142vip/fairy-cli**: Update &nbsp;-&nbsp; by **chufan** [<samp>(96155)</samp>](https://github.com/142vip/core-x/commit/96155dc)

**Release New Version v0.0.1-alpha.1 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)**
