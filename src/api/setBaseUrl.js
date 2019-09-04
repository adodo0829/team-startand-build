let buildEnv = process.env.VUE_APP_BUILD

let baseUrl = ''

switch (buildEnv) {
  case 'development':
    baseUrl = '开发接口地址'
    break
  case 'test':
    baseUrl = '测试接口地址'
    break
  case 'production':
    baseUrl = '正式接口地址'
    break
  default:
    baseUrl = '测试接口地址'
    break
}

export default baseUrl
