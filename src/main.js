/**
 * @time 2019-9-01
 * @author huhua
 * @describe 项目入口文件
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import 'assets/styles/common.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
