# @142vip/copyright

[![NPM version](https://img.shields.io/npm/v/@142vip/copyright?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/copyright)

## 安装

```shell
# 安装
pnpm i @142vip/copyright
```

## 使用

```ts
import { VipCopyright } from '@142vip/copyright'

// 快速生成
await VipCopyright.quickGenerateDocx({
  copyrightTitle: 'AI大模型平台',
  copyrightVersion: 'V1.0',
  sourceCodeDir: './',
  fileType: 'ts',
})

// 标准用法
const vipCopyright = new VipCopyright(copyrightTitle, copyrightVersion, {
  logger: true,
})

// 生成源代码文档
await vipCopyright.generateDocx('./', 'ts')
```

## 参考资料

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
