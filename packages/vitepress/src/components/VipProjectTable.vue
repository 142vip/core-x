<script lang="ts" setup>
import type { VipProject } from '@142vip/vitepress'
import {
  ElImage,
  ElTable,
  ElTableColumn,
} from 'element-plus'
import { defineComponent } from 'vue'
// import 'element-plus/dist/index.css'
// 注意：这里手动导入样式
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-empty.css'
import 'element-plus/theme-chalk/el-table-column.css'
import 'element-plus/theme-chalk/el-checkbox.css'
import 'element-plus/theme-chalk/el-link.css'

// 组件属性
defineProps<{
  data: VipProject[]
  title?: string
}>()

defineComponent({
  components: {
    ElTable,
    ElTableColumn,
    ElImage,
  },
})
</script>

<template>
  <h2>{{ title ?? '核心业务' }}</h2>
  <ElTable
    :data="data"
    border
    class="core-table"
    fit
    flexible
    stripe
    :show-header="false"
  >
    <!-- @142vip/core-x 表格 -->
    <ElTableColumn header-align="center" label="项目名称" min-width="180" prop="name" />
    <ElTableColumn align="center" header-align="center" label="项目代号" min-width="50" prop="id" />
    <ElTableColumn header-align="center" label="功能描述" min-width="300" prop="description" width="auto" />
    <ElTableColumn align="center" header-align="center" label="当前版本" min-width="120">
      <template #default="{ row }">
        <a
          v-if="!row.private"
          :href="`https://www.npmjs.com/package/${row.name}`"
          :title="row.name"
          target="_blank"
        >
          <ElImage
            :src="`https://img.shields.io/npm/v/${row.name}?labelColor=0b3d52&color=1da469`"
            :title="`${row.name} ${row.version}`"
          />
        </a>

        <ElImage
          v-else
          :src="`https://img.shields.io/badge/私有-${(row.version.replace('-', '--'))}-blue?labelColor=0b3d52&color=1da469`"
          :title="`${row.name} ${row.version}`"
        />
      </template>
    </ElTableColumn>
    <ElTableColumn align="center" header-align="center" label="文档" width="150">
      <template #default="{ row }">
        <a :href="row.sourceCode" target="_blank" title="源码">
          源码
        </a> &nbsp;
        <a :href="row.changelog" target="_blank" title="日志">
          日志
        </a> &nbsp;
        <a :href="row.readme" target="_blank" title="文档">
          文档
        </a>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style scoped>
.core-table {
  width: 100%;
  border-radius: 10px !important;
}
/*避免重写table样式*/
.vp-doc table {
  display: block;
  border-collapse: collapse;
  margin: 0 !important;
  overflow-x: auto;
}
</style>
