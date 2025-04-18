export enum CliCommandEnum {
  LOGIN = 'login',
  RELEASE = 'release',
  CHANGELOG = 'changelog',
  PUBLISH = 'publish',
  CLEAN = 'clean',
  LINT = 'lint',
  DEPLOY = 'deploy',
  TURBO = 'turbo',
  INSTALL = 'install',
  SYNC = 'sync',
  COPYRIGHT = 'copyright',
  /**
   * 包含子命令
   */
  COMMIT = 'commit [vip]',
}
