# @142vip/copyright

技术说明。不随 npm 发布。

## 定位

为中国软件著作权登记生成符合页数要求的源代码 docx（前 30 页、后 30 页、合计 60 页），基于 `docx@9.5.1` 排版。

## 功能

### 子路径

- `@142vip/copyright`：主入口（`src/index.ts`）

### 枚举 `CopyrightFileType`（`copyright.interface.ts`）

- `JAVA = 'java'`
- `JAVASCRIPT = 'js'`
- `TYPESCRIPT = 'ts'`
- `PYTHON = 'py'`
- `C = 'c'`
- `CPP = 'cpp'`
- `GO = 'go'`
- `SWIFT = 'swift'`
- `PHP = 'php'`
- `RUST = 'rs'`
- `SHELL = 'sh'`
- `SQL = 'sql'`
- `YAML = 'yaml'`
- `YML = 'yml'`
- `JSON = 'json'`
- `XML = 'xml'`
- `HTML = 'html'`
- `TEXT = 'txt'`

### 接口

- `DocumentSection`（`copyright.interface.ts`）
  - `headers.default: Header`
  - `footers.default: Footer`
  - `children: Paragraph[]`
- `CopyrightOptions`（`copyright.interface.ts`）
  - `maxLineCountInPage?: number`
  - `maxScanSourceLineCount?: number`
  - `logger?: boolean`

### 类 `VipCopyright`（`copyright.ts`）

**构造**

- `constructor(copyrightTitle: string, copyrightVersion: string, options?: CopyrightOptions)`
  - 标题须以「平台」或「系统」结尾，否则 `VipNodeJS.exitProcess(1)`
  - 版本须以 `V` 开头，否则 `VipNodeJS.exitProcess(1)`
  - 默认值：`maxLineCountInPage = 50`，`maxScanSourceLineCount = 2000`，`consoleLogger = false`

**静态方法**

- `quickGenerateDocx(options): Promise<void>`
  - `options.copyrightTitle: string`
  - `options.copyrightVersion: string`
  - `options.sourceCodeDir: string`
  - `options.fileType: CopyrightFileType`

**实例方法**

- `generateDocx(sourceCodeDir: string, fileType: CopyrightFileType): Promise<void>`
- `saveCodeToDocx(fileName: string, sourceLines: string[], pageCount: number): Promise<void>`
- `scanSourceCode(sourceCodeDir: string, fileType: CopyrightFileType): { beginSourceCode, endSourceCode, allSourceCode }`

**输出文件**（写入 `VipNodeJS.getProcessCwd()`）

- `{copyrightTitle}{copyrightVersion}-代码(前30页).docx`
- `{copyrightTitle}{copyrightVersion}-代码(后30页).docx`
- `{copyrightTitle}{copyrightVersion}-代码(前后30页).docx`

### 工具函数（`source-code.utils.ts`，经 `copyright.ts` 内部使用，同包导出）

- `isSourceCodeLine(line: string): boolean`：非空行视为有效代码行
- `readSourceCodeLinesByFile(filePath: string): string[]`
- `getSourceCodeFiles(dirPath: string, fileType: CopyrightFileType): string[]`：递归扫描、按扩展名过滤、排序
- `getPageSectionInDocx(options): DocumentSection`
  - `options.copyrightTitle: string`
  - `options.pageCount: number`
  - `options.sourceCodes: string[]`

## 配置

### `CopyrightOptions` 可选键

- `maxLineCountInPage`：docx 单页最大代码行数，默认 `50`
- `maxScanSourceLineCount`：前/后向扫描最大行数，默认 `2000`
- `logger`：是否在终端打印生成路径与行数，默认 `false`

### 构造参数校验

- `copyrightTitle`：必须以「平台」或「系统」结尾
- `copyrightVersion`：必须以 `V` 开头（如 `V1.0`）

## 最佳实践

- 扫描前确认 `sourceCodeDir` 仅含目标语言，避免 `node_modules`
- 大仓库可调低 `maxScanSourceLineCount` 加快生成
- 开启 `logger: true` 核对输出路径与总行数
- 软著名称与产品对外名称保持一致
- 生成后人工抽查 docx 页眉页脚与代码连续性

## 构建

`unbuild` → `cd packages/copyright && pnpm build`

## 验证

```shell
cd packages/copyright && pnpm build && pnpm typecheck
```

## 演示

无
