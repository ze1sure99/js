<template>
   <div>
     <h3>用户登录 -- {{ companyName }} -- {{ userName }}</h3>
     <p>
        <button @click="login('zzxyyds')">用户登录</button>
     </p>
   </div>

</template>
<script>
 export default {
  name: 'Login',
  created(){
      console.log(this.$store)
      // this.userName = this.$store.state.userInfo.userName //在开发中不允许这样使用因为直接操作状态管理器中的数据
  },
  data () {
    return {
      companyName: '华为',
      userName: ''
    }
  },
  methods: {
   login(str){
      console.log(str)
      // 在跳转之前设置用户的sessionStorage来实现token缓存
      sessionStorage.setItem('token',str) 
      this.$router.push({
         path:'/home'
      })
   }
  }
}

</script>