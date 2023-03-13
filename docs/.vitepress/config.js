
const baseUrl = '/xf-doc/'

const config = {
  base: baseUrl,
  outDir: '../dist',
  title: '文档记录',
  description: '文档记录',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'Shortcut Icon',
        type: 'type="image/x-icon"',
        href: baseUrl + 'favicon.ico'
      }
    ]
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  },
  themeConfig: {
    logo: 'logo.jpg',
    lastUpdatedText: '上次更新文案',
    outline: 'deep',
    outlineTitle: '本页目录',
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
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'Css',
            link: '/record/css'
          },
          {
            text: 'Js',
            link: '/record/js'
          },
          {
            text: 'Node',
            link: '/record/node'
          },
          {
            text: 'Vue',
            link: '/record/vue'
          },
          {
            text: 'Ts',
            link: '/record/ts'
          },
          {
            text: 'Git',
            link: '/record/git'
          }
        ]
      },
      {
        text: '收藏文章',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: '收藏文章',
            link: '/article/index'
          }
        ]
      },
      {
        text: '问题汇总',
        collapsible: true,
        collapsed: false,
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
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}


export default config