# @142vip/fairy-cli


`@142vip/fairy-cli`是一个工程化项目CLI工具，在终端中可以使用`fa`、`vae`两个别名执行命令。


## 快速使用


```shell
# 安装
pnpm i @142vip/fairy-cli

# 查看帮助
npx fa -h 
npx vae -h

# 查看版本
npx fa -v 
npx vae -v
```

## 功能

```shell
Usage: @142vip/fairy-cli [options] [command]

Options:
  -v --version                      output the version number
  -h, --help                        display help for command

Commands:
  create|c [options] <projectName>  create a new template project
  login [options] <platform>        登录远程平台，支持Docker和Npm
  pnpm [options] <platform>         pnpm ci dependencies
  release [options]                 release npm version
  changelog [options]               生成CHANGELOG日志文档
  publish [options]                 推送到远程平台，支持Docker镜像更新和NPM发包
  deploy [options]                  项目部署
  lint [options]                    根据Eslint检查代码风格，支持代码格式化
  clean [options]                   清除开发、构建等环境下的无用目录
  turbo [options] [repoName...]     exec turbo pack command
  help [command]                    display help for command
```

## 相关

- [rimraf](https://www.npmjs.com/package/rimraf)
- [del](https://www.npmjs.com/package/del)



## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
