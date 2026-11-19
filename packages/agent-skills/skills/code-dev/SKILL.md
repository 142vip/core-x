---
name: agent-code-dev
description: 跨项目高质量代码生成规范（code-dev）。当用户要求实现功能、修复 Bug、重构代码、编写组件或接口、生成代码片段时使用。覆盖命名与常量、函数与 SOLID、类型纪律（禁止 any、慎用 unknown、尽最大努力声明类型）、Nest/HTTP 分层、数据库、注释与日志、最小完整改动（先复用再新写）、下游禁止手改通用 skill 镜像。项目栈与包名以仓库 AGENTS.md 为准。按意图触发。
---

# 代码开发规范（通用核心）

## 目标

生成正确、简洁、风格一致的高质量代码。类型准确、注释清晰，改完可通过局部 lint 与受影响 build。

**本 skill 不绑定任何业务仓库路径或私有 npm 包名。** 日期库、HTTP 工具、状态码枚举、应用目录等以下游项目根目录 `AGENTS.md`（及 `.agents/README.md`）为准。若本仓依赖 `@142vip/utils` 等共享工具，**优先复用**，禁止重复造轮子。

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

## 最小完整改动

理解任务并读完相关代码之后再选方案。对方案省，对阅读和改动范围不省。

### 写之前

读任务和将要改的代码，追真实调用链。列出这次必须到达的位置：调用方、测试、fixture、配置、导出。确认会破坏什么：数据丢失或泄露、调用方失效。这就是范围。没人要求的功能不在范围内。

模糊需求（「做个 X」）只做能完成核心工作的最小版本。多种理解时采用最小的那一种，并在回复里点明。只有会破坏数据，或范围无法判断时才停下来问。

### 按序取第一个能完整工作的

1. **需要存在吗？** 跳过没人要的功能、选项和「以后也许用」的灵活性，用一句话点名跳过了什么。
2. **本仓已有？** helper、组件、服务、写法已经在仓库里，就按周边代码的用法复用。
3. **标准库或平台能力？** 用它，除非项目已有自己的。项目内已有组件优先于再造一个原生控件。
4. **已安装的依赖？** 用它。不要为几行代码新增依赖。
5. **能一行且读者一眼看懂？** 写一行。需要解码才能看懂的一行不算短。
6. **否则** 写能工作的最少代码。

### 约束

- 任务需要的每一处都做完，包括这次改动破坏的调用方、测试和 fixture。
- 不要没人要的抽象、包装、类型转换、选项、配置、样板。值保持平台已经给出的形态。删除优于新增。保持仓库已有的分层、接口和约定。
- 知道必须改到的全部位置之后，最短且能工作的 diff 优先。
- 注释只写代码看不出的原因，一行。这次改动自己产生的无用 import、变量删掉。与本次无关的旧废弃代码只点名，不顺手删。
- 修 Bug：改之前搜被改函数的全部调用方，在共享代码里修一次根因。
- 移动或合并的代码保留原有的错误处理与校验。
- 体量相当的写法里，选边界情况更正确的那个。
- 新的非平凡逻辑（分支、循环、解析、金钱或安全，或一整段新脚本 / 应用）留一个小测试，或基于断言的自检。琐碎改动不需要。
- 已知上限的捷径写成一行注释：`shortcut: <上限>, <何时补上>`。
- 这些不删：信任边界上的校验、防止数据丢失的错误处理、安全、无障碍、真机校准，以及用户明确要求的内容。

回复收尾按 `workflow`：一两句写明跳过了什么、没检查什么，以及用户必须知道的风险。

## 进程与端口管理（强制，对所有 agent 生效）

> 大模型在执行 dev / docs / preview / task-runner 等需要启动本地服务（vite、nest、jest、playwright 等）的任务时，**必须**遵守以下端口与进程纪律，避免工作区被占满 / 端口冲突 / 残留进程污染后续调试。

### 核心原则：不打断开发者已在跑的服务

