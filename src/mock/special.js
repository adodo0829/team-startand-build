let Mock = require('mockjs')
let Random = Mock.Random
// 专题模块
// 1.专题列表
let specialList = []
let total = 100
// 准备 100 条专题列表数据
for (let index = 0; index < total; index++) {
  specialList.push(
    Mock.mock({
      id: '@increment',
      title: '@ctitle',
      desc: '<p>' + Random.cparagraph() + '</p>',
      icon: 'photo/special/1380/special_1380.jpg',
      view_count: '@natural(60, 1000)',
      comment_count: '@natural(60, 100)',
      save_money: '@float(10, 50, 2, 2)',
      app_count: '@natural(10, 100)',
      detail_icon:
        'https://images.tutuapp.com/photo/special/000/001/' +
        '@natural(100, 200)' +
        '/414x155.jpg'
    })
  )
}

module.exports = {
  getSpecialList: config => {
    // 参数解析
    // console.log(config.body)
    // eslint-disable-next-line camelcase
    // let { page = 1, size, lang, order_by } = config.body
    // let tempList = []
    // let pageList
    // 排序类型
    // eslint-disable-next-line camelcase
    // tempList = order_by === 'view' ? specialList.reverse() : specialList
    // console.log(tempList);
    // 分页处理
    // pageList = tempList.filter(
    //   (item, index) => index < page * size && index >= (page - 1) * size
    // )
    // 返回处理结果, 这里没做异常状态码处理
    // return {
    //   status: {
    //     code: 0,
    //     message: '请求成功',
    //     time: '2019-07-03 16:45:12'
    //   },
    // data: pageList
    // }
  },
  getSpecialDetail: config => {
    // let { id, page = 1, size, lang } = config.body
    return {
      status: {
        code: 0,
        message: '请求成功',
        time: '2019-07-03 16:45:12'
      },
      data: {
        detail: specialList[Math.ceil(1 + Math.random() * 98)],
        total: Math.ceil(Math.random() * 100)
      }
    }
  }
}
