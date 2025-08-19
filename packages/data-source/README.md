# @142vip/data-source

[![NPM version](https://img.shields.io/npm/v/@142vip/data-source?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/data-source)

**没数据源，可视化就是玩单机**

## 介绍

本模块是在`@antfu/data-source`模块基础上封装的，可以自定义配置`忽略文件`和`校验规则`，例如：

```js
import { defineVipEslintConfig } from '@142vip/data-source'

export default defineVipEslintConfig({
  ignores: [
    '**/CHANGELOG.md',
  ],
  rules: {
    // 用于在模块构建后基于dist导出时找不到文件，忽略校验
    'antfu/no-import-dist': 1,
  },
})
```

同时，使用`eslint:8.55.0`版本，支持IDEA上配置使用

## 安装

```bash
# 下载模块
pnpm i @142vip/data-source -D
```

## 使用

在项目根目录中的`package.json`文件中，添加如下命令，校验项目，例如：

```json
{
  "lint": "npx eslint .",
  "lint:fix": "npx eslint ."
}
```

也可以配合`@142vip/fairy-cli`模块，配置命令换成：

```json
{
  "lint": "npx fa lint",
  "lint:fix": "npx fa lint --fix"
}
```

## 参考

- <https://github.com/antfu/data-source>

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
