import Vue from 'vue'
import router from './configs/router.js'
import store from './configs/store.js'
import axios from 'axios'
import $ from 'jquery'

Vue.prototype.$axios = axios
Vue.prototype.$ = $

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h('router-view'),
  router,
  store
})
