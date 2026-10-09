# @142vip/utils

[![NPM version](https://img.shields.io/npm/v/@142vip/utils?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/utils)

通用型基础工具集合，对常用模块的二次集成。

## 安装

```shell
# npm
npm install @142vip/utils

# pnpm
pnpm add @142vip/utils
```

## 功能

- Node：`VipNodeJS`、`VipGit`、`VipDocker`、`VipExecutor`、`VipMonorepo`、`VipNpm`、`VipPackageJSON`
- 封装：`vipDayjs`、`vipLodash`、`VipSemver`、`VipCommander`、`vipConfig`、`VipInquirer`（Ctrl+C 一次即结束整段交互）
- `@142vip/utils/enums`：`HttpStatus`、`TimeDurationMs`、`HttpMethod`、`ProcessExitCodeEnum`
- 浏览器与 Node 使用同一句 `import … from '@142vip/utils'`；打包器命中 `exports.browser` 时加载不含 Node API 的构建
- `@142vip/utils/node`：Node 专用入口

## 配置

`vipConfig.loadCliConfig(name, defaults)` 按模块名走 cosmiconfig（如 `changelog`、`commit-linter`、`releasex`）。`vipConfig.loadConfigAtPath(name, filepath)` 供 `fa lint -f` / `fa commit -f` 等显式路径加载。

## 使用

```ts
import { vipDayjs, VipGit, vipLodash, vipLogger } from '@142vip/utils'
import { HttpStatus, TimeDurationMs } from '@142vip/utils/enums'

vipDayjs.formatCurrentDateToYMD()
vipLodash.compactMap([1, 0, 2], n => n || undefined)
VipGit.parseCommitMsg('feat(utils): 示例')
vipLogger.log('ok')

if (code === HttpStatus.OK) {
  // …
}
```

浏览器项目同样写 `@142vip/utils`。Vite 等打包器会按 `exports.browser` 解析到不含 Node API 的构建，`vipDayjs`、`vipLodash`、`vipNanoId`、`DateFormatTemplate`、`TimeDurationMs` 都从这里导出。

CLI：

```ts
import { VipCommander } from '@142vip/utils'

const program = new VipCommander('my-cli', '1.0.0', '描述')
program.init({ summary: '...' }).parse(process.argv)
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/utils
```

## 参考

- [@142vip/utils](https://www.npmjs.com/package/@142vip/utils)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
