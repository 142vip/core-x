[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / FairyCommitConfig

# 接口: FairyCommitConfig

定义于: [packages/fairy-cli/src/config.ts:30](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L30)

`fairy.config` → `commit`：`fa commit` 的默认参数。
命令行显式传入的同名参数优先；Commander 未传入时的内置默认值不会挡住这里。
`types` / `scopes` / `scopeGlobs` / `verify` 仍是校验规则：写了其中任一字段就不再读 `commit-linter.config`。

## theme_extends

- `Omit`\<[`VipCommitLinterConfig`](../../commit-linter/interfaces/VipCommitLinterConfig.md), `"commit"`\>

## 属性

### config?

> `optional` **config?**: `string`

定义于: [packages/fairy-cli/src/config.ts:32](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L32)

`-f,--config`：`commit-linter` 配置文件。有此字段时优先于本对象里的校验字段

***

### dryRun?

> `optional` **dryRun?**: `boolean`

定义于: [packages/fairy-cli/src/config.ts:42](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L42)

`--dry-run`

***

### message?

> `optional` **message?**: `string`

定义于: [packages/fairy-cli/src/config.ts:38](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L38)

`-m,--message`

***

### push?

> `optional` **push?**: `boolean`

定义于: [packages/fairy-cli/src/config.ts:36](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L36)

`-p,--push`

***

### quiet?

> `optional` **quiet?**: `boolean`

定义于: [packages/fairy-cli/src/config.ts:34](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L34)

`-q,--quiet`

***

### scope?

> `optional` **scope?**: `string`[]

定义于: [packages/fairy-cli/src/config.ts:40](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L40)

`-s,--scope`，可多条；有值时优先于 `scopeGlobs`

***

### scopeGlobs?

> `optional` **scopeGlobs?**: `string`[]

定义于: [packages/commit-linter/src/config.ts:15](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/config.ts#L15)

Monorepo 包路径 glob；由 fairy-cli 扫描 npm 包名并写入运行时 `scopes`。
不传入 `commitLinter`。

#### 继承自

`Omit.scopeGlobs`

***

### scopes?

> `optional` **scopes?**: `string`[]

定义于: [packages/commit-linter/src/commit.interface.ts:98](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L98)

允许的 scope；与内置默认 scope 合并去重

#### 继承自

`Omit.scopes`

***

### types?

> `optional` **types?**: `string`[]

定义于: [packages/commit-linter/src/commit.interface.ts:96](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L96)

允许的 type；与内置默认 type 合并去重

#### 继承自

`Omit.types`

***

### verify?

> `optional` **verify?**: (`gitCommit`) => `boolean` \| `void`

定义于: [packages/commit-linter/src/commit.interface.ts:108](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L108)

额外校验（在格式与白名单通过后执行）。
返回 `false` 或抛错视为不通过（进程 exit 1）。

#### 参数

##### gitCommit

[`GitCommitLinter`](../../commit-linter/interfaces/GitCommitLinter.md)

#### 返回

`boolean` \| `void`

#### 继承自

`Omit.verify`

***

### vip?

> `optional` **vip?**: `boolean`

定义于: [packages/fairy-cli/src/config.ts:44](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L44)

`--vip`
