<script lang="ts" setup>
import {
  VipBackTop,
  VipContactAuthor,
  VipOpenSource,
  VipProjectTable,
  VipTeam,
} from '@142vip/vitepress/components'
import { ref } from 'vue'

const tableData = ref([])
</script>

<template>
  <section id="version-table">
    <VipProjectTable :data="tableData" title="开源" />
  </section>

  <VipTeam />

  <VipOpenSource />

  <section id="contact-author">
    <VipContactAuthor />
  </section>
  <VipBackTop />
</template>
