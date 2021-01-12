# 前端博客（VuePress）

> 程序员一定要有自己的博客，哪怕是`生活博客`。

### 一、介绍

> **VuePress** 是尤雨溪发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 [VuePress中文网](https://vuepress.docschina.org/)。
>
> **VuePress **由两部分组成：第一部分是一个[极简静态网站生成器 (opens new window)](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件 API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

**VuePress** 有很多优点：

- 界面简洁优雅（个人感觉比 HEXO 好看）
- 容易上手（半小时能搭好整个项目）
- 更好的兼容、扩展 Markdown 语法
- 响应式布局，PC端、手机端

### 二、开始创建

1. **创建博客文件**

   > 创建blog文件夹，也可以使用 mkdir 命令新建

   ```c++
   mkdir blog
   ```

   

2. **全局安装VuePress**

   ```node
   npm install -g vuepress
   ```

   

3. **初始化项目**

   > 进入blog文件夹，使用 `npm init` 或 `npm init -y`（默认yes）

   ```
   npm init
   ```

   初始化完成，会生成`package.json`文件。

   

4. **创建配置文件和文件夹**

   > （1）创建文件夹`.vuepress`
   >
   > （2）进入`.vuepress`文件夹，创建`public`文件夹，创建`config.js`文件

   *至此文件结构为：*

   ```json
   blog
   ├───.vuepress
   │     ├── public		// 静态资源文件
   │     └── config.js		// 博客首页
   └── package.json
   ```

   

5. **创建首页**

   > 创建`index.md`首页文件。

   ``````json
   ---
   home: true
   heroImage: /assets/images/logo.png
   heroText: 博客标题
   tagline: 博客副标题
   actionText: 快速阅读
   actionLink: /vue/scrollNumberTop
   features:
   - title: 主页
     details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
   - title: Vue插件
     details: Mischieff为你提供Vue组件，让你的项目炫炫炫！！！
   - title: 其他
     details: Mischieff为你提供一起适配方式及解决方案，没错还是让你爽到爆。
   footer: Mischieff 前端菜鸟提供
   ---
   ``````

   > 配置后，第9步运行完成，对应的首页渲染效果为：

   ![image-20210111182529913](/blog/assets/github/image-20210111182529913.png)

   

6. **创建网页文件**（根据所需，自由创建）

   > 创建`doc`文件夹，创建页面文件`analysis.md`

   *至此文件结构为：*

   ```json
   blog
   ├───.vuepress
   │	├── public		 // 静态资源文件
   │	└── config.js	  // 博客首页
   ├───doc				// 文档
   │	└── analysis.md	  // 分析交流会页面
   └── package.json
   ```

   

7. **config.js文件配置**

   > 进入`.vuepress/config.js`，配置`config.js`文件

   ```json
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
             // 页面底部更新时间格式化
             // 不要忘了安装 ：npm install moment
             const moment = require('moment');
             moment.locale('zh-cn');
             return moment(timestamp).format('LLL');
           },
         },
       ],
     ],
   };
   ```

   > 配置后，第9步运行完成，对应的head渲染效果为：

   ![image-20210111180250656](/blog/assets/github/image-20210111180250656.png)

   > 配置后，第9步运行完成，对应的导航菜单渲染效果为：

   ![image-20210111180100453](/blog/assets/github/image-20210111180100453.png)

   

8. **配置package.json**

   > 进入`package.json`，配置`scripts`启动文件。

   ```json
   "scripts": {
       "dev": "vuepress dev",
       "build": "vuepress build",
       "deploy": "bash deploy.sh"
   },
   ```

   

9. **启动博客**

   > 启动博客，浏览器查看`http://localhost:8080/blog/`。

   ```node
   npm run dev
   ```

   

### 四、部署前工作

> 现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。一般来说，有两种方案可供选择：

+ 自己买一个服务器，阿里云、腾讯云等，这种方式的好处是速度有保证、可以被搜索引擎收录。

+ 使用 [Github Pages](https://pages.github.com/) 。简单说就是 `Github `提供的，用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。

下面将给大家讲解如何使用 `Github Pages`服务。



1. **登录Github**

   > 登录自己的Github，点击如图所示`新建`按钮，或者点击右上角`+按钮`进行新建。

   ![image-20210112114930604](/blog/assets/github/image-20210112114930604.png)

   

2.  **创建项目**

   > 填写如图所示资料，点击创建。
   >
   > **注意**：**`创建的项目名和文件名一致`**

   ![image-20210112115200943](/blog/assets/github/image-20210112115200943.png)

   

3. **创建git忽略文件** `

   > 创建`.gitignore`文件。内容如下

   ```json
   node_modules/
   .vuepress/dist
   ```

4.  **上传文件** 

   > 上传文件至`Github`上，命令如下：

   ```c++
    git add .
    git commit -m "提交内容"
    git push -u origin master
   ```
      

5.  **创建应用脚本文件**

   > 创建应用脚本文件`deploy.sh`。

   ```java
   # 确保脚本抛出遇到的错误
   set -e
   
   # 生成静态文件
   npm run build
   
   # 进入生成的文件夹
   cd .vuepress/dist
   
   git init
   git add -A
   git commit -m 'deploy'
   
   # 如果发布到 https://<USERNAME>.github.iyarn docs:devo
   # git push -f git@github.com:mischieff/blog.github.io.git master
   
   # 如果发布到 https://<USERNAME>.github.io/<REPO>
   git push -f git@github.com:mischieff/blog.git master:gh-pages
   
   cd -
   ```

   

6.  **部署**

   > 运行deploy命令进行上传部署。

   ```json
   npm run deploy
   ```

   

7.   **查看部署配置确保运行**

   > 打开Git，进入刚上传的目录中，点击`Settings`进行配置。

   ![image-20210112160144554](/blog/assets/github/image-20210112175336735.png)

   

   > 在`Options`，设置`Source`,确保切换在`gh-pages`分支上。
   >
   > 当出现如图所示绿勾时 :heavy_check_mark: 说明部署成功。

   ![image-20210112160343301](/blog/assets/github/image-20210112160343301.png)

   

8.  **完成部署**

   > 此刻就可以进入自己的博客**`https://mischieff.github.io/blog/`**，尽情的欣赏自己的作品吧！！！

![image-20210112160929682](/blog/assets/github/image-20210112160929682.png)



![image-20210112160951795](/blog/assets/github/image-20210112160951795.png)


### 五、注意事项

1. **图片**

   > 图片文件夹路径 `.vuepress/public/` 一般创建`images`文件夹
   >
   > 更改路径 `/blog/assets/images/`

   ```markdown
   ![image-20210112160951795](/blog/assets/images/image-20210112160951795.png)
   ```

2.   **更换主题色**

   > 在`.vuepress/styles/palette`.创建主题文件，修改主题配置文件。

   ```stylus
   // 颜色
   $accentColor = #3eaf7c  // 默认主题颜色
   $textColor = #2c3e50    // 默认字体颜色
   $borderColor = #eaecef  // 默认边框颜色
   $codeBgColor = #282c34  // 默认代码背景颜色
   $arrowBgColor = #ccc    // 默认箭头颜色
   $badgeTipColor = #42b983   
   $badgeWarningColor = darken(#ffe564, 35%)
   $badgeErrorColor = #DA5961
   
   // 布局
   $navbarHeight = 3.6rem  // 默认导航高度
   $sidebarWidth = 20rem   // 默认左侧导航宽度
   $contentWidth = 760px   // 默认详情页宽度
   $homePageWidth = 960px  // 默认首页宽度
   
   // 响应式变化点
   $MQNarrow = 959px   
   $MQMobile = 719px
   $MQMobileNarrow = 419px
   
   ```








