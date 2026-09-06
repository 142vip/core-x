<script lang="ts" setup>
import type { VipHomeTableConfig } from '../core/vip'
import VipOpenSource from './VipOpenSource.vue'
import VipProjectTable from './VipProjectTable.vue'
import VipTeam from './VipTeam.vue'

const props = withDefaults(
  defineProps<{
    /** 一个或多个项目表格；按数组顺序渲染 */
    tables?: VipHomeTableConfig[]
    /** 首个表格区块锚点 id */
    tableSectionId?: string
    showTeam?: boolean
    showOpenSource?: boolean
  }>(),
  {
    tables: () => [],
    tableSectionId: 'project-table',
    showTeam: true,
    showOpenSource: true,
  },
)
</script>

<template>
  <div class="vip-home-page">
    <section
      v-if="tables.length > 0"
      :id="props.tableSectionId"
      class="vip-home-page__section"
    >
      <VipProjectTable
        v-for="(table, index) in tables"
        :key="table.id ?? `${table.title}-${index}`"
        :data="table.data"
        :title="table.title"
      />
    </section>

    <section
      v-if="showTeam"
      class="vip-home-page__section"
    >
      <VipTeam />
    </section>

    <section
      v-if="showOpenSource"
      class="vip-home-page__section"
    >
      <VipOpenSource />
    </section>

    <section
      v-if="$slots.default"
      class="vip-home-page__section"
    >
      <slot />
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

.vip-home-page :deep(.vip-doc-section) {
  margin-top: 0;
  margin-bottom: 0;
}

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
