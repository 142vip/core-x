# @142vip/commit-linter

[![NPM version](https://img.shields.io/npm/v/@142vip/commit-linter?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/commit-linter)

Git Commit信息校验工具，统一团队提交规范

## 安装

```shell
# 安装
pnpm i @142vip/commit-linter -D
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

## 最佳实践

创建`verify-commit.ts`文件，添加如下代码：

```ts
import { commitLiner } from '@142vip/commit-linter'
import { VipColor, VipConsole, vipLogger } from '@142vip/utils'

/**
 * 验证Git Commit信息
 */
async function verifyCommitMain(): Promise<void> {
  const { type, scope, subject, commit } = commitLiner()

  // 提交符合规范，打印相关信息
  VipConsole.log(`type: ${type}, scope: ${scope}, subject: ${subject}`)
  vipLogger.logByBlank(`${VipColor.greenBright('Git Commit: ')} ${VipColor.green(commit)}`)
}

void verifyCommitMain()
```

修改`package.json`文件，配置`check:commit`命令，添加如下代码：

```json5
{
  "scripts": {
    "check:commit": "npx node --loader ts-node/esm --no-warnings scripts/core/verify-commit.ts"
  }
}
```

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
