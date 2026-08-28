# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

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
