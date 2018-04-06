<template>
    <div id="app">
        <gt-header></gt-header>
        <section class="introduce">
            <h1>关于我们</h1>
            <p>
                武汉极意网络科技有限公司于2012年推出SliderTest产品，至此开创验证2.0“行为时代”，作为此技术的开创者，通过4年的积累以及3万亿条行为样本的不断优化与创新。结合人工智能技术，极验结合鼠标、陀螺仪、击键等传感器提供的稀疏行为数据，可在28维空间构建人机边界，并可实时进化。</p>
            <p>2016年，我们从“安全”“用户体验”“管理后台”三个主线出发，不断打磨和创新，推出更智能更酷的产品，争取做互联网交互端口的基础设施。</p>
            <p>
                作为网站端口的守护者，防御着来自各方面的攻击，肩负着网站安全的重任。这是我们使命，也是我们的荣誉。互联网安全领域里没有绝对安全，但是做”更安全“的验证，是我们的一路以来信念和梦想，我们也身体力行地去实现它。我们成立专门的技术安全研究小组，不断地研究新的技术理论，并将它们运用到实践中去，保障网站主的验证安全。</p>
            <p>
                自上线以来，就受到了大量网站主的热切关注。最初的6个月，零推广的情况下，仅凭口碑就已有近3500家中小型网站主使用，其中包括265g、珞珈山水、考试吧这样的知名网站。随后，开始更宽泛地面向验证领域，至今已有17173、豆瓣、友盟、52pk、城市中国、同步助手、猎豹浏览器、PPTV、音悦台、蜂鸟等知名网站使用，包括其他中小型网站共约16万家网站使用。</p>
            <p>2012年至今，我们一路前行。未来，我们也继续秉持做“更安全、更便捷、更智能”信念，走的更远。</p>
        </section>
        <section class="invest">
            <h1>融资机构</h1>
            <div>
                <img src="../../assets/imgs/aboutUs/天使湾.png" alt="天使湾">
                <img src="../../assets/imgs/aboutUs/sequoia.png" alt="sequoia">
                <img src="../../assets/imgs/aboutUs/idg.png" alt="idg">
            </div>
        </section>
        <div class="cooperation">
            <h1>合作伙伴</h1>
            <div>
                <img src="../../assets/imgs/aboutUs/aliyun.png" alt="aliyun">
                <img src="../../assets/imgs/aboutUs/腾讯云.png" alt="腾讯云">
                <img src="../../assets/imgs/aboutUs/netease.png" alt="网易">
            </div>
        </div>
        <div class="contact">
            <div class="contact-box">
                <h1>联系我们</h1>
                <div>
                    <table>
                        <tr>
                            <td>客服电话：</td>
                            <td>400 - 8521 - 816</td>
                        </tr>
                        <tr>
                            <td>客服邮箱：</td>
                            <td>service@geetest.com</td>
                        </tr>
                        <tr>
                            <td>公司地址：</td>
                            <td>武汉市东湖新技术开发区武大园东路武大航域二期</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
        <gt-contact-us></gt-contact-us>
        <gt-footer></gt-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    //导入公用组件
    import gtHeader from '../../components/gt-header.vue'
    import gtFooter from '../../components/gt-footer.vue'
    import gtContactUs from '../../components/gt-contact-us.vue'
    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {},
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

        .introduce {
            display: flex;
            align-items: center;
            background-color: @gt-bg-color;
            border-bottom: 1px solid @gt-border-color;
            flex-direction: column;
            padding: @gt-header-height 0.4rem 0.67rem 0.4rem;
            h1 {
                font-size: 0.32rem;
                width: 100%;
                margin: 0.66rem 0 0.61rem;
                text-align: center;

            }
            p {
                font-size: 0.22rem;
                margin-bottom: 0.15rem;
                line-height: 0.24rem;
            }
        }
        .invest {
            display: flex;
            background-color: white;
            flex-direction: column;
            padding-bottom: 0.5rem;
            h1 {
                font-size: .32rem;
                margin: 0.65rem 0 0.51rem;
                text-align: center;
                width: 100%;
            }
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 230px;
                }
                img:nth-child(2) {
                    margin: 0 0.08rem;
                }
            }
        }
        .cooperation {
            display: flex;
            flex-direction: column;
            padding-bottom: 0.57rem;
            background-color: white;
            h1 {
                font-size: 0.32rem;
                margin: 0.43rem 0 0.4rem;
                width: 100%;
                text-align: center;
            }
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 200px;
                }
                img:nth-child(2) {
                    margin: 0 0.18rem;
                }
            }
        }
        .contact {
            background-color: white;
            display: flex;
            flex-direction: column;
            font-size: 0.26rem;
            .contact-box {
                display: flex;
                flex-direction: column;
                margin: 0 0.4rem;
                border-top: 1px solid @gt-border-color;
            }
            h1 {
                font-size: 0.32rem;
                width: 100%;
                text-align: center;
                margin: 0.6rem 0 0.48rem;
            }
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 0.35rem;
            }
            table {
                tr td:last-child {
                    width: 3rem;
                }
                td {
                    padding-bottom: 0.1rem;
                }
            }
        }

    }
</style>
