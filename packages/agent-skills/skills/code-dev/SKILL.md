---
name: agent-code-dev
description: 跨项目高质量代码生成规范（code-dev）。当用户要求实现功能、修复 Bug、重构代码、编写组件或接口、生成代码片段时使用。覆盖命名与常量、函数与 SOLID、类型与对象、Nest/HTTP 分层、数据库、注释与日志、最小改动。项目栈与包名以仓库 AGENTS.md 为准。按意图触发。
---

# 代码开发规范（通用核心）

## 目标

生成正确、简洁、风格一致的高质量代码。类型准确、注释清晰，改完可通过局部 lint 与受影响 build。

**本 skill 不绑定任何业务仓库路径或私有 npm 包名。** 日期库、HTTP 工具、状态码枚举、应用目录等以下游项目根目录 `AGENTS.md`（及可选 `.agents/project/stack.md`）为准。若本仓依赖 `@142vip/utils` 等共享工具，**优先复用**，禁止重复造轮子。

## 触发场景

- 实现新功能、新接口、新页面、新组件
- 修复 Bug / 重构 / 编写 TypeScript · Vue · NestJS（或本仓等价栈）
- 生成工具函数、类型定义、常量与枚举

## 前置：确认改动落点

1. 读本仓 `AGENTS.md` 的应用 / 包边界
2. 不确定目录时：打开应用 README + 同模块 3～5 个现有文件对齐风格
3. 若本仓提供「业务落点」类本地 skill，可先加载；没有也不阻塞
4. 工具侧怎么搜/改文件：见该工具薄入口；本 skill 不写 IDE 专属命令

## 核心原则

1. **正确优先**：逻辑清晰、类型准确、边界合理
2. **最小改动**：每行变更须能追溯到用户需求；不顺手「优化」相邻无关代码
3. **风格一致**：匹配周边命名、结构、注释语言
4. **注释清晰**：解释「为什么」与模块职责；禁止无信息量废话，也禁止关键逻辑零注释
5. **改完自检**：同一轮完成局部 lint + 受影响 build（见 `self-check`）
6. **KISS**：避免过早优化；简单可维护优先

## 进程与端口管理（强制，对所有 agent 生效）

> 大模型在执行 dev / docs / preview / task-runner 等需要启动本地服务（vite、nest、jest、playwright 等）的任务时，**必须**遵守以下端口与进程纪律，避免工作区被占满 / 端口冲突 / 残留进程污染后续调试。

1. **首选应用指定的端口号**：从项目约定（`package.json` 的 `dev` / `start` 脚本、`vite.config`、`.env*`、根 `scripts/` 等）读取**已声明**的目标端口。例如 `apps/vip-admin` 的 dev 端口 = 9527（见 `package.json` 脚本 `vite --mode test` 与 `vite.config.ts` 的 `server.port`）。
2. **端口被占 → 复用现有实例**：
   - 启动前用 `lsof -nP -iTCP:<port> -sTCP:LISTEN` 探测；若已有进程在 LISTEN（且 PID 仍存活），**直接复用，不另起新进程**。
   - `lsof` 仅返回 LISTEN 记录不代表进程真活着（kernel 可能已回收 socket 元信息）——必须用 `curl -m 3 -o /dev/null -w "%{http_code}" http://127.0.0.1:<port>/` 或 `nc -zv` 真实探活。
3. **不擅自偏移端口**：不要在 `Vite` / `next dev` 等框架自动"尝试下一个端口"时盲目接受新端口。如果目标端口被占且无响应，先停掉占用进程（或让用户确认），再启动；不要在原工作区同时存在 9527 / 9528 两个 dev 实例。
4. **后台进程必须收尾**：
   - 使用 `Bash` `run_in_background: true` 启动的 dev / build watcher / 长连接服务，**任务回复前必须**调用 `TaskStop` 或 `pkill -f <pattern>` 关闭；保留进程会让下一次任务的端口探测 / 日志查看 / 资源占用都受影响。
   - 对于非后台的一次性命令（`pnpm build`、`pnpm typecheck` 等），执行完毕即结束，不留进程。
5. **禁止跨任务占着不释放**：一个任务链中已开的后台 dev 服务，下一个无关任务**不能继续依赖**；必要时先 `TaskStop` 旧实例再起新实例，避免孤儿进程累积。
6. **改动涉及 dev / preview / docker-compose 端口**：在 `package.json`、`vite.config.ts`、`nest-cli.json` 等调整端口前，**先与本仓 README / AGENTS.md 核对**，避免改完无人更新文档导致团队成员启动失败。

