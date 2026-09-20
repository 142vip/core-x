# @142vip/agent-skills

[![NPM version](https://img.shields.io/npm/v/@142vip/agent-skills?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/agent-skills)

通用 Agent Skills 包：同步 `workflow`、`code-dev`、`self-check`、`commit` 到下游项目

## 安装

```shell
# npm
npm install -D @142vip/agent-skills

# pnpm
pnpm add -D @142vip/agent-skills
```

## 功能

- [x] 内置 4 个通用 Skill：`workflow`、`code-dev`、`self-check`、`commit`
- [x] `syncAgentSkills` API：将包内 skills 同步到下游 `.agents/skills/`
- [x] `check` 模式：比对下游镜像与包内 skills 是否一致
- [x] 永不创建 / 覆盖 / 删除下游本地 `business-map`
- [x] CLI：`vip-agent-skills`（亦可通过 `fa ai` 调用）
- [x] 同步后写入基线文件 `.agents/skills/agent-skills.json`

## 配置

可选环境变量：

| 变量 | 说明 |
|------|------|
| `AGENT_SKILLS_TARGET` | 未传 `--target` 时的下游项目根目录 |

## 使用

CLI 同步到当前项目：

```shell
pnpm exec vip-agent-skills --target .
```

校验漂移（不一致时 exit 1）：

```shell
pnpm exec vip-agent-skills --target . --check
```

编程式 API：

```ts
import { syncAgentSkills } from '@142vip/agent-skills'

const result = syncAgentSkills({
  target: '/path/to/repo',
  dryRun: false,
  check: false,
  force: false,
})

console.log(result.synced, result.dest, result.ok)
```

通过 `@142vip/fairy-cli`：

```shell
fa ai sync -t .
fa ai check -t .
fa ai info
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/agent-skills
```

## 参考

- [@142vip/agent-skills](https://www.npmjs.com/package/@142vip/agent-skills)
- [@142vip/fairy-cli](https://www.npmjs.com/package/@142vip/fairy-cli)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
