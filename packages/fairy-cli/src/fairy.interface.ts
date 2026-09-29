import type { VipCommanderDetailRecord, VipCommanderOptions } from '@142vip/utils'

/**
 * fairy-cli 各子命令 action 入参基类。
 * 子命令通过 `registerFairySubcommand` 注入 `--dry-run` / `--vip`；
 * 根程序在 `fairyCliMain` 中调用 `registerRootOptions`（`--trace` / `--help` / `--version`）。
 */
export interface FairyCommandOptions extends Omit<VipCommanderOptions, 'help'> {}

/**
 * `--vip` 已接入专用逻辑：`RELEASE`（Monorepo 交互发版）、`SYNC`（从 packages 选包）；`COMMIT` 用 `-s` / 配置 `scopeGlobs` 扫描 scope，`--quiet` 为 commit-msg 校验。
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
  /** Agent Skills 集成（`@142vip/agent-skills`） */
  AI = 'ai',
}

/** 子命令注册元数据，供 `registerFairySubcommand` / `initCommand` 使用 */
export const CLI_COMMAND_DETAIL: VipCommanderDetailRecord<CommandEnum> = {
  [CommandEnum.LOGIN]: {
    command: CommandEnum.LOGIN,
    summary: '登录平台',
    description: 'Docker / npm 登录',
    aliases: ['l', 'lo'],
  },
  [CommandEnum.RELEASE]: {
    command: CommandEnum.RELEASE,
    summary: '发布新版本',
    description: 'bump 版本，可选 CHANGELOG、git commit / tag / push',
    aliases: ['re', 'rel'],
  },
  [CommandEnum.CHANGELOG]: {
    command: CommandEnum.CHANGELOG,
    summary: '生成 CHANGELOG',
    description: '基于 Git 提交生成 CHANGELOG 文档',
    aliases: ['c', 'ch', 'cha'],
  },
  [CommandEnum.PUBLISH]: {
    command: CommandEnum.PUBLISH,
    summary: '推送 npm 包',
    description: '发布到 npm 远程仓库',
    aliases: ['p', 'pu'],
  },
  [CommandEnum.CLEAN]: {
    command: CommandEnum.CLEAN,
    summary: '清理项目文件',
    description: '删除构建产物、缓存等无用文件',
    aliases: ['cl', 'clear'],
  },
  [CommandEnum.LINT]: {
    command: CommandEnum.LINT,
    summary: 'ESLint 检查与格式化',
    description: '按仓库 ESLint 规则检查并修复代码',
    aliases: ['li'],
  },
  [CommandEnum.DEPLOY]: {
    command: CommandEnum.DEPLOY,
    summary: '项目部署',
    description: 'GitHub Pages 等项目部署',
    aliases: ['de', 'dep'],
  },
  [CommandEnum.INSTALL]: {
    command: CommandEnum.INSTALL,
    summary: '安装依赖',
    description: 'pnpm / npm 安装与升级依赖',
    aliases: ['i', 'add', 'in'],
  },
  [CommandEnum.SYNC]: {
    command: CommandEnum.SYNC,
    summary: '同步 npm 包',
    description: '将 npm 包同步到 CNPM 镜像',
    aliases: ['s', 'sy', 'syn'],
  },
  [CommandEnum.COPYRIGHT]: {
    command: CommandEnum.COPYRIGHT,
    summary: '软著源代码文档',
    description: '生成著作权登记用源代码前 30 / 后 30 页文档',
    aliases: ['cr', 'cop', 'cri'],
  },
  [CommandEnum.COMMIT]: {
    command: CommandEnum.COMMIT,
    summary: 'Git 提交与校验',
    description: '默认交互式规范提交；--quiet 校验 commit 信息（commit-msg）',
    aliases: ['co', 'com'],
  },
  [CommandEnum.AI]: {
    command: CommandEnum.AI,
    summary: 'Agent Skills 管理',
    description: 'fa ai --sync / --check，同步或校验 .agents/skills/',
    aliases: ['a'],
  },
}
