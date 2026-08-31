# core-x Cursor Rules

> 仅模型与维护者使用，**不出现在**仓库对外文档（`14`）。

## 单次任务路径

```
codegraph sync → 16 全仓清单 → 任务路由 → 读代码小改
→ lint:fix(0 error) → cd 牵连模块 build → 09 文档自检 → 交付
```

## 目录

| 目录 | 职责 |
|------|------|
| `engineering/` | 流程 00~17、命令、文档同步、Mermaid、scripts |
| `business/` | 包职责、任务路由、风格、ESM、技术栈专项 |

## 首读三件套

1. `engineering/00-索引与记忆` — 速查
2. `engineering/16-全仓资产清单` — 31 包 / 4 demo / CI
3. `business/任务路由索引` — 改哪、怎么验证

## 关键文件（按场景）

| 场景 | 文件 |
|------|------|
| 怎么跑命令 | `08`（ci 安装 · cd build） |
| Git 提交 / 发版 | `05`（分类提交 · 发版 playbook · Agent 约束） |
| 文档/站点/docs | `09` |
| 验收 | `02` |
| 架构图 | 根 README + `07` + `10`（五段 · 变更必同步） |
| VitePress | `business/VitePress开发` |
| ESM | `business/ESM与模块发布` |

新事实沉淀：`12`。包表变更同步：`16` + 根 README + `sidebar.ts`。
