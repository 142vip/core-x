# @142vip/fairy-cli

[![NPM version](https://img.shields.io/npm/v/@142vip/fairy-cli?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/fairy-cli)

`@142vip/fairy-cli`是一个工程化项目`CLI`工具，在终端中可以使用别名`fa`执行命令。

## 快速使用

```shell
# 安装
pnpm i @142vip/fairy-cli

# 查看帮助
npx fa -h

# 查看版本
npx fa -v
```

## 功能

```text
Usage: @142vip/fairy-cli [options] [command]

Options:
  -v --version                   output the version number
  -h, --help                     display help for command

Commands:
  login [options] <platform>     登录远程平台，支持Docker和Npm
  install|i [options]            pnpm ci dependencies
  release [options]              release npm version
  changelog [options]            快速使用@142vip/changelog模块
  publish [options]              publish to remote platform，eg. Docker Image & Npm Package
  sync [packageNames...]         同步npm仓库的模块包到cnpm仓库
  deploy [options]               项目部署
  lint [options]                 根据Eslint检查代码风格，支持代码格式化
  turbo [options] [repoName...]  TurboPack工具命令
  clean [options]                清除开发、构建等环境下的无用目录
  help [command]                 display help for command
```

### sync

同步`npm`仓库的模块包到`cnpm`仓库，支持同步多个模块，也可以访问[cnpm站点](https://npmmirror.com/)手动同步模块。

#### 查看命令

```shell
# 查看sync命令参数
npx fa sync -h

Usage: @142vip/fairy-cli sync [options] [packageNames...]

同步npm仓库的模块包到cnpm仓库

Arguments:
  packageNames  需要同步的模块包名称，支持多个。例如： @142vip/fairy-cli

Options:
  -h, --help    display help for command
```

#### 使用示例

```shell
# 同步@142vip/fairy-cli
fa sync @142vip/fairy-cli

# 同步多个
fa sync @142vip/fairy-cli @142vip/release-version
```

### clean

#### 查看命令

```shell
# 查看clean命令参数
npx fa clean -h

Usage: @142vip/fairy-cli clean [options]

清除开发、构建等环境下的无用目录

Options:
  -n,--nuxt      删除nuxt构建目录，包括.nuxt、.output目录 (default: false)
  -d,--dist      删除dist目录 (default: false)
  -m,--midway    删除midway构建目录 (default: false)
  -f,--force     强制删除，默认值：false (default: false)
  --all          深度删除所有 (default: false)
  --ignore-tips  忽略提示，直接删除 (default: false)
  --dry-run      试运行，不做实际删除操作 (default: false)
  --turbo        删除turbo缓存目录 (default: false)
  --vite         删除vite缓存目录 (default: false)
  --deps         删除node_modules目录 (default: false)
  -h, --help     display help for command
```

#### 使用示例

```shell
# 删除node_modules依赖
npx fa clean -n  -d -m --turbo --vite --ignore-tips --all

# 删除dist等目录
npx fa clean --deps --ignore-tips --all
```

## 相关

- [rimraf](https://www.npmjs.com/package/rimraf)
- [del](https://www.npmjs.com/package/del)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
