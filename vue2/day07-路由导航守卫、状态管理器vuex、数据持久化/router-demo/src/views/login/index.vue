<template>
   <div>
     <h3>用户登录 -- {{ companyName }} </h3>
     <p>
        <input type="text" placeholder="请输入你的名字" v-model="myName">
        <!-- <button @click="save">保存到vuex</button> -->
     </p>
     <p>
        <button @click="login('zzxyyds')">用户登录(用户名保存到vuex)</button>
     </p>
   </div>

</template>
<script>
 export default {
  name: 'Login',
  created(){
      console.log(this.$store)
      /**这里的赋值 后边的数据更新不会触发 因为created声明周期只会在组件初始化时才会执行 */
      // this.userName = this.$store.getters.userName //替换为计算属性
      // this.userName = this.$store.state.userInfo.userName //在开发中不允许这样使用因为直接操作状态管理器中的数据
           
   },
   computed: {
       userName(){
           return this.$store.getters.userName
       }
       
   },
  data () {
    return {
      companyName: '华为',
      // userName: '', //替换为计算属性
      myName:''
    }
  },
  methods: {
   login(str){
      console.log(str)
      // 在跳转之前设置用户的sessionStorage来实现token缓存
      sessionStorage.setItem('token',str) 
      this.$store.commit('setUserInfo',{userName:this.myName})
      this.$router.push({
         path:'/home',
         query:{
            name: this.userName,
            id:3
         }
      })
   },
   // save(){
   //    /**如果不需要vuex异步处理数据，那么提交更新就可以了 */
   //    /**commit(调用mutation中的方法来更新数据,)*/
   //    this.$store.commit('setUserInfo',{userName:this.myName})
   //    // this.userName = this.$store.getters.userName

   // }
  }
}

</script>