**反例**（被叫作"瞎搞"）：

- ❌ 端口 9527 被占就开心地"那我用 9528 吧"——工作区出现两个 vite 实例
- ❌ `pnpm dev` 跑后台 5 个小时后才发现，每次重启电脑都报"port in use"
- ❌ 改了 `vite.config.ts` 的 `server.port` 没同步 `README.md` 启动说明
- ❌ 探测端口用 `lsof` 一眼就过，不做 `curl`/`nc` 真实探活，结果 socket 在但服务已挂

**正例**：

- ✅ 启动前 `lsof + curl` 双向探活；端口可用 → 启动；端口被占且真实在用 → 复用，不另起
- ✅ 后台 dev 用 `TaskStop` 或保存 `task_id`，任务结束主动关
- ✅ 改端口前看 `README.md` / `AGENTS.md`，改完同步文档

## 业务命名同步（强制）

业务职责变了，**同一任务内**改齐标识，禁止只改 UI 标题：

| 对象 | 要求 |
|------|------|
| 目录 / 文件 | 落在真实业务域目录 |
| 路由 name/path、组件 name | 与菜单 / 导航职责一致 |
| 变量 / 类型 / 注释 | 勿混用无关域的旧名 |

---

## 变量与命名

1. **可发音、有意义**的名字；禁止单字母心理映射（循环用 `location` 而非 `l`）
2. **同一概念用同一词汇**（User / Account 勿混用）
3. **命名贴业务，禁止空壳词**：慎用 / 默认不要用 `result`、`data`、`info`、`item`、`temp`、`obj`、`val`、`ret`、`res`（HTTP Response 等业界固定缩写除外）。
   名称须能回答「这是什么业务对象」：
   `syncOutcome` / `driftPaths` / `userProfile` / `orderList`，而不是 `result` / `data` / `list`
4. **禁止魔法值**：常量进模块 `constants.ts` 或类顶部；模版字符串可封装为函数
   `export const formatUserLabel = (name: string) => \`name is ${name}\``
5. **常量数组**：直接字面量 + `as const`，**不要** `Object.freeze([...])`（啰嗦无收益）
   `export const CORE_SKILL_NAMES = ['code-dev', 'self-check', 'commit'] as const`
6. **包名 / 版本**：从本包 `package.json` 读取（如 `VipPackageJSON.getPackageJSON` / `getCurrentVersion`），禁止源码里散落 `'@scope/name'` 硬编码
7. **枚举**：用 `enum`，**显式字面量**（`= 0` / `= 1` 或字符串），禁止「裸常量 + 注释」冒充枚举
8. **命名约定**

| 种类 | 约定 |
|------|------|
| 简单常量 | `SCREAMING_SNAKE_CASE` |
| 枚举名 | `PascalCase`；枚举成员 `SCREAMING_SNAKE_CASE` |
| 类 / 接口 / 类型 | `PascalCase` |
| 方法 / 函数 / 变量 | `camelCase` |
| 未使用的局部 | 前缀 `_`（如 `_unused`） |

9. **解释变量**：复杂表达式先拆**带业务含义**的中间量再使用（`matchedUser`、`isQuotaExceeded`），不要拆成 `tmp` / `result`
10. **默认参数**优于 `x \|\| default` / 三元短路赋默认
11. **配置优于环境变量散落读取**：业务默认值、开关优先配置模块；`process.env` 仅边界注入并集中映射（见本仓配置约定）
12. **Node 文件/路径**：优先本仓 `@142vip/utils`，**直接调用**（`VipNodeJS.pathJoin` / `pathResolve` / `pathDirname` / `existPath` / `writeFileByUTF8` 等）；utils 未覆盖的再使用 `node:fs`（如 `recursive` mkdir、`copyFileSync`、二进制读）
13. **禁止业务路径 `new Date()`**：时间戳 / 格式化 / 过期判断统一本仓 `vipDayjs`（`getCurrentTimestamp`、`formatToISOStr`、`formatDateToStr`、`isBeforeByTtl` 等）
14. **布尔不要中途 `Boolean(x)` 洗一遍**：在类型、默认参数、解构默认、CLI option 默认值、入参校验等**边界前置收口**；函数体内直接用已确定的 `boolean`

