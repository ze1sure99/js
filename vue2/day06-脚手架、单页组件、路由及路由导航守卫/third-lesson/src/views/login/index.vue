<template>
    <div>
        <h3>
            登陆页面
        </h3>
        <button @click="login">登录</button>
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