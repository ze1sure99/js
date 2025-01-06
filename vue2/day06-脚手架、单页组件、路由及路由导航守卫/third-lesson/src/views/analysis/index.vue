<template>
    <div>
        <h3>我的系统分析页面</h3>
        <hr />
        <ul>
            <li v-for="(item, index) in list" :key="item.id">
                {{ item.title }} <button @click="handle(item.id)">处理</button>
            </li>
        </ul>
    </div>
</template>


<script>

export default {
    data() {
        return {
            list: Array(7).fill().map((_, i) => ({
                id: 'id-' + i,
                title: '我昨天的bug一定修改' + i
            })
            )
        }
    },
    name: 'system-analysis',
    methods: {
        handle(id) {
            // this.$router.push({
            //     path: '/order/'+id,
            // })
            // 可以使用命名路由+对象来进行路由跳转
            //params对象传参，那么key必须是定义的动态路由key
            this.$router.push({
                name: 'orderPath',
                params: {
                    orderId: id 
                }

            })
            console.log('处理')
        }
    }
}
</script>