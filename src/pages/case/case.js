/**
 * Created by daishuang on 2017/3/27.
 */
import Vue from 'vue'
import app from './app'
import 'reset-css'
import '../../assets/public.less'
var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});

new Vue({
    el: '#app',
    ...app
})
