<script lang="ts" setup>
import type { VipProject } from '@142vip/vitepress'
import { ElImage, ElLink, ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-table-column.css'
import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-tooltip.css'
import 'element-plus/theme-chalk/el-popper.css'

defineProps<{
  data: VipProject[]
  title?: string
}>()

function npmPackageUrl(name: string) {
  return `https://www.npmjs.com/package/${name}`
}

function privateBadgeUrl(version: string) {
  return `https://img.shields.io/badge/私有-${version.replace('-', '--')}-blue?labelColor=0b3d52&color=1da469`
}

function npmVersionBadgeUrl(name: string) {
  return `https://img.shields.io/npm/v/${name}?labelColor=0b3d52&color=1da469`
}
</script>

<template>
  <h2 class="vip-project-table__title">
    {{ title ?? '核心业务' }}
  </h2>
  <div
    :aria-label="title ?? '项目列表表格'"
    class="vip-project-table-scroll"
    role="region"
  >
    <ElTable
      :data="data"
      :show-header="false"
      border
      class="vip-project-table"
      fit
      flexible
      stripe
    >
      <ElTableColumn header-align="center" label="项目名称" min-width="160" prop="name" />
      <ElTableColumn align="center" header-align="center" label="项目代号" min-width="48" prop="id" />
      <ElTableColumn
        header-align="center"
        label="功能描述"
        min-width="280"
        prop="description"
        show-overflow-tooltip
      />
      <ElTableColumn align="center" header-align="center" label="当前版本" min-width="112">
        <template #default="{ row }">
          <ElLink
            v-if="!row.private"
            :href="npmPackageUrl(row.name)"
            :title="row.name"
            :underline="false"
            class="vip-project-table__badge-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ElImage
              :src="npmVersionBadgeUrl(row.name)"
              :title="`${row.name} ${row.version}`"
            />
          </ElLink>
          <ElImage
            v-else
            :src="privateBadgeUrl(row.version)"
            :title="`${row.name} ${row.version}`"
          />
        </template>
      </ElTableColumn>
      <ElTableColumn align="left" header-align="center" label="文档" width="165">
        <template #default="{ row }">
          <div class="vip-project-table__doc">
            <a
              class="vip-project-table__doc-link"
              :href="row.sourceCode"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                class="vip-project-table__doc-icon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 3.5 2 8l3.5 4.5" />
                <path d="M10.5 3.5 14 8l-3.5 4.5" />
              </svg>
              源码
            </a>
            <span class="vip-project-table__doc-sep" aria-hidden="true" />
            <a
              class="vip-project-table__doc-link"
              :href="row.changelog"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                class="vip-project-table__doc-icon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="5.5" />
                <path d="M8 5v3.2l2.2 1.3" />
              </svg>
              日志
            </a>
            <span class="vip-project-table__doc-sep" aria-hidden="true" />
            <a
              class="vip-project-table__doc-link"
              :href="row.readme"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                class="vip-project-table__doc-icon"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
                viewBox="0 0 16 16"
              >
                <path d="M4 1.5h5l3 3v10H4z" />
                <path d="M9 1.5v3h3" />
              </svg>
              文档
            </a>
          </div>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<style lang="scss" scoped>
$vip-table-radius: 12px;

.vip-project-table__title {
  margin-top: 0;
  font-size: 20px;
  line-height: 1.4;
}

.vip-project-table-scroll {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  border-radius: $vip-table-radius;
  scrollbar-width: thin;

  // 抵消 VitePress `.vp-doc` 内对表格的外边距
  .vp-doc & {
    display: block;
    margin: 0 !important;

    .vip-project-table {
      display: block;
      margin: 0 !important;
      overflow-x: visible;

      :deep(table) {
        border-collapse: collapse;
        margin: 0 !important;
      }
    }
  }
}

.vip-project-table {
  // 将 element-plus 设计令牌统一映射为 VitePress 主题变量，亮/暗模式自动跟随文档站
  --el-color-primary: var(--vp-c-brand-1);
  --el-color-primary-light-3: var(--vp-c-brand-2);
  --el-color-primary-light-5: var(--vp-c-brand-soft);
  --el-border-color: var(--vp-c-divider);
  --el-border-color-lighter: var(--vp-c-divider-light);
  --el-border-color-light: var(--vp-c-divider-light);
  --el-fill-color-blank: var(--vp-c-bg);
  --el-fill-color-light: var(--vp-c-bg-soft);
  --el-fill-color-lighter: var(--vp-c-bg-soft);
  --el-fill-color-extra-light: var(--vp-c-bg-soft);
  --el-fill-color-dark: var(--vp-c-divider);
  --el-text-color-regular: var(--vp-c-text-1);
  --el-text-color-primary: var(--vp-c-text-1);
  --el-text-color-secondary: var(--vp-c-text-2);
  --el-text-color-placeholder: var(--vp-c-text-3);

  width: 100%;
  min-width: 760px;
  border-radius: $vip-table-radius !important;
  overflow: hidden;

  :deep(.el-table__cell) {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  // 源码 / 日志 / 文档链接组
  .vip-project-table__doc {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
  }

  .vip-project-table__doc-link {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: none !important;
    border-radius: 6px;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:is(:hover, :focus-visible) {
      color: var(--vp-c-brand-2);
      background-color: var(--vp-c-brand-soft);
    }

    &:focus-visible {
      outline: 2px solid var(--vp-c-brand-1);
      outline-offset: 1px;
    }
  }

  .vip-project-table__doc-icon {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }

  .vip-project-table__doc-sep {
    width: 1px;
    height: 13px;
    flex-shrink: 0;
    margin: 0 2px;
    background-color: var(--vp-c-divider);
  }
}
</style>
