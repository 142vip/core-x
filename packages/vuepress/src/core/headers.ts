/**
 * 408CSFamily headers 配置
 */
export const FAMILY_HEADER = [
  ['link', { rel: 'icon', href: '/408_favicon.ico' }],
  // vercel统计 相关配置
  ['script', { type: 'text/javascript', src: '/_vercel/insights/script.js' }],
  // 百度统计
  [
    'script',
    {},
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?3515cc46ae60747b778140f0e5e22dfe";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();`,
  ],
]

/**
 * JavaScriptCollection headers 配置
 */
export const JSC_HEADER = [
  ['link', { rel: 'icon', href: 'favicon.ico' }],
  // vercel统计 相关配置
  ['script', { type: 'text/javascript', src: '/_vercel/insights/script.js' }],
  // 百度统计
  [
    'script',
    {},
    `var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?613c9d7af9e1c9a7f9eef6a55aa2399d";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();`,
  ],
]
