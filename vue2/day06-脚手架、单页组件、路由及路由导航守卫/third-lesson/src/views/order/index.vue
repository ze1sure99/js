<template>
  <div>
    <h3>工单页面</h3>
    <router-view name="footer"/>
  </div>
</template>

<script>
  export default {
    //一般跳转过来的参数放在这里
    created(){
        console.log(this.$route)
        //动态路由的参数可以在this.$route.params中获取
        this.orderId = this.$route.params.id
        //获取路由固定参数
        console.log(this.$route.meta)
    },
    name: 'Order',
    data () {
      return {
        orderId:''
      }
    }
  }
</script>