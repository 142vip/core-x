# @142vip/utils

技术说明。不随 npm 发布。

## 定位

core-x 通用工具层：Node 文件/进程/Git/Docker/执行器、CLI（Commander/Inquirer）、日期/semver/lodash 扩展、Monorepo 包发现、cosmiconfig 配置、终端颜色与日志。

浏览器场景用 `@142vip/utils/browser`，避免把 Node API 打进前端包。

## 功能

### 子路径（`package.json` exports）

- `@142vip/utils` → `src/index.ts`（主入口；`browser` 条件指向 browser 构建）
- `@142vip/utils/browser` → `src/browser.ts`（安全子集）
- `@142vip/utils/node` → `src/node.ts`（re-export 主入口）
- `@142vip/utils/enums` → `src/enums/index.ts`

### browser 包含 / 排除

`@142vip/utils/browser` 来自 `core/index-browser` + `pkgs/index-browser` + `enums`：

- 含：`vipDocSite`、`vipLogger`、`VipColor`、`VipConsole`、`vipDayjs`、`vipLodash`、`vipNanoId`、`vipQs`、`VipSemver`、`VipYaml`、`vipDataTransform`、全量 enums
- **不含**：`VipNodeJS`、`VipGit`、`VipDocker`、`VipExecutor`、`VipMonorepo`、`VipNpm`、`VipPackageJSON`、`VipCommander`、`vipConfig`、`VipInquirer`、`VipJSON`、`vipDetect`

### `core/`（Node）

源码目录：`src/core/`。以下只列行为边界与常用签名；完整方法面见对应文件。

#### `VipNodeJS`（`nodejs.ts`）

进程 / 路径 / 同步读写封装。常用：`getProcessCwd`、`pathJoin`、`readFileToStrByUTF8`、`exitProcess`；完整面见 `nodejs.ts`。

#### `VipGit`（`git.ts`）

```text
VipGit.parseCommitMsg(message: string): GitCommit
VipGit.getRecentCommitHash(): string
VipGit.execCommit(message: string): void
// 另有：分支 / tag / shallow / remote / emoji 转换 —— 见源文件
```

包级还有 `getLastMatchingTag(inputTag)`（与对象方法同源）。

#### `VipDocker`（`docker.ts`）

镜像 / 容器 / 网络 CRUD、登录推送、`buildImage(options)`、`scriptExecutor(command)`。依赖本机 Docker CLI。

#### `VipExecutor`（`exec.ts`）

```text
execCommandSync(command, options?)
execCommand(command, options?)
commandStandardExecutor(options): StandardExecutorResponse
```

#### `VipMonorepo` / `VipNpm` / `VipPackageJSON`

- `VipMonorepo.getPkgNames(globs)` / `getReleasePkgJSON(globs)`：按 glob 扫 workspace
- `VipNpm`：本机 npm/pnpm/turbo 探测与安装封装
- `VipPackageJSON`：读改 `package.json`、版本与 `runScript`

#### `VipDocSite` / `VipLogger`

```text
vipDocSite.getBase(baseName, envKey?): '/' | `/${string}/`
// 默认 envKey = 'NEED_PROXY'；值为 'true' 时加 base 前缀

vipLogger.log(msg, opts?)
vipLogger.error(msg, opts?)
```

### `pkgs/`

#### `vipDayjs`（`dayjs.ts`）

```text
enum DateFormatTemplate {
  DATETIME = 'YYYY-MM-DD HH:mm:ss',
  DATE = 'YYYY-MM-DD',
  TIMESTAMP = 'YYYYMMDDHHmmSSS',
  // …其余模板见源文件 JSDoc
}

vipDayjs.formatCurrentDateToYMD(): string
vipDayjs.getCurrentTimestamp(): number
vipDayjs.isBeforeByTtl(anchorMs, ttlMs, nowMs?): boolean
```

业务时间统一走 `vipDayjs`，勿裸 `new Date()` 拼串。

#### `vipLodash`（`lodash.ts`）

lodash 全量（剔除 `VERSION`）+ 扩展；扩展键**不得**与 lodash 原生同名。