开发者本机常驻的 dev 进程是**工作环境，不是垃圾**。Agent 的第一义务是**不碰它**。为了验证而起的进程属于「临时工」，用完即卸，且必须是可识别、可精确回收的那一个。

1. **首选应用指定的端口号**：从项目约定（`package.json` 的 `dev` / `start` 脚本、`vite.config`、`.env*`、根 `scripts/` 等）读取**已声明**的目标端口（如 `vite --port 9527` 或 `vite.config.ts` 的 `server.port`）。
2. **启动前先探测，决定「复用」还是「叠加」**：
    - `lsof -nP -iTCP:<port> -sTCP:LISTEN` 找到占用者。`lsof` 有 LISTEN 记录不代表真活着，必须 `curl -m 3 -o /dev/null -w "%{http_code}" http://127.0.0.1:<port>/` 或 `nc -zv` 真实探活。
    - **端口空闲** → 按本仓声明的端口启动。
    - **端口在监听且服务真实响应** → 判定为开发者的实例：
      - 只需要看页面 / 抓接口 → **直接复用该 URL**（浏览器打开 `http://127.0.0.1:<port>`），不再起进程。
      - 需要**验证尚未生效的改动**（改完代码要确认 UI、要跑 HMR 之外的对比）或需要稳定可回收的实例 → 走第 3 条「并行验证实例」。
    - **端口在监听但已无响应**（socket 残留 / 进程卡死）→ 让用户确认后再停，不要自行 `kill`。
3. **并行验证实例（前端项目推荐做法）**：
    - 在**原端口基础上偏移**起一个新实例（如 `9527` → `9528`），**必须带 `--strictPort`**，避免框架自动再 +1 变成 `9529` 这种失控偏移。
    - **必须带 `BROWSER=none`**（或框架等价开关）：否则新实例会抢焦点弹浏览器，打断开发者。
    - **启动即刻记录 `PID`**，并把它写进本轮上下文/回复里。收尾只认这个 `PID`。
    - 实例仅用于验证，验证完**立即关闭**；不要把它当长驻 dev 用。
    - 适用于 vite / webpack-dev-server / next dev 等前端 dev server。后端（nest / spring 等）有数据库与端口绑定、状态耦合重，**默认不并行**，改为与用户确认停旧起新。
4. **回收：只关「我启动且我记录了 PID」的进程**：
    - 收尾命令必须是 `kill <记录的 PID>`（必要时再 `kill -9 <同一 PID>`），**禁止**用「按端口 kill」的写法（`lsof -tiTCP:<port> | xargs kill`、`pkill -f vite`）——端口是共享资源，按端口杀必然误伤开发者实例。
    - 若本轮没记录到 PID，**视为不可回收**：不要凭 `lsof` 猜一个去杀；改为在回复里说明「有一个我起的实例未能回收，端口 X」，让用户处理。
    - 关闭后回到原端口复查：`curl` 开发者的实例仍应是 200，确认没被误伤。
5. **后台进程必须收尾**：`Bash` `run_in_background: true` 启动的 dev / build watcher / 长连接服务，**任务回复前必须**关掉；一次性命令（`pnpm build`、`pnpm typecheck`）执行完即结束。
6. **禁止跨任务占着不释放**：上一轮的后台 dev 下一个无关任务**不能继续依赖**，也不该默认还活着；需要时重新探测。
7. **改动涉及 dev / preview / docker-compose 端口**：调整 `package.json`、`vite.config.ts`、`nest-cli.json` 端口前，先与本仓 `README` / `AGENTS.md` 核对，改完同步文档。
8. **不要为了验证去重启开发者的实例**：需要重启才生效的改动（`build:packages` 打穿 `dist`、改 `vite.config` 自身等），先说明原因与影响，由用户决定是否重启。

**反例**（被叫作"瞎搞"）：

