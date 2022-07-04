
/* vite配置文件
 * title              { String }   【 标题，默认为VitePress 】
 * description        { String }   【 描述 】
 * appearance         { Boolean }  【 是否展示dark主题，默认为true 】
 * base               { String }   【 项目路径，默认为'/' 】
 * ignoreDeadLinks    { Boolean }  【 忽略因为无效链接导致构建失败，默认为false 】
 * lang               { String }   【 页面html lang 语言设置，默认为en-US 】
 * lastUpdated        { Boolean }  【 是否展示上次更新时间，默认为false；注意：这个时间取的是git commit提交的时间 】
 * markdown           { Object }   【 markdown解析样式配置 】
 *  theme             { String }   【 markdown主题 】
 *  lineNumbers       { Boolean }  【 是否显示行号，默认为false 】
 * themeConfig        { Object }   【 主题配置 】
 *   logo             { String }   【 title前面的logo图标 】
 *   lastUpdatedTex   { String }   【 上次更新文案设置 】
 *   siteTitle        { String }   【 覆盖title内容 】
 *   nav              { Array }    【 页面上方Nav列表 】
 *   sidebar          { Array }    【 页面左侧Side列表 】
 *      collapsible   { Boolean }  【 是否可折叠 】 
 *      collapsed     { Boolean }  【 初始折叠状态，默认false 】
 *   socialLinks      { Object }   【 在nav右侧加上您的账户信息，比如github等  】
 *     icon           { String }   【 github | twitter | discord | facebook | instagram | linkedin | slack | youtube 】
 *     link           { String }   【 对应的链接地址 】
 *   footer           { Object }   【 底部信息展示，展示在不包含sidebar部分的页面 】
 *     message        { String }   【 底部信息展示 - 信息文案 】
 *     copyright      { String }   【 底部信息展示 - 版权信息 】
 *   editLink         { Object }   【 页面编辑 】
 *     pattern        { String }   【 页面编辑 - 地址 】
 *     text           { String }   【 页面编辑 - 展示文案】
 *   carbonAds        { Object }   【 carbon接入  】
 * base               { String } 【  】
 * base               { String } 【  】
 * base               { String } 【  】
 * 
 * 
 * 
*/

const config = {
  title: 'vite生成文档',
  description: 'vite文档描述',
  lastUpdated: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    logo: 'static/logo.jpg',
    lastUpdatedText: '上次更新文案',
    nav: [
      {
        text: '使用教程',
        link: '/guide/'
      },
      {
        text: 'guide2',
        items: [
          {
            text: 'guide2-1',
            link: '/guide2',
          }
        ]
      }
    ],
    sidebar: [
      {
        text: '侧边栏',
        collapsible: true,
        collapsed: true,
        items: [
        ]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sneptune-love/vitepress-docs-tpl'
      }
    ],
    footer: {
      message: 'footer message',
      copyright: 'xxx'
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/',
      text: 'Edit this page on GitHub'
    },
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}


export default config