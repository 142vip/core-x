# @142vip/utils

[![NPM version](https://img.shields.io/npm/v/@142vip/utils?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/utils)

通用型基础工具集合，对常用模块的二次集成

## 安装

```shell
# npm
npm install @142vip/utils -D
# pnpm
pnpm i @142vip/utils
```

## 说明

`@142vip/utils` 同时提供 Node 服务端和浏览器客户端可消费的工具能力。

- 默认从 `@142vip/utils` 导入时：
  浏览器构建工具会优先命中 browser-safe 导出，避免把 `node:fs`、`child_process` 等 Node 运行时能力打进前端包。
- Node 运行时从 `@142vip/utils` 导入时：
  仍然可以拿到完整能力，兼容现有服务端用法。
- 如果业务需要显式约束运行时：
  可以使用 `@142vip/utils/browser` 或 `@142vip/utils/node`。

## 使用

### 浏览器 / 通用场景

适合浏览器、SSR 前端、同构代码中直接使用的能力，优先从根入口导入即可：

```ts
import { vipDayjs, vipDocSite, vipQs, VipSemver } from '@142vip/utils'

const version = VipSemver.valid('1.2.3')
const query = vipQs.stringify({ page: 1, size: 10 })
const date = vipDayjs().format('YYYY-MM-DD')
const base = vipDocSite.getBase('core-x')

console.log(version, query, date, base)
```

当前浏览器安全导出的能力主要包括：

- `VipColor`
- `VipConsole`、`vipLogger`
- `VipDayjs`、`vipDayjs`
- `VipSemver`
- `VipNanoId`、`vipNanoId`
- `VipQs`、`vipQs`
- `VipYaml`
- `vipDataTransform`
- `vipLodash`
- `VipDocSite`、`vipDocSite`
- `enums` 目录下的枚举与类型

### Node 服务端场景

Node 服务端可以继续直接使用根入口，保留现有完整能力：

```ts
import { VipExecutor, VipInquirer, VipPackageJSON } from '@142vip/utils'

async function bootstrap() {
  const packageJSON = VipPackageJSON.getPackageJSON()
  console.log(packageJSON.name)

  const { stdout } = await VipExecutor.execCommand('node -v')
  console.log(stdout)

  const result = await VipInquirer.promptCheckBox(['dev', 'test', 'prod'])
  console.log(result)
}

void bootstrap()
```

下面这些能力依赖 Node 运行时，不适合浏览器直接引入：

- `VipExecutor`
- `VipPackageJSON`
- `VipNodeJS`
- `VipDocker`
- `VipGit`
- `VipMonorepo`
- `VipNpm`
- `VipInquirer`
- `VipJSON`
- `VipConfig`
- `VipCommander`

### 显式指定入口

如果项目本身是复杂 monorepo、SSR 或自定义构建链路，建议按运行时显式导入：

```ts
import { vipDocSite, VipSemver } from '@142vip/utils/browser'
import { VipExecutor, VipPackageJSON } from '@142vip/utils/node'
```

这样可以减少构建工具对条件导出的差异处理，导入语义也更明确。

## 升级说明

当前版本对导出结构做了运行时分流，但保持了原有 Node 场景的根入口兼容：

- 已有 Node 服务端代码通常不需要改动。
- 浏览器客户端如果之前因为 `@142vip/utils` 根入口触发 Node 内置模块报错，现在可以直接继续使用根入口。
- 如果业务代码强依赖特定运行时，推荐改成 `@142vip/utils/browser` 或 `@142vip/utils/node`，让依赖边界更清晰。

## 参考

- [inquirer](https://www.npmjs.com/package/inquirer)
- [semver](https://www.npmjs.com/package/semver)
- [qs](https://www.npmjs.com/package/qs)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
