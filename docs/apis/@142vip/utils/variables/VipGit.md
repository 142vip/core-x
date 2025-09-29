[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipGit

# 变量: VipGit

> `const` **VipGit**: `object`

定义于: [packages/utils/src/core/git.ts:252](https://github.com/142vip/core-x/blob/b6807ccf6c96718daee70c368eee9968a0b34d48/packages/utils/src/core/git.ts#L252)

Git业务相关

## 类型声明

### convertEmoji()

> **convertEmoji**: (`content`, `withSpace?`) => `string`

git emoji表情转换
参考：https://www.npmjs.com/package/convert-gitmoji

#### 参数

##### content

`string`

##### withSpace?

`boolean` | `"leading"` | `"trailing"` | `"both"`

#### 返回

`string`

### execCommit()

> **execCommit**: (`args`) => `void`

提交操作

#### 参数

##### args

`string`[]

#### 返回

`void`

### execPush()

> **execPush**: (`args`) => `void`

推送操作
- 推送分支
- 推送tag标签  --tags

#### 参数

##### args

`string`[]

#### 返回

`void`

### execTag()

> **execTag**: (`args`) => `void`

标签操作

#### 参数

##### args

`string`[]

#### 返回

`void`

### getCommitFirstLineMsg()

> **getCommitFirstLineMsg**: () => `string`

获取commit信息中的第一行内容
- 去除空行
- 去除换行符

#### 返回

`string`

### getCommitLogs()

> **getCommitLogs**: (`latestTag`, `branch?`) => `string`[]

获取某个分支上的commit日志

#### 参数

##### latestTag

`string`

##### branch?

`string`

#### 返回

`string`[]

### getCommitTrimMsg()

> **getCommitTrimMsg**: () => `string`

获取commit信息
- 去除空行

#### 返回

`string`

### getCurrentBranch()

> **getCurrentBranch**: () => `string`

获取当前分支

#### 返回

`string`

### getGitHubRepo()

> **getGitHubRepo**: (`baseUrl`) => `string`

获取github仓库

#### 参数

##### baseUrl

`string`

#### 返回

`string`

### getLastMatchingTag()

> **getLastMatchingTag**: (`inputTag`) => `undefined` \| `string`

获取最近一次tag标签

#### 参数

##### inputTag

`string`

#### 返回

`undefined` \| `string`

### getRecentCommit()

> **getRecentCommit**: () => [`GitInfo`](../interfaces/GitInfo.md)

获取最近一次Git提交信息【包含merge信息】
- 短哈希值
- 提交信息

#### 返回

[`GitInfo`](../interfaces/GitInfo.md)

### getRecentCommitHash()

> **getRecentCommitHash**: () => `string`

获取最近一次提交的完整哈希值

#### 返回

`string`

### getRecentCommitsByScope()

> **getRecentCommitsByScope**: (`gitScope`) => `string`[]

获取分支最近的一次GitTag标记到Head标记之间的git commit信息

#### 参数

##### gitScope

`string`

#### 返回

`string`[]

### getRecentCommitShortHash()

> **getRecentCommitShortHash**: () => `string`

获取最近一次提交的短哈希值

#### 返回

`string`

### getRemoteNames()

> **getRemoteNames**: () => `string`[]

列出所有的remote信息

#### 返回

`string`[]

### getTagInHead()

> **getTagInHead**: () => `null` \| `string`

获取指向当前提交（HEAD）的所有标签

#### 返回

`null` \| `string`

### getTags()

> **getTags**: () => `string`[]

获取所有tag标签

#### 返回

`string`[]

### isPrerelease()

> **isPrerelease**: (`version`) => `boolean`

是否预发布

#### 参数

##### version

`string`

#### 返回

`boolean`

### isRepoShallow()

> **isRepoShallow**: () => `boolean`

判断仓库是否克隆太浅

#### 返回

`boolean`

### parseCommitMsg()

> **parseCommitMsg**: (`message`) => `null` \| [`GitCommit`](../interfaces/GitCommit.md)

解析Git提交信息

#### 参数

##### message

`string`

#### 返回

`null` \| [`GitCommit`](../interfaces/GitCommit.md)

### validateBranch()

> **validateBranch**: (`allowBranch?`) => `void`

检测当前分支，是否允许操作的分支，默认：main|next|master

#### 参数

##### allowBranch?

`string` | `string`[]

#### 返回

`void`
