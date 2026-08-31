# @142vip/agent-skills

面向 **AI 编码 Agent** 的可安装 Skills 包：通用流程沉淀为标准 `SKILL.md`，跨仓库、跨工具（Cursor / Claude Code / Codex / WorkBuddy 等）复用。

## 通用 Skills（4 件套）

| Skill | 职责 |
|-------|------|
| `workflow` | 高效执行管线：默认读取顺序、场景策略（小改 / 单模块 / 跨模块 / 仅文档 / 调查类）、规则治理分层与知识沉淀、回复模板 |
| `code-dev` | 代码开发：命名、函数、类型、SOLID、前后端 / 数据库、注释日志、最小改动、lint 策略、依赖本地修复 |
| `self-check` | 改完自检：局部 lint + 受影响 build + 文档同步 + `TODO.md` 维护闭环 |
| `commit` | Git 提交：Conventional Commits、分类提交、反引号、trailer 纪律、Agent 只 commit 不擅自 push |


## 安装

```bash
# pnpm（推荐）
pnpm add -D @142vip/agent-skills

# npm
npm install -D @142vip/agent-skills

# yarn
yarn add -D @142vip/agent-skills
```

## 使用

### 1. 同步 Skills 到下游项目（推荐）

将通用 skill 写入下游项目 `.agents/skills/`（**不**动本地 `business-map`）：

```bash
pnpm exec vip-agent-skills --target .
pnpm exec vip-agent-skills --target . --dry-run
pnpm exec vip-agent-skills --target . --check
```

同步结果：

```text
.agents/skills/
  workflow/SKILL.md
  code-dev/SKILL.md
  self-check/SKILL.md
  commit/SKILL.md
  business-map/                  # 若项目已有，保持不动
  agent-skills.json              # 同步基线（包名/版本/synced skills）
```

### 2. 在代码中调用（ESM / CJS）

```js
// ESM
import {
  CORE_SKILL_NAMES,
  getVersion,
  syncAgentSkills,
} from '@142vip/agent-skills'

console.log(getVersion(), CORE_SKILL_NAMES)
syncAgentSkills({ target: process.cwd() })
```

```js
// CommonJS
const {
  CORE_SKILL_NAMES,
  syncAgentSkills,
  getVersion,
} = require('@142vip/agent-skills')

syncAgentSkills({ target: process.cwd(), dryRun: true })
```

### 3. 类型（可给 core-x 等继承）

```ts
import type {
  VipAgentSkillCliOptions,
  VipAgentSkillSyncOptions,
  VipAgentSkillSyncResult,
} from '@142vip/agent-skills'

/** 例：在下游代码中拓展 */
export interface AiCommandOptions extends VipAgentSkillCliOptions {
  model?: string
}
```

## 推荐布局

```text
AGENTS.md                         # 项目规范
TODO.md                           # 可选：未完成待办（self-check 会维护）
.agents/
  project/
    build-map.md                  # self-check 读本仓构建命令（可选）
  skills/
    business-map/                 # 仅本项目业务落点（本包永不同步）
    workflow/                     # 来自本包
    code-dev/
    self-check/
    commit/
```

冲突优先级：`AGENTS.md` > `.agents/project/*` > 已同步的通用 skills。

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, 142vip 储凡
