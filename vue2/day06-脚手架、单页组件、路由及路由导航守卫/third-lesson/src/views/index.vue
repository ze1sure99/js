<template>
    <div id="app">
        <!-- 这里的名字一定要和routes配置的components名字一样 -->
        <router-view name="nav"></router-view>
        <router-view></router-view>
        <router-view name="footer"></router-view> 
    </div>
</template>


<script>
    export default {
        name: 'app'
    }
</script>
