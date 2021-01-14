# Electron桌面应用（初识）
![image-20201208174017350](/blog/assets/images/Electron/image-20201208174017350.png)

## 一、electron介绍

Electron 是 GitHub 发布的跨平台桌面应用开发工具，支持 Web 技术开发桌面应用，其本身是基于 C++ 开发的，GUI 核心来自于 Chrome，而 JavaScript 引擎使用 v8。

`Electron = Chromium + Node.js + Native API`

- Chromium : 为Electron提供了强大的UI能力，可以不考虑兼容性的情况下，利用强大的Web生态来开发界面。
- Node.js ：让Electron有了底层的操作能力，比如文件的读写，甚至是集成C++等等操作，并可以使用大量开源的`npm`包来完成开发需求。
- Native API ： Native API让Electron有了跨平台和桌面端的原生能力，比如说它有统一的原生界面，窗口、托盘这些

> 什么时候使用

+ 司没有专门的桌面应用开发者，而需要前端兼顾来进行开发时，用Electron就是一个不错的选择。

+ 一个应用同时开发Web端和桌面端的时候，那使用Electron来进行开发就对了。

+ 开发一些效率工具，比如说我们的VSCode，比如说一些API类的工具，用Electron都是不错的选择。

> 那些应用是Electron开发的

- VSCode ： 程序员最常用的开发者工具。
- Atom : 是Github开发的文本编辑器，我想大部分的前端程序员都应该使用过。



> 依赖环境

+ node

+ npm

+ electron

  

![image-20201208165241279](/blog/assets/images/Electron/image-20201208165241279.png)



## 二、electron目录介绍

> https://github.com/PanJiaChen/electron-vue-admin

```
├── .electron-vue 	// electron-vue配置文件
├── build/icons		// 打包配置文件 （菜单等）
├── config			// 环境配置
├── dist			// 打包文件
├── src				// 资源
│  	 ├── main		// electron配置文件
│    ├── renderer	// vue代码
│	 └── index.ejs	// 入口文件
├── package.json
```

### 2、electron简单版结构目录

> https://github.com/mischieff/electron-html

```js
├── build 		// 打包后exe安装包
├── main.js		// electron配置文件
│  	 ├── mainMenu.js	//菜单文件
├── views		// html 文件（css、js、images等）
├── favicon.ico	// 应用图标
├── mian.js		// 入口文件
├── package.json
```




## 三、electron中package.js详解
> scripts执行命令
>
> + `dev`：开发环境
> + `package`：window系统打包
> + `build:mac`：ios系统打包
> + `build:win`：windows系统打包

```json
"scripts": {
    "dev": "electron . ",
    "package": "electron-packager ./ myapp --out ./OutApp --platform=win32 --overwrite --icon=./favicon.ico --overwrite",
    "build:mac": "electron-builder --platform=mac --arch=x64",
    "build:win": "electron-builder"
}
```

> build打包

```
"build": {  // electron-builder配置
    "productName":"智能约谈",//项目名 这也是生成的exe文件的前缀名
    "appId": "xxxxx",//包名  
    "copyright":"xxxx",//版权  信息
    "compression": "store", // "store" | "normal"| "maximum" 打包压缩情况(store 相对较快)，store 39749kb, maximum 39186kb
    "directories": {
        "output": "build" // 输出文件夹
    }, 
    "asar": false, // asar打包
    "extraResources":  { // 拷贝dll等静态文件到指定位置
        "from": "./app-update.yml",
        "to": "./b.txt"
    },
    "win": {  
        "icon": "xxx/icon.ico"//图标路径,
        "extraResources":  { // 拷贝dll等静态文件到指定位置(用于某个系统配置)
            "from": "./app-update.yml",
            "to": "./b.txt"
        }
    },
    "nsis": {
        "oneClick": false, // 一键安装
        "guid": "xxxx", //注册表名字，不推荐修改
        "perMachine": true, // 是否开启安装时权限限制（此电脑或当前用户）
        "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
        "allowToChangeInstallationDirectory": true, // 允许修改安装目录
        "installerIcon": "./build/icons/aaa.ico", // 安装图标
        "uninstallerIcon": "./build/icons/bbb.ico", //卸载图标
        "installerHeaderIcon": "./build/icons/aaa.ico", // 安装时头部图标
        "createDesktopShortcut": true, // 创建桌面图标
        "createStartMenuShortcut": true, // 创建开始菜单图标
        "shortcutName": "xxxx" // 图标名称
    }
  }
```

## 四、electron中mian.js入口文件详解
> 配置应用生命周期

```js
const { app, BrowserWindow } = require('electron');	// 引入控制应用生命周期的模块 app
const path = require('path');

let mianWin = null;

//初始化
app.on('ready', () => {
  //创建主程序窗口
  mianWin = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,	//内置浏览器里面不会有module和require全局变量，不能使用nodejs
      webSecurity: false,	// 禁用浏览器的跨域安全特性（同源策略）
    },
    width: 1400,	// 应用宽度
    height: 900,	// 应该高度
    backgroundColor: '#010f25',	// 背景色
    fullscreen: true, // 是否全屏
    frame: false, // 是否有边框
    movable: true, // 是否可移动
    resizable: true, //是否可拉伸
  });

  // 打开开发工具
  mianWin.webContents.toggleDevTools();

  // 加载页面文件
  mianWin.loadURL(path.join('file://', __dirname, './views/index.html'));

  // 关闭窗口
  mianWin.on('close', () => {
    mianWin = null;
  });

  // 加载按钮
  require('./main/mainMenu.js');
});
```

## 五、electron应用菜单
> 设置应用菜单

![image-20201208164727241](/blog/assets/images/Electron/image-20201208164727241.png)

```js
const { Menu } = require('electron')

let mianMenuTemplate = [
    {
        label: "文件",	// 菜单名称
        submenu: [		 // 二级菜单
            {
                label: "新建文件",	 // 二级菜单名称
                type: "checkbox",  // 二级菜单类型
                checked: true,	   // 二级菜单是否选中
                accelerator: (() => {	// 快捷键 （win mac）
                    return shortcutkey('ctrl+n', 'command+n')
                })(),
                click: () => {		// 点击事件
                    console.log(666)
                }
            },
        ]
    },
    {		
        label: "编辑"		// 菜单名称
    }
]

// 实例化菜单 
let mainMenu = Menu.buildFromTemplate(mianMenuTemplate)

// 挂载菜单
Menu.setApplicationMenu(mainMenu)

//快捷键函数
function shortcutkey(winkey, mackey) {
    //mac系统和 win系统判断
    if (process.platform == 'darwin') {
        return mackey
    } else {
        return winkey
    }
}
```

