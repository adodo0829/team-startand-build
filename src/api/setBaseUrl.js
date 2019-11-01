/**
 * @description 环境变量: 接口基地址配置
 * @author huhua
 * @date 2019-09-22
 */

let buildEnv = process.env.VUE_APP_ENV

const K_V = [
  ['development', 'http://192.168.9.xxx:8082'],
  ['test', 'http://192.168.9.xxx:8082'],
  ['production', 'address3']
]

const URL_MAP = new Map(K_V)

export default URL_MAP.get(buildEnv)
