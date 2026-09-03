<script lang="ts" setup>
import { VPTeamMembers } from 'vitepress/theme'
import { vipTeamMembers } from '../core/vip'
</script>

<template>
  <!-- VPTeamMembers 为 VitePress 默认主题组件，size 随 VP 主题样式 -->
  <section
    id="team"
    class="vip-team vip-doc-section"
  >
    <h2>团队介绍</h2>
    <VPTeamMembers
      :members="vipTeamMembers"
      size="small"
      class="vip-team__members"
    />
  </section>
</template>

<style lang="scss" scoped>
.vip-team__members {
  margin-top: 8px;
}

/* 窄屏：成员卡片换行间距与 VP 首页一致 */
@media (max-width: 640px) {
  .vip-team {
    margin-inline: 0;
  }

  .vip-team__members :deep(.VPTeamMembers) {
    gap: 12px;
  }
}
</style>
