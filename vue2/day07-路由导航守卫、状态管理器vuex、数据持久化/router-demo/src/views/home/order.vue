<template>
    <div>
       <h3>今天的bug{{this.$route.params.id}}已处理</h3>
    </div>
</template>

<script>
 export default {
    name:'order',
     data(){
         return {

         }
     },
     methods:{

     },
     created(){
         console.log(this.$route)
     }
 }

</script>