- ❌ 端口 9527 上有开发者的实例，还硬起一个默认端口的实例，然后 `lsof -tiTCP:9527 | xargs kill` 收尾 —— 杀掉的是开发者的进程
- ❌ 收尾时凭「端口上有个 vite」判断「这是我起的」，实际 PID 早已换人
- ❌ 端口被占就盲目接受框架自动 +1（9527 → 9528 → 9529），自己都不记得起了几个
- ❌ 并行实例不带 `BROWSER=none`，每次验证都抢焦点弹窗
- ❌ `pnpm dev` 跑后台 5 个小时后才发现，每次重启电脑都报 "port in use"
- ❌ 探测端口用 `lsof` 一眼就过，不做 `curl` / `nc` 真实探活，结果 socket 在但服务已挂

**正例**：

- ✅ 先 `lsof + curl` 探活；开发者实例健康 → 直接复用其 URL 开浏览器验证
- ✅ 需要独立实例时：`BROWSER=none vite --mode dev --port 9528 --strictPort`，立刻记下 PID，验完 `kill <PID>`，再 `curl` 确认 9527 仍是 200
- ✅ 后台 dev 保存 PID / `task_id`，任务结束主动关
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
12. **Node 文件/路径**：优先本仓共享工具包，**直接调用**（如 `@142vip/utils` 的 `VipNodeJS.pathJoin` / `pathResolve` / `pathDirname` / `existPath` / `writeFileByUTF8`）；工具未覆盖的再使用 `node:fs`（如 `recursive` mkdir、`copyFileSync`、二进制读）
13. **禁止业务路径 `new Date()`**：时间戳 / 格式化 / 过期判断统一用本仓时间工具（如 `vipDayjs`：`getCurrentTimestamp`、`formatToISOStr`、`formatDateToStr`、`isBeforeByTtl`）；无共享工具时集中封装，勿散落
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

## 类型纪律（强制）

| 规则 | 要求 |
|------|------|
| **禁止 `any`** | 触及与新增代码一律不用；无「临时 any / 先写完再改」例外 |
| **慎用 `unknown`** | 仅外部边界（HTTP / JSON / Storage 入参）且**同一函数内**立刻用守卫收窄；禁止领域层、props、返回值长期停在 `unknown` |
| **尽最大努力声明类型** | 优先 `interface` / 联合 / `enum` / 泛型；不确定则读同模块既有类型并对齐，禁止用 `any`/`unknown` 偷懒 |
| **少用 `as`** | 仅边界单点并注释原因；领域层用 `instanceof` / 库守卫 / 具名 type guard |
| **风格统一** | 类型命名、文件放置、导出粒度与同模块现有代码一致 |

- 运行时校验只在边界：HTTP DTO、JSON normalize、Storage
- **入参校验分层（重要）**：前端负责 trim、长度、格式的最终正确性；后端 DTO 只声明约束（`@IsString` / `@MinLength(1)` / `@MaxLength(n)` / `@IsInt` / `@Min`），**传错就报错**。
  - **禁止** `@Transform(({ value }) => (typeof value === 'string' ? value.trim() : ''))` 这类兜底：它把空格、超长、错类型静默改写成空串，问题被藏起来
  - **禁止** `Number.parseInt(String(value)) ?? 0` 手写数字兜底；需要转换用 `@Type(() => Number)` + `@IsInt()`
  - 单个 query 字段也要收进 DTO（可继承基类），保证 whitelist 与校验一致；路径参数 `@Param('id')` 例外
- **禁止无效数组展开**：已是数组禁止 `[...arr]` 仅为传参或再 `.filter`/`.map`；防 sort 突变用 `toSorted`/`toReversed`；Iterable→数组用 `Array.from`；必要隔离拷贝用 `.slice()` 并注释
- **禁止无意义 `String(` / `Number(` / `Boolean(`**：已知标量类型直接用；边界一次 normalize / DTO Transform
- `interface`：按作用域放模块 `*.interface.ts` 或文件顶部；≥2 处引用再独立文件并 export
- **导出命名空间克制**：域内类型不要泄漏到无关上层（如 User 表的 `UserType` 不要挂到 Database 根导出）
- 禁止零信息量 `export type A = B` 完全等价别名

