interface FooterOptions {
  /**
   * 项目名称
   */
  name: string
  /**
   * 项目版本
   */
  version: string
}

/**
 * 页脚
 */
export function getFooterHtml(options: FooterOptions): string {
  return `
<div>
    All Rights Reserved
    <a href="https://github.com/142vip" target="_blank">@142vip</a> .
    ${options.name}@v${options.version} 
    &nbsp;&nbsp;
</div>
<div style="margin-top: 5px">
  <a href="https://tongji.baidu.com/web/welcome/login" target="_blank">百度统计</a> 
  <span style="margin: 0 5px;">|</span>
  <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">鄂ICP备17025193号-1 </a>
<!--  <span style="margin: 0 5px;">|</span>-->
<!--  <a href="https://theme-hope.vuejs.press/" target="_blank">Vuepress</a> -->
</div>
`
}

/**
 * 版权信息
 */
export function getCopyRightText(authorName: string): string {
  return `Copyrights © 2015-${new Date().getFullYear()} ${authorName}`
}
