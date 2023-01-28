
const config = {
  title: '文档记录',
  description: '文档记录',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'Shortcut Icon',
        type: 'type="image/x-icon"',
        href: 'static/favicon.ico'
      }
    ]
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    logo: 'static/logo.jpg',
    lastUpdatedText: '上次更新文案',
    outline: 'deep',
    outlineTitle: '本页索引',
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
      },
      {
        text: 'guide3',
        link: '/guide'
      }
    ],
    sidebar: [
      {
        text: '知识点记录',
        collapsible: false,
        collapsed: true,
        items: [
          {
            text: 'css相关',
            link: '/record/css'
          }
        ]
      },
      {
        text: '收藏文章',
        collapsible: false,
        collapsed: true,
        items: [
          {
            text: '收藏文章',
            link: '/article/index'
          }
        ]
      },
      {
        text: '问题汇总',
        collapsible: false,
        collapsed: true,
        items: [
          {
            text: 'css相关',
            link: '/question/css'
          }
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
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}


export default config