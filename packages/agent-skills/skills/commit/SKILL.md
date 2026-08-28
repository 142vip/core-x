---
name: agent-commit
description: 跨项目 Git 提交规范。当用户要求提交代码、写 commit message、整理改动准备提交时使用。覆盖 Conventional Commits、分类提交、文件粒度、Agent 只 commit 不擅自 push。scope 枚举与 trailer 以本仓 AGENTS.md 为准。按意图触发。
---

# Git 提交规范（通用核心）

## 目标

生成规范、准确、可追溯的 Git 提交。message 与 staged 文件一一对应；按模块 / 主题分类；控制单条文件数。

## 触发场景

- 用户要求提交 / commit / 写 commit message / 整理改动提交
- **用户未要求时：不主动 commit**

## 前置：读取暂存区与最近提交

```bash
git status --short
git diff --cached --stat
git diff --cached
git log --oneline -10
```

**禁止**不读 `git diff --cached` 就写 message；**禁止**只根据文件名猜测。

---

## Commit 格式

```
<type>(<scope>): <subject>
# 或
<type>: <subject>
```

| 字段 | 约定 |
|------|------|
| **type** | `feat` · `fix` · `docs` · `style` · `refactor` · `perf` · `test` · `build` · `ci` · `chore` · `revert` · `release`（本仓可增减，以 `AGENTS.md` 为准） |
| **scope** | **可选**；取值以本仓 `AGENTS.md` 的 scope 表为准（应用名 / 包名 / 模块名） |
| **subject** | 祈使、简洁；写「为何改」与关键变化点；语言风格贴近 `git log` |

### type 速查

| type | 场景 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 |
| `docs` | 文档 |
| `refactor` | 重构（无行为变化） |
| `perf` | 性能 |
| `style` | 格式/样式 |
| `test` | 测试 |
| `build` | 构建/依赖 |
| `ci` | CI |
| `chore` | 杂项 |
| `revert` | 回滚 |
| `release` | 发版（若本仓使用） |

标识符、路径、API、配置键在 subject 中可用 Markdown 反引号包裹。

---

## 分类提交（强制）

用户要求交付/整理/提交时，禁止把多类改动揉进单个 commit。

```
应用或包
  → 功能域 / 模块
    → 单次改动主题
```

| 原则 | 要求 |
|------|------|
| 边界 | scope 与 staged 路径一致；避免跨无关 app 混提（边界见 `AGENTS.md`） |
| 主题 | 一条 commit 一个共同目的 |
| 文件数 | 默认 ≤15 个路径；超出再拆（本仓可另行规定） |
| 暂存 | 只 `git add` 本批路径；禁止随手 `git add -A` |
| 可编译 | 每批尽量保持中间态可构建 |

建议顺序（同模块内）：类型/接口 → 数据/常量 → 工具 → 配置 → 组件/页面 → 文档

---

## 文案真实性（强制）

- 标题/正文与 `git diff --cached --name-only` 可追溯对应
- 禁止标题写 A 却 stage B
- 禁止空洞套话单独成句（「优化体验」「提升稳定性」）
- 优先「为何改」与关键变化点

---

## Commit trailer

| 规则 | 要求 |
|------|------|
| 默认 | 只写 type/scope/subject 与必要正文；**不加** trailer |
| 署名 | 仅当用户明确要求，且格式以本仓 `AGENTS.md` 为准 |
| 禁止 | 擅自添加 IDE / Agent 产品名 trailer（如各类 `Made-with` / 未授权 Co-authored-by） |

提交后：`git log -1 --format=%B` 自检。

---

## Agent 约束

| 操作 | 条件 |
|------|------|
| **commit** | 用户明确要求时可执行；只 stage 相关文件 |
| **push** | **禁止擅自执行**；须先列 commit 摘要并二次确认 |
| **PR** | 用户明确要求才创建 |
| **未要求 commit** | 不主动提交 |

其它：

- hook 失败：修复后新 commit；不 amend 已推送
- 禁止 `--no-verify`、对主分支 force push（除非用户明确要求）
- 禁止改 `git config`

### 执行补充

- 工作区已有大量无关 diff 时不要混入本批
- commit 失败先修再新 commit；禁止擅自 amend / push

---

## 执行步骤

1. 读 status / cached diff / 近期 log
2. 暂存区空 → 说明无法提交
3. 归纳主语义；多类则拆批
4. scope / 文风对齐本仓与 `git log`
5. 分批 `git add` + `git commit`
6. `git log -1 --format=%B` 自检

---

## 边界情况

- **多类混杂**：诚实概括或拆 commit，不假装单一目的
- **过于分散**：可用较宽 `chore` 概括，仍须可追溯
- **push**：列表 → 确认 → 再 `git push`

## 参考

- 项目 L0：`AGENTS.md` §Git
- 开发：`code-dev` · 自检 / TODO：`self-check`
