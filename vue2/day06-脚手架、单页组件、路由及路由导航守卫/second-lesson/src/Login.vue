<template>
    <div>
        <h3>登陆页面</h3>
        <p>
            <button @click="login">登录</button>
        </p>
    </div>
</template>

<script>
 export default {
    name: 'Login',
    methods: {
        login() {
            this.$router.push('/home')
        }
    }
 }
</script>