<script lang="ts" setup>
import { ElImage, ElLink } from 'element-plus'
import { VIP_CONTACT_PLATFORM_LINKS, VIP_CONTACT_WECHAT_QR } from './constants/contactPlatforms'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-link.css'
</script>

<template>
  <div class="vip-contact-author">
    <h2>联系作者</h2>

    <p>
      若系列文章对你有所帮助，欢迎订阅微信公众号或微信”骚扰“，获取更多内容。<strong>商务合作请备注来意</strong>
    </p>

    <div class="vip-contact-author__wechat">
      <ElImage
        :src="VIP_CONTACT_WECHAT_QR"
        alt="关注微信公众号或添加好友联系储凡"
        class="vip-contact-author__wechat-img"
        fit="contain"
        title="关注微信公众号或添加好友联系储凡"
      />
    </div>

    <div class="vip-contact-author__platform-link">
      <ElLink
        v-for="item in VIP_CONTACT_PLATFORM_LINKS"
        :key="item.href"
        :href="item.href"
        :title="item.title"
        :underline="false"
        class="vip-contact-author__platform-anchor"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <ElImage
          :alt="item.alt"
          :src="item.icon"
          class="vip-contact-author__platform-img"
          fit="contain"
        />
      </ElLink>
    </div>

    <p>
      交流/加群/互看朋友圈、<strong>聊天/提问/建议/提需求</strong> 可以在公众号直接<strong>私信</strong>，有时间即会回复，偶尔的延迟和疏漏还请小伙伴们谅解，<strong>蟹蟹~</strong>。
    </p>
  </div>
</template>

<style lang="scss" scoped>
.vip-contact-author {
  margin: 10px;
}

.vip-contact-author__wechat {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vip-contact-author__wechat-img {
  margin: 10px;
  border-radius: 5px;
}

.vip-contact-author__platform-link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
}

.vip-contact-author__platform-anchor {
  display: inline-flex;
  margin: 5px;
  line-height: 0;
}

.vip-contact-author__platform-img {
  width: 24px;
  height: 24px;
}
</style>
