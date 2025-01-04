<!-- 在vue框架里边，可以定义一个vue文件，这个文件执行的时候，会被编译成一个文件 -->
<!-- 脚手架中vue-loader这个编译器来把vue编译成js -->
<!-- 每一个vue文件由三个部分组成：html片段--template模块、js片段-- script、css片段--style -->
<!-- 因为template会被编译成一个render方法 ，接下来会把编译后的render方法合并到组件对象里边，那么一个对象两个相同属性，后来的属性会覆盖前面的属性值-->
<template>
    <div>
        <h1 class="my-cls" :style="{color:color}">好好学习，天天向上</h1>
        <div class="my-txt">我的样式测试</div>
        <hr/>
        <Child></Child>
    </div>
</template>

<script>
   import Child from './Child.vue';
   /*如果要使用外部组件，那么必须先引入外部组件*/
    // export default {
    //     data(){
    //         return {
    //             color:'red'
    //         }
    //     }
    // }
    export default {
     name: 'App',  // 确保组件有一个有效的 name
//      data() {
//        return {
//           color: 'red'  // 确保 color 数据被定义
//        };
//   },
     components: {
         Child  // 组件引用正确
  }
};
</script>
<!-- 为了避免样式覆盖，可以使用作用域样式，在style标签添加一个scoped属性 -->
 <!-- scoped原理 给template中的所有元素添加一个data-v-hash值，所有的样式都会添加一个属性选择器 -->
<style lang="less" scoped>
@color:red;
/*如果子组件想要用到当前作用域样式，需要做一个样式穿透，可以使用v-deep*/

::v-deep .my-cls{
    font-size: 16px;
    font-weight: 400;
    color: @color;
}
// .my-cls{
//     font-size: 16px;
//     font-weight: 400;
//     color: @color;
// }
.my-txt{
    font-size: 14px;
    color: blue;
}
</style>
