/**
 * @time 2019-9-01
 * @author huhua
 * @describe vue-cli 3.x配置文件
 */

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// 配置项
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: '0.0.0.0',
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    // open: true, // 配置自动启动浏览器
    hotOnly: true // 热更新
    // 配置跨域处理,只有一个代理
    // proxy: {
    // 配置自动启动浏览器
    // '/rest/*': {
    //   target: 'http://172.16.1.12:7071',
    //   changeOrigin: true,
    //   // ws: true,//websocket支持
    //   secure: false
    // },
    // '/pbsevice/*': {
    //   target: 'http://172.16.1.12:2018',
    //   changeOrigin: true,
    //   // ws: true,//websocket支持
    //   secure: false
    // }
    // }
  },
  // 样式导入
  css: {
    loaderOptions: {
      sass: {
        data: `@import "assets/styles/index.scss";`
      }
    }
  },
  // 别名设置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'views': resolve('src/views'),
        'utils': resolve('src/utils'),
        'api': resolve('src/api')
      }
    }
  }
}