```ts
// ✅ 边界 unknown + 守卫（优先本仓已有守卫）；领域层勿长期停在 unknown
function parseExternalData(raw: unknown): ParsedData {
  if (!isJsonRecord(raw))
    throw new Error('Invalid data')
  const name = typeof raw.name === 'string' && raw.name.trim() ? raw.name.trim() : undefined
  return { name }
}

// ❌ 无效展开
const sorted = [...items].sort(cmp)
items.filter(fn) // 已是数组却先 [...items].filter

// ✅
const sorted = items.toSorted(cmp)
Array.from(someSet).toSorted()
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
10. **禁止只转发一次的局部变量**：`const result = obj.foo; return bar(result)` 直接写成 `return bar(obj.foo)`。`await` 仍先赋给有业务含义的变量，禁止 `return await`。
11. **不要为单处调用新建透传文件**：只放 `toXxxVo = (x) => new XxxVo(x)` 的 `*.presenter.ts` 就地写在调用处；本仓已有 presenter 约定则沿用，不顺手拆掉。
12. **本次新增的导出必须有引用**。零引用的新 `export` 删掉。已发布的公开 API 不因「本仓暂时没引用」而删。

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

### 类型字段注释（DTO / Vo / interface 等数据契约）

| 要写 | 不写 |
|---|---|
| 单位（毫秒 / 亿元 / 万手）、取值范围、是否可空 | `/** 名称 */ name: string` 这类字段名翻译 |
| 枚举取值含义、派生字段的计算口径 | 复述类型（「是字符串」） |
| 敏感字段的脱敏规则（「Cookie 摘要，非原文」） | 无信息量的 `/** 数据 */`、`/** 信息 */` |
| `undefined` 与空串的语义差别、兼容旧字段的原因 | 每个字段都强行加一句，凑密度 |

- 业务复杂的字段必须写清来源与口径，例如「播放总量（来自 upstat 接口，与空间页展示口径一致）」
- 自解释字段（`title` / `cover` / `url`）可只给一句话，不必逐字翻译

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

- **具体边界以本仓 `AGENTS.md` / 规则为准**（哪些包互不依赖、谁可依赖谁）
- **判断标准**：见各包 `package.json` 的 `dependencies` 与源码 `import`；任何反向或超出职责的引用即违规
- 常见约定模式（示例）：
    - 基础通用包之间**互不依赖**（避免循环与职责混淆）
    - 业务应用可依赖共享包；共享包**禁止**反向依赖应用
    - 跨层依赖方向单一：低层 ← 高层，禁止横向互引
- **新增包先写边界**：在 `README.md` 的「职责边界」段写清「依赖谁 / 不依赖谁 / 谁依赖我」

---

## 禁止清单（通用）

| 禁止 | 原因 |
|------|------|
| `any` / 领域层 `unknown` 偷懒 / 滥用 `as` | 破坏类型安全；先写准类型再实现 |
| 魔法值 / 明文常量冒充枚举 | 难维护 |
| 空壳命名（默认 `result` / `data` / `info` / `temp` 等） | 读代码靠猜；须贴业务 |
| 业务路径 `new Date()` / 散落 `Date.now()` | 不统一时区与格式；用 `vipDayjs` |
| 中途 `Boolean(x)` / 无意义 `Number`/`String` | 应在类型/默认参数/边界校验收口 |
| `[...arr].sort` / 无效 `[...arr]` 再 filter | 用 `toSorted` / 直接调用 / `Array.from` |
| 无意义 `buildXxxResult` 薄工厂 | 直接 `return { ... }` |
| 内联 `(await ...)` | 难调试 |
| 否定条件堆叠 / 双重否定 | 难读 |
| 构造函数单行挤写 DI | 可读性差 |
| 无意义单行包装（只透传 lib 的 `pathJoin` 等） | 无收益间接层；直接调 |
| Service 直接操作 Req/Res 或抛 HTTP 层异常 | 降低复用 |
| apps / 包违规互引 | 破坏边界（见 `AGENTS.md` 与上「包依赖边界」节） |
| 为齐全填空值传参 | 无法区分「未筛选」 |
| 顺手改无关代码、留注释废码 | 违反最小改动与 VCS 纪律 |
| **lint 不通过就提交 / 宣称完成** | 日常：改动路径零 error；交付：仓库根全量 lint 按本仓策略通过（见下「Lint 策略」） |
| 未获用户明确要求就 `git commit`；执行 `git push` | 提交权在用户；交付 ≠ 提交；**push 由用户手动操作**（见 `commit`） |

---

## Lint 策略（日常局部 · 交付全量）

与 `self-check` 一致：**日常迭代局部优先，交付收口才全量**。禁止以「只校验改动文件」冒充交付级通过。

### 1. 日常迭代（默认）：局部 lint

```bash
npx eslint --fix --max-warnings 0 <改动路径...>
```

- 改动路径零 error；warning 策略从本仓 `AGENTS.md`
- 禁止借机全仓清历史 warning

### 2. 交付收口（用户要交付 / 提交 / 全量验收）：全量 lint

必须在仓库根跑本仓全量 lint 命令（以 `AGENTS.md` 为准；本仓为 `npx fa lint`）并确认 **0 errors**（warning 归零与否以本仓策略为准）。存量错误当场修掉，或确认为历史债务后登记 `TODO.md`，**不允许**以「本次改动未引入」为由跳过。

### 3. 读配置，不猜

动手前先读本仓根 `eslint.config.js` / `.eslintrc*`：

- 基础配置（如 `@antfu/eslint-config` 及其封装层）与自定义 `rules`
- `ignores` 豁免（常见：`CHANGELOG.md`、`.agents/**`、`db/*.sql`）
- markdown 处理器是否关闭（SKILL.md / README 内代码块是否参与 lint）
- 关键放宽项及其原因（如 DI 兼容、DTO 兼容）

### 4. 常见问题与处置（通用）

| 错误 | 原因 | 处置 |
|------|------|------|
| markdown 文档内 `no-unused-vars` 等 | 默认对 md 处理器开 | 配置 `markdown: false`（若本仓未设） |
| `no-require-imports` 在 CJS 迁移残留 | 旧 `require` 未替换 | 改 ESM `import` |
| `perfectionist/sort-imports` | import 顺序乱 | `npx eslint --fix` 自动重排 |
| 缩进 / 空格类 | 风格不一致 | `npx eslint --fix` |

### 5. 硬性要求

1. 任何「完成 / 自检通过 / lint 干净」声明必须附**真实命令输出**（0 计数或 exit 0）；未执行不得写「应该会通过」
2. 修完必须重跑对应范围 lint 复核
3. **禁止**改 lint 配置关闭规则掩盖问题；依赖配置包有问题时优先本地修复该依赖（见下节），保持根配置走封装层
4. ESLint 配置变更后：全量验证；本仓有 agent-skills 镜像则同步刷新

### 6. 反例

- ❌ 只 lint 单文件就宣告「全部通过」
- ❌ 「这 100 多个错误是历史债」→ 借基线推卸修复
- ❌ lint 还有报错，「先提交再说」
- ❌ 改配置关规则掩盖问题（应先根因修复）

---

## 依赖包本地修复（包管理器 patch 规范）

> **核心原则**：依赖包（尤其本生态 `@142vip/*` 系列）存在 bug / 配置不符合预期时，**禁止**在调用方绕过封装直接调底层库；**应**用包管理器的 patch 能力（如 `pnpm patch`）修复依赖包源码，并在工作区清单（如 `pnpm-workspace.yaml` 的 `patchedDependencies`）固化改动。

### 工作流（以 pnpm 为例）

```bash
# 1) 拉一份包到本地可编辑工作区
pnpm patch <pkg>[@<version>]

# 2) 编辑 patch 工作区内的源文件

# 3) 提交 patch 并注册到 pnpm-workspace.yaml
pnpm patch-commit '<patch_dir>'

# 4) 验证：重装后 patch 仍生效
pnpm install

# 5) 全量 lint / build 确认无回归
```

### 注册与升级

- **pnpm 11+**：`patchedDependencies` 放 `pnpm-workspace.yaml`（`package.json` 的 `pnpm.patchedDependencies` 已废弃）
- patch 文件名遵循包管理器约定（如 `patches/<pkg>__<version>.patch`）
- 上游发布含修复的新版本后：升级依赖版本 → 删 patch 文件与清单条目 → 全量验证

### 反例

- ❌ 调用方写绕开封装的兼容代码 → 破坏封装层
- ❌ 改 `node_modules` 源码但不生成 patch → 重装即丢
- ❌ patch 修改核心逻辑而非配置 / 默认值 → 风险大，应直接 PR 上游

---

## 真源与下游协作约定（通用包适用）

适用于 `@142vip/agent-skills` 等「一处真源、多仓消费」的通用包。

### 真源统一

- 通用能力（skill / 工具 / 配置）的**唯一真源**在发布它的 monorepo（`@142vip` 生态为 `core-x` 的 `packages/<name>/`）；升级、发布都走真源仓
- 下游仓**不持有**本地同名包副本；通过 npm 版本引用；本地联调可临时用 `link:` / `file:`，发布后切回正式版本

### 下游镜像（强制 · 消费方必守）

已由 `vip-agent-skills` / `fa ai` 写入下游的通用 skill（`workflow` · `code-dev` · `self-check` · `commit`）：

| 禁止 | 应做 |
|------|------|
| 在下游仓手改这些镜像「本地定制」通用流程 | 改通用约束 → 改 **`@142vip/agent-skills` 真源**对应 `skills/<name>/SKILL.md` |
| 只把通用 skill 改动 commit 在下游镜像 | 真源改完 → 发版 → 下游 upgrade → `pnpm exec vip-agent-skills --target .` |
| 用下游 PR 覆盖包已同步内容 | 下游只维护不被覆盖的：`AGENTS.md` · `.agents/README.md` · `business-map` · 工具薄入口 |

漂移检测：`pnpm exec vip-agent-skills --target . --check`（不一致 exit 1）。

### workspace 依赖协议（monorepo 包）

- 同一 workspace 内互引用 `workspace:*`
- 若包需跨仓被 `link:` / 发布消费，其内部 `workspace:*` 依赖须换成具体 npm 版本，否则下游解析失败

### 同步基线单文件

- 下游 `.agents/skills/` 只允许 `agent-skills.json` 一个清单文件；**禁止**新建 `*.baseline.json` / `*.manifest.json`
- 镜像误改 → 同一任务回写包内真源，禁止只改镜像

### 类型就近

- 不为同步工具等单建 `interface.ts` 空壳；类型就近放使用方

### 临时文件清理

- 根目录 `_temp_*` / `*.tmp` / `*.bak` / `*.swp` 立即删除；仅用户明确要求保留快照时例外

---

## 执行步骤

1. **定位落点**：确认 app / package，读同模块 3～5 文件
2. **查复用**：本仓已有包与工具（尤其 `@142vip/*`）是否已有等价能力
3. **写代码**：遵守上文纪律，注释与常量同步
4. **清理死代码**：未使用 import / 变量 / 函数
5. **局部 Lint**：本仓约定命令（常见 `eslint --fix --max-warnings 0 <paths>`）
6. **受影响 Build**：见 `self-check` 与 `.agents/README.md` / `AGENTS.md`
7. **TODO 维护**（若根目录存在 `TODO.md`）：见 `self-check`
8. **回复用户**：结论 + 验证 + 变更清单（**不主动 commit；push 由用户手动操作**；提交仅用户指令触发，见 `commit`）

## 参考

- 项目 L0：`AGENTS.md`
- 执行管线：`workflow` · 自检 / TODO：`self-check` · 提交：`commit`
- 包说明：`@142vip/agent-skills` README（如何 upgrade / `vip-agent-skills`）
