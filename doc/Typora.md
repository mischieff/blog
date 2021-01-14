# 《Typora的使用（markdown标记语言）》

> 简介：Typora是一款轻便简洁的Markdown编辑器
>
> 特点：简单、便捷、样式丰富、非常适用程序员，可导出格式PDF、Html、Word、png等多种格式
>
> `你可以不会tyopra，但是你必须会Markdown`

### 一、下载安装

> 进入官网，现在typora，**`https://typora.io/#windows`**

![image-20201221141813557](/blog/assets/images/Typora/image-20201221141813557.png)

### 二、设置主题样式

> 1、进入官网下载主题 **`https://theme.typora.io/`**,或者css编辑自己喜欢的样式

![image-20201221142455304](/blog/assets/images/Typora/image-20201221142455304.png)



> 2、文件->偏好设置->外观

![image-20201221142035656](/blog/assets/images/Typora/image-20201221142035656.png)

> 3、把主题房屋主题文件夹下（以下为添加的主题）
>
> 也可自己更改Css，定义主题

![image-20201221142351892](/blog/assets/images/Typora/image-20201221142351892.png)

> 4、重启typora编辑器，完成主题添加

### 三、使用技巧

1. 生成菜单

   ```html
   输入 [toc] + 回车键
   产生标题，自动更新
   ```

   

2. 标题

   ```html
   标题 1~6 
   开头#的个数表示，空格+文字。
   标题有1~6个级别，#表示开始，按换行键结束    
   
   # H1   
   ## H2    
   ###### H6    
   
   对应的快捷键： ctrl + 1/2/3/4/5/6
   ```

   

3. 引注

   ```html
   > + 空格 + 文字 + 回车 
   
   双回车或删除键跳出
   ```

   

