# core-x 项目开发指南

> **L0 真源**：所有 AI / Agent 的项目规范只以本文件为准。
> 治理说明、Skill 清单、工具接入见 `.agents/README.md`。
> 工具侧（Codex / WorkBuddy / Cursor）只保留**薄入口**，禁止另起第二套编码法。

---

## 项目信息

- **类型**：pnpm 9 + Turbo Monorepo（`packages/**` 可发布 + `apps/**` 私有 demo）
- **包管理器**：pnpm `9.6`（安装首选 `./scripts/ci`，失败再 `pnpm install`）
- **Node 版本**：`>=22`
- **构建编排**：Turbo（`build` / `test` / `lint` / `dev` 任务图）
- **版本**：根 `0.0.1-alpha.x`；npm 发版分支 `next`（`.npmrc` → `publish-branch=next`）
- **作者 / 生态**：142vip · 储凡；文档站 `https://142vip.github.io/core-x`

### 资产规模

- **packages/**：31 个 `@142vip/*` 可发布包（unbuild 18 · tsc 5 · Egg 插件源码直发 8）
- **apps/**：4 个 `*-demo`（egg / nest / vitepress / vuepress，均 `private`）
- 完整清单与 CI 事实见 `.cursor/rules/engineering/16-全仓资产清单.mdc`

### 包边界

- `packages/*` 独立发版；`apps/*` 互不依赖，也不反向依赖 packages 之外的内容
- 公共能力优先复用 `@142vip/*` 生态：日期 `vipDayjs`（`@142vip/utils`）、HTTP `@142vip/axios`、Nest `@142vip/nest`、Redis `@142vip/redis` 等，禁止在应用内复制同等能力
- `@142vip/agent-skills` 是通用 AI Agent Skills 真源包（无业务），Skill 维护规范见 `.agents/README.md`

## 通用编码规范

1. **正确优先**：逻辑清晰、类型准确、边界合理
2. **最小改动**：每行变更须能追溯到用户需求；不顺手"优化"相邻无关代码
3. **风格一致**：匹配周边命名、结构、注释语言
4. **注释清晰**：解释"为什么"与模块职责；禁止无信息量废话注释，也禁止关键逻辑零注释
5. **改完自检**：每次改代码后局部 lint + 受影响 build（见「改完自检」）

| 规则 | 要求 |
|------|------|
| **禁止 `any`** | 触及与新增代码一律不用；边界用 `unknown` + 具名守卫 |
| **少用 `as`** | 仅边界单点；领域层用 `instanceof` / 守卫函数 |
| **`async`/`await`** | 返回 `Promise` 的方法须 `async`，体内用 `await`；禁止内联 `(await expr)` 写进实参 / 返回值 |
| **删除未使用代码** | 未使用的 `import`、变量、函数、类型须删除 |
| **禁止无意义包装** | 仅一行转发已有 API 的函数不再包一层；全仓仅 1 处调用的函数不单独建文件 |
| **日期用 `vipDayjs`** | 禁止裸 `Date.now()` / `new Date()` 拼业务时间 |
| **HTTP 状态码用 `HttpStatus`** | 禁止裸写 `401` / `403` / `404` 数值字面量做比较 |
| **业务判别用 `enum`** | 有限集合用 TypeScript `enum`，禁止散落魔法字符串或 string union 做分支 |

详细风格见 `.cursor/rules/business/代码风格统一`、`TypeScript规范`，场景专项见 `business/模块开发索引`。

## 栈约定

| 场景 | 本仓要求 |
|------|----------|
| 日期 / 时间 | `vipDayjs`（`@142vip/utils`）；TTL 用 `TimeDuration` 枚举 |
| HTTP 状态码 | `HttpStatus`（`@142vip/nest`） |
| HTTP 客户端 | `@142vip/axios` |
| 更新类 REST | `PATCH`（禁止对外 REST 用 `PUT`） |
| 有限集合判别 | TypeScript `enum` |
| ESM / 模块发布 | ESM 优先 + CJS 兼容（`business/ESM与模块发布`） |

## 验证与构建

- **Lint（局部）**：`npx eslint --fix --max-warnings 0 <paths>`，零 error 零 warning；**禁止**默认全仓 `pnpm lint:fix`
- **Build（受影响）**：`cd packages/<dir> && pnpm build`（unbuild / tsc 按包配置；Egg 插件包无 build）
- **测试**：`cd packages/<dir> && pnpm test`
- **文档站**：`pnpm build:docs`（零死链校验）
- 详细命令见 `.cursor/rules/engineering/08-常用命令手册` 与 `15-scripts脚本手册`

## Git 与提交

- **格式**：Conventional Commits + `@142vip/commit-linter`（commit-msg 钩子校验）
- **分类提交**：包 / 应用 → 功能域 → 主题；单条默认 ≤15 staged 文件；只 `git add` 本批路径，**禁止 `git add -A`**
- **分支**：新特性上 `next`；fix / docs 可上 `main`；npm 发版分支 `next`
- **Agent 约束**：只 `git commit`，默认不 `git push`；**禁止** commit message 含 `Co-authored-by` 等 AI 工具署名 trailer
- 详细规范见 `.cursor/rules/engineering/05-Git与发布` 与 `commit` skill

## 改完自检（铁律）

每次生成 / 修改代码后，同一轮回复内必须完成：

1. **Rules 抽查**：改动路径对照本文档编码规范
2. **死代码清理**：删除未使用 import / 变量 / 函数
3. **局部 Lint**：`npx eslint --fix --max-warnings 0 <paths>`（零 error、零 warning）
4. **受影响 Build**：只编改动波及的包 / demo
5. **文档同步**：改了 README / docs 时同步更新

详细流程见 `self-check` skill。

## 高效默认路径（单次任务）

```
codegraph sync → 16 全仓清单 → 任务路由 → 读代码小改
→ 局部 lint（0 error）→ 牵连包 build → 09 文档自检 → 交付
```

- 不知道改哪 → `business/任务路由索引`；不知道有哪些包 → `engineering/16-全仓资产清单`
- 纯规范 / 文档 / 协作文件改动 → `git diff --check` 即可，不跑应用 build（见 `workflow` skill §场景策略 D）

## 编码行为准则

源自 Andrej Karpathy 对 LLM 编码陷阱的观察。本准则偏向"谨慎优于速度"，简单任务可自行判断。

### 1. 先思考再编码

实现之前：明确陈述假设；不确定就提问；多种理解时逐一列出而非默默选择；有不明白的地方停下来指出困惑，然后提问。

### 2. 简洁优先

用最少的代码解决问题。不实现超出需求的特性；不为仅使用一次的代码做抽象；不添加未经要求的"灵活性"；不处理不可能发生的错误。如果 200 行能 50 行解决，就重写。

### 3. 精准改动

只改必须改的。不"改善"相邻无关代码、注释或格式；不重构没问题的代码；与现有风格保持一致。改动产生的孤立代码要移除，但不删除之前就存在的废弃代码。

### 4. 目标驱动执行

将任务转化为可验证的目标。多步骤任务列出计划，每步附带验证方式。明确的成功标准让你可以独立循环迭代。

---

## AI / Agent

完整治理、目录职责、防凌乱维护规则见 **`.agents/README.md`**。

### 共用 Skills（4 个）

| Skill | 真源 / 镜像 | 触发场景 |
|-------|-------------|----------|
| `workflow` | 真源 `packages/agent-skills/skills/workflow` → 镜像 `.agents/skills/workflow` | 任务开始：执行管线、读取顺序、场景策略 |
| `code-dev` | 同上（`code-dev`） | 写代码、修 Bug、重构 |
| `self-check` | 同上（`self-check`） | 改完验证、交付验收 |
| `commit` | 同上（`commit`） | 分类提交（用户明确要求时） |

运行时读取路径仍是 `.agents/skills/<name>/SKILL.md`。通用包说明见 `packages/agent-skills/README.md`。

### 通用 Skills 真源与回写（强制）

```
packages/agent-skills/skills/**   ← 唯一真源（发 npm）
        │  fa ai sync / pnpm exec vip-agent-skills --target .
        ▼
.agents/skills/{workflow,code-dev,self-check,commit}   ← 本仓镜像（供 Agent 加载）
        ✗ 禁止只改镜像却不改包
```

### 默认读取顺序（全工具）

1. 本文件 `AGENTS.md`
2. 按意图加载上表 Skill
3. 目标包 / demo `README` + 同模块 3～5 个现有文件（对齐风格）
4. （可选）本工具薄入口：`.codex/README.md` / `.workbuddy/README.md` / `.cursor/README.md`
5. （Cursor 专属）`.cursor/rules/**` 细粒度规则

冲突时以本文件为准。工具入口只允许补充「该工具怎么搜、怎么改、怎么批」的操作差异，**禁止**复制编码纪律全文。
