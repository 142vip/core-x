# @142vip/agent-skills

技术说明。不随 npm 发布。

## 定位

通用 Agent Skills 真源包：维护 `workflow` / `code-dev` / `self-check` / `commit` 四套通用 Skill，并提供 API 与 CLI 将包内 `skills/` 同步到下游项目 `.agents/skills/`。永不创建、覆盖或删除下游本地的 `business-map` skill。

## 功能

### 子路径

- `@142vip/agent-skills`：主入口（`src/index.ts`）
- bin：`vip-agent-skills`（`bin/vip-agent-skills.cjs` → `runCli`）

### 包内 skills 目录（`skills/`）

- `workflow/SKILL.md`
- `code-dev/SKILL.md`
- `self-check/SKILL.md`
- `commit/SKILL.md`

### 常量（`src/core/constants.ts`）

- `CORE_SKILL_NAMES`：`['workflow', 'code-dev', 'self-check', 'commit']`（`as const`）
- `CoreSkillName`：`(typeof CORE_SKILL_NAMES)[number]`
- `BUSINESS_MAP_SKILL_NAME`：`'business-map'`（仅下游本地 skill，包内不同步）
- `DOWNSTREAM_SKILLS_SEGMENTS`：`['.agents', 'skills']`
- `AGENT_SKILLS_BASELINE_FILE_NAME`：`'agent-skills.json'`（同步成功后写入下游 `.agents/skills/agent-skills.json`，记录包名、版本、已同步 skill 列表）
- `ENV_AGENT_SKILLS_TARGET`：`'AGENT_SKILLS_TARGET'`（未传 `--target` 时解析下游根目录）

### 路径与元信息（`src/core/paths.ts`）

- `getPackageRoot(): string`：向上查找 `package.json` 定位包根
- `getPackageName(): string`：读取 `package.json` `name`
- `getVersion(): string`：读取 `package.json` `version`
- `getSkillsRoot(): string`：`{packageRoot}/skills`
- `getTemplatesRoot(): string`：`{packageRoot}/templates`

### 同步 API（`src/core/sync.ts`）

- `syncAgentSkills(options: VipAgentSkillSyncOptions): VipAgentSkillSyncResult`
  - `target`：下游项目根（内部 `pathResolve`）
  - `dryRun?`：只打印动作不写盘，默认 `false`
  - `force?`：目标无 `package.json` 仍继续，默认 `false`
  - `check?`：只比对不写盘；不一致时 `ok === false`，默认 `false`
- `VipAgentSkillSyncResult` 字段：`package`、`version`、`target`、`dest`、`synced`、`dryRun`、`check`、`ok`、`drifts`（漂移相对路径，如 `code-dev/SKILL.md`）

### 内部 IO 辅助（`src/core/fs.ts`，不单独导出）

- `ensureDir`、`readdirWithTypes`、`copyFile`、`writeTextFile`、`filesEqual`

### CLI（`src/cli.ts`）

- `runCli(argv?: string[]): void`
- `VipAgentSkillCliOptions`：`target?`、`dryRun?`、`force?`、`check?`（供下游如 `AiCommandOptions` extends）

CLI 命令名：`vip-agent-skills`

```text
vip-agent-skills [options]

选项（VipCommander）：
  -t, --target <path>   下游项目根目录（默认 cwd；或 env AGENT_SKILLS_TARGET）
  --dry-run             试运行，不写盘（VipCommander.init 注入）
  --check               比对包与下游镜像是否一致（不一致 exit 1）
  --force               目标无 package.json 也继续
  -h, --help            帮助

互斥：--check 与 --dry-run 不可同时使用
```

### 发布 `files`

`bin`、`dist`、`skills`、`templates`

## 配置

### 环境变量

- `AGENT_SKILLS_TARGET`：未传 `--target` / `-t` 时作为下游项目根目录

### `package.json` engines

- `node`: `>=16.0.0`

## 最佳实践

- 改 Skill 内容只改 `packages/agent-skills/skills/**`，再 `fa ai sync` 或 `vip-agent-skills --target .` 刷新下游 `.agents/skills/`
- CI 防漂移：`vip-agent-skills --check --target .`，不一致 exit 1
- 下游业务 skill 放 `business-map/`，同步逻辑永不触碰
- 程序化集成优先 `syncAgentSkills`，CLI 与 `fa ai` 共用同一实现
- 扩展 CLI 选项时让下游 `extends VipAgentSkillCliOptions`，勿重复定义 `--target` / `--check` 语义

## 构建

`unbuild` 双格式（`.mjs` + `.cjs`）

```shell
cd packages/agent-skills && pnpm build
```

## 验证

```shell
cd packages/agent-skills && pnpm build && pnpm typecheck
cd packages/agent-skills && pnpm test
```

同步自检（在 core-x 根目录）：

```shell
pnpm exec vip-agent-skills --target . --check
```

## 演示

core-x 本仓：`.agents/skills/` 为 `fa ai sync` 生成的下游镜像；真源在 `packages/agent-skills/skills/`。
