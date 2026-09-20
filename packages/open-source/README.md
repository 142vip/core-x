# @142vip/open-source

[![NPM version](https://img.shields.io/npm/v/@142vip/open-source?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/open-source)

开源相关的常量、枚举、变量等汇总。

## 安装

```shell
# npm
npm install @142vip/open-source

# pnpm
pnpm add @142vip/open-source
```

## 功能

- [x] `OPEN_SOURCE_ADDRESS` 枚举：仓库、主页、域名、Docker、备案等地址常量
- [x] `OPEN_SOURCE_AUTHOR` 作者信息对象
- [x] `VipAuthorInfo` 类型

## 配置

无

## 使用

```ts
import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'

console.log(OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X)
console.log(OPEN_SOURCE_AUTHOR.name)
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/open-source
```

## 参考

- [@142vip/open-source](https://www.npmjs.com/package/@142vip/open-source)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
