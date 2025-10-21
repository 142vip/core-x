<script lang="ts" setup>
import {
  VipBackTop,
  VipContactAuthor,
  VipOpenSource,
  VipProjectTable,
  VipTeam,
} from '@142vip/vitepress/components'
import { onMounted, ref } from 'vue'
import { getCoreProjectData, getExampleDemoTableData } from '../../sidebar'

const coreProjectTableData = ref<any[]>([])
const exampleDemoTableData = ref()

/**
 * 异步加载表格数据
 */
onMounted(async () => {
  coreProjectTableData.value = await getCoreProjectData()
  exampleDemoTableData.value = await getExampleDemoTableData()
})
</script>

<!-- 首页 -->
<template>
  <section id="version-table">
    <VipProjectTable :data="exampleDemoTableData" title="最佳实践" />
    <VipProjectTable :data="coreProjectTableData" title="开源模块" />
  </section>

  <VipTeam />

  <!-- 开源项目 -->
  <VipOpenSource />

  <section id="contact-author">
    <VipContactAuthor />
  </section>
  <VipBackTop />
</template>
