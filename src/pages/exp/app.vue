<template>
    <div id="app">
        <header>
            <a href="/">
                <img src="http://front.geetest.com/logo/logo.svg" alt="geetest">
                <span class="back">返回首页</span>
            </a>
        </header>
        <section class="introduce">
            <h1>极验移动端体验</h1>
            <p>请点击下方的验证按钮进行验证</p>
        </section>
        <form action="">
            <input type="text" placeholder="hello@geeetest.com" readonly>
            <input type="password" placeholder="*****" readonly>
            <div class="captcha-wrap">
                <gt-loading v-if = "isReady"></gt-loading>
                <div id="captcha"></div>
            </div>
            <a id= "login">登录</a>

        </form>
        <section class="desc">
            <div class="content">
                <img src="../../assets/imgs/exp/product.png" alt="">
                <p>极验新一代按钮验证产品能快速区分人与恶意程序,让网站用户在0.4秒内通过验证。在保障网站安全的同时使整个验证过程变得简单。</p>
            </div>
        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    //导入公用组件
    import axios from "axios"
    import gtLoading from "../../components/gt-loading.vue"
    //导入私有组件
    //导入资源
    export default {
        name: 'app',
        data() {
            return {
                isReady:true
            }
        },
        methods: {},
        components: {
            gtLoading,
        },
        created() {
            sa.track('mobile_exp');
            let meta = document.querySelector('meta[name="viewport"]');
             meta.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1`);
        },
        mounted(){
            var vm = this;
            axios.get('http://static.geetest.com/static/tools/gt.js').then(
                axios.request({
                    url: (process.env.NODE_ENV === 'production' ? "./api/click/get?t=" : "http://192.168.0.14:8009/api/click/get?t=") + (new Date()).getTime(), // 加随机数防止缓存
                    method: 'get', // default
                }).then(function (res) {
                    var data = res.data;
                    initGeetest({
                        gt: data.gt,
                        challenge: data.challenge,
                        new_captcha: data.new_captcha,
                        product: "embed", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
                        offline: !data.success,// 表示用户后台检测极验服务器是否宕机，一般不需要关注
                        width: "100%"
                    }, function (captchaObj) {
                        captchaObj.appendTo("#captcha");
                        captchaObj.onReady(function () {
                            vm.isReady = false
                         });
                        captchaObj.onSuccess(function () {
                            // window.location.href="/"
                            // alert('验证通过了')
                            var loginBtn = document.getElementById('login');
                            loginBtn.className = 'active';
                            document.getElementById('login').addEventListener('click',function () {
                                window.location.href="/"
                            })
                        });
                    });
                })
            )
        }
    }
</script>

<style scoped lang=less rel="stylesheet/less">
    @import '../../assets/public.less';
    #app {
        width: 100%;
        color: @gt-normal-font-color;
        background-color: #f7f7f7;
        min-height: 100vh;
        section, form,header {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
        header{
            height:53px;
            background-color: #fff;
            justify-content: center;
            display: flex;
            a {
                display: flex;
                justify-content: space-between;
            }
            img{
                display: inline-block;
                width: 100px;
                height:25px;
                margin-left: 14px;
            }
            .back {
                font-size: 14px;
                display: flex;
                align-items: center;
                color: @gt-blue-font-color;
                margin-right: 40px;
            }
        }
        section.introduce {
            align-items: center;
            h1 {
                font-size: 20px;
                margin-top: 32px;
            }
            p {
                font-size: 16px;
                margin-top: 5px;
            }
        }
        form {
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            input {
                width: 90%;
                max-width: 300px;
                height: 55px;
                color: #a2aaaf;
                outline: none;
                background: #EAEAEA url("../../assets/imgs/exp/user.png") no-repeat 15px center;
                background-size: 14px 16px;
                font-size: 16px;
                padding-left: 45px;
                margin-top: 10px;
                border: 1px solid #F4F4F4;
                border-radius: 2px;
                &:nth-child(2) {
                    background: #EAEAEA url("../../assets/imgs/exp/password.png") no-repeat 15px center;
                    background-size: 14px 16px;
                }
                &:focus {
                }
            }
            .captcha-wrap{
                width: 90%;
                max-width: 300px;
                margin-top: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                #captcha{
                    width: 100%;
                }
            }
            a {
                width: 90%;
                max-width: 300px;
                height: 55px;
                line-height: 55px;
                color: #a2aaaf;
                font-size: 16px;
                background-color: #eeeeee;
                text-align: center;
                margin-top:10px;
                letter-spacing: 2px;
                cursor: pointer;
                border-radius: 2px;
            }
            .active {
                background-color: #48f;
                color: white;
                transition: background-color .3s ease-in;
            }
        }
        section.desc{
            margin-top: 43px;
            align-items: center;
            .content{
                width: 90%;
                max-width: 300px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top:1px solid #dadce0;
                padding-top: 58px;
                img{
                    width: 185px;
                    height: 120px;
                }
                p{
                    font-size: 12px;
                    line-height: 15px;
                    width: 40%;
                    text-align: justify;
                }
            }
        }
    }
</style>
