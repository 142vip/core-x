<script lang="ts" setup>
import { ElBacktop } from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-backtop.css'
</script>

<template>
  <ElBacktop :bottom="180" :right="30">
    <span class="vip-back-top__trigger">↑</span>
  </ElBacktop>
</template>

<style lang="scss" scoped>
.vip-back-top__trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
}
</style>
