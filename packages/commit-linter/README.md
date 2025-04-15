# @142vip/commit-linter

[![NPM version](https://img.shields.io/npm/v/@142vip/commit-linter?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/commit-linter)

Git Commit信息校验工具，统一团队提交规范

## 安装

```shell
# 安装
pnpm i @142vip/commit-linter
```

## 使用


```ts
const { type, scope, subject, commit } = commitLiner({
  // scopes 为可选参数
  scopes: ['release'],
})


// 配置
/**
 * Git Commit信息校验参数
 */
export interface GitCommitLinterOptions {
  /**
   * Git Commit支持的Type列表，默认支持：
   */
  types?: string[]
  /**
   * Git Commit支持的Scope列表
   */
  scopes?: string[]
}
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
