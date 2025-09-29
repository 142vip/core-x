import type { VipCommanderDetailRecord } from '@142vip/utils'

/**
 * fairy-cli 命令枚举
 */
export enum CommandEnum {
  LOGIN = 'login',
  RELEASE = 'release',
  CHANGELOG = 'changelog',
  PUBLISH = 'publish',
  CLEAN = 'clean',
  LINT = 'lint',
  DEPLOY = 'deploy',
  INSTALL = 'install',
  SYNC = 'sync',
  COPYRIGHT = 'copyright',
  COMMIT = 'commit',
}

/**
 * 命令详细信息
 */
export const CLI_COMMAND_DETAIL: VipCommanderDetailRecord<CommandEnum> = {
  [CommandEnum.LOGIN]: {
    command: 'login',
    summary: '登录平台',
    description: '登录远程平台，支持DOCKER、NPM',
    aliases: ['l', 'lo'],
  },
  [CommandEnum.RELEASE]: {
    command: 'release',
    summary: '发布新的版本',
    description: '发布新的版本，更新version字段信息，提交到Git仓库',
    aliases: ['re', 'rel'],
  },
  [CommandEnum.CHANGELOG]: {
    command: 'changelog',
    summary: '生成CHANGELOG文档',
    description: '快速使用@142vip/changelog模块，生成CHANGELOG文档',
    aliases: ['c', 'ch', 'cha'],
  },
  [CommandEnum.PUBLISH]: {
    command: 'publish',
    summary: '远程镜像推送',
    description: '推送NPM包',
    aliases: ['p', 'pu'],
  },
  [CommandEnum.CLEAN]: {
    command: 'clean',
    summary: '快速清理项目',
    description: '清除开发、构建环境下产生的无用文件',
    aliases: ['cl', 'clear'],
  },
  [CommandEnum.LINT]: {
    command: 'lint',
    description: '代码检查',
    summary: '根据Eslint检查、格式化代码风格',
    aliases: ['li'],
  },
  [CommandEnum.DEPLOY]: {
    command: 'deploy',
    summary: '项目部署',
    description: '项目部署',
    aliases: ['de', 'dep'],
  },
  [CommandEnum.INSTALL]: {
    command: 'install',
    summary: '安装依赖',
    description: 'Node.js依赖管理，下载、升级依赖版本',
    aliases: ['i', 'add', 'in'],
  },
  [CommandEnum.SYNC]: {
    command: 'sync',
    summary: '同步NPM包',
    description: '同步NPM仓库的模块包到CNPM仓库',
    aliases: ['s', 'sy', 'syn'],
  },
  [CommandEnum.COPYRIGHT]: {
    command: 'copyright',
    summary: '软件著作权登记的源代码文档生成',
    description: '申请著作权登记的软件，快速生成源代码文档，包括源代码文档的前30页、后30页、前后30页',
    aliases: ['cr', 'cop', 'cri'],
  },
  [CommandEnum.COMMIT]: {
    command: 'commit [vip]',
    summary: 'Git Commit 提交信息',
    description: '快速进行Git Commit 提交信息，并检验提交信息是否符合规范',
    aliases: ['co', 'com'],
  },
}
