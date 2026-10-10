# AI Agent 规范治理

> 一套真源 + **可安装通用 Skills** + 各工具薄入口。
> 人类文档：根 `README.md` / `docs/`。本目录仅服务编码 Agent。
> 本仓是 `@142vip/agent-skills` 的**上游真源仓**（无 `business-map`，构建信息在 `.cursor/rules`）。

## 架构

```
                    ┌─────────────────────┐
                    │     AGENTS.md       │  ← L0 真源（含本仓栈）
                    └─────────┬───────────┘
                              │
     ┌────────────────────────┼────────────────────────┐
     │                        │                        │
     ▼                        ▼                        ▼
┌──────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ @142vip/     │    │ 本仓通用 Skills   │    │ 工具薄入口       │
│ agent-skills │    │ 镜像（.agents/    │    │ .codex/ .work-  │
│ （真源包）    │    │ skills/）         │    │ buddy/ .cursor/  │
└──────┬───────┘    └──────────────────┘    └─────────────────┘
       │ fa ai / vip-agent-skills（包 → 镜像）
       ▼
.agents/skills/{workflow,code-dev,self-check,commit}  ← 镜像，非真源
.agents/skills/agent-skills.json                       ← 同步基线（check 比对）
```

| 层级 | 路径 | 写什么 |
|------|------|--------|
| **L0** | `AGENTS.md` | 边界、编码纪律、栈摘要、自检、Git |
| **L1a 真源** | `packages/agent-skills/skills/**` | 跨项目：`workflow` / `code-dev` / `self-check` / `commit` |
| **L1a 镜像** | `.agents/skills/{workflow,code-dev,self-check,commit}` | 由 `fa ai` 从包刷出，供加载 |
| **L2** | `.codex/README.md` · `.workbuddy/README.md` · `.cursor/README.md` | **仅**工具操作差异 |
| **L3** | `.cursor/rules/**` | Cursor 触发层（内参，不对外） |

**冲突**：L0 > L1a 正文 > L2 > L3。
**禁止**：会话 memory 进仓库；第二真源；**只改镜像不改包**；下游仓手改已 sync 的通用 skill 镜像；对外文档引用 `.cursor/rules` 路径；commit 写入 Agent / 大模型 trailer。

---

## Skills

| Skill | 真源 | 意图 |
|-------|------|------|
| `workflow` | `packages/agent-skills/skills/workflow` | 执行管线、默认读取顺序、场景策略、知识写回 |
| `code-dev` | `.../code-dev` | 写代码 / 修 Bug / 重构 |
| `self-check` | `.../self-check` | 改完验证；交付验收 |
| `commit` | `.../commit` | 分类提交（用户要求时） |

### 真源与回写（强制）

1. **通用 skill 的唯一真源**是 `packages/agent-skills/skills/`。
2. `.agents/skills/{workflow,code-dev,self-check,commit}` 只是本仓**镜像**：Agent 日常从这里读，但**写通用流程时必须落包内**。
3. 若误改了镜像：同一任务内把 diff **完整回写**到包内对应 `SKILL.md`，再刷镜像，**禁止遗漏**。
4. 包内 skill 有实质变更 → 走 `@142vip/agent-skills` **发版**；下游仓库 `upgrade` 后执行 `pnpm exec vip-agent-skills --target .`。
5. **下游消费仓**：禁止手改已 sync 的通用 skill 并提交；改进必须进入真源仓对应 skill 文档后再发版同步。
6. 本仓无 `business-map`（业务落点 skill 仅存在于下游应用仓，永不进包）。

### 本仓命令

```bash
fa ai        # 包 → .agents/skills（fairy-cli 集成）
fa ai --check       # 镜像是否与包一致（防漂移）
# 等价 CLI
pnpm exec vip-agent-skills --target .         # 同步
pnpm exec vip-agent-skills --target . --check # 校验
```

- 包目录：`packages/agent-skills/` · npm：`@142vip/agent-skills`
- 基线：`.agents/skills/agent-skills.json`（check 比对基线：包名/版本/synced skills）
- 发版：根目录 `pnpm release`（与其它 packages 一致，分支 `next`）

---

## 工具接入

| 工具 | 入口 |
|------|------|
| 默认 | `AGENTS.md` → skill |
| Codex | `.codex/README.md` |
| WorkBuddy | `.workbuddy/README.md` |
| Cursor | `.cursor/README.md` + `.cursor/rules/**` |

## 本仓上下文（入库）

稳定事实写在本文件与根 `AGENTS.md`。会话笔记不入库（如 `.workbuddy/memory/`）。

### 工程基座 `@142vip/fairy-cli`

- 安装：`pnpm i`、`npx fa ci`、`npx fa i -f`（CI / CD：`pnpm i --frozen-lockfile --force`）。都会跑 `fairy-postinstall.cjs`
- 钩子：根 `fairy.config.ts`；根 `package.json` **不写** lifecycle `postinstall`
- Lint / 清理：`npx fa lint`、`npx fa lint --fix`、`npx fa run clean`、`npx fa run clean:cache`（不写进根 `package.json`）
- 下游仓库：依赖已发布的 `@142vip/fairy-cli`（自带 `dist`）。`pnpm i` 只执行 `hooks.postinstall`，不按 workspace 再编译 fa
- Agent Skills：`fa ai` / `fa ai --check`；真源 `packages/agent-skills/skills/**`

### 验证

1. 局部：`npx fa lint -f <paths>`
2. 牵连：`cd packages/<pkg> && pnpm build` / `pnpm test`
3. PR：`pnpm verify`（根脚本：`npx fa lint` + `pnpm test` + `pnpm build:docs`）
4. 覆盖率仅本地：`pnpm test:coverage`（GitHub CI 不跑）

### 记忆分层

| 层 | 路径 | 用途 |
|----|------|------|
| L0 | `AGENTS.md` | 编码纪律、Git、自检 |
| L1 | 本文件 + `.agents/skills/*` | 本仓事实与通用流程 |
| L2 | `.cursor/` · `.codex/` · `.workbuddy/` | 工具薄入口 |
| 会话 | `.workbuddy/memory/` | 不入库 |

## 高效默认路径

```
AGENTS.md → .agents/README.md（本节上下文）
→ workflow → 读代码小改
→ self-check（局部 lint + 受影响 build + 牵连 test）
→ 文档同步 → 交付 → commit?（仅用户明确要求）
```

## 维护

1. 跨项目通用流程 → **只改** `packages/agent-skills/skills/**` → `pnpm --filter @142vip/agent-skills build` → `fa ai` →（实质变更）发版
2. 本仓编码纪律 / 边界 → `AGENTS.md`
3. 本仓命令 / 资产 → `.cursor/rules/engineering/*`（`16` 清单 · `08` 命令）
4. 工具差异 → L2 薄入口；Cursor 慎增 always
5. 不提交 `.workbuddy/memory/`（gitignore）

## 仓库内应有文件

```
AGENTS.md
packages/agent-skills/              # @142vip/agent-skills（通用 skill 真源 + CLI）
.agents/README.md                   # 本文件 · 治理入口 + 本仓上下文
.agents/skills/{workflow,code-dev,self-check,commit}/   # 镜像
.agents/skills/agent-skills.json    # 同步基线
.codex/README.md · .workbuddy/README.md · .cursor/README.md
.cursor/rules/**
```
