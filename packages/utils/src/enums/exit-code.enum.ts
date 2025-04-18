/**
 * CLI exit codes.
 * @see https://nodejs.org/api/process.html#process_exit_codes
 */
export enum ProcessExitCodeEnum {
  /**
   * 正常退出
   */
  SUCCESS = 0,
  /**
   * 程序异常退出
   */
  FatalError = 1,
  UsageError = 2,
  ParseError = 3,
  InternalError = 4,
  IOError = 5,
  PermissionError = 6,
  ConfigError = 7,
  DependencyError = 8,
  InvalidArgument = 9,
  TimeoutError = 10,
}
