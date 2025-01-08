/**
 * 
 * 状态管理器 -- 优点：数据全局共享、数据可预测化
 * 1. 因为它是一个插件，所以需要全局注册插件
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token:'',
    userInfo:{
       userName:'zhangsan'
    }
  },
  // 如果要使用外部数据，我们需要定义一个getter方法供外部使用

  mutations: {
    
  }
})


export default store