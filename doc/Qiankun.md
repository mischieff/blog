# 微前端
<div class="cc-speaker-content color9">
       <span class="cc-speaker">主讲：Mischieff</span>
       <span class="cc-wrap"> 
              <span class="cc-stage">第十一期</span>
       </span>
</div> 
## 一、使用背景

一个集成了不同业务的大平台，很多情况下都是将业务拆分成多个子系统进行开发，最后由平台提供统一的入口。而在当前快速变化的前端大环境下，此类平台需要考虑以下几个难题：

1. 怎样将不同业务子系统集中到一个大平台上，统一对外开放？
2. 如何给不同用户赋予权限让其能够访问平台的特定业务模块同时禁止其访问无权限的业务模块？
3. 如何快速接入新的子系统，并对子系统进行版本管理，保证功能同步？
4. 针对于老系统，如何实现从 Backbone 技术栈到 React 技术栈或 Vue 技术栈的平滑升级？



## 二、介绍

> 微前端就是将不同的功能按照不同的维度拆分成多个子应用。通过主应用来加载这些子应用。
>
> 微前端架构旨在解决单体应用在一个相对长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用演变成一个巨石应用后，随之而来的应用不可维护的问题。这类问题在企业级 Web 应用中尤其常见。
>
> 微前端的核心在于**`拆`**, 拆完后在**`合`**!

