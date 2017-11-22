<template>
    <footer>
        <div class="copyright">
            <p>版权所有 2010—2017 武汉极意网络科技有限公司</p>
            <p>鄂ICP备12016193号-1</p>
        </div>
    </footer>
</template>
<style scoped lang=less rel="stylesheet/less">
    @import '../assets/public.less';
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: @gt-grey-font-color;
        width: 100%;
        background-color: #f6f6f6;
        .copyright{
            width: 80%;
            padding: 0.26rem 0;
            border-top: 1px solid #d9dbe0;
            p {
                font-size: 0.2rem;
                text-align: center;
                line-height: 0.22rem;
            }
        }
    }
</style>
<script>
    export default{
        data() {
            return {
            }
        },
        components: {},
        created() {
        }
    }
</script>
