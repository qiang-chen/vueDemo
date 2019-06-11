<template>
    <div>
       <!-- 调用列表组件 -->
        <list :product='product'></list>
    </div>
</template>

<script>
//引入我们的列表组件
import list from "@/components/listitem";
//引入辅助工具
import {mapActions,mapState} from "vuex";
export default { 
    computed:{
        //引入仓库里的数据
        ...mapState({
            product:state=>state.list.product
        })
    },
    //注册组件
    components: {
        list
    },
    created(){
        //从这里发送网络请求来触发异步函数
        this.getList()
    },
    methods: {
        ...mapActions({
            getList:"list/getList"
        })
    }
}
</script>
