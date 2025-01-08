<template>
    <div>
        <h3>用户首页 -- {{ userName }}</h3>
        <!-- <p>
           <input type="text">
        </p>
        <p>
           <input type="text">
        </p>
        <p>
           <input type="text">
        </p> -->
        <!-- <router-link to="/home/todos">todos</router-link>
        &nbsp;
        <router-link to="/home/ana">ana</router-link>
        <router-view></router-view> -->
        <button @click="todos">我的代办</button>
        &nbsp;
        <button @click="ana">我的分析</button>
        <br>
        <router-view></router-view>
        <button @click="logout()">退出系统</button>
    </div>
</template>

<script>

 export default {
    name: 'Home',
    data() {
        return {

        }
    },
    created() {
        console.log(this.$route)
    },
    computed:{
        userName(){
            return this.$store.getters.userName
        }
    },
    /*页面守卫*/
    //主要用于一些保密性很强的系统,在进入页面的时候，需要做一个二次认证
    beforeRouteEnter(to, from, next) {
        let flag = confirm('确定要进入系统？')
        if (flag) {
            next()
        }  
    },
    //当用户要离开页面的时候需要做的拦截
    // beforeRouteLeave(to, from, next) {
    //     let flag = confirm('确定要放弃页面保存的数据')
    //     if (flag) {
    //         next()
    //     }  
    // },
    /*它只会在有子路由的页面组件中有效(这个没啥用*/ 
    // beforeRouteUpdate(to, from, next) {
    //     console.log("---------------------------- beforeRouteUpdate",to)
    //     next()
    // },

    methods: {
        logout() {
            this.token = sessionStorage.getItem('token')
            sessionStorage.removeItem('token')
            this.$router.push('/login')
        },
        todos(){
            this.$router.push('/home/todos')
        },
        ana(){
            this.$router.push('/home/ana')
        }
    }
}

</script>