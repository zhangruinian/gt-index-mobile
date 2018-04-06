<template>
    <header>
        <div class="icon">
            <a href="/index.html">
                <img src="http://front.geetest.com/logo/logo.svg" alt="极验geetest">
            </a>
            <div class="side-toggle" @touchstart="turnOn">
                <div>
                    <span :class="{toggle1: isSkew }"></span>
                    <span :class="{toggle2: isSkew}"></span>
                    <span :class="{toggle3: isSkew}"></span>
                </div>
            </div>
        </div>
        <!--上线之后链接会改变，首页没有home.html，过一段没有后缀.html-->
        <transition name="slide-fade">
            <div class="mask" v-if="sideToggle" >
                <div class="sidebar" @touchmove.prevent="stop">
                    <ul>
                        <li v-for="(nav,index) in navs">
                            <a :href="nav.href" :class="{active: nav.href == pathname}">{{nav.title}}</a>
                        </li>
                    </ul>
                    <div class="side-mask"></div>
                </div>
                <div class="sidebar-mask" @touchstart.prevent="cancel">

                </div>
            </div>
        </transition>
    </header>
</template>

<script>
    export default{
        data() {
            return {
                navs: [
                    {href:"/",title:"首页"},
                    {href:"/exp.html",title:"在线演示"},
                    {href:"/package.html",title:"产品套餐"},
                    {href:"/case.html",title:"案例展示"},
                    {href:"/aboutUs.html",title:"关于我们"},
                ],
                pathname:window.location.pathname,
                sideToggle: false,
                isSkew:false
            }
        },
        computed: {
        },
        methods: {
            turnOn(){
                this.sideToggle = !this.sideToggle;
                this.isSkew = !this.isSkew;
            },
            cancel(){
                this.sideToggle = false;
                this.isSkew = false;
            },
            stop(ev){
                ev.stopPropagation()
            },
            contact () {
            }
        },
        props: {},
        created() {

        },
        components: {
        }
    }

</script>

<style scoped lang=less rel="stylesheet/less">
    @import '../assets/public.less';

    header {
        width: 100%;
        position: fixed;
        z-index: 10;
        display: flex;
        flex-direction: column;
        background: #fff;
        .icon {
            width: 100%;
            height: @gt-header-height;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0 0 0.27rem;
            border-bottom: 1px solid @gt-border-color;
            a {
                display: flex;
                align-items: center;
                height: 100%;
                font-size: 0;
                img {
                    width: 2rem;
                    height: 0.5rem;
                }
            }
            .side-toggle {
                div {
                    width: 0.45rem;
                    height: 0.35rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    span {
                        display: inline-block;
                        width: 100%;
                        height: 0.04rem;
                        background-color: #5588f7;
                        transition: all 0.6s;
                        /*加上&即可触发*/
                        &.toggle1 {
                            transform: rotate(45deg) translateY(0.22rem);
                        }
                        &.toggle2 {
                            height: 0;
                            width: 0;
                            opacity: 0;
                        }
                        &.toggle3 {
                            transform: rotate(-45deg) translateY(-0.22rem);
                        }

                    }
                }
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                padding-right: 0.27rem;

            }
        }
        .mask {
            width: 100%;
            position: absolute;
            top: @gt-header-height;
            left: 0;
            height: 100vh;
            .sidebar {
                position: fixed;
                right: 0;
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                background: #fff url("../assets/imgs/home/sidebar-bg.png") no-repeat bottom center;
                background-size: cover;
                box-shadow: -2px 0 2px -2px #d4d6d7;
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0.1rem 0 .72rem;
                    width: 100%;
                    li {
                        margin-top: 0.62rem;
                        height: 0.3rem;
                        line-height: 0.3rem;
                        width: 100%;
                        text-align: center;
                        a {
                            font-size: 0.3rem;
                            display: block;
                            color: @gt-normal-font-color;
                            &.active {
                                color: #3686ff;
                            }
                        }
                    }
                }
            }
        }
        .sidebar-mask{
            position: fixed;
            left: 0;
            width: 50%;
            height: 100%;
        }

        .slide-fade-enter-active, .slide-fade-leave-active {
            transition: all 0.4s ease-in-out;
        }
        .slide-fade-enter, .slide-fade-leave-active {
            /*开启3d强制加速*/
            transform: translate3d(50vw, 0, 0);
        }
        .side-mask {
            position: absolute;
            height: 100%;
            width: 2px;
            left: 0;
            background: url("../assets/imgs/home/sider.png") no-repeat;
        }
    }
    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.7rem;
        width: 2.26rem;
        font-size: 0.22rem;
        color: #fff;
        background-color: #5080ee;
        border-radius: 2px;
        img {
            width: 0.4rem;
            height: 0.36rem;
            margin-right: 0.2rem;
        }
    }
</style>

