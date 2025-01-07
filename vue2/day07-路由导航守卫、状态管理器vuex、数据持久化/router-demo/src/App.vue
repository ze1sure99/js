<template>
    <div id="app">
      <router-view name="nav"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>