```ts
// ❌ 心理映射 + 空壳命名 + 短路默认 + Boolean 洗类型 + new Date
locations.forEach(l => dispatch(l))
const result = await load()
const dryRun = Boolean(options.dryRun)
function create(name) { const n = name || 'default' }
const syncedAt = new Date().toISOString()

// ✅ 业务语义清晰 + 默认参数 + vipDayjs
locations.forEach(location => dispatch(location))
const userProfile = await loadUserProfile()
const { dryRun = false } = options
function create(name = 'default') { /* ... */ }
const syncedAt = vipDayjs.formatToISOStr()
```

---

## 类型、interface 与导出边界

- 运行时校验只在边界：HTTP DTO、JSON normalize、Storage
- **禁止非必要 `any` / `as`**；`as` 仅边界单点并注释；领域层用 `instanceof`、库守卫、具名 type guard
- `interface`：按作用域放模块 `*.interface.ts` 或文件顶部；≥2 处引用再独立文件并 export
- **导出命名空间克制**：域内类型不要泄漏到无关上层（如 User 表的 `UserType` 不要挂到 Database 根导出）
- 禁止零信息量 `export type A = B` 完全等价别名

```ts
// ✅ 边界 unknown + 守卫（优先本仓已有，如 vipLodash.isJsonRecord）
function parseExternalData(raw: unknown): ParsedData {
  if (!isJsonRecord(raw))
    throw new Error('Invalid data')
  const name = typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim() : undefined
  return { name }
}
```

---

## 函数

1. **只做一件事**；名称完整说明作用（动词 + 业务对象，如 `collectSkillDrifts`，而非 `doWork` / `handle`）
2. **参数宜 ≤2**；再多则收拢为 options 对象
3. 类方法显式 `public` / `private` / `protected`
4. **避免否定条件**主导分支；复杂/重复判断抽成具名谓词函数
5. 调用者写在被调用者**上方**（报纸顺序：自上而下读）
6. 能纯则纯；副作用边界集中
7. **禁止有害内联 await**（实参/返回值/对象字面量里套 `(await …)`）
8. **禁止无意义一层包装**：函数体若只是 `return lib.fn(...args)` 或等价透传，**直接调 lib**，不要再套 `pathJoin` / `pathResolve` 这类本地别名。
   封装门槛：至少具备**其一**——组合多步、补全 utils 缺口（如 recursive mkdir）、统一错误/日志边界、跨多处复用的真实业务规则。注释写清「为何存在」。
9. **可直接 `return { ... }` 就不要再造 `buildXxxResult` 薄工厂**（字段组装不复杂时）

```ts
// ❌ 无意义包装
export function pathJoin(...parts: string[]) {
  return VipNodeJS.pathJoin(...parts)
}

// ✅ 直接调用
VipNodeJS.pathJoin(root, 'skills')

// ✅ 有真实组合逻辑才封装
export function copyFile(fromPath: string, toPath: string): void {
  ensureDir(VipNodeJS.pathDirname(toPath))
  fs.copyFileSync(fromPath, toPath)
}

// ✅ 可选布尔：默认参数 / 解构默认收口
function run(options: { dryRun?: boolean, check?: boolean }) {
  const { dryRun = false, check = false } = options
  if (check && dryRun)
    throw new Error('mutually exclusive')
}

// ❌ 中途 Boolean 洗类型（无信息量、易掩盖 undefined）
const dryRun = Boolean(options.dryRun)
const force = Boolean(cliOptions.force)

// ✅ 时间：vipDayjs（禁止 new Date()）
syncedAt: vipDayjs.formatToISOStr()
const nowMs = vipDayjs.getCurrentTimestamp()

// ❌
syncedAt: new Date().toISOString()

// ✅ await 先赋业务名；return 直接对象字面量
const accessToken = await this.getAccessToken()
const orderDetail = await this.fetchOrderDetail(accessToken)
return { orderDetail }

// ❌ 内联 await + 空壳 result + 无意义 buildResult
return buildSyncResult({ result: await this.fetchData(await this.getToken()) })
```

---

## 对象与数据结构

- 需要字段子集时用 `pick` / `omit`（若本仓有 `vipLodash` 等），避免多重解构撞名
- 默认**拷贝**再改；大对象且明确只读共享时才传引用
- 优先对象展开 / `Object.assign` 浅拷贝，避免就地乱改共享引用
- 同一逻辑路径避免对同一可变对象建多个别名引用后分头修改

