# gt-index-mobile

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目描述 

* 极验验证官网前端-移动端
* 1.0.0

## 开发方式 ##

* 安装依赖 npm install
* 开发 npm run start URL输入localhost:8800/xxxx.html，避免和pc端冲突开发时
* 发布 npm run build
* 使用iphone6的双倍屏(375*2=750)的宽度，屏幕越大看的越多的方法。
flex+rem+百分比。可以等分的使用flex:1，大于一半宽的建议使用百分比，定宽的都要使用rem。rem和设计图px转换使用方法：100px=1rem，123px=1.23rem
## 额外资源依赖
* 移动端vue官方手势库 github文档地址 “https://github.com/vuejs/vue-touch/tree/next”
* [flexbile.js-0.3.2分支-rem](https://github.com/amfe/lib-flexible/blob/master/src/flexible.js) 新版本更好使用,简单
