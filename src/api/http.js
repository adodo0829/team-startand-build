/**
 * @description 封装请求模块
 * @author huhua
 * @date 2019-09-22
 */

import axios from 'axios'
import baseUrl from './config'
import router from '../router/router'
import { Message, Loading, Notification } from 'element-ui'

let loading

function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '正在加载...',
    background: 'rgba(0, 0, 0, 0.3)'
  })
}

function endLoading () {
  loading.close()
}

// showFullScreenLoading() tryHideFullScreenLoading() 将同一时刻的请求合并。
let needLoadingRequestCount = 0

export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// 10007: AccessToken过期, 请重新登录
const NEED_LOGIN_CODE_SET = new Set([10007, 100011])
const token = window.localStorage.getItem('token') || ''

// 创建 axios 实例
const AxiosInstance = axios.create({
  // 添加初始化配置
  baseURL: baseUrl, // 基地址
  timeout: 10000 // 超时
})
AxiosInstance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
// AxiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
AxiosInstance.interceptors.request.use(
  config => {
    !~config.url.indexOf('admin/login') &&
      token &&
      (config.headers['X-ACCESS-TOKEN'] = token)
    showFullScreenLoading()
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
AxiosInstance.interceptors.response.use(
  response => {
    // console.log(response.config.method)
    // console.log(response)
    try {
      const res = response.data
      let code = res.status.code
      let message = res.status.message
      if (+code === 0) {
        tryHideFullScreenLoading()
        // TODO: POST统一提示
        if (
          response.config.method === 'post' ||
          response.config.method === 'delete'
        ) {
          Notification({
            type: 'success',
            message: '操作成功',
            position: 'bottom-right'
          })
        }
        // TODO:接口格式未统一处理
        return res.data || res
      } else {
        if (NEED_LOGIN_CODE_SET.has(+code)) {
          window.localStorage.removeItem('token')
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
        } else {
          if (response.config.method === 'post') {
            Notification({
              type: 'error',
              message: '操作失败',
              position: 'bottom-right'
            })
          }
          Message({
            type: 'error',
            message: message,
            duration: 5000,
            center: true
          })
        }
        tryHideFullScreenLoading()
        return Promise.reject(message)
      }
    } catch (error) {
      tryHideFullScreenLoading()
      Message({
        type: 'error',
        message: error,
        duration: 5000,
        center: true
      })
      throw new Error(error)
    }
  },
  error => {
    console.log('response error:', error) // for debug
    if (error) {
      Message({
        type: 'error',
        message: error,
        duration: 5000,
        center: true
      })
      tryHideFullScreenLoading()
    }
    return Promise.reject(error)
  }
)

// 实现插件, 暴露install方法, 可以给 vue 实例使用
// 通过 this.$http.post 或者 get 去请求
export const http = {
  install (Vue) {
    Vue.prototype.$http = AxiosInstance
  }
}

export default AxiosInstance