---

## 类与 SOLID

- **类名 = 文件名**，模块/文件夹名一致
- 需要链式 API 时，变异方法末尾 `return this`
- **S** 单一职责 · **O** 对扩展开放、对修改关闭 · **L** 子类可替换父类
  **I** 多小接口优于胖接口 · **D** 依赖抽象，高层不绑死低层细节
- 避免过早抽象与过度设计

---

## 后端（Nest 类等）

- Controller：HTTP / DTO·VO / 状态码；**不**把胖业务塞进 Controller
- Service：领域逻辑；**避免**直接碰 Req/Res；**避免**直接抛 HTTP 专用异常（交给 Controller 映射），以利复用
- 构造函数 DI 参数分行；装饰器单独一行
- 返回 `Promise` 的方法须 `async` 并 `await`；无意义 `return await` 服从本仓 ESLint
- 接口方法名与路由语义一致；淘汰接口标 `@Deprecated()`（或本仓等价）
- 入参/出参用 DTO/VO，便于文档；HTTP 状态码用本仓枚举（如 `HttpStatus`），禁止裸 `401`
- 缓存 Key、配置目录等：**读 `AGENTS.md`**，本 skill 不写死前缀

```ts
class ExampleService {
  constructor(
    private readonly repo: ExampleRepository,
  ) {}

  public async getDetail(id: string): Promise<ExampleEntity> {
    return await this.repo.findOneById(id)
  }

  private buildQuery(params: QueryParams): FindOptions {
    return {}
  }
}
```

---

## 前端（Vue / Nuxt 类）

- 优先 `<script setup lang="ts">`
- API 走本仓 service / api 层；页面禁止直引裸 `fetch`/`axios`（若 `AGENTS.md` 禁止）
- 传参最简：可选项无值不传；禁止为「字段齐全」填空字符串 / null
- 主题色走 token / CSS 变量；响应式兼顾本仓断点

---

## 数据库（若本仓有 ORM / SQL）

1. 枚举列用 **enum 类型**，不要用无语义的 number/string 裸列装枚举
2. 可空：`type | null`，区分 `null` 与 `undefined`；勿只用 `?:` 模糊可空
3. **事务块最小化**；避免跨库事务（需则评审）
4. 不设用不到的 DB 默认值
5. 避免 QueryBuilder / 手写 SQL；例外**必须**落在 Repo 并注释原因
6. 列顺序习惯：`id` 靠前，时间靠后，相关字段成组
7. 避免 ORM Relations 懒关联滥用（需则评审）
8. 若要对 JSON 内容二次过滤/查询，**重新建模**，不要把查询热点设计成 JSON 大字段（以本仓 DB 为准）

---

## 注释、日志与错误

| 对象 | 要求 |
|------|------|
| 模块/文件头 | 职责（做什么、不做什么） |
| 逻辑端点 | 接口 / 定时任务 / 消费者：业务功能 + 特殊约束/设计 |
| 复杂分支 | **为什么**（口径、降级、兼容）——注释是说明取舍，不是复述代码 |
| 正则 | 注明意图 |
| 配置项 | 单位（如 `timeout: 90_000 // ms`） |
| 待改进 | `// TODO:` + 可执行说明 |
| 保留代码 | `// keep:` + 原因 |
| 注释掉的旧代码 | **不要**留在库里，交给版本控制 |

- **日志**：`error` 须带账号、单号、主键等**业务上下文**，禁止只有 `xxx error`
- **try/catch 最小化**；预期内错误用本仓自定义异常/错误类型抛出
- 测试：每次只断言一个概念（若本仓有单测）

**不写**：复述字面含义的废话、无信息量标签。

---

## HTTP 状态码、日期、工具复用

- 状态码 / 方法：本仓枚举与 API 约定（部分仓强制 `PATCH`、禁用 `PUT`）
- 业务时间 / TTL：只用本仓 `vipDayjs` + 时长常量（如 `TimeDurationMs`）；**禁止 `new Date()` / `Date.now()` 散落**（例外：与第三方 SDK 契约必须传 `Date` 时，边界单点转换并注释）
- JSON 边界守卫、pick/omit、执行器、彩色日志等：优先 `@142vip/utils` 或本仓已有封装

