<template>
    <div class="loading">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
</template>
<style scoped lang=less rel="stylesheet/less">
    @import '../assets/public.less';

    .loading {
        width: 100%;
        height: 44px;
        max-width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #EAEAEA;
        div{
            width: 10px;
            height: 10px;
            background-color: #d9dadc;
            border-radius: 50%;
            display: inline-block;
            animation: bounceDelay 1s infinite ease-in-out;
            /* Prevent first frame from flickering when animation starts */
            animation-fill-mode: both;
            &.bounce1{
                animation-delay: -0.32s;
            }
            &.bounce2{
                animation-delay: -0.16s;
            }
        }
        @keyframes bounceDelay {
            0%, 80%, 100% {
                transform: scale(0);
            }
            40% {
                transform: scale(1.0);
            }
        }
    }
</style>
<script>
    export default{
        data() {
            return {}
        },
        components: {},
        created() {
        }
    }
</script>
