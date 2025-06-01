import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCBUCKET 文档站",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]  // ← 设置 favicon 图标
  ],
  description: "MCBUCKET 服务器文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '插件文档', link: '/docs/introduction' }
    ],

    sidebar: [
      {
        text: '写在前面',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '文档介绍', link: '/docs/introduction' },
          { text: '常见问题', link: '/docs/faq' },
          { text: '颜色代码', link: '/docs/colors' },
        ]
      },
      {
        text: '插件列表',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'FlyPlus', link: '/docs/flyplus' },
          { text: 'TrChat', link: '/docs/trchat' },
          { text: 'DeluxeMenus', link: '/docs/dm' },
          { text: 'EssentialsX', link: '/docs/essentials' },
          { text: 'LuckPerms', link: '/docs/lp' },
          { text: 'TAB', link: '/docs/tab' },
          { text: 'TPA', link: '/docs/tpa' },
          { text: 'whitelist', link: '/docs/whitelist' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://space.bilibili.com/593367813?spm_id_from=333.1007.0.0' }
    ]
  }
})