## 包依赖边界（按下游 monorepo 适用）

- **`@142vip/common` ↔ `@142vip/utils` 互不依赖**：common 包内禁止 import utils；时间相关需求在 common 内直接用原生 `Date`（`Date.now()` / `new Date(x).getTime()`），TTL 常量等仅在**业务侧**从 utils 引入
- **`@142vip/common` ↔ `@142vip/vue` 互不依赖**：禁止互相 import / workspace 依赖；二者均可依赖外部 `@142vip/cdn` 等
- **`@142vip/vue` 可被 `apps/*` 依赖，禁止反向依赖 `apps/*`**
- **判断标准**：见各包 `package.json` 的 `dependencies` 与源码 `import '@142vip/*'`；任何反向或超出职责的引用即违规
- **新增包先写边界**：在 `README.md` 的「职责边界」段写清「依赖谁 / 不依赖谁 / 谁依赖我」

---

## 禁止清单（通用）

| 禁止 | 原因 |
|------|------|
| `any` / 领域层滥用 `as` | 破坏类型安全 |
| 魔法值 / 明文常量冒充枚举 | 难维护 |
| 空壳命名（默认 `result` / `data` / `info` / `temp` 等） | 读代码靠猜；须贴业务 |
| 业务路径 `new Date()` / 散落 `Date.now()` | 不统一时区与格式；用 `vipDayjs` |
| 中途 `Boolean(x)` 洗布尔 | 应在类型/默认参数/边界校验收口 |
| 无意义 `buildXxxResult` 薄工厂 | 直接 `return { ... }` |
| 内联 `(await ...)` | 难调试 |
| 否定条件堆叠 / 双重否定 | 难读 |
| 构造函数单行挤写 DI | 可读性差 |
| 无意义单行包装（只透传 lib 的 `pathJoin` 等） | 无收益间接层；直接调 |
| Service 直接操作 Req/Res 或抛 HTTP 层异常 | 降低复用 |
| apps / 包违规互引 | 破坏边界（见 `AGENTS.md` 与上「包依赖边界」节） |
| 为齐全填空值传参 | 无法区分「未筛选」 |
| 顺手改无关代码、留注释废码 | 违反最小改动与 VCS 纪律 |
| **全仓 lint 不通过就提交 / 宣称完成** | 禁止只校验改动文件就汇报；必须 `pnpm lint`（`npx fa lint` ≡ `npx eslint .`）根目录全量跑过 0 错误 0 警告才算交付 |

---

## 代码自检与全仓 lint 强制通过（执行步骤前置门禁）

> **强制**：每次声明「完成」「自检通过」「代码质量高」前，必须在仓库根目录跑过 `pnpm lint`（等价 `npx fa lint` ≡ `npx eslint .`）并确认 **0 errors / 0 warnings**。**只对变更文件 lint 不算合格**——存量 lint 错误必须随提交一并修掉或显式登记 TODO。

### 1. 标准命令

```bash
# 推荐：在仓库根目录跑
pnpm lint

# 等价命令（fa lint 内部就是这条）
npx eslint .

# 仅查看不修改
pnpm lint

# 自动修复（能 fix 的会 fix，fix 不了的仍报错）
pnpm lint:fix
```

### 2. 配置现状（142vip-oauth 仓库根 `eslint.config.js`）

- 基于 `@antfu/eslint-config`（`@142vip/eslint-config` 间接封装）+ 自定义 `rules`
- 已**关闭** markdown 处理器（`markdown: false`）—— SKILL.md / README.md 等教学文档内的 ts/js 代码块示例不参与 lint
- ignores 显式豁免：`**/CHANGELOG.md`、`.agents/**`、`db/*.sql`
- 关键 rules 段：
  - `ts/consistent-type-imports: off`（Nest.js 依赖注入兼容）
  - `ts/no-inferrable-types: ['error', { ignoreProperties: true }]`（DTO 兼容 swagger）
  - `vue/multi-word-component-names` 白名单：`['index', 'App', 'Register', '[id]', '[url]']`
  - `antfu/no-import-dist: 1`（业务存在 dist 路径构建产物）

### 3. 常见问题与处置

