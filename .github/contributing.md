# @142vip/core-x 贡献指南

你好！很高兴看到你有兴趣为 `@142vip/core-x` 做出贡献。在提交你的贡献之前，请花一点时间阅读以下指南：

- [Pull Request 指南](#pull-request-指南)
- [开发环境设置](#开发环境设置)
- [脚本](#脚本)
- [项目结构](#项目结构)
- [贡献测试](#贡献测试)

## Pull Request 指南

### 哪些类型的 Pull Request 会被接受？

- **修复明确识别的 bug**。"明确识别的 bug"意味着该 bug 有来自相关开放问题的适当复现，或者在 PR 本身中包含复现。避免提交声称修复问题但没有充分解释修复内容的 PR。

- **解决明确解释且广泛适用用例的新功能**。"广泛适用"意味着新功能应该为大多数用户群提供非微不足道的改进。Vue 已经有很大的 API 表面积，所以我们对添加新功能相当谨慎 - 如果用例是小众的并且可以通过用户空间实现来解决，那么它可能不适合进入核心。

  功能实现还应考虑增加的复杂性与获得的收益之间的权衡。例如，如果一个小功能需要在整个代码库中进行重大更改，那么它可能不值得，或者应该重新考虑方法。

  如果该功能有非平凡的 API 表面积增加，或者显著影响用户处理常见用例的方式，那么它应该首先在 [RFC 仓库](https://github.com/vuejs/rfcs/discussions) 中进行讨论。没有事先讨论的此类功能的 PR 会使得调整 API 设计变得非常困难，因为它们与具体实现耦合，可能导致工作浪费。

- **常规任务**：拼写错误、评论改进、构建配置、CI 配置等。对于拼写错误和评论更改，尽量将多个更组合到一个 PR 中。

- **请注意，我们不鼓励贡献者提交主要是风格性的代码重构**。代码重构只有在提高性能，或者有充分解释说明它客观上提高了代码质量（例如，使相关功能实现更容易）的情况下才会被接受。

  原因是代码可读性是主观的。这个项目的维护者已经根据我们的偏好选择了当前的代码风格，我们不想花时间解释我们的风格偏好。贡献者在贡献代码时应该尊重已建立的约定。

  另一个方面是，大规模的风格变更会导致涉及多个文件的大量差异，给 `git` 历史添加噪音，并使跟踪跨提交的行为变更更加麻烦。

### Pull Request 清单

- Vue 核心有两个主要工作分支：`main` 和 `minor`。

    - 如果你的 pull request 是添加新 API 表面积的功能，它应该提交到 `minor` 分支。
    - 否则，它应该提交到 `main` 分支。

- [确保勾选 "Allow edits from maintainers" 框](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)。这允许我们直接进行小的编辑/重构，节省大量时间。

- 如果添加新功能：
    - 添加相应的测试用例。
    - 提供一个令人信服的理由来添加此功能。理想情况下，你应该先打开一个建议问题并在开始工作之前获得批准。

- 如果修复 bug：
    - 如果你正在解决特定问题，请在 PR 标题中添加 `(fix #xxxx[,#xxxx])`（#xxxx 是问题 ID），以便更好地生成发布日志，例如 `更新实体编码/解码 (fix #3899)`。
    - 在 PR 中提供错误的详细描述。最好提供在线演示。
    - 如果适用，添加适当的测试覆盖。你可以通过运行 `nr test-coverage` 来检查你的代码添加的覆盖率。

- 在处理 PR 时可以有多个小提交 - GitHub 可以在合并前自动将它们压缩。

- 确保测试通过！

- 提交消息必须遵循 [提交消息约定](./commit-convention.md)，以便可以自动生成变更日志。提交消息在提交前会自动验证（通过 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 调用 [Git Hooks](https://git-scm.com/docs/githooks)）。

- 只要安装了开发依赖，就不用担心代码风格 - 修改的文件在提交时会自动用 Prettier 格式化（通过 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 调用 [Git Hooks](https://git-scm.com/docs/githooks)）。

### 高级 Pull Request 提示

- PR 应该只修复预期的 bug，而不是引入不相关的更改。这包括不必要的重构 - PR 应该专注于修复而不是代码风格，这使得将来更容易跟踪更改。

- 考虑更改的性能/大小影响，以及修复的 bug 是否证明成本合理。如果修复的 bug 是一个非常小众的边缘情况，我们应该尽量最小化大小/性能成本，使其值得。
    - 代码是否对性能敏感（例如，在 "热路径" 中，如组件更新或 vdom 补丁函数？）
        - 如果分支仅用于开发，性能就不那么重要了。
    - 检查更改引入了多少额外的捆绑包大小。
        - 确保将仅开发代码放在 `__DEV__` 分支中，以便它们可以被 tree-shaking。
        - 运行时代码比编译器代码对大小增加更敏感。
        - 确保它不会意外导致仅开发或仅编译器代码分支包含在运行时构建中。值得注意的是，`@vue/shared` 中的一些函数是仅编译器的，不应在运行时代码中使用，例如 `isHTMLTag` 和 `isSVGTag`。

## 开发环境设置

你需要 [Node.js](https://nodejs.org)，最低版本如 [`.node-version`](https://github.com/vuejs/core/blob/main/.node-version) 文件中指定，以及 [PNPM](https://pnpm.io)，最低版本如 [`package.json` 中的 "packageManager" 字段](https://github.com/vuejs/core/blob/main/package.json#L4) 中指定。

我们还建议安装 [@antfu/ni](https://github.com/antfu/ni) 来帮助在使用不同包管理器的仓库之间切换。`ni` 还提供了方便的 `nr` 命令，使运行 npm 脚本更加容易。

克隆仓库后，运行：

```bash
$ pnpm i # 安装项目依赖
```

使用的工具概述：

- [TypeScript](https://www.typescriptlang.org/) 作为开发语言
- [Vite](https://vitejs.dev/) 和 [ESBuild](https://esbuild.github.io/) 用于开发捆绑
- [Rollup](https://rollupjs.org) 用于生产捆绑
- [Vitest](https://vitest.dev/) 用于单元测试
- [Prettier](https://prettier.io/) 用于代码格式化
- [ESLint](https://eslint.org/) 用于静态错误预防（类型之外）

## Git Hooks

该项目使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 在每次提交时强制执行以下操作：

- 类型检查整个项目
- 使用 Prettier 自动格式化更改的文件
- 验证提交消息格式（逻辑在 `scripts/verify-commit.js` 中）

## 脚本

## 项目结构

这个仓库采用 [单体仓库](https://en.wikipedia.org/wiki/Monorepo) 设置，在 `packages` 目录下托管许多相关包：

- `reactivity`：响应式系统。它可以作为一个与框架无关的包单独使用。

- `runtime-core`：平台无关的运行时核心。包括虚拟 DOM 渲染器、组件实现和 JavaScript API 的代码。可以使用这个包创建针对特定平台的高阶运行时（即自定义渲染器）。

- `runtime-dom`：针对浏览器的运行时。包括对原生 DOM API、属性、特性、事件处理程序等的处理。

- `runtime-test`：用于测试的轻量级运行时。可以在任何 JavaScript 环境中使用，因为它 "渲染" 一棵纯 JavaScript 对象树。该树可用于断言正确的渲染输出。还提供了用于序列化树、触发事件和记录更新期间执行的实际节点操作的工具。

- `server-renderer`：服务器端渲染的包。

- `compiler-core`：平台无关的编译器核心。包括编译器的可扩展基础和所有平台无关的插件。

- `compiler-dom`：具有专门针对浏览器的附加插件的编译器。

- `compiler-sfc`：用于编译 Vue 单文件组件的低级工具。

- `compiler-ssr`：产生针对服务器端渲染优化的渲染函数的编译器。

- `shared`：在多个包之间共享的内部工具（特别是运行时和编译器包使用的与环境无关的工具）。

- `vue`：面向公众的 "完整构建"，包括运行时和编译器。

- 私有工具包：
    - `dts-test`：包含针对生成的 dts 文件的仅类型测试。
    - `sfc-playground`：在 https://play.vuejs.org 上持续部署的 playground。要在本地运行 playground，请使用 [`nr dev-sfc`](#nr-dev-sfc)。
    - `template-explorer`：用于调试编译器输出的开发工具，在 https://template-explorer.vuejs.org/ 上持续部署。要在本地运行它，请运行 [`nr dev-compiler`](#nr-dev-compiler)。

## 贡献测试

单元测试与每个包中被测试的代码并置，位于名为 `__tests__` 的目录内。有关如何编写新测试规范，请参考 [Vitest 文档](https://vitest.dev/api/) 和现有测试用例。以下是一些额外的指南：

- 使用测试用例所需的最小 API。例如，如果一个测试可以在不涉及响应式系统或组件的情况下编写，那么它应该这样编写。这限制了测试对不相关部分变化的暴露，使其更加稳定。

- 如果测试平台无关的行为或断言低级虚拟 DOM 操作，请使用 `@vue/runtime-test`。

- 只有在测试断言平台特定行为时，才使用平台特定的运行时。

测试覆盖率在 https://coverage.vuejs.org 上持续部署。提高测试覆盖率的 PR 是受欢迎的，但一般来说，测试覆盖率应该用作寻找测试未覆盖的 API 用例的指导。我们不建议添加仅提高覆盖率但不实际测试有意义用例的测试。

## 致谢

**感谢所有已经为 `@142vip/core-x` 做出贡献的人！**
