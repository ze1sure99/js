<template>
    <div id="app">
        <h2>OA 系统</h2>
        <!-- 指定路由的所有组件在这里渲染，原理就是动态组件 -->
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>