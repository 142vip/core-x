<script lang="ts" setup>
import type { VipProject } from '@142vip/vitepress'
import {
  ElDivider,
  ElImage,
  ElLink,
  ElTable,
  ElTableColumn,
} from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-divider.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-link.css'
import 'element-plus/theme-chalk/el-table-column.css'
import 'element-plus/theme-chalk/el-table.css'

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
      <ElTableColumn header-align="center" label="功能描述" min-width="280" prop="description" />
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
      <ElTableColumn align="left" header-align="center" label="文档" width="148">
        <template #default="{ row }">
          <div class="vip-project-table__doc">
            <ElLink
              :href="row.sourceCode"
              :underline="false"
              class="vip-project-table__doc-link"
              rel="noopener noreferrer"
              target="_blank"
              type="primary"
            >
              源码
            </ElLink>
            <ElDivider class="vip-project-table__doc-divider" direction="vertical" />
            <ElLink
              :href="row.changelog"
              :underline="false"
              class="vip-project-table__doc-link"
              rel="noopener noreferrer"
              target="_blank"
              type="primary"
            >
              日志
            </ElLink>
            <ElDivider class="vip-project-table__doc-divider" direction="vertical" />
            <ElLink
              :href="row.readme"
              :underline="false"
              class="vip-project-table__doc-link"
              rel="noopener noreferrer"
              target="_blank"
              type="primary"
            >
              文档
            </ElLink>
          </div>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<style lang="scss" scoped>
$vip-table-radius: 10px;

.vip-project-table__title {
  margin-top: 0;
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
  width: 100%;
  min-width: 760px;
  border-radius: $vip-table-radius !important;

  :deep(.el-link),
  :deep(.el-link:is(:hover, :focus, :active)) {
    text-decoration: none !important;
  }
}

.vip-project-table__badge-link {
  display: inline-flex;
  vertical-align: middle;
  line-height: 0;
}

.vip-project-table__doc {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;
}

.vip-project-table__doc-link {
  padding: 2px;
}

.vip-project-table__doc-divider.el-divider--vertical {
  flex-shrink: 0;
  align-self: center;
  margin: 0 4px;
  height: 14px;
  border-color: var(--el-border-color-lighter);
}
</style>
