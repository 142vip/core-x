<script lang="ts" setup>
import { ElImage, ElLink, ElSpace } from 'element-plus'
import { computed } from 'vue'
import { useVipDocTheme } from './composables/useVipDocTheme'
import { VIP_OPEN_SOURCE_SPONSORS } from './constants/open-source.constant'
import { getStarHistorySvgUrl } from './utils/star-history'
import VipGithubPins from './VipGithubPins.vue'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-link.css'
import 'element-plus/theme-chalk/el-space.css'

const props = defineProps<{
  repoNames?: string[]
}>()

const { isDarkMode } = useVipDocTheme()

/** Star History SVG 随 VitePress 亮/暗主题切换 URL 参数 */
const starHistorySrc = computed(() =>
  getStarHistorySvgUrl(props.repoNames, isDarkMode.value),
)
</script>

<template>
  <section
    id="sponsors"
    class="vip-open-source vip-doc-section vip-element-plus-vp-theme"
  >
    <h2>赞赏列表</h2>
    <p class="vip-doc-section__desc">
      排名不分先后， <strong>赞赏过的一定要微信跟我说呀！！！！！！</strong>
    </p>
    <ElSpace
      wrap
      :size="12"
      alignment="center"
      class="vip-open-source__sponsor-row"
    >
      <ElLink
        v-for="item in VIP_OPEN_SOURCE_SPONSORS"
        :key="item.href"
        :href="item.href"
        :title="item.title"
        underline="never"
        class="vip-open-source__sponsor-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ElImage
          :alt="item.alt"
          :src="item.src"
          :preview="false"
          fit="cover"
          class="vip-open-source__avatar"
          loading="lazy"
        />
      </ElLink>
    </ElSpace>

    <h2>赞助商</h2>
    <p class="vip-doc-section__desc">
      以下排名不分先后! 还木有收到赞助，哈哈哈，先留坑
    </p>
  </section>

  <section
    id="contributions"
    class="vip-open-source vip-doc-section vip-element-plus-vp-theme"
  >
    <h2>贡献</h2>
    <p class="vip-doc-section__desc">
      感谢所有参与仓库建设的开发者
    </p>
    <ElLink
      class="vip-open-source__contrib-link"
      href="https://github.com/142vip/core-x/graphs/contributors"
      underline="never"
      rel="noopener noreferrer"
      target="_blank"
    >
      <ElImage
        src="https://contrib.rocks/image?repo=142vip/core-x"
        alt="感谢向仓库提交 PR 的所有开发者"
        title="@142vip/core-x"
        :preview="false"
        class="vip-open-source__contrib-img"
        fit="contain"
        loading="lazy"
      />
    </ElLink>
  </section>

  <section
    id="trending"
    class="vip-open-source vip-doc-section vip-element-plus-vp-theme"
  >
    <h2>开源趋势</h2>
    <div class="vip-open-source__star-history">
      <img
        :src="starHistorySrc"
        alt="Github Star History"
        title="Github Star History"
        class="vip-open-source__star-img"
        loading="lazy"
      >
    </div>
    <VipGithubPins class="vip-open-source__pins" />
  </section>
</template>

<style lang="scss" scoped>
.vip-open-source__pins {
  margin-top: 24px;
}

.vip-open-source__sponsor-row {
  justify-content: flex-start;
  margin-bottom: 8px;
}

.vip-open-source__sponsor-link {
  display: inline-flex;
  line-height: 0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
}

.vip-open-source__avatar {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.vip-open-source__contrib-link {
  display: inline-block;
  max-width: 100%;
  line-height: 0;
}

.vip-open-source__contrib-img {
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
}

.vip-open-source__star-history {
  display: flex;
  justify-content: center;
}

/* 按 SVG 原始比例展示，避免 ElImage / width:100% 放大 */
.vip-open-source__star-img {
  display: block;
  width: auto;
  max-width: min(100%, 680px);
  height: auto;
  margin: 0 auto;
  border-radius: 8px;
}

@media (max-width: 640px) {
  .vip-open-source__sponsor-row {
    justify-content: center;
  }

  .vip-open-source__avatar {
    width: 44px;
    height: 44px;
  }
}
</style>
