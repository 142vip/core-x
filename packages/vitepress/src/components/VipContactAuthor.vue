<script lang="ts" setup>
import { ElImage, ElLink, ElSpace } from 'element-plus'
import { SITE_CONTACT_QR_ITEMS, VIP_CONTACT_PLATFORM_LINKS } from './constants/contact-platforms.constant'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-image.css'
import 'element-plus/theme-chalk/el-link.css'
import 'element-plus/theme-chalk/el-space.css'

withDefaults(
  defineProps<{
    /**
     * 是否展示微信二维码与平台图标行。
     * 默认 `true`；仅需文案时可设为 `false`。
     */
    showMedia?: boolean
  }>(),
  {
    showMedia: true,
  },
)
</script>

<template>
  <section class="vip-contact-author vip-doc-section vip-element-plus-vp-theme">
    <h2>联系作者</h2>

    <p>
      若系列文章对你有所帮助，欢迎订阅微信公众号或微信”骚扰“，获取更多内容。<strong>商务合作请备注来意</strong>
    </p>

    <!-- 双列网格：亮/暗共用尺寸，切换主题不重排 -->
    <div
      v-if="showMedia"
      class="vip-contact-author__wechat"
    >
      <div
        v-for="qrItem in SITE_CONTACT_QR_ITEMS"
        :key="qrItem.caption"
        class="vip-contact-author__wechat-item"
      >
        <div class="vip-contact-author__wechat-card">
          <ElImage
            :src="qrItem.src"
            :alt="qrItem.alt"
            :title="qrItem.caption"
            :preview="false"
            class="vip-contact-author__wechat-img"
            fit="contain"
            loading="lazy"
          />
        </div>
        <p class="vip-contact-author__wechat-caption">
          {{ qrItem.caption }}
        </p>
      </div>
    </div>

    <ElSpace
      v-if="showMedia"
      wrap
      :size="12"
      alignment="center"
      class="vip-contact-author__platform-row"
    >
      <ElLink
        v-for="item in VIP_CONTACT_PLATFORM_LINKS"
        :key="item.href"
        :href="item.href"
        :title="item.title"
        underline="never"
        class="vip-contact-author__platform-link"
        rel="nofollow noreferrer"
        target="_blank"
      >
        <ElImage
          :alt="item.alt"
          :src="item.icon"
          :preview="false"
          class="vip-contact-author__platform-icon"
          fit="contain"
          loading="lazy"
        />
      </ElLink>
    </ElSpace>

    <p>
      交流/加群/互看朋友圈、<strong>聊天/提问/建议/提需求</strong> 可以在公众号直接<strong>私信</strong>，有时间即会回复，偶尔的延迟和疏漏还请小伙伴们谅解，<strong>蟹蟹~</strong>。
    </p>
  </section>
</template>

<style lang="scss" scoped>
.vip-contact-author {
  margin-inline: clamp(0px, 2vw, 10px);
}

.vip-contact-author__wechat {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 3.5vw, 20px);
  width: min(100%, 288px);
  padding: 12px 12px 18px;
  margin: 0 auto 8px;
  box-sizing: border-box;
}

.vip-contact-author__wechat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 0;
  text-align: center;
}

.vip-contact-author__wechat-card {
  width: 100%;
  aspect-ratio: 1;
  padding: clamp(6px, 2vw, 10px);
  border: 1px solid var(--vp-c-divider);
  border-radius: clamp(12px, 3.5vw, 16px);
  background: #fff;
  overflow: hidden;
  box-sizing: border-box;
}

.vip-contact-author__wechat-img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: clamp(6px, 2vw, 10px);
}

.vip-contact-author__wechat-caption {
  margin: 0;
  font-size: clamp(11px, 3.2vw, 13px);
  line-height: 1.4;
  color: var(--vp-c-text-2);
}

.vip-contact-author__platform-row {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 12px;
}

.vip-contact-author__platform-link {
  display: inline-flex;
  line-height: 0;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background: var(--vp-c-bg-soft);
  }
}

.vip-contact-author__platform-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .vip-contact-author__wechat {
    width: min(100%, 276px);
    padding: 10px 10px 16px;
  }
}

@media (max-width: 480px) {
  .vip-contact-author__wechat {
    width: min(100%, 260px);
    gap: clamp(10px, 3vw, 16px);
    padding: 8px 10px 14px;
  }

  .vip-contact-author__wechat-item {
    gap: 6px;
  }
}

@media (max-width: 360px) {
  .vip-contact-author__wechat {
    width: min(100%, 248px);
  }
}
</style>
