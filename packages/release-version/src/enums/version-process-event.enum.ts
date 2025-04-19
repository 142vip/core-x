/**
 * 指示 'versionBump（）' 函数进度的进度事件
 */
export const enum VersionProgressEventEnum {
  GitCommit = 'git commit',
  GitTag = 'git tag',
  GitPush = 'git push',
  NpmScript = 'npm script',
}
