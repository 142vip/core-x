# Codex 工作入口

> **薄入口**：只记录 Codex 工具操作差异；项目规范以根 `AGENTS.md` 为准，治理见 `.agents/README.md`。
> 禁止在本文件复制编码纪律全文。

## 入口

1. 读根 `AGENTS.md`（L0 真源，含本仓栈与 Git 纪律）
2. 按意图加载通用 skill：`.agents/skills/<name>/SKILL.md`（`workflow` / `code-dev` / `self-check` / `commit`）
3. 详细命令与资产：`.cursor/rules/engineering/16-全仓资产清单`、`08-常用命令手册`

## Codex 专有约定

- Codex 默认自动读取根 `AGENTS.md`，无需额外配置
- 仓库命令统一用 `pnpm` / `./scripts/ci`；构建须 `cd` 到目标包目录执行
- 改完自检：局部 lint（零 error 零 warning）→ 受影响包 build → 文档同步（`AGENTS.md`「改完自检」）
- 提交：只 commit 不 push；分类提交规范见 `commit` skill
