# 《nginx代理vue》

<div class="cc-speaker-content color5">
       <span class="cc-speaker">主讲：Mischieff</span>
       <span class="cc-wrap"> 
              <span class="cc-stage">第三期</span>
       </span>
</div>   

## 一、nginx代理vue的意义
vue打包后,因为开发环境设置代理 **`proxy`** 的原因, 使得访问打包页面 **`dist/index.html`** 请求数据出现跨域。</br>
nginx代理vue的意义在于把开发环境中的代理 **`proxy: {'/api': ...`** 的/api, 换成生产环境中的地址。

</br>

## 二、下载nginx
[nginx官网](http://nginx.org/en/download.html)下载并解压，推荐使用稳定版本（nginx/Windows-1.18.0）</br></br>
![nginx官网](/blog/assets/images/Nginx/vue-nginxToVue1.png)

</br>

## 三、vue打包
```javascript
 npm run build // 打包文件
```
(默认)生成文件夹 `dist`

</br>

## 四、放入nginx中
把生成的 **`dist下所有文件`** 放入压缩后nginx中 `html` 文件夹下</br>
![放入nginx中](/blog/assets/images/Nginx/vue-nginxToVue2.png)

</br></br>

## 五、配置nginx
进入nginx的 **`conf`** 文件夹中, 打开 **`nginx.conf`** 文件进行代理配置</br>
![配置nginx](/blog/assets/images/Nginx/vue-nginxToVue3.png)
+ 默认监听端口为 **`80`**, 可自行更改
+ 默认监听地址为 **`localhost`**, 可自行更改
``` javascript
server {
    listen  80;
    server_name localhost;
...
```

**添加代理**
 + 在 **`server`** 中配置；
 + **`/api/`** 为vue中代理的值；
 + **`proxy_pass`** 需要代理的IP地址，**必填**，其他可忽略
``` javascript
location /api/ {
    # 可省略开始
    rewrite  ^.+api/?(.*)$ /$1 break;   // 重定向
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    # 可省略结束

    # 必填
    proxy_pass  http://192.168.1.10:8888/;    #node api server 即需要代理的IP地址
}
```
</br></br>

## 六、启动nginx
双击 **`nginx.exe`**进行启动（一闪而过，若出现命令行界面，则说明配置有误）</br>
![启动nginx](/blog/assets/images/Nginx/vue-nginxToVue4.png)

## 七、访问打包后的页面
打开浏览器，访问 **`第五节`** 设置的地址和端口（此处为localhost:80）</br>
至此，nginx代理vue打包结束。

