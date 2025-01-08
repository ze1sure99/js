<template>
    <div>
        <router-view name="nav"></router-view>
        <h3>OA  系统首页 -- 欢迎您 {{username}}</h3>
        <hr/>
        <button @click="toDos">代办</button>
        <!-- 子路由跳转，必须是父路由+‘/’+子路由名字 -->
        <button @click="toAnalysis">统计</button>
        <hr/>
        <router-view></router-view> 
        <router-view name="footer"></router-view>
        </div>
</template>

<script>
    export default{
        data(){
            return{
              username:''      
            }
        },
        //在created生命周期中 接受参数
        created(){
            //**获取路由传递的查询参数  */
            console.log(this.$route)
            this.username = this.$route.query.name
        },
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