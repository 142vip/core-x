# WorkBuddy 工作入口

> **薄入口**：只记录 WorkBuddy 工具操作差异；项目规范以根 `AGENTS.md` 为准，治理见 `.agents/README.md`。
> 本文件是 WorkBuddy 在 core-x 的**唯一协作入口**（无其他 instructions 文档）。

## 入口

1. 读根 `AGENTS.md`（L0 真源，含本仓栈与 Git 纪律）
2. 按意图加载通用 skill：`.agents/skills/<name>/SKILL.md`（`workflow` / `code-dev` / `self-check` / `commit`）
3. 详细命令与资产：`.cursor/rules/engineering/16-全仓资产清单`、`08-常用命令手册`

## WorkBuddy 专有约定

- **会话记忆**：`.workbuddy/memory/`（**不入库**，`.gitignore`）
  - `YYYY-MM-DD.md`：每日工作日志（append-only，记录有跨会话价值的产出与决策）
  - `MEMORY.md`：长期项目笔记（技术分层、热点、协作硬约束）
- **禁止**把 `memory/` 内容提交进 git；稳定知识只写 L0 / L1（`AGENTS.md` / `.agents/**`）
- 单次任务路径：`AGENTS.md`「高效默认路径」→ `workflow` skill 定场景策略 → 小改 → 局部 lint → 受影响 build → 文档同步
- 提交：只 commit 不 push；分类提交规范见 `commit` skill
