# 《react初识》

<div class="cc-speaker-content color4">
       <span class="cc-speaker">主讲：高老师 </span>
       <span class="cc-wrap"> 
              <span class="cc-stage">第六期</span>
       </span>
</div>  

## 一、react简介



`React 起源于 Facebook` 

`React 是一个用于构建用户界面的 javascript 库。`

`React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。`

## 二、react特点

- `声明式设计` −React采用声明范式，可以轻松描述应用。（开发者只需要声明显示内容，react就会自动完成）
- `高效` −React通过对DOM的模拟，最大限度地减少与DOM的交互。
- `灵活` −React可以与已知的库或框架很好地配合。
- `组件` − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。（把页面的功能拆分成小模块--每个小模块就是组件）
- `单向数据流`--　React是单向数据流，数据主要从父节点传递到子节点（通过props）。如果顶层（父级）的某个props改变了，React会重渲染所有的子节点

## 三、React 开发环境搭建

### 1、直接下载react包引入使用

官网 https://reactjs.org/ 下载最新版

创建index.html文件 引入包

![image-20210120193054442](/blog/assets/images/React/image-20210120193054442.png)

### 使用npm安装

1、安装Node.js、npm、cnpm

<img src="/blog/assets/images/React/1154613-20180831083256443-741539540.png" alt="img" style="zoom:80%;" />

因为国内使用npm很慢，我们可以使用淘宝的cnpm，同时设置镜像地址

2、安装淘宝镜像

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

<img src="/blog/assets/images/React/image-20210120183812620.png" alt="image-20210120183812620" style="zoom:80%;" />

3、安装成功后可以cnpm -v检查是否安装成功

<img src="/blog/assets/images/React/image-20210120183930490.png" alt="image-20210120183930490" style="zoom:80%;" />

4、创建我们的第一个react程序

```
cnpm install -g create-react-app
```

<img src="/blog/assets/images/React/image-20210120184204942.png" alt="image-20210120184204942" style="zoom: 80%;" />

5、创建项目

```
create-react-app 项目名 （最好小写字母用-连接）
```

<img src="/blog/assets/images/React/image-20210120185302235.png" alt="image-20210120185302235" style="zoom: 67%;" />

然后就启动项目

```
cd 项目名  npm start
```

<img src="/blog/assets/images/React/image-20210120185653984.png" alt="image-20210120185653984" style="zoom: 33%;" />

### 2、React脚手架使用目录结构

src文件夹：是我们编写代码的地方。

src/index.js：是整个项目的入口js文件。 

src/app.js：是被index引入的一个组件，也用一个js文件表示。 

src/index.css：index.js中的的样式文件。 

src/app.css：是app.js的样式文件。 

logo.svg：是一个svg的图片文件。用于界面展示使用。

<img src="/blog/assets/images/React/image-20210120190007885.png" alt="image-20210120190007885" style="zoom: 80%;" />

## 四、React --JSX

> JSX=javascript xml就是Javascript和XML结合的一种格式。是JavaScript 的语法扩展。 React推荐在 React 中使用 JSX 来描述用户界面。当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。
>

- jsx优点：

1. JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。

2. 它是类型安全的，在编译过程中就能发现错误。

3. 使用 JSX 编写模板更加简单快速。

   

#### 创建.html编写React渲染组件ReactDOM.render()

> ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入页面指定的 根DOM 节点。
>

<img src="/blog/assets/images/React/image-20210120193433354.png" alt="image-20210120193433354" style="zoom:80%;" />

### 使用脚手架项目 index.js文件

### <img src="/blog/assets/images/React/image-20210120192531438.png" alt="image-20210120192531438" style="zoom:80%;" />



#### Jsx的使用

1、注释/*内容*/  html标签内注释｛/* 最外层有花括号*/｝

<img src="/blog/assets/images/React/image-20210119143602643.png" alt="image-20210119143602643" style="zoom:80%;" />

2、多行HTML写法

![image-20210119143640286](/blog/assets/images/React/image-20210119143640286.png)

​    脚手架--多行标签

- 可以在外层加一个父元素
  方式1 传统标签(这种方式会在页面中新增DOM节点)

<img src="/blog/assets/images/React/image-20210120201538101.png" alt="image-20210120201538101" style="zoom:150%;" />

- 方法2 Fragment不在DOM中增加额外节点或者使用<></>空标记

<img src="/blog/assets/images/React/image-20210120201545874.png" style="zoom:80%;" /><img src="/blog/assets/images/React/image-20210120201556824.png"  />

3、JSX中使用表达式

<img src="/blog/assets/images/React/image-20210120190804486.png" alt="image-20210120190804486" style="zoom:80%;" />

JSX独立文件使用

创建一个js文件

![image-20210120190835005](/blog/assets/images/React/image-20210120190835005.png)

页面引用`注意script中的type属性`

