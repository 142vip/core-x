<script lang="ts" setup>
import type { VipProject } from '@142vip/vitepress'
import { ElImage, ElLink, ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-link.css'
import 'element-plus/theme-chalk/el-table-column.css'
import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-checkbox.css'
import 'element-plus/theme-chalk/el-empty.css'

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
  <ElTable
    :data="data"
    border
    class="vip-project-table"
    fit
    flexible
    stripe
    :show-header="false"
  >
    <ElTableColumn header-align="center" label="项目名称" min-width="180" prop="name" />
    <ElTableColumn align="center" header-align="center" label="项目代号" min-width="50" prop="id" />
    <ElTableColumn header-align="center" label="功能描述" min-width="300" prop="description" width="auto" />
    <ElTableColumn align="center" header-align="center" label="当前版本" min-width="120">
      <template #default="{ row }">
        <ElLink
          v-if="!row.private"
          :href="npmPackageUrl(row.name)"
          :underline="false"
          class="vip-project-table__badge-link"
          :title="row.name"
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
    <ElTableColumn align="center" header-align="center" label="文档" width="150">
      <template #default="{ row }">
        <ElLink :href="row.sourceCode" :underline="false" rel="noopener noreferrer" target="_blank" title="源码">
          源码
        </ElLink>&nbsp;
        <ElLink :href="row.changelog" :underline="false" rel="noopener noreferrer" target="_blank" title="日志">
          日志
        </ElLink>&nbsp;
        <ElLink :href="row.readme" :underline="false" rel="noopener noreferrer" target="_blank" title="文档">
          文档
        </ElLink>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style lang="scss" scoped>
.vip-project-table__title {
  margin-top: 0;
}

.vip-project-table {
  width: 100%;
  border-radius: 10px !important;
}

.vip-project-table__badge-link {
  display: inline-flex;
  vertical-align: middle;
  line-height: 0;
}
</style>

<style lang="scss">
/* 避免 VitePress 文档全局 table 样式挤压本表格 */
.vp-doc .vip-project-table {
  display: block;
  margin: 0 !important;
  overflow-x: auto;
}

.vp-doc .vip-project-table :deep(table) {
  border-collapse: collapse;
  margin: 0 !important;
}
</style>
