/* eslint-disable */
import Vue from 'vue'
import App from './app'
import 'reset-css'
import '@/assets/public.less'
var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});

new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
