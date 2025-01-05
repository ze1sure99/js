<template>
    <div>
        <h3>OA  系统首页</h3>
        <hr/>
        <button @click="toDos">代办</button>
        <!-- 子路由跳转，必须是父路由+‘/’+子路由名字 -->
        <button @click="toAnalysis">统计</button>
        <hr/>
        <router-view></router-view>
        <hr/>
    </div>
</template>

<script>
    export default{
        name:'Home',
        methods:{
            toAnalysis(){
               this.$router.push('/home/analysis')
            },
            toDos(){
                this.$router.push('/home')
            }

        }
    }   
</script>