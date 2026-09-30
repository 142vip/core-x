# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## v0.0.1-alpha.9 (2026-09-30)

### 📖 Documentation

- 修正 SKILL 表格列数以通过 Markdown lint &nbsp;-&nbsp; by **chufan** [<samp>(11b63)</samp>](https://github.com/142vip/core-x/commit/11b634d1)

**Release New Version v0.0.1-alpha.9 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**

## v0.0.1-alpha.8 (2026-09-29)

### 💅 Refactors

- CLI 对齐 `registerVipPackageCliErrorHandling` &nbsp;-&nbsp; by **chufan** [<samp>(7cef0)</samp>](https://github.com/142vip/core-x/commit/7cef04fe)

### 📖 Documentation

- `fa ai --sync`/`--check` 与 skills 镜像说明 &nbsp;-&nbsp; by **chufan** [<samp>(8a431)</samp>](https://github.com/142vip/core-x/commit/8a431424)
- `fa ai` 默认同步，去掉 `--sync` 表述 &nbsp;-&nbsp; by **chufan** [<samp>(74afe)</samp>](https://github.com/142vip/core-x/commit/74afe84a)

**Release New Version v0.0.1-alpha.8 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**

## v0.0.1-alpha.7 (2026-09-28)

### 💅 Refactors

- CLI 对齐 `VipPackageCliCommander` 注册方式 &nbsp;-&nbsp; by **chufan** [<samp>(ea1dd)</samp>](https://github.com/142vip/core-x/commit/ea1dd623)

**Release New Version v0.0.1-alpha.7 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**

## v0.0.1-alpha.6 (2026-09-10)

### 🐛 Bug Fixes

- `commit` skill frontmatter 引号包裹 `description` &nbsp;-&nbsp; by **chufan** [<samp>(312a1)</samp>](https://github.com/142vip/core-x/commit/312a1bc0)

**Release New Version v0.0.1-alpha.6 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**

## v0.0.1-alpha.5 (2026-09-03)

**No Significant Changes**

## v0.0.1-alpha.4 (2026-09-01)

### 📖 Documentation

- README 补充 `vip-agent-skills` CLI 用法示例 &nbsp;-&nbsp; by **chufan** [<samp>(e79ce)</samp>](https://github.com/142vip/core-x/commit/e79cef88)
- 通用 skill 强化「交付 ≠ 提交」约束并同步镜像 &nbsp;-&nbsp; by **chufan** [<samp>(ba60d)</samp>](https://github.com/142vip/core-x/commit/ba60dbde)
- 通用 skill 收紧「push 由用户手动操作」约束并同步镜像 &nbsp;-&nbsp; by **chufan** [<samp>(3aa0c)</samp>](https://github.com/142vip/core-x/commit/3aa0cc72)

**Release New Version v0.0.1-alpha.4 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**

## v0.0.1-alpha.3 (2026-08-31)

**No Significant Changes**

## v0.0.1-alpha.2 (2026-08-31)

### ✨ Features

- 通用 skills 升级为 4 件套并同步镜像 &nbsp;-&nbsp; by **chufan** [<samp>(f52f4)</samp>](https://github.com/142vip/core-x/commit/f52f45bf)

**Release New Version v0.0.1-alpha.2 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**

## v0.0.1-alpha.1 (2026-08-28)

### ✨ Features

- 新增 `syncAgentSkills` API 与 `vip-agent-skills` CLI &nbsp;-&nbsp; by **chufan** [<samp>(e5f5a)</samp>](https://github.com/142vip/core-x/commit/e5f5ab97)

### 📖 Documentation

- 补充通用 skills 真源与 AGENTS 模板 &nbsp;-&nbsp; by **chufan** [<samp>(f3874)</samp>](https://github.com/142vip/core-x/commit/f3874ba8)

**Release New Version v0.0.1-alpha.1 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**

## v0.0.1-alpha.0 (2026-08-27)

### ✨ Features

- 初始化 `@142vip/agent-skills`：跨项目可安装 AI Agent Skills（`code-dev` / `self-check` / `commit`）
- 提供 ESM + CJS 双端 API 与 `vip-agent-skills` CLI（`VipCommander`），同步到下游项目 `.agents/skills/`（永不覆盖 `business-map`）
- CLI / API 支持 `--check`：比对包内 skills 与下游镜像是否漂移
- 导出类型 `VipAgentSkillCliOptions` / `VipAgentSkillSyncOptions` / `VipAgentSkillSyncResult`（供 core-x `AiCommandOptions` 等 extends）
- `code-dev` 覆盖命名/常量/函数/SOLID/分层/数据库/注释日志、禁止中途 `Boolean()`、禁止业务路径 `new Date()`（用 `vipDayjs`）等纪律
- `self-check` 支持根目录 `TODO.md` 迭代维护（完成项删除 + 按优先级推荐后续任务）
- 运行时依赖 `@142vip/utils`（`VipConsole` / `VipColor` / `vipDayjs` / `VipCommander` / `ProcessExitCodeEnum`）
- 附带 `AGENTS.md` / build-map 模板，便于新仓库接入

**Release New Version v0.0.1-alpha.0 [👉 View New Package On NPM](https://www.npmjs.com/package/@142vip/agent-skills)**
