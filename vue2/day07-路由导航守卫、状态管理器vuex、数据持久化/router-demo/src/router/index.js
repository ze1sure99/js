/**
 * 定义路由
 */
import Router from 'vue-router'
import Vue from 'vue'
import Login from '../views/login'
import Home from '../views/home/index.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import todos from '@/views/home/todos.vue'
import ana from '@/views/home/ana.vue'

/**
 * router是一个插件，所以需要Vue来注册使用才会有vue-router的全局组件
 */

Vue.use(Router)

const router = new Router({
    mode:'hash',
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            components:{
                default:Login,
                nav:Nav,
                footer:Footer
            }
        },
        {
            path:'/home',
            components:{
                default:Home,
                nav:Nav,
                footer:Footer
            },
            beforeEnter:function(to,from,next){
                console.log('---------------beforeEnter',to)
                next()
            },
            children:[
                {
                    path: 'todos',
                    component: todos
                },
                {
                    path: 'ana',
                    component:ana 
                }
            ]
        }
    ]
})

/**
 * 判断用户是否已经登录，常用的手段为：校验用户登录后的token数据是否正确
 * 这里是校验token的正确性，所以使用sessionStorage来存储token
 */
router.beforeEach(function(to,from,next){
    //    debugger;
       console.log('---------------------- before each',to)
       if(to.path==='/home'){
        /**判断用户是否登录，如果没有登录需要重新跳转到login去登录 */
        const token = sessionStorage.getItem('token')
        if(token){
             next()
        }
        else{
            next('/login')
        }
    }else {
            next()
        }

}
)

export default router
