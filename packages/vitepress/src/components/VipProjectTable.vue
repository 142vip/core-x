<script lang="ts" setup>
import type { VipProject } from '@142vip/vitepress'
import { ElImage, ElLink, ElTable, ElTableColumn } from 'element-plus'
import { h } from 'vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-link.css'
import 'element-plus/theme-chalk/el-table-column.css'
import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-tooltip.css'
import 'element-plus/theme-chalk/el-popper.css'

defineProps<{
  data: VipProject[]
  title?: string
}>()

interface DocLinkItem {
  href: string
  label: string
  icon: ReturnType<typeof h>
}

/** 文档列：源码 / 日志 / 文档 三项外链 */
function getDocLinks(row: VipProject): DocLinkItem[] {
  return [
    {
      href: row.sourceCode,
      label: '源码',
      icon: h('svg', {
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '1.6',
        'viewBox': '0 0 16 16',
      }, [
        h('path', { d: 'M5.5 3.5 2 8l3.5 4.5' }),
        h('path', { d: 'M10.5 3.5 14 8l-3.5 4.5' }),
      ]),
    },
    {
      href: row.changelog,
      label: '日志',
      icon: h('svg', {
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '1.6',
        'viewBox': '0 0 16 16',
      }, [
        h('circle', { cx: '8', cy: '8', r: '5.5' }),
        h('path', { d: 'M8 5v3.2l2.2 1.3' }),
      ]),
    },
    {
      href: row.readme,
      label: '文档',
      icon: h('svg', {
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '1.6',
        'viewBox': '0 0 16 16',
      }, [
        h('path', { d: 'M4 1.5h5l3 3v10H4z' }),
        h('path', { d: 'M9 1.5v3h3' }),
      ]),
    },
  ]
}

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
  <section class="vip-project-table-block vip-doc-section vip-element-plus-vp-theme">
    <h2>{{ title ?? '核心业务' }}</h2>
    <!-- 外层横向滚动：对齐 EP 宽表常见写法，窄屏可滑动，宽屏表格仍 width:100% 填满 -->
    <div
      :aria-label="title ?? '项目列表表格'"
      class="vip-project-table-scroll"
      role="region"
    >
      <ElTable
        :data="data"
        :show-header="false"
        border
        class="vip-project-table"
        stripe
        style="width: 100%"
      >
        <ElTableColumn
          header-align="center"
          label="项目名称"
          min-width="120"
          prop="name"
          show-overflow-tooltip
        />
        <ElTableColumn
          align="center"
          header-align="center"
          label="项目代号"
          prop="id"
          width="48"
        />
        <ElTableColumn
          header-align="center"
          label="功能描述"
          min-width="200"
          prop="description"
          show-overflow-tooltip
        />
        <ElTableColumn
          align="center"
          header-align="center"
          label="当前版本"
          width="150"
        >
          <template #default="{ row }">
            <ElLink
              v-if="!row.private"
              :href="npmPackageUrl(row.name)"
              :title="row.name"
              underline="never"
              class="vip-project-table__badge-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ElImage
                :src="npmVersionBadgeUrl(row.name)"
                :title="`${row.name} ${row.version}`"
                :preview="false"
              />
            </ElLink>
            <ElImage
              v-else
              :src="privateBadgeUrl(row.version)"
              :title="`${row.name} ${row.version}`"
              :preview="false"
            />
          </template>
        </ElTableColumn>
        <ElTableColumn
          align="left"
          header-align="center"
          label="文档"
          min-width="176"
          width="200"
        >
          <template #default="{ row }">
            <div class="vip-project-table__doc">
              <template
                v-for="(item, index) in getDocLinks(row)"
                :key="item.href"
              >
                <span
                  v-if="index > 0"
                  aria-hidden="true"
                  class="vip-project-table__doc-divider"
                />
                <!-- 原生 a：避免 ElLink underline ::after 在单元格内残留为尾点 -->
                <a
                  class="vip-project-table__doc-link"
                  :href="item.href"
                  :title="item.label"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <component
                    :is="item.icon"
                    class="vip-project-table__doc-icon"
                    aria-hidden="true"
                  />
                  <span class="vip-project-table__doc-label">{{ item.label }}</span>
                </a>
              </template>
            </div>
          </template>
        </ElTableColumn>
      </ElTable>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$vip-table-radius: 12px;

.vip-project-table-scroll {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  border-radius: $vip-table-radius;
  scrollbar-width: thin;

  /* 抵消 VitePress `.vp-doc` 对表格的默认外边距 */
  .vp-doc & {
    margin: 0 !important;

    .vip-project-table {
      margin: 0 !important;

      :deep(table) {
        margin: 0 !important;
      }
    }
  }
}

.vip-project-table {
  /* 保证窄屏可横向滚动：列宽合计不足视口时也不塌缩 */
  min-width: 680px;

  :deep(.el-table__cell) {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .vip-project-table__badge-link {
    display: inline-flex;
    line-height: 0;
    vertical-align: middle;
  }

  .vip-project-table__badge-link :deep(img),
  :deep(.el-image__inner) {
    display: block;
    height: 20px;
    width: auto;
  }

  .vip-project-table__doc {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  .vip-project-table__doc-divider {
    flex: 0 0 1px;
    width: 1px;
    height: 12px;
    margin-inline: 6px;
    background-color: var(--vp-c-divider);
  }

  .vip-project-table__doc-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 4px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none !important;
    color: var(--vp-c-brand-1);
    border-radius: 6px;
    transition:
      color 0.2s,
      background-color 0.2s;

    /* 清除可能来自主题 / EP 的伪元素尾标 */
    &::before,
    &::after {
      content: none !important;
      display: none !important;
    }

    &:is(:hover, :focus-visible) {
      color: var(--vp-c-brand-2);
      background-color: var(--vp-c-brand-soft);
    }

    &:focus-visible {
      outline: 2px solid var(--vp-c-brand-1);
      outline-offset: 1px;
    }
  }

  .vip-project-table__doc-label {
    display: inline;
  }

  .vip-project-table__doc-icon {
    display: block;
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    overflow: hidden;
  }
}

@media (max-width: 767px) {
  /* 窄屏文档列省图标，只保留文字 */
  .vip-project-table {
    .vip-project-table__doc-icon {
      display: none;
    }

    .vip-project-table__doc-link {
      gap: 0;
    }
  }
}
</style>
