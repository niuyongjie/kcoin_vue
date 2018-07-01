## 目录结构

```text
.
|-- README.md
|-- babel.config.js             
|-- package-lock.json
|-- package.json                项目打包，运行,配置信息等
|-- public
|   |-- favicon.ico
|   `-- index.html
|-- src                         源代码
|   |-- App.vue                 页面入口文件
|   |-- assets                  静态资源
|   |   `-- logo.png
|   |-- components              业务组件
|   |   `-- UserList.vue
|   |-- main.js                 程序入口，配置，加载公共组件
|   `-- plugins                 vue 第三方插件
|       `-- axios.js
`-- tests                       单元测试
    `-- unit
        `-- HelloWorld.spec.js
```

## 如何运行

在项目中直接运行以下命令（前提：系统中需要安装 node.js `sudo apt-get install -y nodejs`）

```
npm install
npm run serve
```


## 环境说明

该环境是标准的 vue 开发环境，前端页面 UI 采用 `ElementUI`（Vue 官方资源库支持），也可以使用 `MetroUI`（Vue 官方资源库尚不支持）。

如果采用前后端分离的形式，需要单独启动web端项目：`kcoin_vue`，由`kcoin_vue`项目完成前端页面的渲染，路由等功能，`kcoin_java`项目只需要负责处理
url 请求，并返回 Json 数据即可，不需要编写其他功能代码。

## 参考资料

[Vue 官网](https://cn.vuejs.org/v2/guide/installation.html)

[Element UI](http://element-cn.eleme.io/#/zh-CN/component/installation)

[MetroUI](http://localhost:8080/user/listForElement)
