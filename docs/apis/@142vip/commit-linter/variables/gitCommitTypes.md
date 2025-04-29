[API 参考](../../../packages.md) / [@142vip/commit-linter](../index.md) / gitCommitTypes

# 变量: gitCommitTypes

> `const` **gitCommitTypes**: `object`

定义于: [commit-linter/src/git-commit-type.ts:4](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/commit-linter/src/git-commit-type.ts#L4)

git commit type

## 类型声明

### build

> **build**: `object`

#### build.description

> **build.description**: `string` = `'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'`

#### build.emoji

> **build.emoji**: `string` = `'🛠'`

#### build.title

> **build.title**: `string` = `'Builds'`

### chore

> **chore**: `object`

#### chore.description

> **chore.description**: `string` = `'Other changes that don\'t modify src or test files'`

#### chore.emoji

> **chore.emoji**: `string` = `'♻️'`

#### chore.title

> **chore.title**: `string` = `'Chores'`

### ci

> **ci**: `object`

#### ci.description

> **ci.description**: `string` = `'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)'`

#### ci.emoji

> **ci.emoji**: `string` = `'⚙️'`

#### ci.title

> **ci.title**: `string` = `'Continuous Integrations'`

### docs

> **docs**: `object`

#### docs.description

> **docs.description**: `string` = `'Documentation only changes'`

#### docs.emoji

> **docs.emoji**: `string` = `'📚'`

#### docs.title

> **docs.title**: `string` = `'Documentation'`

### feat

> **feat**: `object`

#### feat.description

> **feat.description**: `string` = `'A new feature'`

#### feat.emoji

> **feat.emoji**: `string` = `'✨'`

#### feat.title

> **feat.title**: `string` = `'Features'`

### fix

> **fix**: `object`

#### fix.description

> **fix.description**: `string` = `'A bug fix,A bug fix A bug fix'`

#### fix.emoji

> **fix.emoji**: `string` = `'🐛'`

#### fix.title

> **fix.title**: `string` = `'Bug Fixes'`

### hotfix

> **hotfix**: `object`

#### hotfix.description

> **hotfix.description**: `string` = `'Hotfix'`

#### hotfix.emoji

> **hotfix.emoji**: `string` = `'🔥'`

#### hotfix.title

> **hotfix.title**: `string` = `'Hotfix'`

### perf

> **perf**: `object`

#### perf.description

> **perf.description**: `string` = `'A code change that improves performance'`

#### perf.emoji

> **perf.emoji**: `string` = `'🚀'`

#### perf.title

> **perf.title**: `string` = `'Performance Improvements'`

### refactor

> **refactor**: `object`

#### refactor.description

> **refactor.description**: `string` = `'A code change that neither fixes a bug nor adds a feature'`

#### refactor.emoji

> **refactor.emoji**: `string` = `'📦'`

#### refactor.title

> **refactor.title**: `string` = `'Code Refactoring'`

### release

> **release**: `object`

#### release.description

> **release.description**: `string` = `'Release a new version'`

#### release.emoji

> **release.emoji**: `string` = `'🎉'`

#### release.title

> **release.title**: `string` = `'Releases'`

### revert

> **revert**: `object`

#### revert.description

> **revert.description**: `string` = `'Reverts a previous commit'`

#### revert.emoji

> **revert.emoji**: `string` = `'🗑'`

#### revert.title

> **revert.title**: `string` = `'Reverts'`

### style

> **style**: `object`

#### style.description

> **style.description**: `string` = `'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'`

#### style.emoji

> **style.emoji**: `string` = `'💎'`

#### style.title

> **style.title**: `string` = `'Styles'`

### test

> **test**: `object`

#### test.description

> **test.description**: `string` = `'Adding missing tests or correcting existing tests'`

#### test.emoji

> **test.emoji**: `string` = `'🚨'`

#### test.title

> **test.title**: `string` = `'Tests'`
