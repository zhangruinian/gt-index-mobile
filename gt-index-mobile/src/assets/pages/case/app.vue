<template>
    <div id="app">
        <gt-header></gt-header>
        <section class="banner">
            <h1>十六万家客户的共同之选</h1>
            <h2><span>全面覆盖金融，电商，直播平台，政务，航旅，资讯，游戏等众多行业领域</span></h2>
            <v-touch class="case-show" tag="div" :swipe-options="{ direction:'horizontal' ,threshold:100}"
                     @swiperight="right" @swipeleft="left">
                <transition-group class="case-box" v-for="(img,index) in imgList" mode="out-in" name="fade">
                    <div v-if="index ==currentImg" :key="index">
                        <div class="imgs"><img :src="img"></div>
                        <div class="case-desc">
                            <span><img :src="imgDesc[currentImg].icon"></span>
                            <div class="desc"> {{imgDesc[currentImg].desc}}</div>
                        </div>
                    </div>
                </transition-group>
                <div class="dot-wrapper">
                    <ul class="dot-box">
                        <li v-for="(item,index) in [ 0, 1, 2]" :class="{active:currentImg==index}" class="dot"></li>
                    </ul>
                </div>
            </v-touch>

        </section>
        <section class="logo-wall">
            <h1>十六万家客户的共同之选</h1>
            <div class="logo-card">
                <div class="logo" v-for="logo in logos" :style="{backgroundImage:'url('+logo+')'}"></div>
            </div>
        </section>
        <gt-contact-us></gt-contact-us>
        <gt-footer></gt-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    //导入公用组件
    import gtHeader from '../../components/gt-header.vue'
    import gtFooter from '../../components/gt-footer.vue'
    import gtContactUs from '../../components/gt-contact-us.vue'
    import logos from '../../assets/logos'
    import {dytv, cjzq, jmyp} from '../../assets/logos'

    //导入私有组件
    import  zhenjuan from  '../../assets/imgs/case/zhenjuan.png'
    import douyun from '../../assets/imgs/case/douyu.png'
    import jumei from '../../assets/imgs/case/jumei.png'

    export default {
        name: 'app',
        data() {
            return {
                logos,
                imgList: [douyun, zhenjuan, jumei],
                imgDesc: [
                    {
                        icon: dytv,
                        desc: '斗鱼TV是一家致力于为所有人带来欢乐的弹幕式直播分享网站，斗鱼在登录、注册、领鱼丸三大环节采用了极验，提高了网站安全性，让用户更便捷的登陆并体验精彩直播。'
                    },
                    {
                        icon: cjzq,
                        desc: '每一个关乎用户财产安全的细节我们都不能忽略，使用极验，充分保障了网站用户账户信息安全。'
                    },
                    {
                        icon: jmyp,
                        desc: '拖动滑块、进行拼图、完成验证。极验让验证变得更有意思，用户反馈很好。'
                    }
                ],
                currentImg: 0
            }
        },
        methods: {
            right (){
                if (this.currentImg >= 0 && (this.currentImg < this.imgList.length - 1)) {
                    this.currentImg = this.currentImg + 1;
                }
                else if (this.currentImg >= this.imgList.length - 1) {
                    this.currentImg = 0
                }
            },
            left (){
                if (this.currentImg > 0 && (this.currentImg <= this.imgList.length - 1)) {
                    this.currentImg = this.currentImg - 1
                }
                else if (this.currentImg <= 0) {
                    this.currentImg = this.imgList.length - 1
                }
            }
        },
        components: {
            gtHeader, gtFooter, gtContactUs
        },
        created() {
        }
    }
</script>

<style scoped lang=less rel="stylesheet/less">
    @import '../../assets/public.less';

    #app {
        width: 100%;
        color: @gt-normal-font-color;
        background-color: @gt-bg-color;
        .banner {
            padding: @gt-header-height + 0.66rem 0 0.53rem;
            display: flex;
            align-items: center;
            flex-direction: column;
            h1 {
                font-size: 0.4rem;
            }
            h2 {
                span {
                    max-width: 6.5rem;
                    display: inline-block;
                    margin-top: 0.24rem;
                    padding: 0 0.4rem;
                }
                text-align: center;
                width: 100%;
                font-size: 0.28rem;
                margin-bottom: 0.72rem;
            }
        }
        .case-show {
            width: 100%;
            /*padding: 0 0.4rem;*/
            position: relative;
            min-height: 7rem;
            .case-box {
                background-color: white;
                box-shadow: 1px 1px 6px rgba(44, 44, 44, .15);
                overflow: hidden;
                border-radius: 2px;
                position: absolute;
                height: 100%;
                margin: 0 0.4rem;
            }
            .case-desc {
                display: flex;
                flex-direction: column;
                margin-top: 0.27rem;
                /*position: relative;*/
                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 0.3rem;
                    /*position: absolute;*/
                }
                img {
                    width: 0.92rem;
                    height: 0.46rem;
                    /*position: absolute;*/
                }
            }
            .imgs {
                display: flex;
                justify-content: center;
                img {
                    width: 100%;
                    height: 100%;
                }

            }
            .desc {
                font-size: 0.22rem;
                padding: 0 0.44rem;
                display: flex;
                justify-content: center;
                height: 1.5rem;
                letter-spacing: 0.015rem;
                line-height: 0.23rem;
            }


        }
        .dot-wrapper {
            margin-top: 0.28rem;
            position: relative;
            top: 7rem;
        }

        .dot-box {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .dot {
            width: 0.08rem;
            height: 0.08rem;
            border: none;
            border-radius: 50%;
            background-color: #afafaf;
            cursor: pointer;
            margin: 0 0.03rem;
            transition: all .3s ease-in;
        }

        .active {
            background-color: #656565;
            transition: all .3s ease-in;
            width: 0.15rem;
            border-radius: 0.08rem;
        }
        .logo-wall {
            padding: 0.66rem 0.4rem ;
            display: flex;
            flex-direction: column;
            background-color: white;
            margin-top: 0.53rem;
            h1 {
                font-size: 0.4rem;
                text-align: center;
                margin-bottom: 0.56rem;
            }
            .logo-card {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: center;
            }
            .logo {
                width: 92px;
                display: flex;
                height: 46px;
                margin: 0.1rem 0.2rem;
            }
        }
        .fade-enter-active {
            transition: opacity 0.8s ease;
        }

        .fade-leave-active {
            transition: opactity .1s ease-in;
        }

        .fade-enter {

            opacity: 0;
            transition: opacity .3s ease
        }

        .fade-leave {
            opacity: 1;
        }

    }
</style>
