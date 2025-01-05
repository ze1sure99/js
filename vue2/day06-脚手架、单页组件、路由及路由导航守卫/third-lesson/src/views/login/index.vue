<template>
    <div>
        <h3>
            登陆页面
        </h3>
        <p>
            用户名:<input type="text" v-model="username"></input>
        </p>
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
          return {
              username: '',
              id:1
          }
        },
    methods: {
        login() {
            /* 查询参数 -- query  -- url地址里面的？*/
            // this.$router.push('/home?name='+this.username)
            //push方法可以接收一个对象
            this.$router.push({
                path: '/home',
                query: {
                    name: this.username,
                    id: this.id
                }
            })
        }
    }
}
</script>