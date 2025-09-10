## Git 提交消息约定

> 本约定改编自 [Conventional Commits](https://conventionalcommits.org)。

#### 简单总结：

提交消息必须符合以下正则表达式：

```regexp
/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
```

#### 示例

显示在"特性"标题下，`compiler`子标题：

```bash
feat(compiler): add 'comments' option
```

显示在"错误修复"标题下，`v-model`子标题，并链接到第28号问题：

```bash
fix(v-model): handle events on blur

close #28
```

显示在"性能改进"标题下，并在"破坏性变更"中包含破坏性变更说明：

```bash
perf(core): improve vdom diffing by removing 'foo' option

BREAKING CHANGE: The 'foo' option has been removed.
```

如果以下提交和提交`667ecc1`在同一版本下，则不会出现在变更日志中。如果不在同一版本下，回滚提交会显示在"回滚"标题下。

```bash
revert: feat(compiler): add 'comments' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

### 完整消息格式

提交消息由**头部**、**主体**和**尾部**组成。头部包含**类型**、**范围**和**主题**：

```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**头部**是必需的，而头部的**范围**是可选的。

### 回滚

如果提交回滚了之前的提交，它应该以`revert: `开头，后跟被回滚提交的头部。在主体中，应该说明：`This reverts commit <哈希值>.`，其中哈希值是被回滚提交的SHA值。

### 类型

如果前缀是`feat`、`fix`或`perf`，它将出现在变更日志中。但是，如果有任何[破坏性变更](#尾部)，提交将始终出现在变更日志中。

其他前缀由您自行决定。建议的前缀是`docs`、`chore`、`style`、`refactor`和`test`，用于与变更日志无关的任务。

### 范围

范围可以是指定提交变更位置的任何内容。例如`core`、`compiler`、`ssr`、`v-model`、`transition`等...

### 主题

主题包含对变更的简洁描述：

- 使用祈使语气、现在时态："change"而不是"changed"或"changes"
- 不要大写第一个字母
- 结尾没有点号(.)

### 主体

与**主题**一样，使用祈使语气、现在时态："change"而不是"changed"或"changes"。
主体应该包括变更的动机，并将其与以前的行为进行对比。

### 尾部

尾部应包含有关**破坏性变更**的任何信息，也是引用此提交**关闭**的GitHub问题的地方。

**破坏性变更**应该以`BREAKING CHANGE:`开头，后跟一个空格或两个换行符。提交消息的其余部分用于此说明。
