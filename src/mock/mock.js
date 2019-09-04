// express + mockjs 搭建接口服务器
let Mock = require('mockjs')
let express = require('express')
let app = express()

let bodyParser = require('body-parser') // 解析post请求

// mock 数据相关 api
let homeAPI = require('./home')
let specialAPI = require('./special')
let appAPI = require('./app')

app.use(bodyParser.json())

// 设置跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  // 此处根据前端请求携带的请求头进行配置
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
  next()
})

// 1.首页接口: post
app.post('/android/home', (req, res) => {
  // 模拟超时
  // setTimeout(() => {
  //     res.json(Mock.mock(homeAPI.getHome(req)));
  // }, 12000);
  res.json(Mock.mock(homeAPI.getHome(req)))
  console.log('请求首页数据成功...')
})

// 2.专题接口: post
app.post('/android/special/list', (req, res) => {
  res.json(Mock.mock(specialAPI.getSpecialList(req)))
  console.log('请求专题列表数据成功...')
})
app.post('/android/special/detail', (req, res) => {
  res.json(Mock.mock(specialAPI.getSpecialDetail(req)))
  console.log('请求专题详情数据成功...')
})

// 3.APP 应用接口: post
app.post('/android/special/app', (req, res) => {
  res.json(Mock.mock(appAPI.getAppList(req)))
  console.log('请求app列表数据成功...')
})

app.listen('3000', () => {
  console.log('mock服务器启动ing中... port: 3000')
})
