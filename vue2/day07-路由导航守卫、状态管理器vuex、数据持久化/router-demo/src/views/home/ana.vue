<template>
    <div>
      <hr>
      <h3>今日待修复的Bug</h3>
    <ul>
      <li v-for="bug in bugs" :key="bug.id">
        {{ bug.content }} &nbsp; <button @click="order(bug.id)">处理</button>
      </li>
    </ul>
    </div>
</template>


<script>
  export default {
    name: 'Ana',
    data() {
      return {
        bugs: [
        {
          "id": 1,
          "content": "我今天的bug还没有修复1"
        },
        {
          "id": 2,
          "content": "我今天的bug还没有修复2"
        },
        {
          "id": 3,
          "content": "我今天的bug还没有修复3"
        },
        {
          "id": 4,
          "content": "我今天的bug还没有修复4"
        },
        {
          "id": 5,
          "content": "我今天的bug还没有修复5"
        }
      ]
      }
    },
    methods:{
      order(id){
        this.$router // 获取路由实例
        .push({
          name: 'orderPath',
          params: {
            id: id 
          }
        })
      }
    }
  }

  
</script>