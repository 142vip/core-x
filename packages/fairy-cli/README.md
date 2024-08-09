# @142vip/fairy-cli

`@142vip/fairy-cli`是一个工程化项目CLI工具，在终端中可以使用别名`fa`执行命令。

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
  -v --version                      output the version number
  -h, --help                        display help for command

Commands:
  create|c [options] <projectName>  create a new template project
  login [options] <platform>        登录远程平台，支持Docker和Npm
  install|i [options]               pnpm ci dependencies
  release [options]                 release npm version
  changelog [options]               生成CHANGELOG日志文档
  publish [options]                 publish to remote platform，eg. Docker Image & Npm Package
  sync [packageNames...]            同步npm仓库的模块包到cnpm仓库
  deploy [options]                  项目部署
  lint [options]                    根据Eslint检查代码风格，支持代码格式化
  clean [options]                   清除开发、构建等环境下的无用目录
  turbo [options] [repoName...]     exec turbo pack command
  help [command]                    display help for command
```

### sync

同步`npm`仓库的模块包到`cnpm`仓库，支持同步多个模块，也可以访问[cnpm站点](https://npmmirror.com/)手动同步模块。

```shell
# 同步@142vip/fairy-cli
fa sync @142vip/fairy-cli

# 同步多个
fa sync @142vip/fairy-cli @142vip/release-version
```

## 相关

- [rimraf](https://www.npmjs.com/package/rimraf)
- [del](https://www.npmjs.com/package/del)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
