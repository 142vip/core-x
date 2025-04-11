# @142vip/copyright

[![NPM version](https://img.shields.io/npm/v/@142vip/copyright?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/copyright)

软著工具包，用于申请软件著作权的前后30页连续源代码文档。

## 安装

```shell
# 安装
pnpm i @142vip/copyright
```

## 使用

### 快速生成

```ts
import { VipCopyright } from '@142vip/copyright'

// 静态方法
await VipCopyright.quickGenerateDocx({
  copyrightTitle: 'AI大模型平台',
  copyrightVersion: 'V1.0',
  sourceCodeDir: './',
  fileType: 'ts',
})
```

### 标准用法
```ts
import { VipCopyright } from '@142vip/copyright'

// 实例化，创建对象
const vipCopyright = new VipCopyright(copyrightTitle, copyrightVersion, {
  // 是否需要终端打印日志，默认false
  logger: true,
})

// 生成源代码文档
await vipCopyright.generateDocx('./', 'ts')
```

## 支持的语言

```ts
/**
 * 软著支持的源代码文件类型
 */
export enum CopyrightFileType {
  JAVA = 'java',
  JAVASCRIPT = 'js',
  TYPESCRIPT = 'ts',
  PYTHON = 'py',
  C = 'c',
  CPP = 'cpp',
  GO = 'go',
  SWIFT = 'swift',
  PHP = 'php',
  RUST = 'rs',
  SHELL = 'sh',
  SQL = 'sql',
  YAML = 'yaml',
  YML = 'yml',
  JSON = 'json',
  XML = 'xml',
  HTML = 'html',
  TEXT = 'txt',
}
```

## API

- `VipCopyright`类
  - 构造函数
    - `copyrightTitle`: 版权标题
    - `copyrightVersion`: 版权版本
    - `options`: 选项
  - 方法
    - `quickGenerateDocx`: 快速生成源代码文档
      - `options`: 选项
    - `generateDocx`: 生成源代码文档
      - `sourceCodeDir`: 源代码目录
      - `fileType`: 文件类型
      - `options`: 选项

    - `saveCodeToDocx`: 保存源代码到文档
      - `sourceCode`: 源代码
      - `filePath`: 文件路径
      - `fileType`: 文件类型
      - `options`: 选项
    - `scanSourceCode`: 扫描源代码
      - `sourceCodeDir`: 源代码目录
      - `fileType`: 文件类型
      - `options`: 选项

```ts
/**
 * 版权对象实例化参数
 * - 可选
 */
export interface CopyrightOptions {
  /**
   * 每页最大行数
   */
  maxLineCountInPage?: number
  /**
   * 扫描的最大代码行数
   */
  maxScanSourceLineCount?: number
  /**
   * 是否开启控制台日志
   */
  logger?: boolean
}
```

## 工具方法

- `isSourceCodeLine`: 判断是否为源代码行
- `readSourceCodeLinesByFile`: 读取源代码
- `getSourceCodeFiles`: 获取源代码文件
- `getPageSectionInDocx`: 获取文档页模板

## 链接

-
- [中国版权保护中心](https://register.ccopyright.com.cn/login.html?linkBackUrl=https://register.ccopyright.com.cn/account.html)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