| 错误 | 原因 | 处置 |
|------|------|------|
| markdown 文档内 `ts/no-unused-vars` 等 | antfu 默认对 md 处理器开 | 配置 `markdown: false`（已就位） |
| `ts/no-require-imports` 在 CJS 迁移残留 | 旧 require 未替换 import | 改 ESM `import` 或加 `// eslint-disable-next-line` |
| `vue/multi-word-component-names` 报错 | 单字组件名 | 加白名单或重命名 |
| `perfectionist/sort-imports` 报错 | import 顺序乱 | 直接 `npx eslint --fix` 自动重排 |
| `Expected indentation of ... spaces` | 缩进风格不一致 | `npx eslint --fix` |

### 4. 大模型执行硬性要求

1. **任何「完成」「自检通过」「lint 干净」声明必须附 `pnpm lint` 实际命令输出**（含 `✖ N problems` 那行 0 计数；或空输出 + exit code 0）
2. **禁止**只 `npx eslint src/foo.ts` 就说「lint 通过」——全仓必须跑
3. **遇到存量错误**：必须当场修掉，**不允许「本次改动未引入」为由跳过**（git stash 法验证基线后可修；如确认是历史债务，登记进 TODO.md 而非搁置）
4. **新增/修改文件后**：必须再跑一次全量 lint 确认 0 报错
5. **ESLint 配置文件改动**（`eslint.config.js`、`.eslintrc*`）：必须同步 `pnpm exec vip-agent-skills --target .` 让 skill 镜像更新

### 5. 反例（典型错误做法）

- ❌ "改动文件 lint 通过了" → 只 lint 单文件就宣告完成
- ❌ "typecheck 跑过 117 个错误是历史债" → 借基线推卸修复
- ❌ "lint:fix 跑过但还有 5 个报错，先提交再说" → 提交带错
- ❌ 改 `eslint.config.js` 关闭规则掩盖问题 → 必须先根因修复
- ❌ 改 `eslint.config.js` 改用 antfu 直调绕开 `@142vip/eslint-config` 的问题 → **应该用 pnpm patch 本地修复依赖包**，让根配置继续走封装层

---

## 依赖包本地修复（pnpm patch，强制规范）

> **核心原则**：当依赖包（特别是本仓的 `@142vip/*` 系列）存在 bug / 配置不符合预期时，**禁止**在调用方（如 `eslint.config.js`）绕过封装直接调底层 antfu / Vue / unplugin 之类的库，**必须**用 pnpm patch 修复依赖包源码，并通过 `pnpm-workspace.yaml` 的 `patchedDependencies` 字段把改动固化下来。

### 1. 工作流

```bash
# 1) 拉一份包到本地可编辑工作区
pnpm patch <pkg>[@<version>]

# 2) 按提示编辑 ./node_modules/.pnpm_patches/<pkg>@<version>/ 下的源文件
#    （与直接改 node_modules 的区别：pnpm-patches 目录是 git-ignored 之外的干净工作区）

# 3) 提交 patch 文件到 pnpm-workspace.yaml
pnpm patch-commit '<patch_dir>'

# 4) 验证：pnpm install 重装后 patch 仍然生效
pnpm install
node -e "<验证脚本>"

# 5) 跑全量 lint / build 确认未引入回归
pnpm lint
```

### 2. pnpm-workspace.yaml 注册

- **pnpm 11+**：`patchedDependencies` **必须**放 `pnpm-workspace.yaml`，不再读 `package.json` 的 `pnpm.patchedDependencies` 字段
- 格式：

```yaml
patchedDependencies:
  '@142vip/eslint-config@0.0.1-alpha.5': patches/@142vip__eslint-config@0.0.1-alpha.5.patch
```

- patch 文件名格式：`patches/<pkg>__<version>.patch`（双下划线是 pnpm 约定，避开 `__proto__` 等特殊名）

### 3. 升级路径

当上游包发布新版本（已包含本地修复）时：

1. 升级根 `package.json` 依赖版本号 → `pnpm install`
2. 删除 `patches/` 目录下对应文件
3. 从 `pnpm-workspace.yaml` 的 `patchedDependencies` 段移除对应条目
4. 删除根 `package.json` 中残留的 `pnpm` 字段（pnpm 11 已废弃）
5. 跑 `pnpm lint` 全量验证

### 4. 反例（典型错误做法）

- ❌ 在调用方写绕开封装的兼容代码（如 `import { antfu } from '@antfu/eslint-config'`）→ 破坏本仓 `@142vip/*` 封装层
- ❌ 改 `node_modules/<pkg>/...` 源码但没生成 patch → 重装就丢
- ❌ 把 `pnpm.patchedDependencies` 放 `package.json`（pnpm 11+ 已废弃，会被警告忽略）
- ❌ patch 修改了核心逻辑而非配置/默认值 → 风险大、应直接 PR 上游

