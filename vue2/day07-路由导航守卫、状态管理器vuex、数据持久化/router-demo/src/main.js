/*前端系统 -- SPA、MPA、微前端
   SPA -- single page application -- 单页应用
   整个应用只有一个html页面，其他都是通过切换组件来实现页面切换
  在工程化下：
  依赖已经安装好vue框架，所以在这里要进行模块化开发
  1.CommonJS --nodejs的服务端开发;导入 --> require ；导出 --> module.export或者exports
  2.ES6 --导入 --> import xxx from '模块路径'；导出 --> export或者export default；
*/
import Vue from 'vue'
import app from '@/App.vue'
import router from '@/router'
new Vue({
  el: '#app',
  router: router,
  render : function (creteElment) { 
    return  creteElment(app)
  }
})
