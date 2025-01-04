import Vue from 'vue'
import App from './App.vue'
/*
  在页面上编写vue的时候，需要通过script引入vue文件
  在工程化下：
  依赖已经安装好vue框架，所以在这里要进行模块化开发
  1.CommonJS --nodejs的服务端开发;导入 --> require ；导出 --> module.export或者exports
  2.ES6 --导入 --> import xxx from '模块路径'；导出 --> export或者export default；
*/
Vue.config.productionTip = false
// const app = {
//   render(createElement){
//     return createElement
//     (
//       'h1',
//       {
//       style:{
//         color:'red'
//       }
//       },
//       [
//         '好好学习，天天向上...'
//       ])
//   }
// }
new Vue({
  render(createElement){
    //createElemet(元素名，元素属性，元素的子元素),也可以createElment(组件)
     return createElement(App)
  }
}).$mount('#app')
