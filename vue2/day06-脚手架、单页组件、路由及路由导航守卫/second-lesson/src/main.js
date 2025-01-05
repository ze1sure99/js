import Vue from "vue";
import app from "./App.vue";
import Router from "vue-router";
import Login from "./Login.vue";
import Home from "./Home.vue";

// new Vue({
//     el:"#app",
//     // render:function(createElement){
//     //     return createElement(app)
//     // }
//     render:(createElement)=>createElement(app)
// })

/*前端系统 -- SPA、MPA、微前端
   SPA -- single page application -- 单页应用
   整个应用只有一个html页面，其他都是通过切换组件来实现页面切换
  在工程化下：
  依赖已经安装好vue框架，所以在这里要进行模块化开发
  1.CommonJS --nodejs的服务端开发;导入 --> require ；导出 --> module.export或者exports
  2.ES6 --导入 --> import xxx from '模块路径'；导出 --> export或者export default；
*/
/* 因为系统存在多个页面组件，组件内部可以实现页面组件的切换，必须实现路由管理*/
/**需要引入vue框架的三大插件之一  vue-router
 * 并且vue2 最多用到路由3版本 
 * 因为是插件，所以需要安装: npm i -S vue-router@3
 */

/**实例化 -- 实例化可以传递的参数*/
// routes ?: RouteConfig[];
// mode ?: RouterMode;
// 引入路由组件 来进行路由注册
Vue.use(Router)
const router = new Router(
    /**指定路由模式：abstract -- 抽象，几乎不用；history --浏览器history模式；hash --hash模式 */
    {   
        /**路由模式有哪些？
         * 这些模式的实现原理：
         * hash:vue-router这个插件会监听一个hashchange事件 然后根据当前的hash值来进行页面组件切换； 路由取值是取laction.hash
         * history:是通过调用history对象的pushState和replaceState方法来实现的；路由取值是取location.pathname
         */
        mode:'hash',
        /**
         * 配置路由（url地址）与组件的关系
         */
        routes:[
            /**每一个对象表示一个路由规则：路由（path）是什么，他对应的路由组件(component )是什么 */
           {
             path:'/login',
             component: Login
           },
           {
            path:'/Home',
            component: Home
           }

        ]
    }
)
new Vue({
    el:"#app",
    // 把router实例注入到全局中去
    router:router,
    // render:function(createElement){
    //     return createElement(app)
    // }
    // render:(createElement)=>createElement(app)
    render:createElement=>createElement(app)
})
/** 路由在使用的时候，必须满足四个步骤：
 *  1.因为是插件，所以必须把插件注册全局上：Vue.use(插件)
 *  2.需要对路由模式和路由规则进行配置，所以需要实例化
 *  3.需要把我们的路由实例注册到全局上，所以在new Vue的参数上添加router属性
 *  4.需要指定路由组件在哪里进行渲染，这里需要使用一个vue-router的全局组件router-view
 */