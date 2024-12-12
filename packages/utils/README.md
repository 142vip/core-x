# @142vip/utils

[![NPM version](https://img.shields.io/npm/v/@142vip/utils?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/utils)

## 安装

```shell
# 安装
pnpm i @142vip/utils
```

## 使用

```ts
import { promptCheckBox } from '@142vip/utils';

(async () => {
  const result = await promptCheckBox([1, 2, 3, 4, 5, 6, 7, 8, 9])
  console.log('promptCheckBox:', result)
})()
```

## 参考

- [inquirer](https://www.npmjs.com/package/inquirer)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