[qiankun](https://qiankun.umijs.org/zh) 是一个基于 [single-spa](https://github.com/CanopyTax/single-spa) 的`微前端`实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

微前端架构具备以下几个核心价值：

- **技术栈无关 **

  主框架不限制接入应用的技术栈，子应用具备完全自主权

- **独立开发、独立部署**

  子应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新

- **独立运行时**

  每个子应用之间状态隔离，运行时状态不共享



## 三、实战

### 1、主应用

安装`qiankun`依赖

```
npm i qiankun -S
```



1. **主程序**

   > 在主应用切换子应用代码中，加入以下代码片段：

   ```vue
   <el-menu :router="true" mode="horizontal">
       <el-menu-item index="/home/index">首页</el-menu-item>
       <el-menu-item index="/zf">子应用</el-menu-item>
   </el-menu>
   <router-view v-show="$route.name"></router-view>
   <div v-show="!$route.name" id="zfSystemId"></div>
   
   ```

   

   > 在主应用`main.js`中引入以下代码片段

   ```js
   import {registerMicroApps,start} from 'qiankun'
   
   let fullscreenLoading = null; // loading
   
   // 初始化vue
   new Vue({
     el: '#app',
     router,
     store,
     render: h => h(App)
   });
   
   const apps = [
     {
       name: 'zf system',  // 应用名
       entry: 'http://localhost:10000/ ',  // 默认会加载这个html，解析里面的js，动态执行（子应用必须支持跨域） fetch
       container: '#zfSystemId', // 容器名
       activeRule: '/zf', // 激活路径
       props: {	// 参数传递到子应用
         userInfo: store.getters.userInfo
       },
     }
   ]
   
   // 注册应用
   registerMicroApps(
     apps,
     {
       beforeLoad: [ // 挂载前回调
         app => {
           // console.log("------------- before load", app);
           fullscreenLoading = Loading.service({
             lock: true,
             text: '正在进入',
             background: 'rgba(255, 255, 255, 0.8)'
           });
         }
       ],
       beforeMount: [  // 挂载后回调
         app => {
           // console.log("------------- before mount", app);
           fullscreenLoading.close();
         }
       ],
       afterUnmount: [ // 卸载后回调
         app => {
           // console.log("------------- after unload", app);
         }
       ]
     }
   );
   
   // 开启应用
   start({
     prefetch: false,  // 取消预加载
     // sandbox: { strictStyleIsolation: true }  // 开启沙箱
   });
   
   // 默认加载子应用
   // setDefaultMountApp('/zf/home/index')
   
   ```


### 2、微应用

1. **微程序**

   > 在子应用`main.js`中，删除之前的vue初始化，添加下面代码

   ```javascript
   // 次句代码在main.js第一行写入
   if (!!window.__POWERED_BY_QIANKUN__) {
     __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
   }
   
   /****************** 微应用接入 ***************************/
   let instance = null;
   function render () {
     instance = new Vue({
       router,
       store,
       render: h => h(App)
     }).$mount('#zfApp')// 挂载到index.html中的id上
   }
   
   
   // 乾坤运行使用
   if (!!window.__POWERED_BY_QIANKUN__) {
     __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
   }
   
   // 独立运行
   if (!window.__POWERED_BY_QIANKUN__) { render() }
   
   
   /******************* 乾坤协议 ************************/
   // 初始化
   export async function bootstrap () {
     console.log('zf app bootstraped');
   }
   
   //装载
   export async function mount (props) {
     console.log('zf app mount', props);
     render(props)
   }
   
   // 卸载
   export async function unmount (props) {
     console.log('zf app unmount', props);
     instance.$destroy(props);
     instance = null;
   }
   ```

2. **更改挂载ID**

   > 在`index.html`入口文件更改`id`值（上一步挂载的ID）

   

3.  **更改路由**

   > 微应用的`base`为主应用`main.js`中`activeRule`设置的值，`window.__POWERED_BY_QIANKUN__`为微服务专属属性
   >
   
```javascript
   new Router({
     mode: 'history', // require service support
     base: !!window.__POWERED_BY_QIANKUN__ ? "/zf" : "",  // 判断qiankun微服务与独立运行时的基础路径
     routes: constantRoutes
   });
```



4. **微程序打包配置**

    在子应用`vue.config.js`中添加配置

   ```javascript
   module.exports = {
       configureWebpack:{
           output:{
               library:'zf-System',	// 组件名称（可随意）
               libraryTarget:'umd'		// 该方案支持commonjs、commonjs2、amd，可以在浏览器、node中通用
           }
       },
       devServer:{
           port:10000,				// 子应用端口（主应用中entry的值）
           headers:{				// 采用跨域固定模式
               'Access-Control-Allow-Origin':'*'
           }
       } 
   }
   ```




## 四、部署注意事项

1. **路由设置**

   主应用和子应用`路由`都要设置`mode: 'history',`

   

2. **子应用某些页面加载不出**

   > **可能出现以下情况**
   >
   > 1. 首先检查`子应用ID`是否与`主应用ID`冲突， 更改ID
   > 2. 主程序入口文件的属性与子应用入口文件`属性冲突`(`index.html`,`APP.vue`)

   

3. **主应用代理与子应用代理 **

   > 主应用代理与子应用代理字段避免冲突

   

4. **应用之间的跳转**

   > 在子应用中可用此方法跳转到主应用中

   ```
   history.pushState({}, null, '/index');
   ```

   
   
5. ##### 主应用和微应用部署到同一个服务器（同一个 IP 和端口）

   > 通常的做法是主应用部署在一级目录，微应用部署在二/三级目录。

   微应用想部署在非根目录，在微应用打包之前需要做两件事：

   + 必须配置 `webpack` 构建时的 `publicPath` 为**目录名称**，更多信息请看 [webpack 官方说明](https://www.webpackjs.com/configuration/output/#output-publicpath) 和 [vue-cli3 的官方说明](https://cli.vuejs.org/zh/config/#publicpath)

   + `history` 路由的微应用需要设置 `base` ，值为**目录名称**，用于独立访问时使用。

   部署之后注意三点：

   + `activeRule` 不能和**微应用的真实访问路径一样**，否则在主应用页面刷新会直接变成微应用页面。

   + 微应用的真实访问路径就是微应用的 `entry`，`entry` 可以为相对路径。

   + 微应用的 `entry` 路径最后面的 `/` 不可省略，否则 `publicPath` 会设置错误，例如子项的访问路径是 `http://localhost:8080/app1`,那么 `entry` 就是 `http://localhost:8080/app1/`。
   
    6.**开发子路由代理**
   
   > 子应用配置的请求代理，在独立运行是没问题的。
   > 		但是通过主应用去加载的子应用，子应用发出的请求实际已经被主应用劫持了，所以主应用也需要配置子应用需要的请求代理。
   
   代理子应用，主应用必须配置跨域
   
   ```js
   // 配置跨域请求头，解决开发环境的跨域问题
   headers: {
   	'Access-Control-Allow-Origin': '*'
   },
   ```
   
   



