// vue.config.js
module.exports = {
  // 选项
  // baseUrl 从 Vue CLI 3.3 起已弃用
  // 部署应用包时的基本 URL
  publicPath: './',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录，默认是dist
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: '',
  // 配置url代理 可配置多个
  // devServer: {
  //   proxy: {
  //     '/': {
  //       target: 'http://192.168.1.105:8080',
  //       changeOrigin: true,
  //     },
  //     // 'api': {
  //     //   target: 'http://www.example.org', // target host //目标主机
  //     //   changeOrigin: true, // needed for virtual hosted sites //需要虚拟主机站点
  //     //   ws: true, // proxy websockets //代理的WebSockets
  //     //   pathRewrite: { //重写路径
  //     //     '^/api/old-path': '/api/new-path', // rewrite path
  //     //     '^/api/remove/path': '/path' // remove base path
  //     //   },
  //     //   router: { // 路由
  //     //     // when request.headers.host == 'dev.localhost:3000',
  //     //     // override target 'http://www.example.org' to 'http://localhost:8000'
  //     //     'dev.localhost:3000': 'http://localhost:8000'
  //     //   }
  //     // }
  //   }
  // },
  
  // 关闭 eslint
  lintOnSave: false
}