# @142vip/open-source

技术说明。不随 npm 发布。

## 定位

集中维护 142vip 生态的开源地址、作者信息与站点常量，供 `@142vip/utils`、根文档站 `.vitepress/`、各包 README 链接引用，避免魔法字符串散落。

## 功能

### 子路径

- `@142vip/open-source`：主入口（`src/index.ts` → `src/constants.ts`）

### 导出符号

- `OPEN_SOURCE_ADDRESS`：字符串枚举，见下文完整成员列表
- `OPEN_SOURCE_AUTHOR`：`VipAuthorInfo` 常量对象
- `VipAuthorInfo`：作者信息接口

### `VipAuthorInfo` 字段

- `name: string`
- `email: string`
- `url: string`
- `homePage: string`
- `github: string`
- `githubVip: string`
- `gitee: string`

### `OPEN_SOURCE_AUTHOR` 字段来源

- `name` ← `OPEN_SOURCE_ADDRESS.AUTHOR_NAME`
- `email` ← `OPEN_SOURCE_ADDRESS.AUTHOR_EMAIL`
- `url` ← `OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP`
- `homePage` ← `OPEN_SOURCE_ADDRESS.HOME_PAGE_DOMAIN_VIP`
- `github` ← `OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_MMDAPL`
- `githubVip` ← `OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_VIP`
- `gitee` ← `OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_VIP`

### `OPEN_SOURCE_ADDRESS` 完整成员

**作者**

- `AUTHOR_NAME = '微信公众号：储凡'`
- `AUTHOR_EMAIL = 'fairy_vip@2925.com'`

**GitHub 仓库**

- `GITHUB_REPO_408 = 'https://github.com/142vip/408CSFamily'`
- `GITHUB_REPO_JSC = 'https://github.com/142vip/JavaScriptCollection'`
- `GITHUB_REPO_CORE_X = 'https://github.com/142vip/core-x'`
- `GITHUB_REPO_OAUTH = 'https://github.com/142vip/142vip-oauth'`
- `GITHUB_REPO_CDN_SERVICE = 'https://github.com/142vip/cdn_service'`

**Gitee 仓库**

- `GITEE_REPO_408 = 'https://gitee.com/chufan443/408CSFamily'`
- `GITEE_REPO_JSC = 'https://gitee.com/chufan443/JavaScriptCollection'`
- `GITEE_REPO_CORE_X = 'https://gitee.com/chufan443/core-x'`

**Docker**

- `DOCKER_ALIYUNCS_VIP = 'registry.cn-hangzhou.aliyuncs.com/142vip'`（镜像名格式见源码注释：`${VipDockerAddress}/项目代号:${pkg.name}-${pkg.version}`）
- `DOCKER_NETWORK_NAME = 'service_env_net'`
- `DOCKER_NETWORK_SUBNET = '172.30.0.0/24'`
- `DOCKER_NETWORK_GATEWAY = '172.30.0.1'`

**组织**

- `GITHUB_ORGANIZATION_NAME = '142vip'`

**GitHub 个人主页**

- `HOME_PAGE_GITHUB_VIP = 'https://github.com/142vip'`
- `HOME_PAGE_GITHUB_MMDAPL = 'https://github.com/mmdapl'`
- `HOME_PAGE_GITHUB_CHU_FAN = 'https://github.com/chufan443'`
- `HOME_PAGE_GITHUB_LIR0015 = 'https://github.com/lir0015'`

**Gitee 个人主页**

- `HOME_PAGE_GITEE_MMDAPL = 'https://gitee.com/mmdapl'`
- `HOME_PAGE_GITEE_VIP = 'https://gitee.com/chufan443'`

**npm**

- `HOME_PAGE_NPM_MMDAPL = 'https://www.npmjs.com/~mmdapl'`

**自媒体**

- `HOME_PAGE_BILIBILI = 'https://space.bilibili.com/350937042'`
- `HOME_PAGE_CSDN = 'https://blog.csdn.net/Mmdapl'`
- `HOME_PAGE_JUE_JIN = 'https://juejin.im/user/448256476724807'`

**域名**

- `HOME_PAGE_DOMAIN_VIP = 'https://142vip.cn'`
- `HOME_PAGE_DOMAIN_408 = 'https://408.142vip.cn'`
- `HOME_PAGE_DOMAIN_JSC = 'https://code.142vip.cn'`

**许可证链接**

- `LICENCE_GITHUB = 'https://github.com/142vip/LICENSE'`
- `LICENCE_CORE_X = 'https://github.com/142vip/core-x/blob/main/LICENSE'`
- `LICENCE_OAUTH = 'https://github.com/142vip/142vip-oauth/blob/main/LICENSE'`

**备案与统计**

- `BAIDU_STATISTICS_URL = 'https://tongji.baidu.com/web/welcome/login'`
- `BAIDU_STATISTICS_NAME = '百度统计'`
- `BEI_AN_NAME = '鄂ICP备17025193号-1'`
- `BEI_AN_URL = 'https://beian.miit.gov.cn/#/Integrated/index'`

**文档站部署地址**

- `SITE_DEPLOY_CDN_SERVICE_GITHUB = 'https://142vip.github.io/cdn_service'`
- `SITE_DEPLOY_CORE_X_GITHUB = 'https://142vip.github.io/core-x'`
- `SITE_DEPLOY_CORE_X_VERCEL = 'https://pkg-x.vercel.app'`
- `SITE_DEPLOY_CORE_X_NETLIFY = 'https://pkg-x.netlify.app'`
- `SITE_DEPLOY_JavaScriptCollection_GITHUB = 'https://142vip.github.io/JavaScriptCollection'`
- `SITE_DEPLOY_JavaScriptCollection_VERCEL = 'https://js-collection.netlify.app'`
- `SITE_DEPLOY_JavaScriptCollection_NETLIFY = 'https://js-collection.vercel.app'`
- `SITE_DEPLOY_408CS_FAMILY_GITHUB = 'https://142vip.github.io/408CSFamily'`
- `SITE_DEPLOY_408CS_FAMILY_VERCEL = 'https://408-family.netlify.app'`
- `SITE_DEPLOY_408CS_FAMILY_NETLIFY = 'https://408-family.vercel.app'`

## 配置

无

## 最佳实践

- 新增对外链接时在本包枚举中维护，不在业务代码硬编码 URL
- 常量只在定义包内维护，**不跨包 re-export**
- 与文档站、根 README 链接保持一致时以本枚举为真源
- 枚举成员命名保持 `HOME_PAGE_*` / `GITHUB_REPO_*` 前缀分组
- Docker 镜像名格式见 `DOCKER_ALIYUNCS_VIP` 源码注释

## 构建

`unbuild` → `cd packages/open-source && pnpm build`

## 验证

```shell
cd packages/open-source && pnpm build && pnpm typecheck
```

## 演示

无
