<template>
    <div class="list">
        <h2 v-for="(item,index) in showList" :key="index">{{item.content}}</h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            listData:[
                {
                    id:1,
                    type:1,
                    content:"我是type为1的列表"
                },
                {
                    id:2,
                    type:1,
                    content:"好巧啊楼上我也是"
                },
                {
                    id:3,
                    type:2,
                    content:"我是type为2的列表"
                },
                {
                    id:4,
                    type:2,
                    content:"好巧啊楼上我也是"
                },
                {
                    id:5,
                    type:3,
                    content:"我是type为3的列表"
                },
                {
                    id:5,
                    type:3,
                    content:"好巧啊楼上我也是"
                }
            ],
            showList:[],
            condition:1
        }
    },
    computed: {
        shuju(){
            
        }
    },
    created() {
        console.log(this.$route.params.id,"99999999999999999999");
        this.condition=this.$route.params.id;
        this.showList==this.listData.filter(item=>{
            return item.type==this.condition
        });
        console.log(this.showList)
    },
}
</script>
