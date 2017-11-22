<template>
    <button class="gt-button" :class="[solid ? 'solid' : 'hollow', size ,color]">{{text}}</button>
</template>

<script>
    export default{
        data() {
            return {}
        },
        methods: {},
        props: {
            text: {
                type: String,
                default: "按钮"
            },
            solid: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: 'M'
            },
            color: {
                type: String,
                default: 'blue'
            }
        }
    }
</script>

<style scoped lang=less rel="stylesheet/less">
    @import '../assets/public.less';

    .gt-button {
        font-size: 0.22rem;
        text-align: center;
        border-radius: 2px;
        border-color: transparent;
        transition: all 0.5s;
        &.L {
            width: 140px;
            height: 42px;
        }
        &.M {
            width: 2.26rem;
            height: 0.7rem;
        }
        &.S {
            width: 52px;
            height: 30px;
        }
        &.solid.blue {
            color: #ffffff;
            background-color: #4488ff;
        }
        &.solid.grey{
            color: #ffffff;
            background-color: #696969;
        }
        &.solid.white{
            color: #fff;
            background-color:rgba(255,255,255,0.2);
            border: 2px solid #fff;
        }
        &.hollow {
            color: @gt-blue-font-color;
            border: 1px @gt-blue-font-color solid;
            background-color: #ffffff;
            &.S{
                background-color: transparent;
            }
        }
    }
</style>
