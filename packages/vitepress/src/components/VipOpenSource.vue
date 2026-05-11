<script lang="ts" setup>
import { ElImage, ElLink } from 'element-plus'
import { useData } from 'vitepress'
import { VIP_OPEN_SOURCE_SPONSORS } from './constants/openSource'
import { getStarHistorySvgUrl } from './utils/starHistory'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-link.css'

defineProps<{
  repoNames?: string[]
}>()

const { isDark } = useData()
</script>

<template>
  <section id="sponsors">
    <h2>赞赏列表</h2>
    <blockquote>
      排名不分先后， <strong>赞赏过的一定要微信跟我说呀！！！！！！</strong>
    </blockquote>
    <div class="vip-open-source__row">
      <ElLink
        v-for="item in VIP_OPEN_SOURCE_SPONSORS"
        :key="item.href"
        :href="item.href"
        :underline="false"
        class="vip-open-source__sponsor-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ElImage
          :alt="item.alt"
          :src="item.src"
          :title="item.title"
          class="vip-open-source__avatar"
          fit="cover"
          lazy
        />
      </ElLink>
    </div>
    <h2>赞助商</h2>
    <blockquote>
      以下排名不分先后! 还木有收到赞助，哈哈哈，先留坑
    </blockquote>
  </section>

  <section id="contributions">
    <h2>贡献</h2>
    <blockquote>
      感谢所有参与仓库建设的开发者
    </blockquote>
    <ElLink
      :underline="false"
      class="vip-open-source__contrib-link"
      href="https://github.com/142vip/core-x/graphs/contributors"
      rel="noopener noreferrer"
      target="_blank"
    >
      <ElImage
        src="https://contrib.rocks/image?repo=142vip/core-x"
        alt="感谢向仓库提交 PR 的所有开发者"
        title="@142vip/core-x"
        class="vip-open-source__contrib-img"
        fit="contain"
        lazy
      />
    </ElLink>
  </section>

  <section id="trending">
    <h2>趋势</h2>
    <div class="vip-open-source__star-history">
      <ElImage
        :src="getStarHistorySvgUrl(repoNames, isDark)"
        alt="Github Star History"
        title="Github Star History"
        class="vip-open-source__star-img"
        fit="contain"
        lazy
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.vip-open-source__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.vip-open-source__sponsor-link {
  margin: 5px;
  border-radius: 5px;
  overflow: hidden;
  line-height: 0;
}

.vip-open-source__avatar {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}

.vip-open-source__contrib-link {
  display: inline-block;
  max-width: 100%;
  line-height: 0;
}

.vip-open-source__contrib-img {
  max-width: 100%;
}

.vip-open-source__star-history {
  display: flex;
  justify-content: center;
  align-content: center;
}

.vip-open-source__star-img {
  border-radius: 5px;
  max-width: 100%;
}
</style>
