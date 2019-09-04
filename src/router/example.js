import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 路由懒加载
const getPage = page => () => import(`../pages/${page}/${page}.vue`)

// 配置路由规则
const routes = [
  {
    path: '/', // 首页
    redirect: 'home'
  },
  {
    path: '/home', // 首页
    name: 'home',
    component: getPage('home')
  },
  {
    path: '/search', // 搜索页
    name: 'search',
    component: getPage('search'),
    redirect: 'search/searchHome',
    meta: {
      hideHeader: true
    },
    children: [
      {
        path: 'searchHome',
        name: 'searchHome',
        component: getPage('searchHome')
      },
      {
        path: 'searchResult',
        name: 'searchResult',
        component: getPage('searchResult'),
        meta: {
          isKeepAlive: true
        }
      },
      {
        path: 'searchNoResult',
        name: 'searchNoResult',
        component: getPage('searchNoResult')
      }
    ]
  },
  {
    path: '/rank', // 排行榜
    component: getPage('rank'),
    redirect: 'rank/rankGame',
    children: [
      {
        path: 'rankGame',
        name: 'rankGame',
        component: getPage('rankGame')
      },
      {
        path: 'rankApp',
        name: 'rankApp',
        component: getPage('rankApp')
      },
      {
        path: 'rankGlobal',
        name: 'rankGlobal',
        component: getPage('rankGlobal'),
        redirect: 'rankGlobal/globalUS',
        children: [
          {
            path: '/rank/rankGlobal/globalUS',
            name: 'globalUS',
            component: getPage('globalUS')
          },
          {
            path: '/rank/rankGlobal/globalZH',
            name: 'globalZH',
            component: getPage('globalZH')
          },
          {
            path: '/rank/rankGlobal/globalAR',
            name: 'globalAR',
            component: getPage('globalAR')
          },
          {
            path: '/rank/rankGlobal/globalKO',
            name: 'globalKO',
            component: getPage('globalKO')
          },
          {
            path: '/rank/rankGlobal/globalJP',
            name: 'globalJP',
            component: getPage('globalJP')
          }
        ]
      }
    ]
  },
  {
    path: '/news', // 资讯
    name: 'news',
    component: getPage('news')
  },
  {
    path: '/newsDetail', // 资讯详情
    name: 'newsDetail',
    component: getPage('newsDetail')
  },
  {
    path: '/newsHot', // 资讯-热门
    name: 'newsHot',
    component: getPage('newsHot')
  },
  {
    path: '/newsNewRi', // 资讯-新锐
    name: 'newsNewRi',
    component: getPage('newsNewRi')
  },
  {
    path: '/newsGameStrategy', // 资讯-游戏策略
    name: 'newsGameStrategy',
    component: getPage('newsGameStrategy')
  },
  {
    path: '/download', // 下载客户端
    name: 'download',
    component: getPage('download'),
    meta: {
      hideFootTip: true
    }
  },
  {
    path: '/helpAndFeedback', // 帮助与反馈
    name: 'helpAndFeedback',
    component: getPage('helpAndFeedback'),
    meta: {
      hideFootTip: true
    }
  },
  {
    path: '/suggestion', // 意见反馈
    name: 'suggestion',
    component: getPage('suggestion'),
    meta: {
      hideFootTip: true
    }
  },
  {
    path: '/aboutUs', // 关于我们
    name: 'aboutUs',
    component: getPage('aboutUs')
  },
  {
    path: '/appDeveloper', // 开发者列表
    name: 'appDeveloper',
    component: getPage('appDeveloper')
  },
  {
    path: '/appClassify', // app 分类列表
    name: 'appClassify',
    component: getPage('appClassify')
  },
  {
    path: '/appDetail', // app详情
    name: 'appDetail',
    component: getPage('appDetail'),
    meta: {
      hideFootTip: true
    }
  },
  {
    path: '/hotUpdate', // 热门更新
    name: 'hotUpdate',
    component: getPage('hotUpdate'),
    redirect: 'hotUpdate/hotUpdateGame',
    children: [
      {
        path: 'hotUpdateGame',
        name: 'hotUpdateGame',
        component: getPage('hotUpdateGame')
      },
      {
        path: 'hotUpdateApp',
        name: 'hotUpdateApp',
        component: getPage('hotUpdateApp')
      }
    ]
  },
  {
    path: '/newRi', // 新锐
    name: 'newRi',
    component: getPage('newRi'),
    redirect: 'newRi/newRiGame',
    children: [
      {
        path: 'newRiGame',
        name: 'newRiGame',
        component: getPage('newRiGame')
      },
      {
        path: 'newRiApp',
        name: 'newRiApp',
        component: getPage('newRiApp')
      }
    ]
  },
  {
    path: '/activity', // 专题
    name: 'activity',
    component: getPage('activity'),
    redirect: 'activity/activityNew',
    children: [
      {
        path: 'activityNew',
        name: 'activityNew',
        component: getPage('activityNew')
      },
      {
        path: 'activityHot',
        name: 'activityHot',
        component: getPage('activityHot')
      }
    ]
  },
  {
    path: '/activityDetails', // 专题详情
    name: 'activityDetails',
    component: getPage('activityDetails')
  },
  {
    path: '/historyVersion',
    name: 'historyVersion',
    component: getPage('historyVersion')
  },
  {
    path: '/netError',
    name: 'netError',
    component: getPage('netError')
  },
  // 404需要放置最底部
  {
    path: '/notFound', // 404页面
    name: 'notFound',
    component: getPage('notFound')
  },
  {
    path: '*',
    redirect: '/notFound'
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes
})

// TODO:路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.hideFootTip) {
    next()
  } else {
    next()
  }
})

export default router
