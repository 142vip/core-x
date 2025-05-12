/**
 * git commit type
 */
export const gitCommitTypes = {
  feat: {
    description: 'A new feature',
    title: 'Features',
    emoji: '✨',
  },
  fix: {
    description: 'A bug fix,A bug fix A bug fix',
    title: 'Bug Fixes',
    emoji: '🐛',
  },
  hotfix: {
    description: 'Hotfix',
    title: 'Hotfix',
    emoji: '🔥',
  },
  docs: {
    description: 'Documentation only changes',
    title: 'Documentation',
    emoji: '📚',
  },
  style: {
    description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    title: 'Styles',
    emoji: '💎',
  },
  refactor: {
    description: 'A code change that neither fixes a bug nor adds a feature',
    title: 'Code Refactoring',
    emoji: '📦',
  },
  perf: {
    description: 'A code change that improves performance',
    title: 'Performance Improvements',
    emoji: '🚀',
  },
  test: {
    description: 'Adding missing tests or correcting existing tests',
    title: 'Tests',
    emoji: '🚨',
  },
  build: {
    description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    title: 'Builds',
    emoji: '🛠',
  },
  ci: {
    description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    title: 'Continuous Integrations',
    emoji: '⚙️',
  },
  chore: {
    description: 'Other changes that don\'t modify src or test files',
    title: 'Chores',
    emoji: '♻️',
  },
  revert: {
    description: 'Reverts a previous commit',
    title: 'Reverts',
    emoji: '🗑',
  },
  release: {
    description: 'Release a new version',
    title: 'Releases',
    emoji: '🎉',
  },

}

/**
 * 默认支持的git commit type
 */
export const GIT_COMMIT_DEFAULT_TYPES = Object.keys(gitCommitTypes)

/**
 * 默认支持的git commit scope
 */
export const GIT_COMMIT_DEFAULT_SCOPES = [
  // 发布
  'release',
  // 日志
  'CHANGELOG',
  'README',
]
