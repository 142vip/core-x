# @142vip/copyright

[![NPM version](https://img.shields.io/npm/v/@142vip/copyright?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/copyright)

软著工具包，用于生成软著申请的文件材料。

## 安装

```shell
# npm
npm install @142vip/copyright

# pnpm
pnpm add @142vip/copyright
```

## 功能

- [x] `VipCopyright` 扫描源码目录生成 docx
- [x] 输出前 30 页、后 30 页、连续 60 页源代码文档
- [x] `CopyrightFileType` 多语言扩展名支持
- [x] `quickGenerateDocx` 一行调用

## 配置

`CopyrightOptions`（可选）：

| 字段 | 默认 | 说明 |
|------|------|------|
| `maxLineCountInPage` | `50` | 每页最大代码行数 |
| `maxScanSourceLineCount` | `2000` | 扫描最大行数 |
| `logger` | `false` | 终端打印路径与统计 |

软件名称须以「平台」或「系统」结尾；版本号须以 `V` 开头（如 `V1.0`）。

## 使用

```ts
import { CopyrightFileType, VipCopyright } from '@142vip/copyright'

await VipCopyright.quickGenerateDocx({
  copyrightTitle: '示例业务平台',
  copyrightVersion: 'V1.0',
  sourceCodeDir: './src',
  fileType: CopyrightFileType.TYPESCRIPT,
})
```

或实例化：

```ts
const gen = new VipCopyright('示例业务平台', 'V1.0', { logger: true })
await gen.generateDocx('./src', CopyrightFileType.TYPESCRIPT)
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/copyright
```

## 参考

- [@142vip/copyright](https://www.npmjs.com/package/@142vip/copyright)
- [中国版权保护中心](https://www.ccopyright.com.cn/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
