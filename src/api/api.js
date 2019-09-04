// 接口分离
// 接口管理模块
import request from './http'
// import qs from 'qs'

// 首页
export function getHomeData ({ lang }) {
  return request({
    url: '/android/home',
    method: 'get',
    params: {
      lang
    }
  })
}

// =================资讯模块=================
// 资讯分类
export function getNewsCategory ({ lang }) {
  return request({
    url: '/news/category',
    method: 'get',
    params: {
      lang
    }
  })
}
