<script lang="ts" setup>
import { useData } from 'vitepress'

// 组件属性
defineProps<{
  repoNames?: string[]
}>()

const { isDark } = useData()

const repoDefaultNames = ['142vip/core-x', '142vip/408CSFamily', '142vip/JavaScriptCollection']

/**
 * 获取指定仓库的star-history信息
 * @param repoNames
 */
function getStarHistoryUrl(repoNames?: string[], dark: boolean) {
  return `https://api.star-history.com/svg?repos=${(repoNames ?? repoDefaultNames).join(',')}&type=Date${dark ? '&theme=dark' : ''}`
}
</script>

<!-- 首页 -->
<template>
  <section id="sponsors">
    <h2>赞赏列表</h2>
    <blockquote>
      排名不分先后， <strong>赞赏过的一定要微信跟我说呀！！！！！！</strong>
    </blockquote>
    <div>
      <a href="https://github.com/ChiefPing" target="_blank">
        <img
          alt="ChiefPing"
          class="image-border"
          src="https://avatars2.githubusercontent.com/u/34122068?s=460&v=4"
          title="ChiefPing"
        >
      </a>
      <a href="https://github.com/xiaoliuxin" target="_blank">
        <img
          alt="xiaoliuxin"
          class="image-border"
          src="https://avatars2.githubusercontent.com/u/60652527?s=460&v=4"
          title="xiaoliuxin"
        >
      </a>
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

    <a href="https://github.com/142vip/core-x/graphs/contributors">
      <img
        alt="感谢向仓库提交PR的所有开发者"
        src="https://contrib.rocks/image?repo=142vip/core-x"
        title="@142vip/core-x"
      >
    </a>
  </section>

  <section id="trending">
    <h2>趋势</h2>
    <!-- 支持黑色主题 -->
    <div class="star-history">
      <img
        :src="getStarHistoryUrl(repoNames, isDark)"
        alt="Github Star History"
        class="img-border"
        title="Github Star History"
      >
    </div>
  </section>
</template>

<style scoped>
#trending {
  .img-border {
    border-radius: 5px;
  }
}

#sponsors {
  div {
    display: flex;
    justify-content: left;
  }
  .image-border {
    border-radius: 5px;
    width: 50px;
  }
  a {
    margin: 5px;
  }
}

.star-history {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
