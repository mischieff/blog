<h1>《Uniapp初识》</h1>

## 一、Uniapp简介

>`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。>

## 二、下载安装

>建议使用HBilder X 开发，HBuilder X 下载地址：<span><a href='https://www.dcloud.io/hbuilderx.html'>https://www.dcloud.io/hbuilderx.html</a></span>
>

特点: 

+ 轻巧、极速
+  强大的语法提示
+  专为vue打造
+  清爽护眼
+  高效极客操作
+  markdown优先

## 三、项目创建

### 1. 创建uni-app

在点击工具栏里的文件 -> 新建 -> 项目：

![](/blog/assets/images/Uniapp/b925a1c0-4f19-11eb-97b7-0dc4655d6e68.png)

选择`uni-app`类型，输入工程名，选择模板，点击创建，即可成功创建。

> uni-app自带的模板有 Hello uni-app ，是官方的组件和API示例。还有一个重要模板是 uni ui项目模板，日常开发推荐使用该模板，已内置大量常用组件。
>

<img src="/blog/assets/images/Uniapp/2.png" style="zoom: 80%;" />

### 2. 项目结构

一个uni-app工程，默认包含如下目录及文件：

┌─cloudfunctions        云函数目录（阿里云为aliyun，腾讯云为tcb，详见<a href="https://uniapp.dcloud.io/uniCloud/">uniCloud</a>）
       │─components            符合vue组件规范的uni-app组件目录
       │  └─comp-a.vue         可复用的a组件
       ├─hybrid                存放本地网页的目录，<a href="/component/web-view">详见</a>
       ├─platforms             存放各平台专用页面的目录，<a href="/platform?id=%E6%95%B4%E4%BD%93%E7%9B%AE%E5%BD%95%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91">详见</a>
       ├─pages                 业务页面文件存放的目录
       │  ├─index
       │  │  └─index.vue       index页面
       │  └─list
       │     └─list.vue        list页面
       ├─static                存放应用引用静态资源（如图片、视频等）的目录，<b>注意：</b>静态资源只能存放于此
       ├─wxcomponents          存放小程序组件的目录，<a href="/frame?id=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81">详见</a>
       ├─main.js               Vue初始化入口文件
       ├─App.vue               应用配置，用来配置App全局样式以及监听 <a href="/collocation/frame/lifecycle?id=应用生命周期">应用生命周期</a>
       ├─manifest.json         配置应用名称、appid、logo、版本等打包信息，<a href="/collocation/manifest">详见</a>
       └─pages.json            配置页面路由、导航条、选项卡等页面类信息，<a href="/collocation/pages">详见</a>

#### 	2.1 hybird

`web-view` 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面（nvue 使用需要手动指定宽高）。
>`注意：`
<br />1 .web-view的src属性对于本地路径支持不太友好，建议为网络。
<br />2. 各小程序平台，web-view 加载的 url 需要在后台配置域名白名单，包括内部再次 iframe 内嵌的其他 url 。
>

#### 	2.2 platfroms

**整体目录条件编译**

如果想把各平台的页面文件更彻底的分开，也可以在uni-app项目根目录创建`platforms`目录，然后在下面进一步创建`app-plus`、`mp-weixin`等子目录，存放不同平台的文件。

## 四、项目运行

### 1. 浏览器运行

> 进入hello-uniapp项目，点击工具栏的运行 -> 运行到浏览器 -> 选择浏览器，即可在浏览器里面体验uni-app 的 H5 版。
>

![](/blog/assets/images/Uniapp/5.png)

### 2. 真机运行

> 连接手机，开启USB调试，进入hello-uniapp项目，点击工具栏的运行 -> 真机运行 -> 选择运行的设备，即可在该设备里面体验uni-app。
>

<img src="/blog/assets/images/Uniapp/4.png" style="zoom: 80%;" />

### 3. 在微信开发者工具里运行

>`注意：`如果是第一次使用，需要先配置小程序ide的相关路径，才能运行成功。如下图，需在输入框输入微信开发者工具的安装路径。 若HBuilderX不能正常启动微信开发者工具，需要开发者手动启动，然后将uni-app生成小程序工程的路径拷贝到微信开发者工具里面，在HBuilderX里面开发，在微信开发者工具里面就可看到实时的效果。
>

uni-app默认把项目编译到根目录的unpackage目录。

![](/blog/assets/images/Uniapp/3.png)

### 4.在支付宝小程序开发者工具里运行

进入hello-uniapp项目，点击工具栏的运行 -> 运行到小程序模拟器 -> 支付宝小程序开发者工具，即可在支付宝小程序开发者工具里面体验uni-app。

<img src="/blog/assets/images/Uniapp/6.png" style="zoom:80%;" />

## 五、区别

> 在Uniapp中跳转tabbar页面的时候，url只能写成绝对路径，然而在微信小程序中可以写成相对路径。
>

点击事件uniapp使用的是@click，微信小程序使用的是bindTap。

div 用 view 标签替代。

span，font 改成 text

a 改为 navigator

img 改为 image

没有 ul li

select 改为 picker

**大多数的方法都是参考微信小程序的。如：wx.request 换为 uni.request。只需要把wx. 换位 uni.**

## 六、项目打包及发布

### 1. 发布为H5

#### 	1.1 在 `manifest.json` 的可视化界面，进行如下配置（发行在网站根目录可不配置应用基本路径），此时发行网站路径是 www.xxx.com/h5，如：			[https://hellouniapp.dcloud.net.cn](https://hellouniapp.dcloud.net.cn/)。

<img src="/blog/assets/images/Uniapp/7.png" style="zoom:67%;" />

#### 	1.2 在HBuilderX工具栏，点击发行，选择网站-H5手机版，如下图，点击即可生成 H5 的相关资源文件，保存于 unpackage 目录。

<img src="/blog/assets/images/Uniapp/8.png" style="zoom:80%;" />

### 2. 发布为微信小程序

#### 	2.1 申请微信小程序AppID，参考：[微信教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#申请帐号)。

#### 	2.2 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-微信"，输入小程序名称和appid点击发行即可在 `unpackage/dist/build/mp-weixin` 生成微信小程序项目代码。

​	<img src="/blog/assets/images/Uniapp/9.png" style="zoom:80%;" />

#### 	2.3 在微信小程序开发者工具中，导入生成的微信小程序项目，测试项目代码运行正常后，点击“上传”按钮，之后按照 “提交审核” => “发布” 小程序标准流程，逐步操作即可，详细查看：[微信官方教程](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#发布上线)。

### 3. **发布为支付宝小程序**

#### 	3.1 入驻支付宝小程序，参考：[支付宝小程序教程](https://docs.alipay.com/mini/introduce)。

#### 	3.2 在HBuilderX中顶部菜单依次点击 "发行" => "小程序-支付宝"，即可在 `/unpackage/dist/build/mp-alipay` 生成支付宝小程序项目代码。

<img src="/blog/assets/images/Uniapp/10.png" style="zoom:80%;" />

#### 	3.3 在支付宝小程序开发者工具中，导入生成的支付宝小程序项目，测试项目代码运行正常后，点击“上传”按钮上传代码，在 [支付宝小程序后台](https://open.alipay.com/platform/mini.htm#/app)，选择刚提交的版本点击提交审核，详见：[支付宝小程序文档](https://docs.alipay.com/mini/developer/publish)。

### 4. 发布App

#### 	4.1 打包为原生App（云端）

在HBuilderX工具栏，点击发行，选择原生app-云端打包，如下图：

<img src="/blog/assets/images/Uniapp/21.png" style="zoom:80%;" />

<img src="/blog/assets/images/Uniapp/22.png" style="zoom: 40%;" />

#### 	4.2 打包为原生App（离线）

> `uni-app` 支持离线打包，在 HBuilderX 发行菜单里生成离线打包资源，然后参考离线打包文档操作，可以从HBuilderX的发行菜单里找到文档链接，也可以直接访问：https://nativesupport.dcloud.net.cn/AppDocs/README。

在HBuilderX工具栏，点击发行，选择本地打包，如下图，点击即可生成离线打包资源。

<img src="/blog/assets/images/Uniapp/23.png" style="zoom:80%;" />

## 七、其他

### 1. 应用生命周期

<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onLaunch</td>
<td style="text-align:left">当<code>uni-app</code> 初始化完成时触发（全局只触发一次）</td>
</tr>
<tr>
<td style="text-align:left">onShow</td>
<td style="text-align:left">当 <code>uni-app</code> 启动，或从后台进入前台显示</td>
</tr>
<tr>
<td style="text-align:left">onHide</td>
<td style="text-align:left">当 <code>uni-app</code> 从前台进入后台</td>
</tr>
<tr>
<td style="text-align:left">onError</td>
<td style="text-align:left">当 <code>uni-app</code> 报错时触发</td>
</tr>
<tr>
<td style="text-align:left">onUniNViewMessage</td>
<td style="text-align:left">对 <code>nvue</code> 页面发送的数据进行监听，可参考 <a href="https://uniapp.dcloud.io/nvue-api?id=communication" target="_blank">nvue 向 vue 通讯</a></td>
</tr>
<tr>
<td style="text-align:left">onUnhandledRejection</td>
<td style="text-align:left">对未处理的 Promise 拒绝事件监听函数（2.8.1+）</td>
</tr>
<tr>
<td style="text-align:left">onPageNotFound</td>
<td style="text-align:left">页面不存在监听函数</td>
</tr>
<tr>
<td style="text-align:left">onThemeChange</td>
<td style="text-align:left">监听系统主题变化</td>
</tr>
</tbody>
</table>
<span style='font-weight: 600'>注意：</span>应用生命周期仅可在App.vue中监听，在其它页面监听无效。

### 2. 页面生命周期

<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
<th style="text-align:left">最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onLoad</td>
<td style="text-align:left">监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参），参考<a href="/api/router?id=navigateto">示例</a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onShow</td>
<td style="text-align:left">监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onReady</td>
<td style="text-align:left">监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onHide</td>
<td style="text-align:left">监听页面隐藏</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onUnload</td>
<td style="text-align:left">监听页面卸载</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onResize</td>
<td style="text-align:left">监听窗口尺寸变化</td>
<td style="text-align:left">App、微信小程序</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onPullDownRefresh</td>
<td style="text-align:left">监听用户下拉动作，一般用于下拉刷新，参考<a href="/api/ui/pulldown">示例</a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onReachBottom</td>
<td style="text-align:left">页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onTabItemTap</td>
<td style="text-align:left">点击 tab 时触发，参数为Object，具体见下方注意事项</td>
<td style="text-align:left">微信小程序、支付宝小程序、百度小程序、H5、App（自定义组件模式）</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onShareAppMessage</td>
<td style="text-align:left">用户点击右上角分享</td>
<td style="text-align:left">微信小程序、百度小程序、字节跳动小程序、支付宝小程序</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onPageScroll</td>
<td style="text-align:left">监听页面滚动，参数为Object</td>
<td style="text-align:left">nvue暂不支持</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarButtonTap</td>
<td style="text-align:left">监听原生标题栏按钮点击事件，参数为Object</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onBackPress</td>
<td style="text-align:left">监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：<a href="http://ask.dcloud.net.cn/article/35120" target="_blank">onBackPress 详解</a>。支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。</td>
<td style="text-align:left">app、H5、支付宝小程序</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarSearchInputChanged</td>
<td style="text-align:left">监听原生标题栏搜索输入框输入内容变化事件</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left">1.6.0</td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarSearchInputConfirmed</td>
<td style="text-align:left">监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left">1.6.0</td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarSearchInputClicked</td>
<td style="text-align:left">监听原生标题栏搜索输入框点击事件</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left">1.6.0</td>
</tr>
<tr>
<td style="text-align:left">onShareTimeline</td>
<td style="text-align:left">监听用户点击右上角转发到朋友圈</td>
<td style="text-align:left">微信小程序</td>
<td style="text-align:left">2.8.1+</td>
</tr>
<tr>
<td style="text-align:left">onAddToFavorites</td>
<td style="text-align:left">监听用户点击右上角收藏</td>
<td style="text-align:left">微信小程序</td>
<td style="text-align:left">2.8.1+</td>
</tr>
</tbody>
</table>

#### 2.1 onReachBottom

使用注意 可在pages.json里定义具体页面底部的触发距离[onReachBottomDistance](https://uniapp.dcloud.io/collocation/pages)，比如设为50，那么滚动页面到距离底部50px时，就会触发onReachBottom事件。如使用scroll-view导致页面没有滚动，则触底事件不会被触发。

#### 2.2 onPageScroll       【（监听滚动、滚动监听、滚动事件）参数说明】

<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>scrollTop</td>
<td>Number</td>
<td>页面在垂直方向已滚动的距离（单位px）</td>
</tr>
</tbody>
</table>

>`注意：`<br />1. onPageScroll里不要写交互复杂的js，比如频繁修改页面。因为这个生命周期是在渲染层触发的，在非h5端，js是在逻辑层执行的，两层之间通信是有损耗的。如果在滚动过程中，频发触发两层之间的数据交换，可能会造成卡顿。<br />2. 如果想实现滚动时标题栏透明渐变，在App和H5下，可在pages.json中配置titleNView下的type为transparent<br />3. onBackPress上不可使用async，会导致无法阻止默认返回
>

### 3. 组件生命周期

`uni-app` 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周期：

<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">beforeCreate</td>
<td style="text-align:left">在实例初始化之后被调用。<a href="https://cn.vuejs.org/v2/api/#beforeCreate" target="_blank">详见</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">created</td>
<td style="text-align:left">在实例创建完成后被立即调用。<a href="https://cn.vuejs.org/v2/api/#created" target="_blank">详见</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">beforeMount</td>
<td style="text-align:left">在挂载开始之前被调用。<a href="https://cn.vuejs.org/v2/api/#beforeMount" target="_blank">详见</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">mounted</td>
<td style="text-align:left">挂载到实例上去之后调用。<a href="https://cn.vuejs.org/v2/api/#mounted" target="_blank">详见</a> 注意：此处并不能确定子组件被全部挂载，如果需要子组件完全挂载之后在执行操作可以使用<code>$nextTick</code><a href="https://cn.vuejs.org/v2/api/#Vue-nextTick" target="_blank">Vue官方文档</a></td>
<td style="text-align:left">         </td>
</tr>
<tr>
<td style="text-align:left">beforeUpdate</td>
<td style="text-align:left">数据更新时调用，发生在虚拟 DOM 打补丁之前。<a href="https://cn.vuejs.org/v2/api/#beforeUpdate" target="_blank">详见</a></td>
<td style="text-align:left">仅H5平台支持</td>
</tr>
<tr>
<td style="text-align:left">updated</td>
<td style="text-align:left">由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。<a href="https://cn.vuejs.org/v2/api/#updated" target="_blank">详见</a></td>
<td style="text-align:left">仅H5平台支持</td>
</tr>
<tr>
<td style="text-align:left">beforeDestroy</td>
<td style="text-align:left">实例销毁之前调用。在这一步，实例仍然完全可用。<a href="https://cn.vuejs.org/v2/api/#beforeDestroy" target="_blank">详见</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">destroyed</td>
<td style="text-align:left">Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。<a href="https://cn.vuejs.org/v2/api/#destroyed" target="_blank">详见</a></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>


### 4. 路由

> `uni-app`页面路由为框架统一管理，开发者需要在[pages.json](https://uniapp.dcloud.io/collocation/pages?id=pages)里配置每个路由页面的路径及页面样式。类似小程序在app.json中配置页面路由一样。

`uni-app` 有两种页面路由跳转方式：

+ navigator：使用[navigator](https://uniapp.dcloud.io/component/navigator)组件跳转、调用[API](https://uniapp.dcloud.io/api/router)跳转。
+ 页面跳转，该组件类似HTML中的`<a>`组件，但只能跳转本地页面。目标页面必须在pages.json中注册。

<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">String</td>
<td style="text-align:left"></td>
<td style="text-align:left">应用内的跳转链接，值为相对路径或绝对路径，如："../first/first"，"/pages/first/first"，注意不能加 <code>.vue</code> 后缀</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">open-type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">navigate</td>
<td style="text-align:left">跳转方式</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">delta</td>
<td style="text-align:left">Number</td>
<td style="text-align:left"></td>
<td style="text-align:left">当 open-type 为 'navigateBack' 时有效，表示回退的层数</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">animation-type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">pop-in/out</td>
<td style="text-align:left">当 open-type 为 navigate、navigateBack 时有效，窗口的显示/关闭动画效果，详见：<a href="/api/router?id=animation">窗口动画</a></td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">animation-duration</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">300</td>
<td style="text-align:left">当 open-type 为 navigate、navigateBack 时有效，窗口显示/关闭动画的持续时间。</td>
<td style="text-align:left">App</td>
</tr>
<tr>
<td style="text-align:left">hover-class</td>
<td style="text-align:left">String</td>
<td style="text-align:left">navigator-hover</td>
<td style="text-align:left">指定点击时的样式类，当hover-class="none"时，没有点击态效果</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">hover-stop-propagation</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">false</td>
<td style="text-align:left">指定是否阻止本节点的祖先节点出现点击态</td>
<td style="text-align:left">微信小程序</td>
</tr>
<tr>
<td style="text-align:left">hover-start-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">50</td>
<td style="text-align:left">按住后多久出现点击态，单位毫秒</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">hover-stay-time</td>
<td style="text-align:left">Number</td>
<td style="text-align:left">600</td>
<td style="text-align:left">手指松开后点击态保留时间，单位毫秒</td>
<td style="text-align:left">&nbsp;</td>
</tr>
<tr>
<td style="text-align:left">target</td>
<td style="text-align:left">String</td>
<td style="text-align:left">self</td>
<td style="text-align:left">在哪个小程序目标上发生跳转，默认当前小程序，值域self/miniProgram</td>
<td style="text-align:left">微信2.0.7+、百度2.5.2+、QQ</td>
</tr>
</tbody>
</table>
**open-type 有效值**

<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">navigate</td>
<td style="text-align:left">对应 uni.navigateTo 的功能</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">redirect</td>
<td style="text-align:left">对应 uni.redirectTo 的功能</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">switchTab</td>
<td style="text-align:left">对应 uni.switchTab 的功能</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">reLaunch</td>
<td style="text-align:left">对应 uni.reLaunch 的功能</td>
<td style="text-align:left">字节跳动小程序不支持</td>
</tr>
<tr>
<td style="text-align:left">navigateBack</td>
<td style="text-align:left">对应 uni.navigateBack 的功能</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">exit</td>
<td style="text-align:left">退出小程序，target="miniProgram"时生效</td>
<td style="text-align:left">微信2.1.0+、百度2.5.2+、QQ1.4.7+</td>
</tr>
</tbody>
</table>

