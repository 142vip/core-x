<script lang="ts" setup>
import {
  VipOpenSource,
  VipProjectTable,
  VipTeam,
} from '@142vip/vitepress/components'
import { getTableData } from './project-data'

const exampleDemoTableData = getTableData('example')
const coreProjectTableData = getTableData('project')
</script>

<!-- 首页（由 theme `homePage` 注入于正文下方） -->
<template>
  <div class="vip-home-page">
    <section
      id="project-table"
      class="vip-home-page__section"
    >
      <VipProjectTable :data="exampleDemoTableData" title="最佳实践" />
      <VipProjectTable :data="coreProjectTableData" title="开源模块" />
    </section>

    <section class="vip-home-page__section">
      <VipTeam />
    </section>

    <section class="vip-home-page__section">
      <VipOpenSource />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.vip-home-page {
  --vip-home-section-gap: clamp(48px, 7vw, 88px);
  --vip-home-block-gap: clamp(32px, 4vw, 48px);

  display: flex;
  flex-direction: column;
  gap: var(--vip-home-section-gap);
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(40px, 6vw, 72px) 24px clamp(56px, 8vw, 96px);
  box-sizing: border-box;
}

.vip-home-page__section {
  display: flex;
  flex-direction: column;
  gap: var(--vip-home-block-gap);
  min-width: 0;
}

/* 区块自身 margin 交给首页 gap，避免叠压迫促 */
.vip-home-page :deep(.vip-doc-section) {
  margin-top: 0;
  margin-bottom: 0;
}

/* 首页首个可见 h2：去掉过大上边距，保留顶部分割线节奏 */
.vip-home-page__section:first-child :deep(.vip-doc-section:first-child h2) {
  --vip-section-h2-margin-top: 0;
}

@media (min-width: 640px) {
  .vip-home-page {
    padding-left: 48px;
    padding-right: 48px;
  }
}

@media (min-width: 960px) {
  .vip-home-page {
    padding-left: 64px;
    padding-right: 64px;
  }
}
</style>
