## 一. node.js简述

<div class="cc-speaker-content color7">
       <span class="cc-speaker">主讲：石老师</span>
       <span class="cc-wrap"> 
              <span class="cc-stage">第九期</span>
       </span>
</div> 

### 1. Node环境的搭建

> 官网：https://nodejs.org/en/
>
> 下载稳定版本、双击下一步下一步安装。

### 2. node.js是什么？

> 简单的说 Node.js 就是运行在服务端的 JavaScript。
>

### 3. node.js能做什么？

> Node 作为一个 JavaScript 的运行环境，仅仅提供了基础的功能和 API。然而，基于 Node 提供的这些基础能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了 Node 可以快速构建 Web 应用、可以构建跨平台的桌面应用、可以快速构建 API 接口项目、读写和操作数据库、创建实用的命令行工具辅助前端开发
>

## 二. node.js与js的区别：

- node.js是平台，Js是编程语言；
- node.js是一个基于Chrome JavaScript运行时建立的平台，它是对Google V8引擎进行了封装的运行环境；
- node.js与js组成不同：
  * JavaScript：
     + ECMAScript（语言基础，如：语法、数据类型结构以及一些内置对象）
     + DOM（一些操作页面元素的方法）
     + BOM（一些操作浏览器的方法）
  * Node.js：
     + ECMAScript（语言基础，如：语法、数据类型结构以及一些内置对象）
     + OS（操作系统）
     + file（文件系统）
     + net（网络系统）
     + database（数据库）
- 顶层对象不同
在JS中的顶层对象是window对象，但是在node中没有什么window对象，node中的顶层对象是global对象。
## 三、nodejs语法

### 运行语法 node xxx.js

> 在当前项目目录下 打开命令行 键入 node index.js 就可以运行index.js了，前提在该目录下你有一个index.js文件
>

![avatar](/blog/assets/images/Nodejs/3.png)

### 引入模块语法 require(‘xxxx’)

### 带路径的：
一般我们自己封装的模块 require（'../xxx/yyy'），js文件后缀名可以省略不写。</br> 路径还可以写到文件夹的那层，但文件夹下一定要有一个index.js 系统会默认找index.js require('../xxx/文件夹名称') === > require('../xxx/文件夹名称/index.js')

### 不带路径的：
nodejs中本身就内置了很多依赖包，我们通过require('xxx')这种形式来引入</br>
require('koa') 其实就是找 node_modules文件夹 系统node_modules

### 导出模块语法 module.exports /exports

每一个Nodejs的执行文件都会自动地创建一个module对象，同时module.exports会创建一个叫exports的属性，初始值为空对象{}。

exports和module.exports指向同一个内存，但require()返回的是module.exports而不是exports，比如你只是给导出一些属性，即对其指向的内存进行修改的时候，使用exports和module.exports都可以得到相同的结果。

```js
function str(){
  console.log('str方法')
}

let arr = [1,2,3];

let targetObj = {
  a:'obj对象'
}

//module.exports的形式
module.exports = {
  str,
  arr,
  targetObj
}

//exports的形式
exports.str = str;
exports.arr = arr;
exports.targetObj = targetObj;
```

## 四、node.js基础api

### setTimeOut 
```js     
var timer = setTimeout(function () {
       console.log('aa');
     }, 1000);    
     等待一秒后执行，同js用法一样
```
### setInterval
```js  
    var timer = setInterval(function () {
       console.log('aa');
     }, 1000);    
     每隔1s执行，同js用法一样
```
### setImmediate

暂时可理解为延迟时间为0的setTimeout,具体差别与node的生命周期有关。
### console

+ js： 在浏览器控制台中输出
+ node: 在命令行中输出

### __dirname
```js  
    获取当前模块所在目录
    非global对象属性
```

在dome根目录的index.js下运行结果：

<img src="/blog/assets/images/Nodejs/4.png" alt="avatar" style="zoom: 100%;" />

在dome根目录的src下的dome.js运行结果：
<img src="/blog/assets/images/Nodejs/5.png" alt="avatar" style="zoom:100%;" />

### __filename

```js  
    获取当前文件所在目录
    非global对象属性
```
在dome根目录的index.js下运行结果：

<img src="/blog/assets/images/Nodejs/6.png" alt="avatar" style="zoom:100%;" />



在dome根目录的src下的dome.js运行结果：

<img src="/blog/assets/images/Nodejs/7.png" alt="avatar" style="zoom:100%;" />

## process
### cwd() 返回当前命令所在路径
<img src="/blog/assets/images/Nodejs/8.png" alt="avatar" style="zoom:100%;" />

<img src="/blog/assets/images/Nodejs/9.png" alt="avatar" style="zoom:100%;" />

### exit() 强制退出命令
```js  
    process.exit(); 可加参数，用于系统记录退出状态码，不加则默认传入0，
    0代表正常退出，1代表错误退出。
```
<img src="/blog/assets/images/Nodejs/10.png" alt="avatar" style="zoom: 100%;" />

### argv 获取命令行中的参数

<img src="/blog/assets/images/Nodejs/11.png" alt="avatar" style="zoom:100%;" />

+ 第一个参数：node 所在路径

+ 第二个参数：index 文件所在路径

+ 剩余参数：传递过去的参数

  

### platform 获取当前操作系统

<img src="/blog/assets/images/Nodejs/12.png" alt="avatar" style="zoom:100%;" />
    win32是一个平台版本，表示支持32位及其以上的api

### kill() 杀死一个进程
```js
process.kill(PID);
需要传入进程PID
```

<img src="/blog/assets/images/Nodejs/13.png" alt="avatar" style="zoom:100%;" />

### env  获取环境变量
获取系统所有环境变量

<img src="/blog/assets/images/Nodejs/14.png" alt="avatar" style="zoom:100%;" />
获取某一环境变量的值

<img src="/blog/assets/images/Nodejs/15.png" alt="avatar" style="zoom:100%;" />








