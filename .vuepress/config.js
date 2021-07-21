module.exports = {
  title: 'Mischieff技术分享交流',
  base: '/blog/',
  description: '前端技术分享交流会',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/assets/images/logo.png',
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
    [
      'meta',
      {
        name: 'author',
        content: 'Mischieff',
      },
    ], // 作者
    [
      'meta',
      {
        name: 'keywords',
        content: 'vue,前端技术分享交流会,mis',
      },
    ], // 关键词
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  host: 'localhost', // ip
  port: 8098, // 端口
  evergreen: true, // 浏览器兼容性
  theme: 'antdocs', // 主题
  // 使用的主题
  themeConfig: {
    logo: '/assets/images/logo.png',
    sidebar: 'auto', // 按照md标题，自动生成侧边栏
    lastUpdated: '更新时间', // 更新时间
    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '文件',
        items: [
          {
            text: '《微前端（qiankun）》',
            link: '/doc/Qiankun',
          },
          {
            text: '《Markdown搭建前端博客（VuePress）》',
            link: '/doc/VuePress',
          },
          {
            text: '《Nodejs初识》',
            link: '/doc/Nodejs',
          },
          {
            text: '《uniapp初识》',
            link: '/doc/Uniapp',
          },
          {
            text: '《React初识》',
            link: '/doc/React',
          },
          {
            text: '《版本管理git回滚、重置、提交以及SourceTree复杂操作》',
            link: '/doc/SourceTree',
          },
          {
            text: '《Typora的使用（markdown标记语言）》',
            link: '/doc/Typora',
          },
          {
            text: '《Electron桌面应用初识》',
            link: '/doc/Electron',
          },
          {
            text: '《nginx代理vue技术分享》',
            link: '/doc/Nginx',
          },
          {
            text: '《Emoji 表情》',
            link: '/doc/emoji',
          },
        ],
      },
      {
        text: 'Github',
        link: 'https://github.com/mischieff',
      },
    ],
    sidebar: {
      '/doc/': [
        {
          title: '文件',
          collapsable: false,
          children: [
            {
              title: '《微前端（Qiankun）》',
              path: '/doc/Qiankun',
            },
            {
              title: '《Markdown搭建前端博客（VuePress）》',
              path: '/doc/VuePress',
            },
            {
              title: '《Nodejs初识》',
              path: '/doc/Nodejs'
            },
            {
              title: '《uniapp初识》',
              path: '/doc/Uniapp'
            },
            {
              title: '《React初识》',
              path: '/doc/React'
            },
            {
              title: '《版本管理git回滚、重置、提交以及SourceTree复杂操作》',
              path: '/doc/SourceTree',
            },
            {
              title: '《Typora的使用（markdown标记语言）》',
              path: '/doc/Typora',
            },
            {
              title: '《Electron桌面应用初识》',
              path: '/doc/Electron',
            },
            {
              title: '《nginx代理vue技术分享》',
              path: '/doc/Nginx',
            },
            {
              title: '《Emoji 表情》',
              path: '/doc/emoji',
            },
          ],
        },
      ],
      sidebarDepth: 4
    },
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 更新时间格式化插件
          // 不要忘了安装 moment
          const moment = require('moment');
          moment.locale('zh-cn');
          return moment(timestamp).format('LLL');
        },
      },
    ],
  ],
};
