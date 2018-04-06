/**
 * Created by qiankn on 2017/1/13.
 */
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vueConfig = require('./vue-loader.config');
var entries = getEntry('./src/pages/**/*.js'); // 获得入口js文件
/*var entries ={
 'home':'./src/pages/home/home.js',
 }*/
var TotalEntries=Object.assign({},entries,{
    vendors: ['vue', 'es6-promise']
})
console.log(TotalEntries);
console.log(path.resolve(__dirname, '../mobile-static'));
var chunks = Object.keys(TotalEntries);
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: TotalEntries,
    // 输出
    output: {
        path: path.resolve(__dirname, '../mobile-static'),
        publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
        filename: 'js/[name].[chunkhash:7].js',
    },
    // 加载器
    module: {
        rules: [
            // 解析.vue文件
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',          //
            filename: 'vendor/vendors.js',
            chunks: chunks,           //从哪些模块抽离
            minChunks: Infinity  //最少需要被多少个模块引用才会被抽离
        })
    ],
    resolve: {
        /*alias: {
         //不写此配置的话，vue默认为运行时版本，只支持渲染函数，不能编译浏览器模板
         'vue$': 'vue/mobile-static/vue.common.js'
         },*/
        extensions: ['.js', '.vue']
    },

    devServer: {
        proxy: {
            /*"*!/static": {
             target: "http://localhost:8080",
             },*/
            '**': {
                target: 'http://localhost:8899',
                pathRewrite: (function () {
                    var res = {};
                    glob.sync('src/pages/**/*.html').forEach(function (entry) {
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
            }
        }
    }
    //devtool: '#eval-source-map'
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
    var title = '极验—互联网验证安全服务商';
    var htmlname = pagename;
    switch (pagename) {
        case 'aboutUs':
            title = '极验-关于我们';
            break;
        case 'case':
            title = '典型案例—极验码是十六万家网站的首选验证码';
            break;
        case 'contact':
            title = '联系我们';
            break;
        case 'data':
            title = '极验-数据稳定性可视化';
            break;
        case 'feature':
            title = '产品特性—安全进化、体验优化、管理轻化的验证码';
            break;
        case 'home':
            title = '极验码—安全智能的验证系统，十六万家网站的选择';
            break;
        case 'package':
            title = '产品套餐—四种灵活套餐，满足个性化需求';
            break;
        case 'teamwork':
            title = '极验-生态与合作';
            break;
        case 'service':
            title = '极验-服务条款';
            break;
        case 'private':
            title = '极验-隐私声明';
            break;
        case 'exp':
            title = '在线体验—第三代点击行为验证码，0.4秒即通过的极致体验';
            break;

    }
    conf.title = title;
    //统一使用CDN上的icon，在模板中添加
    //conf.favicon = path.resolve(__dirname, '../src/assets/imgs/favicon.ico');

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
    //原先用来生成mobile-static/js目录，现在已在output.filename前缀加上'js/'中解决
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

if (process.env.NODE_ENV === 'production') {
    //只有生产环境中将css抽离，因为抽离的CSS不能HMR
    vueConfig.loaders = {
        less: ExtractTextPlugin.extract({
            loader: 'css-loader?{discardComments:{removeAll:true}}!less-loader',
            publicPath: '../',
            fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
        }),
        sass: ExtractTextPlugin.extract({
            loader: 'css-loader!sass-loader',
            fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
        })
    }
    //module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new ExtractTextPlugin('css/[name].[chunkhash:7].css'),
        //清空mobile-static文件夹
        new CleanWebpackPlugin(['mobile-static'], {
            root: path.resolve(__dirname, '..')//必须是一个绝对路径，此处用path模块保持通用
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
        /*new PrerenderSpaPlugin(
         // Absolute path to compiled SPAcnp
         path.join(__dirname, '../mobile-static/'),
         ['/'],
         {
         htmlname: 'home'
         }
         )*/
        /*{
         captureAfterTime: 5000
         }*/
        //webpack2不再需要此插件
        //https://gist.github.com/sokra/27b24881210b56bbaff7#occurrence-order
        //new webpack.optimize.OccurenceOrderPlugin()
    ])
    //每个页面进行预渲染
    for (pagename in entries) {
        module.exports.plugins.push(
            new PrerenderSpaPlugin(
                // Absolute path to compiled SPA
                path.join(__dirname, '../mobile-static/'),
                ['/'],
                {
                    htmlname: pagename,
                    postProcessHtml: function (context) {
                        return context.html.replace(
                            /http:\/\/localhost:8000/g, '.'
                        )
                    }
                }
            ));
    }
}
