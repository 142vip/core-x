<script lang="ts" setup>
import { defineComponent } from 'vue'
import {
  ElImage,
  ElTable,
  ElTableColumn,
  ElTag,
} from 'element-plus'
import 'element-plus/dist/index.css'

interface PackageJSON {
  name: string
  description: string
  private: boolean
  version: string
}

interface Project extends PackageJSON {
  id?: string
  npm?: string
  changelog: string
  readme: string
  sourceCode: string
}

// 组件属性
defineProps<{
  data: Project[]
  title?: string
}>()

defineComponent({
  components: {
    ElTable,
    ElTableColumn,
    ElTag,
    ElImage,
  },
})
</script>

<!-- todo 支持light和dark两种模式 -->
<template>
  <h2>{{ title ?? '核心业务' }}</h2>
  <ElTable
    :data="data"
    border
    class="core-table"
    fit
    flexible
    stripe
  >
    <!-- @142vip/core-x 表格 -->
    <ElTableColumn header-align="center" label="项目名称" min-width="180" prop="name" />
    <ElTableColumn align="center" header-align="center" label="项目代号" min-width="50" prop="id" />
    <ElTableColumn header-align="center" label="功能描述" min-width="300" prop="description" width="auto" />
    <ElTableColumn align="center" header-align="center" label="当前版本" width="120">
      <template #default="{ row }">
        <ElTag class="version" type="primary" @click="() => console.log(333)">
          {{ row.version }}
        </ElTag>
      </template>
    </ElTableColumn>
    <ElTableColumn align="center" header-align="center" label="NPM版本" min-width="120">
      <template #default="{ row }">
        <a
          v-if="!row.private"
          :href="`https://www.npmjs.com/package/${row.name}`"
          :title="row.name"
          target="_blank"
        >
          <ElImage :src="`https://img.shields.io/npm/v/${row.name}?labelColor=0b3d52&color=1da469`" :title="row.name" />
        </a>
        <ElTag v-else type="danger">
          私有
        </ElTag>
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

<style>
.core-table {
  width: 100%;
  border-radius: 5px;
}
.version {
  cursor: pointer;
}
/*避免重写table样式*/
.vp-doc table {
  display: block;
  border-collapse: collapse;
  margin: 0;
  overflow-x: auto;
}

.el-table thead {
  display: none;
}
</style>
