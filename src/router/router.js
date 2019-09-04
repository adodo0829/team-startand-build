import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home.vue' // 常规加载
const about = () => import('../views/about.vue') // 懒加载

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