```text
type JsonRecord = Record<string, unknown>

vipLodash.isJsonRecord(value): value is JsonRecord
vipLodash.toJsonRecord(value): JsonRecord          // 非平面对象 → {}
vipLodash.compactMap(collection, iteratee)        // map + compact
vipLodash.pickDiffFields(original, next, keys)    // 仅变更字段
vipLodash.omitUndefined(obj)                      // 去掉 undefined，保留 null/0/''
```

#### `VipSemver`（`semver.ts`）

`valid` / `inc` / `satisfies` / `gt` / `lt` / `eq` / `parse` / `compare` / `prerelease`；`getNextVersions(current, preid?)` 一次算出 major～prerelease 候选。

```text
prereleaseTypes = ['premajor', 'preminor', 'prepatch', 'prerelease']
releaseTypes = [...prereleaseTypes, 'major', 'minor', 'patch']
```

#### `VipCommander` / `vipConfig` / `VipInquirer`

```text
new VipCommander(name, version, description?)
  .init(options).parse(process.argv)
// init 默认注入：--trace / --dry-run / --vip / helpCommand

vipConfig.loadCliConfig<T>(configName, defaults, cosmiconfigOptions?)
vipConfig.mergeCommanderConfig(cliConfig, commanderConfig) // 后者覆盖前者

// VipInquirer：promptList / promptInput / promptInputRequired / promptNumber /
// promptPassword / promptSelect / promptCheckBox / promptConfirm /
// promptConfirmWithSuccessExit / promptSearch / handleSimpleSearchSource
```

#### 其它 `pkgs/`（索引 → 源文件）

- `VipColor` / `VipSymbols`（`color.ts`）：`ansi-colors` + 常用符号
- `VipConsole`（`console.ts`）：`log` / `trace` / `error` + `VipConsoleLogLevel`
- `VipJSON`（`json.ts`）：clone / stringify / parse / 读写文件
- `VipYaml`（`yaml.ts`）：`load` / `loadAll`
- `vipQs`（`qs.ts`）：`stringify` / `parse`
- `vipNanoId`（`nanoid.ts`）：按 `Alphabet` 生成 id
- `vipDetect`（`detect.ts`）：端口 / 缩进 / 换行 / 本机地址
- `vipDataTransform`（`data-transform.ts`）：脱敏串 / 手机号

签名与默认值以对应源文件为准。

### `enums/`（`@142vip/utils/enums`）

```text
HttpStatus // 100～505，与 axios 包状态集合对齐
HttpMethod // GET | POST | PUT | DELETE | PATCH | …
TimeDurationMs // ONE_SECOND … ONE_MONTH …
TimeDurationSec // 同名成员，单位秒
ProcessExitCodeEnum // SUCCESS=0 … TimeoutError=10
RegistryAddressEnum // DOCKER / NPM / VIP_* 镜像与 registry
ReleaseVersionTypeEnum
CpuArchitectureEnum // linux/arm64 | linux/amd64
GitCommit / GitInfo / GitGeneralBranch
CliCommandBaseOptions // dryRun? / vip? / logger?
```

成员字面量见 `src/enums/*.ts`，勿在业务里散落魔法数字。

## 配置

- CLI 配置名由调用方传入（如 `changelog`、`bumpx`），走 cosmiconfig
- 文档站 base：`NEED_PROXY=true` 时 `getBase(name)` 返回 `/${name}/`

## 最佳实践

- JSON 边界：`isJsonRecord` / `toJsonRecord`；数组去 falsy：`compactMap`
- 日期：`vipDayjs` + `DateFormatTemplate`
- HTTP 状态比较：`HttpStatus`（`@142vip/utils/enums`）
- 前端只引 `@142vip/utils/browser`
- 自写 CLI：继承 `VipCommander`，保持 `-v` / `--trace` / `--dry-run` 一致

## 构建

`unbuild` 多入口（`index` / `browser` / `node` / `enums`）：

```shell
cd packages/utils && pnpm build
```

## 验证

```shell
cd packages/utils && pnpm build && pnpm typecheck
```

## 演示

无独立 demo；被 `fairy-cli`、`changelog`、`release-version`、`apps/vitepress-demo`、根 `.vitepress/` 间接使用。
