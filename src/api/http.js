// 请求封装
import axios from 'axios'
// import Vue from 'vue'
import baseUrl from './setBaseUrl'

// 创建 axios 实例
const Axios = axios.create({
  // 添加初始化配置
  baseURL: baseUrl, // 基地址
  timeout: 15000 // 超时
})
Axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
// 请求拦截器
Axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log('request error:', error) // for debug
    return Promise.reject(error)
  }
)

/**
 * 两种方式做统一处理
 * 1.通过 http状态码status:   response.status 和 error.response.status处理
 * 2.通过 response.data中自定义的状态码code:  response.data.code 处理(异常处理直接在第一个回调重处理)
 */

// 响应拦截器
Axios.interceptors.response.use(
  response => {
    const res = response.data
    // console.log('sucess', res.data);
    if (res.status && res.status.code === 0) {
      // store.dispatch('hideWaiting')
      return res.data // 成功
    }
  },
  error => {
    console.log('response error:', error) // for debug
    if (error) {
      // router.replace({
      //   path: '/netError',
      //   query: { redirect: router.currentRoute.fullPath }
      // })
    }
    return Promise.reject(error)
  }
)

// 实现插件, 暴露install方法, 可以给 vue 实例使用
// 通过 this.$http.post 或者 get 去请求
export const http = {
  install (Vue) {
    Vue.prototype.$http = Axios
  }
}

// 导出 Axios实例
export default Axios
