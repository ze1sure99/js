<template>
    <div>
        <h3>首页</h3>
        <p>
            <button @click="logout">退出系统</button>
        </p>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      logout () {
        console.log(this)
        //使用函数导航来进行页面跳转
        //push方法 表示要在history中添加一条路由跳转的信息，history是一个数组，所以添加记录叫push
        this.$router.push('/login')
      }
    }
  }

</script>