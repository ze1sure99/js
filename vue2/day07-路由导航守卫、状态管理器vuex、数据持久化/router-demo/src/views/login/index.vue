<template>
   <div>
     <h3>用户登录</h3>
     <p>
        <button @click="login('zzxyyds')">用户登录</button>
     </p>
   </div>

</template>
<script>
 export default {
  name: 'Login',
  data () {
    return {
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