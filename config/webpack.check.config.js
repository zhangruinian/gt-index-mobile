/**
 * Created by qiankn on 2017/1/13.
 */
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var glob = require('glob');
var vueConfig = require('./vue-loader.config');
var entries = getEntry('./src/pages/**/*.js'); // 获得入口js文件
/*var entries ={
 'home':'./src/pages/home/home.js',
 }*/
console.log(entries);
console.log(path.resolve(__dirname, '../dist'));
var chunks = Object.keys(entries);
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: entries,
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
        filename: 'js/[name].[hash:5].js',
    },
    // 加载器
    module: {
        rules: [
            // 解析.vue文件
            {
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                query: {
                    configFile: path.resolve(__dirname,'../.eslintrc.js')
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConfig
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 3000,
                    name: './assets/[name].[hash:5].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.(webm|mp4)$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        /*new webpack.LoaderOptionsPlugin({
             test: /\.(js|html|vue)$/, // may apply this only for some modules
            options: {
                eslint: '../.eslintrc'
            }
        })*/
    ],
    resolve: {
        /*alias: {
         //不写此配置的话，vue默认为运行时版本，只支持渲染函数，不能编译浏览器模板
         'vue$': 'vue/dist/vue.common.js'
         },*/
        extensions: ['.js', '.vue']
    },

    devServer: {
        proxy: {
            /*"*!/static": {
             target: "http://localhost:8080",
             },*/
            /*'**': {
                target: 'http://localhost:8899',
                pathRewrite: (function () {
                    var res = {};
                    glob.sync('src/pages/!**!/!*.html').forEach(function (entry) {
                        var name = '/' + path.basename(entry, '.html');
                        res[name] = name + '.html';
                    });
                    return res;
                })(),
                bypass: function (req) {
                    if (req.headers.accept.indexOf("static") !== -1) {
                        console.log("Skipping proxy for browser request.");
                        return false;
                    }
                }
            }*/
        },
        noInfo:true,
        compress:true
    },
    //devtool: '#eval-source-map'
    /*vue: {
        loaders: {
            js: 'babel-loader!eslint-loader'
        }
    }*/
};



for (var pagename in entries) {
    // 配置生成的html文件，定义路径等
    var conf = {
        filename: pagename + '.html',
        template: path.resolve(__dirname, '../src/template.html'),   // 模板路径
        inject: true              // js插入位置
    };
    var entry = pagename;
    if (entry in module.exports.entry) {
        conf.chunks = ['vendors', entry];
        conf.hash = true;
    }
    var title = '极验验证—互联网验证安全服务商';
    //var htmlname = pagename;
    switch (pagename) {
        case 'aboutUs':
            title = '极验验证-关于我们';
            break;
        case 'case':
            title = '典型案例—极验验证码是十六万家网站的首选验证码';
            break;
        case 'contact':
            title = '联系我们';
            break;
        case 'data':
            title = '极验验证-数据稳定性可视化';
            break;
        case 'feature':
            title = '产品特性—安全进化、体验优化、管理轻化的验证码';
            break;
        case 'home':
            title = '极验验证码—安全智能的验证系统，十六万家网站的选择';
            break;
        case 'package':
            title = '产品套餐—四种灵活套餐，满足个性化需求';
            break;
        case 'teamwork':
            title = '极验验证-生态与合作';
            break;
        case 'service':
            title = '极验验证-服务条款';
            break;
        case 'private':
            title = '极验验证-隐私声明';
            break;
        case 'exp':
            title = '在线体验—第三代点击行为验证码，0.6秒即通过的极致体验';
            break;
        case 'performance':
            title = '产品性能';
            break;
        case 'help':
            title = '极验验证-常见问题';
            break;
        case 'feedback':
            title = '极验验证官方在线反馈';
            break;
    }
    conf.title = title;

    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
    /*module.exports.devServer.proxy[pagename]={
     target: 'http://localhost:8080',
     pathRewrite:{
     [pagename]:'/'+pagename+'.html'}
     };*/
}
//修改入口的名字来改变输出路径
function getEntry(globPath) {
    var entries = {},
        basename, tmp, pathname;

    glob.sync(globPath).forEach(function (entry) {

        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-3);
        pathname = basename; // 正确输出js和html的路径

        entries[pathname] = entry;
    });
    //原先用来生成dist/js目录，现在已在output.filename前缀加上'js/'中解决
    /*var jsEntries = {}
     var jsPath
     if (globPath.slice(-2) === 'js') {
     for (var prop in entries) {
     jsPath = prop + '/' + prop;
     jsEntries[jsPath] = entries[prop]
     }
     return jsEntries
     }*/
    return entries;
}