![image-20210120190845083](/blog/assets/images/React/image-20210120190845083.png)



SX表达式--定义样式

- 定义样式对象, 以style属性引用一个对象
  样式名以驼峰命名法表示, 如text-align需写成textAlign
  默认像素单位是 px

![image-20210120190914322](/blog/assets/images/React/image-20210120190914322.png)

***\*引用外部样式\****

> 引用外部样式时, 不要使用class作为属性名, 因为class是js的保留关键字。JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 className（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。
>

![image-20210120191010408](/blog/assets/images/React/image-20210120191010408.png)

jsx规则扩展：

1. html的value属性要写成：defaultValue
2. html的checked属性要写成：defaultChecked
3. style 里面写对象
4. class 写className

#### 样式插件（脚手架）

```
npm install --save styled-components //styled-components 安装
```

styled-components基本使用

在需要使用的组件文件夹中创建styled文件夹并在其中创建js文件
		`注意`组件首字母必须大写不然无法识别

<img src="/blog/assets/images/React/image-20210120201823874.png" alt="image-20210120201823874" style="zoom:80%;" />

在组件中引用样式js文件 并使用

<img src="/blog/assets/images/React/image-20210119085432120.png" alt="image-20210119085432120" style="zoom:80%;" />



## 五、vue与react对比

### 1.监听数据变化的实现原理不同

- Vue通过 getter/setter以及一些函数的劫持，能精确知道数据变化。
- React默认是通过比较引用的方式（diff）进行的，如果不优化可能导致大量不必要的VDOM的重新渲染。为什么React不精确监听数据变化呢？这是因为Vue和React设计理念上的区别，Vue使用的是可变数据，而React更强调数据的不可变，两者没有好坏之分，Vue更加简单，而React构建大型应用的时候更加鲁棒。

### 2.数据流的不同

![image-20210119092105576](/blog/assets/images/React/image-20210119092105576.png)

vue2.0组件与DOM之间可以通过v-model双向绑定

React一直不支持双向绑定，提倡的是单向数据流，称之为onChange/setState()模式。

### 3.HoC和mixins

Vue组合不同功能的方式是通过mixin，Vue中组件是一个被包装的函数，并不简单的就是我们定义组件的时候传入的对象或者函数。

React组合不同功能的方式是通过HoC(高阶组件）。React最早也是使用mixins的，不过后来他们觉得这种方式对组件侵入太强会导致很多问题，就弃用了mixinx转而使用HoC。高阶组件本质就是高阶函数，React的组件是一个纯粹的函数，所以高阶函数对React来说非常简单。



### 4.组件通信的区别

![img](/blog/assets/images/React/20190626150244778.png)

Vue中有三种方式可以实现组件通信：父组件通过props向子组件传递数据或者回调，虽然可以传递回调，但是我们一般只传数据；子组件通过事件向父组件发送消息；通过V2.2.0中新增的provide/inject来实现父组件向子组件注入数据，可以跨越多个层级。

React中也有对应的三种方式：父组件通过props可以向子组件传递数据或者回调；可以通过 context 进行跨层级的通信，这其实和 provide/inject 起到的作用差不多。React 本身并不支持自定义事件，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数，但Vue更倾向于使用事件。在React中我们都是使用回调函数的，这可能是他们二者最大的区别。

### 5.模板渲染方式的不同

在表层上，模板的语法不同，React是通过JSX渲染模板。而Vue是通过一种拓展的HTML语法进行渲染，但其实这只是表面现象，毕竟React并不必须依赖JSX。

在深层上，模板的原理不同，这才是他们的本质区别：React是在组件JS代码中，通过原生JS实现模板中的常见语法，比如插值，条件，循环等，都是通过JS语法实现的，更加纯粹更加原生。而Vue是在和组件JS代码分离的单独的模板中，通过指令来实现的，比如条件语句就需要 v-if 来实现对这一点，这样的做法显得有些独特，会把HTML弄得很乱。

举个例子，说明React的好处：react中render函数是支持闭包特性的，所以我们import的组件在render中可以直接调用。但是在Vue中，由于模板中使用的数据都必须挂在 this 上进行一次中转，所以我们import 一个组件完了之后，还需要在 components 中再声明下，这样显然是很奇怪但又不得不这样的做法。

### 6.渲染过程不同

Vue可以更快地计算出Virtual DOM的差异，这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。

React在应用的状态被改变时，全部子组件都会重新渲染。通过shouldComponentUpdate这个生命周期方法可以进行控制，但Vue将此视为默认的优化。

如果应用中交互复杂，需要处理大量的UI变化，那么使用Virtual DOM是一个好主意。如果更新元素并不频繁，那么Virtual DOM并不一定适用，性能很可能还不如直接操控DOM。

### 7.框架本质不同

Vue本质是MVVM框架，由MVC发展而来；

React是前端组件化框架，由后端组件化发展而来。