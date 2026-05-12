<script lang="ts" setup>
import {
  VipBackTop,
  VipContactAuthor,
  VipOpenSource,
  VipProjectTable,
  VipTeam,
} from '@142vip/vitepress/components'
import { getCoreProjectData, getExampleDemoTableData } from './project-data'

const exampleDemoTableData = getExampleDemoTableData()
const coreProjectTableData = getCoreProjectData()
</script>

<!-- 首页 -->
<template>
  <section id="project-table">
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

<style lang="scss" scoped>
#project-table {
  margin: 30px auto;
}
</style>
