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

通用型Cli助手、一站式工具，支持多种命令操作

Options:
  -v,--version                    VipCommander Version By @142vip
  -h, --help                      display help for command

Commands:
  login|l [options]               登录平台
  install|i [options]             安装依赖
  release|re [options]            发布新的版本
  changelog|c [options]           生成CHANGELOG文档
  publish|p [options]             远程镜像推送
  sync|s [options] [packageName]  同步NPM包
  deploy|de [options]             项目部署
  lint|li [options]               根据Eslint检查、格式化代码风格
  turbo|t [options] [filters...]  通用型TurboPack管理工具
  clean|cl [options]              快速清理项目
  copyright|cr [options]          软件著作权登记的源代码文档生成
  commit|co [options] [vip]       Git Commit 提交信息
  help [command]                  display help for command

```

### copyright命令

软件著作权申请时，快速生成前后30页的源代码文档，用于审批

#### 查看命令

```shell
# 查看copyright命令
npx fa cr -h

Usage: @142vip/fairy-cli copyright|cr [options]

申请著作权登记的软件，快速生成源代码文档，包括源代码文档的前30页、后30页、前后30页

Options:
  -l,--max-line-count    每页最大行数
  -s,--max-source-count  扫描的最大代码行数
  --logger               开启日志追踪模式 (default: false)
  --dry-run              试运行，生成软著源代码文档 (default: false)
  -h, --help             display help for command
```
#### 使用示例

```shell
# 正式运行
fa cr
# 试运行
fa cr --dry-run
```

### release

发布新的版本，更新`version`字段信息，提交到`Git`仓库

#### 查看命令

```shell
# 查看release命令参数
npx fa release -h

Usage: @142vip/fairy-cli release|re [options]

发布新的版本，更新version字段信息，提交到Git仓库

Options:
  --trace                       开启日志追踪模式 (default: false)
  --dry-run                     试运行 (default: false)
  --vip                         @142vip组织专用功能 (default: false)
  --preid <preid>               用于预发布的版本增量标记
  --tag <tag>                   标签名 (default: false)
  --commit <msg>                提交信息 (default: false)
  --push                        推送到Git远程 (default: true)
  --skip-confirm                跳过确认框二次确认 (default: false)
  -r,--recursive                递归更新所有package.json中的version字段信息 (default: false)
  --execute <command>           版本更新后需要执行的命令
  --package <package>           指定需要发布的包
  --branch <branch>             指定分支进行发布 (default: "next")
  --check-release               发布仓库主版本时，校验Monorepo中子模块版本 (default: false)
  --check-branch [checkBranch]  发布版本时，是否校验分支 (default: [])
  -F,--filter <filter>          模块的路径，例如："./package/*" (default: [])
  -h, --help                    display help for command
```
#### 使用示例

```shell
# 发布
fa release

# 发布试运行
fa release --dry-run

# 发布monorepo模式的仓库
fa release --vip -F './apps/*' -F './packages/*' --check-branch next --check-branch main

# 发布，并校验分支
fa release --check-branch next
fa release --check-branch next --check-branch main
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
  --turbo        删除turbo缓存目录 (default: false)
  --vite         删除vite缓存目录 (default: false)
  --deps         删除node_modules目录 (default: false)
  --coverage     删除coverage目录 (default: false)
  -f,--force     强制删除，默认值：false (default: false)
  --all          深度删除所有 (default: false)
  --ignore-tips  忽略提示，直接删除 (default: false)
  --dry-run      试运行，不做实际删除操作 (default: false)
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

- [del](https://www.npmjs.com/package/del)
- [turbo](https://www.npmjs.com/package/turbo)
- [@142vip/changelog](https://www.npmjs.com/package/@142vip/changelog)
- [@142vip/commit-linter](https://www.npmjs.com/package/@142vip/commit-linter)
- [@142vip/release-version](https://www.npmjs.com/package/@142vip/release-version)
- [@142vip/utils](https://www.npmjs.com/package/@142vip/utils)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
