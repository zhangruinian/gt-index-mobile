<template>
    <div id="app">
        <gt-header></gt-header>
        <section class="introduce">
            <h2>极验提供多种产品套餐供客户选择</h2>
        </section>
        <section class="version">
            <div class="version-content">
                <ul class="tabs">
                    <li
                        v-for="let (version ,index) in versions"
                        @touchstart="toggle(index)"
                        :class="{active: index==current}">
                        {{version.name}}
                        <img v-if="version.hot" :src="version.hot" alt="">
                    </li>
                </ul>
                <p>{{versions[current].price}}</p>
                <v-touch tag="ul" class="details" @swiperight="right" @swipeleft="left"
                         :swipe-options="{ direction:'horizontal' ,threshold:100}">
                    <li v-for="let (detail ,index) in versionDetails">
                        <span class="name">{{detail.name}}</span>
                        <span class="colon">:</span>
                        <span v-if="detail.type=='text'">{{detail.items[current]}}</span>
                        <img v-if="detail.type=='image'" :src="detail.items[current]" alt="">
                    </li>
                </v-touch>
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

    //导入私有组件

    //导入资源
    import falseIcon from "../../assets/imgs/package/false.png"
    import trueIcon from "../../assets/imgs/package/true.png"
    import hotIcon from "../../assets/imgs/package/hot.png"
    export default {
        name: 'app',
        data() {
            return {
                current: 0,
                swipe: true,
                versionDetails: [
                    {
                        name: "验证并发量",
                        type: 'text',
                        items: ['500次/h', "10000次/h", "10万次/h", "定制"],
                    },
                    {
                        name: "新增ID数量",
                        type: 'text',
                        items: ['2个', '20个', '不限', "不限"],
                    },
                    {
                        name: "数据更新频率",
                        type: 'text',
                        items: ["1小时/次", "1小时/次", '及时', "及时"],
                    },
                    {
                        name: "支持HTTPS",
                        type: 'image',
                        items: [trueIcon, trueIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "行为AI级别",
                        type: 'text',
                        items: ['简洁型', "通用型", "智能型", "智能型"],
                    },
                    {
                        name: "基础数据查看",
                        type: 'text',
                        items: ['查看一周内数据', "查看一月内数据", "永久(可导PDF)", "永久(可导PDF)"]
                    },
                    {
                        name: "深度数据查看",
                        type: 'image',
                        items: [falseIcon, falseIcon, trueIcon, trueIcon]
                    },
                    {
                        name: "API数据接口",
                        type: 'image',
                        items: [falseIcon, falseIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "验证周报",
                        type: 'image',
                        items: [falseIcon, falseIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "防模拟设置",
                        type: 'image',
                        items: [falseIcon, trueIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "防伪造设置",
                        type: 'image',
                        items: [falseIcon, trueIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "防暴力设置",
                        type: 'image',
                        items: [falseIcon, trueIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "智能应急设置",
                        type: 'image',
                        items: [falseIcon, falseIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "验证皮肤",
                        type: 'text',
                        items: ["默认皮肤", "默认皮肤", "可选", "可定制"],
                    },
                    {
                        name: "验证图片",
                        type: 'text',
                        items: ["默认皮肤", "可选", "可选", "可定制"],
                    },
                    {
                        name: "验证框弹出样式",
                        type: 'text',
                        items: ["默认弹出样式", "默认弹出样式", "可选", "可定制"],
                    },
                    {
                        name: "支持多国语言",
                        type: 'text',
                        items: ["默认", "可选", "可选", "可定制"],
                    },
                    {
                        name: "按钮尺寸",
                        type: 'image',
                        items: [trueIcon, trueIcon, trueIcon, trueIcon],
                    },
                    {
                        name: "去LOGO和外链",
                        type: 'image',
                        items: [falseIcon, falseIcon, trueIcon, trueIcon],
                    }
                ],
                versions: [
                    {
                        name: '免费版',
                        price: '¥0/月',
                    },
                    {
                        name: '基础版',
                        price: '¥4999/月',
                    },
                    {
                        name: '企业版',
                        price: '¥9999/月',
                        hot: hotIcon,
                    },
                    {
                        name: '定制版',
                        price: "联系客服询价",
                        hot: hotIcon,
                    }
                ]
            }
        },
        methods: {
            toggle(index){
                this.current = index;
            },
            right(){
                this.swipe = false;
                setTimeout(() => {
                    this.swipe = true;
                }, 0);
                if (this.current == 3) {
                    this.current = 0;
                    return false;
                }
                this.current += 1;
            },
            left(){
                if (this.current == 0) {
                    this.current = 3;
                    return false;
                }
                this.current -= 1;
            }
        },
        components: {
            gtHeader, gtFooter, gtContactUs
        },
        created() {
            sa.track('mobile_package')
        }
    }
</script>

<style scoped lang=less rel="stylesheet/less">
    @import '../../assets/public.less';

    #app {
        width: 100%;
        color: @gt-normal-font-color;
        background-color: @gt-bg-color;
        section {
            display: flex;
            width: 100%;
            flex-direction: column;
        }
        .introduce {
            align-items: center;
            padding-top: @gt-header-height;
            background-color: @gt-bg-color;
            h2 {
                font-size: 0.32rem;
                margin: 1.02rem 0 1.04rem
            }
        }
        .version {
            align-items: center;
            margin-bottom: 0.62rem;
            .version-content {
                width: 96%;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid @gt-border-color;
                background-color: #fff;
                box-shadow: 2px 2px 2px 2px #e8ebed;
                ul.tabs {
                    width: 100%;
                    display: flex;
                    li {
                        flex: 1;
                        font-size: 0.28rem;
                        text-align: center;
                        height: 0.8rem;
                        line-height: 0.8rem;
                        border: 1px solid @gt-border-color;
                        border-top: 3px solid transparent;
                        border-right: none;
                        background-color: #fafafa;
                        &:last-child {
                            border-right: 1px solid @gt-border-color;
                        }
                        &.active {
                            color: #3574e4;
                            border-top: 3px solid #3574e4;
                            background-color: #fff;
                            border-bottom: none;
                        }
                        img {
                            width: 0.14rem;
                            height: 0.18rem;
                        }
                    }
                }
                p {
                    width: 80%;
                    text-align: center;
                    font-size: 0.5rem;
                    padding: 0.42rem 0;
                    border-bottom: 1px solid #e0e2e7;
                }
                ul.details {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0.3rem 0 0.8rem;
                    li {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        font-size: 0.26rem;
                        line-height: 0.34rem;
                        span.name {
                            width: 50%;
                            display: inline-block;
                            text-align: right;
                        }
                        span.colon {
                            padding: 0 0.14rem;
                        }
                    }
                }
            }
        }
    }
</style>