---

## 跨仓 monorepo 工作流（core-x / 142vip-oauth，强制规范）

### 通用包（`@142vip/agent-skills` / `@142vip/eslint-config` / 其他通用工具）位置

- **真源统一在 `core-x` 仓**（`packages/<name>/`）—— 升级、发布、新增都走 core-x
- **`142vip-oauth` 仓不持有**本地同名包目录（不留 `packages/142vip-agent-skills/`，不留 `patches/`）
- `142vip-oauth` 仓通过 pnpm `link:` 协议跨仓引用 core-x：

  ```jsonc
  // 142vip-oauth/package.json
  {
    "dependencies": {
      "@142vip/agent-skills": "link:../core-x/packages/agent-skills",
      "@142vip/eslint-config": "link:../core-x/packages/eslint-config"
    }
  }
  ```

### `core-x` 仓包内 `@142vip/*` deps 协议

- 同 core-x 仓 workspace 内的 `@142vip/*` 必须用 `workspace:*`
- **`@142vip/cdn` 是 npm 上的外部包（不在 core-x workspace），按 npm 版本号引用**（如 `^0.0.1-alpha.10`）
- 跨仓 `link:` 引入到下游仓（142vip-oauth）时，core-x 包自身 deps 不能继续用 `workspace:*` —— 必须用具体 npm 版本号，否则 pnpm 在下游仓解析失败
- 例外：仅 core-x 仓内 build / typecheck 仍可保持 `workspace:*`；需要跨仓 link 的包**必须**用 npm 版本号

### 跨仓升级 / 发布流程

1. **core-x 改 src**（修代码 / 加功能）
2. **core-x build**：`pnpm --filter @142vip/<name> build`（产生 `dist/`，含 `cli.cjs` 等所有 entries）
3. **142vip-oauth apply + check**：`pnpm exec vip-agent-skills --target .` + `pnpm exec vip-agent-skills --target . --check`
4. **core-x 发布**：用户自行 `pnpm publish`（大模型勿代发）
5. **142vip-oauth 切 npm 版本**：`"link:../core-x/..."` → `"0.0.1-alpha.0"`（与已发布的版本对齐）
6. **删除本地残留**：清空 `patches/`、`node_modules/.pnpm_patches/`

### `agent-skills.json` 单一文件（强制）

- 下游 `.agents/skills/` 目录**只允许**存在 `agent-skills.json` 这一个清单文件
- 旧版 `.agent-skills-baseline.json` + `.sync-manifest.json` 双文件结构**已废弃**
- 同步时统一覆写 `.agents/skills/agent-skills.json`
- 大模型不得新建 `*.baseline.json` / `*.manifest.json` 等其它清单

### `interface.ts` 移除约定

- `@142vip/agent-skills` 包**不再持有** `src/core/interface.ts`
- 类型直接内联到 `src/core/sync.ts`（`VipAgentSkillSyncOptions` / `VipAgentSkillSyncResult`）
- 大模型不得新建 `interface.ts` —— 同步类型应就近放在使用方

### 临时文件清理

- 根目录 `_temp_*`、`*.tmp`、`*.bak`、`*.swp` 视为临时文件，应**立即删除**
- 仅在用户明确要求「保留调试快照」时例外

---

## 执行步骤

1. **定位落点**：确认 app / package，读同模块 3～5 文件
2. **查复用**：本仓已有包与工具（尤其 `@142vip/*`）是否已有等价能力
3. **写代码**：遵守上文纪律，注释与常量同步
4. **清理死代码**：未使用 import / 变量 / 函数
5. **局部 Lint**：本仓约定命令（常见 `eslint --fix --max-warnings 0 <paths>`）
6. **受影响 Build**：见 `self-check` 与 `.agents/project/build-map.md`（若有）
7. **TODO 维护**（若根目录存在 `TODO.md`）：见 `self-check`
8. **回复用户**：结论 + 验证 + 变更清单

## 参考

- 项目 L0：`AGENTS.md`
- 自检 / TODO：`self-check` · 提交：`commit`
- 包说明：`@142vip/agent-skills` README（如何 upgrade / `vip-agent-skills`）