4. 超链接

   * [百度](https://www.baidu.com/) 

   + [百度][]https://www.baidu.com/

   + <http://www.baidu.com>

   ```
   内行式：小括号内容不显
   	[百度](https://www.baidu.com/) 
   
   参考式：网址可以显示出来
   	[百度][]https://www.baidu.com/
   	
   快速链接
   	<http://www.baidu.com>
   ```

   

5. 图片

   ![百度](//www.baidu.com/img/flexible/logo/pc/result.png "图片标题")

   ```html
   语  法：![百度](www.baidu.com/img/flexible/logo/pc/result.png) 
   ```

    

6.  居中

   <center>这是要居中的内容</center>

   ```
   <center>这是要居中的内容</center
   ```
   

   
7. 斜体

   *斜体*

   ```html
   语  法： *斜体*
   快捷键： ctrl + i
   ```

   

8. 粗体

   **粗体**

   ```html
   语  法： **粗体**
   快捷键： ctrl + b
   ```

   

9. 斜体+粗体

   ***斜体+粗体***

   ```html
   语  法： ***斜体+粗体***
   ```

   

10. 删除

   ~~删除线~~

   ```
   语  法： ~~删除线~~
   ```

   

11. 下划线

    <u>下划线</u>

    ```html
    语  法： <u>下划线</u>
    快捷键： ctrl + u
    ```

    

12. 行内代码块

    `行内代码块`

    ```html
    语  法：`行内代码块`
    ```

    

13. 下标

    H~2~o

    ```html
    语  法：H~2~o
    ```

    

14. 上标

    H^2^o

    ```html
    语  法：H^2^o
    ```

    

15. 高亮

    ==高亮==

    ```html
    语   法：==高亮==
    ```

16. 无序列表

    +  
    + 

    ```html
    */+/-， 空格 + 文字，创建无序序列
    换行键换行
    双回车或删除键跳出
    ```

    

17. 有序列表

    1.  
    2. 

    ```
    1. + 空格 + 文字，创建有序序列
     换行键换行,序列自动递增
     双回车或删除键跳出
    ```

    

18. 可选列表

    + [ ] 可选列表–未选中
    + [x] 可选列表–选中

    ```
    序列+空格+[+空格+]+空格+文字，换行键换行，删除键跳出
    - [ ] a			    [ ] 中为空格，则没有选中
    + [ ] b
    - [x] completed		 [ ]中为x，则默认选中
    ```

    

19. 代码块

    ```html
    ​```+语言名 + 回车，开启代码块
    换行键换行，光标下移键跳出
    ```

    

20. 表格

    | 列名 | 列名 |
    | ---- | ---- |
    |      |      |

    ```html
    语  法：|+列名+|+列名+|+换行键
    快捷键：ctrl + T
    ```

    

21. 脚注

    ​	版权[^序列]

    ```html
    语  法：版权+[+^+序列+]
    ```

    

22. 水平线

    ***

    

    ```
    语  法： *** 或者 ---
    ```

23. **流程图源码格式**

    ```
    ​```mermaid
    graph LR
    A[方形] -->B(圆角)
        B --> C{条件a}
        C -->|a=1| D[结果1]
        C -->|a=2| E[结果2]
        F[横向流程图]
    ​```
    ```

    ```mermaid
    graph LR
    A[方形] -->B(圆角)
        B --> C{条件a}
        C -->|a=1| D[结果1]
        C -->|a=2| E[结果2]
        F[横向流程图]
    ```

    

24. **标准流程图源码格式**

    ```
    ​```flow
    st=>start: 开始框
    op=>operation: 处理框
    cond=>condition: 判断框(是或否?)
    sub1=>subroutine: 子流程
    io=>inputoutput: 输入输出框
    e=>end: 结束框
    st->op->cond
    cond(yes)->io->e
    cond(no)->sub1(right)->op
    ​```
    ```

    

    ```flow
    st=>start: 开始框
    op=>operation: 处理框
    cond=>condition: 判断框(是或否?)
    sub1=>subroutine: 子流程
    io=>inputoutput: 输入输出框
    e=>end: 结束框
    st->op->cond
    cond(yes)->io->e
    cond(no)->sub1(right)->op
    ```

25. **标准流程图源码格式（横向）**

    ```
    ​```flow
    st=>start: 开始框
    op=>operation: 处理框
    cond=>condition: 判断框(是或否?)
    sub1=>subroutine: 子流程
    io=>inputoutput: 输入输出框
    e=>end: 结束框
    st(right)->op(right)->cond
    cond(yes)->io(bottom)->e
    cond(no)->sub1(right)->op
    ​```
    ```

    

    ```flow
    st=>start: 开始
    op=>operation: 处理
    cond=>condition: 判断(是/否?)
    sub1=>subroutine: 子流程
    io=>inputoutput: 输入输出框
    e=>end: 结束
    st(right)->op(right)->cond
    cond(yes)->io(bottom)->e
    cond(no)->sub1(right)->op
    ```

    

26. **UML时序图源码样例**

    ```
    ​```sequence
    对象A->对象B: 对象B你好吗?（请求）
    Note right of 对象B: 对象B的描述
    Note left of 对象A: 对象A的描述(提示)
    对象B-->对象A: 我很好(响应)
    对象A->对象B: 你真的好吗？
    ​```
    ```

    

    ```sequence
    对象A->对象B: 对象B你好吗?（请求）
    Note right of 对象B: 对象B的描述
    Note left of 对象A: 对象A的描述(提示)
    对象B-->对象A: 我很好(响应)
    对象A->对象B: 你真的好吗？
    ```

    

    **复杂时序图**

    ```
    ​```sequence
    Title: 标题：复杂使用
    对象A->对象B: 对象B你好吗?（请求）
    Note right of 对象B: 对象B的描述
    Note left of 对象A: 对象A的描述(提示)
    对象B-->对象A: 我很好(响应)
    对象B->小三: 你好吗
    小三-->>对象A: 对象B找我了
    对象A->对象B: 你真的好吗？
    Note over 小三,对象B: 我们是朋友
    participant C
    Note right of C: 没人陪我玩
    ​```
    ```

    

    ```sequence
    Title: 标题：复杂使用
    对象A->对象B: 对象B你好吗?（请求）
    Note right of 对象B: 对象B的描述
    Note left of 对象A: 对象A的描述(提示)
    对象B-->对象A: 我很好(响应)
    对象B->小三: 你好吗
    小三-->>对象A: 对象B找我了
    对象A->对象B: 你真的好吗？
    Note over 小三,对象B: 我们是朋友
    participant C
    Note right of C: 没人陪我玩
    ```

    

27. **UML标准时序图样例**

    ```
    ​```mermaid
    %% 时序图例子,-> 直线，-->虚线，->>实线箭头
      sequenceDiagram
        participant 张三
        participant 李四
        张三->王五: 王五你好吗？
        loop 健康检查
            王五->王五: 与疾病战斗
        end
        Note right of 王五: 合理 食物 <br/>看医生...
        李四-->>张三: 很好!
        王五->李四: 你怎么样?
        李四-->王五: 很好!
    ​```
    ```

    ```mermaid
    %% 时序图例子,-> 直线，-->虚线，->>实线箭头
      sequenceDiagram
        participant 张三
        participant 李四
        张三->王五: 王五你好吗？
        loop 健康检查
            王五->王五: 与疾病战斗
        end
        Note right of 王五: 合理 食物 <br/>看医生...
        李四-->>张三: 很好!
        王五->李四: 你怎么样?
        李四-->王五: 很好!
    ```

    

28. **甘特图样例**

    ```
    ​```mermaid
    %% 语法示例
            gantt
            dateFormat  YYYY-MM-DD
            title 软件开发甘特图
            section 设计
            需求                      :done,    des1, 2014-01-06,2014-01-08
            原型                      :active,  des2, 2014-01-09, 3d
            UI设计                     :         des3, after des2, 5d
        未来任务                     :         des4, after des3, 5d
            section 开发
            学习准备理解需求                      :crit, done, 2014-01-06,24h
            设计框架                             :crit, done, after des2, 2d
            开发                                 :crit, active, 3d
            未来任务                              :crit, 5d
            耍                                   :2d
            section 测试
            功能测试                              :active, a1, after des3, 3d
            压力测试                               :after a1  , 20h
            测试报告                               : 48h
    ​```
    ```

    ```mermaid
    %% 语法示例
            gantt
            dateFormat  YYYY-MM-DD
            title 软件开发甘特图
            section 设计
            需求                      :done,    des1, 2014-01-06,2014-01-08
            原型                      :active,  des2, 2014-01-09, 3d
            UI设计                     :         des3, after des2, 5d
        未来任务                     :         des4, after des3, 5d
            section 开发
            学习准备理解需求                      :crit, done, 2014-01-06,24h
            设计框架                             :crit, done, after des2, 2d
            开发                                 :crit, active, 3d
            未来任务                              :crit, 5d
            耍                                   :2d
            section 测试
            功能测试                              :active, a1, after des3, 3d
            压力测试                               :after a1  , 20h
            测试报告                               : 48h
    ```


​    

### 四、快捷键汇总

+ **`ctrl + F` **	查找 
+ **`Ctrl+L` **  选中某句话    
+ **`Ctrl+K` **  创建超链接 
+ **`Ctrl+D` **  选中某个单词 
+ **`Ctrl+E` **  选中相同格式的文字  
+ **`Ctrl+H` **  搜索并替换 
+ **`Alt+Shift+5` ** 删除线 
+ **`Ctrl+Shift+I` **    插入图片 
+ **`Ctrl+Shift+M` **    公式块 
+ **`Ctrl+Shift+Q` **    引用 
+ **`Ctrl+B` **  字体加粗 
+ **`Ctrl+I` **  字体倾斜 
+ **`Ctrl+U` **  下划线
+ **`Ctrl+Home` **   返回Typora顶部 
+ **`Ctrl+End` **    返回Typora底部 
+ **`Ctrl+T` **  创建表格


















### 五、总览图
![image-20201221141813557](/blog/assets/images/Typora/Typora.png)
