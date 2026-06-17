# Changelog

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## v0.0.1-alpha.40 (2026-06-17)

### ✨ Features

- 增加`npm-trust`脚本，支持批量管理NPM包 &nbsp;-&nbsp; by **chufan** [<samp>(46005)</samp>](https://github.com/142vip/core-x/commit/46005af8)
- 增加`npm-release`脚本，支持本地进行`npm`包发布 &nbsp;-&nbsp; by **chufan** [<samp>(c7f48)</samp>](https://github.com/142vip/core-x/commit/c7f48f0a)
- **@142vip/axios**:
  - 新增默认配置、配置创建函数，升级依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/799 [<samp>(4b4d3)</samp>](https://github.com/142vip/core-x/commit/4b4d3dfe)

### 🐛 Bug Fixes

- 修复首页表格布局异常，增加顶部间距 &nbsp;-&nbsp; by **chufan** [<samp>(64012)</samp>](https://github.com/142vip/core-x/commit/64012a44)
- 修复流水线异常，升级流水线Node版本到22.10.0 &nbsp;-&nbsp; by **chufan** [<samp>(85e9f)</samp>](https://github.com/142vip/core-x/commit/85e9f71b)
- **@142vip/utils**:
  - 忽略process的校验规则 &nbsp;-&nbsp; by **chufan** [<samp>(a5670)</samp>](https://github.com/142vip/core-x/commit/a56704df)

### 📦 Build

- 升级ci脚本，支持corepack自动安装 &nbsp;-&nbsp; by **chufan** [<samp>(8fe15)</samp>](https://github.com/142vip/core-x/commit/8fe15df8)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(5e386)</samp>](https://github.com/142vip/core-x/commit/5e386b25)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.51` &nbsp;-&nbsp; by **chufan** [<samp>(756ae)</samp>](https://github.com/142vip/core-x/commit/756ae9df)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.21` &nbsp;-&nbsp; by **chufan** [<samp>(b8d73)</samp>](https://github.com/142vip/core-x/commit/b8d73fad)

**Release New Version v0.0.1-alpha.40 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.39...v0.0.1-alpha.40)**

## v0.0.1-alpha.39 (2026-05-11)

### ✨ Features

- 优化`HomePage`首页组件，支持同步加载表格数据 &nbsp;-&nbsp; by **chufan** [<samp>(17cfe)</samp>](https://github.com/142vip/core-x/commit/17cfe84f)
- **@142vip/nest**:
  - `Response`函数增加`HttpCode`装饰器逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(b149b)</samp>](https://github.com/142vip/core-x/commit/b149bae0)
- **@142vip/nest-starter**:
  - 引入`BaseEntityVo`等数据模型 &nbsp;-&nbsp; by **chufan** [<samp>(b0639)</samp>](https://github.com/142vip/core-x/commit/b06394bc)
- **@142vip/utils**:
  - 增加`buildImage`参数，支持日志打印、镜像推送 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/773 [<samp>(3ce47)</samp>](https://github.com/142vip/core-x/commit/3ce47fa0)
  - 支持浏览器和服务端使用，功能隔离 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/781 [<samp>(2cd91)</samp>](https://github.com/142vip/core-x/commit/2cd91ad8)
  - 增加`getTimestamp`方法，获取指定日期的时间戳 &nbsp;-&nbsp; by **chufan** [<samp>(48e08)</samp>](https://github.com/142vip/core-x/commit/48e08f1e)
- **@142vip/vitepress**:
  - 基于`element-plus`框架的组件，对`vip`相关组件代码进行改造，支持`scss`样式 &nbsp;-&nbsp; by **chufan** [<samp>(3ddf9)</samp>](https://github.com/142vip/core-x/commit/3ddf9ab5)
  - 新增`workspace`业务封装，支持`json`文件浏览器解析 &nbsp;-&nbsp; by **chufan** [<samp>(67cca)</samp>](https://github.com/142vip/core-x/commit/67cca5e0)
  - `VipBackTop`组件支持参数控制底部、右侧距离 &nbsp;-&nbsp; by **chufan** [<samp>(beb03)</samp>](https://github.com/142vip/core-x/commit/beb03179)
  - 优化`VipProjectTable`组件UI布局，支持同步加载数据，兼容移动端左右滚动表格 &nbsp;-&nbsp; by **chufan** [<samp>(fbd25)</samp>](https://github.com/142vip/core-x/commit/fbd253e7)
- **nest-demo**:
  - 优化接口在`Swagger`上的显示 &nbsp;-&nbsp; by **chufan** [<samp>(e0c5e)</samp>](https://github.com/142vip/core-x/commit/e0c5e6cb)
  - 优化rest接口，支持最新分页格式 &nbsp;-&nbsp; by **chufan** [<samp>(44692)</samp>](https://github.com/142vip/core-x/commit/44692f69)
- **vitepress-demo**:
  - 优化组件使用，更新最佳实践案例 &nbsp;-&nbsp; by **chufan** [<samp>(b94a3)</samp>](https://github.com/142vip/core-x/commit/b94a3a0e)

### 🐛 Bug Fixes

- **@142vip/nest**:
  - 修复分页`PaginationDto`校验逻辑异常 &nbsp;-&nbsp; by **chufan** [<samp>(4a77d)</samp>](https://github.com/142vip/core-x/commit/4a77d7d5)
  - 分页功能返回结构修改，主体数据用records字段 &nbsp;-&nbsp; by **chufan** [<samp>(c3858)</samp>](https://github.com/142vip/core-x/commit/c38582a5)
- **@142vip/utils**:
  - 修复`getBase`逻辑异常 &nbsp;-&nbsp; by **chufan** [<samp>(67baf)</samp>](https://github.com/142vip/core-x/commit/67baf402)
- **@142vip/vitepress**:
  - 修复暗黑模式下，组件样式不动态变化的问题 &nbsp;-&nbsp; by **chufan** [<samp>(12555)</samp>](https://github.com/142vip/core-x/commit/12555b13)
  - 修复类型错误引用 &nbsp;-&nbsp; by **chufan** [<samp>(a596c)</samp>](https://github.com/142vip/core-x/commit/a596c2a3)

### 💅 Refactors

- **@142vip/utils**:
  - 重构`VipPackageJSON`工具类 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/774 [<samp>(1583e)</samp>](https://github.com/142vip/core-x/commit/1583e347)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(819e1)</samp>](https://github.com/142vip/core-x/commit/819e1cd8)
- **@142vip/nest**:
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(4b899)</samp>](https://github.com/142vip/core-x/commit/4b899482)
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(fdac7)</samp>](https://github.com/142vip/core-x/commit/fdac7c59)
  - Publish `v0.0.1-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(a4912)</samp>](https://github.com/142vip/core-x/commit/a4912340)
- **@142vip/nest-starter**:
  - Publish `v0.0.1-alpha.13` &nbsp;-&nbsp; by **chufan** [<samp>(662f4)</samp>](https://github.com/142vip/core-x/commit/662f44e9)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.47` &nbsp;-&nbsp; by **chufan** [<samp>(d3835)</samp>](https://github.com/142vip/core-x/commit/d3835b7e)
  - Publish `v0.0.1-alpha.48` &nbsp;-&nbsp; by **chufan** [<samp>(4bbb6)</samp>](https://github.com/142vip/core-x/commit/4bbb6117)
  - Publish `v0.0.1-alpha.49` &nbsp;-&nbsp; by **chufan** [<samp>(52fcc)</samp>](https://github.com/142vip/core-x/commit/52fcc29e)
  - Publish `v0.0.1-alpha.50` &nbsp;-&nbsp; by **chufan** [<samp>(679d5)</samp>](https://github.com/142vip/core-x/commit/679d5fe3)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.20` &nbsp;-&nbsp; by **chufan** [<samp>(fa204)</samp>](https://github.com/142vip/core-x/commit/fa204713)
- **nest-demo**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(d750b)</samp>](https://github.com/142vip/core-x/commit/d750b73b)
- **vitepress-demo**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(86411)</samp>](https://github.com/142vip/core-x/commit/86411808)

**Release New Version v0.0.1-alpha.39 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.38...v0.0.1-alpha.39)**

## v0.0.1-alpha.38 (2026-01-21)

### ✨ Features

- 基于`@nestjs`生态，优化`nest`包`ts`配置 &nbsp;-&nbsp; by **chufan** [<samp>(5afa9)</samp>](https://github.com/142vip/core-x/commit/5afa90af)
- 依赖优化，减少冗余依赖定义 &nbsp;-&nbsp; by **chufan** [<samp>(bf229)</samp>](https://github.com/142vip/core-x/commit/bf2290ff)
- 调整侧边栏导航设置 &nbsp;-&nbsp; by **chufan** [<samp>(30d0d)</samp>](https://github.com/142vip/core-x/commit/30d0d2c8)
- **@142vip/nest**:
  - 增加`TransformUriPath`转换器 &nbsp;-&nbsp; by **chufan** [<samp>(b7f40)</samp>](https://github.com/142vip/core-x/commit/b7f40868)
  - 优化ts类型和打包配置 &nbsp;-&nbsp; by **chufan** [<samp>(eb18b)</samp>](https://github.com/142vip/core-x/commit/eb18b14c)
  - 增加`swagger`装饰器，用于接口`Response`声明 &nbsp;-&nbsp; by **chufan** [<samp>(cd85b)</samp>](https://github.com/142vip/core-x/commit/cd85bee3)
  - 丰富`DTO`层校验，补充入参、出参定义模型 &nbsp;-&nbsp; by **chufan** [<samp>(79d74)</samp>](https://github.com/142vip/core-x/commit/79d749cd)
  - 增加全局过滤器，通用型异常捕获 &nbsp;-&nbsp; by **chufan** [<samp>(6c891)</samp>](https://github.com/142vip/core-x/commit/6c891d0c)
  - 增加上下文、响应拦截器，统一接口返回 &nbsp;-&nbsp; by **chufan** [<samp>(c0bfc)</samp>](https://github.com/142vip/core-x/commit/c0bfcf5d)
  - 规范常量声明，支持元数据`Key`导出 &nbsp;-&nbsp; by **chufan** [<samp>(41685)</samp>](https://github.com/142vip/core-x/commit/41685702)
  - 引入`rxjs`模块，支持全局过滤器 &nbsp;-&nbsp; by **chufan** [<samp>(4e0d2)</samp>](https://github.com/142vip/core-x/commit/4e0d2b2a)
  - 增加`ApiResponseSkip`装饰器，跳过`Swagger`和拦截器处理 &nbsp;-&nbsp; by **chufan** [<samp>(7bfb2)</samp>](https://github.com/142vip/core-x/commit/7bfb2c51)
  - 增加模块使用文档，补充实践示例 &nbsp;-&nbsp; by **chufan** [<samp>(5f2cf)</samp>](https://github.com/142vip/core-x/commit/5f2cf9a5)
- **@142vip/nest-logger**:
  - 优化ts类型和打包配置 &nbsp;-&nbsp; by **chufan** [<samp>(c3b28)</samp>](https://github.com/142vip/core-x/commit/c3b28e90)
- **@142vip/nest-redis**:
  - 优化ts类型和打包配置 &nbsp;-&nbsp; by **chufan** [<samp>(5ecaf)</samp>](https://github.com/142vip/core-x/commit/5ecafb7d)
- **@142vip/nest-starter**:
  - 优化`Swagger`管理器，支持多配置 &nbsp;-&nbsp; by **chufan** [<samp>(a27e9)</samp>](https://github.com/142vip/core-x/commit/a27e9f86)
  - 拓展启动器通用配置，`typeorm`配置支持`MySQL`、`PG`数据库 &nbsp;-&nbsp; by **chufan** [<samp>(10589)</samp>](https://github.com/142vip/core-x/commit/10589629)
  - 优化通用模块导出 &nbsp;-&nbsp; by **chufan** [<samp>(e0903)</samp>](https://github.com/142vip/core-x/commit/e0903a9c)
  - 修改编译配置，支持`NodeNext`编译 &nbsp;-&nbsp; by **chufan** [<samp>(16300)</samp>](https://github.com/142vip/core-x/commit/163002e1)
  - 优化ts类型和打包配置 &nbsp;-&nbsp; by **chufan** [<samp>(cf4ef)</samp>](https://github.com/142vip/core-x/commit/cf4ef9b8)
  - 基于`@nestjs/typeorm`模块集成数据库 &nbsp;-&nbsp; by **chufan** [<samp>(cbd93)</samp>](https://github.com/142vip/core-x/commit/cbd93341)
  - 支持Starter启动器类继承后，函数重写 &nbsp;-&nbsp; by **chufan** [<samp>(4eba2)</samp>](https://github.com/142vip/core-x/commit/4eba2052)
  - 启动配置支持`swagger.builderOptions`选项 &nbsp;-&nbsp; by **chufan** [<samp>(303bb)</samp>](https://github.com/142vip/core-x/commit/303bb7da)
  - 初始`swagger`时，基于`extraModels`增加`Vo`模型 &nbsp;-&nbsp; by **chufan** [<samp>(9d5ea)</samp>](https://github.com/142vip/core-x/commit/9d5ea28a)
  - 优化启动逻辑，增加通用拦截器、过滤器设置 &nbsp;-&nbsp; by **chufan** [<samp>(34845)</samp>](https://github.com/142vip/core-x/commit/3484574c)
  - 修改`NestTypeOrmModule`引入方式 &nbsp;-&nbsp; by **chufan** [<samp>(a0df3)</samp>](https://github.com/142vip/core-x/commit/a0df396d)
- **@142vip/nest-typeorm**:
  - 增加`DataType`枚举，修复`dataSourceName`参数异常 &nbsp;-&nbsp; by **chufan** [<samp>(90195)</samp>](https://github.com/142vip/core-x/commit/90195ae9)
  - 补充模块导出 &nbsp;-&nbsp; by **chufan** [<samp>(5ef1c)</samp>](https://github.com/142vip/core-x/commit/5ef1cf0b)
  - 修改编译配置，支持`NodeNext`编译 &nbsp;-&nbsp; by **chufan** [<samp>(97907)</samp>](https://github.com/142vip/core-x/commit/97907d50)
  - 优化ts类型和打包配置 &nbsp;-&nbsp; by **chufan** [<samp>(63af5)</samp>](https://github.com/142vip/core-x/commit/63af5708)
  - 补充`typeorm`工具类 &nbsp;-&nbsp; by **chufan** [<samp>(bd099)</samp>](https://github.com/142vip/core-x/commit/bd099e57)
  - 修复模块导出逻辑，支持全局模块 &nbsp;-&nbsp; by **chufan** [<samp>(cf56d)</samp>](https://github.com/142vip/core-x/commit/cf56d99c)
- **@142vip/utils**:
  - 引入`address`依赖，增加`getAddress`方法，支持IP地址获取 &nbsp;-&nbsp; by **chufan** [<samp>(f927a)</samp>](https://github.com/142vip/core-x/commit/f927a76a)
- **nest-demo**:
  - 补充typeorm实战实践，简化通用配置和依赖 &nbsp;-&nbsp; by **chufan** [<samp>(bdd7e)</samp>](https://github.com/142vip/core-x/commit/bdd7e7f4)
  - 简化示例代码，降低基础模块学习成本 &nbsp;-&nbsp; by **chufan** [<samp>(7779b)</samp>](https://github.com/142vip/core-x/commit/7779b50c)

### 🐛 Bug Fixes

- 修复装饰器不生效问题，`nest`包编译配置增加`useDefineForClassFields`选项 &nbsp;-&nbsp; by **chufan** [<samp>(c802e)</samp>](https://github.com/142vip/core-x/commit/c802e58e)
- **@142vip/nest**:
  - 修复`npm`包缺失`index`入口文件 &nbsp;-&nbsp; by **chufan** [<samp>(0ca78)</samp>](https://github.com/142vip/core-x/commit/0ca78863)
- **@142vip/nest-logger**:
  - 修复`npm`包缺失`index`入口文件 &nbsp;-&nbsp; by **chufan** [<samp>(f3ec5)</samp>](https://github.com/142vip/core-x/commit/f3ec5309)
- **@142vip/nest-redis**:
  - 修复`npm`包缺失`index`入口文件 &nbsp;-&nbsp; by **chufan** [<samp>(f8bd8)</samp>](https://github.com/142vip/core-x/commit/f8bd8e64)
- **@142vip/nest-starter**:
  - 修改`typeorm`配置，移除`debug`参数 &nbsp;-&nbsp; by **chufan** [<samp>(aa4cd)</samp>](https://github.com/142vip/core-x/commit/aa4cd10d)
  - 修复`npm`包缺失`index`入口文件 &nbsp;-&nbsp; by **chufan** [<samp>(99a2b)</samp>](https://github.com/142vip/core-x/commit/99a2b073)
- **@142vip/nest-typeorm**:
  - 修复`dataSourceName`参数异常,增加`@Module`装饰器 &nbsp;-&nbsp; by **chufan** [<samp>(c6da9)</samp>](https://github.com/142vip/core-x/commit/c6da91eb)
  - 修复`NestTypeOrmModule`类继承机制，优化导出逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(01407)</samp>](https://github.com/142vip/core-x/commit/01407a6b)
  - 修复`npm`包缺失`index`入口文件 &nbsp;-&nbsp; by **chufan** [<samp>(21449)</samp>](https://github.com/142vip/core-x/commit/21449c3c)
- **@142vip/redis**:
  - 修复.d.ts类型文件识别异常 &nbsp;-&nbsp; by **chufan** [<samp>(9a832)</samp>](https://github.com/142vip/core-x/commit/9a832215)
- **nest-demo**:
  - 修复`GET`接口参数异常 &nbsp;-&nbsp; by **chufan** [<samp>(bf521)</samp>](https://github.com/142vip/core-x/commit/bf5217f1)

### 💅 Refactors

- **@142vip/nest-starter**:
  - 重写启动器逻辑，优化终端日志打印 &nbsp;-&nbsp; by **chufan** [<samp>(38771)</samp>](https://github.com/142vip/core-x/commit/387710d4)

### 😏 Release Packages

- **@142vip/nest**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(76efe)</samp>](https://github.com/142vip/core-x/commit/76efe4d1)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(f959a)</samp>](https://github.com/142vip/core-x/commit/f959aed2)
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(c3880)</samp>](https://github.com/142vip/core-x/commit/c388040c)
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(5254b)</samp>](https://github.com/142vip/core-x/commit/5254be62)
- **@142vip/nest-logger**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(7152f)</samp>](https://github.com/142vip/core-x/commit/7152f86a)
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(6503d)</samp>](https://github.com/142vip/core-x/commit/6503d727)
- **@142vip/nest-redis**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(83494)</samp>](https://github.com/142vip/core-x/commit/8349446d)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(203e5)</samp>](https://github.com/142vip/core-x/commit/203e56ad)
- **@142vip/nest-starter**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(89082)</samp>](https://github.com/142vip/core-x/commit/8908206b)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(11628)</samp>](https://github.com/142vip/core-x/commit/11628378)
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(5c2bc)</samp>](https://github.com/142vip/core-x/commit/5c2bc617)
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(412c4)</samp>](https://github.com/142vip/core-x/commit/412c4832)
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(42e5b)</samp>](https://github.com/142vip/core-x/commit/42e5ba4f)
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(27990)</samp>](https://github.com/142vip/core-x/commit/279909a2)
  - Publish `v0.0.1-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(42b82)</samp>](https://github.com/142vip/core-x/commit/42b821b1)
  - Publish `v0.0.1-alpha.11` &nbsp;-&nbsp; by **chufan** [<samp>(816b2)</samp>](https://github.com/142vip/core-x/commit/816b2933)
  - Publish `v0.0.1-alpha.12` &nbsp;-&nbsp; by **chufan** [<samp>(c13b1)</samp>](https://github.com/142vip/core-x/commit/c13b17de)
- **@142vip/nest-typeorm**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(cd5f8)</samp>](https://github.com/142vip/core-x/commit/cd5f8f56)
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(e6dce)</samp>](https://github.com/142vip/core-x/commit/e6dcecba)
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(53e9b)</samp>](https://github.com/142vip/core-x/commit/53e9ba28)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(e54d7)</samp>](https://github.com/142vip/core-x/commit/e54d75d4)
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(53c5c)</samp>](https://github.com/142vip/core-x/commit/53c5cdf5)
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(7c80e)</samp>](https://github.com/142vip/core-x/commit/7c80e7d4)
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(ac5cc)</samp>](https://github.com/142vip/core-x/commit/ac5cc6c3)
- **@142vip/redis**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(ca7c9)</samp>](https://github.com/142vip/core-x/commit/ca7c97af)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.46` &nbsp;-&nbsp; by **chufan** [<samp>(6849c)</samp>](https://github.com/142vip/core-x/commit/6849cc12)
- **nest-demo**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(d9515)</samp>](https://github.com/142vip/core-x/commit/d9515673)
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(4b428)</samp>](https://github.com/142vip/core-x/commit/4b428701)
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(1fc37)</samp>](https://github.com/142vip/core-x/commit/1fc37497)

**Release New Version v0.0.1-alpha.38 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.37...v0.0.1-alpha.38)**

## v0.0.1-alpha.37 (2025-12-06)

### ✨ Features

- 文档站点侧边栏配置补充`nest`相关模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/729 [<samp>(48cf5)</samp>](https://github.com/142vip/core-x/commit/48cf52d9)
- **@142vip/changelog**:
  - 调整`vipDayjs`类使用 &nbsp;-&nbsp; by **chufan** [<samp>(c68c3)</samp>](https://github.com/142vip/core-x/commit/c68c3e0f)
- **@142vip/nest**:
  - 增加通用`dto`、`decorator`工具，支持分页等功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/731 [<samp>(2593e)</samp>](https://github.com/142vip/core-x/commit/2593eeb4)
- **@142vip/nest-redis**:
  - 增加`RedisKeyManager`类，补充缓存`key`方案 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/740 [<samp>(9c5f5)</samp>](https://github.com/142vip/core-x/commit/9c5f580c)
- **@142vip/nest-starter**:
  - 增加配置解决方案 &nbsp;-&nbsp; by **chufan** [<samp>(b454e)</samp>](https://github.com/142vip/core-x/commit/b454e95d)
  - 重写starter启动逻辑，增加全局配置注入 &nbsp;-&nbsp; by **chufan** [<samp>(8fd43)</samp>](https://github.com/142vip/core-x/commit/8fd43ce4)
- **@142vip/utils**:
  - 基于原生`ConfigType`优化`VipDayjs`类函数的类型 &nbsp;-&nbsp; by **chufan** [<samp>(c450f)</samp>](https://github.com/142vip/core-x/commit/c450f004)
  - 拓展`VipDayjs`类，增加`formatCurrentDateToStr`等方法 &nbsp;-&nbsp; by **chufan** [<samp>(1eea0)</samp>](https://github.com/142vip/core-x/commit/1eea051d)
  - 拓展`VipNanoId`类，增加`getRandomUpperCharId`等方法 &nbsp;-&nbsp; by **chufan** [<samp>(53ecf)</samp>](https://github.com/142vip/core-x/commit/53ecf0f8)
- **egg-demo**:
  - 优化启动逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(8ee1e)</samp>](https://github.com/142vip/core-x/commit/8ee1e80c)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复`formatDateToYMD`方法调用异常 &nbsp;-&nbsp; by **chufan** [<samp>(aa5a3)</samp>](https://github.com/142vip/core-x/commit/aa5a3b14)
  - 修复`vipQs`类方法引用异常 &nbsp;-&nbsp; by **chufan** [<samp>(a70f1)</samp>](https://github.com/142vip/core-x/commit/a70f1588)
- **@142vip/nest-redis**:
  - 修复引用异常，调整依赖 &nbsp;-&nbsp; by **chufan** [<samp>(e640b)</samp>](https://github.com/142vip/core-x/commit/e640b7fd)
- **@142vip/utils**:
  - 拓展`VipDayjs`类，增加`formatToISOStr`方法 &nbsp;-&nbsp; by **chufan** [<samp>(c96c1)</samp>](https://github.com/142vip/core-x/commit/c96c1b00)
  - 增加`VipDataTransform`类 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/738 [<samp>(dc147)</samp>](https://github.com/142vip/core-x/commit/dc1473ef)
  - 增加`VipQs`类和工具方法 &nbsp;-&nbsp; by **chufan** [<samp>(862b2)</samp>](https://github.com/142vip/core-x/commit/862b2faf)
- **deps**:
  - Update dependency pino to v10 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/730 [<samp>(588e9)</samp>](https://github.com/142vip/core-x/commit/588e97b9)

### 💅 Refactors

- **@142vip/utils**:
  - 优化`VipDayjs`类核心逻辑，支持`vipDayjs`对象导出 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/732 [<samp>(b7c12)</samp>](https://github.com/142vip/core-x/commit/b7c12ee8)
  - 优化`VipNanoId`类核心逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/733 [<samp>(caa65)</samp>](https://github.com/142vip/core-x/commit/caa6536b)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.23` &nbsp;-&nbsp; by **chufan** [<samp>(aa5ab)</samp>](https://github.com/142vip/core-x/commit/aa5aba96)
- **@142vip/nest**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(30c4a)</samp>](https://github.com/142vip/core-x/commit/30c4ad54)
- **@142vip/nest-redis**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(a4f91)</samp>](https://github.com/142vip/core-x/commit/a4f916ab)
- **@142vip/nest-starter**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(bfe64)</samp>](https://github.com/142vip/core-x/commit/bfe64a2d)
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(6206c)</samp>](https://github.com/142vip/core-x/commit/6206cf46)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.43` &nbsp;-&nbsp; by **chufan** [<samp>(d59f8)</samp>](https://github.com/142vip/core-x/commit/d59f8068)
  - Publish `v0.0.1-alpha.44` &nbsp;-&nbsp; by **chufan** [<samp>(e7da6)</samp>](https://github.com/142vip/core-x/commit/e7da6c08)
  - Publish `v0.0.1-alpha.45` &nbsp;-&nbsp; by **chufan** [<samp>(13838)</samp>](https://github.com/142vip/core-x/commit/13838306)
- **egg-demo**:
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(5d0d3)</samp>](https://github.com/142vip/core-x/commit/5d0d35d3)

**Release New Version v0.0.1-alpha.37 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.36...v0.0.1-alpha.37)**

## v0.0.1-alpha.36 (2025-11-04)

### ✨ Features

- 修改`Eslint`配置，关闭`ts/consistent-type-imports`规则 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/708 [<samp>(8d9d1)</samp>](https://github.com/142vip/core-x/commit/8d9d1aa0)
- 基于`VipOpenSource`组件，优化文档首页 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/713 [<samp>(dd44b)</samp>](https://github.com/142vip/core-x/commit/dd44bdee)
- **@142vip/nest**:
  - 锁定依赖版本，搭建基础Nest项目通用基座 &nbsp;-&nbsp; by **chufan** [<samp>(73f26)</samp>](https://github.com/142vip/core-x/commit/73f26536)
- **@142vip/nest-logger**:
  - 拓展Nest框架层日志，支持Adapter适配器自定义日志 &nbsp;-&nbsp; by **chufan** [<samp>(a0794)</samp>](https://github.com/142vip/core-x/commit/a07948d2)
- **@142vip/nest-redis**:
  - 新增`RedisModule`全局模块，支持注入即使用，补充单元测试、文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/719 [<samp>(9fb55)</samp>](https://github.com/142vip/core-x/commit/9fb55215)
  - 模块重命名为`NestRedisModule` &nbsp;-&nbsp; by **chufan** [<samp>(fd712)</samp>](https://github.com/142vip/core-x/commit/fd712870)
- **@142vip/nest-starter**:
  - 优化启动流程，定义通用型`Nest`框架启动器 &nbsp;-&nbsp; by **chufan** [<samp>(62950)</samp>](https://github.com/142vip/core-x/commit/629508d2)
- **@142vip/nest-typeorm**:
  - 集成`@nestjs/typeorm`等模块，简化使用 &nbsp;-&nbsp; by **chufan** [<samp>(56d37)</samp>](https://github.com/142vip/core-x/commit/56d37fd9)
- **@142vip/redis**:
  - 新增`RedisFactory`工厂类，优化`Redis`实例创建的核心逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/718 [<samp>(39d04)</samp>](https://github.com/142vip/core-x/commit/39d04710)
- **@142vip/vitepress**:
  - 新增`VipOpenSource`组件，支持自定义开源仓库 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/712 [<samp>(0eec7)</samp>](https://github.com/142vip/core-x/commit/0eec7ade)
- **@142vip/vuepress**:
  - 升级底层依赖，修复类型错误 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/707 [<samp>(47ce0)</samp>](https://github.com/142vip/core-x/commit/47ce0468)
- **nest-demo**:
  - 基于`Nest.js`框架，搭建基础项目结构 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/709 [<samp>(0cd72)</samp>](https://github.com/142vip/core-x/commit/0cd7283c)
  - 引入`@142vip/nest-redis`模块，增加`RedisModule`模块最佳实践 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/720 [<samp>(b7651)</samp>](https://github.com/142vip/core-x/commit/b7651e87)
  - 基于`@142vip/nest`周边模块，补充`Demo`最佳实践代码 &nbsp;-&nbsp; by **chufan** [<samp>(a5bc5)</samp>](https://github.com/142vip/core-x/commit/a5bc5dc3)

### 🐛 Bug Fixes

- 修复模块间依赖的版本，升级依赖 &nbsp;-&nbsp; by **chufan** [<samp>(135ba)</samp>](https://github.com/142vip/core-x/commit/135baac9)
- 修复单元测试，补充文档，优化依赖版本 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/721 [<samp>(3342e)</samp>](https://github.com/142vip/core-x/commit/3342ef0a)
- **@142vip/fairy-cli**:
  - 修复`release`命令未选中异常，终止后续流程执行 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/726 [<samp>(dd191)</samp>](https://github.com/142vip/core-x/commit/dd19179f)
- **deps**:
  - Update dependency vue to v3.5.22 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/706 [<samp>(eab10)</samp>](https://github.com/142vip/core-x/commit/eab10799)
  - Update dependency vitepress to v1.6.4 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/705 [<samp>(7c800)</samp>](https://github.com/142vip/core-x/commit/7c80076f)

### 😏 Release Packages

- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.30` &nbsp;-&nbsp; by **chufan** [<samp>(66f81)</samp>](https://github.com/142vip/core-x/commit/66f8101a)
- **@142vip/nest**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(e2411)</samp>](https://github.com/142vip/core-x/commit/e241115d)
- **@142vip/nest-logger**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(1480e)</samp>](https://github.com/142vip/core-x/commit/1480e0cb)
- **@142vip/nest-redis**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(429d8)</samp>](https://github.com/142vip/core-x/commit/429d8327)
- **@142vip/nest-starter**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(28806)</samp>](https://github.com/142vip/core-x/commit/28806575)
- **@142vip/nest-typeorm**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(b4241)</samp>](https://github.com/142vip/core-x/commit/b4241426)
- **@142vip/redis**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(efb04)</samp>](https://github.com/142vip/core-x/commit/efb0404a)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.19` &nbsp;-&nbsp; by **chufan** [<samp>(3df6a)</samp>](https://github.com/142vip/core-x/commit/3df6a073)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.18` &nbsp;-&nbsp; by **chufan** [<samp>(bb50f)</samp>](https://github.com/142vip/core-x/commit/bb50ff34)
- **nest-demo**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(b519a)</samp>](https://github.com/142vip/core-x/commit/b519a08d)

**Release New Version v0.0.1-alpha.36 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.35...v0.0.1-alpha.36)**

## v0.0.1-alpha.35 (2025-10-17)

### ✨ Features

- 修改`clean`命令，区分清除逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(ead6b)</samp>](https://github.com/142vip/core-x/commit/ead6b39)
- 移除`apis`目录 &nbsp;-&nbsp; by **chufan** [<samp>(4fbc8)</samp>](https://github.com/142vip/core-x/commit/4fbc825)
- 重新生成`apis`目录 &nbsp;-&nbsp; by **chufan** [<samp>(ddfa7)</samp>](https://github.com/142vip/core-x/commit/ddfa706)
- 补充爬虫相关代码 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/670 [<samp>(0a0ea)</samp>](https://github.com/142vip/core-x/commit/0a0ea9c)
- 优化`typedoc`命令，分类管理生成`md`、`wiki`等形式的API文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/700 [<samp>(22163)</samp>](https://github.com/142vip/core-x/commit/22163e5)
- 优化`CD`流水线，增加`typedoc:api`构建步骤 &nbsp;-&nbsp; by **chufan** [<samp>(fc6cc)</samp>](https://github.com/142vip/core-x/commit/fc6cc59)
- 优化`build:docs`相关命令，支持`apis`构建 &nbsp;-&nbsp; by **chufan** [<samp>(7b952)</samp>](https://github.com/142vip/core-x/commit/7b952ca)
- **@142vip/egg**:
  - 基于`app.type`区分`app`和`agent`加载模式 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/685 [<samp>(4cf16)</samp>](https://github.com/142vip/core-x/commit/4cf1651)
  - 重写`pluginManager`管理器核心逻辑，约束插件使用 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/688 [<samp>(13296)</samp>](https://github.com/142vip/core-x/commit/1329652)
- **@142vip/egg-grpc-server**:
  - 优化插件加载逻辑，避免多实例重复加载 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/684 [<samp>(4c177)</samp>](https://github.com/142vip/core-x/commit/4c1771e)
- **@142vip/fairy-cli**:
  - 移除`turbo`命令，清理相关逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/673 [<samp>(b8245)</samp>](https://github.com/142vip/core-x/commit/b82454e)
- **@142vip/grpc**:
  - 优化`handler`处理核心逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/681 [<samp>(faa01)</samp>](https://github.com/142vip/core-x/commit/faa01b9)
  - 新增`exampleManager`管理器，优化单元测试逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/689 [<samp>(d1157)</samp>](https://github.com/142vip/core-x/commit/d1157d1)
  - 增加`grpc-exception`异常类，优化`grpc`相关示例代码 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/692 [<samp>(cb5a2)</samp>](https://github.com/142vip/core-x/commit/cb5a2f5)
  - `ProtoLoader`重命名为`GrpcProtoLoader`，优化代码 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/695 [<samp>(77437)</samp>](https://github.com/142vip/core-x/commit/77437ce)
- **@142vip/utils**:
  - 移除`detect-indent`和`detect-newline`依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/679 [<samp>(4454c)</samp>](https://github.com/142vip/core-x/commit/4454c2a)
- **@142vip/vitepress**:
  - 统一管理`typedoc`的插件依赖，固定版本 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/702 [<samp>(679cd)</samp>](https://github.com/142vip/core-x/commit/679cd24)
- **egg-demo**:
  - 跑通客户端调用逻辑，补充单元测试 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/680 [<samp>(860a8)</samp>](https://github.com/142vip/core-x/commit/860a87c)
  - 补充单元测试用例，优化插件加载模式，避免端口冲突 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/691 [<samp>(78b2e)</samp>](https://github.com/142vip/core-x/commit/78b2e0b)
  - 基于`sendGrpcRequest`工具函数，简化客户端单元测试逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/694 [<samp>(8b728)</samp>](https://github.com/142vip/core-x/commit/8b72820)

### 🐛 Bug Fixes

- **@142vip/egg-grpc-server**:
  - 修复`rpc`服务端方法绑定异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/690 [<samp>(2a317)</samp>](https://github.com/142vip/core-x/commit/2a3178e)
- **@142vip/grpc**:
  - 修复`MethodDefinition`等类型引入错误，导致API文档编译异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/698 [<samp>(71a96)</samp>](https://github.com/142vip/core-x/commit/71a960c)

### 📖 Documentation

- **@142vip/egg-grpc-client**:
  - 补充使用说明文档，增加调用示例 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/693 [<samp>(c3c43)</samp>](https://github.com/142vip/core-x/commit/c3c43c9)

### 😏 Release Packages

- **@142vip/egg**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(132fd)</samp>](https://github.com/142vip/core-x/commit/132fdef)
- **@142vip/egg-grpc-client**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(10a9b)</samp>](https://github.com/142vip/core-x/commit/10a9b6a)
- **@142vip/egg-grpc-server**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(5cc12)</samp>](https://github.com/142vip/core-x/commit/5cc12ca)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.29` &nbsp;-&nbsp; by **chufan** [<samp>(cda37)</samp>](https://github.com/142vip/core-x/commit/cda37ec)
- **@142vip/grpc**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(ed115)</samp>](https://github.com/142vip/core-x/commit/ed115ce)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.42` &nbsp;-&nbsp; by **chufan** [<samp>(9a838)</samp>](https://github.com/142vip/core-x/commit/9a83834)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.18` &nbsp;-&nbsp; by **chufan** [<samp>(58a4a)</samp>](https://github.com/142vip/core-x/commit/58a4aca)
- **egg-demo**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(38133)</samp>](https://github.com/142vip/core-x/commit/381336d)

**Release New Version v0.0.1-alpha.35 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.34...v0.0.1-alpha.35)**

## v0.0.1-alpha.34 (2025-09-28)

### ✨ Features

- 优化更新记录页面的左侧导航配置，对demo、npm包进行区分 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/668 [<samp>(7cfc2)</samp>](https://github.com/142vip/core-x/commit/7cfc2fa)
- **@142vip/changelog**:
  - 使用`vipConfig`方法，同步读取配置， &nbsp;-&nbsp; by **chufan** [<samp>(5228b)</samp>](https://github.com/142vip/core-x/commit/5228b58)
- **@142vip/data-source**:
  - 支持MongoDB数据源，补充单元测试和文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/633 [<samp>(cc834)</samp>](https://github.com/142vip/core-x/commit/cc8345a)
- **@142vip/egg**:
  - 集成`mysql2`模块，封装`VipMySQLPool`连接池父类 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/664 [<samp>(78ebe)</samp>](https://github.com/142vip/core-x/commit/78ebe62)
- **@142vip/egg-grpc-client**:
  - 基于`@142vip/grpc`模块实例化客户端 &nbsp;-&nbsp; by **chufan** [<samp>(93284)</samp>](https://github.com/142vip/core-x/commit/9328469)
  - 简化插件的默认配置 &nbsp;-&nbsp; by **chufan** [<samp>(3ae42)</samp>](https://github.com/142vip/core-x/commit/3ae422c)
- **@142vip/egg-grpc-server**:
  - 优化实例初始化逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(3d227)</samp>](https://github.com/142vip/core-x/commit/3d227e5)
  - 支持`egg`框架下，`grpc`服务端的注册、使用 &nbsp;-&nbsp; by **chufan** [<samp>(492e6)</samp>](https://github.com/142vip/core-x/commit/492e65b)
  - 优化服务端加载逻辑，rpc实现类挂载到`ctx`对象上 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/659 [<samp>(ab3f1)</samp>](https://github.com/142vip/core-x/commit/ab3f166)
  - 限制插件只在`agent.js`上挂载`grpcServer`对象 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/663 [<samp>(a995b)</samp>](https://github.com/142vip/core-x/commit/a995b3a)
- **@142vip/egg-mysql**:
  - 基于`VipMyQLPool`类初始化插件，建立连接 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/665 [<samp>(e3266)</samp>](https://github.com/142vip/core-x/commit/e3266f1)
- **@142vip/fairy-cli**:
  - 补充单元测试配置和用例 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/662 [<samp>(9210b)</samp>](https://github.com/142vip/core-x/commit/9210b04)
  - 使用`vipAxios`替换`node-fetch`模块发送http请求 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/661 [<samp>(5c0c8)</samp>](https://github.com/142vip/core-x/commit/5c0c810)
- **@142vip/grpc**:
  - 客户端、服务端声明式注册，支持健康检查等功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/642 [<samp>(6330c)</samp>](https://github.com/142vip/core-x/commit/6330cca)
  - 重写`grpc`核心逻辑，支持`example`演示代码 &nbsp;-&nbsp; by **chufan** [<samp>(d6e29)</samp>](https://github.com/142vip/core-x/commit/d6e29c7)
- **@142vip/release-version**:
  - 使用`vipConfig`读取配置，补充单元测试 &nbsp;-&nbsp; by **chufan** [<samp>(e1f80)</samp>](https://github.com/142vip/core-x/commit/e1f8041)
- **@142vip/utils**:
  - 增加`lodash`的`upperFirst`方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/643 [<samp>(6bdb1)</samp>](https://github.com/142vip/core-x/commit/6bdb135)
  - 重写方法，彻底解决`detect-*`等模块在cjs语法下的冲突 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/644 [<samp>(65f6d)</samp>](https://github.com/142vip/core-x/commit/65f6d8a)
  - 重写VipConfig，使用`cosmiconfig`替换`c12`模块，处理`c12`模块对cjs语法不支持 &nbsp;-&nbsp; by **chufan** [<samp>(dcece)</samp>](https://github.com/142vip/core-x/commit/dcece3d)
  - 拓展`vipLodash`工具导出，支持更多方法，简化配置合并逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/648 [<samp>(4ac27)</samp>](https://github.com/142vip/core-x/commit/4ac27f9)
  - 新增`vipDetect`，支持`port`、`newline`等检测 &nbsp;-&nbsp; by **chufan** [<samp>(b81ed)</samp>](https://github.com/142vip/core-x/commit/b81ed15)
- **@142vip/vitepress**:
  - 默认支持`ignoreDeadLinks`配置不校验本地死链接 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/639 [<samp>(b4e53)</samp>](https://github.com/142vip/core-x/commit/b4e53fd)
- **egg-demo**:
  - 增加插件单元测试，验证grpc等插件的多实例挂载 &nbsp;-&nbsp; by **chufan** [<samp>(4a39d)</samp>](https://github.com/142vip/core-x/commit/4a39d92)
  - 调整grpc实现类目录结构，基于Service父类实现 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/658 [<samp>(67498)</samp>](https://github.com/142vip/core-x/commit/6749870)
  - 补充grpc相关测试代码 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/666 [<samp>(17eb2)</samp>](https://github.com/142vip/core-x/commit/17eb21b)
  - 补充@142vip/egg-mysql插件单元测试 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/667 [<samp>(138a9)</samp>](https://github.com/142vip/core-x/commit/138a9a5)

### 🐛 Bug Fixes

- 修复本地文档死链接导致构建异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/638 [<samp>(93d28)</samp>](https://github.com/142vip/core-x/commit/93d28be)
- **@142vip/egg**:
  - 修复插件多实例加载时，注册逻辑异常 &nbsp;-&nbsp; by **chufan** [<samp>(2e2c5)</samp>](https://github.com/142vip/core-x/commit/2e2c564)
  - 增加grpc上层父类，补充example演示函数 &nbsp;-&nbsp; by **chufan** [<samp>(55f09)</samp>](https://github.com/142vip/core-x/commit/55f095b)
- **@142vip/eslint-config**:
  - Update dependency eslint to v9.35.0 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/647 [<samp>(6c874)</samp>](https://github.com/142vip/core-x/commit/6c87411)
- **@142vip/grpc**:
  - 修复单元测试异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/655 [<samp>(22694)</samp>](https://github.com/142vip/core-x/commit/22694a8)
- **deps**:
  - Update dependency turbo to v2.5.6 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/628 [<samp>(9fb0e)</samp>](https://github.com/142vip/core-x/commit/9fb0ea2)
  - Update dependency egg to v3.31.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/627 [<samp>(b5024)</samp>](https://github.com/142vip/core-x/commit/b502468)
  - Update dependency axios to v1.11.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/626 [<samp>(ea814)</samp>](https://github.com/142vip/core-x/commit/ea8145d)
  - Update dependency @antfu/eslint-config to v4.19.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/640 [<samp>(e98d7)</samp>](https://github.com/142vip/core-x/commit/e98d724)
  - Update dependency @grpc/proto-loader to v0.8.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/650 [<samp>(1f812)</samp>](https://github.com/142vip/core-x/commit/1f81252)
  - Update dependency docx to v9.5.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/651 [<samp>(d9e91)</samp>](https://github.com/142vip/core-x/commit/d9e91d7)
  - Update dependency @grpc/grpc-js to v1.14.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/649 [<samp>(d61fa)</samp>](https://github.com/142vip/core-x/commit/d61fad4)
- **egg-demo**:
  - 修复单元测试异常，简化`egg-axios`插件加载流程 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/654 [<samp>(df91a)</samp>](https://github.com/142vip/core-x/commit/df91aca)

### 📖 Documentation

- Update README &nbsp;-&nbsp; by **chufan** [<samp>(f55aa)</samp>](https://github.com/142vip/core-x/commit/f55aa6f)
- **@142vip/egg-grpc-server**:
  - 更新文档，补充插件最佳实践代码 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/660 [<samp>(5f35f)</samp>](https://github.com/142vip/core-x/commit/5f35f20)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.22` &nbsp;-&nbsp; by **chufan** [<samp>(75334)</samp>](https://github.com/142vip/core-x/commit/7533447)
- **@142vip/data-source**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(714a6)</samp>](https://github.com/142vip/core-x/commit/714a633)
- **@142vip/egg**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(cdef6)</samp>](https://github.com/142vip/core-x/commit/cdef66f)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(cddcc)</samp>](https://github.com/142vip/core-x/commit/cddccf8)
- **@142vip/egg-grpc-client**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(569ff)</samp>](https://github.com/142vip/core-x/commit/569ff66)
- **@142vip/egg-grpc-server**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(bdd04)</samp>](https://github.com/142vip/core-x/commit/bdd04fa)
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(155c5)</samp>](https://github.com/142vip/core-x/commit/155c5cf)
- **@142vip/egg-mysql**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(6eee6)</samp>](https://github.com/142vip/core-x/commit/6eee6e1)
- **@142vip/eslint-config**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(8feab)</samp>](https://github.com/142vip/core-x/commit/8feab70)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.28` &nbsp;-&nbsp; by **chufan** [<samp>(c3823)</samp>](https://github.com/142vip/core-x/commit/c38237b)
- **@142vip/grpc**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(dc778)</samp>](https://github.com/142vip/core-x/commit/dc778ec)
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(17fc5)</samp>](https://github.com/142vip/core-x/commit/17fc5ac)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.15` &nbsp;-&nbsp; by **chufan** [<samp>(28a82)</samp>](https://github.com/142vip/core-x/commit/28a8232)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.40` &nbsp;-&nbsp; by **chufan** [<samp>(8de32)</samp>](https://github.com/142vip/core-x/commit/8de3231)
  - Publish `v0.0.1-alpha.41` &nbsp;-&nbsp; by **chufan** [<samp>(35b1f)</samp>](https://github.com/142vip/core-x/commit/35b1f11)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.17` &nbsp;-&nbsp; by **chufan** [<samp>(d3a90)</samp>](https://github.com/142vip/core-x/commit/d3a90a9)
- **egg-demo**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(78e23)</samp>](https://github.com/142vip/core-x/commit/78e23fd)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(6fd3b)</samp>](https://github.com/142vip/core-x/commit/6fd3ba0)

**Release New Version v0.0.1-alpha.34 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.33...v0.0.1-alpha.34)**

## v0.0.1-alpha.33 (2025-09-10)

### ✨ Features

- 优化jest配置和命令 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/605 [<samp>(3e364)</samp>](https://github.com/142vip/core-x/commit/3e364ca)
- 增加`languageOptions`配置，`ESLint`规则支持`Jest`模块的全局变量 &nbsp;-&nbsp; by **chufan** [<samp>(83e75)</samp>](https://github.com/142vip/core-x/commit/83e75f2)
- 优化ts和jest配置，支持扫描test目录下的单元测试 &nbsp;-&nbsp; by **chufan** [<samp>(22f73)</samp>](https://github.com/142vip/core-x/commit/22f73d1)
- 补充`clean`命令，支持`deps`依赖清理 &nbsp;-&nbsp; by **chufan** [<samp>(c3954)</samp>](https://github.com/142vip/core-x/commit/c3954f8)
- **@142vip/axios**:
  - 优化`vipAxios`实例核心逻辑，补充单元测试 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/607 [<samp>(a1979)</samp>](https://github.com/142vip/core-x/commit/a197933)
- **@142vip/changelog**:
  - 修复`CONFIG_DEFAULT_HEADER`默认值对应的跳转链接 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/586 [<samp>(b769b)</samp>](https://github.com/142vip/core-x/commit/b769bf2)
- **@142vip/data-source**:
  - 模块初始化 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/598 [<samp>(839e7)</samp>](https://github.com/142vip/core-x/commit/839e7af)
  - 补充单元测试和文档，优化数据源核心代码 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/604 [<samp>(2f70c)</samp>](https://github.com/142vip/core-x/commit/2f70c82)
  - 更新数据源对应的单元测试文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/616 [<samp>(fb633)</samp>](https://github.com/142vip/core-x/commit/fb633da)
- **@142vip/egg**:
  - 新增`mergeConfig`函数，合并配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/609 [<samp>(1eb13)</samp>](https://github.com/142vip/core-x/commit/1eb135d)
  - 拓展`plugin`插件，优化插件启动实例挂载逻辑，支持多实例 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/614 [<samp>(280ae)</samp>](https://github.com/142vip/core-x/commit/280aeaa)
  - 优化接口类型，补充插件注册等功能的使用文档 &nbsp;-&nbsp; by **chufan** [<samp>(fcef3)</samp>](https://github.com/142vip/core-x/commit/fcef385)
- **@142vip/egg-axios**:
  - 集成`@142vip/axios`模块，基于`vipAxios`实例请求 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/610 [<samp>(9db5f)</samp>](https://github.com/142vip/core-x/commit/9db5f74)
  - 增加jest配置，补充test单元测试命令 &nbsp;-&nbsp; by **chufan** [<samp>(1e71a)</samp>](https://github.com/142vip/core-x/commit/1e71a61)
  - 简化插件默认配置，补充插件使用文档 &nbsp;-&nbsp; by **chufan** [<samp>(cce41)</samp>](https://github.com/142vip/core-x/commit/cce4156)
- **@142vip/release-version**:
  - 移除`detect-indent`和`detect-newline`依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/606 [<samp>(d6460)</samp>](https://github.com/142vip/core-x/commit/d646058)
  - 优化工具核心逻辑，补充文档和单元测试 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/621 [<samp>(2c7c5)</samp>](https://github.com/142vip/core-x/commit/2c7c57b)
- **@142vip/utils**:
  - 优化`exec`标准执行器，新增`getProcess`等方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/585 [<samp>(08099)</samp>](https://github.com/142vip/core-x/commit/0809904)
  - 基于`createRequire`解决`c12`等模块在cjs语法下的冲突 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/613 [<samp>(5f92f)</samp>](https://github.com/142vip/core-x/commit/5f92f4c)
  - 基于`createRequire`解决`c12`等模块在cjs语法下的冲突 " &nbsp;-&nbsp; by **chufan** in https://github.com/142vip/core-x/issues/613 [<samp>(7a238)</samp>](https://github.com/142vip/core-x/commit/7a2385d)
- **egg-demo**:
  - 集成egg-axios插件，提供单实例、多实例、配置对应的单元测试 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/615 [<samp>(27e4f)</samp>](https://github.com/142vip/core-x/commit/27e4ff0)
  - 补充文档，简化deps依赖，支持jest单元测试 &nbsp;-&nbsp; by **chufan** [<samp>(f3855)</samp>](https://github.com/142vip/core-x/commit/f3855bd)

### 🐛 Bug Fixes

- 基于jest模块，修复各模块单元测试全局参数导入报错 &nbsp;-&nbsp; by **chufan** [<samp>(6fe45)</samp>](https://github.com/142vip/core-x/commit/6fe45a7)
- **@142vip/axios**:
  - 修复文档显示异常，补充类型 &nbsp;-&nbsp; by **chufan** [<samp>(71a10)</samp>](https://github.com/142vip/core-x/commit/71a102e)
  - 移除对`@142vip/utils`的依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/608 [<samp>(7109b)</samp>](https://github.com/142vip/core-x/commit/7109bb7)
- **@142vip/utils**:
  - 修复`getProcessArgvByIndex`获取参数异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/575 [<samp>(f8956)</samp>](https://github.com/142vip/core-x/commit/f89565d)
  - `buildImage`构建镜像增加`platform`参数 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/576 [<samp>(f1eb4)</samp>](https://github.com/142vip/core-x/commit/f1eb445)
- **deps**:
  - Update dependency semver to v7.7.2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/597 [<samp>(ef76e)</samp>](https://github.com/142vip/core-x/commit/ef76ecd)
  - 锁定jest等依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(29118)</samp>](https://github.com/142vip/core-x/commit/29118c9)

### 📖 Documentation

- 更新多个模块的`CHANGELOG`文档，格式统一 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/587 [<samp>(34248)</samp>](https://github.com/142vip/core-x/commit/3424889)
- 更新文档的`Copyright`部分 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/603 [<samp>(deefe)</samp>](https://github.com/142vip/core-x/commit/deefe18)
- 更新各模块的README文档 &nbsp;-&nbsp; by **chufan** [<samp>(d4a5b)</samp>](https://github.com/142vip/core-x/commit/d4a5b2e)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(0f0f4)</samp>](https://github.com/142vip/core-x/commit/0f0f439)
- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.21` &nbsp;-&nbsp; by **chufan** [<samp>(f2ee2)</samp>](https://github.com/142vip/core-x/commit/f2ee275)
- **@142vip/data-source**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(e752f)</samp>](https://github.com/142vip/core-x/commit/e752f9f)
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(37b63)</samp>](https://github.com/142vip/core-x/commit/37b6334)
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(3a7d7)</samp>](https://github.com/142vip/core-x/commit/3a7d75f)
- **@142vip/egg**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(584bc)</samp>](https://github.com/142vip/core-x/commit/584bce6)
- **@142vip/egg-axios**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(44113)</samp>](https://github.com/142vip/core-x/commit/441131c)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.27` &nbsp;-&nbsp; by **chufan** [<samp>(f3b17)</samp>](https://github.com/142vip/core-x/commit/f3b17d2)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.14` &nbsp;-&nbsp; by **chufan** [<samp>(778e0)</samp>](https://github.com/142vip/core-x/commit/778e0b3)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.38` &nbsp;-&nbsp; by **chufan** [<samp>(22621)</samp>](https://github.com/142vip/core-x/commit/22621e9)
  - Publish `v0.0.1-alpha.39` &nbsp;-&nbsp; by **chufan** [<samp>(ef582)</samp>](https://github.com/142vip/core-x/commit/ef5829b)
- **egg-demo**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(cacf0)</samp>](https://github.com/142vip/core-x/commit/cacf05e)

**Release New Version v0.0.1-alpha.33 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.32...v0.0.1-alpha.33)**

## v0.0.1-alpha.32 (2025-05-19)

### ✨ Features

- 优化站点配置，升级核心脚本逻辑，支持`@142vip/open-source`模块 &nbsp;-&nbsp; by **chufan** [<samp>(a11dd)</samp>](https://github.com/142vip/core-x/commit/a11dda7)
- **@142vip/changelog**:
  - 增加`CONFIG_DEFAULT_HEADER`等默认值常量 &nbsp;-&nbsp; by **chufan** [<samp>(f11c3)</samp>](https://github.com/142vip/core-x/commit/f11c32b)
- **@142vip/fairy-cli**:
  - 移除`DEFAULT_RELEASE_ROOT_NAME`的使用 &nbsp;-&nbsp; by **chufan** [<samp>(02738)</samp>](https://github.com/142vip/core-x/commit/0273849)
  - 子模块小版本迭代时，按版本分割提交记录，绿色&灰色区分打印 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/552 [<samp>(c855e)</samp>](https://github.com/142vip/core-x/commit/c855eac)
  - 优化`sync`命令日志输出 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/559 [<samp>(36149)</samp>](https://github.com/142vip/core-x/commit/36149de)
- **@142vip/open-source**:
  - 模块初始化，拆分出常量、枚举 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/550 [<samp>(a148b)</samp>](https://github.com/142vip/core-x/commit/a148ba4)
  - 优化`OPEN_SOURCE_ADDRESS`常量导出 &nbsp;-&nbsp; by **chufan** [<samp>(e43a3)</samp>](https://github.com/142vip/core-x/commit/e43a320)
  - 拓展`OPEN_SOURCE_ADDRESS`枚举，支持站点地址变量 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/557 [<samp>(4a237)</samp>](https://github.com/142vip/core-x/commit/4a2378e)
- **@142vip/utils**:
  - 增加`VipDocSite`类，支持博客站点 &nbsp;-&nbsp; by **chufan** [<samp>(4c914)</samp>](https://github.com/142vip/core-x/commit/4c91457)
  - 优化`http`枚举，简化`constants`常量导出 &nbsp;-&nbsp; by **chufan** [<samp>(4ba27)</samp>](https://github.com/142vip/core-x/commit/4ba2779)
- **@142vip/vuepress**:
  - 废弃`i18n`方案，优化主题和插件配置项 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/547 [<samp>(4436c)</samp>](https://github.com/142vip/core-x/commit/4436c8d)
  - 修改模块主体结构，简化`config`、`theme`的导出逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/556 [<samp>(d7d01)</samp>](https://github.com/142vip/core-x/commit/d7d0116)
  - 移除constants导出，删除`footer`、`copyright`的模式函数形式 &nbsp;-&nbsp; by **chufan** [<samp>(fb0a5)</samp>](https://github.com/142vip/core-x/commit/fb0a5eb)
  - 移除headers导出，强化点配置自定义 &nbsp;-&nbsp; by **chufan** [<samp>(5412c)</samp>](https://github.com/142vip/core-x/commit/5412c22)
  - 增加`VUEPRESS_DEFAULT_DOCS_DIR`，定义默认文档目录 &nbsp;-&nbsp; by **chufan** [<samp>(7a1e2)</samp>](https://github.com/142vip/core-x/commit/7a1e225)
  - 支持`repoLabel`配置默认为`Github` &nbsp;-&nbsp; by **chufan** [<samp>(3a7c0)</samp>](https://github.com/142vip/core-x/commit/3a7c0d3)
- **vitepress-demo**:
  - 使用`vipDocSite.getBase`，优化配置 &nbsp;-&nbsp; by **chufan** [<samp>(14da3)</samp>](https://github.com/142vip/core-x/commit/14da378)
- **vuepress-demo**:
  - 优化导航栏，修改配置，支持`changelog`组件展示 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/548 [<samp>(1bef0)</samp>](https://github.com/142vip/core-x/commit/1bef0db)
  - 支持`@142vip/open-source`模块，优化配置 &nbsp;-&nbsp; by **chufan** [<samp>(b6aae)</samp>](https://github.com/142vip/core-x/commit/b6aae30)
  - 优化站点配置，基于`@142vip/open-source`模块简化`footer`、`copyright`等配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/558 [<samp>(e9478)</samp>](https://github.com/142vip/core-x/commit/e947826)

### 🐛 Bug Fixes

- 修复`vitepress`站点导航栏异常，简化配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/551 [<samp>(32d15)</samp>](https://github.com/142vip/core-x/commit/32d15b7)

### 📖 Documentation

- 更新文档，补充`@142vip/open-source`模块相关说明 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/553 [<samp>(0eebc)</samp>](https://github.com/142vip/core-x/commit/0eebcab)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.20` &nbsp;-&nbsp; by **chufan** [<samp>(e0f42)</samp>](https://github.com/142vip/core-x/commit/e0f42a2)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.26` &nbsp;-&nbsp; by **chufan** [<samp>(152af)</samp>](https://github.com/142vip/core-x/commit/152afd5)
- **@142vip/open-source**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(c6624)</samp>](https://github.com/142vip/core-x/commit/c66242f)
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(afc02)</samp>](https://github.com/142vip/core-x/commit/afc0202)
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(ea5ef)</samp>](https://github.com/142vip/core-x/commit/ea5ef5f)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.37` &nbsp;-&nbsp; by **chufan** [<samp>(68220)</samp>](https://github.com/142vip/core-x/commit/682201d)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.16` &nbsp;-&nbsp; by **chufan** [<samp>(2a492)</samp>](https://github.com/142vip/core-x/commit/2a492af)
  - Publish `v0.0.1-alpha.17` &nbsp;-&nbsp; by **chufan** [<samp>(294f1)</samp>](https://github.com/142vip/core-x/commit/294f129)
- **vitepress-demo**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(d7c32)</samp>](https://github.com/142vip/core-x/commit/d7c32a4)
- **vuepress-demo**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(1bf86)</samp>](https://github.com/142vip/core-x/commit/1bf864a)

**Release New Version v0.0.1-alpha.32 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.31...v0.0.1-alpha.32)**

## v0.0.1-alpha.31 (2025-05-13)

### ✨ Features

- **@142vip/fairy-cli**:
  - `sync`命令同步`142vip`组织包，支持`sync:pkg`脚本快速调用 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/541 [<samp>(b6d34)</samp>](https://github.com/142vip/core-x/commit/b6d345b)
  - 优化子命令核心逻辑，补充枚举、文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/546 [<samp>(9d007)</samp>](https://github.com/142vip/core-x/commit/9d00738)
- **@142vip/utils**:
  - 拓展`mkdirSync`等方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/542 [<samp>(49db7)</samp>](https://github.com/142vip/core-x/commit/49db785)
- **@142vip/vitepress**:
  - 支持导航栏、侧边栏配置函数式定义 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/537 [<samp>(573b1)</samp>](https://github.com/142vip/core-x/commit/573b1c4)
- **@142vip/vuepress**:
  - 升级模块依赖，重构配置、主题等功能 &nbsp;-&nbsp; by **chufan** [<samp>(2f6a6)</samp>](https://github.com/142vip/core-x/commit/2f6a6ae)
  - 依赖升级，支持新版`vuepress-theme-hope` &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/543 [<samp>(48226)</samp>](https://github.com/142vip/core-x/commit/48226d4)
  - 增加`@vuepress/plugin-watermark`依赖，站点支持水印功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/544 [<samp>(a0b14)</samp>](https://github.com/142vip/core-x/commit/a0b148e)
- **vitepress-demo**:
  - 优化导航栏、侧边栏配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/538 [<samp>(6ecdb)</samp>](https://github.com/142vip/core-x/commit/6ecdb51)
- **vuepress-demo**:
  - 优化依赖，简化demo站点配置 &nbsp;-&nbsp; by **chufan** [<samp>(05bcb)</samp>](https://github.com/142vip/core-x/commit/05bcbce)

### 🐛 Bug Fixes

- 修复`favicon.ico`图标路径异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/540 [<samp>(f2543)</samp>](https://github.com/142vip/core-x/commit/f25436d)
- **@142vip/vuepress**:
  - 修复importCode配置替换文件路径异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/539 [<samp>(1f071)</samp>](https://github.com/142vip/core-x/commit/1f071d2)

### 💅 Refactors

- **@142vip/commit-linter**:
  - 结构调整，优化核心逻辑和文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/545 [<samp>(928b7)</samp>](https://github.com/142vip/core-x/commit/928b764)

### 📖 Documentation

- Update &nbsp;-&nbsp; by **chufan** [<samp>(eea31)</samp>](https://github.com/142vip/core-x/commit/eea319e)
- Update &nbsp;-&nbsp; by **chufan** [<samp>(dc276)</samp>](https://github.com/142vip/core-x/commit/dc27696)

### 😏 Release Packages

- **@142vip/commit-linter**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(63a68)</samp>](https://github.com/142vip/core-x/commit/63a68c5)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.25` &nbsp;-&nbsp; by **chufan** [<samp>(39b8e)</samp>](https://github.com/142vip/core-x/commit/39b8e29)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.16` &nbsp;-&nbsp; by **chufan** [<samp>(f19d7)</samp>](https://github.com/142vip/core-x/commit/f19d7b8)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.13` &nbsp;-&nbsp; by **chufan** [<samp>(b94e6)</samp>](https://github.com/142vip/core-x/commit/b94e65b)
  - Publish `v0.0.1-alpha.14` &nbsp;-&nbsp; by **chufan** [<samp>(5b23a)</samp>](https://github.com/142vip/core-x/commit/5b23a5e)
  - Publish `v0.0.1-alpha.15` &nbsp;-&nbsp; by **chufan** [<samp>(3b15a)</samp>](https://github.com/142vip/core-x/commit/3b15aac)
- **vitepress-demo**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(4c858)</samp>](https://github.com/142vip/core-x/commit/4c8588f)
- **vuepress-demo**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(8bb12)</samp>](https://github.com/142vip/core-x/commit/8bb12ad)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(bdff6)</samp>](https://github.com/142vip/core-x/commit/bdff676)

**Release New Version v0.0.1-alpha.31 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.30...v0.0.1-alpha.31)**

## v0.0.1-alpha.30 (2025-05-06)

### ✨ Features

- 优化`scripts`脚本主体结构和逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/506 [<samp>(8ad41)</samp>](https://github.com/142vip/core-x/commit/8ad41ee)
- 引入`typedoc`模块，支持全站模块的API文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/510 [<samp>(67692)</samp>](https://github.com/142vip/core-x/commit/67692ef)
- 基于`@142vip/vitepress`模块优化站点配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/515 [<samp>(9b04d)</samp>](https://github.com/142vip/core-x/commit/9b04ddb)
- 增加Github pull插件，解决fork仓库同步问题 &nbsp;-&nbsp; by **chufan** [<samp>(6ef88)</samp>](https://github.com/142vip/core-x/commit/6ef887d)
- 站点增加logo图标等配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/516 [<samp>(4ed19)</samp>](https://github.com/142vip/core-x/commit/4ed1965)
- 修改`vitepress`站点配置，更新文档介绍 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/526 [<samp>(1107b)</samp>](https://github.com/142vip/core-x/commit/1107bf1)
- **@142vip/fairy-cli**:
  - 移除`js-yaml`等依赖模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/498 [<samp>(76de7)</samp>](https://github.com/142vip/core-x/commit/76de7b0)
- **@142vip/utils**:
  - 优化`VipCommander`的命令、参数初始化逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(27b37)</samp>](https://github.com/142vip/core-x/commit/27b376e)
  - 拓展`OPEN_SOURCE_ADDRESS`枚举 &nbsp;-&nbsp; by **chufan** [<samp>(7e0ca)</samp>](https://github.com/142vip/core-x/commit/7e0ca0d)
- **@142vip/vitepress**:
  - 增加`typedoc`配置定义函数，优化配置和依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/512 [<samp>(9acb9)</samp>](https://github.com/142vip/core-x/commit/9acb9a0)
  - 增加`defineVipVitepressConfig`配置函数，优化类型支持 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/513 [<samp>(3662c)</samp>](https://github.com/142vip/core-x/commit/3662c1c)
  - 优化表格组件，拓展类型支持 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/514 [<samp>(50ef3)</samp>](https://github.com/142vip/core-x/commit/50ef3bc)
  - `themeConfig`入口优化，变量重命名 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/518 [<samp>(7f414)</samp>](https://github.com/142vip/core-x/commit/7f414e6)

### 🐛 Bug Fixes

- 修复站点ico预览异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/517 [<samp>(448cc)</samp>](https://github.com/142vip/core-x/commit/448ccfe)
- 增加`publicDir`配置重写目录，支持`vite`编译静态资源目录 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/524 [<samp>(06df8)</samp>](https://github.com/142vip/core-x/commit/06df8d8)
- **@142vip/utils**:
  - 补充`@types`等模块类型依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/522 [<samp>(bfe99)</samp>](https://github.com/142vip/core-x/commit/bfe99ac)
- **@142vip/vitepress**:
  - 修复`vue-sfc-transformer`导致的编译告警 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/519 [<samp>(c87d9)</samp>](https://github.com/142vip/core-x/commit/c87d9ab)
- **vitepress-demo**:
  - 修复`build`令编译异常 &nbsp;-&nbsp; by **chufan** [<samp>(1dc5d)</samp>](https://github.com/142vip/core-x/commit/1dc5d95)

### 💅 Refactors

- **@142vip/changelog**:
  - 重构`changelog`核心逻辑，调整模块的整体结构，支持更多API方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/501 [<samp>(fe60c)</samp>](https://github.com/142vip/core-x/commit/fe60c59)

### 📖 Documentation

- 修改`typedoc`配置，更新`API`文档 &nbsp;-&nbsp; by **chufan** [<samp>(366c0)</samp>](https://github.com/142vip/core-x/commit/366c037)
- Api update &nbsp;-&nbsp; by **chufan** [<samp>(bf5c5)</samp>](https://github.com/142vip/core-x/commit/bf5c5fd)
- 基础的md文档更新 &nbsp;-&nbsp; by **chufan** [<samp>(f7d3d)</samp>](https://github.com/142vip/core-x/commit/f7d3d49)
- Update typedoc api &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/528 [<samp>(77ef9)</samp>](https://github.com/142vip/core-x/commit/77ef908)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.19` &nbsp;-&nbsp; by **chufan** [<samp>(1f63c)</samp>](https://github.com/142vip/core-x/commit/1f63caa)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.24` &nbsp;-&nbsp; by **chufan** [<samp>(aa277)</samp>](https://github.com/142vip/core-x/commit/aa277c4)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.36` &nbsp;-&nbsp; by **chufan** [<samp>(afc5f)</samp>](https://github.com/142vip/core-x/commit/afc5f91)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.15` &nbsp;-&nbsp; by **chufan** [<samp>(40280)</samp>](https://github.com/142vip/core-x/commit/4028097)
- **vitepress-demo**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(a868d)</samp>](https://github.com/142vip/core-x/commit/a868d72)

**Release New Version v0.0.1-alpha.30 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.29...v0.0.1-alpha.30)**

## v0.0.1-alpha.29 (2025-04-23)

### ✨ Features

- 优化`build`命令的搜索交互框输入 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/483 [<samp>(4b5d2)</samp>](https://github.com/142vip/core-x/commit/4b5d2a9)
- 站点增加`egg-demo`、`nest-demo`演示入口 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/490 [<samp>(8ed85)</samp>](https://github.com/142vip/core-x/commit/8ed852b)
- **@142vip/fairy-cli**:
  - 优化`commit`命令交互框逻辑，支持`git`提交、推送 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/477 [<samp>(39ef7)</samp>](https://github.com/142vip/core-x/commit/39ef711)
  - 优化`release`命令交互体验 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/478 [<samp>(5c15f)</samp>](https://github.com/142vip/core-x/commit/5c15ff2)
  - 核心`cli`逻辑重构，优化模块整理结构，支持命令别名机制 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/479 [<samp>(23b82)</samp>](https://github.com/142vip/core-x/commit/23b824a)
  - `release`命令提交时，默认配置`noVerify`参数，忽略`git`钩子函数 &nbsp;-&nbsp; by **chufan** [<samp>(2f53c)</samp>](https://github.com/142vip/core-x/commit/2f53c0f)
  - Release命令增加`check-branch`参数，支持指定分支检测 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/497 [<samp>(15ecc)</samp>](https://github.com/142vip/core-x/commit/15ecc34)
- **@142vip/release-version**:
  - 优化`versionBump`的交互对话框 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/482 [<samp>(18b83)</samp>](https://github.com/142vip/core-x/commit/18b8352)
- **@142vip/utils**:
  - 优化`promptSearch`函数类型支持，优雅处理`VipInquirer`工具`ctrl+c`意外退出报错 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/475 [<samp>(4169d)</samp>](https://github.com/142vip/core-x/commit/4169dda)
  - 增加`CliCommandBaseOptions`类型 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/480 [<samp>(590e9)</samp>](https://github.com/142vip/core-x/commit/590e9e4)
  - 增加`promptReleaseVersion`等功能，支持`package-json`操作 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/488 [<samp>(29e81)</samp>](https://github.com/142vip/core-x/commit/29e81d4)
  - 工具增加`initCommand`封装，提供可配置命令初始化 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/492 [<samp>(33037)</samp>](https://github.com/142vip/core-x/commit/330376c)
  - 优化`VipCommander`类主体结构，拓展类型 &nbsp;-&nbsp; by **chufan** [<samp>(331d9)</samp>](https://github.com/142vip/core-x/commit/331d9ad)
  - 增加`validateBranch`校验分支，拓展`promptConfirm`，支持安全退出 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/495 [<samp>(99cc8)</samp>](https://github.com/142vip/core-x/commit/99cc8f9)
  - 增加`isExistDir`、`isDirectory`等功能，拓展`GitGeneralBranch`枚举 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/496 [<samp>(49f01)</samp>](https://github.com/142vip/core-x/commit/49f0187)

### 🐛 Bug Fixes

- **@142vip/fairy-cli**:
  - 修复`copyright`命令依赖异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/491 [<samp>(96158)</samp>](https://github.com/142vip/core-x/commit/961584f)
- **@142vip/release-version**:
  - 增加确认框二次验证配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/485 [<samp>(56605)</samp>](https://github.com/142vip/core-x/commit/5660574)

### 💅 Refactors

- **@142vip/fairy-cli**:
  - 基于`VipCommander`的`initCommand`方法，重写`fairy`工具链 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/494 [<samp>(2ea95)</samp>](https://github.com/142vip/core-x/commit/2ea95c5)
- **@142vip/release-version**:
  - 核心业务逻辑重构，业务流程更清晰 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/489 [<samp>(2ab87)</samp>](https://github.com/142vip/core-x/commit/2ab878b)

### 📖 Documentation

- **README**:
  - Update description &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/474 [<samp>(2abe8)</samp>](https://github.com/142vip/core-x/commit/2abe83c)

### 😏 Release Packages

- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.23` &nbsp;-&nbsp; by **chufan** [<samp>(6a7d8)</samp>](https://github.com/142vip/core-x/commit/6a7d820)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.13` &nbsp;-&nbsp; by **chufan** [<samp>(e0102)</samp>](https://github.com/142vip/core-x/commit/e010249)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.34` &nbsp;-&nbsp; by **chufan** [<samp>(959f9)</samp>](https://github.com/142vip/core-x/commit/959f9de)
  - Publish `v0.0.1-alpha.35` &nbsp;-&nbsp; by **chufan** [<samp>(86d11)</samp>](https://github.com/142vip/core-x/commit/86d11b0)

**Release New Version v0.0.1-alpha.29 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.28...v0.0.1-alpha.29)**

## v0.0.1-alpha.28 (2025-04-15)

### ✨ Features

- 基于`@142vip/commit-linter`创建`commit-msg`钩子，校验信息 &nbsp;-&nbsp; by **chufan** [<samp>(d7564)</samp>](https://github.com/142vip/core-x/commit/d75648d)
- 脚本支持ts编写，优化check命令，简化commit-msg检验逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(6a25f)</samp>](https://github.com/142vip/core-x/commit/6a25fad)
- **@142vip/changelog**:
  - 修复`changelog`命令执行异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/465 [<samp>(32b83)</samp>](https://github.com/142vip/core-x/commit/32b8378)
- **@142vip/commit-linter**:
  - 支持`commitLiner`校验`commit`信息 &nbsp;-&nbsp; by **chufan** [<samp>(d410b)</samp>](https://github.com/142vip/core-x/commit/d410bad)
  - 拓展`commitLiner`方法，支持自定义`cli`输入`commit`信息 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/463 [<samp>(562d4)</samp>](https://github.com/142vip/core-x/commit/562d4bd)
  - 移除`cli-table3`一来，更新使用说明文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/472 [<samp>(072e6)</samp>](https://github.com/142vip/core-x/commit/072e6f1)
- **@142vip/copyright**:
  - 模块结构初始化，增加软著文档生成逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/441 [<samp>(7c30a)</samp>](https://github.com/142vip/core-x/commit/7c30a3a)
  - 构造函数移除`pageCount`参数，生成的源代码指定30页 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/444 [<samp>(f28cb)</samp>](https://github.com/142vip/core-x/commit/f28cb64)
  - 优化核心逻辑，增加说明文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/450 [<samp>(09f0a)</samp>](https://github.com/142vip/core-x/commit/09f0a34)
- **@142vip/eslint-config**:
  - 拓展config方法，增加`settings`配置，默认支持`VipNodeJS.exitProcess`退出功能 &nbsp;-&nbsp; by **chufan** [<samp>(999b2)</samp>](https://github.com/142vip/core-x/commit/999b211)
- **@142vip/fairy-cli**:
  - `fairy`助手增加`copyright`命令，支持著作权申请业务 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/445 [<samp>(8cdab)</samp>](https://github.com/142vip/core-x/commit/8cdab0a)
  - 移除`verifyCommit`校验函数及类型 &nbsp;-&nbsp; by **chufan** [<samp>(77b0c)</samp>](https://github.com/142vip/core-x/commit/77b0c89)
  - 移除`getLatestTagName`、`getCommitLogs`函数，功能逻辑简化 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/457 [<samp>(4f645)</samp>](https://github.com/142vip/core-x/commit/4f64519)
  - 移除`monorepo`方法，使用`VipMonorepo`工具替换 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/460 [<samp>(eb95f)</samp>](https://github.com/142vip/core-x/commit/eb95f58)
  - 增加`commit`命令，拓展`cli`功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/464 [<samp>(bd3c9)</samp>](https://github.com/142vip/core-x/commit/bd3c9d5)
  - 拓展`release`方法，支持`check`命令终端预览当前版本`commit`记录 &nbsp;-&nbsp; by **chufan** [<samp>(a7f86)</samp>](https://github.com/142vip/core-x/commit/a7f869e)
- **@142vip/release-version**:
  - 移除`js-yaml`依赖，使用`VipYaml`工具函数替换 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/461 [<samp>(4c9e1)</samp>](https://github.com/142vip/core-x/commit/4c9e1c0)
  - 移除`npm-check`依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/473 [<samp>(8c4db)</samp>](https://github.com/142vip/core-x/commit/8c4db14)
- **@142vip/utils**:
  - 拓展`pathDirname`、`pathExtname`方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/435 [<samp>(650f7)</samp>](https://github.com/142vip/core-x/commit/650f76a)
  - 增加`promptInputRequired`必选输入框 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/443 [<samp>(af445)</samp>](https://github.com/142vip/core-x/commit/af44528)
  - 拓展`VipGit`、`VipNodejs`方法，支持`commit`信息解析 &nbsp;-&nbsp; by **chufan** [<samp>(c1f7d)</samp>](https://github.com/142vip/core-x/commit/c1f7d48)
  - 增加`getCommitLogs`函数 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/455 [<samp>(2bf3b)</samp>](https://github.com/142vip/core-x/commit/2bf3bad)
  - 增加`getVersionGitTag`函 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/456 [<samp>(1ade9)</samp>](https://github.com/142vip/core-x/commit/1ade998)
  - 增加`VipMonorepo`工具，支持`getPackageJSONPathList`函数 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/458 [<samp>(ecb6f)</samp>](https://github.com/142vip/core-x/commit/ecb6fc2)
  - 集成`js-yaml`模块，支持`VipYaml`工具，增加`load`、`loadAll`方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/459 [<samp>(3baf4)</samp>](https://github.com/142vip/core-x/commit/3baf42a)
  - 拓展`git`、`monorepo`、`nodejs`、`npm`、`package-json`等核心工具方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/462 [<samp>(17bbd)</samp>](https://github.com/142vip/core-x/commit/17bbda6)
  - 优化`VipInquirer`工具方法类型，支持`DEFAULT_RELEASE_ROOT_NAME`变量 &nbsp;-&nbsp; by **chufan** [<samp>(ad577)</samp>](https://github.com/142vip/core-x/commit/ad577f6)
  - 增加`logByBlank`、`getRecentCommitsByScope`等方法，优化语法 &nbsp;-&nbsp; by **chufan** [<samp>(0fe52)</samp>](https://github.com/142vip/core-x/commit/0fe5209)
  - 增加`logByBlank`、`getRecentCommitsByScope`等方法，优化语法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/468 [<samp>(cecef)</samp>](https://github.com/142vip/core-x/commit/cecef6b)
  - 增加`getPkgJSONPath`、`getPkgLabel`等方法，优化`PackageJSONWithPath`类型 &nbsp;-&nbsp; by **chufan** [<samp>(1a9aa)</samp>](https://github.com/142vip/core-x/commit/1a9aab2)
- **@142vip/vuepress**:
  - Update dependency @vuepress/plugin-xx to v2.0.0-rc.92 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/446 [<samp>(5b56b)</samp>](https://github.com/142vip/core-x/commit/5b56bda)

### 🐛 Bug Fixes

- **@142vip/eslint-config**:
  - Update dependency @antfu/eslint-config、eslint &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/436 [<samp>(4e0d3)</samp>](https://github.com/142vip/core-x/commit/4e0d397)

### 📖 Documentation

- **@142vip/copyright**:
  - 补充模块文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/447 [<samp>(48ca7)</samp>](https://github.com/142vip/core-x/commit/48ca70c)
- **CHANGELOG**:
  - Update `@142vip/changelog`、`@142vip/copyright` &nbsp;-&nbsp; by **chufan** [<samp>(ca7b6)</samp>](https://github.com/142vip/core-x/commit/ca7b6d0)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.18` &nbsp;-&nbsp; by **chufan** [<samp>(504a4)</samp>](https://github.com/142vip/core-x/commit/504a437)
- **@142vip/commit-linter**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(6b308)</samp>](https://github.com/142vip/core-x/commit/6b3086f)
- **@142vip/copyright**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(647ec)</samp>](https://github.com/142vip/core-x/commit/647ec03)
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(bc738)</samp>](https://github.com/142vip/core-x/commit/bc73802)
- **@142vip/eslint-config**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(74326)</samp>](https://github.com/142vip/core-x/commit/7432608)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.22` &nbsp;-&nbsp; by **chufan** [<samp>(199e7)</samp>](https://github.com/142vip/core-x/commit/199e7c0)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.12` &nbsp;-&nbsp; by **chufan** [<samp>(62a48)</samp>](https://github.com/142vip/core-x/commit/62a4890)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.32` &nbsp;-&nbsp; by **chufan** [<samp>(fa3fe)</samp>](https://github.com/142vip/core-x/commit/fa3fe31)
  - Publish `v0.0.1-alpha.33` &nbsp;-&nbsp; by **chufan** [<samp>(2dcf9)</samp>](https://github.com/142vip/core-x/commit/2dcf96b)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.12` &nbsp;-&nbsp; by **chufan** [<samp>(55bfd)</samp>](https://github.com/142vip/core-x/commit/55bfdb9)

**Release New Version v0.0.1-alpha.28 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.27...v0.0.1-alpha.28)**

## v0.0.1-alpha.27 (2025-03-30)

### ✨ Features

- 更新文档，修改镜像构建逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/429 [<samp>(6a9d0)</samp>](https://github.com/142vip/core-x/commit/6a9d0ce)
- 优化网站侧边栏，补充各模块README文档 &nbsp;-&nbsp; by **chufan** [<samp>(53156)</samp>](https://github.com/142vip/core-x/commit/5315698)
- **@142vip/changelog**:
  - 一些代码改造，优化`cli`的参数说明 &nbsp;-&nbsp; by **chufan** [<samp>(2b3a2)</samp>](https://github.com/142vip/core-x/commit/2b3a2b6)
  - 使用`loadCliConfig`加载配置，脚手架增加`ch`命令入口 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/418 [<samp>(1f14e)</samp>](https://github.com/142vip/core-x/commit/1f14e3c)
  - 移除`c12`和`changelogen`依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/419 [<samp>(80be0)</samp>](https://github.com/142vip/core-x/commit/80be0fd)
- **@142vip/fairy-cli**:
  - `sync`处理逻辑优化 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/414 [<samp>(f9962)</samp>](https://github.com/142vip/core-x/commit/f996290)
  - 拓展`install`、`clean`、`changelog`等命令 &nbsp;-&nbsp; by **chufan** [<samp>(2d253)</samp>](https://github.com/142vip/core-x/commit/2d253e0)
  - 优化`fa`各子命令，简化`login`、`release`等逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(451d5)</samp>](https://github.com/142vip/core-x/commit/451d5c5)
- **@142vip/release-version**:
  - 移除`c12`依赖，使用`loadCliConfig`加载配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/420 [<samp>(4e80d)</samp>](https://github.com/142vip/core-x/commit/4e80d01)
  - 移除`semver`依赖，改用`VipSemver`通用型依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/422 [<samp>(ddb67)</samp>](https://github.com/142vip/core-x/commit/ddb672c)
  - 移除`kolorist`依赖，替换为`VipColor`通用型依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/424 [<samp>(62ac9)</samp>](https://github.com/142vip/core-x/commit/62ac95a)
- **@142vip/utils**:
  - Docker容器创建支持基于系统架构自动配置`--platform`参数 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/413 [<samp>(cd56a)</samp>](https://github.com/142vip/core-x/commit/cd56aaf)
  - 拓展`nodejs`、`npm`、`package-json`等工具方法 &nbsp;-&nbsp; by **chufan** [<samp>(13d97)</samp>](https://github.com/142vip/core-x/commit/13d97a3)
  - 优化`VipCommander`命令，支持`description`描述信息 &nbsp;-&nbsp; by **chufan** [<samp>(74f04)</samp>](https://github.com/142vip/core-x/commit/74f04ea)
  - 优化VipConfig中配置加载等函数的类型支持 &nbsp;-&nbsp; by **chufan** [<samp>(687c3)</samp>](https://github.com/142vip/core-x/commit/687c340)
  - 新增`createSemver`创建实例，支持`originImportSemVer`原生导入的`semver`对象 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/421 [<samp>(0cea4)</samp>](https://github.com/142vip/core-x/commit/0cea4bb)

### 🐛 Bug Fixes

- **deps**:
  - Update dependency turbo to v2.4.4 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/417 [<samp>(cf943)</samp>](https://github.com/142vip/core-x/commit/cf94325)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.16` &nbsp;-&nbsp; by **chufan** [<samp>(fcccb)</samp>](https://github.com/142vip/core-x/commit/fcccbcc)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.21` &nbsp;-&nbsp; by **chufan** [<samp>(d69cb)</samp>](https://github.com/142vip/core-x/commit/d69cb99)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.11` &nbsp;-&nbsp; by **chufan** [<samp>(6287f)</samp>](https://github.com/142vip/core-x/commit/6287fdd)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.29` &nbsp;-&nbsp; by **chufan** [<samp>(28081)</samp>](https://github.com/142vip/core-x/commit/28081b1)
  - Publish `v0.0.1-alpha.30` &nbsp;-&nbsp; by **chufan** [<samp>(15d72)</samp>](https://github.com/142vip/core-x/commit/15d721f)

**Release New Version v0.0.1-alpha.27 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.25...v0.0.1-alpha.27)**

## v0.0.1-alpha.26 (2025-03-29)

### ✨ Features

- 更新文档，修改镜像构建逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/429 [<samp>(6a9d0)</samp>](https://github.com/142vip/core-x/commit/6a9d0ce)
- 优化网站侧边栏，补充各模块README文档 &nbsp;-&nbsp; by **chufan** [<samp>(53156)</samp>](https://github.com/142vip/core-x/commit/5315698)
- **@142vip/changelog**:
  - 一些代码改造，优化`cli`的参数说明 &nbsp;-&nbsp; by **chufan** [<samp>(2b3a2)</samp>](https://github.com/142vip/core-x/commit/2b3a2b6)
  - 使用`loadCliConfig`加载配置，脚手架增加`ch`命令入口 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/418 [<samp>(1f14e)</samp>](https://github.com/142vip/core-x/commit/1f14e3c)
  - 移除`c12`和`changelogen`依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/419 [<samp>(80be0)</samp>](https://github.com/142vip/core-x/commit/80be0fd)
- **@142vip/fairy-cli**:
  - `sync`处理逻辑优化 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/414 [<samp>(f9962)</samp>](https://github.com/142vip/core-x/commit/f996290)
  - 拓展`install`、`clean`、`changelog`等命令 &nbsp;-&nbsp; by **chufan** [<samp>(2d253)</samp>](https://github.com/142vip/core-x/commit/2d253e0)
  - 优化`fa`各子命令，简化`login`、`release`等逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(451d5)</samp>](https://github.com/142vip/core-x/commit/451d5c5)
- **@142vip/release-version**:
  - 移除`c12`依赖，使用`loadCliConfig`加载配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/420 [<samp>(4e80d)</samp>](https://github.com/142vip/core-x/commit/4e80d01)
  - 移除`semver`依赖，改用`VipSemver`通用型依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/422 [<samp>(ddb67)</samp>](https://github.com/142vip/core-x/commit/ddb672c)
  - 移除`kolorist`依赖，替换为`VipColor`通用型依赖 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/424 [<samp>(62ac9)</samp>](https://github.com/142vip/core-x/commit/62ac95a)
- **@142vip/utils**:
  - Docker容器创建支持基于系统架构自动配置`--platform`参数 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/413 [<samp>(cd56a)</samp>](https://github.com/142vip/core-x/commit/cd56aaf)
  - 拓展`nodejs`、`npm`、`package-json`等工具方法 &nbsp;-&nbsp; by **chufan** [<samp>(13d97)</samp>](https://github.com/142vip/core-x/commit/13d97a3)
  - 优化`VipCommander`命令，支持`description`描述信息 &nbsp;-&nbsp; by **chufan** [<samp>(74f04)</samp>](https://github.com/142vip/core-x/commit/74f04ea)
  - 优化VipConfig中配置加载等函数的类型支持 &nbsp;-&nbsp; by **chufan** [<samp>(687c3)</samp>](https://github.com/142vip/core-x/commit/687c340)
  - 新增`createSemver`创建实例，支持`originImportSemVer`原生导入的`semver`对象 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/421 [<samp>(0cea4)</samp>](https://github.com/142vip/core-x/commit/0cea4bb)

### 🐛 Bug Fixes

- **deps**:
  - Update dependency turbo to v2.4.4 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/417 [<samp>(cf943)</samp>](https://github.com/142vip/core-x/commit/cf94325)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.16` &nbsp;-&nbsp; by **chufan** [<samp>(fcccb)</samp>](https://github.com/142vip/core-x/commit/fcccbcc)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.21` &nbsp;-&nbsp; by **chufan** [<samp>(d69cb)</samp>](https://github.com/142vip/core-x/commit/d69cb99)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.11` &nbsp;-&nbsp; by **chufan** [<samp>(6287f)</samp>](https://github.com/142vip/core-x/commit/6287fdd)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.29` &nbsp;-&nbsp; by **chufan** [<samp>(28081)</samp>](https://github.com/142vip/core-x/commit/28081b1)
  - Publish `v0.0.1-alpha.30` &nbsp;-&nbsp; by **chufan** [<samp>(15d72)</samp>](https://github.com/142vip/core-x/commit/15d721f)

**Release New Version v0.0.1-alpha.26 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.25...v0.0.1-alpha.26)**

## v0.0.1-alpha.25 (2025-03-24)

### ✨ Features

- **@142vip/changelog**:
  - 移除`c12`模块，替换为`convertEmoji`方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/399 [<samp>(e9b91)</samp>](https://github.com/142vip/core-x/commit/e9b91e7)
- **@142vip/eslint-config**:
  - `eslint`版本升级到`9.20.0` &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/374 [<samp>(b19c0)</samp>](https://github.com/142vip/core-x/commit/b19c06e)
- **@142vip/utils**:
  - 增加`isBuffer()`工具函数，优化依赖导入机制 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/384 [<samp>(f4a69)</samp>](https://github.com/142vip/core-x/commit/f4a697d)
  - 移除`getFirstCommitHash`函数，优化`getRecentCommitHash`逻辑 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/387 [<samp>(a5a76)</samp>](https://github.com/142vip/core-x/commit/a5a76cd)
  - 拓展`VipDocker`工具 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/388 [<samp>(215d3)</samp>](https://github.com/142vip/core-x/commit/215d39a)
  - 拓展`VipInquirer`，增加`promptInput`输入框功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/392 [<samp>(2bf62)</samp>](https://github.com/142vip/core-x/commit/2bf6230)
  - `VipGit`增加`convertEmoji`方法，转换`git`记录中的表情 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/397 [<samp>(8352a)</samp>](https://github.com/142vip/core-x/commit/8352a4f)
  - 引入`c12`模块，增加`config`配置加载、监听功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/398 [<samp>(cf550)</samp>](https://github.com/142vip/core-x/commit/cf55047)
  - 增加枚举，拓展Docker功能方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/401 [<samp>(2a2d8)</samp>](https://github.com/142vip/core-x/commit/2a2d8db)
  - 拓展`VipInquirer`工具方法，调整`prompt`交互 &nbsp;-&nbsp; by **chufan** [<samp>(e0ce9)</samp>](https://github.com/142vip/core-x/commit/e0ce963)
  - `VipLogger`中增加`println`输出空行 &nbsp;-&nbsp; by **chufan** [<samp>(9243e)</samp>](https://github.com/142vip/core-x/commit/9243ee3)
  - 拓展`VipDocker`工具，增加测试`listContainerStatus`等方法的测试用例 &nbsp;-&nbsp; by **chufan** [<samp>(b2b64)</samp>](https://github.com/142vip/core-x/commit/b2b64e2)
  - 拓展`VipDocker`工具，增加测试`listContainerStatus`等方法的测试用例 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/408 [<samp>(3d527)</samp>](https://github.com/142vip/core-x/commit/3d527b8)
  - 提供`handleSimpleSearchSource`，支持搜索源简单处理 &nbsp;-&nbsp; by **chufan** [<samp>(37933)</samp>](https://github.com/142vip/core-x/commit/37933f7)
  - 拓展`VipDocker`工具，增加容器网络`network`相关功能 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/410 [<samp>(b7a25)</samp>](https://github.com/142vip/core-x/commit/b7a2506)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复使用`getRecentCommitHash`异常 &nbsp;-&nbsp; by **chufan** [<samp>(9e914)</samp>](https://github.com/142vip/core-x/commit/9e9147c)
- **@142vip/fairy-cli**:
  - 修复`release`命令交互框异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/404 [<samp>(bb0b1)</samp>](https://github.com/142vip/core-x/commit/bb0b171)
- **@142vip/utils**:
  - 修复promptSelect异常，拓展参数类型 &nbsp;-&nbsp; by **chufan** [<samp>(3109f)</samp>](https://github.com/142vip/core-x/commit/3109f75)
- **deps**:
  - Update dependency c12 to v2.0.4 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/385 [<samp>(58c40)</samp>](https://github.com/142vip/core-x/commit/58c4002)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.15` &nbsp;-&nbsp; by **chufan** [<samp>(9db7a)</samp>](https://github.com/142vip/core-x/commit/9db7add)
- **@142vip/eslint-config**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(bcc00)</samp>](https://github.com/142vip/core-x/commit/bcc00bf)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.21` &nbsp;-&nbsp; by **chufan** [<samp>(7ae8b)</samp>](https://github.com/142vip/core-x/commit/7ae8bee)
  - Publish `v0.0.1-alpha.22` &nbsp;-&nbsp; by **chufan** [<samp>(785a3)</samp>](https://github.com/142vip/core-x/commit/785a3f6)
  - Publish `v0.0.1-alpha.23` &nbsp;-&nbsp; by **chufan** [<samp>(88059)</samp>](https://github.com/142vip/core-x/commit/88059bf)
  - Publish `v0.0.1-alpha.24` &nbsp;-&nbsp; by **chufan** [<samp>(901e1)</samp>](https://github.com/142vip/core-x/commit/901e1d5)
  - Publish `v0.0.1-alpha.25` &nbsp;-&nbsp; by **chufan** [<samp>(7b87a)</samp>](https://github.com/142vip/core-x/commit/7b87a2a)
  - Publish `v0.0.1-alpha.26` &nbsp;-&nbsp; by **chufan** [<samp>(6a1f8)</samp>](https://github.com/142vip/core-x/commit/6a1f897)
  - Publish `v0.0.1-alpha.27` &nbsp;-&nbsp; by **chufan** [<samp>(23a83)</samp>](https://github.com/142vip/core-x/commit/23a833c)
  - Publish `v0.0.1-alpha.28` &nbsp;-&nbsp; by **chufan** [<samp>(2617a)</samp>](https://github.com/142vip/core-x/commit/2617ae7)

**Release New Version v0.0.1-alpha.25 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.24...v0.0.1-alpha.25)**

## v0.0.1-alpha.24 (2025-02-14)

### ✨ Features

- 优化`authorInfo`信息和`bundle`命令的使用 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/356 [<samp>(e5730)</samp>](https://github.com/142vip/core-x/commit/e57308f)
- `tsconfig.package.json`增加装饰器相关配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/369 [<samp>(61071)</samp>](https://github.com/142vip/core-x/commit/61071e8)
- 优化`authorInfo`信息展示配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/370 [<samp>(98fc7)</samp>](https://github.com/142vip/core-x/commit/98fc768)
- **@142vip/utils**:
  - 增加`getPackageJSON`、`getProcessArgvByIndex`等工具方法 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/355 [<samp>(bd211)</samp>](https://github.com/142vip/core-x/commit/bd211a9)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复version字段错误、文档格式异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/363 [<samp>(20a5c)</samp>](https://github.com/142vip/core-x/commit/20a5c78)
- **deps**:
  - Update nest monorepo &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/362 [<samp>(df89f)</samp>](https://github.com/142vip/core-x/commit/df89f04)
  - Update dependency qs to v6.14.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/371 [<samp>(75410)</samp>](https://github.com/142vip/core-x/commit/754106b)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.14` &nbsp;-&nbsp; by **chufan** [<samp>(ad0dd)</samp>](https://github.com/142vip/core-x/commit/ad0dd30)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.20` &nbsp;-&nbsp; by **chufan** [<samp>(c0ec9)</samp>](https://github.com/142vip/core-x/commit/c0ec937)

**Release New Version v0.0.1-alpha.24 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.23...v0.0.1-alpha.24)**

## v0.0.1-alpha.23 (2025-02-13)

### ✨ Features

- 修改`tsconfig`配置，增加`paths`字段管理模块的相对路径 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/349 [<samp>(140d1)</samp>](https://github.com/142vip/core-x/commit/140d1c6)
- **@142vip/changelog**:
  - 删除无用日志输出，调整文档 &nbsp;-&nbsp; by **chufan** [<samp>(5c18b)</samp>](https://github.com/142vip/core-x/commit/5c18b6c)
- **@142vip/fairy-cli**:
  - 调整`VipExecutor`方法导入 &nbsp;-&nbsp; by **chufan** [<samp>(3d2ce)</samp>](https://github.com/142vip/core-x/commit/3d2ce7e)
  - 移除`getBranchName`方法，简化`release`命令参数定义 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/359 [<samp>(24a31)</samp>](https://github.com/142vip/core-x/commit/24a31e0)
- **@142vip/oauth2.0**:
  - 优化`deps`依赖，移除`dayjs`模块 &nbsp;-&nbsp; by **chufan** [<samp>(a3492)</samp>](https://github.com/142vip/core-x/commit/a34925c)
- **@142vip/utils**:
  - 增加`getTagsInHead`方法获取当前提交头的所有标签 &nbsp;-&nbsp; by **chufan** [<samp>(73c64)</samp>](https://github.com/142vip/core-x/commit/73c64ca)

### 🐛 Bug Fixes

- 修复`@142vip/utils`模块相互调用异常 &nbsp;-&nbsp; by **chufan** [<samp>(b7d62)</samp>](https://github.com/142vip/core-x/commit/b7d6238)
- 修复`build`构建异常 &nbsp;-&nbsp; by **chufan** [<samp>(7ceac)</samp>](https://github.com/142vip/core-x/commit/7ceace8)
- **@142vip/changelog**:
  - 修复`monorepo`下提交记录生成异常 &nbsp;-&nbsp; by **chufan** [<samp>(058e1)</samp>](https://github.com/142vip/core-x/commit/058e189)
  - 修复`gitDiff`比对异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/357 [<samp>(627c5)</samp>](https://github.com/142vip/core-x/commit/627c576)
  - 修复发布大版本前，`monorepo`子模块`commit`记录重复提交 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/358 [<samp>(c4dc5)</samp>](https://github.com/142vip/core-x/commit/c4dc59a)
  - 修复提交信息过滤异常 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/360 [<samp>(868c5)</samp>](https://github.com/142vip/core-x/commit/868c524)
- **deps**:
  - Update dependency mysql2 to v3.12.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/352 [<samp>(fa575)</samp>](https://github.com/142vip/core-x/commit/fa5758f)
  - Update dependency reflect-metadata to v0.2.2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/351 [<samp>(d42af)</samp>](https://github.com/142vip/core-x/commit/d42af35)
  - Update dependency turbo to v2.4.2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/353 [<samp>(4cb07)</samp>](https://github.com/142vip/core-x/commit/4cb0745)

### 💅 Refactors

- **@142vip/fairy-cli**:
  - 优化基础命令逻辑，简化代码 &nbsp;-&nbsp; by **chufan** [<samp>(28db8)</samp>](https://github.com/142vip/core-x/commit/28db882)
- **@142vip/utils**:
  - 代码改造，简化类型声明，调整工具核心工具方法 &nbsp;-&nbsp; by **chufan** [<samp>(4e227)</samp>](https://github.com/142vip/core-x/commit/4e227a4)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.12` &nbsp;-&nbsp; by **chufan** [<samp>(4ca7a)</samp>](https://github.com/142vip/core-x/commit/4ca7ac9)
  - Publish `v0.0.1-alpha.13` &nbsp;-&nbsp; by **chufan** [<samp>(ade4c)</samp>](https://github.com/142vip/core-x/commit/ade4c89)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.20` &nbsp;-&nbsp; by **chufan** [<samp>(5f65a)</samp>](https://github.com/142vip/core-x/commit/5f65ab7)
- **@142vip/oauth2.0**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(be215)</samp>](https://github.com/142vip/core-x/commit/be215ab)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.17` &nbsp;-&nbsp; by **chufan** [<samp>(ad744)</samp>](https://github.com/142vip/core-x/commit/ad74483)
  - Publish `v0.0.1-alpha.18` &nbsp;-&nbsp; by **chufan** [<samp>(7b314)</samp>](https://github.com/142vip/core-x/commit/7b31482)
  - Publish `v0.0.1-alpha.19` &nbsp;-&nbsp; by **chufan** [<samp>(92075)</samp>](https://github.com/142vip/core-x/commit/9207535)

**Release New Version v0.0.1-alpha.23 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.22...v0.0.1-alpha.23)**

## v0.0.1-alpha.22 (2025-02-07)

### ✨ Features

- 调整`renovate`的`branch`限制为20 &nbsp;-&nbsp; by **chufan** [<samp>(0f381)</samp>](https://github.com/142vip/core-x/commit/0f38112)
- 增加`check:esm`命令，检查是否支持`ESM`模块 &nbsp;-&nbsp; by **chufan** [<samp>(dfe12)</samp>](https://github.com/142vip/core-x/commit/dfe1242)
- **@142vip/axios**:
  - 代码改造，强化类型支持，锁定依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(49e70)</samp>](https://github.com/142vip/core-x/commit/49e7028)
- **@142vip/fairy-cli**:
  - `clean`命令增加`--git-hooks`参数，支持`.git/hooks`目录清理 &nbsp;-&nbsp; by **chufan** [<samp>(8c8cc)</samp>](https://github.com/142vip/core-x/commit/8c8ccb3)
- **@142vip/nest-redis**:
  - 基础结构改造，引入`@142vip/utils`模块 &nbsp;-&nbsp; by **chufan** [<samp>(a0155)</samp>](https://github.com/142vip/core-x/commit/a01558e)
- **@142vip/utils**:
  - 增加`formatDateToYMD`日期封装 &nbsp;-&nbsp; by **chufan** [<samp>(29352)</samp>](https://github.com/142vip/core-x/commit/29352bf)
  - 拓展`VipGit`，支持`git`相关操作功能 &nbsp;-&nbsp; by **chufan** [<samp>(7d360)</samp>](https://github.com/142vip/core-x/commit/7d36065)
  - 引入`semver`模块，集成`VipSemver` API 功能 &nbsp;-&nbsp; by **chufan** [<samp>(527f6)</samp>](https://github.com/142vip/core-x/commit/527f64a)
  - 增加错误码、`Release`类型枚举 &nbsp;-&nbsp; by **chufan** [<samp>(47079)</samp>](https://github.com/142vip/core-x/commit/470797e)
- **@142vip/vitepress**:
  - 锁定依赖版本，完善文档 &nbsp;-&nbsp; by **chufan** [<samp>(23da7)</samp>](https://github.com/142vip/core-x/commit/23da7bd)
- **@142vip/vuepress**:
  - 锁定依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(d314f)</samp>](https://github.com/142vip/core-x/commit/d314f58)

### 🐛 Bug Fixes

- **@142vip/utils**:
  - Update dependency semver to v7.7.1 &nbsp;-&nbsp; by **chufan** [<samp>(5d979)</samp>](https://github.com/142vip/core-x/commit/5d9798e)
- **@142vip/vitepress**:
  - Update dependency vitepress to v1.6.3 &nbsp;-&nbsp; by **chufan** [<samp>(44dde)</samp>](https://github.com/142vip/core-x/commit/44ddec9)
- **deps**:
  - Update dependency axios to v1.7.9 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/323 [<samp>(9d9f9)</samp>](https://github.com/142vip/core-x/commit/9d9f909)
  - Update dependency c12 to v2.0.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/324 [<samp>(84c17)</samp>](https://github.com/142vip/core-x/commit/84c1736)
  - Update dependency turbo to v2.4.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/328 [<samp>(934a3)</samp>](https://github.com/142vip/core-x/commit/934a3ef)
  - Update dependency egg to v3.30.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/331 [<samp>(f49a1)</samp>](https://github.com/142vip/core-x/commit/f49a128)
  - Update dependency mysql2 to v3.12.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/333 [<samp>(ad2ed)</samp>](https://github.com/142vip/core-x/commit/ad2edd4)
  - Update dependency element-plus to v2.9.3 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/332 [<samp>(533c0)</samp>](https://github.com/142vip/core-x/commit/533c081)
  - Update dependency @grpc/grpc-js to v1.12.6 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/335 [<samp>(411e6)</samp>](https://github.com/142vip/core-x/commit/411e6eb)
  - Update dependency egg to v3.30.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/339 [<samp>(8ccd7)</samp>](https://github.com/142vip/core-x/commit/8ccd777)
  - Update dependency @nestjs/typeorm to v11 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/341 [<samp>(12da8)</samp>](https://github.com/142vip/core-x/commit/12da8a4)
  - Update dependency semver to v7.7.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/340 [<samp>(6075c)</samp>](https://github.com/142vip/core-x/commit/6075c2c)
  - Lock the version, use a fixed version number &nbsp;-&nbsp; by **chufan** [<samp>(fcb2b)</samp>](https://github.com/142vip/core-x/commit/fcb2bbb)
  - Update dependency @grpc/grpc-js to v1.12.6 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/343 [<samp>(65801)</samp>](https://github.com/142vip/core-x/commit/6580192)
  - Update dependency c12 to v2.0.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/344 [<samp>(01133)</samp>](https://github.com/142vip/core-x/commit/01133ae)

### 💅 Refactors

- **@142vip/changelog**:
  - 优化`changelog`核心逻辑，简化`cli`处理流程，支持功能函数导出 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/317 [<samp>(4c3c1)</samp>](https://github.com/142vip/core-x/commit/4c3c1b9)
- **@142vip/fairy-cli**:
  - `sync`功能日志、代码优化 &nbsp;-&nbsp; by **chufan** [<samp>(100f6)</samp>](https://github.com/142vip/core-x/commit/100f615)
- **@142vip/utils**:
  - 优化`execCommand`命令执行器，移除`execa`模块 &nbsp;-&nbsp; by **chufan** [<samp>(42b73)</samp>](https://github.com/142vip/core-x/commit/42b7370)
  - 重构代码，丰富工具函数栈，支持`version`拓展 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/342 [<samp>(89163)</samp>](https://github.com/142vip/core-x/commit/8916371)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(88e73)</samp>](https://github.com/142vip/core-x/commit/88e7316)
- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(9cc42)</samp>](https://github.com/142vip/core-x/commit/9cc42fa)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.19` &nbsp;-&nbsp; by **chufan** [<samp>(ac1e1)</samp>](https://github.com/142vip/core-x/commit/ac1e1cb)
- **@142vip/nest-redis**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(e87db)</samp>](https://github.com/142vip/core-x/commit/e87db39)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.15` &nbsp;-&nbsp; by **chufan** [<samp>(087ca)</samp>](https://github.com/142vip/core-x/commit/087ca23)
  - Publish `v0.0.1-alpha.16` &nbsp;-&nbsp; by **chufan** [<samp>(c48af)</samp>](https://github.com/142vip/core-x/commit/c48af63)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.14` &nbsp;-&nbsp; by **chufan** [<samp>(542b2)</samp>](https://github.com/142vip/core-x/commit/542b228)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(8abbe)</samp>](https://github.com/142vip/core-x/commit/8abbe94)

**Release New Version v0.0.1-alpha.22 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.21...v0.0.1-alpha.22)**

## v0.0.1-alpha.21 (2025-01-20)

### ✨ Features

- 增加clean:hooks命令，移除hooks，快速提交远程 &nbsp;-&nbsp; by **chufan** [<samp>(72a8e)</samp>](https://github.com/142vip/core-x/commit/72a8ec2)
- `egg`插件的`npm`文件清单中增加`config`配置 &nbsp;-&nbsp; by **chufan** [<samp>(9abf8)</samp>](https://github.com/142vip/core-x/commit/9abf8f4)
- 增加`test`命令支持单元测试 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/310 [<samp>(bc3ed)</samp>](https://github.com/142vip/core-x/commit/bc3ed95)
- `clean`命令增加`coverage`参数，删除单元测试报告 &nbsp;-&nbsp; by **chufan** [<samp>(38871)</samp>](https://github.com/142vip/core-x/commit/38871d4)
- **@142vip/axios**:
  - 移除`HttpStatus`枚举，支持`VipAxios`父类封装 &nbsp;-&nbsp; by **chufan** [<samp>(4d717)</samp>](https://github.com/142vip/core-x/commit/4d7172c)
- **@142vip/changelog**:
  - 补充类型，移除无用函数，简化逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(faa6d)</samp>](https://github.com/142vip/core-x/commit/faa6dad)
  - 移除无用开发依赖，锁定依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(311a0)</samp>](https://github.com/142vip/core-x/commit/311a0f2)
  - 使用`VipConsole`改造日志输出 &nbsp;-&nbsp; by **chufan** [<samp>(3cfea)</samp>](https://github.com/142vip/core-x/commit/3cfeacc)
- **@142vip/egg**:
  - 完善`SequelizeORM`基础类 &nbsp;-&nbsp; by **chufan** [<samp>(56b37)</samp>](https://github.com/142vip/core-x/commit/56b3795)
- **@142vip/egg-axios**:
  - 引入`@142vip/axios`模块，优化拦截器和`axios`对象创建 &nbsp;-&nbsp; by **chufan** [<samp>(34c92)</samp>](https://github.com/142vip/core-x/commit/34c92b0)
- **@142vip/egg-grpc-client**:
  - 支持客户端grpc建立连接 &nbsp;-&nbsp; by **chufan** [<samp>(9f96d)</samp>](https://github.com/142vip/core-x/commit/9f96de5)
- **@142vip/egg-grpc-server**:
  - 插件模式支持grpc服务端 &nbsp;-&nbsp; by **chufan** [<samp>(364e4)</samp>](https://github.com/142vip/core-x/commit/364e451)
- **@142vip/egg-sequelize**:
  - 完善`createEggSequelizeInstance`创建连接 &nbsp;-&nbsp; by **chufan** [<samp>(2792f)</samp>](https://github.com/142vip/core-x/commit/2792fef)
- **@142vip/fairy-cli**:
  - `clean`命令增加`--coverage`参数，支持单元测试目录清理 &nbsp;-&nbsp; by **chufan** [<samp>(81a46)</samp>](https://github.com/142vip/core-x/commit/81a46ff)
  - `cli`入口逻辑优化，使用`VipConsole`增加日志逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(c9cc3)</samp>](https://github.com/142vip/core-x/commit/c9cc355)
  - 强化`TS`类型支持 &nbsp;-&nbsp; by **chufan** [<samp>(351b5)</samp>](https://github.com/142vip/core-x/commit/351b539)
- **@142vip/grpc**:
  - 支持单例模式，grpc客户端、服务端通用方法 &nbsp;-&nbsp; by **chufan** [<samp>(70a42)</samp>](https://github.com/142vip/core-x/commit/70a428d)
- **@142vip/oauth2.0**:
  - 增加`Oauth2.0`协议的`StandardOauthV2`类 &nbsp;-&nbsp; by **chufan** [<samp>(43fda)</samp>](https://github.com/142vip/core-x/commit/43fdad4)
- **@142vip/redis**:
  - 集成ioredis类 &nbsp;-&nbsp; by **chufan** [<samp>(612ad)</samp>](https://github.com/142vip/core-x/commit/612ad7e)
- **@142vip/release-version**:
  - 使用`VipConsole`输出日志 &nbsp;-&nbsp; by **chufan** [<samp>(0cc93)</samp>](https://github.com/142vip/core-x/commit/0cc9304)
- **@142vip/utils**:
  - 支持`HttpStatus`、`HttpMethod`枚举 &nbsp;-&nbsp; by **chufan** [<samp>(7c6ec)</samp>](https://github.com/142vip/core-x/commit/7c6ec19)
  - `vipColor`、`vipSymbols`重命名，大驼峰格式 &nbsp;-&nbsp; by **chufan** [<samp>(a0d22)</samp>](https://github.com/142vip/core-x/commit/a0d22ea)
  - 封装`VipInquirer`对象，支持`inquirer`功能 &nbsp;-&nbsp; by **chufan** [<samp>(de8c2)</samp>](https://github.com/142vip/core-x/commit/de8c2a0)
  - 封装`VipDocker`工具，修复引用错误 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/314 [<samp>(4a9bf)</samp>](https://github.com/142vip/core-x/commit/4a9bfed)
  - `vipQs`重命名`VipQs` &nbsp;-&nbsp; by **chufan** [<samp>(e3500)</samp>](https://github.com/142vip/core-x/commit/e3500d0)
  - 新增`VipGit`工具，支持`git`相关操作 &nbsp;-&nbsp; by **chufan** [<samp>(f60de)</samp>](https://github.com/142vip/core-x/commit/f60de1a)
  - 新增`VipConsole`日志工具 &nbsp;-&nbsp; by **chufan** [<samp>(d165e)</samp>](https://github.com/142vip/core-x/commit/d165eff)
  - 增加`TS`类型支持,`I`开头 &nbsp;-&nbsp; by **chufan** [<samp>(1b2a3)</samp>](https://github.com/142vip/core-x/commit/1b2a3dd)
  - 结构调整，增加`pkgs`目录统一管理工具包 &nbsp;-&nbsp; by **chufan** [<samp>(3c39b)</samp>](https://github.com/142vip/core-x/commit/3c39bae)
  - `VipColor`强化类型支持 &nbsp;-&nbsp; by **chufan** [<samp>(729e3)</samp>](https://github.com/142vip/core-x/commit/729e3ca)
  - 增加`VipNodeJS`，封装`Node.js`基础工具函数 &nbsp;-&nbsp; by **chufan** [<samp>(061cb)</samp>](https://github.com/142vip/core-x/commit/061cbaa)
  - 优化`VipConsole`日志，支持分级`log`输出 &nbsp;-&nbsp; by **chufan** [<samp>(e696e)</samp>](https://github.com/142vip/core-x/commit/e696e63)

### 🐛 Bug Fixes

- 修复`log`日志异常，替换`info`日志输出 &nbsp;-&nbsp; by **chufan** [<samp>(d82bb)</samp>](https://github.com/142vip/core-x/commit/d82bba0)
- **@142vip/changelog**:
  - 修复`vipQs`使用异常 &nbsp;-&nbsp; by **chufan** [<samp>(704eb)</samp>](https://github.com/142vip/core-x/commit/704ebb5)
- **@142vip/fairy-cli**:
  - 修复`VipInquirer`模块使用异常 &nbsp;-&nbsp; by **chufan** [<samp>(58912)</samp>](https://github.com/142vip/core-x/commit/589122b)
- **@142vip/utils**:
  - 修复log日志工具函数异常 &nbsp;-&nbsp; by **chufan** [<samp>(38261)</samp>](https://github.com/142vip/core-x/commit/38261fa)
- **deps**:
  - Update dependency element-plus to v2.9.2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/289 [<samp>(cc76f)</samp>](https://github.com/142vip/core-x/commit/cc76f91)
  - Update dependency egg-scripts to v3 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/298 [<samp>(2da43)</samp>](https://github.com/142vip/core-x/commit/2da4345)
  - Update dependency egg-scripts to v3 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/299 [<samp>(aad84)</samp>](https://github.com/142vip/core-x/commit/aad8459)
  - Update dependency mysql2 to v3.12.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/295 [<samp>(8ae3e)</samp>](https://github.com/142vip/core-x/commit/8ae3ebc)
  - Update dependency element-plus to v2.9.3 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/309 [<samp>(aa6a1)</samp>](https://github.com/142vip/core-x/commit/aa6a1ca)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(7f95a)</samp>](https://github.com/142vip/core-x/commit/7f95a14)
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(04b2c)</samp>](https://github.com/142vip/core-x/commit/04b2c7f)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(0da45)</samp>](https://github.com/142vip/core-x/commit/0da4597)
- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(2444e)</samp>](https://github.com/142vip/core-x/commit/2444ec7)
- **@142vip/egg**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(ac196)</samp>](https://github.com/142vip/core-x/commit/ac196e3)
- **@142vip/egg-grpc-client**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(eb216)</samp>](https://github.com/142vip/core-x/commit/eb21606)
- **@142vip/egg-grpc-server**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(f9945)</samp>](https://github.com/142vip/core-x/commit/f9945b1)
- **@142vip/egg-sequelize**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(41b1e)</samp>](https://github.com/142vip/core-x/commit/41b1ea0)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.18` &nbsp;-&nbsp; by **chufan** [<samp>(6f9ec)</samp>](https://github.com/142vip/core-x/commit/6f9ec0d)
- **@142vip/grpc**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(2d17e)</samp>](https://github.com/142vip/core-x/commit/2d17e5d)
- **@142vip/oauth2.0**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(7e933)</samp>](https://github.com/142vip/core-x/commit/7e93364)
- **@142vip/redis**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(2e0d4)</samp>](https://github.com/142vip/core-x/commit/2e0d46b)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(b95c9)</samp>](https://github.com/142vip/core-x/commit/b95c986)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.14` &nbsp;-&nbsp; by **chufan** [<samp>(77833)</samp>](https://github.com/142vip/core-x/commit/778334f)

**Release New Version v0.0.1-alpha.21 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.20...v0.0.1-alpha.21)**

## v0.0.1-alpha.20 (2025-01-06)

### ✨ Features

- `egg`相关插件模块初始化，约定插件基础结构 &nbsp;-&nbsp; by **chufan** [<samp>(daa72)</samp>](https://github.com/142vip/core-x/commit/daa72a5)
- 锁定开发依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(77804)</samp>](https://github.com/142vip/core-x/commit/77804f2)
- 基于defaultPluginConfig函数约定插件默认配置 &nbsp;-&nbsp; by **chufan** [<samp>(92804)</samp>](https://github.com/142vip/core-x/commit/928049c)
- **@142vip/axios**:
  - Axios支持实例化和拦截器自定义 &nbsp;-&nbsp; by **chufan** [<samp>(944e1)</samp>](https://github.com/142vip/core-x/commit/944e154)
- **@142vip/egg**:
  - `registerPlugin`支持egg插件快速注册 &nbsp;-&nbsp; by **chufan** [<samp>(4d734)</samp>](https://github.com/142vip/core-x/commit/4d73484)
  - 增加`ioredis`枚举，拆分插件的日志和注册机制 &nbsp;-&nbsp; by **chufan** [<samp>(c31a6)</samp>](https://github.com/142vip/core-x/commit/c31a644)
  - 增加`defaultPluginConfig`默认配置集成 &nbsp;-&nbsp; by **chufan** [<samp>(3bda0)</samp>](https://github.com/142vip/core-x/commit/3bda0b6)
  - 优化插件注册机制和类型支持 &nbsp;-&nbsp; by **chufan** [<samp>(d55fe)</samp>](https://github.com/142vip/core-x/commit/d55fe83)
  - 支持插件EggAppBoot父类的生命周期 &nbsp;-&nbsp; by **chufan** [<samp>(1c260)</samp>](https://github.com/142vip/core-x/commit/1c260ae)
  - 修改类型定义，支持pkgName参数 &nbsp;-&nbsp; by **chufan** [<samp>(1e744)</samp>](https://github.com/142vip/core-x/commit/1e744dc)
- **@142vip/egg-axios**:
  - 插件模块初始化 &nbsp;-&nbsp; by **chufan** [<samp>(4fea1)</samp>](https://github.com/142vip/core-x/commit/4fea167)
  - 调整插件加载模式，拦截器优化 &nbsp;-&nbsp; by **chufan** [<samp>(f0109)</samp>](https://github.com/142vip/core-x/commit/f010944)
- **@142vip/egg-grpc-client**:
  - 调整插件加载模式，`grpc-client`结构初始化 &nbsp;-&nbsp; by **chufan** [<samp>(c0db5)</samp>](https://github.com/142vip/core-x/commit/c0db535)
- **@142vip/egg-grpc-server**:
  - `grpc-server`结构初始化，调整插件加载模式 &nbsp;-&nbsp; by **chufan** [<samp>(6aaf5)</samp>](https://github.com/142vip/core-x/commit/6aaf579)
- **@142vip/egg-mysql**:
  - 基于`mysql2`模块初始化`egg-mysql`插件 &nbsp;-&nbsp; by **chufan** [<samp>(0d3e1)</samp>](https://github.com/142vip/core-x/commit/0d3e19b)
  - 配置插件默认参数 &nbsp;-&nbsp; by **chufan** [<samp>(a49c8)</samp>](https://github.com/142vip/core-x/commit/a49c812)
  - `mysql`实例自动加载 &nbsp;-&nbsp; by **chufan** [<samp>(1d76c)</samp>](https://github.com/142vip/core-x/commit/1d76cce)
- **@142vip/egg-redis**:
  - 支持`redis`使用，初始化基础结构 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/265 [<samp>(668f3)</samp>](https://github.com/142vip/core-x/commit/668f3c6)
  - 优化插件启动，增加默认配置 &nbsp;-&nbsp; by **chufan** [<samp>(4a783)</samp>](https://github.com/142vip/core-x/commit/4a78389)
  - 配置加载模式 &nbsp;-&nbsp; by **chufan** [<samp>(f8d02)</samp>](https://github.com/142vip/core-x/commit/f8d0214)
- **@142vip/egg-sequelize**:
  - 基础结构初始化 &nbsp;-&nbsp; by **chufan** [<samp>(f7438)</samp>](https://github.com/142vip/core-x/commit/f743817)
  - `sequelize`自定义创建，配置加载模式， &nbsp;-&nbsp; by **chufan** [<samp>(95144)</samp>](https://github.com/142vip/core-x/commit/9514406)
- **@142vip/egg-swagger**:
  - 配置加载模式，支持自定义加载 &nbsp;-&nbsp; by **chufan** [<samp>(228b4)</samp>](https://github.com/142vip/core-x/commit/228b486)
- **@142vip/egg-validate**:
  - 调整插件加载模式 &nbsp;-&nbsp; by **chufan** [<samp>(ffc45)</samp>](https://github.com/142vip/core-x/commit/ffc45f1)
- **@142vip/redis**:
  - 支持集群和哨兵连接模式，优化`Redis`连接逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(95a71)</samp>](https://github.com/142vip/core-x/commit/95a7150)
- **@142vip/utils**:
  - 支持`lodash`工具方法 &nbsp;-&nbsp; by **chufan** [<samp>(52609)</samp>](https://github.com/142vip/core-x/commit/52609eb)
- **deps**:
  - 移除`cross-env`模块依赖 &nbsp;-&nbsp; by **chufan** [<samp>(591e4)</samp>](https://github.com/142vip/core-x/commit/591e446)
- **egg-demo**:
  - Demo演示，支持插件验证 &nbsp;-&nbsp; by **chufan** [<samp>(de3f2)</samp>](https://github.com/142vip/core-x/commit/de3f236)

### 🐛 Bug Fixes

- 修复`deps`依赖异常 &nbsp;-&nbsp; by **chufan** [<samp>(65ad5)</samp>](https://github.com/142vip/core-x/commit/65ad546)
- 修复插件依赖版本异常 &nbsp;-&nbsp; by **chufan** [<samp>(27aef)</samp>](https://github.com/142vip/core-x/commit/27aef37)
- **@142vip/utils**:
  - 增加`dayjs`模块的封装，锁定依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(b05ac)</samp>](https://github.com/142vip/core-x/commit/b05ac77)
  - 增加`nanoid`模块的封装，支持随机字符串生成 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/257 [<samp>(fb10d)</samp>](https://github.com/142vip/core-x/commit/fb10df8)
  - 增加`JSON`模块的封装，支持克隆、序列化、解析 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/259 [<samp>(1f1ef)</samp>](https://github.com/142vip/core-x/commit/1f1ef10)
- **deps**:
  - Update dependency nanoid to v3.3.8 [security] &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/258 [<samp>(e6750)</samp>](https://github.com/142vip/core-x/commit/e6750bc)
  - Update dependency qs to v6.13.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/261 [<samp>(2db4c)</samp>](https://github.com/142vip/core-x/commit/2db4c91)
  - Update dependency dayjs to v1.11.13 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/260 [<samp>(3d52f)</samp>](https://github.com/142vip/core-x/commit/3d52ff5)
  - Update dependency ioredis to v5.4.2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/274 [<samp>(d52fb)</samp>](https://github.com/142vip/core-x/commit/d52fb5f)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(9b92a)</samp>](https://github.com/142vip/core-x/commit/9b92ae3)
- **@142vip/egg**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(adee8)</samp>](https://github.com/142vip/core-x/commit/adee881)
- **@142vip/egg-axios**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(121ef)</samp>](https://github.com/142vip/core-x/commit/121ef46)
- **@142vip/egg-grpc-client**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(f4d79)</samp>](https://github.com/142vip/core-x/commit/f4d7944)
- **@142vip/egg-grpc-server**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(f2607)</samp>](https://github.com/142vip/core-x/commit/f2607a2)
- **@142vip/egg-mysql**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(91c22)</samp>](https://github.com/142vip/core-x/commit/91c223b)
- **@142vip/egg-redis**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(1db59)</samp>](https://github.com/142vip/core-x/commit/1db59d0)
- **@142vip/egg-sequelize**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(7664d)</samp>](https://github.com/142vip/core-x/commit/7664d87)
- **@142vip/egg-swagger**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(b90cc)</samp>](https://github.com/142vip/core-x/commit/b90ccb0)
- **@142vip/egg-validate**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(c00a7)</samp>](https://github.com/142vip/core-x/commit/c00a718)
- **@142vip/redis**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(291a0)</samp>](https://github.com/142vip/core-x/commit/291a042)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.12` &nbsp;-&nbsp; by **chufan** [<samp>(4e778)</samp>](https://github.com/142vip/core-x/commit/4e7782d)
  - Publish `v0.0.1-alpha.13` &nbsp;-&nbsp; by **chufan** [<samp>(2ef18)</samp>](https://github.com/142vip/core-x/commit/2ef185b)
- **egg-demo**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(9f244)</samp>](https://github.com/142vip/core-x/commit/9f24428)

**Release New Version v0.0.1-alpha.20 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.19...v0.0.1-alpha.20)**

## v0.0.1-alpha.19 (2024-12-22)

### ✨ Features

- 支持`renovate`自动升级依赖版本 &nbsp;-&nbsp; by **chufan** [<samp>(014ee)</samp>](https://github.com/142vip/core-x/commit/014ee5f)

### 🐛 Bug Fixes

- **@142vip/vuepress**:
  - 修复`vuepress-theme-hope`升级后配置失效异常，更新配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/255 [<samp>(7230d)</samp>](https://github.com/142vip/core-x/commit/7230dd9)
- **deps**:
  - Update dependency ioredis to v5.4.2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/229 [<samp>(70f53)</samp>](https://github.com/142vip/core-x/commit/70f53b8)
  - Update dependency axios to v1.7.9 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/227 [<samp>(0076e)</samp>](https://github.com/142vip/core-x/commit/0076e70)
  - Update dependency rimraf to v6 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/252 [<samp>(e61b8)</samp>](https://github.com/142vip/core-x/commit/e61b80e)
  - Update dependency qs to v6.13.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/231 [<samp>(21aa7)</samp>](https://github.com/142vip/core-x/commit/21aa72f)
  - Update dependency turbo to v2.3.3 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/238 [<samp>(239f5)</samp>](https://github.com/142vip/core-x/commit/239f5ec)
  - Update dependency del to v8 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/249 [<samp>(76488)</samp>](https://github.com/142vip/core-x/commit/76488e1)
  - Update dependency mysql2 to v3.11.5 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/230 [<samp>(34f18)</samp>](https://github.com/142vip/core-x/commit/34f18a2)
  - Update dependency element-plus to v2.9.1 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/235 [<samp>(dfa58)</samp>](https://github.com/142vip/core-x/commit/dfa585f)
  - Update dependency c12 to v2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/247 [<samp>(89f62)</samp>](https://github.com/142vip/core-x/commit/89f6215)
  - Update dependency @antfu/eslint-config to v3 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/246 [<samp>(7b3f0)</samp>](https://github.com/142vip/core-x/commit/7b3f00f)
  - Update dependency reflect-metadata to ^0.2.0 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/237 [<samp>(dce2f)</samp>](https://github.com/142vip/core-x/commit/dce2fef)
  - Update dependency c12 to v2 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/248 [<samp>(64eb2)</samp>](https://github.com/142vip/core-x/commit/64eb240)
  - Update nest monorepo to v10 &nbsp;-&nbsp; by **renovate[bot]** in https://github.com/142vip/core-x/issues/253 [<samp>(23227)</samp>](https://github.com/142vip/core-x/commit/23227e0)
  - Update dependency @antfu/eslint-config to v3 " &nbsp;-&nbsp; by **chufan** in https://github.com/142vip/core-x/issues/246 [<samp>(5bbd6)</samp>](https://github.com/142vip/core-x/commit/5bbd68e)

### 😏 Release Packages

- **@142vip/nest**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(515b8)</samp>](https://github.com/142vip/core-x/commit/515b836)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(f986b)</samp>](https://github.com/142vip/core-x/commit/f986b47)

**Release New Version v0.0.1-alpha.19 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.18...v0.0.1-alpha.19)**

## v0.0.1-alpha.18 (2024-12-12)

### ✨ Features

- Add homepage description for `changelog`、`fairy-cli`、`utils` package &nbsp;-&nbsp; by **chufan** [<samp>(00ef2)</samp>](https://github.com/142vip/core-x/commit/00ef225)
- 更新模块的基础`NPM`相关信息，拓展`keywords`字段内容 &nbsp;-&nbsp; by **chufan** [<samp>(b6870)</samp>](https://github.com/142vip/core-x/commit/b68706b)
- **@142vip/changelog**:
  - 移除`commander`模块，修改`changelog`命令定义 &nbsp;-&nbsp; by **chufan** [<samp>(7e025)</samp>](https://github.com/142vip/core-x/commit/7e025d2)
- **@142vip/fairy-cli**:
  - 代码清理，模块结构优化 &nbsp;-&nbsp; by **chufan** [<samp>(08df8)</samp>](https://github.com/142vip/core-x/commit/08df8bd)
  - `clean`命令增加`deps`可选参数，`vite`、`turbo`、`deps`参数默认值为`false` &nbsp;-&nbsp; by **chufan** [<samp>(0b633)</samp>](https://github.com/142vip/core-x/commit/0b6339b)
  - `clean`命令支持`--midway`参数删除`typings`目录 &nbsp;-&nbsp; by **chufan** [<samp>(375e7)</samp>](https://github.com/142vip/core-x/commit/375e784)
  - 移除`commander`模块，使用`VipCommander`进行终端`cli`定义 &nbsp;-&nbsp; by **chufan** [<samp>(22f00)</samp>](https://github.com/142vip/core-x/commit/22f00ea)
- **@142vip/utils**:
  - 增加`promptCheckBox`终端交互选择，支持多选、单选 &nbsp;-&nbsp; by **chufan** [<samp>(cb1ec)</samp>](https://github.com/142vip/core-x/commit/cb1ec74)
  - 移除`@inquirer/confirm`依赖，增加`promptConfirm`终端交互确认 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/197 [<samp>(8b797)</samp>](https://github.com/142vip/core-x/commit/8b7979e)
  - `docker`命令执行增加异常捕获机制 &nbsp;-&nbsp; by **chufan** [<samp>(38a46)</samp>](https://github.com/142vip/core-x/commit/38a46f3)
  - 增加类型约束 &nbsp;-&nbsp; by **chufan** [<samp>(bf796)</samp>](https://github.com/142vip/core-x/commit/bf7963c)
  - 移除`prompt`相关依赖，使用`@142vip/utils`模块，修改`release`、`clean`命令交互 &nbsp;-&nbsp; by **chufan** [<samp>(6b635)</samp>](https://github.com/142vip/core-x/commit/6b6356f)
  - 增加VipCommander封装，支持终端cli定义 &nbsp;-&nbsp; by **chufan** [<samp>(fed17)</samp>](https://github.com/142vip/core-x/commit/fed1732)
- **@142vip/vitepress**:
  - Update vitepress deps to `1.5.0` version &nbsp;-&nbsp; by **chufan** [<samp>(34108)</samp>](https://github.com/142vip/core-x/commit/3410852)
- **@142vip/vuepress**:
  - 拓展`shiki`的`langs`配置，支持多种编码语言，移除`RepoAddress`变量和默认配置 &nbsp;-&nbsp; by **chufan** [<samp>(2f680)</samp>](https://github.com/142vip/core-x/commit/2f68013)
  - 修改`homepage`和`repository`字段链接 &nbsp;-&nbsp; by **chufan** [<samp>(f134b)</samp>](https://github.com/142vip/core-x/commit/f134bf6)
- **vitepress-demo**:
  - `dev`命令增加`--open`参数，修改配置 &nbsp;-&nbsp; by **chufan** [<samp>(2cbd1)</samp>](https://github.com/142vip/core-x/commit/2cbd141)

### 🔥 Performance

- **@142vip/vuepress**:
  - `vuepress-theme-hope` deps update &nbsp;-&nbsp; by **chufan** [<samp>(827ed)</samp>](https://github.com/142vip/core-x/commit/827ed55)
  - Use peerDependencies &nbsp;-&nbsp; by **chufan** [<samp>(7835c)</samp>](https://github.com/142vip/core-x/commit/7835cba)

### 🐛 Bug Fixes

- 修复首页模块链接跳转异常 &nbsp;-&nbsp; by **chufan** [<samp>(43116)</samp>](https://github.com/142vip/core-x/commit/4311662)
- **@142vip/fairy-cli**:
  - 修复`clean`命令删除`dist`目录异常，避免删除`node_modules`中的`dist`目录，增加`--deps`参数 &nbsp;-&nbsp; by **chufan** [<samp>(65bb3)</samp>](https://github.com/142vip/core-x/commit/65bb3cf)

### 📖 Documentation

- Remove duplicate package introduction &nbsp;-&nbsp; by **chufan** [<samp>(18ac2)</samp>](https://github.com/142vip/core-x/commit/18ac2a7)
- Update README &nbsp;-&nbsp; by **chufan** [<samp>(f9f7f)</samp>](https://github.com/142vip/core-x/commit/f9f7f14)
- **@142vip/fairy-cli**:
  - 更新文档，支持`clean`、`sync`命令说明 &nbsp;-&nbsp; by **chufan** [<samp>(ffb96)</samp>](https://github.com/142vip/core-x/commit/ffb96bd)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(61672)</samp>](https://github.com/142vip/core-x/commit/6167271)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.14` &nbsp;-&nbsp; by **chufan** [<samp>(648fd)</samp>](https://github.com/142vip/core-x/commit/648fd0a)
  - Publish `v0.0.3-alpha.15` &nbsp;-&nbsp; by **chufan** [<samp>(77b37)</samp>](https://github.com/142vip/core-x/commit/77b37a2)
  - Publish `v0.0.3-alpha.16` &nbsp;-&nbsp; by **chufan** [<samp>(8958b)</samp>](https://github.com/142vip/core-x/commit/8958bc6)
  - Publish `v0.0.3-alpha.17` &nbsp;-&nbsp; by **chufan** [<samp>(e8c00)</samp>](https://github.com/142vip/core-x/commit/e8c0033)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(8f7bf)</samp>](https://github.com/142vip/core-x/commit/8f7bfc7)
  - Publish `v0.0.1-alpha.11` &nbsp;-&nbsp; by **chufan** [<samp>(1662c)</samp>](https://github.com/142vip/core-x/commit/1662cfe)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.13` &nbsp;-&nbsp; by **chufan** [<samp>(80372)</samp>](https://github.com/142vip/core-x/commit/803728f)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(61710)</samp>](https://github.com/142vip/core-x/commit/6171094)
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(80f31)</samp>](https://github.com/142vip/core-x/commit/80f31cf)
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(f2fb0)</samp>](https://github.com/142vip/core-x/commit/f2fb044)

**Release New Version v0.0.1-alpha.18 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.17...v0.0.1-alpha.18)**

## v0.0.1-alpha.17 (2024-10-26)

### ✨ Features

- 修改站点主题和侧边栏配置配置 &nbsp;-&nbsp; by **chufan** [<samp>(815b9)</samp>](https://github.com/142vip/core-x/commit/815b908)
- 引入`only-allow`模块，限定使用`pnpm`命令 &nbsp;-&nbsp; by **chufan** [<samp>(8d8ac)</samp>](https://github.com/142vip/core-x/commit/8d8acac)
- 增加演示Demo展示入口，优化配置文件 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/173 [<samp>(36b56)</samp>](https://github.com/142vip/core-x/commit/36b56e3)
- 修改`turbo`缓存配置，移除`outputs`选项 &nbsp;-&nbsp; by **chufan** [<samp>(231ec)</samp>](https://github.com/142vip/core-x/commit/231ec89)
- 简化`vitepress`博客配置和类型，移除`element-plus`组件的手动导入， &nbsp;-&nbsp; by **chufan** [<samp>(767a8)</samp>](https://github.com/142vip/core-x/commit/767a8f1)
- 关闭`turbo`缓存构建 &nbsp;-&nbsp; by **chufan** [<samp>(1f25b)</samp>](https://github.com/142vip/core-x/commit/1f25b79)
- **@142vip/utils**:
  - 拓展`OPEN_SOURCE_ADDRESS`变量 &nbsp;-&nbsp; by **chufan** [<samp>(e3802)</samp>](https://github.com/142vip/core-x/commit/e380231)
  - Update deps，remove `dayjs` &nbsp;-&nbsp; by **chufan** [<samp>(84bf9)</samp>](https://github.com/142vip/core-x/commit/84bf9da)
- **@142vip/vitepress**:
  - 增加`getThemeConfig`函数导出基本配置 &nbsp;-&nbsp; by **chufan** [<samp>(d3011)</samp>](https://github.com/142vip/core-x/commit/d301148)
  - 锁定`vitepress`版本，支持模块调用 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/165 [<samp>(05feb)</samp>](https://github.com/142vip/core-x/commit/05feb26)
  - 依赖调整，`vitepress`在生产依赖中引入 &nbsp;-&nbsp; by **chufan** [<samp>(dfa44)</samp>](https://github.com/142vip/core-x/commit/dfa4435)
  - 增加自定义主题，加载`element-plus`模块，提供`getVipExtendsTheme`配置函数 &nbsp;-&nbsp; by **chufan** [<samp>(89f00)</samp>](https://github.com/142vip/core-x/commit/89f00d0)
  - 增加`types`类型导出，支持自定义主题配置优化 &nbsp;-&nbsp; by **chufan** [<samp>(1e42e)</samp>](https://github.com/142vip/core-x/commit/1e42eab)
  - 优化`defineVipExtendsTheme`参数类型，继承默认的`Theme`类型 &nbsp;-&nbsp; by **chufan** [<samp>(6dcb9)</samp>](https://github.com/142vip/core-x/commit/6dcb9a5)
  - 按需引入`element-plus`中的组件，减少打包体积 &nbsp;-&nbsp; by **chufan** [<samp>(09bef)</samp>](https://github.com/142vip/core-x/commit/09bef5e)
- **vitepress-demo**:
  - 增加`vitepress-demo`演示模块，简化`@142vip/vitepress`模块使用配置 &nbsp;-&nbsp; by **chufan** [<samp>(f6797)</samp>](https://github.com/142vip/core-x/commit/f679759)
  - 简化Demo配置，移除`element-plus`组件的手动导入 &nbsp;-&nbsp; by **chufan** [<samp>(d0770)</samp>](https://github.com/142vip/core-x/commit/d07700c)

### 🐛 Bug Fixes

- 修复`build`命令构建后`base`路径配置导致的显示异常 &nbsp;-&nbsp; by **chufan** [<samp>(ba3c7)</samp>](https://github.com/142vip/core-x/commit/ba3c73a)
- 修复导航栏配置异常 &nbsp;-&nbsp; by **chufan** [<samp>(a6be6)</samp>](https://github.com/142vip/core-x/commit/a6be6d2)

### 😏 Release Packages

- **@142vip/utils**:
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(261ff)</samp>](https://github.com/142vip/core-x/commit/261ff35)
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(72f37)</samp>](https://github.com/142vip/core-x/commit/72f3747)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(5d5b2)</samp>](https://github.com/142vip/core-x/commit/5d5b27b)
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(ef96b)</samp>](https://github.com/142vip/core-x/commit/ef96ba7)
  - Publish `v0.0.1-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(7536f)</samp>](https://github.com/142vip/core-x/commit/7536f3b)
  - Publish `v0.0.1-alpha.11` &nbsp;-&nbsp; by **chufan** [<samp>(546f8)</samp>](https://github.com/142vip/core-x/commit/546f81f)
  - Publish `v0.0.1-alpha.12` &nbsp;-&nbsp; by **chufan** [<samp>(f4873)</samp>](https://github.com/142vip/core-x/commit/f4873c3)
- **vitepress-demo**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(0b2ac)</samp>](https://github.com/142vip/core-x/commit/0b2ac8e)
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(cd3f3)</samp>](https://github.com/142vip/core-x/commit/cd3f34e)

**Release New Version v0.0.1-alpha.17 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.16...v0.0.1-alpha.17)**

## v0.0.1-alpha.16 (2024-10-09)

### ✨ Features

- 修改导航栏配置，支持环境变量`NEED_PROXY`配置`base`路径 &nbsp;-&nbsp; by **chufan** [<samp>(9ae73)</samp>](https://github.com/142vip/core-x/commit/9ae7386)
- **@142vip/utils**:
  - 新增`getDocSiteBase`方法 &nbsp;-&nbsp; by **chufan** [<samp>(171f3)</samp>](https://github.com/142vip/core-x/commit/171f32a)
- **@142vip/vuepress**:
  - 移除`getSiteBase`方法，后续采用`@142vip/utils`模块中的`getDocSiteBase`方法 &nbsp;-&nbsp; by **chufan** [<samp>(bd31e)</samp>](https://github.com/142vip/core-x/commit/bd31eac)
- **vuepress-demo**:
  - 引入`@142vip/utils`模块，调整`Demo`基本结构和主题配置 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/157 [<samp>(0bf7c)</samp>](https://github.com/142vip/core-x/commit/0bf7c90)

### 🐛 Bug Fixes

- **@142vip/vitepress**:
  - 修复表格组件显示异常，调整`css`样式导入 &nbsp;-&nbsp; by **chufan** [<samp>(a5cd6)</samp>](https://github.com/142vip/core-x/commit/a5cd696)

### 😏 Release Packages

- **@142vip/utils**:
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(b4e67)</samp>](https://github.com/142vip/core-x/commit/b4e6794)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(6f58b)</samp>](https://github.com/142vip/core-x/commit/6f58b98)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(afef6)</samp>](https://github.com/142vip/core-x/commit/afef6e1)
- **vuepress-demo**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(7211c)</samp>](https://github.com/142vip/core-x/commit/7211c25)

**Release New Version v0.0.1-alpha.16 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.15...v0.0.1-alpha.16)**

## v0.0.1-alpha.15 (2024-10-07)

### ✨ Features

- **@142vip/changelog**:
  - 移除`qs`、`kolorist`模块，使用`@142vip/utils`进行替换 &nbsp;-&nbsp; by **chufan** [<samp>(22e66)</samp>](https://github.com/142vip/core-x/commit/22e6617)
- **@142vip/utils**:
  - 引入`qs`模块，导出`vipQs`对象，支持`stringify`、`parse`方法 &nbsp;-&nbsp; by **chufan** [<samp>(007fc)</samp>](https://github.com/142vip/core-x/commit/007fc90)
  - 新增`OPEN_SOURCE`相关常量，优化结构 &nbsp;-&nbsp; by **chufan** [<samp>(30d96)</samp>](https://github.com/142vip/core-x/commit/30d9624)
- **@142vip/vuepress**:
  - 升级`vuepress`主题依赖，修复配置错误和`build`命令异常 &nbsp;-&nbsp; by **chufan** [<samp>(29328)</samp>](https://github.com/142vip/core-x/commit/293280a)
  - 增加开源博客站点的`header`配置 &nbsp;-&nbsp; by **chufan** [<samp>(a8894)</samp>](https://github.com/142vip/core-x/commit/a8894aa)
- **vuepress-demo**:
  - 增加、优化`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(77d99)</samp>](https://github.com/142vip/core-x/commit/77d99cf)
  - 升级`vuepress`模块，修改`demo`文档说明和样式 &nbsp;-&nbsp; by **chufan** [<samp>(a8635)</samp>](https://github.com/142vip/core-x/commit/a86357f)

### 🔥 Performance

- 移除`webpack`、`babel`等冗余模块，支持`build:apps`构建命令 &nbsp;-&nbsp; by **chufan** [<samp>(14824)</samp>](https://github.com/142vip/core-x/commit/14824ba)

### 🐛 Bug Fixes

- 修改`Dockerfile`的`Nginx`配置，修复构建时镜像平台异常 &nbsp;-&nbsp; by **chufan** [<samp>(2149b)</samp>](https://github.com/142vip/core-x/commit/2149bfc)
- 修复`bundle`脚本构建异常，更新`Dockerfile` &nbsp;-&nbsp; by **chufan** [<samp>(3deba)</samp>](https://github.com/142vip/core-x/commit/3deba5e)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(ee71d)</samp>](https://github.com/142vip/core-x/commit/ee71dbf)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(98174)</samp>](https://github.com/142vip/core-x/commit/98174ce)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(b0471)</samp>](https://github.com/142vip/core-x/commit/b04715b)
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(9e839)</samp>](https://github.com/142vip/core-x/commit/9e839e2)

**Release New Version v0.0.1-alpha.15 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.14...v0.0.1-alpha.15)**

## v0.0.1-alpha.14 (2024-10-05)

### ✨ Features

- 增加`nest-demo`模板应用，修改相关文档和校验配置 &nbsp;-&nbsp; by **chufan** [<samp>(92e0a)</samp>](https://github.com/142vip/core-x/commit/92e0a2f)
- 增加`bundle`脚本和`Nginx`配置，支持`Docker`构建镜像操作 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/125 [<samp>(d2ceb)</samp>](https://github.com/142vip/core-x/commit/d2ceb64)
- 增加`bundle`脚本，支持编译站点，构建`Docker`镜像 &nbsp;-&nbsp; by **chufan** [<samp>(e5ae5)</samp>](https://github.com/142vip/core-x/commit/e5ae5ad)
- 博客站点支持`base`字段拓展，优化`build`命令和流水线 &nbsp;-&nbsp; by **chufan** [<samp>(89be9)</samp>](https://github.com/142vip/core-x/commit/89be98f)
- 增加`Dockerfile`忽略文件，优化`bundle`构建流程 &nbsp;-&nbsp; by **chufan** [<samp>(d8c84)</samp>](https://github.com/142vip/core-x/commit/d8c8448)
- `pnpm`包下载源改为：`https://mirrors.tencent.com/npm/` &nbsp;-&nbsp; by **chufan** [<samp>(e4ee7)</samp>](https://github.com/142vip/core-x/commit/e4ee7ff)
- 移除Eslint相关冗余依赖，配置使用`@142vip/eslint-config`模块 &nbsp;-&nbsp; by **chufan** [<samp>(d3f83)</samp>](https://github.com/142vip/core-x/commit/d3f83d7)
- 增加`@142vip/vuepress`模块的演示示例，降低配置难度 &nbsp;-&nbsp; by **chufan** [<samp>(b8b6d)</samp>](https://github.com/142vip/core-x/commit/b8b6d52)
- 增加`git`忽略，处理`vuepress`相关依赖 &nbsp;-&nbsp; by **chufan** [<samp>(d4c40)</samp>](https://github.com/142vip/core-x/commit/d4c40ea)
- 删除`build`命令中的`--mpa`参数，关闭`MPA`模式 &nbsp;-&nbsp; by **chufan** [<samp>(bd659)</samp>](https://github.com/142vip/core-x/commit/bd659ad)
- 统一为各模块增加`exports`配置 &nbsp;-&nbsp; by **chufan** [<samp>(278e5)</samp>](https://github.com/142vip/core-x/commit/278e5a8)
- 增加`git`忽略，处理`vuepress`相关依赖 &nbsp;-&nbsp; by **chufan** [<samp>(f1bd1)</samp>](https://github.com/142vip/core-x/commit/f1bd144)
- 删除`build`命令中的`--mpa`参数，关闭`MPA`模式 &nbsp;-&nbsp; by **chufan** [<samp>(c5c9a)</samp>](https://github.com/142vip/core-x/commit/c5c9a2a)
- **@142vip/eslint-config**:
  - 基于`@antfu/eslint-config`模块，封装Eslint校验规则，支持`defineVipEslintConfig`函数配置校验。 &nbsp;-&nbsp; by **chufan** [<samp>(12f5e)</samp>](https://github.com/142vip/core-x/commit/12f5eef)
- **@142vip/fairy-cli**:
  - `release`命令改造，支持非`monorepo`仓库，`--filter`参数支持默认`[]`空数组返回 &nbsp;-&nbsp; by **chufan** [<samp>(184a8)</samp>](https://github.com/142vip/core-x/commit/184a813)
  - 移除`exec-command`命令执行器，替换为`@142vip/utils`模块 &nbsp;-&nbsp; by **chufan** [<samp>(2f29c)</samp>](https://github.com/142vip/core-x/commit/2f29c4a)
  - 拓展`changelog`命令，支持`cli`工具快速执行`npx changelog`相关命令 &nbsp;-&nbsp; by **chufan** [<samp>(81f3e)</samp>](https://github.com/142vip/core-x/commit/81f3e3e)
- **@142vip/utils**:
  - 修改`getLogInfo`函数为`getRecentGitCommit` &nbsp;-&nbsp; by **chufan** [<samp>(f7923)</samp>](https://github.com/142vip/core-x/commit/f79237b)
  - 增加`docker`相关`api`方法 &nbsp;-&nbsp; by **chufan** [<samp>(461bb)</samp>](https://github.com/142vip/core-x/commit/461bb18)
  - 优化`buildImage`方法，支持`Docker`地址导出 &nbsp;-&nbsp; by **chufan** [<samp>(8ecd1)</samp>](https://github.com/142vip/core-x/commit/8ecd17b)
  - 优化`commandStandardExecutor`执行器逻辑，增加日志 &nbsp;-&nbsp; by **chufan** [<samp>(a0bcd)</samp>](https://github.com/142vip/core-x/commit/a0bcdf3)
  - 修改docker命令执行逻辑，`push`、`delete`镜像等操作直接执行 &nbsp;-&nbsp; by **chufan** [<samp>(4fc01)</samp>](https://github.com/142vip/core-x/commit/4fc0177)
  - 修改`getRecentGitCommit`函数逻辑，只获取最近的`push`信息，包含`merge`操作 &nbsp;-&nbsp; by **chufan** [<samp>(a47e5)</samp>](https://github.com/142vip/core-x/commit/a47e559)
  - 修改buildImage核心逻辑，支持`push`、`delete`等可选参数 &nbsp;-&nbsp; by **chufan** [<samp>(d9347)</samp>](https://github.com/142vip/core-x/commit/d934732)
  - 拓展`buildImage`函数，支持`Dockerfile`中的`--target`参数，分步骤构建 &nbsp;-&nbsp; by **chufan** [<samp>(b558a)</samp>](https://github.com/142vip/core-x/commit/b558a7c)
  - 修改命令输出日志格式 &nbsp;-&nbsp; by **chufan** [<samp>(92036)</samp>](https://github.com/142vip/core-x/commit/92036b7)
  - 拓展`docker`命令，支持`createContainer`函数快速创建容器 &nbsp;-&nbsp; by **chufan** [<samp>(f67dd)</samp>](https://github.com/142vip/core-x/commit/f67dd44)
- **@142vip/vuepress**:
  - 增加`getSiteBase`函数，支持静态站点的`base`字段选取 &nbsp;-&nbsp; by **chufan** [<samp>(c3c2a)</samp>](https://github.com/142vip/core-x/commit/c3c2a77)
  - 增加一些基于`vuepress-theme-hope`主题的封装 &nbsp;-&nbsp; by **chufan** [<samp>(eb034)</samp>](https://github.com/142vip/core-x/commit/eb0341b)
- **vuepress-demo**:
  - 增加`@142vip/vuepress`模块的演示示例，降低配置难度 &nbsp;-&nbsp; by **chufan** [<samp>(748b7)</samp>](https://github.com/142vip/core-x/commit/748b7d0)

### 🔥 Performance

- 移除`sync`同步脚本 &nbsp;-&nbsp; by **chufan** [<samp>(b33ce)</samp>](https://github.com/142vip/core-x/commit/b33ce18)
- 依赖升级，格式化`CI`配置 &nbsp;-&nbsp; by **chufan** [<samp>(ee9d3)</samp>](https://github.com/142vip/core-x/commit/ee9d336)

### 🐛 Bug Fixes

- 修复`corepack`下载源在`Dockerfile`中使用异常，统一为:`https://mirrors.tencent.com/npm/` &nbsp;-&nbsp; by **chufan** [<samp>(7cdd5)</samp>](https://github.com/142vip/core-x/commit/7cdd597)
- 修复`Dockerfile`中编译`OOM`内存溢出、镜像构建超时的问题 &nbsp;-&nbsp; by **chufan** [<samp>(4f089)</samp>](https://github.com/142vip/core-x/commit/4f089e7)
- 修复`CI`流水线异常，关闭`Eslint`校验 &nbsp;-&nbsp; by **chufan** [<samp>(6c075)</samp>](https://github.com/142vip/core-x/commit/6c075ac)
- 修复首页链接异常 &nbsp;-&nbsp; by **chufan** [<samp>(3b871)</samp>](https://github.com/142vip/core-x/commit/3b8711d)
- 修复首页链接异常 &nbsp;-&nbsp; by **chufan** [<samp>(52295)</samp>](https://github.com/142vip/core-x/commit/5229540)
- **@142vip/eslint-config**:
  - 修复`lint`命令执行过慢问题，删除`eslint-plugin-format`插件格式化配置 &nbsp;-&nbsp; by **chufan** [<samp>(7c05f)</samp>](https://github.com/142vip/core-x/commit/7c05fe2)
- **@142vip/redis**:
  - 修复模块编译异常，正确引入`redis` &nbsp;-&nbsp; by **chufan** [<samp>(23cd6)</samp>](https://github.com/142vip/core-x/commit/23cd6c2)
- **@142vip/utils**:
  - 拓展`buildImage`函数功能，增加`memory`参数，支持`Docker`内存限制 &nbsp;-&nbsp; by **chufan** [<samp>(694f0)</samp>](https://github.com/142vip/core-x/commit/694f054)

### 📖 Documentation

- 文档增加`vuepress-demo`相关介绍 &nbsp;-&nbsp; by **chufan** [<samp>(dcba9)</samp>](https://github.com/142vip/core-x/commit/dcba9ae)

### 😏 Release Packages

- **@142vip/eslint-config**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(4fe9d)</samp>](https://github.com/142vip/core-x/commit/4fe9d9e)
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(5d218)</samp>](https://github.com/142vip/core-x/commit/5d21822)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.11` &nbsp;-&nbsp; by **chufan** [<samp>(22c3d)</samp>](https://github.com/142vip/core-x/commit/22c3d57)
  - Publish `v0.0.3-alpha.12` &nbsp;-&nbsp; by **chufan** [<samp>(a1acc)</samp>](https://github.com/142vip/core-x/commit/a1acc43)
  - Publish `v0.0.3-alpha.13` &nbsp;-&nbsp; by **chufan** [<samp>(26c6b)</samp>](https://github.com/142vip/core-x/commit/26c6bf6)
- **@142vip/redis**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(960b5)</samp>](https://github.com/142vip/core-x/commit/960b5b3)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(5ae56)</samp>](https://github.com/142vip/core-x/commit/5ae56f6)
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(a294e)</samp>](https://github.com/142vip/core-x/commit/a294eb6)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(46ceb)</samp>](https://github.com/142vip/core-x/commit/46cebcc)
- **@142vip/vuepress**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(a5ed3)</samp>](https://github.com/142vip/core-x/commit/a5ed363)
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(679b5)</samp>](https://github.com/142vip/core-x/commit/679b51d)
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(119f1)</samp>](https://github.com/142vip/core-x/commit/119f1ae)
- **vuepress-demo**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(5c908)</samp>](https://github.com/142vip/core-x/commit/5c908ea)

**Release New Version v0.0.1-alpha.14 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.13...v0.0.1-alpha.14)**

## v0.0.1-alpha.13 (2024-09-17)

### ✨ Features

- 移除`element-plus`相关插件依赖，由模块管理 &nbsp;-&nbsp; by **chufan** [<samp>(ba2a0)</samp>](https://github.com/142vip/core-x/commit/ba2a06e)
- `dev`命令增加`--force --strictPort`参数，开启严格端口模式 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/115 [<samp>(1447b)</samp>](https://github.com/142vip/core-x/commit/1447b75)
- 网站各子页面增加`VipBackTop`组件，支持一键返回顶部 &nbsp;-&nbsp; by **chufan** [<samp>(d52b3)</samp>](https://github.com/142vip/core-x/commit/d52b3d6)
- **@142vip/vitepress**:
  - 修改`VipBackTop`组件的边距，适配移动端 &nbsp;-&nbsp; by **chufan** [<samp>(882b1)</samp>](https://github.com/142vip/core-x/commit/882b18e)
  - 增加`unplugin-element-plus`依赖，支持组件的手动导入 &nbsp;-&nbsp; by **chufan** [<samp>(56a43)</samp>](https://github.com/142vip/core-x/commit/56a431d)

### 🔥 Performance

- 优化`scripts`脚本，`ci`命令统一`npm`配置 &nbsp;-&nbsp; by **chufan** [<samp>(fd936)</samp>](https://github.com/142vip/core-x/commit/fd93630)

### 🐛 Bug Fixes

- **@142vip/fairy-cli**:
  - 修复`release`命令提醒日志打印异常 &nbsp;-&nbsp; by **chufan** [<samp>(106be)</samp>](https://github.com/142vip/core-x/commit/106bee3)

### 📖 Documentation

- Update README &nbsp;-&nbsp; by **chufan** [<samp>(dbfbc)</samp>](https://github.com/142vip/core-x/commit/dbfbc9c)

### 😏 Release Packages

- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.10` &nbsp;-&nbsp; by **chufan** [<samp>(dee83)</samp>](https://github.com/142vip/core-x/commit/dee8326)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(acb9c)</samp>](https://github.com/142vip/core-x/commit/acb9c4a)

**Release New Version v0.0.1-alpha.13 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.12...v0.0.1-alpha.13)**

## v0.0.1-alpha.12 (2024-09-13)

### ✨ Features

- 使用`VipProjectTable`组件，优化首页显示效果，`首页-趋势`支持暗夜模式 &nbsp;-&nbsp; by **chufan** [<samp>(4e1b0)</samp>](https://github.com/142vip/core-x/commit/4e1b0d6)
- 使用`VipTeam`组件，优化首页展示 &nbsp;-&nbsp; by **chufan** [<samp>(f2e9f)</samp>](https://github.com/142vip/core-x/commit/f2e9f7a)
- 移除全局`chalk`模块，使用`VipColor`变量处理日志格式 &nbsp;-&nbsp; by **chufan** [<samp>(51156)</samp>](https://github.com/142vip/core-x/commit/5115623)
- **@142vip/fairy-cli**:
  - 移除`log-symbols`模块，优化`check`命令的日志输出 &nbsp;-&nbsp; by **chufan** [<samp>(47635)</samp>](https://github.com/142vip/core-x/commit/4763593)
  - `release`发布命令增加`--filter`可选参数，支持多次调用，用于指定模块路径 &nbsp;-&nbsp; by **chufan** [<samp>(d0cc1)</samp>](https://github.com/142vip/core-x/commit/d0cc1e7)
- **@142vip/release-version**:
  - 移除`log-symbols`模块，替换为`VipSymbols`变量 &nbsp;-&nbsp; by **chufan** [<samp>(6347b)</samp>](https://github.com/142vip/core-x/commit/6347bc5)
- **@142vip/utils**:
  - 移除`chalk`，使用`ansi-colors`模块，新增`VipColor`和`VipSymbols`常用终端日志输出变量 &nbsp;-&nbsp; by **chufan** [<samp>(55ae6)</samp>](https://github.com/142vip/core-x/commit/55ae636)
- **@142vip/vitepress**:
  - 封装`VipBackTop`组件，优化`VipProjectTable`组件显示样式 &nbsp;-&nbsp; by **chufan** [<samp>(0392e)</samp>](https://github.com/142vip/core-x/commit/0392e18)
  - 拓展项目表格和团队介绍组件封装，优化使用 &nbsp;-&nbsp; by **chufan** [<samp>(854ab)</samp>](https://github.com/142vip/core-x/commit/854ab43)
  - 修改`VipProjectTable`组件展示效果，支持`Tag`标签 &nbsp;-&nbsp; by **chufan** [<samp>(bdf7f)</samp>](https://github.com/142vip/core-x/commit/bdf7fd4)
  - 支持`oauthRepo`常量 &nbsp;-&nbsp; by **chufan** [<samp>(efe9b)</samp>](https://github.com/142vip/core-x/commit/efe9b0a)

### 🔥 Performance

- 升级全局基础依赖 &nbsp;-&nbsp; by **chufan** [<samp>(48474)</samp>](https://github.com/142vip/core-x/commit/484743e)

### 🐛 Bug Fixes

- 修复编辑路径跳转异常，支持平台超链接复用 &nbsp;-&nbsp; by **chufan** [<samp>(90830)</samp>](https://github.com/142vip/core-x/commit/908301f)
- 修复`release`命令检验模块包异常，打印错误提示信息 &nbsp;-&nbsp; by **chufan** [<samp>(b518e)</samp>](https://github.com/142vip/core-x/commit/b518e97)
- **@142vip/fairy-cli**:
  - 修复`sync`命令同步模块异常，更改同步源域名为：`https://registry-direct.npmmirror.com` &nbsp;-&nbsp; by **chufan** [<samp>(4c971)</samp>](https://github.com/142vip/core-x/commit/4c971a4)

### 😏 Release Packages

- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(e52f7)</samp>](https://github.com/142vip/core-x/commit/e52f7c2)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.9` &nbsp;-&nbsp; by **chufan** [<samp>(3a41c)</samp>](https://github.com/142vip/core-x/commit/3a41cde)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(208d3)</samp>](https://github.com/142vip/core-x/commit/208d3ad)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(a7e4b)</samp>](https://github.com/142vip/core-x/commit/a7e4b54)
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(e6d93)</samp>](https://github.com/142vip/core-x/commit/e6d93c8)
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(7aeef)</samp>](https://github.com/142vip/core-x/commit/7aeef77)

**Release New Version v0.0.1-alpha.12 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.11...v0.0.1-alpha.12)**

## v0.0.1-alpha.11 (2024-09-08)

### ✨ Features

- 删除`husky`模块，使用`simple-git-hooks`模块管理`git`提交校验 &nbsp;-&nbsp; by **chufan** [<samp>(7294b)</samp>](https://github.com/142vip/core-x/commit/7294bc8)
- 移除`@142vip/common`依赖，使用`@142vip/common`依赖，全面升级各基础模块 &nbsp;-&nbsp; by **chufan** [<samp>(202d0)</samp>](https://github.com/142vip/core-x/commit/202d0a3)
- 修复开源表格日志链接异常，菜单栏支持`emoji`表情 &nbsp;-&nbsp; by **chufan** [<samp>(33bae)</samp>](https://github.com/142vip/core-x/commit/33baef3)
- 删除`scripts`中无用脚本，简化工程文件结构，补充技术文档 &nbsp;-&nbsp; by **chufan** [<samp>(9c8df)</samp>](https://github.com/142vip/core-x/commit/9c8df5e)
- 拓展`clean`命令，支持对`dist`、`vite`、`turbo`缓存目录进行删除 &nbsp;-&nbsp; by **chufan** [<samp>(5f7c7)</samp>](https://github.com/142vip/core-x/commit/5f7c71e)
- **@142vip/fairy-cli**:
  - 将`@142vip/common`替换成`@142vip/utils`，使用`execShell`执行函数 &nbsp;-&nbsp; by **chufan** [<samp>(72a2d)</samp>](https://github.com/142vip/core-x/commit/72a2dc5)
  - 修改`lint`命令，使用异步执行器执行`eslint`校验命令 &nbsp;-&nbsp; by **chufan** [<samp>(bd87c)</samp>](https://github.com/142vip/core-x/commit/bd87c0b)
- **@142vip/release-version**:
  - 删除`@142vip/common`模块，替换成`@142vip/utils`模块 &nbsp;-&nbsp; by **chufan** [<samp>(e803c)</samp>](https://github.com/142vip/core-x/commit/e803c9b)
- **@142vip/utils**:
  - 模块新增，支持`shell`、`logger`基础功能封装，支持`@142vip/common`模块部分功能 &nbsp;-&nbsp; by **chufan** [<samp>(bd760)</samp>](https://github.com/142vip/core-x/commit/bd7606c)
  - 修复`execShell`函数执行异常，支持同步执行命令 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/94 [<samp>(b00c9)</samp>](https://github.com/142vip/core-x/commit/b00c950)
- **@142vip/vitepress**:
  - 修改模块构建配置，支持`Vue`组件编译，新增`VipContactAuthor`组件封装 &nbsp;-&nbsp; by **chufan** [<samp>(38ec9)</samp>](https://github.com/142vip/core-x/commit/38ec955)
  - 增加`@142vip`业务封装，修改编译配置，支持`getVipFooter`构建 &nbsp;-&nbsp; by **chufan** [<samp>(2d159)</samp>](https://github.com/142vip/core-x/commit/2d1595f)
  - 引入`element-plus`、`vue`等模块，封装`ProjectIntroduce`、`VipBackUp`等组件，支持表格展示页面 &nbsp;-&nbsp; by **chufan** [<samp>(f57ac)</samp>](https://github.com/142vip/core-x/commit/f57aca7)

### 🔥 Performance

- 升级`eslint-config`到`2.27.3`版本 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/93 [<samp>(87ac1)</samp>](https://github.com/142vip/core-x/commit/87ac1e2)

### 🐛 Bug Fixes

- 修复静态站点`上\下一篇`链接异常，支持切换 &nbsp;-&nbsp; by **chufan** [<samp>(ed1cc)</samp>](https://github.com/142vip/core-x/commit/ed1cc93)
- 修复`CHANGELOG`文档中版本信息显示异常 &nbsp;-&nbsp; by **chufan** [<samp>(840d8)</samp>](https://github.com/142vip/core-x/commit/840d831)

### 💅 Refactors

- 优化`CI`脚本，使用`corepack`管理`pnpm`版本 &nbsp;-&nbsp; by **chufan** [<samp>(486e1)</samp>](https://github.com/142vip/core-x/commit/486e1ad)

### 📖 Documentation

- 静态网站改造升级，基于`HomePage`组件修改首页显示 &nbsp;-&nbsp; by **chufan** [<samp>(44587)</samp>](https://github.com/142vip/core-x/commit/44587c0)
- 统一修改`npm version`标签样式，更新`README`文档 &nbsp;-&nbsp; by **chufan** [<samp>(e9749)</samp>](https://github.com/142vip/core-x/commit/e9749ee)

### 😏 Release Packages

- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(7dda8)</samp>](https://github.com/142vip/core-x/commit/7dda83c)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.8` &nbsp;-&nbsp; by **chufan** [<samp>(e8d6f)</samp>](https://github.com/142vip/core-x/commit/e8d6ffe)
- **@142vip/utils**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(dd456)</samp>](https://github.com/142vip/core-x/commit/dd4563d)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(1b0d5)</samp>](https://github.com/142vip/core-x/commit/1b0d513)

**Release New Version v0.0.1-alpha.11 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.10...v0.0.1-alpha.11)**

## v0.0.1-alpha.10 (2024-08-30)

### ✨ Features

- 静态站点增加`@142vip/axios`模块文档入口配置 &nbsp;-&nbsp; by **chufan** [<samp>(771cd)</samp>](https://github.com/142vip/core-x/commit/771cdb0)
- 优化`simple-git-hooks`流程，支持`commit`和`push`操作前进行功能预检 &nbsp;-&nbsp; by **chufan** [<samp>(9f359)</samp>](https://github.com/142vip/core-x/commit/9f35903)
- 增加`build`命令，优化CI/CD流水线处理步骤，简化`verify-commit`校验 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/81 [<samp>(60ba3)</samp>](https://github.com/142vip/core-x/commit/60ba395)
- **@142vip/fairy-cli**:
  - 新增`verifyCommit`函数，支持`git commit`信息校验 &nbsp;-&nbsp; by **chufan** [<samp>(aa29a)</samp>](https://github.com/142vip/core-x/commit/aa29ab2)
- **@142vip/vitepress**:
  - 增加`142vip`组织成员介绍，导出变量 &nbsp;-&nbsp; by **chufan** [<samp>(8f5e9)</samp>](https://github.com/142vip/core-x/commit/8f5e984)

### 🐛 Bug Fixes

- 修复`release`命令执行时触发`simple-git-hooks`钩子检验问题，拓展`scope`范围 &nbsp;-&nbsp; by **chufan** [<samp>(7b5e0)</samp>](https://github.com/142vip/core-x/commit/7b5e0ca)
- **@142vip/fairy-cli**:
  - 修复`clean`命令配置`--nuxt`参数，`.output`目录删除异常 &nbsp;-&nbsp; by **chufan** [<samp>(2e441)</samp>](https://github.com/142vip/core-x/commit/2e441e0)
- **Github Actions**:
  - 修复流水线build异常，先编译公共模块 &nbsp;-&nbsp; by **chufan** [<samp>(b9173)</samp>](https://github.com/142vip/core-x/commit/b91733a)
  - 修复流水线build异常，无法部署静态网站 &nbsp;-&nbsp; by **chufan** [<samp>(0d3a1)</samp>](https://github.com/142vip/core-x/commit/0d3a1ac)

### 📖 Documentation

- 更新各模块的`CHANGELOG`文档，优化版本更新内容 &nbsp;-&nbsp; by **chufan** [<samp>(1d7e9)</samp>](https://github.com/142vip/core-x/commit/1d7e981)
- 各模块`README`文档增加版本标记，优化静态站点内容显示 &nbsp;-&nbsp; by **chufan** [<samp>(279ce)</samp>](https://github.com/142vip/core-x/commit/279ce30)

### 😏 Release Packages

- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(3e538)</samp>](https://github.com/142vip/core-x/commit/3e538d4)
- **@142vip/vitepress**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(c4fc5)</samp>](https://github.com/142vip/core-x/commit/c4fc586)

**Release New Version v0.0.1-alpha.10 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.9...v0.0.1-alpha.10)**

## v0.0.1-alpha.9 (2024-08-24)

### ✨ Features

- 移除`@esm2cjs/execa`模块，提升`inquirer`依赖 &nbsp;-&nbsp; by **chufan** [<samp>(bdcc0)</samp>](https://github.com/142vip/core-x/commit/bdcc021)
- 移除`commit-and-tag-version`、`enquirer`模块 &nbsp;-&nbsp; by **chufan** [<samp>(48b1e)</samp>](https://github.com/142vip/core-x/commit/48b1e57)
- 统一README文档中的证书说明，支持`142vip`的MIT证书 &nbsp;-&nbsp; by **chufan** [<samp>(3cf41)</samp>](https://github.com/142vip/core-x/commit/3cf4113)
- 引入`simple-git-hooks`模块，支持`git commit`时触发钩子进行代码校验 &nbsp;-&nbsp; by **chufan** [<samp>(fcdf3)</samp>](https://github.com/142vip/core-x/commit/fcdf3c8)
- **@142vip/axios**:
  - 模块初始化，支持`method`等枚举导出 &nbsp;-&nbsp; by **chufan** [<samp>(462d6)</samp>](https://github.com/142vip/core-x/commit/462d60e)
- **@142vip/changelog**:
  - 移除`@antfu/utils`模块，采用原生ts实现函数功能 &nbsp;-&nbsp; by **chufan** [<samp>(3dcb1)</samp>](https://github.com/142vip/core-x/commit/3dcb175)
  - 移除`dayjs`模块，原生实现时间格式化 &nbsp;-&nbsp; by **chufan** [<samp>(60187)</samp>](https://github.com/142vip/core-x/commit/6018782)
- **@142vip/egg-sequelize**:
  - 搭建基本模块结构、调整代码编译、打包策略 &nbsp;-&nbsp; by **chufan** [<samp>(fed4d)</samp>](https://github.com/142vip/core-x/commit/fed4d65)
- **@142vip/fairy-cli**:
  - 移除`cnpm`模块，基于api实现，支持npm包同步到cnpm平台上 &nbsp;-&nbsp; by **chufan** [<samp>(92eaa)</samp>](https://github.com/142vip/core-x/commit/92eaa4c)
  - `release`命令增加`--vip`等参数，支持`cli`交互式选择发布的模块和版本 &nbsp;-&nbsp; by **chufan** [<samp>(d2694)</samp>](https://github.com/142vip/core-x/commit/d26941d)
  - 优化`versionBump`参数，支持提交`commit`信息和`push`远程仓库 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/64 [<samp>(a5bf5)</samp>](https://github.com/142vip/core-x/commit/a5bf5fa)
  - 修正`CHANGELOG`文档，优化`release`命令支持版本名称`markdown`显示 &nbsp;-&nbsp; by **chufan** [<samp>(77678)</samp>](https://github.com/142vip/core-x/commit/7767850)
  - 移除`inquirer`模块，`release`命令有限`check-release`逻辑，日志格式调整 &nbsp;-&nbsp; by **chufan** [<samp>(5e56c)</samp>](https://github.com/142vip/core-x/commit/5e56c42)
  - 丰富`TS`类型，增加`branch`参数，默认从`next`分支获取`commit`信息，增加`release`交互全局错误捕获 &nbsp;-&nbsp; by **chufan** [<samp>(c2793)</samp>](https://github.com/142vip/core-x/commit/c2793ad)
  - 修复`release`根模块时`tag`功能触发异常 &nbsp;-&nbsp; by **微信公众号：储凡** [<samp>(468c4)</samp>](https://github.com/142vip/core-x/commit/468c4bd)
- **@142vip/release-version**:
  - 优化`CHANGELOG`文档存储目录，基于`cwd`参数生成目录绝对路径 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/core-x/issues/63 [<samp>(dede7)</samp>](https://github.com/142vip/core-x/commit/dede731)
- **Eslint**:
  - 优化`ignores`配置，开启`json`和`markdown`校验 &nbsp;-&nbsp; by **chufan** [<samp>(61e9c)</samp>](https://github.com/142vip/core-x/commit/61e9c07)
- **Github Actions**:
  - 优化`npm release`流水线，只正对更新的`package`进行发布更新 &nbsp;-&nbsp; by **chufan** [<samp>(608ec)</samp>](https://github.com/142vip/core-x/commit/608eca2)

### 🔥 Performance

- 移除`scripts`目录下`release`脚本，`package.json`文件的`scripts`配置新增`release:check`和`release`命令 &nbsp;-&nbsp; by **chufan** [<samp>(de840)</samp>](https://github.com/142vip/core-x/commit/de84004)
- **Github Actions**:
  - 移除`lint`脚本，统一在用`package.json`中配置`link`、`lint:fix`命令 &nbsp;-&nbsp; by **微信公众号：储凡** in https://github.com/142vip/core-x/issues/62 [<samp>(05439)</samp>](https://github.com/142vip/core-x/commit/05439f0)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复子模块`CHANGELOG`文档变更记录冲突的问题 &nbsp;-&nbsp; by **chufan** [<samp>(19873)</samp>](https://github.com/142vip/core-x/commit/1987368)
- **@142vip/fairy-cli**:
  - 修复`lint`命令，支持`--fix`参数配置自动修复代码 &nbsp;-&nbsp; by **chufan** [<samp>(76472)</samp>](https://github.com/142vip/core-x/commit/7647248)

### 💅 Refactors

- **@142vip/changelog**:
  - 模块结构调整，优化工具函数的实现和调用链路 &nbsp;-&nbsp; by **chufan** [<samp>(64f1b)</samp>](https://github.com/142vip/core-x/commit/64f1bff)
- **@142vip/fairy-cli**:
  - 模块结构调整，简化导出代码和cli处理流程 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/52 [<samp>(dfac2)</samp>](https://github.com/142vip/core-x/commit/dfac2c5)

### 😏 Release Packages

- **@142vip/axios**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(f8129)</samp>](https://github.com/142vip/core-x/commit/f812918)
- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(99211)</samp>](https://github.com/142vip/core-x/commit/9921170)
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(14967)</samp>](https://github.com/142vip/core-x/commit/1496719)
- **@142vip/egg-sequelize**:
  - Publish `v0.0.1-alpha.1` &nbsp;-&nbsp; by **chufan** [<samp>(e3c83)</samp>](https://github.com/142vip/core-x/commit/e3c8393)
- **@142vip/fairy-cli**:
  - Publish `v0.0.3-alpha.2` &nbsp;-&nbsp; by **chufan** [<samp>(b5b20)</samp>](https://github.com/142vip/core-x/commit/b5b20e1)
  - Publish `v0.0.3-alpha.3` &nbsp;-&nbsp; by **chufan** [<samp>(d8d59)</samp>](https://github.com/142vip/core-x/commit/d8d59fb)
  - Publish `v0.0.3-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(81436)</samp>](https://github.com/142vip/core-x/commit/81436f5)
  - Publish `v0.0.3-alpha.5` &nbsp;-&nbsp; by **chufan** [<samp>(233b7)</samp>](https://github.com/142vip/core-x/commit/233b72f)
  - Publish `v0.0.3-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(c51c7)</samp>](https://github.com/142vip/core-x/commit/c51c7b6)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.7` &nbsp;-&nbsp; by **chufan** [<samp>(269a8)</samp>](https://github.com/142vip/core-x/commit/269a8f7)

**Release New Version v0.0.1-alpha.9 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.8...v0.0.1-alpha.9)**

## v0.0.1-alpha.8 (2024-08-07)

### ✨ Features

- `Packages`中的各模块增加`homepage`等信息 &nbsp;-&nbsp; by **chufan** [<samp>(b0df1)</samp>](https://github.com/142vip/core-x/commit/b0df105)
- **@142vip/changelog**:
  - 修改默认配置，`CHANGELOG`文档支持`release`类型提交 &nbsp;-&nbsp; by **chufan** [<samp>(29f00)</samp>](https://github.com/142vip/core-x/commit/29f00d1)
- **Github Actions**:
  - 新增`release`流水线，自动发布到`npm`平台 &nbsp;-&nbsp; by **chufan** [<samp>(7a75c)</samp>](https://github.com/142vip/core-x/commit/7a75cf9)

### 🔥 Performance

- **@142vip/release-version**:
  - 修复一些语法问题，使用更好的代码风格 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/44 [<samp>(fc7de)</samp>](https://github.com/142vip/core-x/commit/fc7defc)

### 🐛 Bug Fixes

- **Github Actions**:
  - 修复`release`发布异常，支持自动发布`npm`包 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/45 [<samp>(d4263)</samp>](https://github.com/142vip/core-x/commit/d426349)

### 💅 Refactors

- **@142vip/changelog**:
  - 结构调整，移除`cac`等模块，替换为`commander`模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/47 [<samp>(a828b)</samp>](https://github.com/142vip/core-x/commit/a828b4c)

### 📖 Documentation

- 优化目录结构，搜索功能接入`algolia`平台 &nbsp;-&nbsp; by **chufan** [<samp>(234a2)</samp>](https://github.com/142vip/core-x/commit/234a2da)

### 😏 Release Packages

- **@142vip/changelog**:
  - Publish `v0.0.1-alpha.4` &nbsp;-&nbsp; by **chufan** [<samp>(4fc81)</samp>](https://github.com/142vip/core-x/commit/4fc81e2)
- **@142vip/release-version**:
  - Publish `v0.0.1-alpha.6` &nbsp;-&nbsp; by **chufan** [<samp>(70953)</samp>](https://github.com/142vip/core-x/commit/7095387)

**Release New Version v0.0.1-alpha.8 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.7...v0.0.1-alpha.8)**

## v0.0.1-alpha.7 (2024-08-03)

### ✨ Features

- 优化`release`脚本，支持子模块版本发布 &nbsp;-&nbsp; by **chufan** [<samp>(3d721)</samp>](https://github.com/142vip/core-x/commit/3d721c5)
- 移除`lerna-lite`模块，修改对应的`version`和`publish`配置 &nbsp;-&nbsp; by **chufan** [<samp>(5db2a)</samp>](https://github.com/142vip/core-x/commit/5db2a78)
- 删除`lerna`配置和依赖，使用`pnpm exec`替代模块命令执行 &nbsp;-&nbsp; by **chufan** [<samp>(47329)</samp>](https://github.com/142vip/core-x/commit/473294a)
- **@142vip/changelog**:
  - 支持`monorepo`模式下，基于`scopeName`参数生成子模块的`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(cd7af)</samp>](https://github.com/142vip/core-x/commit/cd7afb1)
- **@142vip/release-version**:
  - 新增`scopeName`可选参数，支持在`Monorepo`模式下发布子模块版本、更新`CHANGELOG`文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/39 [<samp>(9f183)</samp>](https://github.com/142vip/core-x/commit/9f18339)

**Release New Version v0.0.1-alpha.7 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.6...v0.0.1-alpha.7)**

## v0.0.1-alpha.6 (2024-08-02)

### ✨ Features

- `Packages`下的模块统一新增publishConfig配置 &nbsp;-&nbsp; by **chufan** [<samp>(47217)</samp>](https://github.com/142vip/core-x/commit/47217d2)
- 移除`changelogPreset`配置，支持`bumpx`的发布流程 &nbsp;-&nbsp; by **chufan** [<samp>(01a66)</samp>](https://github.com/142vip/core-x/commit/01a66d9)
- 各模块增加`files`配置，限定`npm`包发布文件 &nbsp;-&nbsp; by **chufan** [<samp>(4edbe)</samp>](https://github.com/142vip/core-x/commit/4edbe15)
- 修改`npmrc`配置，支持`pnpm publish`发布多模块时预检 &nbsp;-&nbsp; by **chufan** [<samp>(0ca59)</samp>](https://github.com/142vip/core-x/commit/0ca5911)
- **@142vip/fairy-cli**:
  - 新增`sync`命令，支持`npm`包同步到`cnpm`仓库 &nbsp;-&nbsp; by **微信公众号：储凡** in https://github.com/142vip/core-x/issues/37 [<samp>(9509e)</samp>](https://github.com/142vip/core-x/commit/9509eac)
- **@142vip/release-version**:
  - 移除`@jsdevtools/ez-spawn`模块，使用`execShell`函数执行命令 &nbsp;-&nbsp; by **chufan** [<samp>(6c572)</samp>](https://github.com/142vip/core-x/commit/6c57236)

### 🔥 Performance

- 升级`pnpm`版本到`9.6.0`，支持`Node.js`版本`18.x` &nbsp;-&nbsp; by **chufan** [<samp>(e48a8)</samp>](https://github.com/142vip/core-x/commit/e48a80a)
- **@142vip/fairy-cli**:
  - 升级代码模块的引入 &nbsp;-&nbsp; by **chufan** [<samp>(fe950)</samp>](https://github.com/142vip/core-x/commit/fe950b6)

### 🐛 Bug Fixes

- **@142vip/release-version**:
  - 修复`commit`和`tag`操作异常 &nbsp;-&nbsp; by **chufan** [<samp>(69f3b)</samp>](https://github.com/142vip/core-x/commit/69f3b1e)

**Release New Version v0.0.1-alpha.6 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.5...v0.0.1-alpha.6)**

## v0.0.1-alpha.5 (2024-07-26)

### ✨ Features

- 在`monorepo`配置中移除`docs`项目，静态文档作为根目录处理 &nbsp;-&nbsp; by **chufan** [<samp>(31060)</samp>](https://github.com/142vip/core-x/commit/3106033)
- 新增`issues`和`pr`配置，更新文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/30 [<samp>(87efa)</samp>](https://github.com/142vip/core-x/commit/87efadc)
- **@142vip/fairy-cli**:
  - 拓展`cli`工具，支持`install`、`login`等命令 &nbsp;-&nbsp; by **chufan** [<samp>(798ff)</samp>](https://github.com/142vip/core-x/commit/798ff87)
  - 移除`unbuild`等重复依赖，复用根目录依赖 &nbsp;-&nbsp; by **chufan** [<samp>(92eb3)</samp>](https://github.com/142vip/core-x/commit/92eb3ea)

### 🔥 Performance

- 删除`script`冗余脚本，优化`sync`脚本逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(3c18c)</samp>](https://github.com/142vip/core-x/commit/3c18ced)
- 移除`docker`构建相关配置和忽略文件 &nbsp;-&nbsp; by **chufan** [<samp>(0257d)</samp>](https://github.com/142vip/core-x/commit/0257d4c)
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

- 关闭`markdown`格式校验，忽略`antfu/no-import-dist`校验 &nbsp;-&nbsp; by **chufan** [<samp>(43552)</samp>](https://github.com/142vip/core-x/commit/43552da)
- 移除`markdown-cli`模块，使用`eslint`校验文档格式 &nbsp;-&nbsp; by **chufan** [<samp>(938ab)</samp>](https://github.com/142vip/core-x/commit/938ab79)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复预发布标签验证异常导致`CI`执行失败 &nbsp;-&nbsp; by **chufan** [<samp>(cbe8d)</samp>](https://github.com/142vip/core-x/commit/cbe8df1)

### 💅 Refactors

- **@142vip/fairy-cli**:
  - 调整模块代码结构，易于维护、补充文档 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/core-x/issues/18 [<samp>(1d61d)</samp>](https://github.com/142vip/core-x/commit/1d61d30)

### 📖 Documentation

- 更新静态网站，新增团队成员和一些功能说明 &nbsp;-&nbsp; by **chufan** [<samp>(5baf4)</samp>](https://github.com/142vip/core-x/commit/5baf4a4)

**Release New Version v0.0.1-alpha.4 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.3...v0.0.1-alpha.4)**

## v0.0.1-alpha.3 (2024-07-24)

### ✨ Features

- `Markdown`文件校验忽略C`HANGELOG` &nbsp;-&nbsp; by **chufan** [<samp>(3cbce)</samp>](https://github.com/142vip/core-x/commit/3cbce8b)

### 🐛 Bug Fixes

- **@142vip/changelog**:
  - 修复`scope`信息存在时，单条`commit`信息分类打印异常 &nbsp;-&nbsp; by **chufan** [<samp>(1c8c5)</samp>](https://github.com/142vip/core-x/commit/1c8c544)
  - 新增`defineChangelogDefaultConfig`函数，支持`changelog`关键字配置文件 &nbsp;-&nbsp; by **chufan** [<samp>(1f25d)</samp>](https://github.com/142vip/core-x/commit/1f25da0)
  - 新增`scopeName`参数，支持`monorepo`的模块生成`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(14ca6)</samp>](https://github.com/142vip/core-x/commit/14ca631)

**Release New Version v0.0.1-alpha.3 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.2...v0.0.1-alpha.3)**

## v0.0.1-alpha.2 (2024-07-24)

### ✨ Features

- 支持自动化`Release`流程，发布新版本 &nbsp;-&nbsp; by **chufan** [<samp>(79bb9)</samp>](https://github.com/142vip/core-x/commit/79bb926)
- **@142vip/release-version**:
  - 使用`execShell`函数 &nbsp;-&nbsp; by **chufan** [<samp>(8f8d7)</samp>](https://github.com/142vip/core-x/commit/8f8d793)

**Release New Version v0.0.1-alpha.2 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.1...v0.0.1-alpha.2)**

## v0.0.1-alpha.1 (2024-07-24)

### ✨ Features

- 删除`clean`脚本，支持脚手架实现删除 &nbsp;-&nbsp; by **chufan** [<samp>(6b76d)</samp>](https://github.com/142vip/core-x/commit/6b76dae)
- 增加各模块配置，支持`build`命令 &nbsp;-&nbsp; by **chufan** [<samp>(2f6d3)</samp>](https://github.com/142vip/core-x/commit/2f6d3b5)
- 新增`docs`文档，静态页面搭建 &nbsp;-&nbsp; by **chufan** [<samp>(6e84f)</samp>](https://github.com/142vip/core-x/commit/6e84fd1)
- 插件相关文档更新，丰富配置 &nbsp;-&nbsp; by **chufan** [<samp>(48bdf)</samp>](https://github.com/142vip/core-x/commit/48bdfe2)
- 依赖更新，支持`docs`项目管理，配置.vite忽略 &nbsp;-&nbsp; by **chufan** [<samp>(49851)</samp>](https://github.com/142vip/core-x/commit/49851de)
- 官方文档支持`CI`自动化部署 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/11> [<samp>(5a786)</samp>](https://github.com/142vip/core-x/commit/5a786d3)
- 文档网站内容更新，优化模块包 &nbsp;-&nbsp; by **chufan** [<samp>(80903)</samp>](https://github.com/142vip/core-x/commit/80903ea)
- **@142vip/changelog**:
  - 支持自定义版本名称 &nbsp;-&nbsp; by **chufan** [<samp>(e062c)</samp>](https://github.com/142vip/core-x/commit/e062c06)
- **@142vip/fairy-cli**:
  - 搭建基本结构，增加部分逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(44f43)</samp>](https://github.com/142vip/core-x/commit/44f43f8)
  - 增加`clean`命令，支持在当前目录下指定删除 &nbsp;-&nbsp; by **chufan** [<samp>(be939)</samp>](https://github.com/142vip/core-x/commit/be939b2)
  - 支持`turbo`可选参数，删除`turbo`构建目录 &nbsp;-&nbsp; by **chufan** [<samp>(7ba7b)</samp>](https://github.com/142vip/core-x/commit/7ba7be9)
  - 支持`vite`缓存目录删除，增加`--vite`参数 &nbsp;-&nbsp; by **chufan** [<samp>(0fb42)</samp>](https://github.com/142vip/core-x/commit/0fb42bb)
  - 支持原生`exec`命令 &nbsp;-&nbsp; by **142vip.cn** in <https://github.com/142vip/core-x/issues/8> [<samp>(2e296)</samp>](https://github.com/142vip/core-x/commit/2e29629)
  - 支持`turbo`命令，简化`dev`、`build`的使用 &nbsp;-&nbsp; by **chufan** [<samp>(bad23)</samp>](https://github.com/142vip/core-x/commit/bad23ce)
  - 模块包内增加`turbo`依赖，删除全局turbo依赖 &nbsp;-&nbsp; by **chufan** [<samp>(a36b4)</samp>](https://github.com/142vip/core-x/commit/a36b40b)
- **@142vip/release-version**:
  - 搭建基础框架，新增部分功能 &nbsp;-&nbsp; by **chufan** [<samp>(29346)</samp>](https://github.com/142vip/core-x/commit/2934667)
  - 支持`bumpx`多种配置文件格式 &nbsp;-&nbsp; by **chufan** [<samp>(16a55)</samp>](https://github.com/142vip/core-x/commit/16a5540)
- **@142vip/vitepress**:
  - 新增组件，支持`i18n`和基础配置 &nbsp;-&nbsp; by **chufan** [<samp>(770fd)</samp>](https://github.com/142vip/core-x/commit/770fddf)
- **changelog**:
  - 修改`md`文案 &nbsp;-&nbsp; by **chufan** [<samp>(a2793)</samp>](https://github.com/142vip/core-x/commit/a2793cf)
  - 测`scope` &nbsp;-&nbsp; by **chufan** [<samp>(81283)</samp>](https://github.com/142vip/core-x/commit/8128340)
  - 支持多模块生成日志文档 &nbsp;-&nbsp; by **chufan** [<samp>(f4e42)</samp>](https://github.com/142vip/core-x/commit/f4e420e)

### 🔥 Performance

- 升级依赖和脚本 &nbsp;-&nbsp; by **chufan** [<samp>(eba2b)</samp>](https://github.com/142vip/core-x/commit/eba2b91)

### 🐛 Bug Fixes

- 修复官方文档部署异常，新增部分链接 &nbsp;-&nbsp; by **chufan** [<samp>(46ab1)</samp>](https://github.com/142vip/core-x/commit/46ab19a)

### 💅 Refactors

- **@142vip/release-version**:
  - 结构与编码风格优化，配置`bumpx`命令 &nbsp;-&nbsp; by **chufan** [<samp>(3680d)</samp>](https://github.com/142vip/core-x/commit/3680d42)
  - 结构调整，简化代码，优化逻辑流程 &nbsp;-&nbsp; by **chufan** [<samp>(d61f4)</samp>](https://github.com/142vip/core-x/commit/d61f4c7)

### 📖 Documentation

- 修改文档模块，支持项目包启动 &nbsp;-&nbsp; by **chufan** [<samp>(e439a)</samp>](https://github.com/142vip/core-x/commit/e439a04)
- **@142vip/fairy-cli**: 
  - 更新基础文档 &nbsp;-&nbsp; by **chufan** [<samp>(96155)</samp>](https://github.com/142vip/core-x/commit/96155dc)

**Release New Version v0.0.1-alpha.1 [👉 View Changes On GitHub](https://github.com/142vip/core-x/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)**
