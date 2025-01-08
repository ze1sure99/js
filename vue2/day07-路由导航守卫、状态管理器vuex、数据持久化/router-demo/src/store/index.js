/**
 * 
 * 状态管理器 -- 优点：数据全局共享、数据可预测化
 * 因为它是一个插件，所以需要全局注册插件
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token:'',
    userInfo:{
       userName:''
    }
  },
  // 如果要使用外部数据，我们需要定义一个getter方法供外部使用
  // getter方法 定义的时候是方法 访问的时候是值
  getters:{
    // 这里的_state就是state getter方法vuex底层会做二次封装为一个getter方法，
    token(_state){
          return _state.token
    },
    userName(_state){
          return _state.userInfo.userName
    }

  },
  // 所有的mutations方法都是同步的，不能执行异步函数
  //状态数据可预测化，就决定了实现一个发布订阅，数据更新后会发布更新消息，而更新消息在mutations方法中发布
  //如果存在异步，发布出去的消息是假消息
  mutations: {
    setUserInfo(_state,newUserInfo){
      // 修改数据，这个方法不能执行异步函数
        _state.userInfo = newUserInfo
    }

  }
})


export default store