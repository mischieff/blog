module.exports = {
  title: 'Mischieff',
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
            text: '前端分析交流',
            link: '/doc/analysis',
          },
          {
            text: 'Emoji 表情',
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
              title: '前端分析交流',
              path: '/doc/analysis',
            },
            {
              title: 'Emoji 表情',
              path: '/doc/emoji',
            },
          ],
        },
      ],
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
