<template>
    <div class="contactUs">
        <p>如需要了解产品信息或售前服务<br>欢迎联系我们 </p>
        <!--<gt-consult class="contact"></gt-consult>-->
    </div>
</template>
<style scoped lang=less rel="stylesheet/less">
    @import '../assets/public.less';
    .contactUs{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: url("../assets/imgs/home/contact-bg.png") no-repeat center;
        background-size: cover;
        border-top:1px solid @gt-border-color;
        p{
            font-size: 0.32rem;
            margin-top: 0.72rem;
            text-align: center;
            line-height: 0.38rem;
        }
        .contact{
            margin:0.44rem 0 0.62rem;
        }
    }
</style>
<script>
    import gtConsult from "../components/gt-consult.vue"
    export default{
        data() {
            return {
            }
        },
        components: {gtConsult},
        created() {
        }
    }
</script>
