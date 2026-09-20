# @142vip/_example

[![NPM version](https://img.shields.io/npm/v/@142vip/_example?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/_example)

新建 `@142vip/*` 包的最小脚手架（`private: true`，不发布 npm）。

## 安装

仓库内使用，不安装到 npm。本地验证：

```shell
cd packages/_example && pnpm build && pnpm typecheck
```

## 功能

- [x] `unbuild` 双格式（`.mjs` + `.cjs`）骨架
- [x] `exports` 与 `src/core` 目录约定
- [x] 示例导出 `createExampleMessage`
- [x] 由 `./scripts/npm-pkg` 复制创建新包

## 配置

无

## 使用

```ts
import { createExampleMessage } from '@142vip/_example'

createExampleMessage('world') // => 'Hello from @142vip/_example: world'
```

新建包：

```shell
./scripts/npm-pkg <包目录名>
```

## 升级

无（private，不经 npm 发布）

## 参考

- [core-x 仓库](https://github.com/142vip/core-x)
- [unbuild](https://github.com/unjs/unbuild)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
